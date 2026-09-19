"use client";

import { useSyncExternalStore } from "react";
import { setTheme, subscribeTheme } from "./ThemeScript";

/**
 * `<html data-theme>` is the source of truth — ThemeScript sets it before
 * first paint and restores it after a locale change. Treating it as an
 * external store keeps the button in sync without a mount effect that
 * would trigger a cascading render.
 */
const getSnapshot = () => document.documentElement.dataset.theme === "dark";
// The server can't know the reader's preference; ThemeScript corrects it
// before paint and this store re-reads it on hydration.
const getServerSnapshot = () => false;

/**
 * Both icons are always in the DOM and cross-fade, which is what lets the
 * swap animate. They were drawn with stacked box-shadows before — eight
 * offsets faking the sun's rays — and rounded off into a blur at the size
 * the menu actually renders them.
 */
function SunIcon() {
  return (
    <svg className="theme-toggle__icon theme-toggle__icon--sun" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4.6" />
      <g strokeLinecap="round">
        <path d="M12 2.4v2.6" />
        <path d="M12 19v2.6" />
        <path d="M2.4 12h2.6" />
        <path d="M19 12h2.6" />
        <path d="m5.2 5.2 1.9 1.9" />
        <path d="m16.9 16.9 1.9 1.9" />
        <path d="m18.8 5.2-1.9 1.9" />
        <path d="m7.1 16.9-1.9 1.9" />
      </g>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="theme-toggle__icon theme-toggle__icon--moon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.4 14.3A8.6 8.6 0 0 1 9.7 3.6a8.6 8.6 0 1 0 10.7 10.7Z" />
    </svg>
  );
}

type Props = {
  toLightLabel: string;
  toDarkLabel: string;
};

export function ThemeToggle({ toLightLabel, toDarkLabel }: Props) {
  const isDark = useSyncExternalStore(subscribeTheme, getSnapshot, getServerSnapshot);

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(!isDark)}
      aria-pressed={isDark}
      aria-label={isDark ? toLightLabel : toDarkLabel}
    >
      <MoonIcon />
      <SunIcon />
    </button>
  );
}
