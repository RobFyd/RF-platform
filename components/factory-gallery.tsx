"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/site-path";

const galleryItems = [
  {
    src: assetPath("/factory/skull-headphone-stand.webp"),
    alt: "Red and black 3D-printed skull headphone stand",
    title: "Skull headphone stand",
    meta: "Multi-colour FDM · Display piece · Functional design",
  },
  {
    src: assetPath("/factory/geometric-skull-lamp.webp"),
    alt: "Copper geometric skull lamp on a black base",
    title: "Geometric skull lamp",
    meta: "Decorative lighting · FDM printing · Assembly",
  },
  {
    src: assetPath("/factory/feeder-auger-prototype.webp"),
    alt: "White 3D-printed auger on a printer build plate",
    title: "Feeder auger prototype",
    meta: "Functional prototype · Iteration · FDM printing",
  },
  {
    src: assetPath("/factory/custom-functional-part.webp"),
    alt: "Tall black custom 3D-printed functional component",
    title: "Custom functional part",
    meta: "CAD design · Replacement part · Practical print",
  },
  {
    src: assetPath("/factory/feeder-enclosure.webp"),
    alt: "White 3D-printed feeder enclosure prototype",
    title: "Feeder enclosure",
    meta: "Product development · Large-format print · Assembly",
  },
] as const;

export function FactoryGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef<number | null>(null);

  const selectRelative = useCallback((direction: number) => {
    setActiveIndex(
      (current) =>
        (current + direction + galleryItems.length) % galleryItems.length,
    );
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") selectRelative(-1);
      if (event.key === "ArrowRight") selectRelative(1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectRelative]);

  const getRelativePosition = (index: number) => {
    if (index === activeIndex) return "active";
    if (
      index ===
      (activeIndex - 1 + galleryItems.length) % galleryItems.length
    ) {
      return "previous";
    }
    return "next";
  };

  return (
    <div
      className="fusion-gallery"
      role="region"
      aria-roledescription="carousel"
      aria-label="Selected RobyFactory work"
      onTouchStart={(event) => {
        touchStart.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const distance = event.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(distance) > 45) selectRelative(distance > 0 ? -1 : 1);
        touchStart.current = null;
      }}
    >
      <div className="fusion-gallery-stage">
        <button
          className="fusion-gallery-arrow fusion-gallery-arrow-left"
          type="button"
          onClick={() => selectRelative(-1)}
          aria-label="Previous project"
        >
          <span aria-hidden="true">←</span>
        </button>

        <div className="fusion-gallery-track" style={{ height: "auto" }}>
          {galleryItems.map((item, index) => {
            const position = getRelativePosition(index);

            return (
              <button
                className={`fusion-gallery-slide is-${position}`}
                type="button"
                key={item.src}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show project ${index + 1}: ${item.title}`}
                aria-current={position === "active" ? "true" : undefined}
                tabIndex={position === "active" ? 0 : -1}
                style={{ aspectRatio: "1 / 1", height: "auto" }}
              >
                <Image
                  src={item.src}
                  alt={position === "active" ? item.alt : ""}
                  fill
                  sizes="(max-width: 620px) 90vw, (max-width: 1000px) 64vw, 48vw"
                  priority={index === 0}
                />
                <span className="fusion-gallery-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        <button
          className="fusion-gallery-arrow fusion-gallery-arrow-right"
          type="button"
          onClick={() => selectRelative(1)}
          aria-label="Next project"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="fusion-gallery-footer" aria-live="polite">
        <div>
          <p className="fusion-gallery-title">
            {galleryItems[activeIndex].title}
          </p>
          <p className="fusion-gallery-meta">
            {galleryItems[activeIndex].meta}
          </p>
        </div>
        <div className="fusion-gallery-dots" aria-label="Choose project">
          {galleryItems.map((item, index) => (
            <button
              type="button"
              key={item.src}
              className={index === activeIndex ? "is-active" : ""}
              onClick={() => setActiveIndex(index)}
              aria-label={`Project ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
        <p className="fusion-gallery-count" aria-hidden="true">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(galleryItems.length).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
