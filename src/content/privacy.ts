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
};

export const privacySections: PrivacySection[] = [
  {
    heading: {
      ja: "取得する情報",
      en: "Information we collect",
    },
    body: {
      ja: "お問い合わせフォームから送信された、お名前、会社名・ブランド名、メールアドレス、ご依頼内容、ご予算、ご希望納期、お問い合わせ内容を取得します。それ以外の個人情報を取得することはありません。",
      en: "Through the contact form we receive your name, company or brand name, email address, project type, budget, preferred deadline and message. No other personal information is collected.",
    },
  },
  {
    heading: {
      ja: "利用目的",
      en: "How we use it",
    },
    body: {
      ja: "取得した情報は、お問い合わせへの返信、お見積もりのご案内、および業務上必要な連絡のためにのみ利用します。ご本人の同意なく他の目的に利用することはありません。",
      en: "Your information is used solely to reply to your enquiry, prepare an estimate and carry out any communication the work requires. It is never used for another purpose without your consent.",
    },
  },
  {
    heading: {
      ja: "第三者への提供",
      en: "Sharing with third parties",
    },
    body: {
      ja: "法令に基づく場合を除き、ご本人の同意なく第三者へ個人情報を提供することはありません。メール配信のために外部サービスを利用する場合がありますが、その範囲を超えて共有されることはありません。",
      en: "Personal information is never shared with third parties without your consent, except where required by law. An external service may be used to deliver email, but nothing is shared beyond that.",
    },
  },
  {
    heading: {
      ja: "アクセス解析",
      en: "Analytics",
    },
    body: {
      ja: "本サイトではアクセス解析ツールを利用する場合があります。これらはCookieを使用しますが、個人を特定する情報は含まれません。ブラウザの設定によりCookieを無効にすることができます。",
      en: "This site may use an analytics tool. These rely on cookies but do not include personally identifying information, and cookies can be disabled in your browser settings.",
    },
  },
  {
    heading: {
      ja: "開示・訂正・削除について",
      en: "Access, correction and deletion",
    },
    body: {
      ja: "ご本人からお預かりした情報の開示、訂正、削除をご希望の場合は、お問い合わせ先までご連絡ください。速やかに対応いたします。",
      en: "If you would like the information you provided disclosed, corrected or deleted, contact us and we will act on it promptly.",
    },
  },
  {
    heading: {
      ja: "お問い合わせ先",
      en: "Contact",
    },
    body: {
      ja: "本ポリシーに関するご質問は、下記のメールアドレスまでお願いいたします。",
      en: "For any question about this policy, please use the email address below.",
    },
  },
];
