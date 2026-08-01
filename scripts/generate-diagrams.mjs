/**
 * Draws a schematic diagram for each project in src/content/works.ts.
 *
 * These are wireframes and architecture sketches of the systems described in
 * the career history — deliberately not screenshots. A backend engineer's
 * portfolio is better served by showing the shape of a system than by a
 * picture of a UI, and a diagram of your own architecture is something you
 * can publish without touching a client's NDA.
 *
 * Run with `npm run diagrams`. Replace any of these with a real (redacted)
 * capture whenever you have clearance for one.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "public", "images", "works");

const W = 1600;
const H = 1000;

const INK = "#2f2941";
const MUTED = "#8b84a3";
const LINE = "#c9c2df";
const PAPER = "#f2eefb";
const PANEL = "#ffffff";

const ACCENTS = ["#8f7fe0", "#e492bf", "#6fb3e4", "#7dc7ae", "#e5a86a"];

/** Rounded rectangle. */
const box = (x, y, w, h, o = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r ?? 10}" fill="${o.fill ?? PANEL}" stroke="${o.stroke ?? LINE}" stroke-width="${o.sw ?? 2}"/>`;

/** SVG is XML: a bare & or < in a label breaks the whole document. */
const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const text = (x, y, s, o = {}) =>
  `<text x="${x}" y="${y}" fill="${o.fill ?? INK}" font-family="'Segoe UI',system-ui,sans-serif" font-size="${o.size ?? 24}" font-weight="${o.weight ?? 400}" text-anchor="${o.anchor ?? "start"}" letter-spacing="${o.ls ?? 0}">${esc(s)}</text>`;

/** Grey placeholder bar, used where real copy would sit. */
const bar = (x, y, w, h = 10, fill = LINE) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${fill}"/>`;

const arrow = (x1, y1, x2, y2, color = MUTED) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="2.5" marker-end="url(#tip)"/>`;

const shell = (title, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(title)}">
  <defs>
    <marker id="tip" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" fill="${MUTED}"/>
    </marker>
  </defs>
  <rect width="${W}" height="${H}" fill="${PAPER}"/>
  ${text(64, 84, title, { size: 30, weight: 600 })}
  <line x1="64" y1="112" x2="${W - 64}" y2="112" stroke="${LINE}" stroke-width="2"/>
  ${body}
</svg>
`;

/** Kanban board: three columns of cards. */
const kanban = (title, columns) => {
  const colW = 440;
  const gap = 36;
  let out = "";
  columns.forEach((col, ci) => {
    const x = 64 + ci * (colW + gap);
    out += box(x, 168, colW, 740, { fill: "rgba(255,255,255,.55)", stroke: LINE });
    out += text(x + 26, 214, col.name, { size: 22, weight: 600, fill: MUTED });
    out += `<circle cx="${x + colW - 34}" cy="206" r="14" fill="${ACCENTS[ci % ACCENTS.length]}" opacity="0.28"/>`;
    out += text(x + colW - 34, 214, String(col.cards), { size: 18, anchor: "middle", fill: INK });
    for (let i = 0; i < col.cards; i += 1) {
      const y = 250 + i * 120;
      out += box(x + 20, y, colW - 40, 100, { r: 12 });
      out += `<rect x="${x + 20}" y="${y}" width="6" height="100" rx="3" fill="${ACCENTS[ci % ACCENTS.length]}"/>`;
      out += bar(x + 46, y + 26, colW - 130);
      out += bar(x + 46, y + 50, colW - 190, 8);
      out += `<circle cx="${x + 56}" cy="${y + 78}" r="11" fill="${LINE}"/>`;
      out += bar(x + 76, y + 73, 90, 8);
    }
  });
  return shell(title, out);
};

/** Month grid with a few booked spans. */
const calendar = (title) => {
  let out = "";
  const cols = 7;
  const cw = 200;
  const ch = 130;
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  days.forEach((d, i) => out += text(80 + i * cw, 168, d, { size: 16, weight: 600, fill: MUTED, ls: 1 }));
  for (let r = 0; r < 5; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      const x = 64 + c * cw;
      const y = 190 + r * ch;
      out += box(x, y, cw - 12, ch - 12, { r: 8, fill: c > 4 ? "rgba(255,255,255,.4)" : PANEL });
      out += text(x + 16, y + 32, String(r * 7 + c + 1), { size: 15, fill: MUTED });
    }
  }
  const spans = [
    [0, 0, 3, 0], [1, 2, 2, 1], [2, 1, 4, 2], [3, 4, 2, 3], [4, 0, 5, 4],
  ];
  spans.forEach(([r, c, len, ai]) => {
    const x = 64 + c * cw + 12;
    const y = 190 + r * ch + 52;
    out += `<rect x="${x}" y="${y}" width="${len * cw - 36}" height="26" rx="13" fill="${ACCENTS[ai % ACCENTS.length]}" opacity="0.75"/>`;
  });
  return shell(title, out);
};

