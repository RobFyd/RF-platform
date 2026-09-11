"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/site-path";
import type { Language } from "@/lib/i18n";

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
    title: "Controlled MIG/TIG welding",
    meta: "Stainless steel · MIG/TIG · Production",
  },
  {
    src: assetPath("/fusion/fabrication-table.webp"),
    alt: "Large fabricated metal frames aligned on a welding table",
    title: "Large-scale fabrication",
    meta: "Fabrication · Alignment · Finishing",
  },
] as const;

const polishItems = [
  { ...galleryItems[0], alt: "Precyzyjnie obrobiony aluminiowy zespół na stole warsztatowym", title: "Precyzyjnie obrobiony zespół", meta: "Aluminium · Obróbka CNC · Montaż" },
  { ...galleryItems[1], alt: "Zbliżenie precyzyjnych spoin TIG na polerowanej rurze", title: "Kontrolowane spawanie TIG", meta: "Stal nierdzewna · TIG · Produkcja" },
  { ...galleryItems[2], alt: "Duże metalowe ramy ustawione na stole spawalniczym", title: "Produkcja wielkogabarytowa", meta: "Produkcja · Ustawienie · Wykończenie" },
] as const;

export function FusionGallery({ language = "en" }: { language?: Language }) {
  const items = language === "pl" ? polishItems : galleryItems;
  const pl = language === "pl";
  const itemCount = items.length;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const selectRelative = useCallback((direction: number) => {
    setLightboxIndex((current) => {
      if (current === null) return null;
      return (current + direction + itemCount) % itemCount;
    });
  }, [itemCount]);

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
      className={`factory-gallery factory-gallery-marquee${activeIndex !== null ? " is-paused" : ""}`}
      role="region"
      aria-label={pl ? "Wybrane realizacje RobyFusion" : "Selected RobyFusion work"}
      onMouseLeave={() => setActiveIndex(null)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setActiveIndex(null);
        }
      }}
    >
      <div className="factory-gallery-marquee-viewport">
        <div className="factory-gallery-marquee-track">
          {[0, 1, 2, 3].map((copyIndex) => (
            <div
              className="factory-gallery-marquee-group"
              key={copyIndex}
              aria-hidden={copyIndex === 0 ? undefined : "true"}
            >
              {items.map((item, index) => (
                <button
                  className="factory-gallery-marquee-item"
                  type="button"
                  key={`${copyIndex}-${item.src}`}
                  tabIndex={copyIndex === 0 ? 0 : -1}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex((current) => current === index ? null : current)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`${pl ? "Otwórz projekt" : "Open project"} ${index + 1}: ${item.title}`}
                >
                  <span className="factory-gallery-marquee-image">
                    <Image
                      src={item.src}
                      alt={copyIndex === 0 ? item.alt : ""}
                      fill
                      sizes="(max-width: 620px) 8rem, (max-width: 1000px) 14vw, 12rem"
                      priority={copyIndex === 0 && index < 2}
                    />
                  </span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`factory-gallery-marquee-description${activeIndex !== null ? " is-visible" : ""}`}
        aria-live="polite"
      >
        {activeIndex !== null ? (
          <>
            <span className="factory-gallery-marquee-index">
              {`// ${String(activeIndex + 1).padStart(2, "0")}`}
            </span>
            <div>
              <strong>{items[activeIndex].title}</strong>
              <p>{items[activeIndex].meta}</p>
              <span className="factory-gallery-marquee-hint">
                {pl ? "Kliknij, aby otworzyć pełne zdjęcie" : "Click to open the full image"}
              </span>
            </div>
          </>
        ) : null}
      </div>

      {lightboxIndex !== null ? (
        <div
          className="factory-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={items[lightboxIndex].title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setLightboxIndex(null);
          }}
        >
          <button
            className="factory-lightbox-close"
            type="button"
            ref={closeButtonRef}
            onClick={() => setLightboxIndex(null)}
            aria-label={pl ? "Zamknij powiększone zdjęcie" : "Close enlarged image"}
          >
            <span aria-hidden="true">×</span>
          </button>

          <button
            className="factory-lightbox-arrow is-left"
            type="button"
            onClick={() => selectRelative(-1)}
            aria-label={pl ? "Poprzedni projekt" : "Previous project"}
          >
            <span aria-hidden="true">←</span>
          </button>

          <figure className="factory-lightbox-content">
            <div className="factory-lightbox-image">
              <Image
                src={items[lightboxIndex].src}
                alt={items[lightboxIndex].alt}
                fill
                sizes="(max-width: 900px) 92vw, 78vh"
                priority
              />
            </div>
            <figcaption>
              <div>
                <strong>{items[lightboxIndex].title}</strong>
                <span>{items[lightboxIndex].meta}</span>
              </div>
              <span>
                {String(lightboxIndex + 1).padStart(2, "0")} /{" "}
                {String(items.length).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>

          <button
            className="factory-lightbox-arrow is-right"
            type="button"
            onClick={() => selectRelative(1)}
            aria-label={pl ? "Następny projekt" : "Next project"}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
