import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Shell } from "@/components/Shell";
import { WorksGallery, type WorkItem } from "@/components/WorksGallery";
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
  const categories = CATEGORIES.map((category) => ({
    key: category.key,
    label: t(category.label, lang),
  }));
  const categoryLabels = new Map(categories.map((category) => [category.key, category.label]));

  const items: WorkItem[] = sortedProjects.map((project) => ({
    slug: project.slug,
    href: localePath(lang, `/works/${project.slug}`),
    title: t(project.title, lang),
    summary: t(project.summary, lang),
    categoryKey: project.categoryKey,
    categoryLabel: categoryLabels.get(project.categoryKey) ?? "",
    year: project.meta.year,
    // Three chips is what fits on a card; the detail page lists them all.
    stack: project.meta.stack?.slice(0, 3),
    thumbnail: project.thumbnail,
  }));

  return (
    <Shell locale={lang} page="works">
      <WorksGallery
        items={items}
        categories={categories}
        labels={{
          all: dict.works.all,
          filter: dict.works.filterLabel,
          scene: dict.works.title,
          empty: dict.works.empty,
          hint: dict.home.scrollHint,
          view: dict.works.view,
          viewRing: dict.works.viewRing,
          viewCards: dict.works.viewCards,
          open: dict.works.open,
        }}
      />
    </Shell>
  );
}
