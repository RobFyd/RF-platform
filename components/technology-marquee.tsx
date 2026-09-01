"use client";

import { useState, type CSSProperties } from "react";
import type { Language } from "@/lib/i18n";
import { assetPath } from "@/lib/site-path";

type Technology = {
  key: string;
  name: string;
  iconPath: string;
  description: Record<Language, string>;
};

const functionsTechnologies: readonly Technology[] = [
  {
    key: "html",
    name: "HTML5",
    iconPath: assetPath("/technologies/html5.svg"),
    description: {
      en: "The semantic foundation of every interface, structured for accessibility, search engines and long-term maintainability.",
      pl: "Semantyczna podstawa każdego interfejsu, tworzona z myślą o dostępności, wyszukiwarkach i łatwym rozwoju projektu.",
    },
  },
  {
    key: "css",
    name: "CSS3",
    iconPath: assetPath("/technologies/css.svg"),
    description: {
      en: "Responsive layouts, polished interactions and visual systems that stay consistent across screen sizes.",
      pl: "Responsywne układy, dopracowane interakcje i spójne systemy wizualne działające na każdym rozmiarze ekranu.",
    },
  },
  {
    key: "javascript",
    name: "JavaScript",
    iconPath: assetPath("/technologies/javascript.svg"),
    description: {
      en: "The language behind interactive web experiences, browser logic and practical workflow automation.",
      pl: "Język odpowiadający za interaktywne strony, logikę w przeglądarce i praktyczne automatyzacje pracy.",
    },
  },
  {
    key: "typescript",
    name: "TypeScript",
    iconPath: assetPath("/technologies/typescript.svg"),
    description: {
      en: "Type-safe JavaScript that makes larger applications easier to understand, refactor and maintain.",
      pl: "JavaScript z kontrolą typów, dzięki której większe aplikacje łatwiej rozwijać, zmieniać i utrzymywać.",
    },
  },
  {
    key: "react",
    name: "React",
    iconPath: assetPath("/technologies/react.svg"),
    description: {
      en: "Component-based interfaces built from reusable pieces, predictable state and focused user interactions.",
      pl: "Interfejsy budowane z wielokrotnego użytku komponentów, przewidywalnego stanu i przemyślanych interakcji.",
    },
  },
  {
    key: "nextjs",
    name: "Next.js",
    iconPath: assetPath("/technologies/nextjs.svg"),
    description: {
      en: "A production React framework for fast websites, server rendering, routing and full-stack features.",
      pl: "Produkcyjny framework React do szybkich stron, renderowania serwerowego, routingu i funkcji full-stack.",
    },
  },
  {
    key: "vite",
    name: "Vite",
    iconPath: assetPath("/technologies/vite.svg"),
    description: {
      en: "A fast development server and build tool that keeps modern frontend projects lightweight and responsive while coding.",
      pl: "Szybki serwer deweloperski i narzędzie budujące, które usprawnia pracę nad nowoczesnymi projektami frontendowymi.",
    },
  },
  {
    key: "react-router",
    name: "React Router",
    iconPath: assetPath("/technologies/reactrouter.svg"),
    description: {
      en: "Client-side routing for multi-view React applications with clear navigation and URL-driven interfaces.",
      pl: "Routing po stronie klienta dla wielowidokowych aplikacji React z czytelną nawigacją opartą na adresach URL.",
    },
  },
  {
    key: "redux",
    name: "Redux",
    iconPath: assetPath("/technologies/redux.svg"),
    description: {
      en: "Predictable shared state management for applications where data and interactions span multiple components.",
      pl: "Przewidywalne zarządzanie wspólnym stanem aplikacji, gdy dane i interakcje obejmują wiele komponentów.",
    },
  },
  {
    key: "nodejs",
    name: "Node.js",
    iconPath: assetPath("/technologies/nodejs.svg"),
    description: {
      en: "JavaScript on the server for APIs, integrations, tooling and automation outside the browser.",
      pl: "JavaScript po stronie serwera wykorzystywany do API, integracji, narzędzi i automatyzacji poza przeglądarką.",
    },
  },
  {
    key: "tailwind",
    name: "Tailwind CSS",
    iconPath: assetPath("/technologies/tailwindcss.svg"),
    description: {
      en: "A utility-first styling workflow for building consistent interfaces quickly without losing design control.",
      pl: "Narzędziowe podejście do stylowania, które przyspiesza tworzenie spójnych interfejsów bez utraty kontroli nad designem.",
    },
  },
  {
    key: "git",
    name: "Git",
    iconPath: assetPath("/technologies/git.svg"),
    description: {
      en: "Version control for safe iteration, clear change history and dependable collaboration on code.",
      pl: "Kontrola wersji umożliwiająca bezpieczne zmiany, czytelną historię projektu i sprawną współpracę nad kodem.",
    },
  },
  {
    key: "github",
    name: "GitHub",
    iconPath: assetPath("/technologies/github.svg"),
    description: {
      en: "Repository hosting, pull requests and project workflows that turn versioned code into collaborative development.",
      pl: "Repozytoria, pull requesty i procesy projektowe, które zamieniają wersjonowany kod w uporządkowaną współpracę.",
    },
  },
  {
    key: "figma",
    name: "Figma",
    iconPath: assetPath("/technologies/figma.svg"),
    description: {
      en: "Interface design and prototyping used to shape layouts, visual systems and user flows before implementation.",
      pl: "Projektowanie i prototypowanie interfejsów, układów, systemów wizualnych i ścieżek użytkownika przed wdrożeniem.",
    },
  },
  {
    key: "ai",
    name: "OpenAI",
    iconPath: assetPath("/technologies/openai.svg"),
    description: {
      en: "AI-assisted workflows for research, prototyping, content processing and useful digital automation.",
      pl: "Procesy wspierane przez AI do researchu, prototypowania, przetwarzania treści i użytecznych automatyzacji.",
    },
  },
];

