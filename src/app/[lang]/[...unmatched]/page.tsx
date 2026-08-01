import { notFound } from "next/navigation";

/**
 * A `not-found.tsx` inside a segment only renders for `notFound()` calls made
 * from within it — an unmatched URL like `/ja/nope` would otherwise fall
 * through to Next's built-in, unstyled 404.
 *
 * This catch-all claims those URLs so the localised 404 renders inside the
 * `[lang]` layout instead. More specific routes (`/ja/works/[slug]`) still win,
 * so nothing real is swallowed.
 */
export default function UnmatchedPage(): never {
  notFound();
}
