import Link from "next/link";
import Image from "next/image";
import { assetPath } from "@/lib/site-path";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="//RF home">
        <Image
          src={assetPath("/rf-main.svg")}
          alt=""
          width={1254}
          height={1254}
          priority
        />
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/#directions">Directions</Link>
        <Link href="/#work">Work</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
      <div className="header-actions">
        <ThemeToggle />
        <a className="header-contact" href="mailto:hello@example.com">
          Start a project
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
