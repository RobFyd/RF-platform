import type { ReactNode } from "react";

type InteractiveHeroProps = {
  children: ReactNode;
};

export function InteractiveHero({ children }: InteractiveHeroProps) {
  return (
    <section className="hero-shell" id="top" aria-labelledby="hero-title">
      {children}
    </section>
  );
}
