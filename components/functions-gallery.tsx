"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/site-path";
import type { Language } from "@/lib/i18n";

const galleryItems = [
  {
    src: assetPath("/functions/code-workspace.webp"),
    alt: "Dark frontend development workspace with code editor",
    title: "Frontend development",
    meta: "React · TypeScript · Component-based interfaces",
  },
  {
    src: assetPath("/functions/responsive-interface.webp"),
    alt: "Responsive dark dashboard displayed across desktop, tablet and phone",
    title: "Responsive interfaces",
    meta: "Web design · Mobile-first UI · Accessible experiences",
  },
  {
    src: assetPath("/functions/ai-automation.webp"),
    alt: "Connected digital modules forming an AI automation workflow",
    title: "AI-powered automation",
    meta: "Connected workflows · Intelligent tools · Practical outcomes",
  },
  {
    src: assetPath("/functions/app-architecture.webp"),
    alt: "Isometric full-stack application architecture with connected services",
    title: "Application architecture",
    meta: "Frontend · API · Data · Cloud deployment",
  },
  {
    src: assetPath("/functions/quote-configurator.webp"),
    alt: "Digital manufacturing quote configurator with a 3D part preview",
    title: "Smart quote configurator",
    meta: "Custom tools · Manufacturing workflow · Instant estimates",
  },
] as const;

const polishItems = [
  { ...galleryItems[0], alt: "Ciemne środowisko programistyczne z edytorem kodu", title: "Tworzenie frontendu", meta: "React · TypeScript · Interfejsy komponentowe" },
  { ...galleryItems[1], alt: "Responsywny ciemny panel na komputerze, tablecie i telefonie", title: "Responsywne interfejsy", meta: "Web design · Mobile-first · Dostępność" },
  { ...galleryItems[2], alt: "Połączone moduły cyfrowe tworzące przepływ automatyzacji AI", title: "Automatyzacja wspierana przez AI", meta: "Połączone procesy · Inteligentne narzędzia · Praktyczne rezultaty" },
  { ...galleryItems[3], alt: "Izometryczna architektura aplikacji full-stack z połączonymi usługami", title: "Architektura aplikacji", meta: "Frontend · API · Dane · Wdrożenie w chmurze" },
  { ...galleryItems[4], alt: "Konfigurator wyceny produkcji z podglądem części 3D", title: "Inteligentny konfigurator wyceny", meta: "Narzędzia na zamówienie · Produkcja · Natychmiastowa wycena" },
] as const;

export function FunctionsGallery({ language = "en" }: { language?: Language }) {
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
      aria-label={pl ? "Wybrane koncepcje RobyFunctions" : "Selected RobyFunctions concepts"}
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
                  aria-label={`${pl ? "Otwórz koncepcję" : "Open concept"} ${index + 1}: ${item.title}`}
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
                {pl ? "Kliknij, aby otworzyć pełną grafikę" : "Click to open the full image"}
              </span>
            </div>
          </>
        ) : null}
      </div>

      {lightboxIndex !== null ? (
        <div className="factory-lightbox" role="dialog" aria-modal="true" aria-label={items[lightboxIndex].title} onMouseDown={(event) => {
          if (event.target === event.currentTarget) setLightboxIndex(null);
        }}>
          <button className="factory-lightbox-close" type="button" ref={closeButtonRef} onClick={() => setLightboxIndex(null)} aria-label={pl ? "Zamknij powiększoną grafikę" : "Close enlarged image"}>
            <span aria-hidden="true">×</span>
          </button>

          <button className="factory-lightbox-arrow is-left" type="button" onClick={() => selectRelative(-1)} aria-label={pl ? "Poprzednia koncepcja" : "Previous concept"}>
            <span aria-hidden="true">←</span>
          </button>

          <figure className="factory-lightbox-content">
            <div className="factory-lightbox-image">
              <Image src={items[lightboxIndex].src} alt={items[lightboxIndex].alt} fill sizes="(max-width: 900px) 92vw, 78vh" priority />
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

          <button className="factory-lightbox-arrow is-right" type="button" onClick={() => selectRelative(1)} aria-label={pl ? "Następna koncepcja" : "Next concept"}>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
