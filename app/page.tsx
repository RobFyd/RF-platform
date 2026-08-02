import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "//RF — Robert Fydrych",
  description: "One platform connecting 3D printing and CAD, TIG fabrication, and digital development.",
  alternates: { canonical: "/", languages: { en: "/", pl: "/pl" } },
};

export default function Home() {
  return <HomePage language="en" />;
}
