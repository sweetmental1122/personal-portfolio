import { NotFoundView } from "@/components/NotFoundView";

/**
 * Boundary for `notFound()` calls raised inside the locale segment — an
 * unknown project slug, for example. Without it those calls escape the
 * `[lang]` tree and Next answers with an empty body.
 */
export default function LocaleNotFound() {
  return <NotFoundView />;
}