const factoryTechnologies: readonly Technology[] = [
  {
    key: "fusion-360",
    name: "Fusion 360",
    iconPath: assetPath("/technologies/fusion360.svg"),
    description: {
      en: "Parametric CAD for designing functional parts, assemblies and production-ready models for 3D printing.",
      pl: "Parametryczny CAD do projektowania funkcjonalnych części, złożeń i modeli przygotowanych do druku 3D.",
    },
  },
  {
    key: "solidworks",
    name: "SolidWorks",
    iconPath: assetPath("/technologies/solidworks.svg"),
    description: {
      en: "Engineering CAD used to develop precise parts, assemblies and technical solutions with real-world constraints.",
      pl: "Inżynierski CAD do tworzenia precyzyjnych części, złożeń i rozwiązań uwzględniających rzeczywiste ograniczenia.",
    },
  },
  {
    key: "blender",
    name: "Blender",
    iconPath: assetPath("/technologies/blender.svg"),
    description: {
      en: "Free-form 3D modelling, sculpting and rendering for visual concepts, organic shapes and presentation assets.",
      pl: "Swobodne modelowanie 3D, rzeźbienie i rendering do koncepcji wizualnych, organicznych form i materiałów prezentacyjnych.",
    },
  },
  {
    key: "openscad",
    name: "OpenSCAD",
    iconPath: assetPath("/technologies/openscad.svg"),
    description: {
      en: "Code-driven, parametric modelling for repeatable components whose dimensions and variants can be changed quickly.",
      pl: "Parametryczne modelowanie oparte na kodzie do powtarzalnych elementów, których wymiary i warianty można szybko zmieniać.",
    },
  },
  {
    key: "inkscape",
    name: "Inkscape",
    iconPath: assetPath("/technologies/inkscape.svg"),
    description: {
      en: "Vector graphics for logos, labels, outlines and clean source files used in product and print workflows.",
      pl: "Grafika wektorowa do logo, etykiet, obrysów i czystych plików źródłowych wykorzystywanych przy produktach i druku.",
    },
  },
  {
    key: "orcaslicer",
    name: "OrcaSlicer",
    iconPath: assetPath("/technologies/orcaslicer.svg"),
    description: {
      en: "Slicing, calibration and print-profile control for turning finished 3D models into reliable physical prints.",
      pl: "Cięcie modeli, kalibracja i kontrola profili druku, które zamieniają gotowy model 3D w niezawodny wydruk.",
    },
  },
  {
    key: "tinkercad",
    name: "Tinkercad",
    iconPath: assetPath("/technologies/tinkercad.svg"),
    description: {
      en: "Fast browser-based modelling for simple forms, early prototypes and quick modifications before printing.",
      pl: "Szybkie modelowanie w przeglądarce do prostych form, wczesnych prototypów i sprawnych poprawek przed drukiem.",
    },
  },
  {
    key: "canva",
    name: "Canva",
    iconPath: assetPath("/technologies/canva.svg"),
    description: {
      en: "Efficient preparation of product graphics, social media materials and consistent visual presentations.",
      pl: "Sprawne przygotowanie grafik produktowych, materiałów do social mediów i spójnych prezentacji wizualnych.",
    },
  },
  {
    key: "capcut",
    name: "CapCut",
    iconPath: assetPath("/technologies/capcut.svg"),
    description: {
      en: "Editing short product videos, process footage and social content that shows how an object is made and used.",
      pl: "Montaż krótkich filmów produktowych, ujęć z procesu i treści pokazujących, jak przedmiot powstaje i działa.",
    },
  },
  {
    key: "ai-tools",
    name: "AI",
    iconPath: assetPath("/technologies/ai-tools.svg"),
    description: {
      en: "AI-assisted tools for creating and refining graphics, product concepts and 3D models.",
      pl: "Narzędzia AI wspierające tworzenie i obróbkę grafik, koncepcji produktowych oraz modeli 3D.",
    },
  },
];

