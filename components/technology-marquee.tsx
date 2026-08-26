"use client";

import { useState } from "react";
import type { Language } from "@/lib/i18n";

type Technology = {
  key: string;
  name: string;
  icon: "html" | "css" | "js" | "ts" | "react" | "next" | "node" | "tailwind" | "git" | "ai";
  description: Record<Language, string>;
};

const technologies: readonly Technology[] = [
  {
    key: "html",
    name: "HTML5",
    icon: "html",
    description: {
      en: "The semantic foundation of every interface, structured for accessibility, search engines and long-term maintainability.",
      pl: "Semantyczna podstawa każdego interfejsu, tworzona z myślą o dostępności, wyszukiwarkach i łatwym rozwoju projektu.",
    },
  },
  {
    key: "css",
    name: "CSS3",
    icon: "css",
    description: {
      en: "Responsive layouts, polished interactions and visual systems that stay consistent across screen sizes.",
      pl: "Responsywne układy, dopracowane interakcje i spójne systemy wizualne działające na każdym rozmiarze ekranu.",
    },
  },
  {
    key: "javascript",
    name: "JavaScript",
    icon: "js",
    description: {
      en: "The language behind interactive web experiences, browser logic and practical workflow automation.",
      pl: "Język odpowiadający za interaktywne strony, logikę w przeglądarce i praktyczne automatyzacje pracy.",
    },
  },
  {
    key: "typescript",
    name: "TypeScript",
    icon: "ts",
    description: {
      en: "Type-safe JavaScript that makes larger applications easier to understand, refactor and maintain.",
      pl: "JavaScript z kontrolą typów, dzięki której większe aplikacje łatwiej rozwijać, zmieniać i utrzymywać.",
    },
  },
  {
    key: "react",
    name: "React",
    icon: "react",
    description: {
      en: "Component-based interfaces built from reusable pieces, predictable state and focused user interactions.",
      pl: "Interfejsy budowane z wielokrotnego użytku komponentów, przewidywalnego stanu i przemyślanych interakcji.",
    },
  },
  {
    key: "nextjs",
    name: "Next.js",
    icon: "next",
    description: {
      en: "A production React framework for fast websites, server rendering, routing and full-stack features.",
      pl: "Produkcyjny framework React do szybkich stron, renderowania serwerowego, routingu i funkcji full-stack.",
    },
  },
  {
    key: "nodejs",
    name: "Node.js",
    icon: "node",
    description: {
      en: "JavaScript on the server for APIs, integrations, tooling and automation outside the browser.",
      pl: "JavaScript po stronie serwera wykorzystywany do API, integracji, narzędzi i automatyzacji poza przeglądarką.",
    },
  },
  {
    key: "tailwind",
    name: "Tailwind CSS",
    icon: "tailwind",
    description: {
      en: "A utility-first styling workflow for building consistent interfaces quickly without losing design control.",
      pl: "Narzędziowe podejście do stylowania, które przyspiesza tworzenie spójnych interfejsów bez utraty kontroli nad designem.",
    },
  },
  {
    key: "git",
    name: "Git",
    icon: "git",
    description: {
      en: "Version control for safe iteration, clear change history and dependable collaboration on code.",
      pl: "Kontrola wersji umożliwiająca bezpieczne zmiany, czytelną historię projektu i sprawną współpracę nad kodem.",
    },
  },
  {
    key: "ai",
    name: "AI tools",
    icon: "ai",
    description: {
      en: "AI-assisted workflows for research, prototyping, content processing and useful digital automation.",
      pl: "Procesy wspierane przez AI do researchu, prototypowania, przetwarzania treści i użytecznych automatyzacji.",
    },
  },
];

