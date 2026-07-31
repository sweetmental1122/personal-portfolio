import type { Localized } from "./types";

export type PrivacySection = { heading: Localized; body: Localized };

/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT ME — placeholder policy text. Have it reviewed before
 *  you publish; this is a starting point, not legal advice.
 * ─────────────────────────────────────────────────────────────
 */
export const privacyTitle: Localized = {
  ja: "プライバシーポリシー",
  en: "Privacy Policy",
  ko: "개인정보 처리방침",
};

export const privacySections: PrivacySection[] = [
  {
    heading: {
      ja: "取得する情報",
      en: "Information we collect",
      ko: "수집하는 정보",
    },
    body: {
      ja: "お問い合わせフォームから送信された、お名前、会社名・ブランド名、メールアドレス、ご依頼内容、ご予算、ご希望納期、お問い合わせ内容を取得します。それ以外の個人情報を取得することはありません。",
      en: "Through the contact form we receive your name, company or brand name, email address, project type, budget, preferred deadline and message. No other personal information is collected.",
      ko: "문의 폼을 통해 이름, 회사명 · 브랜드명, 이메일 주소, 의뢰 내용, 예산, 희망 납기, 문의 내용을 수집합니다. 그 외의 개인정보는 수집하지 않습니다.",
    },
  },
  {
    heading: {
      ja: "利用目的",
      en: "How we use it",
      ko: "이용 목적",
    },
    body: {
      ja: "取得した情報は、お問い合わせへの返信、お見積もりのご案内、および業務上必要な連絡のためにのみ利用します。ご本人の同意なく他の目的に利用することはありません。",
      en: "Your information is used solely to reply to your enquiry, prepare an estimate and carry out any communication the work requires. It is never used for another purpose without your consent.",
      ko: "수집한 정보는 문의에 대한 회신, 견적 안내, 업무상 필요한 연락에만 이용합니다. 본인의 동의 없이 다른 목적으로 이용하지 않습니다.",
    },
  },
  {
    heading: {
      ja: "第三者提供",
      en: "Sharing with third parties",
      ko: "제3자 제공",
    },
    body: {
      ja: "法令に基づく場合を除き、ご本人の同意なく第三者へ個人情報を提供することはありません。メール配信のために外部サービスを利用する場合がありますが、その範囲を超えて共有されることはありません。",
      en: "Personal information is never shared with third parties without your consent, except where required by law. An external service may be used to deliver email, but nothing is shared beyond that.",
      ko: "법령에 근거한 경우를 제외하고, 본인의 동의 없이 제3자에게 개인정보를 제공하지 않습니다. 이메일 전송을 위해 외부 서비스를 이용할 수 있으나 그 범위를 넘어 공유되지 않습니다.",
    },
  },
  {
    heading: {
      ja: "アクセス解析",
      en: "Analytics",
      ko: "접속 분석",
    },
    body: {
      ja: "本サイトではアクセス解析ツールを利用する場合があります。これらはCookieを使用しますが、個人を特定する情報は含まれません。ブラウザの設定によりCookieを無効にすることができます。",
      en: "This site may use an analytics tool. These rely on cookies but do not include personally identifying information, and cookies can be disabled in your browser settings.",
      ko: "본 사이트는 접속 분석 도구를 이용할 수 있습니다. 이는 쿠키를 사용하지만 개인을 특정하는 정보는 포함하지 않으며, 브라우저 설정에서 쿠키를 비활성화할 수 있습니다.",
    },
  },
  {
    heading: {
      ja: "開示・訂正・削除",
      en: "Access, correction and deletion",
      ko: "공개 · 정정 · 삭제",
    },
    body: {
      ja: "ご本人からお預かりした情報の開示、訂正、削除のご希望があれば、お問い合わせ先までご連絡ください。速やかに対応いたします。",
      en: "If you would like the information you provided disclosed, corrected or deleted, contact us and we will act on it promptly.",
      ko: "제공하신 정보의 공개, 정정, 삭제를 원하시면 문의처로 연락해 주세요. 신속히 대응하겠습니다.",
    },
  },
];
