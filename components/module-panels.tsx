"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { modules } from "@/lib/modules";
import { localizedPath, type Language, ui } from "@/lib/i18n";
import { assetPath } from "@/lib/site-path";

export function ModulePanels({ language = "en" }: { language?: Language }) {
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const factoryVideoRef = useRef<HTMLVideoElement>(null);
  const copy = ui[language];
  const localizedModules = modules[language];

  useEffect(() => {
    const video = factoryVideoRef.current;
    if (!video) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (activePanel === "factory" && !reduceMotion) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [activePanel]);

  return (
    <div
      className="module-panels"
      data-active={activePanel ?? undefined}
      onMouseLeave={() => setActivePanel(null)}
    >
      {localizedModules.map((moduleConfig) => (
        <article
          className={`module-panel module-panel-${moduleConfig.key}`}
          key={moduleConfig.key}
          style={
            {
              "--module-accent": moduleConfig.accent,
              "--module-accent-rgb": moduleConfig.accentRgb,
            } as React.CSSProperties
          }
          data-panel={moduleConfig.key}
          onMouseEnter={() => setActivePanel(moduleConfig.key)}
          onFocus={() => setActivePanel(moduleConfig.key)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setActivePanel(null);
            }
          }}
        >
          {moduleConfig.key === "factory" ? (
            <video
              ref={factoryVideoRef}
              className="panel-background-video"
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              tabIndex={-1}
            >
              <source src={assetPath("/videos/factoryV-reversed.mp4")} type="video/mp4" />
            </video>
          ) : null}
          <div className="panel-visual" aria-hidden="true">
            <span className="visual-code">&lt;/&gt;</span>
            <span className="visual-arc" />
          </div>
          <div className="panel-topline">
            <span>{moduleConfig.index}</span>
            <span>{moduleConfig.kicker}</span>
          </div>
          <div className="panel-center">
            <div className="module-icon-placeholder">
              <Image
                src={moduleConfig.logo}
                alt={`${moduleConfig.name} logo`}
                width={1254}
                height={1254}
              />
            </div>
            <h3>{moduleConfig.name}</h3>
            <p>{moduleConfig.description}</p>
          </div>
          <Link
            className="panel-link"
            href={localizedPath(language, moduleConfig.href)}
            aria-label={`${copy.explore} ${moduleConfig.name}`}
          >
            <span>{copy.explore} {moduleConfig.shortName}</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
