import type { Category, Project } from "./types";

/**
 * ─────────────────────────────────────────────────────────────
 *  ⚠️  THESE SIX ENTRIES ARE SAMPLES, NOT REAL PROJECTS.
 *
 *  They are shaped after the industries and stack in your profile so the
 *  page has something to show, but they describe work that has not
 *  happened. Replace every one with your own before sending this link to
 *  a client — publishing invented case studies as your track record
 *  would misrepresent you.
 *
 *  Keep the shape, swap the content: `slug` becomes the URL, `categoryKey`
 *  must match a CATEGORIES key, `order` sets the position in the ring.
 * ─────────────────────────────────────────────────────────────
 */

export const CATEGORIES: Category[] = [
  {
    key: "system",
    label: { ja: "業務システム・API", en: "Business Systems & API" },
  },
  {
    key: "web",
    label: { ja: "Webアプリ・フロントエンド", en: "Web Apps & Frontend" },
  },
  {
    key: "mobile",
    label: { ja: "モバイル・自動化", en: "Mobile & Automation" },
  },
  {
    key: "site",
    label: { ja: "サイト・LP制作", en: "Sites & Landing Pages" },
  },
];

export const projects: Project[] = [
  {
    slug: "logistics-delivery-system",
    order: 1,
    categoryKey: "system",
    title: {
      ja: "物流会社向け 配送管理システム",
      en: "Delivery Management System for a Logistics Company",
    },
    summary: {
      ja: "配車・進捗・実績を一元管理する業務システム。Spring Boot と React による設計から運用まで。",
      en: "A business system unifying dispatch, progress and delivery records — designed, built and maintained on Spring Boot and React.",
    },
    description: {
      ja: [
        "紙とExcelで分散していた配車情報を一つのシステムに集約しました。ドメインごとにパッケージを分け、業務ロジックをサービス層に閉じ込めることで、担当者が変わっても追える構造にしています。",
        "帳票出力や締め処理といった業務のピークに耐えられるよう、重い集計は非同期ジョブに逃がし、画面側は常に軽く保つ設計としました。",
      ],
      en: [
        "Dispatch information that had been scattered across paper and spreadsheets moved into one system. Packages are split by domain and business logic is kept inside the service layer, so the code stays followable when the team changes.",
        "Heavy aggregation for reports and period-end closing runs as asynchronous jobs, keeping the screens responsive through the busiest part of the workflow.",
      ],
    },
    thumbnail: { src: "/images/works/logistics-delivery-system/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/logistics-delivery-system/01.svg",
        alt: { ja: "配車管理画面", en: "Dispatch management screen" },
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/works/logistics-delivery-system/02.svg",
        alt: { ja: "実績集計ダッシュボード", en: "Delivery records dashboard" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "物流企業（受託開発）", en: "Logistics company (agency project)" },
      role: {
        ja: "要件整理 / 設計 / バックエンド・フロントエンド実装",
        en: "Requirements / Architecture / Backend and front-end implementation",
      },
      year: "2024",
      stack: ["Java", "Spring Boot", "React", "PostgreSQL", "AWS", "Docker"],
    },
  },
  {
    slug: "medical-reservation-api",
    order: 2,
    categoryKey: "system",
    title: {
      ja: "医療機関向け 予約・連携API",
      en: "Reservation and Integration API for Healthcare",
    },
    summary: {
      ja: "既存の院内システムと連携する予約API。Go で構築し、責務を絞った REST 設計を徹底。",
      en: "A reservation API that speaks to existing in-house systems, built in Go with a deliberately narrow REST surface.",
    },
    description: {
      ja: [
        "既存システムを止めずに段階的に置き換えられるよう、エンドポイントの責務を細かく分け、後方互換を保ったままバージョンを重ねられる構成にしました。",
        "医療情報を扱うため、アクセス制御と監査ログを設計の初期段階から組み込み、どの操作が誰によって行われたかを常に追跡できるようにしています。",
      ],
      en: [
        "Endpoints are scoped narrowly so the legacy system could be replaced in stages rather than all at once, with versions layered on while staying backward compatible.",
        "Because it handles medical data, access control and audit logging were part of the design from the start — every operation stays traceable to who performed it.",
      ],
    },
    thumbnail: { src: "/images/works/medical-reservation-api/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/medical-reservation-api/01.svg",
        alt: { ja: "API仕様ドキュメント", en: "API specification document" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "医療機関（受託開発）", en: "Healthcare provider (agency project)" },
      role: { ja: "API設計 / バックエンド実装", en: "API design / Backend implementation" },
      year: "2024",
      stack: ["Go", "PostgreSQL", "Redis", "Docker", "AWS"],
    },
  },
  {
    slug: "ec-inventory-dashboard",
    order: 3,
    categoryKey: "web",
    title: {
      ja: "EC向け 在庫・受注管理ダッシュボード",
      en: "Inventory and Order Dashboard for E-commerce",
    },
    summary: {
      ja: "複数モールの在庫と受注を横断して扱う管理画面。NestJS と Nuxt.js で構築。",
      en: "An admin surface that spans stock and orders across several marketplaces, built on NestJS and Nuxt.js.",
    },
    description: {
      ja: [
        "モールごとに異なる仕様を吸収するアダプタ層を設け、新しい販売チャネルが増えても既存コードに手を入れずに追加できる構成にしています。",
        "在庫数のずれが売上に直結するため、更新は冪等に設計し、失敗したジョブを安全に再実行できる仕組みを用意しました。",
      ],
      en: [
        "An adapter layer absorbs the differences between marketplaces, so a new sales channel can be added without touching existing code.",
        "Because stock drift costs real money, updates are idempotent and failed jobs can be safely replayed.",
      ],
    },
    thumbnail: { src: "/images/works/ec-inventory-dashboard/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/ec-inventory-dashboard/01.svg",
        alt: { ja: "在庫一覧画面", en: "Inventory listing screen" },
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/works/ec-inventory-dashboard/02.svg",
        alt: { ja: "受注詳細画面", en: "Order detail screen" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "EC事業者（受託開発）", en: "E-commerce operator (agency project)" },
      role: { ja: "設計 / バックエンド・フロントエンド実装", en: "Architecture / Backend and front-end implementation" },
      year: "2023",
      stack: ["TypeScript", "NestJS", "Nuxt.js", "MySQL", "Redis", "AWS"],
    },
  },
  {
    slug: "realestate-mobile-app",
    order: 4,
    categoryKey: "mobile",
    title: {
      ja: "不動産 物件検索モバイルアプリ",
      en: "Property Search Mobile App",
    },
    summary: {
      ja: "React Native による iOS / Android 両対応の物件検索アプリ。",
      en: "A property search app for iOS and Android, built once in React Native.",
    },
    description: {
      ja: [
        "検索条件の状態管理を一箇所に集約し、地図表示とリスト表示のどちらから操作しても結果が食い違わないようにしています。",
        "通信状況が不安定な外出先での利用を想定し、直近の検索結果をローカルに保持して、オフラインでも閲覧を継続できる設計としました。",
      ],
      en: [
        "Search state lives in one place, so the map view and the list view can never disagree about what the user asked for.",
        "Designed for use on the move: recent results are cached locally so browsing survives a patchy connection.",
      ],
    },
    thumbnail: { src: "/images/works/realestate-mobile-app/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/realestate-mobile-app/01.svg",
        alt: { ja: "物件検索画面", en: "Property search screen" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "不動産事業者（受託開発）", en: "Real estate company (agency project)" },
      role: { ja: "モバイル実装 / API連携", en: "Mobile implementation / API integration" },
      year: "2023",
      stack: ["React Native", "TypeScript", "FastAPI", "PostgreSQL"],
    },
  },
  {
    slug: "workflow-automation-ai",
    order: 5,
    categoryKey: "mobile",
    title: {
      ja: "業務自動化・AI連携システム",
      en: "Workflow Automation with AI Integration",
    },
    summary: {
      ja: "Python によるデータ収集と、AI を用いた分類・要約を組み合わせた社内向け自動化基盤。",
      en: "An internal automation layer pairing Python data collection with AI-driven classification and summarisation.",
    },
    description: {
      ja: [
        "手作業で行っていた収集・分類・転記を自動化しました。取得元の仕様変更で止まらないよう、パース処理を差し替え可能な形に分離しています。",
        "AI の出力をそのまま信用せず、確信度が低い結果は人の確認に回すフローを挟むことで、自動化と正確性を両立させました。",
      ],
      en: [
        "Collection, classification and transcription that had been manual now run automatically. Parsing is isolated behind a swappable interface so a change upstream doesn't stop the pipeline.",
        "AI output isn't trusted blindly — low-confidence results are routed to a human check, so automation doesn't come at the cost of accuracy.",
      ],
    },
    thumbnail: { src: "/images/works/workflow-automation-ai/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/workflow-automation-ai/01.svg",
        alt: { ja: "処理フロー図", en: "Processing flow diagram" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "中小企業（受託開発）", en: "Small business (agency project)" },
      role: { ja: "設計 / 実装 / 運用設計", en: "Architecture / Implementation / Operations design" },
      year: "2023",
      stack: ["Python", "FastAPI", "PostgreSQL", "Docker", "AWS Lambda"],
    },
  },
  {
    slug: "corporate-site-wordpress",
    order: 6,
    categoryKey: "site",
    title: {
      ja: "コーポレートサイト構築・LP制作",
      en: "Corporate Site and Landing Page",
    },
    summary: {
      ja: "WordPress による企業サイト構築。レスポンシブ対応、表示速度改善、SEOを意識した実装。",
      en: "A company site on WordPress — responsive, tuned for load speed, and built with SEO in mind.",
    },
    description: {
      ja: [
        "更新担当者が迷わないよう、編集項目を必要な範囲に絞ったカスタム管理画面を用意し、公開後の運用コストを下げています。",
        "画像の最適化と読み込み順の見直しにより表示速度を改善し、構造化データと見出し構造を整理してSEOの土台を整えました。",
      ],
      en: [
        "A trimmed custom admin exposes only the fields the editor actually needs, which keeps running costs down after launch.",
        "Image optimisation and a reworked loading order improved render speed, while structured data and a cleaned-up heading hierarchy laid the SEO groundwork.",
      ],
    },
    thumbnail: { src: "/images/works/corporate-site-wordpress/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/corporate-site-wordpress/01.svg",
        alt: { ja: "トップページ", en: "Homepage" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "事業会社（受託開発）", en: "Client company (agency project)" },
      role: { ja: "デザイン調整 / 実装 / 運用設計", en: "Design adjustment / Implementation / Operations design" },
      year: "2022",
      stack: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
    },
  },
];

/** Projects sorted for display, lowest `order` first. */
export const sortedProjects: Project[] = [...projects].sort((a, b) => a.order - b.order);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getCategory(key: string): Category | undefined {
  return CATEGORIES.find((category) => category.key === key);
}
