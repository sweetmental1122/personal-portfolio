import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";
import { projects } from "@/content/works";
import { LOCALES } from "@/i18n/config";

const STATIC_ROUTES = ["", "/about", "/works", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = LOCALES.flatMap((locale) =>
    STATIC_ROUTES.map((route) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
  );

  const work = LOCALES.flatMap((locale) =>
    projects.map((project) => ({
      url: `${siteUrl}/${locale}/works/${project.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  );

  return [...pages, ...work];
}
