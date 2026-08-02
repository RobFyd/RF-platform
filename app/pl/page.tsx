import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "//RF — Robert Fydrych",
  description: "Jedna platforma łącząca druk 3D i CAD, produkcję TIG oraz rozwiązania cyfrowe.",
  alternates: { canonical: "/pl", languages: { en: "/", pl: "/pl" } },
};

export default function PolishHome() {
  return <HomePage language="pl" />;
}
