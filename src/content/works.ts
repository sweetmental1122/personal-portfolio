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
  {
    key: "site",
    label: { ja: "コーポレート・採用サイト", en: "Corporate & Recruiting" },
  },
  {
    key: "commerce",
    label: { ja: "EC・ブランドサイト", en: "Commerce & Brand" },
  },
  {
    key: "education",
    label: { ja: "教育・スクールサイト", en: "Education" },
  },
  {
    key: "medical",
    label: { ja: "医療・クリニックサイト", en: "Medical" },
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

/**
 * ─────────────────────────────────────────────────────────────
 *  Sites below carry a screenshot and a description of what the
 *  interface does. Their `meta` is intentionally partial: period,
 *  scope and stack are yours to fill in — the detail page omits any
 *  field left blank rather than showing a placeholder, so adding them
 *  is a one-line edit per project whenever you have the details to hand.
 * ─────────────────────────────────────────────────────────────
 */
const shot = (slug: string) => ({
  src: `/images/works/${slug}/thumb.jpg`,
  width: 1440,
  height: 688,
});

projects.push(
  {
    slug: "bizreach-careers",
    order: 10,
    categoryKey: "site",
    title: { ja: "BIZREACH Careers 採用サイト", en: "BIZREACH Careers" },
    summary: {
      ja: "大判の写真に極太の明朝を重ね、スクロールでビジュアルを差し替える採用サイト。",
      en: "A recruiting site pairing heavy mincho type with full-bleed photography that swaps as you scroll.",
    },
    description: {
      ja: ["文字組みだけで強度を出す構成とし、写真とタイポグラフィの重なりでブランドの姿勢を伝えています。"],
      en: ["Built to carry its force through typesetting alone, letting the overlap of image and type state the brand's stance."],
    },
    thumbnail: shot("bizreach-careers"),
    images: [],
    liveUrl: "https://careers.bizreach.co.jp/",
    meta: { client: { ja: "株式会社ビズリーチ", en: "BizReach, Inc." } },
  },
  {
    slug: "mi6-recruit",
    order: 11,
    categoryKey: "site",
    title: { ja: "MI-6 採用サイト", en: "MI-6 Recruit" },
    summary: {
      ja: "円形マスクで写真を切り抜き、見出しの一部だけをキーカラーの青に落とした採用サイト。",
      en: "Photography cropped into circular masks, with only part of each heading dropped into the brand blue.",
    },
    description: {
      ja: ["見出しの強調箇所を限定することで、情報量を増やさずに視線の順序を作っています。"],
      en: ["Restricting which words take the accent creates a reading order without adding any more information to the page."],
    },
    thumbnail: shot("mi6-recruit"),
    images: [],
    liveUrl: "https://recruit.mi-6.co.jp/",
    meta: { client: { ja: "MI-6株式会社", en: "MI-6 Ltd." } },
  },
  {
    slug: "camcom-recruit",
    order: 12,
    categoryKey: "site",
    title: { ja: "CAM-COM 採用サイト", en: "CAM-COM Recruit" },
    summary: {
      ja: "菱形のクリップパスで写真を組み、幾何形状だけでリズムを作った採用サイト。",
      en: "Diamond clip-paths assemble the photography, building rhythm purely from geometry.",
    },
    description: {
      ja: ["画像の切り抜きをCSSのclip-pathで処理し、写真差し替え時にレイアウトが崩れない構造にしています。"],
      en: ["Cropping is handled with CSS clip-path, so the layout holds when the photography is swapped out."],
    },
    thumbnail: shot("camcom-recruit"),
    images: [],
    liveUrl: "https://cam-com.inc/recruit/",
    meta: { client: { ja: "株式会社キャムコム", en: "CAM-COM Inc." } },
  },
  {
    slug: "redesigner-freelance",
    order: 13,
    categoryKey: "site",
    title: { ja: "ReDesigner for Freelance", en: "ReDesigner for Freelance" },
    summary: {
      ja: "図形とドットパターンを余白に散らし、赤一色のアクセントでCTAを際立たせたサービスサイト。",
      en: "Shapes and dot patterns scattered through the whitespace, with a single red accent carrying the call to action.",
    },
    description: {
      ja: ["装飾要素を増やしつつも、彩度を持つ色をCTAだけに絞ることで登録導線の視認性を保っています。"],
      en: ["Ornament is generous, but saturated colour is reserved for the sign-up path so it never loses visibility."],
    },
    thumbnail: shot("redesigner-freelance"),
    images: [],
    liveUrl: "https://redesigner.jp/freelance/",
    meta: { client: { ja: "株式会社グッドパッチ", en: "Goodpatch Inc." } },
  },
  {
    slug: "gran-turismo",
    order: 14,
    categoryKey: "site",
    title: { ja: "グランツーリスモ公式サイト", en: "Gran Turismo Official Site" },
    summary: {
      ja: "暗色UIのカードグリッドで、大量のニュースをカテゴリと日付だけで整理した公式サイト。",
      en: "A dark-UI card grid organising a high volume of news with nothing but category and date.",
    },
    description: {
      ja: ["更新頻度の高いニュースを扱うため、一覧の密度を保ったまま読み取れるカード設計としています。"],
      en: ["Built for a high update rate: the card design keeps the listing dense yet still readable at a glance."],
    },
    thumbnail: shot("gran-turismo"),
    images: [],
    liveUrl: "https://www.gran-turismo.com/jp/",
    meta: {},
  },
  {
    slug: "orange-garden",
    order: 20,
    categoryKey: "commerce",
    title: { ja: "ミヤモトオレンジガーデン EC", en: "Miyamoto Orange Garden" },
    summary: {
      ja: "ランキング順位と規格バッジを商品画像に重ね、一覧の情報密度を上げた農産物EC。",
      en: "A produce storefront stacking rank numbers and grade badges onto product images.",
    },
    description: {
      ja: ["秀品・訳ありといった規格差と内容量を一覧上で判別できるようにし、商品詳細へ入る前の絞り込みを助けています。"],
      en: ["Grade and weight are readable from the listing itself, so shoppers can narrow down before opening a product page."],
    },
    thumbnail: shot("orange-garden"),
    images: [],
    liveUrl: "https://shop.orange-garden-inc.jp/",
    meta: { client: { ja: "農業生産法人 ミヤモトオレンジガーデン", en: "Miyamoto Orange Garden Inc." } },
  },
  {
    slug: "uv0",
    order: 21,
    categoryKey: "commerce",
    title: { ja: "UVO produced by Wpc.", en: "UVO produced by Wpc." },
    summary: {
      ja: "淡いグラデーションの背景に商品を大きく置き、ロゴまで含めて一枚のキービジュアルにしたブランドサイト。",
      en: "Product placed large on a pale gradient, with the logo treated as part of a single key visual.",
    },
    description: {
      ja: ["シーズンごとの差し替えを前提に、写真とロゴの位置関係を崩さないキービジュアル構成としています。"],
      en: ["Designed for seasonal replacement: the relationship between product shot and logo holds when the imagery changes."],
    },
    thumbnail: shot("uv0"),
    images: [],
    liveUrl: "https://www.uv0.jp/",
    meta: { client: { ja: "株式会社ワールドパーティー", en: "World Party Co., Ltd." } },
  },
  {
    slug: "welleg",
    order: 22,
    categoryKey: "commerce",
    title: { ja: "Welleg コーポレートサイト", en: "Welleg" },
    summary: {
      ja: "全画面写真と円形のスクロールインジケータ。余白を大きく取り、要素を足さない引き算の設計。",
      en: "Full-screen photography with a circular scroll indicator — generous whitespace and a refusal to add elements.",
    },
    description: {
      ja: ["ファーストビューを一枚の写真に絞り、スクロールを促す表示だけを配置することで、ブランドの静けさを保っています。"],
      en: ["The first view is one photograph and a scroll cue, and nothing else — which is what keeps the brand quiet."],
    },
    thumbnail: shot("welleg"),
    images: [],
    liveUrl: "https://www.welleg.co.jp/",
    meta: { client: { ja: "Welleg Inc.", en: "Welleg Inc." } },
  },
  {
    slug: "pudgy-penguins",
    order: 23,
    categoryKey: "commerce",
    title: { ja: "Pudgy Penguins ストア", en: "Pudgy Penguins Store" },
    summary: {
      ja: "彩度の高い配色とカルーセルで構成した、キャラクターIPのEC。",
      en: "Character-IP commerce built on saturated colour and a carousel.",
    },
    description: {
      ja: ["質感より勢いを優先する方針のもと、キャラクターの切り抜きとポップな見出しでシリーズ展開を訴求しています。"],
      en: ["Momentum over texture: cut-out characters and pop headings carry each new series release."],
    },
    thumbnail: shot("pudgy-penguins"),
    images: [],
    liveUrl: "https://www.pudgypenguins.com/",
    meta: {},
  },
  {
    slug: "tokyu-harvest-club",
    order: 24,
    categoryKey: "commerce",
    title: { ja: "東急ハーヴェストクラブ", en: "Tokyu Harvest Club" },
    summary: {
      ja: "暗い夜景写真に細い明朝と広い字間を合わせた、会員制リゾートホテルのサイト。",
      en: "Thin mincho and wide tracking over a dark night shot, for a membership resort brand.",
    },
    description: {
      ja: ["装飾ではなく余白と字間で価格帯を伝える方針とし、写真の暗部を活かして文字を配置しています。"],
      en: ["The price bracket is communicated through whitespace and tracking rather than ornament, with type set into the shadows of the photograph."],
    },
    thumbnail: shot("tokyu-harvest-club"),
    images: [],
    liveUrl: "https://www.harvestclub.com/",
    meta: { client: { ja: "東急リゾーツ&ステイ株式会社", en: "Tokyu Resorts & Stays Co., Ltd." } },
  },
  {
    slug: "kawasui-school",
    order: 30,
    categoryKey: "education",
    title: { ja: "カワスイ アクア＆アニマルスクール", en: "Kawasui Aqua & Animal School" },
    summary: {
      ja: "被写体を切り抜いて背景に浮遊させる合成で、奥行きを作ったスクールサイト。",
      en: "Cut-out subjects floating over the background, building depth into a school site.",
    },
    description: {
      ja: ["水族館直営という特色を、魚の切り抜きと人物を同一空間に配置することで一目で伝わる形にしています。"],
      en: ["That the school is run by an aquarium reads instantly, because the fish cut-outs and the student share one space."],
    },
    thumbnail: shot("kawasui-school"),
    images: [],
    liveUrl: "https://school.kawa-sui.com/",
    meta: { client: { ja: "カワスイ 川崎水族館", en: "Kawasui Kawasaki Aquarium" } },
  },
  {
    slug: "isi-education",
    order: 31,
    categoryKey: "education",
    title: { ja: "ISI 日本語学校", en: "ISI Japanese Language School" },
    summary: {
      ja: "群衆写真の上に大きなセリフ体を重ね、手書き風の一語だけを原色で抜いた多言語サイト。",
      en: "Large serif type over a crowd shot, with one script word knocked out in a primary colour.",
    },
    description: {
      ja: ["多国籍の学生層を写真そのもので示しつつ、言語切替を前提とした見出しの組み方にしています。"],
      en: ["The photography itself carries the multinational student body, and the headings are set to survive a language switch."],
    },
    thumbnail: shot("isi-education"),
    images: [],
    liveUrl: "https://www.isi-education.com/ja/",
    meta: { client: { ja: "ISI 語学院", en: "ISI Language School" } },
  },
  {
    slug: "kla",
    order: 32,
    categoryKey: "education",
    title: { ja: "京進ランゲージアカデミー", en: "Kyoshin Language Academy" },
    summary: {
      ja: "和柄の雲と縦組みのルビを組み合わせた、日本語学校のタイポグラフィ設計。",
      en: "Japanese typography pairing stylised clouds with vertical ruby text.",
    },
    description: {
      ja: ["日本語学習者向けにルビを前提とした組版とし、writing-mode を用いた縦組みで和のモチーフと整合させています。"],
      en: ["Typeset around ruby for language learners, with writing-mode vertical text tying the layout to its Japanese motifs."],
    },
    thumbnail: shot("kla"),
    images: [],
    liveUrl: "https://www.kla.ac/ja/",
    meta: { client: { ja: "株式会社京進", en: "Kyoshin Corporation" } },
  },
  {
    slug: "hannan-university",
    order: 33,
    categoryKey: "education",
    title: { ja: "阪南大学 入試サイト", en: "Hannan University Admissions" },
    summary: {
      ja: "原色の斜め帯と実施済みスケジュールのグレーアウトで、情報の鮮度を色だけで伝える入試サイト。",
      en: "Diagonal bands in primary colours, with past dates greyed out so freshness reads from colour alone.",
    },
    description: {
      ja: ["オープンキャンパスの開催状況を日付ごとに出し分け、終了分を無効表示にすることで受験生の判断を早めています。"],
      en: ["Open campus dates render per session with finished ones disabled, so prospective students can decide at a glance."],
    },
    thumbnail: shot("hannan-university"),
    images: [],
    liveUrl: "https://www.hannan-u.ac.jp/entrance/",
    meta: { client: { ja: "阪南大学", en: "Hannan University" } },
  },
  {
    slug: "hara-hospital",
    order: 40,
    categoryKey: "medical",
    title: { ja: "原病院", en: "Hara Hospital" },
    summary: {
      ja: "写真スライダーの下に外来・入院のカードを固定配置し、来院者の導線を最上部に置いた病院サイト。",
      en: "Outpatient and inpatient cards pinned under the photo slider, putting the visitor's path at the very top.",
    },
    description: {
      ja: ["来院者が最初に探す情報を優先し、診療案内へのカードをファーストビュー直下に固定しています。"],
      en: ["What visitors look for first takes priority: the care-guide cards sit fixed directly below the first view."],
    },
    thumbnail: shot("hara-hospital"),
    images: [],
    liveUrl: "https://hara-hospital.jp/",
    meta: { client: { ja: "医療法人 原会 原病院", en: "Hara Hospital" } },
  },
  {
    slug: "art-asada",
    order: 41,
    categoryKey: "medical",
    title: { ja: "浅田レディースクリニック", en: "ART Clinic ASADA" },
    summary: {
      ja: "斜めの帯を写真に横切らせ、診療時間表を常時表示する構成のクリニックサイト。",
      en: "A diagonal band crossing the photography, with the consultation hours table always visible.",
    },
    description: {
      ja: ["診療時間と最寄駅からの所要時間を画面内に固定し、初診の来院判断に必要な情報を探させない設計としています。"],
      en: ["Hours and walking time from the station stay on screen, so a first-time patient never has to hunt for what decides their visit."],
    },
    thumbnail: { src: "/images/works/art-asada/thumb.svg", width: 1600, height: 1000 },
    images: [],
    liveUrl: "https://art-asada.jp/",
    meta: { client: { ja: "医療法人 浅田レディースクリニック", en: "ART Clinic ASADA" } },
  },
  {
    slug: "fukase-clinic",
    order: 42,
    categoryKey: "medical",
    title: { ja: "深瀬医院", en: "Fukase Clinic" },
    summary: {
      ja: "明るい家族写真と「Cure & Care」の欧文見出しで、地域医療の親しみやすさを作った医院サイト。",
      en: "A bright family photograph under a Latin \"Cure & Care\" heading, building approachability for community care.",
    },
    description: {
      ja: ["高齢者から子どもまでを一枚に収めた写真を軸に、診療時間と介護施設情報への導線を並置しています。"],
      en: ["One photograph spanning children to elderly anchors the page, with hours and care-facility links set alongside it."],
    },
    thumbnail: shot("fukase-clinic"),
    images: [],
    liveUrl: "https://www.fukase.or.jp/",
    meta: { client: { ja: "医療法人 鴻仁会 深瀬医院", en: "Fukase Clinic" } },
  },
  {
    slug: "r-reha",
    order: 43,
    categoryKey: "medical",
    title: { ja: "アールリハビリステーション", en: "R Reha Station" },
    summary: {
      ja: "円形マスクの写真を並べたグリッドと、追従する問い合わせボタンを備えたリハビリ施設サイト。",
      en: "Circle-masked photographs in a row plus a sticky enquiry button, for a rehabilitation facility.",
    },
    description: {
      ja: ["自費リハビリという性質上、料金と利用の流れへの導線を常時表示し、問い合わせまでの距離を短くしています。"],
      en: ["Because the service is self-funded, pricing and the usage flow stay permanently reachable, shortening the path to an enquiry."],
    },
    thumbnail: shot("r-reha"),
    images: [],
    liveUrl: "https://r-reha.jp/",
    meta: { client: { ja: "社会医療法人 愛仁会", en: "Aijinkai Healthcare Corporation" } },
  },
  {
    slug: "mirai-shika",
    order: 44,
    categoryKey: "medical",
    title: { ja: "みらい歯科", en: "Mirai Dental Clinic" },
    summary: {
      ja: "スタッフ集合写真に縦組みのキャッチを重ね、診療時間とアクセスを画面下に固定した歯科サイト。",
      en: "Vertical Japanese copy over a full staff photograph, with hours and directions pinned along the bottom.",
    },
    description: {
      ja: ["医院の雰囲気をスタッフ写真で伝えつつ、駅からの距離と土日診療という選択理由を常時視界に置いています。"],
      en: ["The staff photograph conveys the practice, while the two reasons patients choose it — station distance and weekend hours — stay in view."],
    },
    thumbnail: shot("mirai-shika"),
    images: [],
    liveUrl: "https://www.mirai-shika.com/",
    meta: { client: { ja: "医療法人社団 港成会 みらい歯科", en: "Kousei-kai Mirai Dental Clinic" } },
  },
);

/** Projects sorted for display, lowest `order` first. */
export const sortedProjects: Project[] = [...projects].sort((a, b) => a.order - b.order);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getCategory(key: string): Category | undefined {
  return CATEGORIES.find((category) => category.key === key);
}
