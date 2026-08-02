import type { Metadata } from "next";
import { FusionPage } from "@/features/fusion/fusion-page";

export const metadata: Metadata = {
  title: "RobyFusion — spawanie TIG i produkcja",
  description: "Spawanie TIG stali nierdzewnej i aluminium oraz praktyczna produkcja konstrukcji.",
  alternates: { canonical: "/pl/fusion", languages: { en: "/fusion", pl: "/pl/fusion" } },
};

export default function PolishFusionPage() { return <FusionPage language="pl" />; }
