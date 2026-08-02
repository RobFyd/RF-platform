import type { Metadata } from "next";
import { FactoryPage } from "@/features/factory/factory-page";

export const metadata: Metadata = {
  title: "RobyFactory — druk 3D i CAD",
  description: "Druk 3D na zamówienie, projektowanie CAD, inżynieria odwrotna i prototypowanie.",
  alternates: { canonical: "/pl/factory", languages: { en: "/factory", pl: "/pl/factory" } },
};

export default function PolishFactoryPage() { return <FactoryPage language="pl" />; }
