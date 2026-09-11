"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/site-path";
import type { Language } from "@/lib/i18n";

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

const polishItems = [
  { ...galleryItems[0], alt: "Czerwono-czarny stojak na słuchawki z czaszką wydrukowany w 3D", title: "Stojak na słuchawki z czaszką", meta: "Wielokolorowy FDM · Ekspozycja · Projekt funkcjonalny" },
  { ...galleryItems[1], alt: "Miedziana geometryczna lampka z czaszką na czarnej podstawie", title: "Geometryczna lampka z czaszką", meta: "Oświetlenie dekoracyjne · Druk FDM · Montaż" },
  { ...galleryItems[2], alt: "Biały ślimak podajnika wydrukowany w 3D", title: "Prototyp ślimaka podajnika", meta: "Prototyp funkcjonalny · Iteracje · Druk FDM" },
  { ...galleryItems[3], alt: "Wysoki czarny element funkcjonalny wydrukowany w 3D", title: "Niestandardowa część funkcjonalna", meta: "Projekt CAD · Część zamienna · Wydruk użytkowy" },
  { ...galleryItems[4], alt: "Biała prototypowa obudowa podajnika wydrukowana w 3D", title: "Obudowa podajnika", meta: "Rozwój produktu · Druk wielkoformatowy · Montaż" },
] as const;

export function FactoryGallery({ language = "en" }: { language?: Language }) {
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
      aria-label={pl ? "Wybrane realizacje RobyFactory" : "Selected RobyFactory work"}
      onMouseLeave={() => setActiveIndex(null)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setActiveIndex(null);
        }
      }}
    >
      <div className="factory-gallery-marquee-viewport">
        <div className="factory-gallery-marquee-track">
          {[0, 1].map((copyIndex) => (
            <div
              className="factory-gallery-marquee-group"
              key={copyIndex}
              aria-hidden={copyIndex === 1 ? "true" : undefined}
            >
              {items.map((item, index) => (
                <button
                  className="factory-gallery-marquee-item"
                  type="button"
                  key={`${copyIndex}-${item.src}`}
                  tabIndex={copyIndex === 1 ? -1 : 0}
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
