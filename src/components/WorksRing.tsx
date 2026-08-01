"use client";

import Link from "next/link";
import { useLayoutEffect, useMemo, useRef, useState } from "react";

export type RingItem = {
  slug: string;
  href: string;
  title: string;
  categoryKey: string;
  categoryLabel: string;
  thumbnail: { src: string; width: number; height: number };
};

type Props = {
  items: RingItem[];
  categories: { key: string; label: string }[];
  labels: {
    all: string;
    filter: string;
    scene: string;
    empty: string;
    hint: string;
  };
};

const ALL = "all";
const normalizeAngle = (angle: number) => (((angle + 180) % 360) + 360) % 360 - 180;

/**
 * Projects laid out around a horizontal ring. Wheel, drag and arrow keys
 * spin it; cards past ~80° from the front fade out and drop out of the
 * tab order so they can't be focused while invisible.
 */
export function WorksRing({ items, categories, labels }: Props) {
  const [active, setActive] = useState(ALL);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const rotation = useRef({ target: 0, current: 0 });
  const frame = useRef(0);

  const visible = useMemo(
    () => (active === ALL ? items : items.filter((item) => item.categoryKey === active)),
    [items, active],
  );

  const count = visible.length;

  // One pre-paint effect owns the whole animation: `render` and `schedule`
  // are mutually recursive, so keeping them local avoids a circular
  // useCallback pair. Running in a layout effect also means the cards are
  // positioned before the first paint instead of flashing stacked at the
  // centre.
  useLayoutEffect(() => {
    const scene = ringRef.current?.parentElement;
    if (!scene) return;

    rotation.current = { target: 0, current: 0 };

    const render = () => {
      frame.current = 0;
      const cards = cardRefs.current.slice(0, count);
      if (!cards.length) return;

      const mobile = window.matchMedia("(max-width: 760px)").matches;
      const tablet = !mobile && window.matchMedia("(max-width: 1024px)").matches;
      const vw = window.innerWidth;

      rotation.current.current +=
        (rotation.current.target - rotation.current.current) * (mobile ? 0.09 : 0.055);

      // Radius grows with the card count so neighbours never overlap. These
      // widths must track the max-width the stylesheet gives .works__card at
      // each breakpoint, or the ring spaces cards for the wrong size.
      const cardWidth = vw * (mobile ? 0.48 : tablet ? 0.38 : 0.25);
      const gap = vw * (mobile ? 0.045 : tablet ? 0.035 : 0.025);
      const spacingRadius = ((cardWidth + gap) * cards.length) / (Math.PI * 2);
      // Floor so a short filtered list still reads as a ring rather than a
      // flat row. Tablets sit between the two, closer to mobile.
      const tier = cards.length <= 2 ? 0 : cards.length <= 5 ? 1 : 2;
      const minRadius = mobile
        ? [300, 480, 720][tier]!
        : tablet
          ? [360, 560, 800][tier]!
          : [440, 650, 900][tier]!;
      const radius = Math.max(minRadius, spacingRadius);
      const step = 360 / cards.length;

      cards.forEach((card, index) => {
        if (!card) return;
        const angle = normalizeAngle(index * step + rotation.current.current);
        const radians = (angle * Math.PI) / 180;
        const x = Math.sin(radians) * radius;
        const z = Math.cos(radians) * radius - radius;
        const opacity = Math.max(0, 1 - Math.max(0, Math.abs(angle) - 78) / 24);
        const reachable = Math.abs(angle) < 82;

        card.style.transform = `translate3d(calc(-50% + ${x}px),-50%,${z}px) rotateY(${-angle * 0.08}deg)`;
        card.style.opacity = String(opacity);
        card.style.zIndex = String(Math.round(2000 + z));
        card.style.pointerEvents = reachable ? "auto" : "none";
        card.querySelector("a")?.setAttribute("tabindex", reachable ? "0" : "-1");
      });

      if (Math.abs(rotation.current.target - rotation.current.current) > 0.01) schedule();
    };

    const schedule = () => {
      if (!frame.current) frame.current = requestAnimationFrame(render);
    };

    render();

    const onWheel = (event: WheelEvent) => {
      const delta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      rotation.current.target -= delta * 0.026;
      schedule();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
      event.preventDefault();
      rotation.current.target += ["ArrowRight", "ArrowDown"].includes(event.key) ? -24 : 24;
      schedule();
    };

    let touchX = 0;
    let touchY = 0;
    const onTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      touchX = touch.clientX;
      touchY = touch.clientY;
    };
    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      const deltaX = touch.clientX - touchX;
      const deltaY = touchY - touch.clientY;
      rotation.current.target += (Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : -deltaY) * 0.13;
      touchX = touch.clientX;
      touchY = touch.clientY;
      schedule();
    };

    const onResize = () => schedule();

    scene.addEventListener("wheel", onWheel, { passive: true });
    scene.addEventListener("keydown", onKeyDown);
    scene.addEventListener("touchstart", onTouchStart, { passive: true });
    scene.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(frame.current);
      frame.current = 0;
      scene.removeEventListener("wheel", onWheel);
      scene.removeEventListener("keydown", onKeyDown);
      scene.removeEventListener("touchstart", onTouchStart);
      scene.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onResize);
    };
  }, [count]);

  const filters = [{ key: ALL, label: labels.all }, ...categories];

  return (
    <section className="works" aria-labelledby="works-heading">
      <h1 className="sr-only" id="works-heading">
        {labels.scene}
      </h1>

      <div className="works__filter" role="group" aria-label={labels.filter}>
        {filters.map((filter) => (
          <button
            key={filter.key}
            type="button"
            className={filter.key === active ? "is-active" : undefined}
            aria-pressed={filter.key === active}
            onClick={() => setActive(filter.key)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="works__scene" aria-label={labels.scene} tabIndex={0}>
        <div className="works__ring" ref={ringRef}>
          {visible.map((item, index) => (
            <article
              className="works__card"
              key={item.slug}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
            >
              <Link href={item.href}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.thumbnail.src}
                  alt={item.title}
                  width={item.thumbnail.width}
                  height={item.thumbnail.height}
                  decoding="async"
                  loading={index < 3 ? "eager" : "lazy"}
                  // Blocker extensions stamp attributes onto <img> before
                  // hydration; see the note in HomeSphere.
                  suppressHydrationWarning
                />
                <span className="works__copy">
                  <small>{item.categoryLabel}</small>
                  <strong>{item.title}</strong>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>

      {visible.length === 0 && <p className="empty-message">{labels.empty}</p>}

      <p className="works__hint">{labels.hint}</p>
    </section>
  );
}
