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

type ProfileIconName = "github" | "linkedin" | "people-per-hour";

function ProfileIcon({ name }: { name: ProfileIconName }) {
  if (name === "github") {
    return (
      <svg viewBox="0 0 496 512" fill="currentColor" aria-hidden="true">
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 640 512" fill="currentColor" aria-hidden="true">
      <path d="M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304h91.4c20.6 0 40.4 3.5 58.8 9.9C323 331 320 349.1 320 368c0 59.5 29.5 112.1 74.8 144H29.7C13.3 512 0 498.7 0 482.3 0 383.8 79.8 304 178.3 304zM352 368a144 144 0 1 1 288 0 144 144 0 1 1-288 0zm144-80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-48c0-8.8-7.2-16-16-16z" />
    </svg>
  );
}

export function ModuleLanding({ moduleConfig, language = "en" }: ModuleLandingProps) {
  const pl = language === "pl";
  const credentials = moduleConfig.credentials;
  const profileLinks = [
    {
      name: "GitHub",
      href: "https://github.com/RobFyd",
      displayUrl: "github.com/RobFyd",
      description: pl
        ? "Kod źródłowy, projekty i aktywność developerska."
        : "Source code, projects and development activity.",
      icon: "github" as const,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/robert-fydrych",
      displayUrl: "linkedin.com/in/robert-fydrych",
      description: pl
        ? "Doświadczenie, umiejętności i profil zawodowy."
        : "Experience, skills and professional profile.",
      icon: "linkedin" as const,
    },
    {
      name: "PeoplePerHour",
      href: "http://pph.me/RobertFydrych",
      displayUrl: "pph.me/RobertFydrych",
      description: pl
        ? "Profil freelancera i możliwość rozpoczęcia współpracy."
        : "Freelance profile and a direct way to start working together.",
      icon: "people-per-hour" as const,
    },
  ];
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

        {moduleConfig.key === "functions" ? (
          <section className="module-profile-links" aria-labelledby="profile-links-title">
            <div className="profile-links-heading">
              <div>
                <p className="section-index">
                  [ 05 — {pl ? "Profile i współpraca" : "Profiles & collaboration"} ]
                </p>
                <h2 id="profile-links-title">
                  {pl ? "Znajdź mnie online." : "Find me online."}
                </h2>
              </div>
              <p>
                {pl
                  ? "Kod, doświadczenie zawodowe i dostępność do współpracy — w jednym miejscu."
                  : "Code, professional experience and freelance availability — all in one place."}
              </p>
            </div>

            <div className="profile-links-grid">
              {profileLinks.map((profile, index) => {
                return (
                  <a
                    className="profile-link-card"
                    href={profile.href}
                    key={profile.name}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${pl ? "Otwórz profil" : "Open profile"}: ${profile.name}`}
                  >
                    <div className="profile-link-topline">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span>{pl ? "Profil zewnętrzny" : "External profile"}</span>
                    </div>
                    <span className="profile-link-icon" aria-hidden="true">
                      <ProfileIcon name={profile.icon} />
                    </span>
                    <h3>{profile.name}</h3>
                    <p>{profile.description}</p>
                    <span className="profile-link-footer">
                      <span>{profile.displayUrl}</span>
                      <span aria-hidden="true">↗</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
        ) : null}

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
