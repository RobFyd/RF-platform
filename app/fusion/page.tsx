import type { Metadata } from "next";
import { FusionPage } from "@/features/fusion/fusion-page";

export const metadata: Metadata = {
  title: "RobyFusion — TIG Welding & Fabrication",
  description:
    "TIG welding, stainless steel, aluminium and practical fabrication by Robert Fydrych.",
};

export default function Page() {
  return <FusionPage />;
}