/** Left-to-right pipeline of labelled stages. */
const pipeline = (title, stages, caption) => {
  let out = "";
  const bw = 250;
  const bh = 150;
  const gap = (W - 128 - stages.length * bw) / (stages.length - 1);
  stages.forEach((s, i) => {
    const x = 64 + i * (bw + gap);
    const y = 330;
    out += box(x, y, bw, bh, { r: 14 });
    out += `<rect x="${x}" y="${y}" width="${bw}" height="6" rx="3" fill="${ACCENTS[i % ACCENTS.length]}"/>`;
    out += text(x + bw / 2, y + 66, s.label, { size: 22, weight: 600, anchor: "middle" });
    out += text(x + bw / 2, y + 100, s.sub, { size: 17, anchor: "middle", fill: MUTED });
    if (i < stages.length - 1) out += arrow(x + bw + 12, y + bh / 2, x + bw + gap - 12, y + bh / 2);
  });
  out += text(64, 600, caption, { size: 20, fill: MUTED });
  return shell(title, out);
};

/** Client → service → stores, with a spec panel. */
const serviceMap = (title, client, service, stores, note) => {
  let out = "";
  out += box(64, 240, 320, 140, { r: 14 });
  out += text(224, 300, client, { size: 22, weight: 600, anchor: "middle" });
  out += text(224, 334, "client", { size: 16, anchor: "middle", fill: MUTED });
  out += arrow(396, 310, 560, 310);
  out += box(572, 200, 400, 220, { r: 16 });
  out += `<rect x="572" y="200" width="400" height="7" rx="3.5" fill="${ACCENTS[0]}"/>`;
  out += text(772, 274, service.label, { size: 26, weight: 600, anchor: "middle" });
  out += text(772, 312, service.sub, { size: 18, anchor: "middle", fill: MUTED });
  out += bar(632, 344, 280, 8);
  out += bar(632, 368, 200, 8);
  stores.forEach((s, i) => {
    const y = 200 + i * 120;
    out += arrow(984, 310, 1140, y + 50);
    out += box(1152, y, 384, 100, { r: 14 });
    out += `<circle cx="1202" cy="${y + 50}" r="18" fill="${ACCENTS[(i + 1) % ACCENTS.length]}" opacity="0.35"/>`;
    out += text(1236, y + 44, s.label, { size: 21, weight: 600 });
    out += text(1236, y + 74, s.sub, { size: 16, fill: MUTED });
  });
  out += box(64, 560, 908, 200, { r: 14, fill: "rgba(255,255,255,.6)" });
  out += text(96, 610, note.title, { size: 20, weight: 600, fill: MUTED, ls: 1 });
  note.lines.forEach((l, i) => out += text(96, 656 + i * 34, l, { size: 19 }));
  return shell(title, out);
};

/** Two phone frames side by side. */
const phones = (title, screens) => {
  let out = "";
  screens.forEach((s, i) => {
    const x = 260 + i * 560;
    const y = 170;
    out += box(x, y, 400, 720, { r: 42 });
    out += `<rect x="${x + 150}" y="${y + 18}" width="100" height="14" rx="7" fill="${LINE}"/>`;
    out += text(x + 200, y + 100, s.label, { size: 22, weight: 600, anchor: "middle" });
    if (s.kind === "list") {
      for (let n = 0; n < 4; n += 1) {
        const ly = y + 140 + n * 130;
        out += box(x + 28, ly, 344, 112, { r: 12, fill: PAPER, stroke: "none", sw: 0 });
        out += `<rect x="${x + 44}" y="${ly + 20}" width="72" height="72" rx="10" fill="${LINE}"/>`;
        out += bar(x + 134, ly + 34, 200);
        out += bar(x + 134, ly + 58, 140, 8);
      }
    } else {
      out += box(x + 90, y + 190, 220, 220, { r: 16, fill: PAPER, stroke: LINE });
      for (let r = 0; r < 5; r += 1) {
        for (let c = 0; c < 5; c += 1) {
          if ((r * 5 + c) % 3 === 0) continue;
          out += `<rect x="${x + 116 + c * 36}" y="${y + 216 + r * 36}" width="26" height="26" fill="${INK}"/>`;
        }
      }
      out += text(x + 200, y + 470, s.caption, { size: 19, anchor: "middle", fill: MUTED });
      out += box(x + 60, y + 520, 280, 64, { r: 32, fill: ACCENTS[3], stroke: "none", sw: 0 });
      out += text(x + 200, y + 560, s.action, { size: 20, weight: 600, anchor: "middle", fill: "#fff" });
    }
  });
  return shell(title, out);
};

