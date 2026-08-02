export type Language = "en" | "pl";

export const homePath = (language: Language) =>
  language === "pl" ? "/pl" : "/";

export const localizedPath = (language: Language, path = "") => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return language === "pl" ? `/pl${normalized === "/" ? "" : normalized}` : normalized;
};

export const ui = {
  en: {
    directions: "Directions",
    work: "Work",
    contact: "Contact",
    startProject: "Start a project",
    primaryNavigation: "Primary navigation",
    homeLabel: "//RF home",
    themeToggle: "Toggle day or night mode",
    skip: "Skip to content",
    footerLine: "Design. Build. Create.",
    explore: "Explore",
  },
  pl: {
    directions: "Kierunki",
    work: "Realizacje",
    contact: "Kontakt",
    startProject: "Rozpocznij projekt",
    primaryNavigation: "Główna nawigacja",
    homeLabel: "Strona główna //RF",
    themeToggle: "Przełącz tryb dzienny lub nocny",
    skip: "Przejdź do treści",
    footerLine: "Projektuję. Buduję. Tworzę.",
    explore: "Poznaj",
  },
} as const;
