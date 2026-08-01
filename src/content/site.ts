import type { SiteConfig } from "./types";

/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT ME — everything below is placeholder content.
 *  Replace the strings, email and images with your own.
 * ─────────────────────────────────────────────────────────────
 */
export const site: SiteConfig = {
  // A studio/brand name stays the same in every language, so it is a plain
  // string rather than a Localized value.
  name: "Your Creative Studio",
  jobTitle: "Web Designer / Front-End Developer",
  email: "hello@example.com",
  url: "https://your-domain.com",
  ogImage: "/images/ogp.svg",

  tagline: {
    ja: "東京のWebデザイナー・フロントエンドエンジニア",
    en: "Web Designer & Front-End Developer in Tokyo",
  },

  location: {
    ja: "東京, 日本",
    en: "Tokyo, Japan",
  },

  description: {
    ja: "東京を拠点に活動するWebデザイナー・フロントエンドエンジニアの個人ポートフォリオです。ランディングページ、ブランドサイト、コーポレートサイトの企画・UI設計・デザイン・実装までを一貫して手がけています。",
    en: "Portfolio of a Tokyo-based web designer and front-end developer. Planning, UI design and implementation for landing pages, brand sites and corporate sites.",
  },

  social: [
    { label: "GitHub", href: "https://github.com/sweetmental1122" },
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "X", href: "https://x.com/" },
  ],

  /**
   * The eight images that orbit the home page sphere.
   * Swap these for your own artwork — square or portrait crops work best.
   */
  homeImages: [
    { src: "/images/home/01.svg", width: 1080, height: 1080 },
    { src: "/images/home/02.svg", width: 1000, height: 1413 },
    { src: "/images/home/03.svg", width: 1080, height: 1080 },
    { src: "/images/home/04.svg", width: 1080, height: 1080 },
    { src: "/images/home/05.svg", width: 1080, height: 1080 },
    { src: "/images/home/06.svg", width: 1080, height: 1080 },
    { src: "/images/home/07.svg", width: 1080, height: 1080 },
    { src: "/images/home/08.svg", width: 1080, height: 1920 },
  ],
};

/** Absolute site origin — env var wins so preview deploys resolve correctly. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? site.url).replace(/\/$/, "");
