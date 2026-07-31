"use client";

import { useEffect, useRef } from "react";

/** Elements that scroll independently of <main>. */
const SCROLLER_SELECTOR =
  ".project__copy, .project__images, .about__scroll, .contact, .prose";
const ACTION_SELECTOR = 'a, button, input, textarea, select, video, [role="button"]';

type Props = {
  /** Pages whose main interaction is horizontal rotation rather than scrolling. */
  rotational?: boolean;
  clickLabel?: string;
};

export function CustomCursor({ rotational = false, clickLabel = "click" }: Props) {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const cursor = cursorRef.current;
    const label = cursor?.querySelector("span");
    const main = document.querySelector<HTMLElement>(".main");
    if (!cursor || !label || !main) return;

    const scrollers = [main, ...document.querySelectorAll<HTMLElement>(SCROLLER_SELECTOR)];
    const directions = new WeakMap<HTMLElement, "up" | "down">();
    const lastTops = new WeakMap<HTMLElement, number>();
    scrollers.forEach((element) => {
      directions.set(element, "down");
      lastTops.set(element, element.scrollTop);
    });

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let frame = 0;
    let activeScroller: HTMLElement = main;
    let hovered: Element | null = null;

    const isScrollable = () =>
      rotational || activeScroller.scrollHeight > activeScroller.clientHeight + 2;

    const scrollGlyph = () => {
      if (!isScrollable()) return "";
      if (rotational) return "↔";
      const max = activeScroller.scrollHeight - activeScroller.clientHeight;
      if (activeScroller.scrollTop <= 2) return "↓";
      if (activeScroller.scrollTop >= max - 2) return "↑";
      return directions.get(activeScroller) === "up" ? "↑" : "↓";
    };

    const update = (target: Element | null) => {
      activeScroller = target?.closest<HTMLElement>(SCROLLER_SELECTOR) ?? main;
      const onAction = Boolean(target?.closest(ACTION_SELECTOR));
      cursor.classList.toggle("is-action", onAction);
      cursor.classList.toggle("is-scroll", !onAction && isScrollable());
      label.textContent = onAction ? clickLabel : scrollGlyph();
    };

    const render = () => {
      frame = 0;
      currentX += (targetX - currentX) * 0.3;
      currentY += (targetY - currentY) * 0.3;
      const half = cursor.offsetWidth / 2;
      cursor.style.transform = `translate3d(${currentX - half}px, ${currentY - half}px, 0)`;
      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) schedule();
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    const onMouseMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      hovered = event.target as Element;
      cursor.classList.add("is-visible");
      update(hovered);
      schedule();
    };
    const onMouseLeave = () => cursor.classList.remove("is-visible");

    const onScroll = (event: Event) => {
      const scroller = event.currentTarget as HTMLElement;
      const previous = lastTops.get(scroller) ?? 0;
      if (scroller.scrollTop > previous) directions.set(scroller, "down");
      if (scroller.scrollTop < previous) directions.set(scroller, "up");
      lastTops.set(scroller, scroller.scrollTop);
      if (activeScroller === scroller) update(hovered);
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    scrollers.forEach((element) => element.addEventListener("scroll", onScroll, { passive: true }));

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      scrollers.forEach((element) => element.removeEventListener("scroll", onScroll));
    };
  }, [rotational, clickLabel]);

  return (
    <div className="cursor" ref={cursorRef} aria-hidden="true">
      <span />
    </div>
  );
}
