import type { Locale } from "@/i18n/config";

/** A string that exists in every supported language. */
export type Localized = Record<Locale, string>;

/** Optional localized string — falls back to the default locale when partial. */
export type PartialLocalized = Partial<Record<Locale, string>>;

export function t(value: Localized | PartialLocalized | string, locale: Locale): string {
  if (typeof value === "string") return value;
  return value[locale] ?? value.ja ?? value.en ?? "";
}

/** Multi-paragraph localized copy. Each entry is one paragraph. */
export type LocalizedParagraphs = Record<Locale, string[]>;

export function paragraphs(value: LocalizedParagraphs, locale: Locale): string[] {
  return value[locale] ?? value.ja ?? [];
}

export type SiteConfig = {
  /** Shown in the marquee logo, the header and metadata. */
  name: string;
  /** Short tagline appended to the page title. */
  tagline: Localized;
  description: Localized;
  email: string;
  location: Localized;
  /** Absolute origin. Overridden by NEXT_PUBLIC_SITE_URL when set. */
  url: string;
  /** Path to the Open Graph image inside /public. */
  ogImage: string;
  jobTitle: string;
  social: { label: string; href: string }[];
  /** Images that orbit the home page sphere. */
  homeImages: { src: string; width: number; height: number }[];
};

export type ExperienceEntry = {
  period: Localized;
  title: Localized;
  body: Localized;
};

/** A titled list rendered in the two columns under the intro. */
export type CredentialGroup = {
  title: Localized;
  items: Localized[];
};

export type Skill = {
  /** Two or three character monogram shown in the tile. */
  code: string;
  name: string;
};

/** Skills are grouped so a client can scan by layer rather than one long grid. */
export type SkillGroup = {
  title: Localized;
  skills: Skill[];
};

export type Profile = {
  portrait: string;
  headline: { lead: Localized; main: Localized };
  catchphrase: Localized;
  intro: LocalizedParagraphs;
  credentials: CredentialGroup[];
  experience: ExperienceEntry[];
  skillGroups: SkillGroup[];
  process: Localized[];
  cta: { heading: Localized; body: Localized };
};

export type ProjectImage = {
  src: string;
  alt: Localized;
  width: number;
  height: number;
  /** Set to true to render a <video> instead of an <img>. */
  video?: boolean;
};

export type Project = {
  slug: string;
  title: Localized;
  /** Must match a `key` in the CATEGORIES list. */
  categoryKey: string;
  summary: Localized;
  description: LocalizedParagraphs;
  thumbnail: { src: string; width: number; height: number };
  images: ProjectImage[];
  /**
   * Optional on purpose. The detail page omits any field left out rather than
   * printing a placeholder, so an entry can go live with only what is known
   * and gain its period, scope and stack once you fill them in.
   */
  meta: {
    client?: Localized;
    role?: Localized;
    year?: string;
    stack?: string[];
  };
  liveUrl?: string;
  /** Lower numbers appear first in the ring. */
  order: number;
};

export type Category = {
  key: string;
  label: Localized;
};
