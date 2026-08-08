import Link from "next/link";
import type { ReactNode } from "react";

type CorporateHeroProps = {
  index: string;
  label: string;
  title: string;
  lead: string;
  backHref?: string;
  backLabel?: string;
  children?: ReactNode;
};

export function CorporateHero({
  index,
  label,
  title,
  lead,
  backHref,
  backLabel,
  children,
}: CorporateHeroProps) {
  return (
    <section className="corp-hero">
      <div className="corp-grid-bg" aria-hidden="true" />
      <div className="shell corp-hero-shell">
        {backHref ? (
          <div className="corp-breadcrumbs">
            <Link href="/">Главная</Link><span>/</span>
            {backHref !== "/" ? <><Link href={backHref}>{backLabel}</Link><span>/</span></> : null}
            <span>{label}</span>
          </div>
        ) : null}
        <div className="corp-hero-layout">
          <div>
            <span className="kicker kicker-on-dark">{index} / {label}</span>
            <h1>{title}</h1>
          </div>
          <div className="corp-hero-aside">
            <p>{lead}</p>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
