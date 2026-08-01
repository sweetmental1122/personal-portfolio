import type { Category, Project } from "./types";

/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT ME — the WORKS ring and every project detail page are
 *  generated from the arrays below. Add or remove entries freely.
 * ─────────────────────────────────────────────────────────────
 */

export const CATEGORIES: Category[] = [
  {
    key: "client",
    label: { ja: "クライアントワーク", en: "Client Work" },
  },
  {
    key: "personal",
    label: { ja: "自主制作", en: "Personal Projects" },
  },
];

export const projects: Project[] = [
  {
    slug: "aurora-cosmetics",
    order: 1,
    categoryKey: "client",
    title: {
      ja: "Aurora Cosmetics ブランドサイト",
      en: "Aurora Cosmetics — Brand Site",
    },
    summary: {
      ja: "スキンケアブランドのリブランディングに合わせて制作した、透明感を軸とするブランドサイト。",
      en: "A brand site built around translucency, launched alongside a skincare rebrand.",
    },
    description: {
      ja: [
        "商品の「軽さ」と「透明感」を画面上でどう再現するかが最大の課題でした。ガラス質のレイヤーとゆっくりとした視差スクロールを組み合わせ、余白を大きく取ることで質感を表現しています。",
        "撮影ディレクションからUI設計、実装までを担当。モバイルでのLighthouseスコアは96を維持しています。",
      ],
      en: [
        "The core challenge was translating the product's lightness and translucency onto a screen. Glassy layers, slow parallax and generous whitespace carry that texture.",
        "I directed the shoot, designed the UI and built the front end. Mobile Lighthouse performance holds at 96.",
      ],
    },
    thumbnail: { src: "/images/works/aurora-cosmetics/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/aurora-cosmetics/01.svg",
        alt: { ja: "トップページのファーストビュー", en: "Homepage hero" },
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/works/aurora-cosmetics/02.svg",
        alt: { ja: "商品一覧ページ", en: "Product listing" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "Aurora Cosmetics", en: "Aurora Cosmetics" },
      role: {
        ja: "アートディレクション / UIデザイン / 実装",
        en: "Art Direction / UI Design / Development",
      },
      year: "2025",
      stack: ["Next.js", "TypeScript", "GSAP"],
    },
  },
  {
    slug: "monogram-studio",
    order: 2,
    categoryKey: "client",
    title: {
      ja: "Monogram Studio コーポレートサイト",
      en: "Monogram Studio — Corporate Site",
    },
    summary: {
      ja: "建築設計事務所のコーポレートサイト。作品写真を主役に据えたタイポグラフィ設計。",
      en: "Corporate site for an architecture practice, with typography built to serve the photography.",
    },
    description: {
      ja: [
        "写真の力を邪魔しないよう、テキストは最小限のウェイトと広い行間で構成しました。グリッドは12カラムを意図的に崩し、非対称なリズムを与えています。",
        "CMSはヘッドレス構成とし、担当者が写真を差し替えるだけで更新できる運用に落とし込みました。",
      ],
      en: [
        "Text keeps a light weight and open leading so it never competes with the photography. The 12-column grid is deliberately broken to stay asymmetric.",
        "A headless CMS means the team updates the site by swapping photos — nothing else required.",
      ],
    },
    thumbnail: { src: "/images/works/monogram-studio/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/monogram-studio/01.svg",
        alt: { ja: "プロジェクト詳細ページ", en: "Project detail page" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "Monogram Studio", en: "Monogram Studio" },
      role: { ja: "Webデザイン / 実装", en: "Web Design / Development" },
      year: "2025",
      stack: ["Next.js", "TypeScript", "microCMS"],
    },
  },
  {
    slug: "neon-festival",
    order: 3,
    categoryKey: "client",
    title: {
      ja: "NEON FESTIVAL キャンペーンLP",
      en: "NEON FESTIVAL — Campaign Landing Page",
    },
    summary: {
      ja: "音楽フェスの告知ランディングページ。チケット販売開始に合わせた短期集中の制作。",
      en: "A launch landing page for a music festival, produced on a tight run-up to ticket release.",
    },
    description: {
      ja: [
        "公開から3日でチケットが完売。スクロール位置に応じてCTAを追従させることで、離脱率を前年比34%改善しました。",
        "ネオンの発光表現はCSSのみで実装し、動画を使わずに初回表示を1.2秒に抑えています。",
      ],
      en: [
        "Tickets sold out within three days of launch. A scroll-aware sticky CTA cut the bounce rate 34% year on year.",
        "The neon glow is pure CSS — no video — which keeps first paint at 1.2 seconds.",
      ],
    },
    thumbnail: { src: "/images/works/neon-festival/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/neon-festival/01.svg",
        alt: { ja: "ランディングページのファーストビュー", en: "Landing page hero" },
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/works/neon-festival/02.svg",
        alt: { ja: "タイムテーブルのセクション", en: "Timetable section" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "NEON FESTIVAL 実行委員会", en: "NEON FESTIVAL Committee" },
      role: {
        ja: "Webデザイン / 実装 / アニメーション",
        en: "Web Design / Development / Motion",
      },
      year: "2024",
      stack: ["Astro", "TypeScript", "CSS"],
    },
  },
  {
    slug: "type-specimen",
    order: 4,
    categoryKey: "personal",
    title: {
      ja: "Type Specimen — 書体見本サイト",
      en: "Type Specimen — Typeface Explorer",
    },
    summary: {
      ja: "可変フォントの軸をリアルタイムに操作できる、自主制作の書体見本サイト。",
      en: "A personal tool for exploring variable font axes in real time.",
    },
    description: {
      ja: [
        "ウェイトと光学サイズをスライダーで動かしながら、実際の組版でどう見えるかを確認できます。",
        "フォントはサブセット化して読み込み、`font-display: swap` を徹底することで初回描画をブロックしないようにしています。",
      ],
      en: [
        "Sliders drive weight and optical size so you can judge a face in real setting rather than in isolation.",
        "Fonts are subset and loaded with `font-display: swap` so nothing blocks first paint.",
      ],
    },
    thumbnail: { src: "/images/works/type-specimen/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/type-specimen/01.svg",
        alt: { ja: "書体一覧の画面", en: "Typeface overview" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "自主制作", en: "Personal project" },
      role: { ja: "企画 / デザイン / 実装", en: "Concept / Design / Development" },
      year: "2024",
      stack: ["React", "TypeScript", "Vite"],
    },
  },
  {
    slug: "sound-visualizer",
    order: 5,
    categoryKey: "personal",
    title: {
      ja: "Sound Visualizer — 音の可視化",
      en: "Sound Visualizer",
    },
    summary: {
      ja: "Web Audio APIとWebGLで音を可視化する、実験的なインスタレーション。",
      en: "An experimental installation visualising audio with the Web Audio API and WebGL.",
    },
    description: {
      ja: [
        "FFTで取得した周波数帯を粒子の速度と色相にマッピングし、低音域ほど画面の奥へ沈み込むよう設計しました。",
        "60fpsを維持するため、10万個の粒子をインスタンシングで一度に描画しています。",
      ],
      en: [
        "FFT bands map onto particle velocity and hue; lower frequencies sink further back in the scene.",
        "100,000 particles draw in a single instanced call to hold 60fps.",
      ],
    },
    thumbnail: { src: "/images/works/sound-visualizer/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/sound-visualizer/01.svg",
        alt: { ja: "可視化のスクリーンショット", en: "Visualiser screenshot" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "自主制作", en: "Personal project" },
      role: { ja: "企画 / 実装", en: "Concept / Development" },
      year: "2023",
      stack: ["TypeScript", "WebGL", "Web Audio API"],
    },
  },
  {
    slug: "atelier-journal",
    order: 6,
    categoryKey: "personal",
    title: {
      ja: "Atelier Journal — 日記のためのエディタ",
      en: "Atelier Journal — A Writing Tool",
    },
    summary: {
      ja: "書くことに集中するため、装飾を削ぎ落としたローカルファーストのエディタ。",
      en: "A local-first editor stripped back to the act of writing.",
    },
    description: {
      ja: [
        "ツールバーを持たず、キーボードショートカットとMarkdownだけで完結するUIにしました。データはすべて端末内に保存されます。",
        "縦書きモードを備え、日本語での執筆体験を優先して設計しています。",
      ],
      en: [
        "No toolbar — everything runs on keyboard shortcuts and Markdown, and all data stays on the device.",
        "A vertical writing mode puts the Japanese writing experience first.",
      ],
    },
    thumbnail: { src: "/images/works/atelier-journal/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/atelier-journal/01.svg",
        alt: { ja: "エディタの画面", en: "Editor view" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "自主制作", en: "Personal project" },
      role: { ja: "企画 / デザイン / 実装", en: "Concept / Design / Development" },
      year: "2023",
      stack: ["React", "TypeScript", "IndexedDB"],
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
