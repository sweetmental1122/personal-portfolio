/**
 * Renders the LINE contact QR code to a static SVG.
 *
 * Run with `npm run qr`. The output is committed, so `qrcode` stays a build
 * dependency and never reaches the browser — the contact page just serves an
 * SVG.
 *
 * The URL is read out of src/content/site.ts rather than repeated here. It
 * used to be written in both places, which is a quiet way to ship a QR code
 * pointing somewhere the link beside it does not: change one, forget the
 * other, and nothing errors.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/** Pulls `url` from the channel with the given key in site.ts. */
async function channelUrl(key) {
  const source = await readFile(join(ROOT, "src/content/site.ts"), "utf8");
  const block = new RegExp(`key:\\s*"${key}"[\\s\\S]{0,400}?url:\\s*"([^"]+)"`).exec(source);
  if (!block) {
    throw new Error(
      `Could not find a "${key}" channel url in src/content/site.ts. ` +
        `If the shape of site.channels changed, update the pattern in this script.`,
    );
  }
  return block[1];
}

const TARGETS = [{ key: "line", out: "public/images/contact/line-qr.svg" }];

for (const target of TARGETS) {
  const url = await channelUrl(target.key);

  const svg = await QRCode.toString(url, {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 1,
    // Currents are set from CSS instead, so the code inherits the theme.
    color: { dark: "#111111", light: "#00000000" },
  });

  const file = join(ROOT, target.out);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, svg, "utf8");
  console.log(`  ${target.out}  ->  ${url}`);
}

console.log("Done.");
