import type { Metadata } from "next";
import { Italiana } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ThemeScript } from "@/components/ThemeScript";
import { site, siteUrl } from "@/content/site";
import { t } from "@/content/types";
import { LOCALES, LOCALE_HREFLANG, LOCALE_OG, isLocale, type Locale } from "@/i18n/config";
import "../globals.css";

/**
 * The wordmark font.
 *
 * Third try. Bodoni Moda fixed the original problem — the stack opened with
 * Didot and Bodoni 72, macOS-only, so everyone else saw Georgia — but read as
 * engineered. Cormorant Garamond added a hand to it, and still read as a book.
 *
 * Italiana is a different intent altogether: a fashion-house display face,
 * unusually wide, hairline-thin, with the extreme thick-to-thin of an
 * engraved plate. It is the one that looks less like text and more like a
 * mark, which is what a wordmark over a nebula wants.
 *
 * One weight only, and it is a delicate one. Everything set in it is sized
 * and tracked deliberately in globals.css — this face collapses if treated
 * as an ordinary serif.
 *
 * Self-hosted by next/font, so no third-party request and no layout shift.
 */
const display = Italiana({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display",
});

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const title = `${site.name}｜${t(site.tagline, lang)}`;
  const description = t(site.description, lang);

  return {
    metadataBase: new URL(siteUrl),
    title: { default: title, template: `%s｜${site.name}` },
    description,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries([
        ...LOCALES.map((locale) => [LOCALE_HREFLANG[locale], `/${locale}`]),
        ["x-default", `/${LOCALES[0]}`],
      ]),
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url: `/${lang}`,
      locale: LOCALE_OG[lang],
      alternateLocale: LOCALES.filter((locale) => locale !== lang).map(
        (locale) => LOCALE_OG[locale],
      ),
      images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [site.ogImage],
    },
    robots: { index: true, follow: true },
  };
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ddd8f2" },
    { media: "(prefers-color-scheme: dark)", color: "#11101b" },
  ],
  width: "device-width",
  initialScale: 1,
};

/**
 * This is the root layout. Putting it behind `[lang]` is what lets `<html lang>`
 * be server-rendered per locale — the alternative, a static layout above the
 * segment, would have to correct `lang` from a script after load.
 *
 * The trade-off is that `app/not-found.tsx` then has no layout above it and
 * has to emit its own document; see the comment there.
 */
export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;

  return (
    <html lang={LOCALE_HREFLANG[locale]} className={display.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
      </head>
      {/* suppressHydrationWarning on both elements: ThemeScript writes
          data-theme onto <html> before hydration, and extensions commonly
          stamp their own attributes onto <body>. */}
      <body suppressHydrationWarning>
        {/* Renders nothing — it injects its tag into the streamed <head>. */}
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
