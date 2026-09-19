"use client";

import Link from "next/link";
import { useEffect, useRef, type CSSProperties } from "react";
import type { WorkItem } from "./WorksGallery";

type Props = {
  /** Already filtered — the gallery owns the category state. */
  items: WorkItem[];
  openLabel: string;
};

/**
 * Projects as a grid of glass cards. Each one fades up on arrival, and on
 * hover tilts toward the pointer under a spotlight while a gradient ring
 * circles its edge — all of it in globals.css under "Works: card grid".
 *
 * The pointer work here only writes CSS variables onto the hovered card, so
 * nothing re-renders per mouse move.
 */
export function WorksGrid({ items, openLabel }: Props) {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    // Touch screens get the static card; the hover styles are gated the
    // same way in the stylesheet.
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const tilt = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cardOf = (target: EventTarget | null) =>
      (target as Element | null)?.closest<HTMLElement>(".wcard") ?? null;

    const onMove = (event: PointerEvent) => {
      const card = cardOf(event.target);
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      card.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
      card.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
      if (!tilt) return;
      card.style.setProperty("--ry", `${((px - 0.5) * 10).toFixed(2)}deg`);
      card.style.setProperty("--rx", `${((0.5 - py) * 8).toFixed(2)}deg`);
    };

    // pointerleave does not bubble, so this listens to pointerout and
    // ignores moves between a card's own children.
    const onOut = (event: PointerEvent) => {
      const card = cardOf(event.target);
      if (!card || card.contains(event.relatedTarget as Node | null)) return;
      card.style.removeProperty("--rx");
      card.style.removeProperty("--ry");
    };

    grid.addEventListener("pointermove", onMove, { passive: true });
    grid.addEventListener("pointerout", onOut, { passive: true });
    return () => {
      grid.removeEventListener("pointermove", onMove);
      grid.removeEventListener("pointerout", onOut);
    };
  }, []);

  return (
    <div className="wgrid" ref={gridRef}>
      {items.map((item, index) => (
        <article
          className="wcard"
          key={item.slug}
          style={
            {
              // Stagger index for the arrival animation, and a name so the
              // View Transitions API can glide the card to its new slot when
              // the filter changes.
              "--i": index,
              viewTransitionName: `work-${item.slug}`,
            } as CSSProperties
          }
        >
          <Link href={item.href} className="wcard__link">
            <span className="wcard__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.thumbnail.src}
                alt=""
                width={item.thumbnail.width}
                height={item.thumbnail.height}
                decoding="async"
                loading={index < 6 ? "eager" : "lazy"}
                // Blocker extensions stamp attributes onto <img> before
                // hydration; see the note in HomeSphere.
                suppressHydrationWarning
              />
            </span>

            <span className="wcard__body">
              <small className="wcard__eyebrow">
                {item.categoryLabel}
                {item.year && <span className="wcard__year"> · {item.year}</span>}
              </small>
              <strong className="wcard__title">{item.title}</strong>
              <span className="wcard__summary">{item.summary}</span>

              <span className="wcard__foot">
                <span className="wcard__stack">
                  {item.stack?.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </span>
                <span className="wcard__cta">
                  {openLabel}
                  <span aria-hidden="true">→</span>
                </span>
              </span>
            </span>
          </Link>
        </article>
      ))}
    </div>
  );
}
