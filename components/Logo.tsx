import Link from "next/link";
import { siteConfig } from "@/data/site";

type LogoProps = { className?: string };

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      className={`brand ${className}`.trim()}
      href="/"
      aria-label={`${siteConfig.name} — главная`}
    >
      <span className="brand-seal" aria-hidden="true">
        <span>ДВ</span>
      </span>
      <span className="brand-copy">
        <strong>Аутсорсинг ДВ</strong>
        <small>Юридическая компания</small>
      </span>
    </Link>
  );
}
