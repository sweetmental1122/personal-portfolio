import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Shell } from "@/components/Shell";
import { WorksRing, type RingItem } from "@/components/WorksRing";
import { t } from "@/content/types";
import { CATEGORIES, sortedProjects } from "@/content/works";
import { isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.works.title,
    alternates: { canonical: localePath(lang, "/works") },
  };
}

export default async function WorksPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  // Localised strings are resolved on the server so the client ring stays
  // language-agnostic.
  const items: RingItem[] = sortedProjects.map((project) => ({
    slug: project.slug,
    href: localePath(lang, `/works/${project.slug}`),
    title: t(project.title, lang),
    categoryKey: project.categoryKey,
    categoryLabel: t(
      CATEGORIES.find((category) => category.key === project.categoryKey)?.label ?? {
        ja: "",
        en: "",
        ko: "",
      },
      lang,
    ),
    thumbnail: project.thumbnail,
  }));

  const categories = CATEGORIES.map((category) => ({
    key: category.key,
    label: t(category.label, lang),
  }));

  return (
    <Shell locale={lang} page="works">
      <WorksRing
        items={items}
        categories={categories}
        labels={{
          all: dict.works.all,
          filter: dict.works.filterLabel,
          scene: dict.works.title,
          empty: dict.works.empty,
          hint: dict.home.scrollHint,
        }}
      />
    </Shell>
  );
}
