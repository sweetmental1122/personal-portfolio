export const THEME_STORAGE_KEY = "portfolio-color-theme";

/**
 * Runs before first paint so the page never flashes the wrong theme.
 * Kept as a raw string because it must execute synchronously in <head>,
 * ahead of React hydration.
 */
const script = `(() => {
  try {
    const saved = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    const dark = saved ? saved === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
