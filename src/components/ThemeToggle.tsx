"use client";

import { useSyncExternalStore } from "react";
import { THEME_STORAGE_KEY } from "./ThemeScript";

/**
 * `<html data-theme>` is the source of truth — ThemeScript sets it before
 * first paint. Treating it as an external store keeps the button in sync
 * without a mount effect that would trigger a cascading render.
 */
const listeners = new Set<() => void>();

const subscribe = (onChange: () => void) => {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
};

const getSnapshot = () => document.documentElement.dataset.theme === "dark";
// The server can't know the reader's preference; ThemeScript corrects it
// before paint and this store re-reads it on hydration.
const getServerSnapshot = () => false;

function setTheme(dark: boolean) {
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  try {
    localStorage.setItem(THEME_STORAGE_KEY, dark ? "dark" : "light");
  } catch {
    // Private browsing — the theme still applies for this session.
  }
  listeners.forEach((listener) => listener());
}

type Props = {
  toLightLabel: string;
  toDarkLabel: string;
};

export function ThemeToggle({ toLightLabel, toDarkLabel }: Props) {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(!isDark)}
      aria-pressed={isDark}
      aria-label={isDark ? toLightLabel : toDarkLabel}
    />
  );
}
