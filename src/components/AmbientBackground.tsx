"use client";

import { useEffect, useRef } from "react";

type OrbPosition = { x: string; y: string; scale: string; duration: string };

const STORAGE_KEY = "portfolio-ambient-orbs";
const DRIFT_INTERVAL = 13_000;

const random = (min: number, max: number) => min + Math.random() * (max - min);

type Props = {
  /** The 404 page adds a slow orbital ring behind the content. */
  showOrbit?: boolean;
};

export function AmbientBackground({ showOrbit = false }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const orbs = [...root.querySelectorAll<HTMLElement>(".ambient__orb")];
    if (!orbs.length) return;

    const createPositions = (): OrbPosition[] =>
      orbs.map(() => ({
        x: random(-22, 70).toFixed(2),
        y: random(-28, 68).toFixed(2),
        scale: random(0.8, 1.32).toFixed(3),
        duration: random(14, 24).toFixed(2),
      }));

    const apply = (positions: OrbPosition[], immediate = false) => {
      orbs.forEach((orb, index) => {
        const position = positions[index];
        if (!position) return;
        orb.style.transitionDuration = immediate ? "0s" : `${position.duration}s`;
        orb.style.transform = `translate3d(${position.x}vw,${position.y}vh,0) scale(${position.scale})`;
      });
    };

    // Reuse the previous page's positions so navigation doesn't snap the orbs.
    let saved: OrbPosition[] | null = null;
    try {
      saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "null") as OrbPosition[] | null;
    } catch {
      saved = null;
    }
    apply(Array.isArray(saved) ? saved : createPositions(), true);

    const drift = () => {
      const next = createPositions();
      apply(next);
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Storage is optional — the drift animation still runs.
      }
    };

    const kickoff = requestAnimationFrame(() => requestAnimationFrame(drift));
    const interval = window.setInterval(drift, DRIFT_INTERVAL);

    // Shooting stars, launched in loose pairs.
    const timers = new Set<number>();
    const createStar = () => {
      const star = document.createElement("span");
      star.className = "ambient__star";
      star.style.setProperty("--star-top", `${random(-4, 32)}vh`);
      star.style.setProperty("--star-duration", `${random(0.85, 1.35)}s`);
      root.appendChild(star);
      star.addEventListener("animationend", () => star.remove(), { once: true });
    };
    const launchPair = () => {
      createStar();
      timers.add(window.setTimeout(createStar, random(180, 420)));
      timers.add(window.setTimeout(launchPair, random(4500, 11000)));
    };
    timers.add(window.setTimeout(launchPair, random(1000, 3000)));

    return () => {
      cancelAnimationFrame(kickoff);
      window.clearInterval(interval);
      timers.forEach((id) => window.clearTimeout(id));
      root.querySelectorAll(".ambient__star").forEach((star) => star.remove());
    };
  }, []);

  return (
    <div className="ambient" ref={rootRef} aria-hidden="true">
      <span className="ambient__orb ambient__orb--a" />
      <span className="ambient__orb ambient__orb--b" />
      <span className="ambient__orb ambient__orb--c" />
      {showOrbit && (
        <div className="ambient__orbit-wrap">
          <div className="orbit">
            <span />
            <span />
            <span />
          </div>
        </div>
      )}
    </div>
  );
}
