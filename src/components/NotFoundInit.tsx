"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import { isLocale } from "@/i18n/config";
import { applyStoredTheme } from "./ThemeScript";

/**
 * Theme and `<html lang>` setup for the 404 page.
 *
 * Real pages get both from the server: the `[lang]` layout renders `lang` and
 * ThemeScript injects into <head>. The 404 can do neither — it renders outside
 * the locale segment, and Next 16 renders not-found boundaries on the client,
 * so nothing is inserted into the streamed head. An effect is therefore the
 * honest mechanism here rather than a script that would never run.
 */
export function NotFoundInit() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    applyStoredTheme();
    const first = pathname.split("/").filter(Boolean)[0];
    if (first && isLocale(first)) document.documentElement.lang = first;
  }, [pathname]);

  return null;
}