const fusionTechnologies: readonly Technology[] = [
  {
    key: "technical-drawing",
    name: "Technical Drawing",
    iconPath: assetPath("/technologies/fusion-technical-drawing.svg"),
    description: {
      en: "Reading engineering drawings, dimensions, tolerances and fabrication details before work begins.",
      pl: "Czytanie rysunków technicznych, wymiarów, tolerancji i szczegółów wykonania przed rozpoczęciem pracy.",
    },
  },
  {
    key: "cad-design",
    name: "CAD Design",
    iconPath: assetPath("/technologies/fusion-cad-design.svg"),
    description: {
      en: "2D and 3D design used to turn requirements into clear, manufacturable components and assemblies.",
      pl: "Projektowanie 2D i 3D, które zamienia założenia w czytelne, możliwe do wykonania części oraz złożenia.",
    },
  },
  {
    key: "tig-welding",
    name: "TIG Welding",
    iconPath: assetPath("/technologies/fusion-tig.svg"),
    description: {
      en: "Precise, controlled welding of stainless steel, aluminium and thin-walled components where finish matters.",
      pl: "Precyzyjne, kontrolowane spawanie stali nierdzewnej, aluminium i cienkościennych elementów wymagających dobrego wykończenia.",
    },
  },
  {
    key: "mig-mag-welding",
    name: "MIG/MAG Welding",
    iconPath: assetPath("/technologies/fusion-mig-mag.svg"),
    description: {
      en: "Efficient wire-feed welding for mild-steel parts, frames and general workshop fabrication.",
      pl: "Wydajne spawanie drutem elementów ze stali konstrukcyjnej, ram i typowych konstrukcji warsztatowych.",
    },
  },
  {
    key: "mma-welding",
    name: "MMA Welding",
    iconPath: assetPath("/technologies/fusion-mma.svg"),
    description: {
      en: "Manual metal arc welding for robust joints, repairs and work where portability and versatility are important.",
      pl: "Ręczne spawanie elektrodą otuloną do solidnych połączeń, napraw i prac wymagających mobilności oraz uniwersalności.",
    },
  },
  {
    key: "plasma-cutting",
    name: "Plasma Cutting",
    iconPath: assetPath("/technologies/fusion-plasma-cutting.svg"),
    description: {
      en: "Fast cutting of sheet and plate to prepare accurate profiles and blanks for further fabrication.",
      pl: "Szybkie cięcie blach i płyt w celu przygotowania dokładnych kształtów oraz półfabrykatów do dalszej obróbki.",
    },
  },
  {
    key: "metal-fabrication",
    name: "Metal Fabrication",
    iconPath: assetPath("/technologies/fusion-metal-fabrication.svg"),
    description: {
      en: "Practical fabrication including cutting, drilling, tapping, bending, forming and preparing parts for assembly.",
      pl: "Praktyczna obróbka obejmująca cięcie, wiercenie, gwintowanie, gięcie, formowanie i przygotowanie części do montażu.",
    },
  },
  {
    key: "fit-up-assembly",
    name: "Fit-up & Assembly",
    iconPath: assetPath("/technologies/fusion-fit-up-assembly.svg"),
    description: {
      en: "Aligning, squaring, tacking and assembling components so the finished structure matches the drawing.",
      pl: "Ustawianie, prostowanie, sczepianie i składanie elementów tak, aby gotowa konstrukcja była zgodna z dokumentacją.",
    },
  },
  {
    key: "finishing-preparation",
    name: "Finishing & Preparation",
    iconPath: assetPath("/technologies/fusion-finishing-preparation.svg"),
    description: {
      en: "Weld preparation, grinding, deburring and polishing used to achieve clean joints and a professional finish.",
      pl: "Przygotowanie spoin, szlifowanie, gratowanie i polerowanie pozwalające uzyskać czyste połączenia oraz profesjonalne wykończenie.",
    },
  },
  {
    key: "welding-quality-control",
    name: "Welding Quality Control",
    iconPath: assetPath("/technologies/fusion-quality-control.svg"),
    description: {
      en: "Dimensional checks, visual weld inspection and verification against drawings and fabrication requirements.",
      pl: "Kontrola wymiarów, wizualna ocena spoin oraz sprawdzanie zgodności z rysunkiem i wymaganiami wykonawczymi.",
    },
  },
];

