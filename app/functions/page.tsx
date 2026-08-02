import type { Metadata } from "next";
import { FunctionsPage } from "@/features/functions/functions-page";

export const metadata: Metadata = {
  title: "RobyFunctions — Web, AI & Digital Tools",
  description:
    "Modern websites, frontend development, AI tools and digital experiments by Robert Fydrych.",
  alternates: { canonical: "/functions", languages: { en: "/functions", pl: "/pl/functions" } },
};

export default function Page() {
  return <FunctionsPage />;
}
