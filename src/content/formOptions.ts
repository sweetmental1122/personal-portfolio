import type { Localized } from "./types";

/** Select options for the contact form. Values are sent verbatim in the email. */
export const PROJECT_TYPES: { value: string; label: Localized }[] = [
  {
    value: "business-system",
    label: { ja: "Webシステム・業務システム開発", en: "Web / business system development" },
  },
  { value: "api", label: { ja: "REST API設計・バックエンド開発", en: "REST API design / backend" } },
  { value: "frontend", label: { ja: "フロントエンド開発 (React / Vue.js)", en: "Front-end (React / Vue.js)" } },
  { value: "mobile", label: { ja: "モバイルアプリ開発 (React Native)", en: "Mobile app (React Native)" } },
  { value: "site", label: { ja: "サイト・LP制作、WordPress", en: "Website / landing page / WordPress" } },
  { value: "automation", label: { ja: "業務自動化・スクレイピング・AI連携", en: "Automation / scraping / AI integration" } },
  { value: "infra", label: { ja: "AWS・Docker 環境構築", en: "AWS / Docker environment setup" } },
  { value: "maintenance", label: { ja: "既存システムの改修・保守", en: "Refactoring / maintenance" } },
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
