import type { Localized } from "./types";

/**
 * ─────────────────────────────────────────────────────────────
 *  Sites collected as design and interaction reference.
 *
 *  These are OTHER STUDIOS' AND COMPANIES' WORK, not this portfolio's.
 *  The page that renders them says so plainly, in both languages. Keep it
 *  that way — the value here is showing the range you can build to and
 *  that you read interfaces closely, which only holds if the framing is
 *  honest. Real project credit belongs in works.ts.
 * ─────────────────────────────────────────────────────────────
 */

export type ReferenceGroup = {
  key: string;
  label: Localized;
};

export type ReferenceSite = {
  name: string;
  url: string;
  image: string;
  groupKey: string;
  /** What is worth studying about the interface, in one line. */
  note: Localized;
};

export const REFERENCE_GROUPS: ReferenceGroup[] = [
  { key: "recruit", label: { ja: "採用・コーポレート", en: "Recruiting & Corporate" } },
  { key: "commerce", label: { ja: "EC・ブランド", en: "Commerce & Brand" } },
  { key: "education", label: { ja: "教育", en: "Education" } },
  { key: "medical", label: { ja: "医療・ヘルスケア", en: "Medical & Healthcare" } },
  { key: "entertainment", label: { ja: "エンターテインメント", en: "Entertainment" } },
];