type TechnologyMarqueeProps = {
  language?: Language;
  moduleKey?: "factory" | "fusion" | "functions";
};

export function TechnologyMarquee({ language = "en", moduleKey = "functions" }: TechnologyMarqueeProps) {
  const technologies = moduleKey === "factory"
    ? factoryTechnologies
    : moduleKey === "fusion"
      ? fusionTechnologies
      : functionsTechnologies;
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const activeTechnology = technologies.find((technology) => technology.key === activeKey);
  const pl = language === "pl";

  return (
    <div
      className={`technology-marquee technology-marquee-${moduleKey}${activeTechnology ? " is-paused" : ""}`}
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
              <span
                className="technology-icon"
                style={{ "--technology-logo": `url(\"${technology.iconPath}\")` } as CSSProperties}
              />
              <span>{technology.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="technology-description" aria-live="polite">
        <span className="technology-description-index">
          {activeTechnology
            ? `// ${activeTechnology.name}`
            : moduleKey === "factory"
              ? "// TOOLKIT"
              : moduleKey === "fusion"
                ? "// WORKSHOP"
                : "// STACK"}
        </span>
        <p>
          {activeTechnology
            ? activeTechnology.description[language]
            : pl
              ? moduleKey === "factory"
                ? "Najedź na narzędzie lub dotknij go, aby zatrzymać pasek i zobaczyć, gdzie wykorzystuję je w procesie twórczym."
                : moduleKey === "fusion"
                  ? "Najedź na proces lub dotknij go, aby zatrzymać pasek i zobaczyć, jak wykorzystuję go w pracy warsztatowej."
                : "Najedź na technologię lub dotknij jej, aby zatrzymać pasek i poznać jej zastosowanie."
              : moduleKey === "factory"
                ? "Hover over or tap a tool to pause the track and see where it fits into the creative process."
                : moduleKey === "fusion"
                  ? "Hover over or tap a process to pause the track and see how it is used in workshop practice."
                : "Hover over or tap a technology to pause the track and see how it is used."}
        </p>
      </div>
    </div>
  );
}
