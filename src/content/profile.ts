import type { Profile } from "./types";

/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT ME — the ABOUT page reads entirely from this object.
 * ─────────────────────────────────────────────────────────────
 */
export const profile: Profile = {
  portrait: "/images/about/portrait.svg",

  headline: {
    lead: {
      ja: "Communicating Beauty Through",
      en: "Communicating Beauty Through",
      ko: "Communicating Beauty Through",
    },
    main: {
      ja: "Motion and Experience.",
      en: "Motion and Experience.",
      ko: "Motion and Experience.",
    },
  },

  catchphrase: {
    ja: "美しさを、動きと体験で伝える。",
    en: "Beauty, told through motion and experience.",
    ko: "아름다움을 움직임과 경험으로 전합니다.",
  },

  intro: {
    ja: [
      "はじめまして。東京を拠点にWeb制作とデジタルコンテンツ制作をしています。",
      "見た目の美しさだけでなく、「ブランドの世界観が伝わり、ユーザーが自然と行動したくなる体験」を大切にしています。",
      "Webデザインを軸に、UI設計、アニメーション、コーディング、ロゴ、画像・動画制作まで一貫して対応できます。",
    ],
    en: [
      "Hello. I'm a designer and developer based in Tokyo, working across web and digital content.",
      "Beyond surface aesthetics, I care about experiences that carry a brand's world view and make the next action feel natural.",
      "Starting from web design, I cover UI, motion, front-end code, logo work and image/video production end to end.",
    ],
    ko: [
      "안녕하세요. 도쿄를 거점으로 웹 제작과 디지털 콘텐츠 제작을 하고 있습니다.",
      "보기 좋은 것만이 아니라, 브랜드의 세계관이 전달되고 사용자가 자연스럽게 행동하게 되는 경험을 중요하게 생각합니다.",
      "웹 디자인을 중심으로 UI 설계, 애니메이션, 코딩, 로고, 이미지 · 영상 제작까지 일관되게 대응합니다.",
    ],
  },

  qualifications: [
    { label: { ja: "Webデザイン技能検定 2級", en: "Web Design Skills Certification, Grade 2", ko: "웹 디자인 기능 검정 2급" } },
    { label: { ja: "色彩検定 2級", en: "Color Coordinator Certification, Grade 2", ko: "색채 검정 2급" } },
  ],

  awards: [
    { label: { ja: "学生デザインコンペ 最優秀賞", en: "Student Design Competition — Grand Prize", ko: "학생 디자인 공모전 최우수상" } },
  ],

  experience: [
    {
      period: { ja: "2016年4月 〜 2021年3月", en: "Apr 2016 — Mar 2021", ko: "2016년 4월 ~ 2021년 3월" },
      title: {
        ja: "◯◯大学 デザイン情報学科",
        en: "BA, Design & Information Studies",
        ko: "◯◯대학교 디자인정보학과",
      },
      body: {
        ja: "メディアアートを専攻し、プログラミングと視覚表現の両方を学ぶ。在学中からLP制作やサイトリニューアルに携わる。",
        en: "Majored in media art, studying programming alongside visual expression. Started building landing pages and site renewals while still at university.",
        ko: "미디어 아트를 전공하며 프로그래밍과 시각 표현을 함께 배웠습니다. 재학 중부터 랜딩 페이지 제작과 사이트 리뉴얼에 참여했습니다.",
      },
    },
    {
      period: { ja: "2021年4月 〜 現在", en: "Apr 2021 — Present", ko: "2021년 4월 ~ 현재" },
      title: {
        ja: "フリーランス Webデザイナー / フロントエンド",
        en: "Freelance Web Designer / Front-End Developer",
        ko: "프리랜스 웹 디자이너 / 프론트엔드",
      },
      body: {
        ja: "ファッション、コスメ、出版、エンターテインメントなど幅広い分野でデザインとコーディングを担当。企画から実装、運用改善までを一貫して行う。",
        en: "Design and front-end work across fashion, cosmetics, publishing and entertainment — from concept through implementation and ongoing improvement.",
        ko: "패션, 코스메틱, 출판, 엔터테인먼트 등 폭넓은 분야에서 디자인과 코딩을 담당. 기획부터 구현, 운영 개선까지 일관되게 수행합니다.",
      },
    },
    {
      period: { ja: "これから", en: "Looking ahead", ko: "앞으로" },
      title: {
        ja: "デザインとビジネスをつなぐ",
        en: "Bridging design and business",
        ko: "디자인과 비즈니스를 잇다",
      },
      body: {
        ja: "マーケティングとブランディングを学び、数字が動くことと魅力的なデザインを両立させること。最前線の技術に食らいついていくこと。",
        en: "Deepening marketing and branding knowledge so that work moves numbers as well as it looks — and keeping pace with the front line of the craft.",
        ko: "마케팅과 브랜딩을 배워 수치가 움직이는 것과 매력적인 디자인을 양립시키는 것. 최전선의 기술을 계속 따라가는 것.",
      },
    },
  ],

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
    { ja: "Research", en: "Research", ko: "Research" },
    { ja: "Wireframe", en: "Wireframe", ko: "Wireframe" },
    { ja: "Design", en: "Design", ko: "Design" },
    { ja: "Development", en: "Development", ko: "Development" },
    { ja: "Launch", en: "Launch", ko: "Launch" },
  ],

  cta: {
    heading: {
      ja: "Let's create something beautiful together.",
      en: "Let's create something beautiful together.",
      ko: "Let's create something beautiful together.",
    },
    body: {
      ja: "お仕事のご相談・ご依頼はお気軽にお問い合わせください。",
      en: "I'd love to hear about your project. Get in touch any time.",
      ko: "프로젝트 상담과 의뢰는 언제든지 편하게 문의해 주세요.",
    },
  },
};
