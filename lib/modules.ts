import { assetPath } from "./site-path";
import type { Language } from "./i18n";

export type ModuleKey = "factory" | "fusion" | "functions";

export type Credential = {
  title: string;
  issuer: string;
  issued: string;
  href: string;
  preview: string;
};

export type ModuleConfig = {
  key: ModuleKey;
  index: string;
  name: string;
  shortName: string;
  href: `/${ModuleKey}`;
  logo: string;
  accent: string;
  accentRgb: string;
  kicker: string;
  description: string;
  longDescription: string;
  services: readonly string[];
  process: readonly string[];
  credentialAreas: readonly string[];
  credentials?: readonly Credential[];
};

const functionsCredentials: readonly Credential[] = [
  {
    title: "CS50x",
    issuer: "CS50 · Harvard University",
    issued: "2024",
    href: assetPath("/certificates/cs50x-robert-fydrych.pdf"),
    preview: assetPath("/certificates/cs50x-robert-fydrych.webp"),
  },
  {
    title: "Frontend Developer Course",
    issuer: "YouCode",
    issued: "2023",
    href: assetPath("/certificates/youcode-frontend-robert-fydrych.pdf"),
    preview: assetPath("/certificates/youcode-frontend-robert-fydrych.webp"),
  },
  {
    title: "5 Day Coding Challenge",
    issuer: "Code Institute",
    issued: "2024",
    href: assetPath("/certificates/code-institute-challenge-robert-fydrych.pdf"),
    preview: assetPath("/certificates/code-institute-challenge-robert-fydrych.webp"),
  },
  {
    title: "Modern and Efficient Web Applications",
    issuer: "Web Amigos",
    issued: "2024",
    href: assetPath("/certificates/web-amigos-mewa-robert-fydrych.pdf"),
    preview: assetPath("/certificates/web-amigos-mewa-robert-fydrych.webp"),
  },
  {
    title: "Zrozumieć React",
    issuer: "Filip Mamcarczyk · Kacper Sokołowski",
    issued: "2026",
    href: assetPath("/certificates/zrozumiec-react-robert-fydrych.pdf"),
    preview: assetPath("/certificates/zrozumiec-react-robert-fydrych.webp"),
  },
];

const shared = {
  factory: {
    key: "factory",
    index: "01",
    name: "RobyFactory",
    href: "/factory",
    logo: assetPath("/robyfactory.svg"),
    accent: "#ff7043",
    accentRgb: "255 112 67",
  },
  fusion: {
    key: "fusion",
    index: "02",
    name: "RobyFusion",
    href: "/fusion",
    logo: assetPath("/robyfusion.svg"),
    accent: "#4aa8ff",
    accentRgb: "74 168 255",
  },
  functions: {
    key: "functions",
    index: "03",
    name: "RobyFunctions",
    href: "/functions",
    logo: assetPath("/robyfunctions.svg"),
    accent: "#72f1b8",
    accentRgb: "114 241 184",
  },
} as const;

