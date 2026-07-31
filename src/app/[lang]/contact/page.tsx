import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { Shell } from "@/components/Shell";
import { BUDGETS, DEADLINES, PROJECT_TYPES } from "@/content/formOptions";
import { site } from "@/content/site";
import { t } from "@/content/types";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.contact.title,
    description: dict.contact.intro,
    alternates: { canonical: localePath(lang, "/contact") },
  };
}

const localize = (options: { value: string; label: Record<Locale, string> }[], locale: Locale) =>
  options.map((option) => ({ value: option.value, label: t(option.label, locale) }));

export default async function ContactPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <Shell locale={lang} page="contact">
      <div className="contact">
        <header className="contact__intro">
          <h1>{dict.contact.title}</h1>
          <p>{dict.contact.intro}</p>
        </header>

        <ContactForm
          locale={lang}
          dict={dict}
          email={site.email}
          options={{
            projectTypes: localize(PROJECT_TYPES, lang),
            budgets: localize(BUDGETS, lang),
            deadlines: localize(DEADLINES, lang),
          }}
        />
      </div>
    </Shell>
  );
}
