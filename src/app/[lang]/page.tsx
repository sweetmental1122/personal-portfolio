import Link from "next/link";
import { notFound } from "next/navigation";
import { HomeSphere } from "@/components/HomeSphere";
import { Shell } from "@/components/Shell";
import { profile } from "@/content/profile";
import { site, siteUrl } from "@/content/site";
import { t } from "@/content/types";
import { LOCALES, isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ lang: string }> };

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${siteUrl}/#organization`,
        name: site.name,
        url: siteUrl,
        email: site.email,
        description: t(site.description, lang),
        areaServed: t(site.location, lang),
        knowsLanguage: [...LOCALES],
        sameAs: site.social.map((item) => item.href),
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: site.name,
        jobTitle: site.jobTitle,
        url: `${siteUrl}${localePath(lang, "/about")}`,
        knowsAbout: profile.skills.map((skill) => skill.name),
        worksFor: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: site.name,
        url: siteUrl,
        inLanguage: lang,
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };

  return (
    <Shell locale={lang} page="home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="home" aria-labelledby="home-heading">
        <h1 className="sr-only" id="home-heading">
          {site.name}｜{t(site.tagline, lang)}
        </h1>

        <HomeSphere images={site.homeImages} />

        <p className="home__role">{dict.home.role}</p>

        <Link className="home__cta" href={localePath(lang, "/works")}>
          {dict.home.viewWorks} <span aria-hidden="true">→</span>
        </Link>
      </section>
    </Shell>
  );
}
