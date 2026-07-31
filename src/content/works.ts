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
    label: { ja: "Client Work", en: "Client Work", ko: "Client Work" },
  },
  {
    key: "personal",
    label: { ja: "Personal Projects", en: "Personal Projects", ko: "Personal Projects" },
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
      ko: "Aurora Cosmetics 브랜드 사이트",
    },
    summary: {
      ja: "スキンケアブランドのリブランディングに合わせた、透明感を軸としたブランドサイト。",
      en: "A brand site built around translucency, launched alongside a skincare rebrand.",
      ko: "스킨케어 브랜드 리브랜딩에 맞춘, 투명감을 축으로 한 브랜드 사이트.",
    },
    description: {
      ja: [
        "商品の「軽さ」と「透明感」をどう画面上で再現するかが最大の課題でした。ガラス質のレイヤーとゆっくりとした視差スクロールを組み合わせ、余白を大きく取ることで質感を表現しています。",
        "撮影ディレクションからUI設計、実装までを担当。ページ表示速度はモバイルで Lighthouse 96 を維持しています。",
      ],
      en: [
        "The core challenge was translating the product's lightness and translucency onto a screen. Glassy layers, slow parallax and generous whitespace carry that texture.",
        "I directed the shoot, designed the UI and built the front end. Mobile Lighthouse performance holds at 96.",
      ],
      ko: [
        "제품의 가벼움과 투명감을 화면에서 어떻게 재현할지가 가장 큰 과제였습니다. 유리질 레이어와 느린 시차 스크롤, 넉넉한 여백으로 질감을 표현했습니다.",
        "촬영 디렉션부터 UI 설계, 구현까지 담당했습니다. 모바일 Lighthouse 점수는 96을 유지합니다.",
      ],
    },
    thumbnail: { src: "/images/works/aurora-cosmetics/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/aurora-cosmetics/01.svg",
        alt: { ja: "トップページのファーストビュー", en: "Homepage hero", ko: "홈페이지 메인 화면" },
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/works/aurora-cosmetics/02.svg",
        alt: { ja: "商品一覧ページ", en: "Product listing", ko: "제품 목록 페이지" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "Aurora Cosmetics", en: "Aurora Cosmetics", ko: "Aurora Cosmetics" },
      role: {
        ja: "アートディレクション / UIデザイン / 実装",
        en: "Art Direction / UI Design / Development",
        ko: "아트 디렉션 / UI 디자인 / 구현",
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
      ko: "Monogram Studio 코퍼레이트 사이트",
    },
    summary: {
      ja: "建築設計事務所のコーポレートサイト。作品写真を主役に据えたタイポグラフィ設計。",
      en: "Corporate site for an architecture practice, with typography built to serve the photography.",
      ko: "건축 설계 사무소의 코퍼레이트 사이트. 작품 사진을 주인공으로 둔 타이포그래피 설계.",
    },
    description: {
      ja: [
        "写真の力を邪魔しないよう、テキストは最小限のウェイトと大きな行間で構成。グリッドは12カラムを崩し、意図的に非対称にしています。",
        "CMSはヘッドレス構成とし、担当者が写真を差し替えるだけで更新できる運用にしました。",
      ],
      en: [
        "Text keeps a light weight and open leading so it never competes with the photography. The 12-column grid is deliberately broken to stay asymmetric.",
        "A headless CMS means the team updates the site by swapping photos — nothing else required.",
      ],
      ko: [
        "사진의 힘을 방해하지 않도록 텍스트는 최소한의 굵기와 넓은 행간으로 구성했습니다. 12칼럼 그리드를 의도적으로 비대칭으로 무너뜨렸습니다.",
        "헤드리스 CMS 구성으로, 담당자가 사진만 교체하면 업데이트되도록 운영 설계했습니다.",
      ],
    },
    thumbnail: { src: "/images/works/monogram-studio/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/monogram-studio/01.svg",
        alt: { ja: "プロジェクト詳細ページ", en: "Project detail page", ko: "프로젝트 상세 페이지" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "Monogram Studio", en: "Monogram Studio", ko: "Monogram Studio" },
      role: { ja: "Webデザイン / 実装", en: "Web Design / Development", ko: "웹 디자인 / 구현" },
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
      ko: "NEON FESTIVAL 캠페인 LP",
    },
    summary: {
      ja: "音楽フェスの告知LP。チケット販売開始に合わせた短期集中の制作。",
      en: "A launch landing page for a music festival, produced on a tight run-up to ticket release.",
      ko: "음악 페스티벌 고지 LP. 티켓 판매 개시에 맞춘 단기 집중 제작.",
    },
    description: {
      ja: [
        "公開から3日でチケット完売。CTAをスクロール位置に応じて追従させ、離脱率を前年比で34%改善しました。",
        "ネオンの発光表現はCSSのみで実装し、動画を使わずに初回表示を1.2秒に抑えています。",
      ],
      en: [
        "Tickets sold out within three days of launch. A scroll-aware sticky CTA cut the bounce rate 34% year on year.",
        "The neon glow is pure CSS — no video — which keeps first paint at 1.2 seconds.",
      ],
      ko: [
        "공개 후 3일 만에 티켓 완판. 스크롤 위치에 따라 따라오는 CTA로 이탈률을 전년 대비 34% 개선했습니다.",
        "네온 발광 표현은 CSS만으로 구현해, 영상 없이 첫 표시를 1.2초로 유지했습니다.",
      ],
    },
    thumbnail: { src: "/images/works/neon-festival/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/neon-festival/01.svg",
        alt: { ja: "LPのファーストビュー", en: "Landing page hero", ko: "LP 메인 화면" },
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/works/neon-festival/02.svg",
        alt: { ja: "タイムテーブルセクション", en: "Timetable section", ko: "타임테이블 섹션" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "NEON FESTIVAL 実行委員会", en: "NEON FESTIVAL Committee", ko: "NEON FESTIVAL 실행위원회" },
      role: { ja: "Webデザイン / 実装 / アニメーション", en: "Web Design / Development / Motion", ko: "웹 디자인 / 구현 / 애니메이션" },
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
      ko: "Type Specimen — 서체 견본 사이트",
    },
    summary: {
      ja: "可変フォントの軸をリアルタイムに操作できる、個人制作の書体見本サイト。",
      en: "A personal tool for exploring variable font axes in real time.",
      ko: "가변 폰트의 축을 실시간으로 조작할 수 있는 개인 제작 서체 견본 사이트.",
    },
    description: {
      ja: [
        "ウェイトと光学サイズをスライダーで動かしながら、実際の組版でどう見えるかを確認できます。",
        "フォント読み込みはサブセット化し、初回ペイントをブロックしないよう `font-display: swap` を徹底しました。",
      ],
      en: [
        "Sliders drive weight and optical size so you can judge a face in real setting rather than in isolation.",
        "Fonts are subset and loaded with `font-display: swap` so nothing blocks first paint.",
      ],
      ko: [
        "굵기와 옵티컬 사이즈를 슬라이더로 조작하며 실제 조판에서 어떻게 보이는지 확인할 수 있습니다.",
        "폰트는 서브셋으로 로드하고 `font-display: swap`을 철저히 적용해 첫 페인트를 막지 않습니다.",
      ],
    },
    thumbnail: { src: "/images/works/type-specimen/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/type-specimen/01.svg",
        alt: { ja: "書体一覧画面", en: "Typeface overview", ko: "서체 목록 화면" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "個人制作", en: "Personal project", ko: "개인 제작" },
      role: { ja: "企画 / デザイン / 実装", en: "Concept / Design / Development", ko: "기획 / 디자인 / 구현" },
      year: "2024",
      stack: ["React", "TypeScript", "Vite"],
    },
  },
  {
    slug: "sound-visualizer",
    order: 5,
    categoryKey: "personal",
    title: {
      ja: "Sound Visualizer",
      en: "Sound Visualizer",
      ko: "Sound Visualizer",
    },
    summary: {
      ja: "Web Audio APIとWebGLで音を可視化する実験的なインスタレーション。",
      en: "An experimental installation visualising audio with the Web Audio API and WebGL.",
      ko: "Web Audio API와 WebGL로 소리를 시각화하는 실험적 인스톨레이션.",
    },
    description: {
      ja: [
        "FFTで得た周波数帯を粒子の速度と色相にマッピングし、低音域ほど画面奥へ沈み込むよう設計しました。",
        "60fpsを維持するため、粒子は10万個をインスタンシングで一度に描画しています。",
      ],
      en: [
        "FFT bands map onto particle velocity and hue; lower frequencies sink further back in the scene.",
        "100,000 particles draw in a single instanced call to hold 60fps.",
      ],
      ko: [
        "FFT로 얻은 주파수 대역을 입자의 속도와 색상에 매핑하고, 저음역일수록 화면 안쪽으로 가라앉도록 설계했습니다.",
        "60fps를 유지하기 위해 10만 개의 입자를 인스턴싱으로 한 번에 그립니다.",
      ],
    },
    thumbnail: { src: "/images/works/sound-visualizer/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/sound-visualizer/01.svg",
        alt: { ja: "可視化のスクリーンショット", en: "Visualiser screenshot", ko: "시각화 스크린샷" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "個人制作", en: "Personal project", ko: "개인 제작" },
      role: { ja: "企画 / 実装", en: "Concept / Development", ko: "기획 / 구현" },
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
      ko: "Atelier Journal — 일기를 위한 에디터",
    },
    summary: {
      ja: "書くことに集中するための、装飾を削ぎ落としたローカルファーストのエディタ。",
      en: "A local-first editor stripped back to the act of writing.",
      ko: "쓰는 일에 집중하기 위해 장식을 덜어낸 로컬 퍼스트 에디터.",
    },
    description: {
      ja: [
        "UIはツールバーを持たず、キーボードショートカットとMarkdownだけで完結します。データはすべて端末内に保存されます。",
        "縦書きモードを備え、日本語での執筆体験を優先して設計しました。",
      ],
      en: [
        "No toolbar — everything runs on keyboard shortcuts and Markdown, and all data stays on the device.",
        "A vertical writing mode puts the Japanese writing experience first.",
      ],
      ko: [
        "툴바 없이 키보드 단축키와 마크다운만으로 완결됩니다. 데이터는 모두 기기 안에 저장됩니다.",
        "세로쓰기 모드를 갖춰 일본어 집필 경험을 우선해 설계했습니다.",
      ],
    },
    thumbnail: { src: "/images/works/atelier-journal/thumb.svg", width: 1600, height: 1000 },
    images: [
      {
        src: "/images/works/atelier-journal/01.svg",
        alt: { ja: "エディタ画面", en: "Editor view", ko: "에디터 화면" },
        width: 1600,
        height: 1000,
      },
    ],
    meta: {
      client: { ja: "個人制作", en: "Personal project", ko: "개인 제작" },
      role: { ja: "企画 / デザイン / 実装", en: "Concept / Design / Development", ko: "기획 / 디자인 / 구현" },
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
