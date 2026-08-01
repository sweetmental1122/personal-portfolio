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

/**
 * The soft highlights are radial gradients, not circles behind a
 * `feGaussianBlur`. A blur filter has to be rasterised by the browser on every
 * decode — at stdDeviation 96 on a 1600px canvas that was slow enough to be
 * felt when eight of them load at once on the home page.
 */
const svg = (width, height, label, index) => {
  const [from, to] = PALETTES[index % PALETTES.length];
  const fontSize = Math.round(Math.min(width, height) * 0.09);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${from}"/>
      <stop offset="100%" stop-color="${to}"/>
    </linearGradient>
    <radialGradient id="h1" cx="28%" cy="30%" r="42%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.42"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="h2" cx="76%" cy="72%" r="36%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.26"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#g)"/>
  <rect width="${width}" height="${height}" fill="url(#h1)"/>
  <rect width="${width}" height="${height}" fill="url(#h2)"/>
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

/**
 * Projects still waiting on a real capture. Every entry in works.ts now has
 * either a screenshot or a diagram, so this list is empty — add a
 * [slug, detailImageCount] pair here if a new project needs a stand-in.
 */
const WORK_SLUGS = [];

console.log("Writing placeholder images…");

// The home sphere reuses the project thumbnails, so there is no separate
// home/ set. The about portrait is a real photograph and is left alone.
await write("ogp.svg", svg(1200, 630, "PORTFOLIO", 1));

for (const [index, [slug, extra]] of WORK_SLUGS.entries()) {
  const label = slug.replace(/-/g, " ").toUpperCase();
  await write(`works/${slug}/thumb.svg`, svg(1600, 1000, label, index));
  for (let n = 1; n <= extra; n += 1) {
    await write(`works/${slug}/0${n}.svg`, svg(1600, 1000, `${label} ${n}`, index + n));
  }
}

console.log("Done.");
