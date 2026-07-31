"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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

    setStatus("sending");
    setError(null);

    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, locale }),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        setStatus("error");
        setError(body?.error === "validation" ? dict.contact.errorValidation : dict.contact.errorGeneric);
        return;
      }

      setStatus("sent");
      formRef.current?.reset();
      toastTimer.current = window.setTimeout(() => setStatus("idle"), 7000);
    } catch {
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
