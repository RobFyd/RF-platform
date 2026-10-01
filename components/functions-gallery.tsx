"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/site-path";
import type { Language } from "@/lib/i18n";

const galleryItems = [
  {
    src: assetPath("/functions/rf-platform.webp"),
    alt: "Landing page of the modular RF portfolio platform",
    title: "//RF Platform",
    meta: "Next.js · React · TypeScript · Tailwind CSS · Modular multilingual portfolio",
  },
  {
    src: assetPath("/functions/movie-browser.webp"),
    alt: "Movie Browser interface showing a searchable grid of popular films",
    title: "Movie Browser",
    meta: "React · Movie data · Search · Categories · Favourites",
  },
  {
    src: assetPath("/functions/robyfactory-website.webp"),
    alt: "RobyFactory product website presenting 3D printed designs",
    title: "RobyFactory Website",
    meta: "Responsive product website · HTML · CSS · JavaScript · Visual storytelling",
  },
  {
    src: assetPath("/functions/shop-in-react.webp"),
    alt: "Shop in React interface with a hero image and product cards",
    title: "Shop in React",
    meta: "React · React Router · REST API · Netlify · Render",
  },
  {
    src: assetPath("/functions/todo-list-react.webp"),
    alt: "React task list with search, filtering and completion controls",
    title: "To-do List",
    meta: "React · Task filtering · Completion states · Reusable components",
  },
  {
    src: assetPath("/functions/currency-converter-react.webp"),
    alt: "React money exchanger converting British pounds into another currency",
    title: "React Currency Converter",
    meta: "React · Currency API · Form validation · Live conversion",
  },
  {
    src: assetPath("/functions/task-tracker-react-vite.webp"),
    alt: "Purple drag and drop task tracker with movable task cards",
    title: "Drag & Drop Task Tracker",
    meta: "React · Vite · Drag and drop · Task state management",
  },
  {
    src: assetPath("/functions/javascript-calculator.webp"),
    alt: "JavaScript calculator with a calculation history panel",
    title: "JavaScript Calculator",
    meta: "JavaScript · Calculation history · Responsive interface",
  },
  {
    src: assetPath("/functions/threejs-sphere.webp"),
    alt: "Interactive Three.js sphere that can be rotated by the user",
    title: "Interactive Three.js Sphere",
    meta: "Three.js · WebGL · Interactive 3D · Pointer controls",
  },
  {
    src: assetPath("/functions/javascript-bmi-calculator.webp"),
    alt: "JavaScript BMI calculator displayed over a fruit background",
    title: "BMI Calculator",
    meta: "JavaScript · Form validation · Dynamic calculation results",
  },
  {
    src: assetPath("/functions/javascript-currency-converter.webp"),
    alt: "JavaScript currency converter with amount and currency selectors",
    title: "JavaScript Currency Converter",
    meta: "JavaScript · Form handling · Input validation · Currency conversion",
  },
  {
    src: assetPath("/functions/react-tic-tac-toe.webp"),
    alt: "React tic-tac-toe game showing the winning line",
    title: "React Tic-Tac-Toe",
    meta: "React · Game state · Winner detection · Interactive interface",
  },
] as const;

const polishItems = [
  { ...galleryItems[0], alt: "Strona główna modułowej platformy portfolio RF", title: "Platforma //RF", meta: "Next.js · React · TypeScript · Tailwind CSS · Modułowe portfolio PL/EN" },
  { ...galleryItems[1], alt: "Przeglądarka filmów z wyszukiwarką i siatką popularnych tytułów", title: "Przeglądarka filmów", meta: "React · Dane filmowe · Wyszukiwanie · Kategorie · Ulubione" },
  { ...galleryItems[2], alt: "Strona produktowa RobyFactory prezentująca projekty druku 3D", title: "Strona RobyFactory", meta: "Responsywna strona produktowa · HTML · CSS · JavaScript · Prezentacja wizualna" },
  { ...galleryItems[3], alt: "Sklep w React z grafiką główną i kafelkami produktów", title: "Sklep w React", meta: "React · React Router · REST API · Netlify · Render" },
  { ...galleryItems[4], alt: "Lista zadań w React z wyszukiwaniem, filtrowaniem i oznaczaniem wykonania", title: "Lista zadań", meta: "React · Filtrowanie zadań · Status wykonania · Komponenty wielokrotnego użytku" },
  { ...galleryItems[5], alt: "Przelicznik walut w React zamieniający funty brytyjskie na inną walutę", title: "Przelicznik walut w React", meta: "React · API walutowe · Walidacja formularza · Aktualne przeliczenia" },
  { ...galleryItems[6], alt: "Fioletowy menedżer zadań z kartami przesuwanymi metodą drag and drop", title: "Menedżer zadań drag & drop", meta: "React · Vite · Drag and drop · Zarządzanie stanem zadań" },
  { ...galleryItems[7], alt: "Kalkulator JavaScript z panelem historii obliczeń", title: "Kalkulator JavaScript", meta: "JavaScript · Historia obliczeń · Responsywny interfejs" },
  { ...galleryItems[8], alt: "Interaktywna kula Three.js obracana przez użytkownika", title: "Interaktywna kula Three.js", meta: "Three.js · WebGL · Interaktywne 3D · Sterowanie wskaźnikiem" },
  { ...galleryItems[9], alt: "Kalkulator BMI JavaScript na tle owoców", title: "Kalkulator BMI", meta: "JavaScript · Walidacja formularza · Dynamiczne wyniki obliczeń" },
  { ...galleryItems[10], alt: "Przelicznik walut JavaScript z kwotą i wyborem walut", title: "Przelicznik walut JavaScript", meta: "JavaScript · Obsługa formularza · Walidacja danych · Przeliczanie walut" },
  { ...galleryItems[11], alt: "Gra w kółko i krzyżyk w React pokazująca zwycięską linię", title: "Kółko i krzyżyk w React", meta: "React · Stan gry · Wykrywanie zwycięzcy · Interaktywny interfejs" },
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
      aria-label={pl ? "Wybrane projekty RobyFunctions" : "Selected RobyFunctions projects"}
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
                {pl ? "Kliknij, aby otworzyć pełny zrzut" : "Click to open the full screenshot"}
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
