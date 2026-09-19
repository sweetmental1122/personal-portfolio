"use client";

import { usePathname, useServerInsertedHTML } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

export const THEME_STORAGE_KEY = "portfolio-color-theme";

type Theme = "dark" | "light";

/* ------------------------------------------------------------------
 * The theme store. `<html data-theme>` is the source of truth; anything
 * that reads it (the toggle) subscribes here and is told when it moves.
 * ------------------------------------------------------------------ */
const listeners = new Set<() => void>();

export function subscribeTheme(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

const notify = () => listeners.forEach((listener) => listener());

/**
 * The saved choice, or the OS preference until one is made. Mirrored by
 * the inline script below — keep the two in step.
 */
function resolveTheme(): Theme {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    const dark = saved ? saved === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    return dark ? "dark" : "light";
  } catch {
    return "light";
  }
}

/** Applies the saved theme (or the OS preference) to <html>. */
export function applyStoredTheme(): void {
  document.documentElement.dataset.theme = resolveTheme();
  notify();
}

/** The user's explicit choice: applied now and remembered. */
export function setTheme(dark: boolean): void {
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  try {
    localStorage.setItem(THEME_STORAGE_KEY, dark ? "dark" : "light");
  } catch {
    // Private browsing — the theme still applies for this session.
  }
  notify();
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
 * Keeps `<html data-theme>` set, in two situations.
 *
 * On the server it puts the theme script in <head> so the page never
 * flashes the wrong colours. It goes in through `useServerInsertedHTML`
 * rather than being returned as a <script> element: a server component's
 * output is replayed into the client tree, and React 19 warns whenever it
 * meets a script there ("Encountered a script tag while rendering React
 * component") because scripts in the client tree never execute. This hook
 * runs on the server only, so the tag reaches the streamed HTML.
 *
 * The ref guard matters: the callback fires on every stream flush, and
 * without it the script is emitted once per flush — fourteen copies on the
 * home page.
 *
 * On the client it re-applies the theme after a navigation that lost it.
 * The `[lang]` layout is a different instance per locale, so switching
 * language replaces the whole tree, and React 19 clears every attribute
 * from the <html> singleton when the old instance is released — the
 * `data-theme` the script set before first paint included. The script does
 * not run again on a client navigation, so without this a reader in dark
 * mode landed in light mode the moment they changed language. A layout
 * effect runs before paint, so nothing flashes.
 */
export function ThemeScript() {
  const inserted = useRef(false);
  const pathname = usePathname();

  useServerInsertedHTML(() => {
    if (inserted.current) return null;
    inserted.current = true;
    return <script key="theme-script" dangerouslySetInnerHTML={{ __html: script }} />;
  });

  useLayoutEffect(() => {
    if (!document.documentElement.dataset.theme) applyStoredTheme();
  }, [pathname]);

  return null;
}
