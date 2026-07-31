import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Shell } from "@/components/Shell";
import { privacySections, privacyTitle } from "@/content/privacy";
import { site } from "@/content/site";
import { t } from "@/content/types";
import { isLocale, localePath } from "@/i18n/config";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return {
    title: t(privacyTitle, lang),
    alternates: { canonical: localePath(lang, "/privacy") },
    robots: { index: false, follow: true },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <Shell locale={lang} page="privacy">
      <div className="prose">
        <h1>{t(privacyTitle, lang)}</h1>
        {privacySections.map((section) => (
          <section key={t(section.heading, lang)}>
            <h2>{t(section.heading, lang)}</h2>
            <p>{t(section.body, lang)}</p>
          </section>
        ))}
        <section>
          <h2>Contact</h2>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </section>
      </div>
    </Shell>
  );
}
