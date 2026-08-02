import type { Metadata } from "next";
import { FunctionsPage } from "@/features/functions/functions-page";

export const metadata: Metadata = {
  title: "RobyFunctions — web, AI i narzędzia cyfrowe",
  description: "Nowoczesne strony internetowe, automatyzacje i praktyczne narzędzia cyfrowe.",
  alternates: { canonical: "/pl/functions", languages: { en: "/functions", pl: "/pl/functions" } },
};

export default function PolishFunctionsPage() { return <FunctionsPage language="pl" />; }
