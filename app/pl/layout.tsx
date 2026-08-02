"use client";

import { useEffect, type ReactNode } from "react";

export default function PolishLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = "pl";
    const skipLink = document.querySelector<HTMLAnchorElement>(".skip-link");
    if (skipLink) skipLink.textContent = "Przejdź do treści";
    return () => {
      document.documentElement.lang = "en";
      if (skipLink) skipLink.textContent = "Skip to content";
    };
  }, []);

  return children;
}
