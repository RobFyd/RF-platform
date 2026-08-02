import Link from "next/link";
import Image from "next/image";
import { assetPath } from "@/lib/site-path";
import { homePath, type Language, ui } from "@/lib/i18n";

export function SiteFooter({ language = "en" }: { language?: Language }) {
  const copy = ui[language];
  return (
    <footer className="site-footer">
      <Link className="brand" href={homePath(language)} aria-label={copy.homeLabel}>
        <Image
          src={assetPath("/rf-main.svg")}
          alt=""
          width={1254}
          height={1254}
        />
      </Link>
      <p>Robert Fydrych · Worcester, UK</p>
      <p>{copy.footerLine} © {new Date().getFullYear()}</p>
    </footer>
  );
}