export const modules: Record<Language, readonly ModuleConfig[]> = {
  en: [
    {
      ...shared.factory,
      shortName: "Factory",
      kicker: "3D printing · CAD · Prototyping",
      description: "Ideas turned into accurate, useful physical parts — from one-off prints to refined prototypes.",
      longDescription: "Custom 3D printing, CAD design and reverse engineering for functional parts, creative projects and practical problems.",
      services: ["Custom 3D Printing", "CAD Design", "Reverse Engineering", "Prototyping", "Cosplay Parts", "Functional Replacement Parts"],
      process: ["Define the need", "Design and validate", "Print and refine"],
      credentialAreas: ["CAD & design", "Additive manufacturing", "Engineering & production"],
    },
    {
      ...shared.fusion,
      shortName: "Fusion",
      kicker: "TIG welding · Fabrication · Metalwork",
      description: "Precision TIG work in stainless steel and aluminium, built from clear technical requirements.",
      longDescription: "Practical fabrication and TIG welding backed by production experience, technical drawings and careful finishing.",
      services: ["TIG Welding", "Stainless Steel", "Aluminium", "Fabrication", "Technical Drawings", "Production and Repair Work"],
      process: ["Review requirements", "Prepare and fabricate", "Inspect and finish"],
      credentialAreas: ["Welding qualifications", "Fabrication & inspection", "Safety & compliance"],
    },
    {
      ...shared.functions,
      shortName: "Functions",
      kicker: "Web · AI · Digital tools",
      description: "Focused websites, interfaces and practical AI tools designed to solve real workflow problems.",
      longDescription: "Modern web development, automation and digital experimentation combining clear design with useful technology.",
      services: ["Web Development", "Frontend Development", "AI Tools", "Automations", "Digital Experiments", "Portfolio Projects"],
      process: ["Understand the goal", "Prototype the system", "Build and improve"],
      credentialAreas: ["Web development", "Frontend & UX", "AI & automation"],
      credentials: functionsCredentials,
    },
  ],
  pl: [
    {
      ...shared.factory,
      shortName: "Factory",
      kicker: "Druk 3D · CAD · Prototypowanie",
      description: "Pomysły zamieniane w precyzyjne i użyteczne części — od pojedynczych wydruków po dopracowane prototypy.",
      longDescription: "Druk 3D na zamówienie, projektowanie CAD i inżynieria odwrotna dla części funkcjonalnych, projektów kreatywnych i praktycznych problemów.",
      services: ["Druk 3D na zamówienie", "Projektowanie CAD", "Inżynieria odwrotna", "Prototypowanie", "Elementy cosplay", "Funkcjonalne części zamienne"],
      process: ["Określenie potrzeby", "Projekt i weryfikacja", "Druk i dopracowanie"],
      credentialAreas: ["CAD i projektowanie", "Technologie przyrostowe", "Inżynieria i produkcja"],
    },
    {
      ...shared.fusion,
      shortName: "Fusion",
      kicker: "Spawanie TIG · Produkcja · Konstrukcje metalowe",
      description: "Precyzyjne spawanie TIG stali nierdzewnej i aluminium zgodnie z jasnymi wymaganiami technicznymi.",
      longDescription: "Praktyczna produkcja i spawanie TIG poparte doświadczeniem, dokumentacją techniczną i dbałością o wykończenie.",
      services: ["Spawanie TIG", "Stal nierdzewna", "Aluminium", "Produkcja konstrukcji", "Rysunki techniczne", "Produkcja i naprawy"],
      process: ["Analiza wymagań", "Przygotowanie i wykonanie", "Kontrola i wykończenie"],
      credentialAreas: ["Kwalifikacje spawalnicze", "Produkcja i kontrola", "Bezpieczeństwo i zgodność"],
    },
    {
      ...shared.functions,
      shortName: "Functions",
      kicker: "Web · AI · Narzędzia cyfrowe",
      description: "Skoncentrowane strony, interfejsy i praktyczne narzędzia AI rozwiązujące rzeczywiste problemy w pracy.",
      longDescription: "Nowoczesne aplikacje webowe, automatyzacje i cyfrowe eksperymenty łączące przejrzysty design z użyteczną technologią.",
      services: ["Tworzenie stron internetowych", "Frontend", "Narzędzia AI", "Automatyzacje", "Eksperymenty cyfrowe", "Projekty portfolio"],
      process: ["Zrozumienie celu", "Prototyp systemu", "Budowa i rozwój"],
      credentialAreas: ["Tworzenie stron", "Frontend i UX", "AI i automatyzacja"],
      credentials: functionsCredentials,
    },
  ],
};

export function getModule(key: ModuleKey, language: Language = "en") {
  const moduleConfig = modules[language].find((item) => item.key === key);
  if (!moduleConfig) throw new Error(`Unknown module: ${key}`);
  return moduleConfig;
}
