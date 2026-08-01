import type { Profile } from "./types";

/**
 * ─────────────────────────────────────────────────────────────
 *  The ABOUT page reads entirely from this object.
 *  Every visible string has a `ja` and an `en` form, so switching
 *  language changes the whole page, not just part of it.
 * ─────────────────────────────────────────────────────────────
 */
export const profile: Profile = {
  portrait: "/images/about/portrait.jpg",

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
      "はじめまして、Chikara_Techです。2019年から、シンガポールと日本の受託開発の現場で、Webシステム・業務システム・モバイルアプリの開発に携わってきました。",
      "金融決済、医療、物流、EC、不動産、飲食チェーンの社内ツールまで、業界も規模も異なるプロジェクトを担当してきました。Java (Spring Boot)、Go、Python (FastAPI)、Node.js (NestJS) によるバックエンドを軸に、React / Vue.js (Nuxt.js) / React Native でのフロントエンド・モバイル開発まで一貫して対応しています。",
      "リリースの日は華やかですが、その後何年も使われるシステムにとって本当に大切なのは、誰が見ても理解できるコード、変更が発生しても壊れにくい設計、運用する方が困らない仕組みだと考えています。",
      "完全フルリモートでの業務委託も経験しており、Slackでの進捗の即時共有、Gitのブランチ運用の事前すり合わせ、API仕様書の早期共有など、認識のズレを減らす進め方を大切にしています。こうした部分が品質と納期を大きく左右すると考えています。",
    ],
    en: [
      "I'm Chikara_Tech. Since 2019 I've built web systems, business systems and mobile apps at software agencies in Singapore and Japan.",
      "I've delivered across payments, healthcare, logistics, e-commerce, real estate and internal tooling for restaurant chains. My core is backend work in Java (Spring Boot), Go, Python (FastAPI) and Node.js (NestJS), extending through to front-end and mobile with React, Vue.js (Nuxt.js) and React Native.",
      "Launch day is the exciting part, but for a system that will run for years what actually matters is code anyone can read, a design that doesn't break when requirements move, and something the people operating it can live with.",
      "I've also worked fully remote on contract. Sharing progress in Slack as it happens, agreeing Git branching rules up front, publishing API specs early — closing gaps in understanding is what decides both quality and whether the deadline holds.",
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
        { ja: "スクレイピング・業務自動化・AI連携", en: "Scraping, workflow automation, AI integration" },
        { ja: "AWS / Docker 環境構築、CI/CD整備", en: "AWS and Docker setup, CI/CD" },
        { ja: "既存システムの改修・保守・機能追加", en: "Refactoring, maintenance and feature work" },
        { ja: "コーポレートサイト・LP制作、WordPress構築", en: "Corporate sites, landing pages, WordPress" },
      ],
    },
    {
      title: { ja: "経験のある業界", en: "Industries" },
      items: [
        { ja: "金融・決済 (FinTech)", en: "Finance and payments (FinTech)" },
        { ja: "医療", en: "Healthcare" },
        { ja: "物流", en: "Logistics" },
        { ja: "EC・アパレル", en: "E-commerce and apparel" },
        { ja: "不動産", en: "Real estate" },
        { ja: "飲食チェーン", en: "Restaurant chains" },
        { ja: "中小企業向け業務システム", en: "SMB business systems" },
      ],
    },
  ],

  experience: [
    {
      period: { ja: "2025年10月 〜 2026年5月", en: "Oct 2025 — May 2026" },
      title: {
        ja: "株式会社オヤテック / フルスタックエンジニア（業務委託・フルリモート）",
        en: "Oyatech Inc. — Full-Stack Engineer (contract, fully remote)",
      },
      body: {
        ja: "中小企業向けの案件進捗・売上・顧客情報を一元管理するWebシステムをフルスクラッチで新規構築。Java (Spring Boot) で認証・権限管理・案件データのREST APIを設計・実装し、React / TypeScript でカレンダー形式のスケジュール画面とカンバンボードUIを担当しました。フルスタックエンジニア2名と機能単位で分担し、Gitのブランチ運用を事前に合意することで遠隔開発でのコンフリクトを回避。AWS (EC2 / RDS) へのDockerデプロイ手順を標準化し、予定通りの納期でローンチしました。",
        en: "Built, from scratch, a system that unifies project progress, revenue and customer data for a small-business client. Designed and implemented the authentication, permissions and project-data REST APIs in Java (Spring Boot), and built the calendar schedule view and kanban board UI in React and TypeScript. Work was split by feature across three full-stack engineers; agreeing Git branching rules up front kept a fully remote team clear of conflicts. Standardised Docker deployment to AWS (EC2 / RDS) and shipped on the planned date.",
      },
    },
    {
      period: { ja: "2019年9月 〜 2024年12月", en: "Sep 2019 — Dec 2024" },
      title: {
        ja: "株式会社Codigo（シンガポール）/ ソフトウェアエンジニア（正社員）",
        en: "Codigo Pte. Ltd. (Singapore) — Software Engineer (full-time)",
      },
      body: {
        ja: "多業界向けのWebシステム・モバイルアプリの受託開発に従事。不動産向けのAI画像解析基盤 (Python / FastAPI)、決済処理API (Go)、医療機関向け予約アプリ (React Native / NestJS)、アパレルECのNuxt.jsリプレイス、物流の配送ステータス管理API (Spring Boot) と、バックエンドからフロントエンド・モバイルまで横断して担当しました。",
        en: "Delivered client web systems and mobile apps across many sectors: an AI image-analysis pipeline for real estate (Python / FastAPI), a payments processing API (Go), a patient booking app for clinics (React Native / NestJS), a Nuxt.js replatform of an apparel storefront, and delivery-status APIs for logistics (Spring Boot) — spanning backend, front-end and mobile.",
      },
    },
    {
      period: { ja: "2015年9月 〜 2019年8月", en: "Sep 2015 — Aug 2019" },
      title: {
        ja: "シンガポール工科大学 (SIT) / コンピュータサイエンス学士",
        en: "Singapore Institute of Technology (SIT) — BSc Computer Science",
      },
      body: {
        ja: "コンピュータサイエンスを専攻し、学士号を取得。卒業後はそのままシンガポールの受託開発企業でキャリアを開始しました。",
        en: "Read Computer Science to a bachelor's degree, then started straight into agency development work in Singapore.",
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
        { code: "Gin", name: "Gin" },
        { code: "Ns", name: "NestJS" },
        { code: "Nd", name: "Node.js" },
        { code: "Py", name: "Python" },
        { code: "Fa", name: "FastAPI" },
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
        { code: "Bs", name: "Bootstrap" },
      ],
    },
    {
      title: { ja: "AI / データ処理", en: "AI / Data" },
      skills: [
        { code: "Pt", name: "PyTorch" },
        { code: "Cv", name: "OpenCV" },
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
        { code: "GHA", name: "GitHub Actions" },
        { code: "Sw", name: "Swagger" },
        { code: "Wp", name: "WordPress" },
        { code: "Sl", name: "Slack" },
      ],
    },
  ],

  process: [
    { ja: "要件整理・技術選定", en: "Requirements and stack selection" },
    { ja: "設計・API仕様の共有", en: "Design and API specification" },
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