/** Filter rail beside a product grid. */
const catalogue = (title) => {
  let out = "";
  out += box(64, 168, 320, 740, { r: 14, fill: "rgba(255,255,255,.55)" });
  ["SIZE", "COLOR", "PRICE"].forEach((g, gi) => {
    const y = 210 + gi * 240;
    out += text(96, y, g, { size: 17, weight: 600, fill: MUTED, ls: 1.5 });
    for (let i = 0; i < 4; i += 1) {
      out += box(96, y + 24 + i * 46, 22, 22, { r: 5 });
      if (i === gi) out += `<rect x="101" y="${y + 29 + i * 46}" width="12" height="12" rx="3" fill="${ACCENTS[0]}"/>`;
      out += bar(132, y + 30 + i * 46, 120, 9);
    }
  });
  for (let r = 0; r < 2; r += 1) {
    for (let c = 0; c < 3; c += 1) {
      const x = 424 + c * 384;
      const y = 168 + r * 372;
      out += box(x, y, 356, 344, { r: 12 });
      out += `<rect x="${x + 1}" y="${y + 1}" width="354" height="240" rx="11" fill="${ACCENTS[(r * 3 + c) % ACCENTS.length]}" opacity="0.16"/>`;
      out += bar(x + 24, y + 276, 220);
      out += bar(x + 24, y + 304, 120, 9);
    }
  }
  return shell(title, out);
};

/** Entity boxes with a status-history table. */
const dataModel = (title) => {
  let out = "";
  const entities = [
    { name: "shipment", fields: ["id", "order_id", "truck_id", "eta"] },
    { name: "status_history", fields: ["id", "shipment_id", "status", "changed_at"] },
    { name: "warehouse_item", fields: ["id", "sku", "quantity", "location"] },
  ];
  entities.forEach((e, i) => {
    const x = 64 + i * 508;
    out += box(x, 168, 460, 300, { r: 14 });
    out += `<rect x="${x}" y="168" width="460" height="52" rx="14" fill="${ACCENTS[i]}" opacity="0.2"/>`;
    out += text(x + 26, 204, e.name, { size: 22, weight: 600 });
    e.fields.forEach((f, fi) => {
      out += text(x + 26, 258 + fi * 46, f, { size: 19, fill: fi === 0 ? INK : MUTED });
      out += `<line x1="${x + 26}" y1="${274 + fi * 46}" x2="${x + 434}" y2="${274 + fi * 46}" stroke="${LINE}" stroke-width="1.5"/>`;
    });
  });
  out += arrow(524, 318, 560, 318);
  out += arrow(1032, 318, 1068, 318);
  out += box(64, 540, 1472, 368, { r: 14, fill: "rgba(255,255,255,.6)" });
  out += text(96, 588, "status_history", { size: 20, weight: 600, fill: MUTED, ls: 1 });
  const rows = ["received", "in_warehouse", "loaded", "in_transit", "delivered"];
  rows.forEach((r, i) => {
    const y = 626 + i * 54;
    out += `<circle cx="120" cy="${y}" r="10" fill="${ACCENTS[i % ACCENTS.length]}"/>`;
    if (i < rows.length - 1) out += `<line x1="120" y1="${y + 12}" x2="120" y2="${y + 42}" stroke="${LINE}" stroke-width="2"/>`;
    out += text(152, y + 7, r, { size: 20 });
    out += bar(420, y - 4, 300, 9);
    out += text(1400, y + 7, "2021-03-1" + i, { size: 17, fill: MUTED, anchor: "end" });
  });
  return shell(title, out);
};

/** Order entry form wireframe. */
const orderForm = (title) => {
  let out = "";
  out += box(64, 168, 1472, 740, { r: 14 });
  out += text(112, 232, "発注入力 / Order entry", { size: 24, weight: 600 });
  for (let r = 0; r < 3; r += 1) {
    for (let c = 0; c < 2; c += 1) {
      const x = 112 + c * 712;
      const y = 290 + r * 132;
      out += text(x, y, "label", { size: 17, fill: MUTED });
      out += box(x, y + 18, 660, 62, { r: 10, fill: PAPER });
      out += bar(x + 22, y + 44, 200, 10);
    }
  }
  out += text(112, 714, "備考", { size: 17, fill: MUTED });
  out += box(112, 732, 1260, 96, { r: 10, fill: PAPER });
  out += box(1160, 848, 212, 60, { r: 30, fill: ACCENTS[0], stroke: "none", sw: 0 });
  out += text(1266, 886, "発注する", { size: 20, weight: 600, anchor: "middle", fill: "#fff" });
  return shell(title, out);
};

