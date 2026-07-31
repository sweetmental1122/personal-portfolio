import type { SiteConfig } from "./types";

/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT ME — everything below is placeholder content.
 *  Replace the strings, email and images with your own.
 * ─────────────────────────────────────────────────────────────
 */
export const site: SiteConfig = {
  name: "Your Creative Studio",
  jobTitle: "Web Designer / Front-End Developer",
  email: "hello@example.com",
  url: "https://your-domain.com",
  ogImage: "/images/ogp.svg",

  tagline: {
    ja: "東京のWebデザイナー・フロントエンド",
    en: "Web Designer & Front-End Developer",
    ko: "웹 디자이너 · 프론트엔드 개발자",
  },

  location: {
    ja: "東京, 日本",
    en: "Tokyo, Japan",
    ko: "도쿄, 일본",
  },

  description: {
    ja: "東京を拠点に活動するWebデザイナー・フロントエンドエンジニアの個人ポートフォリオです。LP、ブランドサイト、コーポレートサイトの企画・UI設計・デザイン・実装を一貫して行っています。",
    en: "Portfolio of a Tokyo-based web designer and front-end developer. Planning, UI design and implementation for landing pages, brand sites and corporate sites.",
    ko: "도쿄를 거점으로 활동하는 웹 디자이너 · 프론트엔드 개발자의 포트폴리오입니다. 랜딩 페이지, 브랜드 사이트, 코퍼레이트 사이트의 기획 · UI 설계 · 디자인 · 구현을 일관되게 담당합니다.",
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
