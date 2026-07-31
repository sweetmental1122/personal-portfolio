export const LOCALES = ["ja", "en", "ko"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "ja";

/** Short labels used by the language switcher pill. */
export const LOCALE_LABELS: Record<Locale, string> = {
  ja: "JP",
  en: "EN",
  ko: "KR",
};

/** `hreflang` / `og:locale` values. */
export const LOCALE_HREFLANG: Record<Locale, string> = {
  ja: "ja",
  en: "en",
  ko: "ko",
};

export const LOCALE_OG: Record<Locale, string> = {
  ja: "ja_JP",
  en: "en_US",
  ko: "ko_KR",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Prefix a route with the active locale: `("en", "/works") -> "/en/works"`. */
export function localePath(locale: Locale, path = "/"): string {
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}
