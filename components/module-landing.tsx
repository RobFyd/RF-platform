import Link from "next/link";
import Image from "next/image";
import type { ModuleConfig } from "@/lib/modules";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { FactoryGallery } from "./factory-gallery";
import { FusionGallery } from "./fusion-gallery";
import { FunctionsGallery } from "./functions-gallery";

type ModuleLandingProps = {
  moduleConfig: ModuleConfig;
};

export function ModuleLanding({ moduleConfig }: ModuleLandingProps) {
  return (
    <div
      className={`module-page module-page-${moduleConfig.key}`}
      style={
        {
          "--module-accent": moduleConfig.accent,
          "--module-accent-rgb": moduleConfig.accentRgb,
        } as React.CSSProperties
      }
    >
      <SiteHeader />
      <main>
        <section className="module-hero" aria-labelledby="module-title">
          <div className="technical-grid" aria-hidden="true" />
          <div className="module-hero-glow" aria-hidden="true" />
          <div className="module-breadcrumb">
            <Link href="/">{"//RF"}</Link>
            <span aria-hidden="true">/</span>
            <span>{moduleConfig.shortName}</span>
          </div>
          <div className="module-hero-copy">
            <p className="eyebrow">{moduleConfig.kicker}</p>
            <h1 id="module-title">{moduleConfig.name}</h1>
            <p>{moduleConfig.longDescription}</p>
            <a className="module-cta" href="mailto:hello@example.com">
              Discuss a project
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="module-hero-mark">
            <Image
              src={moduleConfig.logo}
              alt={`${moduleConfig.name} logo`}
              width={1254}
              height={1254}
              priority
            />
          </div>
        </section>

        <section className="module-services" aria-labelledby="services-title">
          <div>
            <p className="section-index">[ 01 — Capabilities ]</p>
            <h2 id="services-title">What I can help with.</h2>
          </div>
          <ul>
            {moduleConfig.services.map((service, index) => (
              <li key={service}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service}</h3>
                <span aria-hidden="true">—</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="module-process" aria-labelledby="process-title">
          <div className="module-process-heading">
            <p className="section-index">[ 02 — Process ]</p>
            <h2 id="process-title">Clear from brief to result.</h2>
          </div>
          <ol>
            {moduleConfig.process.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="module-future-work"
          aria-labelledby="selected-work-title"
        >
          {moduleConfig.key === "factory" ? (
            <>
              <div className="fusion-gallery-heading">
                <div>
                  <p className="section-index">[ 03 — Selected work ]</p>
                  <h2 id="selected-work-title">Made to be real.</h2>
                </div>
                <div>
                  <p>
                    A selection of decorative products, functional prototypes
                    and custom parts designed and produced with 3D printing.
                  </p>
                </div>
              </div>
              <FactoryGallery />
            </>
          ) : moduleConfig.key === "fusion" ? (
            <>
              <div className="fusion-gallery-heading">
                <div>
                  <p className="section-index">[ 03 — Selected work ]</p>
                  <h2 id="selected-work-title">Work in metal.</h2>
                </div>
                <div>
                  <p>
                    A first look at precision machining, controlled TIG welding
                    and practical fabrication from the workshop.
                  </p>
                </div>
              </div>
              <FusionGallery />
            </>
          ) : (
            <>
              <div className="fusion-gallery-heading">
                <div>
                  <p className="section-index">[ 03 — Selected work ]</p>
                  <h2 id="selected-work-title">Ideas built in code.</h2>
                </div>
                <div>
                  <p>
                    Concept visuals exploring modern interfaces, AI-assisted
                    workflows and practical digital tools for real problems.
                  </p>
                </div>
              </div>
              <FunctionsGallery />
            </>
          )}
        </section>

        <section className="module-bottom-cta">
          <p>Have something specific in mind?</p>
          <h2>Let&apos;s make it real.</h2>
          <a className="text-link" href="mailto:hello@example.com">
            Start a conversation
            <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
