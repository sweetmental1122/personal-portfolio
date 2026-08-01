import type { ReactNode } from "react";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { AmbientBackground } from "./AmbientBackground";
import { CustomCursor } from "./CustomCursor";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export type PageKind =
  | "home"
  | "about"
  | "works"
  | "project"
  | "contact"
  | "privacy"
  | "error";

type Props = {
  locale: Locale;
  page: PageKind;
  children: ReactNode;
};

/**
 * Chrome shared by every page. Rendered per page rather than in the layout so
 * `data-page` and the marquee variant are decided on the server.
 */
export function Shell({ locale, page, children }: Props) {
  const dict = getDictionary(locale);
  const rotational = page === "home" || page === "works";

  return (
    <div className="shell" data-page={page}>
      <a className="skip-link" href="#main-content">
        {dict.nav.skipToContent}
      </a>

      <SiteHeader
        locale={locale}
        dict={dict}
        siteName={site.name}
        marqueeLogo={page === "home"}
      />

      <main className="main" id="main-content" tabIndex={-1}>
        {children}
      </main>

      <SiteFooter siteName={site.name} />
      <LanguageSwitcher locale={locale} label={dict.nav.language} />
      <AmbientBackground showOrbit={page === "error"} />
      <CustomCursor rotational={rotational} />
    </div>
  );
}
