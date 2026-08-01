import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { Shell } from "@/components/Shell";
import { REFERENCE_GROUPS, references } from "@/content/references";
import { t } from "@/content/types";
import { isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.references.title,
    description: dict.references.intro,
    alternates: { canonical: localePath(lang, "/references") },
    // Not this portfolio's own work, so it should not be indexed as such.
    robots: { index: false, follow: true },
  };
}

export default async function ReferencesPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <Shell locale={lang} page="references">
      <div className="prose refs">
        <header className="refs__intro">
          <h1>{dict.references.title}</h1>
          <p>{dict.references.intro}</p>
        </header>

        {REFERENCE_GROUPS.map((group) => {
          const sites = references.filter((site) => site.groupKey === group.key);
          if (!sites.length) return null;

          return (
            <section className="refs__group" key={group.key}>
              <h2 className="eyebrow">{t(group.label, lang)}</h2>
              <div className="refs__grid">
                {sites.map((site, index) => (
                  <Reveal as="article" className="ref-card" key={site.url} index={index}>
                    <a href={site.url} target="_blank" rel="noopener noreferrer nofollow">
                      <span className="ref-card__shot">
                        {site.image ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={site.image}
                            alt={site.name}
                            width={1440}
                            height={688}
                            loading="lazy"
                            decoding="async"
                            suppressHydrationWarning
                          />
                        ) : (
                          <span className="ref-card__pending">{dict.references.noShot}</span>
                        )}
                      </span>
                      <strong>{site.name}</strong>
                      <span className="ref-card__url">
                        {site.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      </span>
                    </a>
                    <p>{t(site.note, lang)}</p>
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </Shell>
  );
}
