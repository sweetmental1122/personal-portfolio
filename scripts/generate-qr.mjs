/**
 * Renders the LINE contact QR code to a static SVG.
 *
 * Run with `npm run qr`. The output is committed, so `qrcode` stays a build
 * dependency and never reaches the browser — the contact page just serves an
 * SVG. Re-run this if the LINE URL in src/content/site.ts changes.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const TARGETS = [
  {
    url: "https://line.me/ti/p/cbQnJCvQb4",
    out: "public/images/contact/line-qr.svg",
  },
];

for (const target of TARGETS) {
  const svg = await QRCode.toString(target.url, {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 1,
    // Currents are set from CSS instead, so the code inherits the theme.
    color: { dark: "#111111", light: "#00000000" },
  });

  const file = join(ROOT, target.out);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, svg, "utf8");
  console.log(`  ${target.out}  ->  ${target.url}`);
}

console.log("Done.");
