"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { modules } from "@/lib/modules";

export function ModulePanels() {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  return (
    <div
      className="module-panels"
      data-active={activePanel ?? undefined}
      onMouseLeave={() => setActivePanel(null)}
    >
      {modules.map((moduleConfig) => (
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
          <div className="panel-visual" aria-hidden="true">
            <div className="visual-orbit visual-orbit-one" />
            <div className="visual-orbit visual-orbit-two" />
            <div className="visual-core" />
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
            href={moduleConfig.href}
            aria-label={`Explore ${moduleConfig.name}`}
          >
            <span>Explore {moduleConfig.shortName}</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
