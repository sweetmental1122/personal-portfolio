"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { emailjs, type ContactPayload } from "@/content/emailjs";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export type SelectOption = { value: string; label: string };

type Props = {
  locale: Locale;
  dict: Dictionary;
  email: string;
  options: {
    projectTypes: SelectOption[];
    budgets: SelectOption[];
    deadlines: SelectOption[];
  };
};

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({ locale, dict, email, options }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const toastTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimer.current) window.clearTimeout(toastTimer.current);
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const text = (key: string) => String(data.get(key) ?? "").trim();

    // Only bots fill the hidden field. Report success so they learn nothing.
    if (text("website")) {
      setStatus("sent");
      form.reset();
      return;
    }

    setStatus("sending");
    setError(null);

    // Labels rather than values, so the email reads "1か月以内" and not
    // "1-month". The <select> option text is what the recipient wants.
    const chosen = (key: string, list: SelectOption[]) =>
      list.find((option) => option.value === text(key))?.label ?? "";

    const payload: ContactPayload = {
      name: text("name"),
      email: text("email"),
      reply_to: text("email"),
      company: text("company") || "—",
      project_type: chosen("projectType", options.projectTypes) || "—",
      budget: chosen("budget", options.budgets) || "—",
      deadline: chosen("deadline", options.deadlines) || "—",
      message: text("message"),
      locale,
    };

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: emailjs.serviceId,
          template_id: emailjs.templateId,
          user_id: emailjs.publicKey,
          template_params: payload,
        }),
      });

      if (!response.ok) {
        // EmailJS answers with a plain-text reason, worth surfacing to the
        // console: a mistyped template ID and a blocked origin look identical
        // from the outside otherwise.
        console.error("[contact] EmailJS rejected the message:", await response.text());
        setStatus("error");
        setError(dict.contact.errorGeneric);
        return;
      }

      setStatus("sent");
      form.reset();
      toastTimer.current = window.setTimeout(() => setStatus("idle"), 7000);
    } catch (cause) {
      console.error("[contact] could not reach EmailJS:", cause);
      setStatus("error");
      setError(dict.contact.errorGeneric);
    }
  };

  return (
    <>
      {error && (
        <p className="contact__error" role="alert">
          {error}
        </p>
      )}

      <form className="contact__form" ref={formRef} onSubmit={handleSubmit} noValidate={false}>
        <label className="field">
          <span>
            {dict.contact.name} <small className="is-required">{dict.contact.required}</small>
          </span>
          <input type="text" name="name" maxLength={100} autoComplete="name" required />
        </label>

        <label className="field">
          <span>
            {dict.contact.company} <small>{dict.contact.optional}</small>
          </span>
          <input type="text" name="company" maxLength={150} autoComplete="organization" />
        </label>

        <label className="field">
          <span>
            {dict.contact.email} <small className="is-required">{dict.contact.required}</small>
          </span>
          <input type="email" name="email" maxLength={254} autoComplete="email" required />
        </label>

        <label className="field">
          <span>
            {dict.contact.projectType} <small>{dict.contact.optional}</small>
          </span>
          <select name="projectType" defaultValue="">
            <option value="">{dict.contact.select}</option>
            {options.projectTypes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>
            {dict.contact.budget} <small>{dict.contact.optional}</small>
          </span>
          <select name="budget" defaultValue="">
            <option value="">{dict.contact.select}</option>
            {options.budgets.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>
            {dict.contact.deadline} <small>{dict.contact.optional}</small>
          </span>
          <select name="deadline" defaultValue="">
            <option value="">{dict.contact.select}</option>
            {options.deadlines.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="field field--wide">
          <span>
            {dict.contact.message} <small className="is-required">{dict.contact.required}</small>
          </span>
          <textarea name="message" rows={7} maxLength={5000} required />
        </label>

        {/* Bots fill this in; humans never see it. */}
        <div className="contact__honeypot" aria-hidden="true">
          <label>
            Company website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <label className="contact__consent">
          <input type="checkbox" name="consent" required />
          <span>
            <Link href={localePath(locale, "/privacy")}>{dict.contact.privacyLink}</Link>
            {" — "}
            {dict.contact.consent}
          </span>
        </label>

        <button className="pill-button contact__submit" type="submit" disabled={status === "sending"}>
          <span>{status === "sending" ? dict.contact.sending : dict.contact.submit}</span>
          <i style={{ fontStyle: "normal" }}>↗</i>
        </button>
      </form>

      <p className="contact__direct">
        {dict.contact.directEmail} <a href={`mailto:${email}`}>{email}</a>
      </p>

      <div className={`toast${status === "sent" ? " is-visible" : ""}`} role="status" aria-live="polite">
        {status === "sent" && (
          <>
            <strong>{dict.contact.successTitle}</strong>
            <span>{dict.contact.successBody}</span>
          </>
        )}
      </div>
    </>
  );
}
