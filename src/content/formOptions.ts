import type { Localized } from "./types";

/** Select options for the contact form. Values are sent verbatim in the email. */
export const PROJECT_TYPES: { value: string; label: Localized }[] = [
  {
    value: "landing-page",
    label: { ja: "ランディングページ・キャンペーンサイト", en: "Landing page / campaign" },
  },
  { value: "brand-site", label: { ja: "ブランドサイト", en: "Brand site" } },
  { value: "corporate-site", label: { ja: "コーポレートサイト", en: "Corporate site" } },
  { value: "ui-design", label: { ja: "UIデザインのみ", en: "UI design only" } },
  { value: "front-end", label: { ja: "実装のみ", en: "Front-end only" } },
  { value: "other", label: { ja: "その他・まずは相談したい", en: "Something else" } },
];

export const BUDGETS: { value: string; label: Localized }[] = [
  { value: "under-300k", label: { ja: "〜30万円", en: "Under ¥300,000" } },
  { value: "300k-800k", label: { ja: "30〜80万円", en: "¥300,000 – ¥800,000" } },
  { value: "800k-1.5m", label: { ja: "80〜150万円", en: "¥800,000 – ¥1.5M" } },
  { value: "over-1.5m", label: { ja: "150万円〜", en: "Over ¥1.5M" } },
  { value: "undecided", label: { ja: "未定・相談したい", en: "Not decided yet" } },
];

export const DEADLINES: { value: string; label: Localized }[] = [
  { value: "1-month", label: { ja: "1か月以内", en: "Within 1 month" } },
  { value: "2-3-months", label: { ja: "2〜3か月以内", en: "Within 2–3 months" } },
  { value: "4-plus-months", label: { ja: "4か月以降", en: "4 months or later" } },
  { value: "undecided", label: { ja: "未定", en: "Not decided yet" } },
  { value: "flexible", label: { ja: "相談して決めたい", en: "Let's discuss" } },
];
