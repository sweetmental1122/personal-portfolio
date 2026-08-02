"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/config";

const CLONE_COUNT = 3;
/** Pixels per millisecond the marquee drifts to the left. */
const SPEED = 0.055;

type Props = {
  name: string;
  locale: Locale;
  /** Optional wordmark image shown before the name. */
  logo?: { src: string; width: number; height: number };
  /** Home page turns the logo into a full-width scrolling marquee. */
  marquee?: boolean;
};

export function MarqueeLogo({ name, locale, logo, marquee = false }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!marquee) return;
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.add("is-positioned", "is-ready");
      return;
    }

    const items = [...track.children] as HTMLElement[];
    const first = items[0];
    const second = items[1];
    if (!first || !second) return;

    let offset = 0;
    let unitWidth = 0;
    let positioned = false;
    let previousTime = 0;
    let frame = 0;

    const measure = (recenter = false) => {
      unitWidth = second.offsetLeft - first.offsetLeft;
      if (positioned && !recenter) return;
      offset = window.innerWidth / 2 - first.offsetWidth / 2;
      track.style.transform = `translate3d(${offset}px,0,0)`;
      positioned = true;
      root.classList.add("is-positioned");
      if (recenter) requestAnimationFrame(() => root.classList.add("is-ready"));
    };

    measure();
    // Web fonts change the measured width, so re-centre once they settle.
    if (document.fonts?.ready) {
      void document.fonts.ready.then(() => measure(true));
    } else {
      root.classList.add("is-ready");
    }

    // A logo image widens the unit too, and decodes on its own schedule.
    const marks = [...root.querySelectorAll("img")];
    const pending = marks.filter((mark) => !mark.complete);
    pending.forEach((mark) =>
      mark.addEventListener("load", () => measure(true), { once: true }),
    );

    const onResize = () => measure();
    window.addEventListener("resize", onResize, { passive: true });

    const tick = (time: number) => {
      const elapsed = previousTime ? Math.min(50, time - previousTime) : 0;
      previousTime = time;
      if (unitWidth > 0) {
        offset -= elapsed * SPEED;
        if (-offset >= unitWidth) offset += unitWidth;
        track.style.transform = `translate3d(${offset}px,0,0)`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    // A background tab kept scrolling the marquee for nothing.
    const onVisibility = () => {
      cancelAnimationFrame(frame);
      if (document.hidden) return;
      previousTime = 0; // avoid a jump from the time spent hidden
      frame = requestAnimationFrame(tick);
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [marquee]);

  // The wordmark is the logo image beside the name, or just the name when no
  // logo is configured. Both copies are identical so the marquee's measured
  // unit width stays correct.
  const mark = (
    <>
      {logo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="logo__mark"
          src={logo.src}
          alt=""
          width={logo.width}
          height={logo.height}
          decoding="async"
          suppressHydrationWarning
        />
      )}
      <span className="logo__name">{name}</span>
    </>
  );

  const content = (
    <span className="logo__track" ref={trackRef}>
      <span className="logo__primary">{mark}</span>
      {marquee &&
        Array.from({ length: CLONE_COUNT }, (_, index) => (
          <span className="logo__clone" key={index} aria-hidden="true">
            {mark}
          </span>
        ))}
    </span>
  );

  // On the home page the marquee is decorative — the <h1> carries the name.
  if (marquee) {
    return (
      <div className={`logo logo--marquee`} ref={rootRef} aria-hidden="true">
        {content}
      </div>
    );
  }

  return (
    <div className="logo" ref={rootRef}>
      <Link href={localePath(locale)} aria-label={name}>
        {content}
      </Link>
    </div>
  );
}
