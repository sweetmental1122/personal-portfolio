import type { Profile } from "./types";

/**
 * ─────────────────────────────────────────────────────────────
 *  The ABOUT page reads entirely from this object.
 *  Every visible string has a `ja` and an `en` form, so switching
 *  language changes the whole page, not just part of it.
 * ─────────────────────────────────────────────────────────────
 */
export const profile: Profile = {
  /**
   * TODO: save your photo as `public/images/about/portrait.jpg` and change
   * this line to "/images/about/portrait.jpg". Portrait or square crops both
   * work — the frame uses object-fit: cover.
   */
  portrait: "/images/about/portrait.svg",

  // Rendered as a two-line display heading: `lead` small, `main` large.
  headline: {
    lead: {
      ja: "システムは、作った後のほうが長い。",
      en: "A system's life is mostly what comes after release.",
    },
    main: {
      ja: "だから、続く設計を。",
      en: "So I build for what comes after.",
    },
  },

  catchphrase: {
    ja: "10年後に読んでも分かるコードと、変更に強い設計を。",
    en: "Code that still reads clearly in ten years, and designs that survive change.",
  },

  intro: {
    ja: [
      "はじめまして。約10年間、ソフトウェアエンジニアとしてWebシステム・業務システムの開発に携わってきました。",
      "Java (Spring Boot)、Go、Python (FastAPI)、Node.js によるバックエンド開発を中心に、React、Vue.js (Nuxt.js)、React Native を用いたフロントエンド・モバイル開発まで一貫して対応しています。",
      "リリースの日は華やかですが、その後何年も使われるシステムにとって本当に大切なのは、誰が見ても理解できるコード、変更が発生しても壊れにくい設計、運用する方が困らない仕組みだと考えています。",
      "「言われたものを作る」だけでなく、この仕様が最適か、もっとシンプルな方法はないか、将来困るポイントはないかを確認しながら進めます。認識のズレを減らし、疑問点を早めに共有する。そうした部分が品質を大きく左右すると考えています。",
    ],
    en: [
      "Hello. I've spent around ten years as a software engineer building web and business systems.",
      "My core is backend work in Java (Spring Boot), Go, Python (FastAPI) and Node.js, extending through to front-end and mobile with React, Vue.js (Nuxt.js) and React Native.",
      "Launch day is the exciting part, but for a system that will run for years what actually matters is code anyone can read, a design that doesn't break when requirements move, and something the people operating it can live with.",
      "Rather than only building what was asked for, I check whether the spec is the best option, whether a simpler route exists, and where it will hurt later. Closing gaps in understanding early is what decides quality.",
    ],
  },

  credentials: [
    {
      title: { ja: "対応可能な業務", en: "What I take on" },
      items: [
        { ja: "Webシステム・業務システム開発", en: "Web and business system development" },
        { ja: "REST API設計・バックエンド開発", en: "REST API design and backend development" },
        { ja: "React / Vue.js によるフロントエンド開発", en: "Front-end development in React / Vue.js" },
        { ja: "React Native によるモバイルアプリ開発", en: "Mobile apps with React Native" },
        { ja: "コーポレートサイト・LP制作、WordPress構築", en: "Corporate sites, landing pages, WordPress" },
        { ja: "スクレイピング・業務自動化・AI連携", en: "Scraping, workflow automation, AI integration" },
        { ja: "AWS / Docker 環境構築", en: "AWS and Docker environment setup" },
        { ja: "既存システムの改修・保守・機能追加", en: "Refactoring, maintenance and feature work on existing systems" },
      ],
    },
    {
      title: { ja: "経験のある業界", en: "Industries I've worked in" },
      items: [
        { ja: "金融", en: "Finance" },
        { ja: "医療", en: "Healthcare" },
        { ja: "物流", en: "Logistics" },
        { ja: "EC・小売", en: "E-commerce and retail" },
        { ja: "不動産", en: "Real estate" },
        { ja: "中小企業向け業務システム", en: "Business systems for small and mid-size companies" },
      ],
    },
  ],

  experience: [
    {
      period: { ja: "受託開発会社", en: "Software agency" },
      title: {
        ja: "ソフトウェアエンジニア",
        en: "Software Engineer",
      },
      body: {
        ja: "金融・医療・物流・EC・不動産・中小企業向け業務システムなど、多様な業界の開発プロジェクトを担当。要件の整理や技術選定から、チーム開発を前提とした設計・実装まで一貫して関わってきました。",
        en: "Delivered projects across finance, healthcare, logistics, e-commerce, real estate and SMB business systems — from shaping requirements and choosing the stack through to designing and building for a team to maintain.",
      },
    },
    {
      period: { ja: "設計 〜 運用", en: "Design through operation" },
      title: {
        ja: "設計・実装・テスト・デプロイまで一貫対応",
        en: "End to end: design, build, test, deploy",
      },
      body: {
        ja: "設計から実装、テスト、AWS環境へのデプロイまで幅広く担当。保守性・拡張性・可読性を軸に、リリース後に長く使われることを前提としたシステム開発を得意としています。",
        en: "I cover the full path from design to implementation, testing and deployment on AWS, optimising for maintainability, extensibility and readability — because the system has to keep running long after launch.",
      },
    },
    {
      period: { ja: "現在", en: "Now" },
      title: {
        ja: "フリーランス / 業務委託",
        en: "Freelance and contract work",
      },
      body: {
        ja: "新規開発から既存システムの改修・保守まで柔軟に対応しています。品質・納期・コミュニケーションを重視し、状況の共有と早めの確認を徹底しながら、責任を持って最後まで対応いたします。",
        en: "Available for greenfield builds as well as refactoring and maintenance of existing systems. I hold to quality, deadlines and communication — sharing status openly and raising questions early — and see work through to the end.",
      },
    },
  ],

  // Product names are proper nouns and stay identical in both languages.
  skillGroups: [
    {
      title: { ja: "バックエンド", en: "Backend" },
      skills: [
        { code: "Ja", name: "Java" },
        { code: "Sb", name: "Spring Boot" },
        { code: "Go", name: "Go" },
        { code: "Ns", name: "NestJS" },
        { code: "Nd", name: "Node.js" },
        { code: "Py", name: "Python" },
        { code: "Fa", name: "FastAPI" },
        // Skill names are proper nouns shown as-is in both languages, so keep
        // them free of Japanese — the phrase "REST API設計" belongs in the
        // credentials list above, which is localised.
        { code: "Api", name: "REST API" },
      ],
    },
    {
      title: { ja: "フロントエンド / モバイル", en: "Frontend / Mobile" },
      skills: [
        { code: "TS", name: "TypeScript" },
        { code: "JS", name: "JavaScript" },
        { code: "Re", name: "React" },
        { code: "Vu", name: "Vue.js" },
        { code: "Nu", name: "Nuxt.js" },
        { code: "RN", name: "React Native" },
        { code: "H5", name: "HTML5" },
        { code: "C3", name: "CSS3" },
      ],
    },
    {
      title: { ja: "インフラ / 共通ツール", en: "Infrastructure / Tooling" },
      skills: [
        { code: "AWS", name: "AWS" },
        { code: "EC2", name: "EC2 / S3 / RDS" },
        { code: "λ", name: "Lambda" },
        { code: "Dk", name: "Docker" },
        { code: "Pg", name: "PostgreSQL" },
        { code: "My", name: "MySQL" },
        { code: "Rd", name: "Redis" },
        { code: "Git", name: "Git" },
        { code: "Wp", name: "WordPress" },
        { code: "Sl", name: "Slack" },
      ],
    },
  ],

  process: [
    { ja: "要件整理・技術選定", en: "Requirements and stack selection" },
    { ja: "設計", en: "Design" },
    { ja: "実装", en: "Implementation" },
    { ja: "テスト", en: "Testing" },
    { ja: "リリース・保守", en: "Release and maintenance" },
  ],

  cta: {
    heading: {
      ja: "まずは、お気軽にご相談ください。",
      en: "Let's talk about your project.",
    },
    body: {
      ja: "新規開発から既存システムの改修・保守まで柔軟に対応しております。要件が固まっていない段階のご相談も歓迎です。",
      en: "From greenfield builds to maintaining what you already run. Early-stage conversations, before the spec is settled, are welcome too.",
    },
  },
};
