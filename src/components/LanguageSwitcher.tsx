"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { LOCALES, LOCALE_HREFLANG, LOCALE_LABELS, isLocale } from "@/i18n/config";

type Props = {
  locale: Locale;
  label: string;
};

/** Swaps the locale segment of the current path, keeping the reader in place. */
function swapLocale(pathname: string, next: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length && isLocale(segments[0]!)) {
    segments[0] = next;
  } else {
    segments.unshift(next);
  }
  return `/${segments.join("/")}`;
}

export function LanguageSwitcher({ locale, label }: Props) {
  const pathname = usePathname();

  return (
    <nav className="lang" aria-label={label}>
      {LOCALES.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={swapLocale(pathname, code)}
            className={active ? "is-active" : undefined}
            hrefLang={LOCALE_HREFLANG[code]}
            lang={LOCALE_HREFLANG[code]}
            aria-current={active ? "true" : undefined}
          >
            {LOCALE_LABELS[code]}
          </Link>
        );
      })}
    </nav>
  );
}
