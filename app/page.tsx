import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/site-path";
import { InteractiveHero } from "@/components/interactive-hero";
import { ModulePanels } from "@/components/module-panels";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Language } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "//RF — Robert Fydrych",
  description:
    "One platform connecting 3D printing and CAD, TIG fabrication, and digital development.",
  alternates: { canonical: "/", languages: { en: "/", pl: "/pl" } },
};

const disciplines = {
  en: [
  {
    index: "01",
    title: "Design",
    text: "Ideas shaped through CAD, technical thinking and purposeful digital design.",
  },
  {
    index: "02",
    title: "Build",
    text: "Physical parts made through additive manufacturing and precise TIG fabrication.",
  },
  {
    index: "03",
    title: "Create",
    text: "Web experiences, AI tools and practical systems that connect the whole process.",
  },
  ],
  pl: [
    { index: "01", title: "Projekt", text: "Pomysły rozwijane przez CAD, myślenie techniczne i świadome projektowanie cyfrowe." },
    { index: "02", title: "Wykonanie", text: "Fizyczne części tworzone dzięki drukowi 3D i precyzyjnej produkcji TIG." },
    { index: "03", title: "Rozwój", text: "Strony, narzędzia AI i praktyczne systemy łączące cały proces." },
  ],
} as const;

export default function Home() {
  return <HomePage language="en" />;
}

export function HomePage({ language }: { language: Language }) {
  const pl = language === "pl";
  return (
    <>
      <SiteHeader language={language} />
      <main>
        <InteractiveHero>
          <div className="technical-grid" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow">
              <span>Robert Fydrych //RF</span>
              <span className="eyebrow-line" />
              <span>{pl ? "Projektant · Twórca · Programista" : "Designer · Maker · Developer"}</span>
            </p>
            <h1 id="hero-title">
              <span className="hero-mark">
                <Image
                  src={assetPath("/rf-main.svg")}
                  alt="//RF"
                  width={1254}
                  height={1254}
                  priority
                />
              </span>
              <span className="hero-statement">{pl ? "Jedna nazwa." : "One name."}</span>
              <span className="hero-statement hero-statement-muted">
                {pl ? "Trzy kierunki." : "Three directions."}
              </span>
            </h1>
            <div className="hero-bottom">
              <p>
                {pl
                  ? "Od cyfrowej koncepcji do fizycznego rezultatu — jedna platforma łącząca projektowanie, produkcję i technologię."
                  : "From digital concept to physical result — one platform for design, fabrication and technology."}
              </p>
              <Link className="scroll-cue" href="#directions">
                <span>{pl ? "Poznaj kierunki" : "Explore directions"}</span>
                <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
          <div className="corner-mark corner-mark-tl" aria-hidden="true" />
          <div className="corner-mark corner-mark-br" aria-hidden="true" />
        </InteractiveHero>

        <section
          className="directions-section"
          id="directions"
          aria-labelledby="directions-title"
        >
          <div className="section-heading">
            <p className="section-index">[ 01 — {pl ? "Kierunki" : "Directions"} ]</p>
            <h2 id="directions-title">{pl ? "Wybierz właściwy warsztat." : "Choose the right workshop."}</h2>
            <p>
              {pl
                ? "Trzy wyspecjalizowane dziedziny. Każda działa niezależnie, ale wszystkie łączy praktyczne podejście do rozwiązywania problemów."
                : "Three focused disciplines. Each one stands on its own and shares the same practical, problem-solving mindset."}
            </p>
          </div>
          <ModulePanels language={language} />
        </section>

        <section className="intersection-section" aria-labelledby="method-title">
          <div className="intersection-intro">
            <p className="section-index">[ 02 — {pl ? "Połączone kompetencje" : "Connected practice"} ]</p>
            <h2 id="method-title">
              {pl ? "Cyfrowa precyzja." : "Digital precision."}
              <br />
              {pl ? "Rzemiosło w praktyce." : "Physical craft."}
            </h2>
            <p>
              {pl
                ? "Moja praca łączy inżynierię, wykonanie i oprogramowanie. To mniej przekazywania zadań, jaśniejsze decyzje i rozwiązania projektowane z myślą o całym procesie."
                : "My work sits where engineering, making and software overlap. That means fewer hand-offs, clearer decisions and solutions designed with the full process in mind."}
            </p>
          </div>
          <ol className="discipline-list">
            {disciplines[language].map((discipline) => (
              <li key={discipline.index}>
                <span>{discipline.index}</span>
                <div>
                  <h3>{discipline.title}</h3>
                  <p>{discipline.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading section-heading-row">
            <div>
              <p className="section-index">[ 03 — {pl ? "Wybrane realizacje" : "Selected work"} ]</p>
              <h2 id="work-title">{pl ? "Zbudowane, sprawdzone, dopracowane." : "Built, tested, refined."}</h2>
            </div>
            <p>
              {pl ? "Historie projektów i szczegółowe realizacje będą dodawane wraz z rozwojem platformy." : "Project stories and detailed case studies will be added as the platform grows."}
            </p>
          </div>
          <div className="project-grid">
            <article className="project-placeholder project-placeholder-wide">
              <span className="project-number">01</span>
              <div>
                <p>RobyFactory</p>
                <h3>{pl ? "Przedmioty na zamówienie i części funkcjonalne" : "Custom objects and functional parts"}</h3>
              </div>
              <span className="placeholder-label">{pl ? "Realizacja w przygotowaniu" : "Case study incoming"}</span>
            </article>
            <article className="project-placeholder">
              <span className="project-number">02</span>
              <div>
                <p>RobyFusion</p>
                <h3>{pl ? "Precyzyjna produkcja TIG" : "Precision TIG fabrication"}</h3>
              </div>
              <span className="placeholder-label">{pl ? "Realizacja w przygotowaniu" : "Case study incoming"}</span>
            </article>
            <article className="project-placeholder">
              <span className="project-number">03</span>
              <div>
                <p>RobyFunctions</p>
                <h3>{pl ? "Użyteczne rozwiązania cyfrowe" : "Useful digital experiences"}</h3>
              </div>
              <span className="placeholder-label">{pl ? "Realizacja w przygotowaniu" : "Case study incoming"}</span>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-index">[ 04 — {pl ? "Kontakt" : "Contact"} ]</p>
          <div className="contact-content">
            <h2>{pl ? "Masz problem, który warto rozwiązać?" : "Have a problem worth solving?"}</h2>
            <a className="text-link" href="mailto:hello@example.com">
              {pl ? "Porozmawiajmy" : "Let's talk"}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="contact-note">
            {pl ? "Dane kontaktowe są tymczasowe i zostaną zmienione przed publicznym uruchomieniem strony." : "Contact details are temporary and will be replaced before the public launch."}
          </p>
        </section>
      </main>
      <SiteFooter language={language} />
    </>
  );
}