function TechnologyIcon({ icon }: { icon: Technology["icon"] }) {
  if (icon === "react") {
    return (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
        <circle cx="32" cy="32" r="4.2" fill="currentColor" stroke="none" />
        <ellipse cx="32" cy="32" rx="25" ry="9.5" />
        <ellipse cx="32" cy="32" rx="25" ry="9.5" transform="rotate(60 32 32)" />
        <ellipse cx="32" cy="32" rx="25" ry="9.5" transform="rotate(120 32 32)" />
      </svg>
    );
  }

  if (icon === "tailwind") {
    return (
      <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
        <path d="M17 25c2-8 7-12 15-12 12 0 13 9 19 10 4 .7 7-1.3 9-6-2 8-7 12-15 12-12 0-13-9-19-10-4-.7-7 1.3-9 6Zm-13 16c2-8 7-12 15-12 12 0 13 9 19 10 4 .7 7-1.3 9-6-2 8-7 12-15 12-12 0-13-9-19-10-4-.7-7 1.3-9 6Z" />
      </svg>
    );
  }

  if (icon === "git") {
    return (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
        <path d="m32 6 26 26-26 26L6 32 32 6Z" />
        <path d="m23 23 18 18M23 23v18" />
        <circle cx="23" cy="23" r="3.5" fill="currentColor" stroke="none" />
        <circle cx="23" cy="41" r="3.5" fill="currentColor" stroke="none" />
        <circle cx="41" cy="41" r="3.5" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (icon === "ai") {
    return (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
        <circle cx="32" cy="32" r="8" />
        <circle cx="13" cy="18" r="4" />
        <circle cx="51" cy="18" r="4" />
        <circle cx="13" cy="46" r="4" />
        <circle cx="51" cy="46" r="4" />
        <path d="m17 20 9 7m12 0 9-7M17 44l9-7m12 0 9 7M32 24V9m0 46V40" />
      </svg>
    );
  }

  const labels: Record<Exclude<Technology["icon"], "react" | "tailwind" | "git" | "ai">, string> = {
    html: "5",
    css: "3",
    js: "JS",
    ts: "TS",
    next: "N",
    node: "NODE",
  };

  if (icon === "html" || icon === "css") {
    return (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <path d="M10 7h44l-4 44-18 6-18-6-4-44Z" />
        <path d="M20 20h25l-1 10H23l1 10 8 3 8-3 .5-5" />
        <text x="32" y="18" textAnchor="middle" fill="currentColor" stroke="none">{labels[icon]}</text>
      </svg>
    );
  }

  if (icon === "node") {
    return (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <path d="m32 5 24 14v27L32 59 8 46V19L32 5Z" />
        <text x="32" y="36" textAnchor="middle" fill="currentColor" stroke="none">{labels[icon]}</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      {icon === "next" ? <circle cx="32" cy="32" r="26" /> : <rect x="7" y="7" width="50" height="50" rx="3" />}
      <text x="32" y="39" textAnchor="middle" fill="currentColor" stroke="none">{labels[icon]}</text>
    </svg>
  );
}

export function TechnologyMarquee({ language = "en" }: { language?: Language }) {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const activeTechnology = technologies.find((technology) => technology.key === activeKey);
  const pl = language === "pl";

  return (
    <div
      className={`technology-marquee${activeTechnology ? " is-paused" : ""}`}
      onMouseLeave={() => setActiveKey(null)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setActiveKey(null);
        }
      }}
    >
      <div className="technology-viewport">
        <div className="technology-track">
          {[...technologies, ...technologies].map((technology, index) => (
            <button
              className={`technology-item${activeKey === technology.key ? " is-active" : ""}`}
              type="button"
              key={`${technology.key}-${index}`}
              aria-pressed={activeKey === technology.key}
              aria-hidden={index >= technologies.length ? true : undefined}
              aria-label={`${technology.name}: ${technology.description[language]}`}
              tabIndex={index >= technologies.length ? -1 : 0}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") setActiveKey(technology.key);
              }}
              onPointerDown={(event) => {
                if (event.pointerType === "mouse") {
                  event.preventDefault();
                  return;
                }
                setActiveKey((current) => current === technology.key ? null : technology.key);
              }}
              onFocus={() => setActiveKey(technology.key)}
              onClick={(event) => {
                if (event.detail === 0) {
                  setActiveKey((current) => current === technology.key ? null : technology.key);
                }
              }}
            >
              <span className="technology-icon">
                <TechnologyIcon icon={technology.icon} />
              </span>
              <span>{technology.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="technology-description" aria-live="polite">
        <span className="technology-description-index">
          {activeTechnology ? `// ${activeTechnology.name}` : "// STACK"}
        </span>
        <p>
          {activeTechnology
            ? activeTechnology.description[language]
            : pl
              ? "Najedź na technologię lub dotknij jej, aby zatrzymać pasek i poznać jej zastosowanie."
              : "Hover over or tap a technology to pause the track and see how it is used."}
        </p>
      </div>
    </div>
  );
}
