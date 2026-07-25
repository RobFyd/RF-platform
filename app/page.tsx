import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InteractiveHero } from "@/components/interactive-hero";
import { ModulePanels } from "@/components/module-panels";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "//RF — Robert Fydrych",
  description:
    "One platform connecting 3D printing and CAD, TIG fabrication, and digital development.",
};

const disciplines = [
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
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <InteractiveHero>
          <div className="hero-light" aria-hidden="true" />
          <div className="technical-grid" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow">
              <span>Robert Fydrych</span>
              <span className="eyebrow-line" />
              <span>Designer · Maker · Developer</span>
            </p>
            <h1 id="hero-title">
              <span className="hero-mark">
                <Image
                  src="/rf-main.svg"
                  alt="//RF"
                  width={1254}
                  height={1254}
                  priority
                />
              </span>
              <span className="hero-statement">One name.</span>
              <span className="hero-statement hero-statement-muted">
                Three directions.
              </span>
            </h1>
            <div className="hero-bottom">
              <p>
                From digital concept to physical result — one platform for
                design, fabrication and technology.
              </p>
              <Link className="scroll-cue" href="#directions">
                <span>Explore directions</span>
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
            <p className="section-index">[ 01 — Directions ]</p>
            <h2 id="directions-title">Choose the right workshop.</h2>
            <p>
              Three focused disciplines. Each one stands on its own and shares
              the same practical, problem-solving mindset.
            </p>
          </div>
          <ModulePanels />
        </section>

        <section className="intersection-section" aria-labelledby="method-title">
          <div className="intersection-intro">
            <p className="section-index">[ 02 — Connected practice ]</p>
            <h2 id="method-title">
              Digital precision.
              <br />
              Physical craft.
            </h2>
            <p>
              My work sits where engineering, making and software overlap.
              That means fewer hand-offs, clearer decisions and solutions
              designed with the full process in mind.
            </p>
          </div>
          <ol className="discipline-list">
            {disciplines.map((discipline) => (
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
              <p className="section-index">[ 03 — Selected work ]</p>
              <h2 id="work-title">Built, tested, refined.</h2>
            </div>
            <p>
              Project stories and detailed case studies will be added as the
              platform grows.
            </p>
          </div>
          <div className="project-grid">
            <article className="project-placeholder project-placeholder-wide">
              <span className="project-number">01</span>
              <div>
                <p>RobyFactory</p>
                <h3>Custom objects and functional parts</h3>
              </div>
              <span className="placeholder-label">Case study incoming</span>
            </article>
            <article className="project-placeholder">
              <span className="project-number">02</span>
              <div>
                <p>RobyFusion</p>
                <h3>Precision TIG fabrication</h3>
              </div>
              <span className="placeholder-label">Case study incoming</span>
            </article>
            <article className="project-placeholder">
              <span className="project-number">03</span>
              <div>
                <p>RobyFunctions</p>
                <h3>Useful digital experiences</h3>
              </div>
              <span className="placeholder-label">Case study incoming</span>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-index">[ 04 — Contact ]</p>
          <div className="contact-content">
            <h2>Have a problem worth solving?</h2>
            <a className="text-link" href="mailto:hello@example.com">
              Let&apos;s talk
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="contact-note">
            Contact details are temporary and will be replaced before the
            public launch.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
