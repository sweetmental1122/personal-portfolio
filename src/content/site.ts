import type { SiteConfig } from "./types";
import { sortedProjects } from "./works";

/**
 * ─────────────────────────────────────────────────────────────
 *  Site-wide identity.
 *  TODO: `email` is still a placeholder — set it before sharing
 *  this link on CrowdWorks / Lancers.
 * ─────────────────────────────────────────────────────────────
 */
export const site: SiteConfig = {
  // Shown in the header wordmark, the footer and every page title.
  // A personal or trade name stays the same in both languages.
  name: "Dream_Catcher",
  jobTitle: "Software Engineer / Full-Stack Developer",
  email: "hello@example.com",
  url: "https://your-domain.com",
  ogImage: "/images/ogp.svg",

  tagline: {
    ja: "フルスタックエンジニア / Webシステム・業務システム開発",
    en: "Full-Stack Engineer — Web & Business Systems",
  },

  location: {
    ja: "日本 / シンガポール",
    en: "Japan / Singapore",
  },

  description: {
    ja: "2019年からシンガポールと日本の受託開発の現場で、Webシステム・業務システム・モバイルアプリを開発してきたフルスタックエンジニアのポートフォリオです。Java (Spring Boot)、Go、Python (FastAPI)、Node.js (NestJS) によるバックエンド開発を軸に、React・Vue.js (Nuxt.js)・React Native を用いたフロントエンド／モバイル開発、AWS・Docker 環境構築、既存システムの改修・保守まで一貫して対応しています。",
    en: "Portfolio of a full-stack engineer building web systems, business systems and mobile apps at software agencies in Singapore and Japan since 2019. Backend in Java (Spring Boot), Go, Python (FastAPI) and Node.js (NestJS), through to front-end and mobile with React, Vue.js (Nuxt.js) and React Native, plus AWS/Docker setup and long-term maintenance.",
  },

  social: [{ label: "GitHub", href: "https://github.com/sweetmental1122" }],

  /**
   * The home sphere draws from the project thumbnails, so it always reflects
   * the current WORKS entries. Only a slice of them: every image here loads on
   * first paint, and the full list would put several megabytes on the landing
   * page. Taken at an even stride so the selection spans the whole list rather
   * than showing only the newest few. HomeSphere shuffles their ring positions
   * on each visit.
   */
  homeImages: (() => {
    const WANTED = 8;
    const stride = Math.max(1, Math.floor(sortedProjects.length / WANTED));
    return sortedProjects
      .filter((_, index) => index % stride === 0)
      .slice(0, WANTED)
      .map((project) => ({
        src: project.thumbnail.src,
        width: project.thumbnail.width,
        height: project.thumbnail.height,
      }));
  })(),
};

/** Absolute site origin — env var wins so preview deploys resolve correctly. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? site.url).replace(/\/$/, "");
