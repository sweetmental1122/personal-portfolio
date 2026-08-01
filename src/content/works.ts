import type { Category, Project } from "./types";

/**
 * ─────────────────────────────────────────────────────────────
 *  Projects drawn from the career history. Wording follows what was
 *  actually delivered — no invented figures.
 *
 *  `slug` becomes the URL, `categoryKey` must match a CATEGORIES key,
 *  `order` sets the position in the ring (lowest first, newest first here).
 *
 *  Screenshots still need adding: the images below are placeholders. Check
 *  each client's NDA before publishing real captures — a blurred or
 *  redacted screen is usually fine where a raw one is not.
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
    label: { ja: "モバイルアプリ", en: "Mobile Apps" },
  },
  {
    key: "ai",
    label: { ja: "AI・自動化", en: "AI & Automation" },
  },
];

export const projects: Project[] = [
  {
    slug: "project-management-system",
    order: 1,
    categoryKey: "system",
    title: {
      ja: "中小企業向け 業務効率化・案件管理システム",
      en: "Project & Sales Management System for a Small Business",
    },
    summary: {
      ja: "案件進捗・売上・顧客情報を一元管理するWebアプリケーションを、フルスクラッチで新規構築。",
      en: "A from-scratch web application unifying project progress, revenue and customer data.",
    },
    description: {
      ja: [
        "PMが定義した要件をもとに、Java (Spring Boot) でユーザー認証・権限管理・案件データのCRUDを担うバックエンドREST APIを設計・実装しました。",
        "フルスタックエンジニア2名と機能ごとに開発範囲を分担し、私はReact / TypeScript によるカレンダー形式のスケジュール確認画面と、カンバンボードUIの実装を担当しました。",
        "Gitのブランチ運用方針を事前にメンバーとすり合わせることで、遠隔開発でのコードコンフリクトを回避。AWS (EC2 / RDS) へのDockerコンテナによるデプロイ手順も標準化しました。",
        "完全フルリモート環境のため、Slackでの進捗の即時共有を徹底し、仕様のズレによる手戻りを未然に防止。予定されていた納期どおりに完成・ローンチしました。",
      ],
      en: [
        "Working from requirements defined by the PM, I designed and implemented the backend REST API in Java (Spring Boot) covering authentication, permissions and CRUD for project data.",
        "Development was split by feature across three full-stack engineers; I took the calendar schedule view and the kanban board UI in React and TypeScript.",
        "Agreeing Git branching rules with the team up front kept a remote codebase clear of conflicts, and I standardised Docker-based deployment to AWS (EC2 / RDS).",
        "With the team fully remote, sharing progress in Slack as it happened stopped specification drift before it caused rework — the system was finished and launched on the planned date.",
      ],
    },
    thumbnail: { src: "/images/works/project-management-system/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/project-management-system/01.svg",
        alt: { ja: "カンバンボード画面", en: "Kanban board screen" },
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/works/project-management-system/02.svg",
        alt: { ja: "スケジュール確認画面", en: "Schedule view" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "株式会社オヤテック（業務委託）", en: "Oyatech Inc. (contract)" },
      role: {
        ja: "バックエンドAPI設計・実装 / フロントエンド実装 / デプロイ標準化",
        en: "Backend API design and build / Front-end / Deployment standardisation",
      },
      year: "2025–2026",
      stack: ["Java 17", "Spring Boot", "TypeScript", "React", "PostgreSQL", "AWS", "Docker"],
    },
  },
  {
    slug: "property-image-ai-annotation",
    order: 2,
    categoryKey: "ai",
    title: {
      ja: "不動産向け 物件画像 自動アノテーションシステム",
      en: "Automated Property Image Annotation for Real Estate",
    },
    summary: {
      ja: "大量の物件写真をAIで自動分類し、特徴タグを生成する画像解析システム。",
      en: "An image-analysis system that classifies property photos and generates feature tags automatically.",
    },
    description: {
      ja: [
        "チーム内のAIエンジニアが作成した画像解析モデルの推論スクリプトを受け取り、Webシステムから呼び出すための軽量なAPIサーバーを Python / FastAPI で構築しました。",
        "アップロードされた画像のトリミングやノイズ除去といった前処理を OpenCV で実装し、AWS Lambda を介して画像解析を非同期実行するパイプラインを組み立てています。",
      ],
      en: [
        "I took the inference scripts written by the team's AI engineer and wrapped them in a lightweight Python / FastAPI service the wider web system could call.",
        "Pre-processing — cropping, noise removal — is handled with OpenCV, and analysis runs asynchronously through a pipeline built on AWS Lambda.",
      ],
    },
    thumbnail: { src: "/images/works/property-image-ai-annotation/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/property-image-ai-annotation/01.svg",
        alt: { ja: "画像解析パイプラインの構成", en: "Image analysis pipeline" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "不動産企業（株式会社Codigo）", en: "Real estate client (via Codigo)" },
      role: { ja: "APIサーバー構築 / 前処理実装 / 非同期パイプライン構築", en: "API service / Pre-processing / Async pipeline" },
      year: "2024",
      stack: ["Python", "FastAPI", "OpenCV", "PyTorch", "Docker", "AWS S3", "AWS Lambda"],
    },
  },
  {
    slug: "fintech-payment-api",
    order: 3,
    categoryKey: "system",
    title: {
      ja: "決済処理API基盤の構築（FinTech）",
      en: "High-Volume Payment Processing API",
    },
    summary: {
      ja: "加盟店からの大量の決済リクエストを、遅延なく安全に処理・記録するバックエンド基盤。",
      en: "Backend infrastructure that processes and records a high volume of merchant payment requests without lag.",
    },
    description: {
      ja: [
        "バックエンド担当エンジニアとして、Go言語 (Gin) を用いた決済受付APIを実装しました。",
        "画面側を担当するフロントエンドチームが並行して開発を進められるよう、詳細なAPI仕様書 (Swagger) を早期に作成・共有。フロントエンドとバックエンド間の連携テストも共同で主導しました。",
      ],
      en: [
        "As the backend engineer I implemented the payment intake API in Go, using the Gin framework.",
        "So the front-end team could work in parallel rather than waiting, I wrote and shared a detailed API specification (Swagger) early, and co-led the integration testing between the two sides.",
      ],
    },
    thumbnail: { src: "/images/works/fintech-payment-api/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/fintech-payment-api/01.svg",
        alt: { ja: "API仕様ドキュメント", en: "API specification" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "決済事業者（株式会社Codigo）", en: "Payments client (via Codigo)" },
      role: { ja: "バックエンド実装 / API仕様策定 / 連携テスト主導", en: "Backend / API specification / Integration testing" },
      year: "2023–2024",
      stack: ["Go", "Gin", "PostgreSQL", "Redis", "Docker", "AWS", "Swagger"],
    },
  },
  {
    slug: "clinic-booking-app",
    order: 4,
    categoryKey: "mobile",
    title: {
      ja: "医療機関向け 患者用ポータル・予約アプリ",
      en: "Patient Portal and Booking App for Clinics",
    },
    summary: {
      ja: "クリニック検索、リアルタイム予約、デジタル診察券に対応した iOS / Android アプリ。",
      en: "An iOS and Android app for finding clinics, booking in real time and carrying a digital patient card.",
    },
    description: {
      ja: [
        "別のフルスタックエンジニア1名と協調し、React Native による端末カメラ連動のQRコード読み取り（チェックイン機能）を実装しました。",
        "あわせて Node.js (NestJS) 側のアカウント認証 (JWT) APIも担当し、フロントからバックエンドまで垂直に一貫して開発しています。",
        "PM兼デザイナーからのUIフィードバックをもとに、スマートフォン画面での操作性向上のための微調整を重ねました。",
      ],
      en: [
        "Working alongside one other full-stack engineer, I built the camera-driven QR check-in flow in React Native.",
        "I also owned the JWT account authentication API on the Node.js (NestJS) side, taking the feature vertically from screen to backend.",
        "UI feedback from the PM/designer drove repeated rounds of adjustment to how the app handles on a phone.",
      ],
    },
    thumbnail: { src: "/images/works/clinic-booking-app/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/clinic-booking-app/01.svg",
        alt: { ja: "予約・チェックイン画面", en: "Booking and check-in screens" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "医療機関（株式会社Codigo）", en: "Healthcare client (via Codigo)" },
      role: { ja: "モバイル実装 / 認証API実装", en: "Mobile implementation / Authentication API" },
      year: "2022–2023",
      stack: ["TypeScript", "React Native", "Node.js", "NestJS", "MySQL", "AWS"],
    },
  },
  {
    slug: "apparel-ec-frontend",
    order: 5,
    categoryKey: "web",
    title: {
      ja: "アパレルブランド ECサイトのフロントエンド刷新",
      en: "Storefront Replatform for an Apparel Brand",
    },
    summary: {
      ja: "ECサイトのフロントエンドを Nuxt.js で全面リプレイス。高速かつレスポンシブな画面へ。",
      en: "A full front-end replatform of an e-commerce storefront onto Nuxt.js — faster, and responsive throughout.",
    },
    description: {
      ja: [
        "3名のフロントエンド開発チームの一員として、Nuxt.js による商品カテゴリ一覧と、サイズ・色・価格での動的フィルタリング画面のコーディングを担当しました。",
        "UIデザイナーが作成したモックを忠実に再現しつつ、既存のバックエンド担当エンジニアとAPIのデータ構造を細かく調整し、画面へのデータ結合をスムーズに進めました。",
      ],
      en: [
        "As one of three front-end engineers, I built the category listing and the dynamic filtering screens — size, colour and price — in Nuxt.js.",
        "I kept faithful to the designer's mocks while working through the API data shapes in detail with the existing backend engineer, so binding data to the screens stayed straightforward.",
      ],
    },
    thumbnail: { src: "/images/works/apparel-ec-frontend/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/apparel-ec-frontend/01.svg",
        alt: { ja: "商品一覧・絞り込み画面", en: "Product listing and filters" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "アパレルブランド（株式会社Codigo）", en: "Apparel brand (via Codigo)" },
      role: { ja: "フロントエンド実装", en: "Front-end implementation" },
      year: "2021–2022",
      stack: ["TypeScript", "Vue.js", "Nuxt.js", "HTML5", "CSS3"],
    },
  },
  {
    slug: "logistics-status-api",
    order: 6,
    categoryKey: "system",
    title: {
      ja: "物流企業向け 在庫・配送ステータス管理API",
      en: "Inventory and Delivery Status API for Logistics",
    },
    summary: {
      ja: "倉庫内の荷物ステータスとトラックの配送状況を記録・抽出する社内基盤システム。",
      en: "An internal platform recording and querying warehouse item status and truck delivery progress.",
    },
    description: {
      ja: [
        "もう1名のバックエンドエンジニアと分担し、Java (Spring Boot) による配送状況の変更履歴管理APIの作成と、MySQLのデータモデル設計を担当しました。",
        "QAテスターがテストシナリオをスムーズに作成できるよう、エラーの発生条件や例外処理の挙動を事前にドキュメント化して共有し、テストフェーズの効率化に貢献しました。",
      ],
      en: [
        "Splitting the work with one other backend engineer, I built the delivery-status change history API in Java (Spring Boot) and designed the MySQL data model.",
        "To let QA write test scenarios without guesswork, I documented the error conditions and exception behaviour up front and shared it ahead of the test phase.",
      ],
    },
    thumbnail: { src: "/images/works/logistics-status-api/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/logistics-status-api/01.svg",
        alt: { ja: "データモデル構成", en: "Data model" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "物流企業（株式会社Codigo）", en: "Logistics client (via Codigo)" },
      role: { ja: "バックエンド実装 / データモデル設計 / 仕様ドキュメント", en: "Backend / Data modelling / Specification docs" },
      year: "2020–2021",
      stack: ["Java 11", "Spring Boot", "MySQL", "GitHub Actions"],
    },
  },
  {
    slug: "restaurant-ordering-ui",
    order: 7,
    categoryKey: "web",
    title: {
      ja: "飲食チェーン向け 社内発注管理ツールの画面開発",
      en: "Internal Ordering Tool for a Restaurant Chain",
    },
    summary: {
      ja: "各店舗の店長が食材や消耗品を本部に発注するための、Web管理画面の実装。",
      en: "The web admin screens store managers use to order ingredients and supplies from head office.",
    },
    description: {
      ja: [
        "配属された初期プロジェクトとして、所属チームのシニアエンジニアの指導のもと、HTML / CSS および Bootstrap によるレスポンシブな発注入力フォームのコーディングを担当しました。",
        "同期のメンバーとコードの書き方を統一し、Git の Pull Request ベースでのレビューを重ねながら、チーム開発の進め方を身につけたプロジェクトです。",
      ],
      en: [
        "My first project after joining: under the guidance of a senior engineer on the team, I coded the responsive order entry forms in HTML, CSS and Bootstrap.",
        "Aligning code style with the other new joiners and going through pull-request review is where I learned how team development actually runs.",
      ],
    },
    thumbnail: { src: "/images/works/restaurant-ordering-ui/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/restaurant-ordering-ui/01.svg",
        alt: { ja: "発注入力フォーム", en: "Order entry form" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "飲食チェーン（株式会社Codigo）", en: "Restaurant chain (via Codigo)" },
      role: { ja: "フロントエンド実装", en: "Front-end implementation" },
      year: "2019–2020",
      stack: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Node.js"],
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
