/**
 * Writes the placeholder SVG artwork referenced by src/content/*.
 * Run with `npm run placeholders`. Delete this script once you have
 * swapped in real images.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = join(ROOT, "public", "images");

const PALETTES = [
  ["#ffaed2", "#bdaeff"],
  ["#bdaeff", "#97d7ff"],
  ["#97d7ff", "#ffd6ec"],
  ["#d8c8ff", "#ff9ec4"],
  ["#a8e6ff", "#c9b6ff"],
  ["#ffc4e1", "#a9c9ff"],
  ["#c6b8ff", "#ffe0f0"],
  ["#9fd4ff", "#e0c8ff"],
];

const svg = (width, height, label, index) => {
  const [from, to] = PALETTES[index % PALETTES.length];
  const fontSize = Math.round(Math.min(width, height) * 0.09);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${from}"/>
      <stop offset="100%" stop-color="${to}"/>
    </linearGradient>
    <filter id="blur"><feGaussianBlur stdDeviation="${Math.round(width * 0.06)}"/></filter>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#g)"/>
  <circle cx="${width * 0.28}" cy="${height * 0.3}" r="${Math.min(width, height) * 0.3}" fill="#ffffff" opacity="0.35" filter="url(#blur)"/>
  <circle cx="${width * 0.76}" cy="${height * 0.72}" r="${Math.min(width, height) * 0.26}" fill="#ffffff" opacity="0.22" filter="url(#blur)"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif" font-size="${fontSize}"
        fill="#1a1526" opacity="0.62" letter-spacing="${Math.round(fontSize * 0.08)}">${label}</text>
</svg>
`;
};

async function write(relativePath, contents) {
  const target = join(PUBLIC, relativePath);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, contents, "utf8");
  console.log(`  ${relativePath}`);
}

const HOME_SIZES = [
  [1080, 1080],
  [1000, 1413],
  [1080, 1080],
  [1080, 1080],
  [1080, 1080],
  [1080, 1080],
  [1080, 1080],
  [1080, 1920],
];

// [slug, number of detail images] — keep in sync with src/content/works.ts
const WORK_SLUGS = [
  ["logistics-delivery-system", 2],
  ["medical-reservation-api", 1],
  ["ec-inventory-dashboard", 2],
  ["realestate-mobile-app", 1],
  ["workflow-automation-ai", 1],
  ["corporate-site-wordpress", 1],
];

console.log("Writing placeholder images…");

for (const [index, [width, height]] of HOME_SIZES.entries()) {
  const number = String(index + 1).padStart(2, "0");
  await write(`home/${number}.svg`, svg(width, height, number, index));
}

await write("about/portrait.svg", svg(1200, 1600, "PORTRAIT", 3));
await write("ogp.svg", svg(1200, 630, "PORTFOLIO", 1));

for (const [index, [slug, extra]] of WORK_SLUGS.entries()) {
  const label = slug.replace(/-/g, " ").toUpperCase();
  await write(`works/${slug}/thumb.svg`, svg(1600, 1000, label, index));
  for (let n = 1; n <= extra; n += 1) {
    await write(`works/${slug}/0${n}.svg`, svg(1600, 1000, `${label} ${n}`, index + n));
  }
}

console.log("Done.");
