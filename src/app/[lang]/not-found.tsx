"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shell } from "@/components/Shell";
import { DEFAULT_LOCALE, isLocale, localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/**
 * `not-found.tsx` never receives route params, so the locale is recovered
 * from the path. This is why the file is a client component.
 */
export default function NotFound() {
  const pathname = usePathname();
  const first = pathname.split("/").filter(Boolean)[0];
  const locale: Locale = first && isLocale(first) ? first : DEFAULT_LOCALE;
  const dict = getDictionary(locale);

  return (
    <Shell locale={locale} page="error">
      <section className="error-hero">
        <div className="error-hero__content">
          <p className="error-hero__code">404</p>
          <h1>{dict.notFound.title}</h1>
          <p>{dict.notFound.message}</p>
          <div className="error-hero__actions">
            <Link className="pill-button pill-button--inline" href={localePath(locale)}>
              <span>{dict.notFound.goHome}</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="pill-button pill-button--inline" href={localePath(locale, "/works")}>
              <span>{dict.notFound.goWorks}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </Shell>
  );
}
