import Link from "next/link";
import { siteConfig } from "@/data/site";

type LogoProps = { className?: string; inverse?: boolean };

export function Logo({ className = "", inverse = false }: LogoProps) {
  return (
    <Link
      className={`brand${inverse ? " brand-inverse" : ""} ${className}`.trim()}
      href="/"
      aria-label={`${siteConfig.name} — главная`}
    >
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-mark-d">Д</span>
        <span className="brand-mark-v">В</span>
      </span>
      <span className="brand-wordmark">
        <strong>Аутсорсинг ДВ</strong>
        <small>Юридическая фирма · Хабаровск</small>
      </span>
    </Link>
  );
}
