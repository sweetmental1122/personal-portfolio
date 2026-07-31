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
    eyebrowQualifications: string;
    eyebrowAwards: string;
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
    sceneLabel: string;
    empty: string;
    viewProject: string;
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
    errorValidation: string;
    directEmail: string;
  };
  notFound: {
    title: string;
    message: string;
    goHome: string;
    goWorks: string;
  };
  footer: {
    rights: string;
  };
};

const ja: Dictionary = {
  nav: {
    home: "HOME",
    about: "ABOUT",
    works: "WORKS",
    contact: "CONTACT",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    primaryNav: "メインナビゲーション",
    language: "言語",
    skipToContent: "本文へスキップ",
    toLight: "ライトモードに切り替える",
    toDark: "ダークモードに切り替える",
  },
  home: {
    role: "Web Designer / Front-End Developer",
    viewWorks: "View Works",
    scrollHint: "スクロールまたはドラッグで回転します",
  },
  about: {
    eyebrowQualifications: "Qualifications",
    eyebrowAwards: "Awards",
    eyebrowSkills: "Skills",
    eyebrowProcess: "Process",
    eyebrowExperience: "Experience",
    portraitAlt: "ポートレート写真",
    ctaButton: "お問い合わせ",
  },
  works: {
    title: "作品",
    all: "ALL",
    filterLabel: "カテゴリーで絞り込む",
    sceneLabel: "選んだ仕事",
    empty: "このカテゴリーの作品はまだありません。",
    viewProject: "プロジェクトを見る",
    back: "一覧に戻る",
    information: "Information",
    client: "Client",
    role: "Role",
    year: "Year",
    stack: "Stack",
    liveSite: "サイトを見る",
    noImages: "画像は準備中です。",
  },
  contact: {
    title: "CONTACT",
    intro:
      "制作のご依頼、お見積もり、ご相談など、お気軽にお問い合わせください。内容を確認後、通常2〜3営業日以内にご返信いたします。",
    name: "お名前",
    company: "会社名・ブランド名",
    email: "メールアドレス",
    budget: "ご予算",
    projectType: "ご依頼内容",
    deadline: "ご希望納期",
    message: "お問い合わせ内容",
    required: "必須",
    optional: "任意",
    select: "選択してください",
    consent: "プライバシーポリシーに同意します",
    privacyLink: "プライバシーポリシー",
    submit: "送信する",
    sending: "送信中…",
    successTitle: "Thank you.",
    successBody: "お問い合わせありがとうございます。2〜3営業日以内にご返信いたします。",
    errorGeneric: "送信に失敗しました。時間をおいて再度お試しください。",
    errorValidation: "入力内容をご確認ください。",
    directEmail: "直接メールでのご連絡もお受けしています。",
  },
  notFound: {
    title: "ページが見つかりませんでした",
    message:
      "お探しのページは移動または削除された可能性があります。URLをご確認いただくか、下のリンクからお戻りください。",
    goHome: "ホームへ",
    goWorks: "作品を見る",
  },
  footer: {
    rights: "All rights reserved.",
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
    role: "Web Designer / Front-End Developer",
    viewWorks: "View Works",
    scrollHint: "Scroll or drag to rotate",
  },
  about: {
    eyebrowQualifications: "Qualifications",
    eyebrowAwards: "Awards",
    eyebrowSkills: "Skills",
    eyebrowProcess: "Process",
    eyebrowExperience: "Experience",
    portraitAlt: "Portrait photograph",
    ctaButton: "Get in touch",
  },
  works: {
    title: "Works",
    all: "ALL",
    filterLabel: "Filter by category",
    sceneLabel: "Selected works",
    empty: "No projects in this category yet.",
    viewProject: "View project",
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
    title: "CONTACT",
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
    consent: "I agree to the privacy policy",
    privacyLink: "Privacy Policy",
    submit: "Send",
    sending: "Sending…",
    successTitle: "Thank you.",
    successBody: "Your message has been received. I'll get back to you within 2–3 business days.",
    errorGeneric: "Something went wrong. Please try again in a moment.",
    errorValidation: "Please check the highlighted fields.",
    directEmail: "You can also reach me directly by email.",
  },
  notFound: {
    title: "This page could not be found",
    message:
      "The page you are looking for may have been moved or removed. Check the URL, or head back using the links below.",
    goHome: "Go home",
    goWorks: "See works",
  },
  footer: {
    rights: "All rights reserved.",
  },
};

const ko: Dictionary = {
  nav: {
    home: "HOME",
    about: "ABOUT",
    works: "WORKS",
    contact: "CONTACT",
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
    primaryNav: "주요 내비게이션",
    language: "언어",
    skipToContent: "본문으로 건너뛰기",
    toLight: "라이트 모드로 전환",
    toDark: "다크 모드로 전환",
  },
  home: {
    role: "Web Designer / Front-End Developer",
    viewWorks: "View Works",
    scrollHint: "스크롤 또는 드래그로 회전합니다",
  },
  about: {
    eyebrowQualifications: "Qualifications",
    eyebrowAwards: "Awards",
    eyebrowSkills: "Skills",
    eyebrowProcess: "Process",
    eyebrowExperience: "Experience",
    portraitAlt: "포트레이트 사진",
    ctaButton: "문의하기",
  },
  works: {
    title: "작품",
    all: "ALL",
    filterLabel: "카테고리로 필터",
    sceneLabel: "선택된 작업",
    empty: "이 카테고리에는 아직 작품이 없습니다.",
    viewProject: "프로젝트 보기",
    back: "목록으로 돌아가기",
    information: "Information",
    client: "Client",
    role: "Role",
    year: "Year",
    stack: "Stack",
    liveSite: "사이트 보기",
    noImages: "이미지는 준비 중입니다.",
  },
  contact: {
    title: "CONTACT",
    intro:
      "제작 의뢰, 견적, 상담 등 편하게 문의해 주세요. 확인 후 보통 2~3영업일 이내에 답변드립니다.",
    name: "이름",
    company: "회사명 · 브랜드명",
    email: "이메일",
    budget: "예산",
    projectType: "의뢰 내용",
    deadline: "희망 납기",
    message: "문의 내용",
    required: "필수",
    optional: "선택",
    select: "선택해 주세요",
    consent: "개인정보 처리방침에 동의합니다",
    privacyLink: "개인정보 처리방침",
    submit: "보내기",
    sending: "전송 중…",
    successTitle: "Thank you.",
    successBody: "문의해 주셔서 감사합니다. 2~3영업일 이내에 답변드리겠습니다.",
    errorGeneric: "전송에 실패했습니다. 잠시 후 다시 시도해 주세요.",
    errorValidation: "입력 내용을 확인해 주세요.",
    directEmail: "이메일로 직접 연락하셔도 됩니다.",
  },
  notFound: {
    title: "페이지를 찾을 수 없습니다",
    message:
      "찾으시는 페이지가 이동되었거나 삭제되었을 수 있습니다. URL을 확인하시거나 아래 링크로 돌아가 주세요.",
    goHome: "홈으로",
    goWorks: "작품 보기",
  },
  footer: {
    rights: "All rights reserved.",
  },
};

const DICTIONARIES: Record<Locale, Dictionary> = { ja, en, ko };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
