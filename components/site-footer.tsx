import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="brand" href="/" aria-label="//RF home">
        <Image src="/rf-main.svg" alt="" width={1254} height={1254} />
      </Link>
      <p>Robert Fydrych · Worcester, UK</p>
      <p>Design. Build. Create. © {new Date().getFullYear()}</p>
    </footer>
  );
}
