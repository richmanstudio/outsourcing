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

export function CorporateHero({ index, label, title, lead, backHref, backLabel, children }: CorporateHeroProps) {
  return (
    <section className="corp-hero v5-corp-hero ed-pagehero">
      <div className="shell corp-hero-shell v5-corp-hero-shell ed-pagehero-shell">
        {backHref && (
          <nav className="corp-breadcrumbs ed-breadcrumbs" aria-label="Хлебные крошки">
            <Link href="/">Главная</Link><span>/</span>
            {backHref !== "/" && <><Link href={backHref}>{backLabel}</Link><span>/</span></>}
            <span aria-current="page">{label}</span>
          </nav>
        )}
        <div className="corp-hero-layout v5-corp-hero-layout ed-pagehero-layout">
          <div><span className="kicker kicker-on-dark">{index} / {label}</span><h1>{title}</h1></div>
          <div className="corp-hero-aside v5-corp-hero-aside ed-pagehero-aside"><p>{lead}</p>{children && <div className="ed-pagehero-actions">{children}</div>}</div>
        </div>
      </div>
    </section>
  );
}
