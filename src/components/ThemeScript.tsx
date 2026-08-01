"use client";

import { useServerInsertedHTML } from "next/navigation";
import { useRef } from "react";

export const THEME_STORAGE_KEY = "portfolio-color-theme";

/**
 * Applies the saved theme to <html>. Mirrored by the inline script below —
 * keep the two in step.
 */
export function applyStoredTheme(): void {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    const dark = saved ? saved === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  } catch {
    document.documentElement.dataset.theme = "light";
  }
}

const script = `(() => {
  try {
    const saved = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    const dark = saved ? saved === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();`;

/**
 * Puts the theme script in <head> so the page never flashes the wrong colours.
 *
 * It goes in through `useServerInsertedHTML` rather than being returned as a
 * <script> element: a server component's output is replayed into the client
 * tree, and React 19 warns whenever it meets a script there ("Encountered a
 * script tag while rendering React component") because scripts in the client
 * tree never execute. This hook runs on the server only, so the tag reaches
 * the streamed HTML and this component renders nothing on the client.
 *
 * The ref guard matters: the callback fires on every stream flush, and without
 * it the script is emitted once per flush — fourteen copies on the home page.
 */
export function ThemeScript() {
  const inserted = useRef(false);

  useServerInsertedHTML(() => {
    if (inserted.current) return null;
    inserted.current = true;
    return <script key="theme-script" dangerouslySetInnerHTML={{ __html: script }} />;
  });

  return null;
}