async function write(path, contents) {
  const target = join(OUT, path);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, contents, "utf8");
  console.log(`  ${path}`);
}

console.log("Writing project diagrams…");

await write(
  "project-management-system/thumb.svg",
  kanban("案件管理 / Kanban board — React + TypeScript", [
    { name: "受注前 / Lead", cards: 3 },
    { name: "進行中 / In progress", cards: 4 },
    { name: "完了 / Done", cards: 2 },
  ]),
);
await write(
  "project-management-system/01.svg",
  kanban("案件ステータス / Board detail", [
    { name: "見積 / Quote", cards: 2 },
    { name: "制作 / Build", cards: 5 },
    { name: "請求 / Invoice", cards: 3 },
  ]),
);
await write("project-management-system/02.svg", calendar("スケジュール確認 / Schedule view"));

await write(
  "property-image-ai-annotation/thumb.svg",
  pipeline(
    "物件画像 自動アノテーション / Async pipeline",
    [
      { label: "Upload", sub: "S3" },
      { label: "Pre-process", sub: "OpenCV" },
      { label: "Invoke", sub: "AWS Lambda" },
      { label: "Inference", sub: "PyTorch" },
      { label: "Tags", sub: "FastAPI" },
    ],
    "前処理を分離し、解析は Lambda 経由で非同期実行。モデル差し替え時も API 側は無改修。",
  ),
);
await write(
  "property-image-ai-annotation/01.svg",
  pipeline(
    "推論スクリプトの API 化 / Wrapping the model",
    [
      { label: "Web system", sub: "caller" },
      { label: "FastAPI", sub: "thin service" },
      { label: "Model", sub: "inference script" },
    ],
    "AIエンジニアの推論スクリプトを、Webから呼べる軽量サービスとして切り出した構成。",
  ),
);

await write(
  "fintech-payment-api/thumb.svg",
  serviceMap(
    "決済処理API / Go (Gin)",
    "加盟店 Merchant",
    { label: "Payment API", sub: "Go / Gin" },
    [
      { label: "PostgreSQL", sub: "決済記録 / ledger" },
      { label: "Redis", sub: "冪等キー / idempotency" },
    ],
    {
      title: "API SPEC — Swagger",
      lines: [
        "フロントエンドが待たずに着手できるよう、仕様書を先に公開。",
        "連携テストはフロント・バックエンド合同で主導。",
      ],
    },
  ),
);
await write(
  "fintech-payment-api/01.svg",
  serviceMap(
    "API仕様の先出し / Spec-first integration",
    "Frontend team",
    { label: "Swagger", sub: "shared spec" },
    [
      { label: "Backend", sub: "Go 実装" },
      { label: "Test", sub: "連携テスト" },
    ],
    {
      title: "WHY",
      lines: ["実装完了を待たずに画面側が進められる。", "認識のズレをテスト前に潰せる。"],
    },
  ),
);

await write(
  "clinic-booking-app/thumb.svg",
  phones("患者用ポータル / React Native", [
    { label: "クリニック検索", kind: "list" },
    { label: "チェックイン", kind: "qr", caption: "端末カメラで読み取り", action: "受付する" },
  ]),
);
await write(
  "clinic-booking-app/01.svg",
  phones("予約とデジタル診察券 / Booking & card", [
    { label: "予約枠", kind: "list" },
    { label: "デジタル診察券", kind: "qr", caption: "JWT で認証", action: "表示する" },
  ]),
);

await write("apparel-ec-frontend/thumb.svg", catalogue("商品一覧と動的フィルタ / Nuxt.js"));
await write("apparel-ec-frontend/01.svg", catalogue("サイズ・色・価格での絞り込み / Filtering"));

await write("logistics-status-api/thumb.svg", dataModel("在庫・配送ステータス / Data model"));
await write("logistics-status-api/01.svg", dataModel("配送状況の変更履歴 / Status history"));

await write("restaurant-ordering-ui/thumb.svg", orderForm("社内発注管理ツール / Bootstrap"));
await write("restaurant-ordering-ui/01.svg", orderForm("レスポンシブ発注フォーム / Order form"));

console.log("Done.");
