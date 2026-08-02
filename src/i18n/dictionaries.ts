import type { Locale } from "./config";

export type Dictionary = {
  nav: {
    home: string;
    about: string;
    works: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    primaryNav: string;
    language: string;
    skipToContent: string;
    toLight: string;
    toDark: string;
  };
  home: {
    role: string;
    viewWorks: string;
    scrollHint: string;
  };
  about: {
    /** Used for the <title> tag, so it is prose rather than a nav label. */
    pageTitle: string;
    eyebrowSkills: string;
    eyebrowProcess: string;
    eyebrowExperience: string;
    portraitAlt: string;
    ctaButton: string;
  };
  works: {
    title: string;
    all: string;
    filterLabel: string;
    empty: string;
    back: string;
    information: string;
    client: string;
    role: string;
    year: string;
    stack: string;
    liveSite: string;
    noImages: string;
  };
  contact: {
    title: string;
    intro: string;
    name: string;
    company: string;
    email: string;
    budget: string;
    projectType: string;
    deadline: string;
    message: string;
    required: string;
    optional: string;
    select: string;
    consent: string;
    privacyLink: string;
    submit: string;
    sending: string;
    successTitle: string;
    successBody: string;
    errorGeneric: string;
    directEmail: string;
    channelsTitle: string;
    channelsNote: string;
  };
  notFound: {
    title: string;
    message: string;
    goHome: string;
    goWorks: string;
  };
};

const ja: Dictionary = {
  nav: {
    home: "ホーム",
    about: "プロフィール",
    works: "開発実績",
    contact: "お問い合わせ",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    primaryNav: "メインナビゲーション",
    language: "言語",
    skipToContent: "本文へスキップ",
    toLight: "ライトモードに切り替える",
    toDark: "ダークモードに切り替える",
  },
  home: {
    role: "ソフトウェアエンジニア / フルスタック開発",
    viewWorks: "開発実績を見る",
    scrollHint: "スクロールまたはドラッグで回転します",
  },
  about: {
    pageTitle: "プロフィール",
    eyebrowSkills: "技術スタック",
    eyebrowProcess: "開発の進め方",
    eyebrowExperience: "経歴",
    portraitAlt: "ポートレート写真",
    ctaButton: "お問い合わせ",
  },
  works: {
    title: "開発実績",
    all: "すべて",
    filterLabel: "カテゴリーで絞り込む",
    empty: "このカテゴリーの実績はまだありません。",
    back: "一覧に戻る",
    information: "プロジェクト情報",
    client: "クライアント",
    role: "担当範囲",
    year: "実施年",
    stack: "使用技術",
    liveSite: "サイトを見る",
    noImages: "画像は準備中です。",
  },
  contact: {
    title: "お問い合わせ",
    intro:
      "開発のご依頼、お見積もり、技術的なご相談など、お気軽にお問い合わせください。要件が固まっていない段階のご相談も歓迎です。内容を確認のうえ、通常2〜3営業日以内にご返信いたします。",
    name: "お名前",
    company: "会社名・団体名",
    email: "メールアドレス",
    budget: "ご予算",
    projectType: "ご依頼内容",
    deadline: "ご希望納期",
    message: "お問い合わせ内容",
    required: "必須",
    optional: "任意",
    select: "選択してください",
    consent: "上記に同意して送信します",
    privacyLink: "プライバシーポリシー",
    submit: "送信する",
    sending: "送信中…",
    successTitle: "ありがとうございます",
    successBody: "お問い合わせを受け付けました。2〜3営業日以内にご返信いたします。",
    errorGeneric: "送信に失敗しました。時間をおいて再度お試しください。",
    directEmail: "メールで直接ご連絡いただいても構いません。",
    channelsTitle: "チャットでのご連絡",
    channelsNote: "フォームよりも、普段お使いのツールのほうが早い場合はこちらから。",
  },
  notFound: {
    title: "ページが見つかりませんでした",
    message:
      "お探しのページは移動または削除された可能性があります。URLをご確認いただくか、下のリンクからお戻りください。",
    goHome: "ホームへ戻る",
    goWorks: "開発実績を見る",
  },
};

const en: Dictionary = {
  nav: {
    home: "HOME",
    about: "ABOUT",
    works: "WORKS",
    contact: "CONTACT",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    primaryNav: "Primary navigation",
    language: "Language",
    skipToContent: "Skip to content",
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
  },
  home: {
    role: "Software Engineer / Full-Stack Developer",
    viewWorks: "View Works",
    scrollHint: "Scroll or drag to rotate",
  },
  about: {
    pageTitle: "About",
    eyebrowSkills: "Tech Stack",
    eyebrowProcess: "Process",
    eyebrowExperience: "Experience",
    portraitAlt: "Portrait photograph",
    ctaButton: "Get in touch",
  },
  works: {
    title: "Works",
    all: "All",
    filterLabel: "Filter by category",
    empty: "No projects in this category yet.",
    back: "Back to works",
    information: "Information",
    client: "Client",
    role: "Role",
    year: "Year",
    stack: "Stack",
    liveSite: "Visit site",
    noImages: "Images coming soon.",
  },
  contact: {
    title: "Contact",
    intro:
      "For project enquiries, estimates or a quick question — please get in touch. I usually reply within 2–3 business days.",
    name: "Name",
    company: "Company / Brand",
    email: "Email",
    budget: "Budget",
    projectType: "Project type",
    deadline: "Preferred deadline",
    message: "Message",
    required: "Required",
    optional: "Optional",
    select: "Please select",
    consent: "I agree and would like to send this message",
    privacyLink: "Privacy Policy",
    submit: "Send",
    sending: "Sending…",
    successTitle: "Thank you.",
    successBody: "Your message has been received. I'll get back to you within 2–3 business days.",
    errorGeneric: "Something went wrong. Please try again in a moment.",
    directEmail: "You're welcome to email me directly instead.",
    channelsTitle: "Chat instead",
    channelsNote: "If a tool you already use is quicker than a form, reach me here.",
  },
  notFound: {
    title: "This page could not be found",
    message:
      "The page you are looking for may have been moved or removed. Check the URL, or head back using the links below.",
    goHome: "Go home",
    goWorks: "See works",
  },
};

const DICTIONARIES: Record<Locale, Dictionary> = { ja, en };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
