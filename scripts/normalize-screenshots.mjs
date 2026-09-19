/**
 * Conforms every raster screenshot under public/images/works to one size.
 *
 * The works ring lays each card out from the intrinsic ratio of its image, so
 * captures that differ by even a few pixels — a 1903×903 beside a 1900×910 —
 * come out as cards of slightly different shape. Each JPG or PNG is resized
 * to SHOT_W × SHOT_H, cropping from the top so a site's header and hero stay
 * in frame. Files already at that size are left untouched, so running this
 * again is a no-op and does not re-encode anything.
 *
 * Run with `npm run screenshots` after dropping in new captures.
 * `npm run screenshots -- --check` only reports what is off-size and exits
 * non-zero if anything is, which is the form to put in CI.
 *
 * The SVG diagrams are drawn to the same canvas by generate-diagrams.mjs and
 * are not touched here.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const WORKS = join(ROOT, "public", "images", "works");

/** Keep in step with SHOT_SIZE in src/content/works.ts. */
const SHOT_W = 1900;
const SHOT_H = 908;

/**
 * A capture whose ratio is further from the target than this is going to
 * lose a visible band to the crop. It still gets conformed — a uniform ring
 * beats a torn one — but the warning says which file to re-capture.
 */
const RATIO_TOLERANCE = 0.05;

const RASTER = /\.(jpe?g|png)$/i;
const checkOnly = process.argv.includes("--check");

const rel = (path) => relative(ROOT, path).replace(/\\/g, "/");

const entries = await readdir(WORKS, { withFileTypes: true, recursive: true });
const files = entries
  .filter((entry) => entry.isFile() && RASTER.test(entry.name))
  .map((entry) => join(entry.parentPath, entry.name))
  .sort();

let conformed = 0;
let offSize = 0;

console.log(`${checkOnly ? "Checking" : "Conforming"} screenshots to ${SHOT_W}×${SHOT_H}…`);

for (const file of files) {
  const source = await readFile(file);
  const { width, height } = await sharp(source).metadata();

  if (width === SHOT_W && height === SHOT_H) continue;
  offSize += 1;

  const ratioDrift = Math.abs(width / height / (SHOT_W / SHOT_H) - 1);
  const warn =
    ratioDrift > RATIO_TOLERANCE
      ? `  ⚠ ratio is ${(ratioDrift * 100).toFixed(0)}% off — a visible band will be cropped; re-capture at ${SHOT_W}×${SHOT_H} if you can`
      : "";

  if (checkOnly) {
    console.log(`  ${rel(file)}  ${width}×${height}${warn}`);
    continue;
  }

  const isJpeg = /\.jpe?g$/i.test(extname(file));
  const pipeline = sharp(source).resize(SHOT_W, SHOT_H, { fit: "cover", position: "top" });
  // mozjpeg trades encode time for a smaller file at the same quality —
  // fine for a script that runs once per capture.
  const output = await (isJpeg ? pipeline.jpeg({ quality: 85, mozjpeg: true }) : pipeline.png()).toBuffer();

  await writeFile(file, output);
  conformed += 1;
  console.log(`  ${rel(file)}  ${width}×${height} → ${SHOT_W}×${SHOT_H}${warn}`);
}

if (checkOnly) {
  if (offSize === 0) {
    console.log(`All ${files.length} files are ${SHOT_W}×${SHOT_H}.`);
  } else {
    console.log(`${offSize} of ${files.length} files are off-size. Run \`npm run screenshots\` to conform them.`);
    process.exitCode = 1;
  }
} else {
  console.log(
    conformed === 0
      ? `All ${files.length} files were already ${SHOT_W}×${SHOT_H}.`
      : `Done — ${conformed} of ${files.length} files conformed.`,
  );
}
