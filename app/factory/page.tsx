import type { Metadata } from "next";
import { FactoryPage } from "@/features/factory/factory-page";

export const metadata: Metadata = {
  title: "RobyFactory — 3D Printing & CAD",
  description:
    "Custom 3D printing, CAD design, reverse engineering and prototyping by Robert Fydrych.",
};

export default function Page() {
  return <FactoryPage />;
}
