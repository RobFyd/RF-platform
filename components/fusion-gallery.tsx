"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/site-path";

const galleryItems = [
  {
    src: assetPath("/fusion/cnc-machined-assembly.webp"),
    alt: "CNC-machined aluminium assembly on a metal workbench",
    title: "Precision-machined assembly",
    meta: "Aluminium · CNC machining · Assembly",
  },
  {
    src: assetPath("/fusion/tig-welded-tube.webp"),
    alt: "Close-up of precision TIG welds on a polished metal tube",
    title: "Controlled TIG welding",
    meta: "Stainless steel · TIG · Production",
  },
  {
    src: assetPath("/fusion/fabrication-table.webp"),
    alt: "Large fabricated metal frames aligned on a welding table",
    title: "Large-scale fabrication",
    meta: "Fabrication · Alignment · Finishing",
  },
] as const;

export function FusionGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const selectRelative = useCallback((direction: number) => {
    setLightboxIndex((current) => {
      if (current === null) return null;
      return (current + direction + galleryItems.length) % galleryItems.length;
    });
  }, []);

  const scrollRail = (direction: number) => {
    railRef.current?.scrollBy({
      left: direction * Math.max(280, railRef.current.clientWidth * 0.72),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowLeft") selectRelative(-1);
      if (event.key === "ArrowRight") selectRelative(1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, selectRelative]);

  return (
    <div
      className="factory-gallery"
      role="region"
      aria-label="Selected RobyFusion work"
    >
      <div className="factory-gallery-rail-shell">
        <button
          className="factory-gallery-rail-arrow is-left"
          type="button"
          onClick={() => scrollRail(-1)}
          aria-label="Scroll gallery left"
        >
          <span aria-hidden="true">←</span>
        </button>

        <div className="factory-gallery-rail" ref={railRef}>
          {galleryItems.map((item, index) => (
            <button
              className="factory-gallery-thumbnail"
              type="button"
              key={item.src}
              onClick={() => setLightboxIndex(index)}
              aria-label={`Open project ${index + 1}: ${item.title}`}
            >
              <span className="factory-gallery-image">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 620px) 72vw, (max-width: 1000px) 38vw, 25vw"
                  priority={index < 2}
                />
              </span>
              <span className="factory-gallery-thumbnail-copy">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.title}</strong>
              </span>
            </button>
          ))}
        </div>

        <button
          className="factory-gallery-rail-arrow is-right"
          type="button"
          onClick={() => scrollRail(1)}
          aria-label="Scroll gallery right"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <p className="factory-gallery-hint">Select an image to enlarge</p>

      {lightboxIndex !== null ? (
        <div
          className="factory-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={galleryItems[lightboxIndex].title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setLightboxIndex(null);
          }}
        >
          <button
            className="factory-lightbox-close"
            type="button"
            ref={closeButtonRef}
            onClick={() => setLightboxIndex(null)}
            aria-label="Close enlarged image"
          >
            <span aria-hidden="true">×</span>
          </button>

          <button
            className="factory-lightbox-arrow is-left"
            type="button"
            onClick={() => selectRelative(-1)}
            aria-label="Previous project"
          >
            <span aria-hidden="true">←</span>
          </button>

          <figure className="factory-lightbox-content">
            <div className="factory-lightbox-image">
              <Image
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].alt}
                fill
                sizes="(max-width: 900px) 92vw, 78vh"
                priority
              />
            </div>
            <figcaption>
              <div>
                <strong>{galleryItems[lightboxIndex].title}</strong>
                <span>{galleryItems[lightboxIndex].meta}</span>
              </div>
              <span>
                {String(lightboxIndex + 1).padStart(2, "0")} /{" "}
                {String(galleryItems.length).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>

          <button
            className="factory-lightbox-arrow is-right"
            type="button"
            onClick={() => selectRelative(1)}
            aria-label="Next project"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
