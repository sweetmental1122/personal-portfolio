import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "@/i18n/config";

/**
 * Sends un-prefixed paths to the default locale.
 *
 * It used to negotiate `Accept-Language`, which meant a visitor with an
 * English browser landed on the English site even though the work, the
 * clients and the platforms this links from are all Japanese. Japanese is
 * now the front door for everyone; the switcher is one tap away.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Everything except API routes, Next internals and files with an extension.
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico|.*\\.).*)"],
};
