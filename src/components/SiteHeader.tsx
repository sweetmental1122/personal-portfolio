"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { MarqueeLogo } from "./MarqueeLogo";
import { ThemeToggle } from "./ThemeToggle";

type Props = {
  locale: Locale;
  dict: Dictionary;
  siteName: string;
  marqueeLogo?: boolean;
};

export function SiteHeader({ locale, dict, siteName, marqueeLogo = false }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const links = [
    { href: "/", label: dict.nav.home },
    { href: "/about", label: dict.nav.about },
    { href: "/works", label: dict.nav.works },
    { href: "/contact", label: dict.nav.contact },
  ];

  // Navigating closes the panel. Adjusting state during render is React's
  // documented way to reset on a changed input — an effect here would cause
  // an extra render pass with the menu still open.
  const [renderedPath, setRenderedPath] = useState(pathname);
  if (renderedPath !== pathname) {
    setRenderedPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    navRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (navRef.current?.contains(target) || buttonRef.current?.contains(target)) return;
      setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const isActive = (href: string) => {
    const full = localePath(locale, href);
    return href === "/" ? pathname === full : pathname.startsWith(full);
  };

  return (
    <header className="header">
      <MarqueeLogo name={siteName} locale={locale} marquee={marqueeLogo} />

      <button
        ref={buttonRef}
        type="button"
        className={`menu-toggle${open ? " is-open" : ""}`}
        aria-expanded={open}
        aria-controls="primary-navigation"
        aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <nav
        ref={navRef}
        id="primary-navigation"
        className={`nav${open ? " is-open" : ""}`}
        aria-label={dict.nav.primaryNav}
        inert={!open}
      >
        {links.map((link) =>
          isActive(link.href) ? (
            <span key={link.href} className="is-active" aria-current="page">
              {link.label}
            </span>
          ) : (
            <Link key={link.href} href={localePath(locale, link.href)}>
              {link.label}
            </Link>
          ),
        )}
        <ThemeToggle toLightLabel={dict.nav.toLight} toDarkLabel={dict.nav.toDark} />
      </nav>
    </header>
  );
}
