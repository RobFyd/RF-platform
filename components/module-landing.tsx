import Link from "next/link";
import Image from "next/image";
import type { ModuleConfig } from "@/lib/modules";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { FactoryGallery } from "./factory-gallery";
import { FusionGallery } from "./fusion-gallery";
import { FunctionsGallery } from "./functions-gallery";
import { homePath, type Language } from "@/lib/i18n";

type ModuleLandingProps = {
  moduleConfig: ModuleConfig;
  language?: Language;
};

export function ModuleLanding({ moduleConfig, language = "en" }: ModuleLandingProps) {
  const pl = language === "pl";
  const credentials = moduleConfig.credentials;
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
      <SiteHeader language={language} currentPath={moduleConfig.href} />
      <main>
        <section className="module-hero" aria-labelledby="module-title">
          <div className="technical-grid" aria-hidden="true" />
          <div className="module-hero-glow" aria-hidden="true" />
          <div className="module-breadcrumb">
            <Link href={homePath(language)}>{"//RF"}</Link>
            <span aria-hidden="true">/</span>
            <span>{moduleConfig.shortName}</span>
          </div>
          <div className="module-hero-copy">
            <p className="eyebrow">{moduleConfig.kicker}</p>
            <h1 id="module-title">{moduleConfig.name}</h1>
            <p>{moduleConfig.longDescription}</p>
            <a className="module-cta" href="mailto:hello@example.com">
              {pl ? "Omów projekt" : "Discuss a project"}
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
            <p className="section-index">[ 01 — {pl ? "Możliwości" : "Capabilities"} ]</p>
            <h2 id="services-title">{pl ? "W czym mogę pomóc." : "What I can help with."}</h2>
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
            <p className="section-index">[ 02 — {pl ? "Proces" : "Process"} ]</p>
            <h2 id="process-title">{pl ? "Jasno od założeń do rezultatu." : "Clear from brief to result."}</h2>
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
                  <p className="section-index">[ 03 — {pl ? "Wybrane realizacje" : "Selected work"} ]</p>
                  <h2 id="selected-work-title">{pl ? "Pomysły w realnej formie." : "Made to be real."}</h2>
                </div>
                <div>
                  <p>
                    {pl ? "Wybrane produkty dekoracyjne, funkcjonalne prototypy i części na zamówienie zaprojektowane oraz wykonane w technologii druku 3D." : "A selection of decorative products, functional prototypes and custom parts designed and produced with 3D printing."}
                  </p>
                </div>
              </div>
              <FactoryGallery language={language} />
            </>
          ) : moduleConfig.key === "fusion" ? (
            <>
              <div className="fusion-gallery-heading">
                <div>
                  <p className="section-index">[ 03 — {pl ? "Wybrane realizacje" : "Selected work"} ]</p>
                  <h2 id="selected-work-title">{pl ? "Praca w metalu." : "Work in metal."}</h2>
                </div>
                <div>
                  <p>
                    {pl ? "Przykłady precyzyjnej obróbki, kontrolowanego spawania TIG i praktycznej produkcji warsztatowej." : "A first look at precision machining, controlled TIG welding and practical fabrication from the workshop."}
                  </p>
                </div>
              </div>
              <FusionGallery language={language} />
            </>
          ) : (
            <>
              <div className="fusion-gallery-heading">
                <div>
                  <p className="section-index">[ 03 — {pl ? "Wybrane koncepcje" : "Selected work"} ]</p>
                  <h2 id="selected-work-title">{pl ? "Pomysły zbudowane w kodzie." : "Ideas built in code."}</h2>
                </div>
                <div>
                  <p>
                    {pl ? "Koncepcje nowoczesnych interfejsów, procesów wspieranych przez AI i praktycznych narzędzi cyfrowych." : "Concept visuals exploring modern interfaces, AI-assisted workflows and practical digital tools for real problems."}
                  </p>
                </div>
              </div>
              <FunctionsGallery language={language} />
            </>
          )}
        </section>

        <section className="module-credentials" aria-labelledby="credentials-title">
          <div className="module-credentials-heading">
            <div>
              <p className="section-index">
                [ 04 — {pl ? "Certyfikaty i dyplomy" : "Certificates & diplomas"} ]
              </p>
              <h2 id="credentials-title">
                {pl ? "Potwierdzone doświadczenie." : "Experience, documented."}
              </h2>
            </div>
            <p>
              {credentials
                ? pl
                  ? "Wybrane certyfikaty potwierdzające ukończone kursy, praktyczne projekty i rozwój w obszarze technologii webowych."
                  : "Selected certificates documenting completed courses, practical projects and continued development in web technology."
                : pl
                  ? "Miejsce na dokumenty potwierdzające kwalifikacje, ukończone szkolenia i rozwój zawodowy."
                  : "A dedicated place for qualifications, completed training and continued professional development."}
            </p>
          </div>

          <div className={`credentials-grid${credentials ? " credentials-grid-filled" : ""}`}>
            {credentials
              ? credentials.map((credential, index) => (
                  <a
                    className="credential-card credential-card-link"
                    href={credential.href}
                    key={credential.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${pl ? "Otwórz certyfikat" : "Open certificate"}: ${credential.title} (PDF)`}
                  >
                    <div className="credential-card-topline">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span>PDF · {credential.issued}</span>
                    </div>
                    <div className="credential-preview">
                      <Image
                        src={credential.preview}
                        alt={pl ? `Podgląd certyfikatu ${credential.title}` : `${credential.title} certificate preview`}
                        fill
                        sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                        unoptimized
                      />
                    </div>
                    <div className="credential-card-copy">
                      <h3>{credential.title}</h3>
                      <p>{credential.issuer}</p>
                    </div>
                    <span className="credential-open">
                      {pl ? "Zobacz certyfikat" : "View certificate"}
                      <span aria-hidden="true">↗</span>
                    </span>
                  </a>
                ))
              : moduleConfig.credentialAreas.map((area, index) => (
                  <article className="credential-card" key={area}>
                    <div className="credential-card-topline">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span>{pl ? "Miejsce na dokument" : "Document placeholder"}</span>
                    </div>
                    <div className="credential-document" aria-hidden="true">
                      <span />
                    </div>
                    <h3>{area}</h3>
                    <p>
                      {pl
                        ? "Certyfikat lub dyplom zostanie dodany tutaj."
                        : "A certificate or diploma will be added here."}
                    </p>
                  </article>
                ))}
          </div>
        </section>

        <section className="module-bottom-cta">
          <p>{pl ? "Masz na myśli coś konkretnego?" : "Have something specific in mind?"}</p>
          <h2>{pl ? "Zrealizujmy to." : "Let's make it real."}</h2>
          <a className="text-link" href="mailto:hello@example.com">
            {pl ? "Rozpocznij rozmowę" : "Start a conversation"}
            <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
      <SiteFooter language={language} />
    </div>
  );
}
