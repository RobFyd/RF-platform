"use client";

import Image from "next/image";
import { assetPath } from "@/lib/site-path";
import { type Language, ui } from "@/lib/i18n";

export function SiteFooter({ language = "en" }: { language?: Language }) {
  const copy = ui[language];
  const backToTopLabel = language === "pl" ? "Wróć na górę strony" : "Back to top";

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="site-footer">
      <button
        className="brand footer-back-to-top"
        type="button"
        onClick={scrollToTop}
        aria-label={backToTopLabel}
        title={backToTopLabel}
      >
        <Image
          src={assetPath("/rf-main.svg")}
          alt=""
          width={1254}
          height={1254}
        />
      </button>
      <p>Robert Fydrych · Worcester, UK</p>
      <p>{copy.footerLine} © {new Date().getFullYear()}</p>
    </footer>
  );
}
