import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { Shell } from "@/components/Shell";
import { profile } from "@/content/profile";
import { site } from "@/content/site";
import { paragraphs, t } from "@/content/types";
import { isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return {
    title: getDictionary(lang).about.pageTitle,
    description: t(profile.catchphrase, lang),
    alternates: { canonical: localePath(lang, "/about") },
  };
}

export default async function AboutPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  const portrait = (variant: "desktop" | "mobile") => (
    <figure className={`about__portrait about__portrait--${variant}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={profile.portrait}
        alt={dict.about.portraitAlt}
        loading={variant === "desktop" ? "eager" : "lazy"}
        decoding="async"
        suppressHydrationWarning
      />
    </figure>
  );

  return (
    <Shell locale={lang} page="about">
      <section className="about is-ready">
        {portrait("desktop")}

        <div className="about__scroll">
          <section className="about__intro">
            <h1>
              <span>{t(profile.headline.lead, lang)}</span>
              {t(profile.headline.main, lang)}
            </h1>
            <p className="about__catch">{t(profile.catchphrase, lang)}</p>

            <div className="about__bio">
              {paragraphs(profile.intro, lang).map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="about__credentials">
              {profile.credentials.map((group) => (
                <section key={t(group.title, lang)}>
                  <h2 className="eyebrow">{t(group.title, lang)}</h2>
                  <ul>
                    {group.items.map((item) => (
                      <li key={t(item, lang)}>{t(item, lang)}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            {portrait("mobile")}
          </section>

          <Reveal as="section" className="about__section">
            <h2 className="eyebrow">{dict.about.eyebrowExperience}</h2>
            <div className="experience">
              {profile.experience.map((entry) => (
                <article key={t(entry.title, lang)}>
                  <time>{t(entry.period, lang)}</time>
                  <div>
                    <h3>{t(entry.title, lang)}</h3>
                    <p>{t(entry.body, lang)}</p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal as="section" className="about__section">
            <h2 className="eyebrow">{dict.about.eyebrowSkills}</h2>
            {profile.skillGroups.map((group) => (
              <div className="skill-group" key={t(group.title, lang)}>
                <h3 className="skill-group__title">{t(group.title, lang)}</h3>
                <div className="skill-grid">
                  {group.skills.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                      <span aria-hidden="true">{skill.code}</span>
                      <small>{skill.name}</small>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal as="section" className="about__section">
            <h2 className="eyebrow">{dict.about.eyebrowProcess}</h2>
            <ol className="process-list">
              {profile.process.map((step) => (
                <li key={t(step, lang)}>{t(step, lang)}</li>
              ))}
            </ol>
          </Reveal>

          <Reveal as="section" className="about__cta">
            <h2>{t(profile.cta.heading, lang)}</h2>
            <p>{t(profile.cta.body, lang)}</p>
            <Link className="pill-button" href={localePath(lang, "/contact")}>
              <span>{dict.about.ctaButton}</span>
              <span aria-hidden="true">↗</span>
            </Link>
            <p className="contact__direct">
              {site.email} · {t(site.location, lang)}
            </p>
          </Reveal>
        </div>
      </section>
    </Shell>
  );
}
