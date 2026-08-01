import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Shell } from "@/components/Shell";
import { paragraphs, t } from "@/content/types";
import { CATEGORIES, getProject, projects } from "@/content/works";
import { LOCALES, isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => projects.map((project) => ({ lang, slug: project.slug })));
}

/**
 * Every project is known at build time, so an unknown slug is answered
 * straight from the not-found boundary rather than rendering this page.
 */
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: t(project.title, lang),
    description: t(project.summary, lang),
    alternates: { canonical: localePath(lang, `/works/${slug}`) },
    openGraph: {
      title: t(project.title, lang),
      description: t(project.summary, lang),
      images: [{ url: project.thumbnail.src }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();

  const project = getProject(slug);
  if (!project) notFound();

  const dict = getDictionary(lang);
  const category = CATEGORIES.find((item) => item.key === project.categoryKey);

  return (
    <Shell locale={lang} page="project">
      <article className="project">
        <div className="project__layout">
          <div className="project__copy">
            <p className="eyebrow">{category ? t(category.label, lang) : ""}</p>
            <h1>{t(project.title, lang)}</h1>
            <p className="project__summary">{t(project.summary, lang)}</p>

            <div className="project__description">
              {paragraphs(project.description, lang).map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            {/* Thumbnail moves here on narrow screens, where the image column
                sits below the copy instead of beside it. */}
            <div className="project__mobile-thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.thumbnail.src}
                alt={t(project.title, lang)}
                width={project.thumbnail.width}
                height={project.thumbnail.height}
                decoding="async"
                suppressHydrationWarning
              />
            </div>

            <div className="project__info">
              <h2 className="sr-only">{dict.works.information}</h2>
              {/* Only the fields that are filled in are printed — an entry
                  without a stated period or stack simply omits those rows. */}
              <dl>
                {project.meta.client && (
                  <div>
                    <dt>{dict.works.client}</dt>
                    <dd>{t(project.meta.client, lang)}</dd>
                  </div>
                )}
                {project.meta.year && (
                  <div>
                    <dt>{dict.works.year}</dt>
                    <dd>{project.meta.year}</dd>
                  </div>
                )}
                {project.meta.role && (
                  <div>
                    <dt>{dict.works.role}</dt>
                    <dd>{t(project.meta.role, lang)}</dd>
                  </div>
                )}
                {project.meta.stack?.length ? (
                  <div>
                    <dt>{dict.works.stack}</dt>
                    <dd>{project.meta.stack.join(" / ")}</dd>
                  </div>
                ) : null}
              </dl>

              {project.liveUrl && (
                <a
                  className="pill-button pill-button--inline"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{dict.works.liveSite}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}

              <p style={{ marginTop: 20 }}>
                <Link href={localePath(lang, "/works")}>← {dict.works.back}</Link>
              </p>
            </div>
          </div>

          <div className="project__images">
            {project.images.length === 0 ? (
              <div className="project__empty">{dict.works.noImages}</div>
            ) : (
              project.images.map((image) =>
                image.video ? (
                  <figure key={image.src}>
                    <video src={image.src} controls playsInline preload="metadata" />
                  </figure>
                ) : (
                  <figure key={image.src}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image.src}
                      alt={t(image.alt, lang)}
                      width={image.width}
                      height={image.height}
                      loading="lazy"
                      decoding="async"
                      suppressHydrationWarning
                    />
                  </figure>
                ),
              )
            )}
          </div>
        </div>
      </article>
    </Shell>
  );
}
