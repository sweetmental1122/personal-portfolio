import type { Localized } from "./types";

/** Select options for the contact form. Values are sent verbatim in the email. */
export const PROJECT_TYPES: { value: string; label: Localized }[] = [
  {
    value: "landing-page",
    label: { ja: "LP・キャンペーンサイト", en: "Landing page / campaign", ko: "LP · 캠페인 사이트" },
  },
  {
    value: "brand-site",
    label: { ja: "ブランドサイト", en: "Brand site", ko: "브랜드 사이트" },
  },
  {
    value: "corporate-site",
    label: { ja: "コーポレートサイト", en: "Corporate site", ko: "코퍼레이트 사이트" },
  },
  {
    value: "ui-design",
    label: { ja: "UIデザインのみ", en: "UI design only", ko: "UI 디자인만" },
  },
  {
    value: "front-end",
    label: { ja: "実装のみ", en: "Front-end only", ko: "구현만" },
  },
  {
    value: "other",
    label: { ja: "その他・相談", en: "Something else", ko: "기타 · 상담" },
  },
];

export const BUDGETS: { value: string; label: Localized }[] = [
  { value: "under-300k", label: { ja: "〜30万円", en: "Under ¥300,000", ko: "~30만 엔" } },
  { value: "300k-800k", label: { ja: "30〜80万円", en: "¥300,000 – ¥800,000", ko: "30~80만 엔" } },
  { value: "800k-1.5m", label: { ja: "80〜150万円", en: "¥800,000 – ¥1.5M", ko: "80~150만 엔" } },
  { value: "over-1.5m", label: { ja: "150万円〜", en: "Over ¥1.5M", ko: "150만 엔~" } },
  { value: "undecided", label: { ja: "未定・相談したい", en: "Not decided yet", ko: "미정 · 상담 희망" } },
];

export const DEADLINES: { value: string; label: Localized }[] = [
  { value: "1-month", label: { ja: "1か月以内", en: "Within 1 month", ko: "1개월 이내" } },
  { value: "2-3-months", label: { ja: "2〜3か月以内", en: "Within 2–3 months", ko: "2~3개월 이내" } },
  { value: "4-plus-months", label: { ja: "4か月以降", en: "4 months or later", ko: "4개월 이후" } },
  { value: "undecided", label: { ja: "未定", en: "Not decided yet", ko: "미정" } },
  { value: "flexible", label: { ja: "相談して決めたい", en: "Let's discuss", ko: "상담 후 결정" } },
];
