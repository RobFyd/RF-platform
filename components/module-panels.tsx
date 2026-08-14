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
  const fusionVideoRef = useRef<HTMLVideoElement>(null);
  const functionsVideoRef = useRef<HTMLVideoElement>(null);
  const copy = ui[language];
  const localizedModules = modules[language];

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const panelVideos = [
      ["factory", factoryVideoRef.current],
      ["fusion", fusionVideoRef.current],
      ["functions", functionsVideoRef.current],
    ] as const;

    for (const [panel, video] of panelVideos) {
      if (!video) continue;

      if (activePanel === panel && !reduceMotion) {
        video.currentTime = 0;
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
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
          <video
            ref={
              moduleConfig.key === "factory"
                ? factoryVideoRef
                : moduleConfig.key === "fusion"
                  ? fusionVideoRef
                  : functionsVideoRef
            }
            className="panel-background-video"
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
          >
            <source
              src={assetPath(
                moduleConfig.key === "factory"
                  ? "/videos/factoryV-reversed.mp4"
                  : moduleConfig.key === "fusion"
                    ? "/videos/fusion-hover.mp4"
                    : "/videos/functions-hover.mp4",
              )}
              type="video/mp4"
            />
          </video>
          <div className="panel-visual" aria-hidden="true">
            <span className="visual-code">&lt;/&gt;</span>
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
