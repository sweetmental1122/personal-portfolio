import Link from "next/link";
import { LOCALES, localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/**
 * Server-rendered 404 body.
 *
 * Getting the locale in here is awkward: a not-found file receives no props,
 * `cache()` does not survive the separate render pass that `notFound()`
 * triggers, and `headers()` would opt the whole app out of static generation
 * because this renders inside every route's shell.
 *
 * So every locale is rendered and the inline rule below reveals the one
 * matching `<html lang>`, which the root layout's script sets from the path
 * before first paint. Fully server-rendered, no flash, and the rules are
 * derived from LOCALES so adding a language needs no change here.
 *
 * With JavaScript disabled `lang` keeps its served value and the default
 * locale is shown, which is the correct fallback.
 */
const localeStyles = LOCALES.map(
  (locale) => `html[lang="${locale}"] [data-nf-locale="${locale}"]{display:contents}`,
).join("");

function Body({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="error-hero">
      <div className="error-hero__content">
        <p className="error-hero__code">404</p>
        <h1>{dict.notFound.title}</h1>
        <p>{dict.notFound.message}</p>
        <div className="error-hero__actions">
          <Link className="pill-button pill-button--inline" href={localePath(locale)}>
            <span>{dict.notFound.goHome}</span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link className="pill-button pill-button--inline" href={localePath(locale, "/works")}>
            <span>{dict.notFound.goWorks}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function NotFoundView() {
  return (
    <div className="shell" data-page="error">
      <style dangerouslySetInnerHTML={{ __html: `[data-nf-locale]{display:none}${localeStyles}` }} />

      <main className="main" id="main-content">
        {LOCALES.map((locale) => (
          <div key={locale} data-nf-locale={locale} lang={locale}>
            <Body locale={locale} />
          </div>
        ))}
      </main>

      {/* Static equivalent of the animated chrome — the 404 renders outside
          the [lang] segment, so it cannot reuse <Shell>. */}
      <div className="ambient" aria-hidden="true">
        <span className="ambient__orb ambient__orb--a" />
        <span className="ambient__orb ambient__orb--b" />
        <span className="ambient__orb ambient__orb--c" />
        <div className="ambient__orbit-wrap">
          <div className="orbit">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}
