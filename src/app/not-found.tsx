import { NotFoundView } from "@/components/NotFoundView";
import { ThemeScript } from "@/components/ThemeScript";
import { LOCALES } from "@/i18n/config";
import "./globals.css";

/** Mirrors what the [lang] layout does for real pages, but from the path. */
const langScript = `(() => {
  try {
    const locales = ${JSON.stringify(LOCALES)};
    const first = location.pathname.split("/").filter(Boolean)[0];
    if (locales.includes(first)) document.documentElement.lang = first;
  } catch {}
})();`;

/**
 * Root 404, for URLs that match no route at all.
 *
 * `app/[lang]/layout.tsx` is the root layout, and it does not wrap this file —
 * so this one emits its own document. Almost nothing reaches it in practice:
 * the proxy prefixes every request with a locale, so unknown paths land on
 * `[lang]/[...unmatched]` and are answered by `[lang]/not-found.tsx` inside the
 * normal layout instead.
 */
export default function NotFound() {
  return (
    <html lang={LOCALES[0]} suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script dangerouslySetInnerHTML={{ __html: langScript }} />
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>404</title>
      </head>
      <body suppressHydrationWarning>
        <NotFoundView />
      </body>
    </html>
  );
}
