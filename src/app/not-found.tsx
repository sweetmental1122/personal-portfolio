import { NotFoundInit } from "@/components/NotFoundInit";
import { NotFoundView } from "@/components/NotFoundView";
import { LOCALES } from "@/i18n/config";
import "./globals.css";

/**
 * Root 404, for URLs that match no route at all.
 *
 * `app/[lang]/layout.tsx` is the root layout, and it does not wrap this file —
 * so this one emits its own document. Almost nothing reaches it in practice:
 * the proxy prefixes every request with a locale, so unknown paths land on
 * `[lang]/[...unmatched]` and are answered by `[lang]/not-found.tsx` inside the
 * normal layout.
 */
export default function NotFound() {
  return (
    <html lang={LOCALES[0]} suppressHydrationWarning>
      <head>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>404</title>
      </head>
      <body suppressHydrationWarning>
        <NotFoundInit />
        <NotFoundView />
      </body>
    </html>
  );
}
