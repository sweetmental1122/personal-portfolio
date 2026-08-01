import type { Profile } from "./types";

/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT ME — the ABOUT page reads entirely from this object.
 *  Every visible string has a `ja` and an `en` form, so switching
 *  language changes the whole page, not just part of it.
 * ─────────────────────────────────────────────────────────────
 */
export const profile: Profile = {
  portrait: "/images/about/portrait.svg",

  // Rendered as a two-line display heading: `lead` small, `main` large.
  headline: {
    lead: {
      ja: "美しさを、伝わるかたちに。",
      en: "Communicating Beauty Through",
    },
    main: {
      ja: "動きと体験のデザイン。",
      en: "Motion and Experience.",
    },
  },

  catchphrase: {
    ja: "ブランドとユーザーをつなぐ、Webデザインとフロントエンド。",
    en: "Design that connects a brand with the people it is for.",
  },

  intro: {
    ja: [
      "はじめまして。東京を拠点に、Web制作とデジタルコンテンツ制作をしています。",
      "見た目の美しさだけでなく、「ブランドの世界観が伝わり、ユーザーが自然と次の行動をとりたくなる体験」を大切にしています。",
      "Webデザインを軸に、UI設計、アニメーション、コーディング、ロゴ、画像・動画制作まで一貫して対応できます。",
    ],
    en: [
      "Hello. I'm a designer and developer based in Tokyo, working across web and digital content.",
      "Beyond surface aesthetics, I care about experiences that carry a brand's world view and make the next action feel natural.",
      "Starting from web design, I cover UI, motion, front-end code, logo work and image/video production end to end.",
    ],
  },

  qualifications: [
    { label: { ja: "Webデザイン技能検定 2級", en: "Web Design Skills Certification, Grade 2" } },
    { label: { ja: "色彩検定 2級", en: "Color Coordinator Certification, Grade 2" } },
  ],

  awards: [{ label: { ja: "学生デザインコンペ 最優秀賞", en: "Student Design Competition — Grand Prize" } }],

  experience: [
    {
      period: { ja: "2016年4月 〜 2021年3月", en: "Apr 2016 — Mar 2021" },
      title: {
        ja: "◯◯大学 デザイン情報学科",
        en: "BA, Design & Information Studies",
      },
      body: {
        ja: "メディアアートを専攻し、プログラミングと視覚表現の両方を学ぶ。在学中からランディングページ制作やサイトリニューアルに携わる。",
        en: "Majored in media art, studying programming alongside visual expression. Started building landing pages and site renewals while still at university.",
      },
    },
    {
      period: { ja: "2021年4月 〜 現在", en: "Apr 2021 — Present" },
      title: {
        ja: "フリーランス Webデザイナー / フロントエンドエンジニア",
        en: "Freelance Web Designer / Front-End Developer",
      },
      body: {
        ja: "ファッション、コスメ、出版、エンターテインメントなど幅広い分野でデザインとコーディングを担当。企画から実装、公開後の運用改善までを一貫して行う。",
        en: "Design and front-end work across fashion, cosmetics, publishing and entertainment — from concept through implementation and ongoing improvement.",
      },
    },
    {
      period: { ja: "これから", en: "Looking ahead" },
      title: {
        ja: "デザインとビジネスをつなぐ",
        en: "Bridging design and business",
      },
      body: {
        ja: "マーケティングとブランディングを学び、数字が動くことと魅力的なデザインを両立させること。そして最前線の技術に食らいついていくこと。",
        en: "Deepening marketing and branding knowledge so that work moves numbers as well as it looks — and keeping pace with the front line of the craft.",
      },
    },
  ],

  // Product names are proper nouns and stay identical in both languages.
  skills: [
    { code: "Fi", name: "Figma" },
    { code: "Ps", name: "Photoshop" },
    { code: "Ai", name: "Illustrator" },
    { code: "Ae", name: "After Effects" },
    { code: "Pr", name: "Premiere Pro" },
    { code: "H5", name: "HTML" },
    { code: "C3", name: "CSS" },
    { code: "TS", name: "TypeScript" },
    { code: "Re", name: "React" },
    { code: "Nx", name: "Next.js" },
    { code: "Gs", name: "GSAP" },
    { code: "Wp", name: "WordPress" },
  ],

  process: [
    { ja: "調査・要件整理", en: "Research" },
    { ja: "ワイヤーフレーム", en: "Wireframe" },
    { ja: "デザイン", en: "Design" },
    { ja: "実装", en: "Development" },
    { ja: "公開・改善", en: "Launch" },
  ],

  cta: {
    heading: {
      ja: "いっしょに、美しいものをつくりましょう。",
      en: "Let's create something beautiful together.",
    },
    body: {
      ja: "お仕事のご相談・ご依頼は、お気軽にお問い合わせください。",
      en: "I'd love to hear about your project. Get in touch any time.",
    },
  },
};
