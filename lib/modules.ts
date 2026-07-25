export type ModuleKey = "factory" | "fusion" | "functions";

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
};

export const modules: readonly ModuleConfig[] = [
  {
    key: "factory",
    index: "01",
    name: "RobyFactory",
    shortName: "Factory",
    href: "/factory",
    logo: "/robyfactory.svg",
    accent: "#ff7043",
    accentRgb: "255 112 67",
    kicker: "3D printing · CAD · Prototyping",
    description:
      "Ideas turned into accurate, useful physical parts — from one-off prints to refined prototypes.",
    longDescription:
      "Custom 3D printing, CAD design and reverse engineering for functional parts, creative projects and practical problems.",
    services: [
      "Custom 3D Printing",
      "CAD Design",
      "Reverse Engineering",
      "Prototyping",
      "Cosplay Parts",
      "Functional Replacement Parts",
    ],
    process: ["Define the need", "Design and validate", "Print and refine"],
  },
  {
    key: "fusion",
    index: "02",
    name: "RobyFusion",
    shortName: "Fusion",
    href: "/fusion",
    logo: "/robyfusion.svg",
    accent: "#4aa8ff",
    accentRgb: "74 168 255",
    kicker: "TIG welding · Fabrication · Metalwork",
    description:
      "Precision TIG work in stainless steel and aluminium, built from clear technical requirements.",
    longDescription:
      "Practical fabrication and TIG welding backed by production experience, technical drawings and careful finishing.",
    services: [
      "TIG Welding",
      "Stainless Steel",
      "Aluminium",
      "Fabrication",
      "Technical Drawings",
      "Production and Repair Work",
    ],
    process: ["Review requirements", "Prepare and fabricate", "Inspect and finish"],
  },
  {
    key: "functions",
    index: "03",
    name: "RobyFunctions",
    shortName: "Functions",
    href: "/functions",
    logo: "/robyfunctions.svg",
    accent: "#72f1b8",
    accentRgb: "114 241 184",
    kicker: "Web · AI · Digital tools",
    description:
      "Focused websites, interfaces and practical AI tools designed to solve real workflow problems.",
    longDescription:
      "Modern web development, automation and digital experimentation combining clear design with useful technology.",
    services: [
      "Web Development",
      "Frontend Development",
      "AI Tools",
      "Automations",
      "Digital Experiments",
      "Portfolio Projects",
    ],
    process: ["Understand the goal", "Prototype the system", "Build and improve"],
  },
] as const;

export function getModule(key: ModuleKey) {
  const moduleConfig = modules.find((item) => item.key === key);

  if (!moduleConfig) {
    throw new Error(`Unknown module: ${key}`);
  }

  return moduleConfig;
}
