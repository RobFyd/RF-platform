"use client";

import type { PointerEvent, ReactNode } from "react";

type InteractiveHeroProps = {
  children: ReactNode;
};

export function InteractiveHero({ children }: InteractiveHeroProps) {
  function moveLight(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse") {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    event.currentTarget.style.setProperty("--pointer-x", `${x}%`);
    event.currentTarget.style.setProperty("--pointer-y", `${y}%`);
  }

  function resetLight(event: PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--pointer-x", "78%");
    event.currentTarget.style.setProperty("--pointer-y", "18%");
  }

  return (
    <section
      className="hero-shell"
      id="top"
      aria-labelledby="hero-title"
      onPointerMove={moveLight}
      onPointerLeave={resetLight}
    >
      {children}
    </section>
  );
}
