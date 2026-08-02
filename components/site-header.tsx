import Link from "next/link";
import Image from "next/image";
import { assetPath } from "@/lib/site-path";
import { ThemeToggle } from "./theme-toggle";
import { homePath, localizedPath, type Language, ui } from "@/lib/i18n";

export function SiteHeader({ language = "en", currentPath = "/" }: { language?: Language; currentPath?: string }) {
  const copy = ui[language];
  const alternateLanguage = language === "en" ? "pl" : "en";

  return (
    <header className="site-header">
      <Link className="brand" href={homePath(language)} aria-label={copy.homeLabel}>
        <Image
          src={assetPath("/rf-main.svg")}
          alt=""
          width={1254}
          height={1254}
          priority
        />
      </Link>
      <nav aria-label={copy.primaryNavigation}>
        <Link href={`${homePath(language)}#directions`}>{copy.directions}</Link>
        <Link href={`${homePath(language)}#work`}>{copy.work}</Link>
        <Link href={`${homePath(language)}#contact`}>{copy.contact}</Link>
      </nav>
      <div className="header-actions">
        <Link
          className="language-toggle"
          href={localizedPath(alternateLanguage, currentPath)}
          hrefLang={alternateLanguage}
          aria-label={language === "en" ? "Przejdź do wersji polskiej" : "Switch to English"}
        >
          <span className={language === "en" ? "is-current" : undefined}>EN</span>
          <span aria-hidden="true">|</span>
          <span className={language === "pl" ? "is-current" : undefined}>PL</span>
        </Link>
        <ThemeToggle label={copy.themeToggle} />
        <a className="header-contact" href="mailto:hello@example.com">
          {copy.startProject}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