export const references: ReferenceSite[] = [
  {
    name: "BIZREACH Careers",
    url: "https://careers.bizreach.co.jp/",
    image: "/images/references/bizreach-careers.jpg",
    groupKey: "recruit",
    note: {
      ja: "大判の写真に極太の明朝を重ね、スクロールでビジュアルを差し替える採用サイト。文字組みだけで強度を出している。",
      en: "Heavy mincho type over full-bleed photography, with the visual swapping as you scroll. Its force comes from the typesetting alone.",
    },
  },
  {
    name: "MI-6 Recruit",
    url: "https://recruit.mi-6.co.jp/",
    image: "/images/references/mi6-recruit.jpg",
    groupKey: "recruit",
    note: {
      ja: "円形マスクで写真を切り抜き、見出しの一部だけをキーカラーの青に落とす配色設計。",
      en: "Photography cropped into a circular mask, with only part of each heading dropped into the brand blue.",
    },
  },
  {
    name: "CAM-COM Recruit",
    url: "https://cam-com.inc/recruit/",
    image: "/images/references/camcom-recruit.jpg",
    groupKey: "recruit",
    note: {
      ja: "菱形のクリップパスで写真を組み、幾何形状だけでリズムを作った構成。CSS の clip-path で再現できる。",
      en: "Diamond clip-paths assemble the photography, building rhythm purely from geometry — reproducible with CSS clip-path.",
    },
  },
  {
    name: "ReDesigner for Freelance",
    url: "https://redesigner.jp/freelance/",
    image: "/images/references/redesigner-freelance.jpg",
    groupKey: "recruit",
    note: {
      ja: "図形とドットパターンを余白に散らし、赤一色のアクセントでCTAを際立たせるサービスサイト。",
      en: "Shapes and dot patterns scattered through the whitespace, with a single red accent carrying the call to action.",
    },
  },
  {
    name: "ミヤモトオレンジガーデン",
    url: "https://shop.orange-garden-inc.jp/",
    image: "/images/references/orange-garden.jpg",
    groupKey: "commerce",
    note: {
      ja: "農産物EC。ランキング順位と規格バッジを商品画像に重ね、一覧の情報密度を上げている。",
      en: "A produce storefront that stacks rank numbers and grade badges onto the product images, raising the density of the listing.",
    },
  },
  {
    name: "UVO produced by Wpc.",
    url: "https://www.uv0.jp/",
    image: "/images/references/uv0.jpg",
    groupKey: "commerce",
    note: {
      ja: "淡いグラデーションの背景に商品を大きく置き、ロゴのカーニングまで含めて一枚のキービジュアルにしている。",
      en: "Product placed large on a pale gradient, with even the logo kerning treated as part of a single key visual.",
    },
  },
  {
    name: "Welleg",
    url: "https://www.welleg.co.jp/",
    image: "/images/references/welleg.jpg",
    groupKey: "commerce",
    note: {
      ja: "全画面写真と円形のスクロールインジケータ。余白を大きく取り、要素を足さない引き算の設計。",
      en: "Full-screen photography with a circular scroll indicator. Generous whitespace and a deliberate refusal to add elements.",
    },
  },
  {
    name: "Pudgy Penguins",
    url: "https://www.pudgypenguins.com/",
    image: "/images/references/pudgy-penguins.jpg",
    groupKey: "commerce",
    note: {
      ja: "キャラクターIPのEC。彩度の高い配色とカルーセルで、質感より勢いを優先した設計判断が明確。",
      en: "Character-IP commerce. Saturated colour and a carousel make the decision clear: momentum over texture.",
    },
  },
  {
    name: "東急ハーヴェストクラブ",
    url: "https://www.harvestclub.com/",
    image: "/images/references/tokyu-harvest-club.jpg",
    groupKey: "commerce",
    note: {
      ja: "暗い夜景写真に細い明朝と広い字間。会員制リゾートの価格帯を、装飾ではなく余白で伝えている。",
      en: "Thin mincho and wide tracking over a dark night shot. The price bracket is communicated through whitespace, not ornament.",
    },
  },
  {
    name: "カワスイ アクア＆アニマルスクール",
    url: "https://school.kawa-sui.com/",
    image: "/images/references/kawasui-school.jpg",
    groupKey: "education",
    note: {
      ja: "被写体を切り抜いて背景に浮遊させる合成。奥行きを視差で出す構成の参考になる。",
      en: "Cut-out subjects floating over the background — a useful reference for building depth through parallax.",
    },
  },
  {
    name: "ISI 日本語学校",
    url: "https://www.isi-education.com/ja/",
    image: "/images/references/isi-education.jpg",
    groupKey: "education",
    note: {
      ja: "群衆写真の上に大きなセリフ体を重ね、手書き風の一語だけを原色で抜く。多言語切替のUIも参考になる。",
      en: "Large serif type over a crowd shot, with one script word knocked out in a primary colour. Its language switcher is worth studying too.",
    },
  },
  {
    name: "京進ランゲージアカデミー",
    url: "https://www.kla.ac/ja/",
    image: "/images/references/kla.jpg",
    groupKey: "education",
    note: {
      ja: "和柄の雲と縦組みのルビを組み合わせた日本語タイポグラフィ。writing-mode の実装例として参考になる。",
      en: "Japanese typography pairing stylised clouds with vertical ruby text — a practical example of writing-mode in production.",
    },
  },
  {
    name: "阪南大学 入試サイト",
    url: "https://www.hannan-u.ac.jp/entrance/",
    image: "/images/references/hannan-university.jpg",
    groupKey: "education",
    note: {
      ja: "原色の斜め帯と実施済みスケジュールのグレーアウト。情報の鮮度を色だけで伝えている。",
      en: "Diagonal bands in primary colours, with past dates greyed out — freshness of information conveyed by colour alone.",
    },
  },
  {
    name: "原病院",
    url: "https://hara-hospital.jp/",
    image: "/images/references/hara-hospital.jpg",
    groupKey: "medical",
    note: {
      ja: "写真スライダーの下に外来・入院のカードを固定配置。来院者が最初に探す導線を最上部に置いている。",
      en: "Outpatient and inpatient cards pinned under the photo slider, putting the path visitors look for first at the very top.",
    },
  },
  {
    name: "浅田レディースクリニック（ART Clinic ASADA）",
    url: "https://art-asada.jp/",
    image: "",
    groupKey: "medical",
    note: {
      ja: "斜めの帯を写真に横切らせ、診療時間表を常時表示する構成。（スクリーンショット未取得）",
      en: "A diagonal band crossing the photography, with the consultation hours table always visible. (Screenshot not captured yet.)",
    },
  },
  {
    name: "深瀬医院",
    url: "https://www.fukase.or.jp/",
    image: "/images/references/fukase-clinic.jpg",
    groupKey: "medical",
    note: {
      ja: "明るい家族写真と「Cure & Care」の欧文見出し。地域医療の親しみやすさを写真選定で作っている。",
      en: "A bright family photograph under a Latin \"Cure & Care\" heading — approachability built through photo direction.",
    },
  },
  {
    name: "アールリハビリステーション",
    url: "https://r-reha.jp/",
    image: "/images/references/r-reha.jpg",
    groupKey: "medical",
    note: {
      ja: "円形マスクの写真を3枚並べたグリッドと、追従する問い合わせボタン。導線設計が明快。",
      en: "Three circle-masked photographs in a row plus a sticky enquiry button — a clear, unfussy conversion path.",
    },
  },
  {
    name: "みらい歯科",
    url: "https://www.mirai-shika.com/",
    image: "/images/references/mirai-shika.jpg",
    groupKey: "medical",
    note: {
      ja: "スタッフ集合写真に縦組みのキャッチを重ね、診療時間とアクセスを画面下に固定する構成。",
      en: "Vertical Japanese copy over a full staff photograph, with hours and directions pinned along the bottom edge.",
    },
  },
  {
    name: "グランツーリスモ公式サイト",
    url: "https://www.gran-turismo.com/jp/",
    image: "/images/references/gran-turismo.jpg",
    groupKey: "entertainment",
    note: {
      ja: "暗色UIのカードグリッド。大量のニュースをカテゴリと日付だけで整理し、密度を保ったまま読ませている。",
      en: "A dark-UI card grid that organises a high volume of news with nothing but category and date, staying dense yet readable.",
    },
  },
];
