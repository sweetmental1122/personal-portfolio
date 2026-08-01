import type { SiteConfig } from "./types";

/**
 * ─────────────────────────────────────────────────────────────
 *  Site-wide identity.
 *  TODO: replace `name` and `email` with your own before sharing
 *  this link on CrowdWorks / Lancers.
 * ─────────────────────────────────────────────────────────────
 */
export const site: SiteConfig = {
  // Shown in the header wordmark, the footer and every page title.
  // A personal or trade name stays the same in both languages.
  name: "Your Name",
  jobTitle: "Software Engineer / Full-Stack Developer",
  email: "hello@example.com",
  url: "https://your-domain.com",
  ogImage: "/images/ogp.svg",

  tagline: {
    ja: "Webシステム・業務システム開発 / 実務10年",
    en: "Web & business systems — 10 years of practice",
  },

  location: {
    ja: "日本",
    en: "Japan",
  },

  description: {
    ja: "約10年間、Webシステム・業務システム開発に携わってきたソフトウェアエンジニアのポートフォリオです。Java (Spring Boot)、Go、Python (FastAPI)、Node.js によるバックエンド開発を中心に、React・Vue.js・React Native を用いたフロントエンド／モバイル開発、AWS・Docker 環境構築、既存システムの改修・保守まで一貫して対応しています。",
    en: "Portfolio of a software engineer with around ten years building web and business systems. Backend work in Java (Spring Boot), Go, Python (FastAPI) and Node.js, through to front-end and mobile with React, Vue.js and React Native, plus AWS/Docker setup and long-term maintenance.",
  },

  social: [{ label: "GitHub", href: "https://github.com/sweetmental1122" }],

  /**
   * The eight images that orbit the home page sphere. Screenshots of your own
   * work read best here — dashboards, API docs, app screens. Square or
   * portrait crops fit the ring most cleanly.
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
