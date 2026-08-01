import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { Shell } from "@/components/Shell";
import { references } from "@/content/references";
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

        <div className="refs__grid">
          {references.map((site, index) => (
            <Reveal as="figure" className="ref-card" key={site.url} index={index % 4}>
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
                {/* Source line, kept small but present — 著作権法 48条 requires
                    a quotation to state where it came from. */}
                <figcaption>
                  {site.name}
                  <span>{site.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                </figcaption>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </Shell>
  );
}
