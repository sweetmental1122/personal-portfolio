"use client";

import { useEffect, useRef } from "react";

type SphereImage = { src: string; width: number; height: number };

type Props = {
  images: SphereImage[];
};

const RADIUS = 400;
const CAMERA_Z = 1000;
/** How strongly wheel/touch input feeds the ring's target rotation. */
const WHEEL_SENSITIVITY = 0.05;
const TOUCH_SENSITIVITY = 0.2;

/**
 * Images arranged around a vertical ring in CSS 3D space. The whole ring
 * eases toward a target rotation driven by wheel and touch, while pointer
 * position adds a parallax tilt and a per-image depth offset.
 */
export function HomeSphere({ images }: Props) {
  const sphereRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sphere = sphereRef.current;
    if (!sphere) return;

    const cells = [...sphere.querySelectorAll<HTMLElement>(".sphere__item")];
    const items = [...sphere.querySelectorAll<HTMLImageElement>("img")];
    const motionAllowed = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Deal the projects into different ring slots on each visit. The server
    // renders a fixed arrangement so the markup stays static (and prerendered);
    // this only re-points existing elements, so no image is re-fetched.
    const slots = cells.map((_, index) => index);
    for (let i = slots.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [slots[i], slots[j]] = [slots[j]!, slots[i]!];
    }
    cells.forEach((cell, index) => {
      const slot = slots[index] ?? index;
      const theta = (360 / cells.length) * slot;
      const phi = ((slot * 37) % 10) - 5;
      cell.style.transform = `translate(-50%,-50%) rotateY(${theta}deg) rotateX(${phi}deg) translateZ(-${RADIUS}px)`;
      const image = items[index];
      if (image) {
        image.dataset.depth = String(Math.sin((slot / cells.length) * Math.PI * 2));
      }
    });

    if (!motionAllowed) {
      sphere.style.transform = `translate3d(0, 0, ${CAMERA_Z}px)`;
      return;
    }

    let targetRotation = 0;
    let currentRotation = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;
    let targetMoveX = 0;
    let targetMoveY = 0;
    let currentMoveX = 0;
    let currentMoveY = 0;
    let frame = 0;

    const onMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      targetTiltX = y * -7;
      targetTiltY = x * 10;
      targetMoveX = x * 28;
      targetMoveY = y * 18;
      schedule();
    };

    const onMouseLeave = () => {
      targetTiltX = 0;
      targetTiltY = 0;
      targetMoveX = 0;
      targetMoveY = 0;
      schedule();
    };

    const onWheel = (event: WheelEvent) => {
      const delta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      targetRotation += delta * WHEEL_SENSITIVITY;
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
      targetRotation +=
        (Math.abs(deltaX) > Math.abs(deltaY) ? -deltaX : deltaY) * TOUCH_SENSITIVITY;
      touchX = touch.clientX;
      touchY = touch.clientY;
      schedule();
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    const root = document.documentElement;

    /**
     * The loop used to run forever, repainting nine elements every frame even
     * when nothing had moved for minutes. It now stops once every value has
     * settled and restarts on the next input, so an idle home page costs
     * nothing.
     */
    const SETTLED = 0.01;
    const isSettled = () =>
      Math.abs(targetRotation - currentRotation) < SETTLED &&
      Math.abs(targetTiltX - currentTiltX) < SETTLED &&
      Math.abs(targetTiltY - currentTiltY) < SETTLED &&
      Math.abs(targetMoveX - currentMoveX) < SETTLED &&
      Math.abs(targetMoveY - currentMoveY) < SETTLED;

    const render = () => {
      frame = 0;

      currentRotation += (targetRotation - currentRotation) * 0.08;
      currentTiltX += (targetTiltX - currentTiltX) * 0.055;
      currentTiltY += (targetTiltY - currentTiltY) * 0.055;
      currentMoveX += (targetMoveX - currentMoveX) * 0.045;
      currentMoveY += (targetMoveY - currentMoveY) * 0.045;

      sphere.style.transform = `translate3d(${currentMoveX}px, ${currentMoveY}px, ${CAMERA_Z}px) rotateX(${currentTiltX}deg) rotateY(${currentRotation + currentTiltY}deg)`;

      items.forEach((image) => {
        const depth = Number(image.dataset.depth ?? 0);
        const x = currentMoveX * depth * 0.42;
        const y = currentMoveY * depth * 0.34;
        const z = Math.abs(depth) * 24;
        image.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
      });

      // The marquee logo reads these to drift against the sphere.
      root.style.setProperty("--logo-x", `${currentMoveX * -0.24}px`);
      root.style.setProperty("--logo-y", `${currentMoveY * -0.24}px`);

      if (!isSettled()) schedule();
    };

    function schedule() {
      if (!frame && !document.hidden) frame = requestAnimationFrame(render);
    }

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else {
        schedule();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    schedule();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("visibilitychange", onVisibility);
      root.style.removeProperty("--logo-x");
      root.style.removeProperty("--logo-y");
    };
  }, []);

  return (
    <div className="scene">
      <div className="sphere" ref={sphereRef}>
        {images.map((image, index) => {
          const theta = (360 / images.length) * index;
          // A small deterministic tilt per item keeps the ring from reading
          // as a perfectly flat carousel.
          const phi = ((index * 37) % 10) - 5;
          const depth = Math.sin((index / images.length) * Math.PI * 2);

          return (
            <div
              className="sphere__item"
              key={image.src}
              style={{
                transform: `translate(-50%,-50%) rotateY(${theta}deg) rotateX(${phi}deg) translateZ(-${RADIUS}px)`,
              }}
            >
              {/* Plain <img>: these live inside a 3D transform chain and are
                  driven per-frame, so next/image's wrapper adds no value.

                  suppressHydrationWarning: ad and image blocking extensions
                  stamp attributes onto <img> (data-xblocker, visibility:hidden)
                  between the server response and hydration. Every attribute
                  set here is deterministic, so the only mismatch this can hide
                  is one a third party introduced. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt=""
                width={image.width}
                height={image.height}
                data-depth={depth}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
                loading={index === 0 ? "eager" : "lazy"}
                suppressHydrationWarning
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
