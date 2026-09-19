"use client";

import { useMemo, useState, useSyncExternalStore, type ComponentType } from "react";
import { flushSync } from "react-dom";
import { WorksGrid } from "./WorksGrid";
import { WorksRing } from "./WorksRing";

export type WorkItem = {
  slug: string;
  href: string;
  title: string;
  summary: string;
  categoryKey: string;
  categoryLabel: string;
  year?: string;
  stack?: string[];
  thumbnail: { src: string; width: number; height: number };
};

export type WorksView = "ring" | "grid";

type Props = {
  items: WorkItem[];
  categories: { key: string; label: string }[];
  labels: {
    all: string;
    filter: string;
    scene: string;
    empty: string;
    hint: string;
    view: string;
    viewRing: string;
    viewCards: string;
    open: string;
  };
};

const ALL = "all";

/* ------------------------------------------------------------------
 * View preference. Remembered per browser so someone who prefers the
 * cards is not handed the ring again on every visit. Read through
 * useSyncExternalStore so the server render (always the ring) and the
 * first client render agree, and the stored choice applies right after.
 * ------------------------------------------------------------------ */
const VIEW_KEY = "works-view";
const listeners = new Set<() => void>();
/** Fallback for when storage is blocked, so the toggle still works. */
let memoryView: WorksView | null = null;

const readView = (): WorksView => {
  if (memoryView) return memoryView;
  try {
    return window.localStorage.getItem(VIEW_KEY) === "grid" ? "grid" : "ring";
  } catch {
    return "ring";
  }
};

const writeView = (view: WorksView) => {
  memoryView = view;
  try {
    window.localStorage.setItem(VIEW_KEY, view);
  } catch {
    // Private mode or blocked storage — memoryView carries the session.
  }
  listeners.forEach((listener) => listener());
};

const subscribeView = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const serverView = (): WorksView => "ring";

/**
 * Runs a state update inside a view transition where the browser offers
 * one, so grid cards glide to their new slots instead of jumping. Plain
 * update everywhere else, and for anyone who asked for reduced motion.
 * Returns whether a transition was used, so the caller knows whether the
 * grid should replay its arrival animation instead.
 */
const withViewTransition = (update: () => void): boolean => {
  const doc = document as Document & { startViewTransition?: (callback: () => void) => unknown };
  if (
    typeof doc.startViewTransition !== "function" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    update();
    return false;
  }
  doc.startViewTransition(() => flushSync(update));
  return true;
};

const RingIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.4">
    <ellipse cx="8" cy="8" rx="6.5" ry="3" />
    <rect x="5.5" y="4.5" width="5" height="7" rx="1" fill="currentColor" stroke="none" opacity="0.85" />
  </svg>
);

const GridIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
    <rect x="1.5" y="1.5" width="5.5" height="5.5" rx="1.4" />
    <rect x="9" y="1.5" width="5.5" height="5.5" rx="1.4" />
    <rect x="1.5" y="9" width="5.5" height="5.5" rx="1.4" />
    <rect x="9" y="9" width="5.5" height="5.5" rx="1.4" />
  </svg>
);

/**
 * The works page: one category filter and a view switch, feeding either
 * the 3D ring or the card grid with the same filtered list.
 */
export function WorksGallery({ items, categories, labels }: Props) {
  const [active, setActive] = useState(ALL);
  // Bumped on filter changes that could not use a view transition, so the
  // grid remounts and replays its staggered arrival instead of snapping.
  const [epoch, setEpoch] = useState(0);
  const view = useSyncExternalStore(subscribeView, readView, serverView);

  const visible = useMemo(
    () => (active === ALL ? items : items.filter((item) => item.categoryKey === active)),
    [items, active],
  );

  const changeFilter = (key: string) => {
    if (key === active) return;
    if (view !== "grid") {
      setActive(key);
      return;
    }
    const transitioned = withViewTransition(() => setActive(key));
    if (!transitioned) setEpoch((value) => value + 1);
  };

  const filters = [{ key: ALL, label: labels.all }, ...categories];
  const views: { key: WorksView; label: string; icon: ComponentType }[] = [
    { key: "ring", label: labels.viewRing, icon: RingIcon },
    { key: "grid", label: labels.viewCards, icon: GridIcon },
  ];

  return (
    <section className="works" data-view={view} aria-labelledby="works-heading">
      <h1 className="sr-only" id="works-heading">
        {labels.scene}
      </h1>

      <div className="works__dock">
        <div className="works__view" role="group" aria-label={labels.view}>
          {views.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              className={key === view ? "is-active" : undefined}
              aria-pressed={key === view}
              onClick={() => writeView(key)}
            >
              <Icon />
              {label}
            </button>
          ))}
        </div>

        <div className="works__filter" role="group" aria-label={labels.filter}>
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              className={filter.key === active ? "is-active" : undefined}
              aria-pressed={filter.key === active}
              onClick={() => changeFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {view === "grid" ? (
        <WorksGrid key={epoch} items={visible} openLabel={labels.open} />
      ) : (
        <WorksRing items={visible} label={labels.scene} hint={labels.hint} />
      )}

      {visible.length === 0 && <p className="empty-message">{labels.empty}</p>}
    </section>
  );
}
