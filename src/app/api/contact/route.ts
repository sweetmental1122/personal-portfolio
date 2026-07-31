import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = Record<string, unknown>;

const MAX_LENGTHS: Record<string, number> = {
  name: 100,
  company: 150,
  email: 254,
  projectType: 60,
  budget: 60,
  deadline: 60,
  message: 5000,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const asString = (value: unknown): string => (typeof value === "string" ? value.trim() : "");

/**
 * Naive in-memory rate limit. Good enough to blunt casual abuse on a single
 * instance; put a real limiter (Upstash, Vercel KV) in front for production.
 */
const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < RATE_LIMIT_WINDOW);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }

  // Honeypot: only bots fill the hidden "website" field.
  if (asString(payload.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = asString(payload.name);
  const email = asString(payload.email);
  const message = asString(payload.message);
  const consent = payload.consent === "on" || payload.consent === true;

  const tooLong = Object.entries(MAX_LENGTHS).some(
    ([field, max]) => asString(payload[field]).length > max,
  );

  if (!name || !message || !EMAIL_PATTERN.test(email) || !consent || tooLong) {
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }

  const submission = {
    name,
    email,
    company: asString(payload.company),
    projectType: asString(payload.projectType),
    budget: asString(payload.budget),
    deadline: asString(payload.deadline),
    message,
    locale: asString(payload.locale) || "ja",
    receivedAt: new Date().toISOString(),
  };

  const to = process.env.CONTACT_TO;
  const apiKey = process.env.RESEND_API_KEY;

  // Without a configured provider the route validates and logs only, so the
  // form is usable in development before email delivery is wired up.
  if (!to || !apiKey) {
    console.info("[contact] submission (delivery not configured)", submission);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM ?? "Portfolio <onboarding@resend.dev>",
        to: [to],
        reply_to: submission.email,
        subject: `Portfolio enquiry — ${submission.name}`,
        text: [
          `Name:        ${submission.name}`,
          `Email:       ${submission.email}`,
          `Company:     ${submission.company || "—"}`,
          `Type:        ${submission.projectType || "—"}`,
          `Budget:      ${submission.budget || "—"}`,
          `Deadline:    ${submission.deadline || "—"}`,
          `Locale:      ${submission.locale}`,
          "",
          submission.message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      console.error("[contact] provider rejected the message", await response.text());
      return NextResponse.json({ error: "delivery" }, { status: 502 });
    }
  } catch (error) {
    console.error("[contact] delivery failed", error);
    return NextResponse.json({ error: "delivery" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}
