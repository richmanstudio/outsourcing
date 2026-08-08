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
    <section className="corp-hero v5-corp-hero">
      <div className="shell corp-hero-shell v5-corp-hero-shell">
        {backHref ? (
          <div className="corp-breadcrumbs">
            <Link href="/">Главная</Link><span>/</span>
            {backHref !== "/" ? <><Link href={backHref}>{backLabel}</Link><span>/</span></> : null}
            <span>{label}</span>
          </div>
        ) : null}
        <div className="corp-hero-layout v5-corp-hero-layout">
          <div>
            <span className="kicker kicker-on-dark">{index} / {label}</span>
            <h1>{title}</h1>
          </div>
          <div className="corp-hero-aside v5-corp-hero-aside">
            <p>{lead}</p>
            {children ? <div className="v5-corp-hero-actions">{children}</div> : null}
            <div className="v5-corp-art" aria-hidden="true">
              <div className="v5-corp-orb" />
              <div className="v5-corp-layer v5-corp-layer-a"><span>ФАКТЫ</span><b>01</b></div>
              <div className="v5-corp-layer v5-corp-layer-b"><span>ПОЗИЦИЯ</span><b>02</b></div>
              <div className="v5-corp-layer v5-corp-layer-c"><span>ДЕЙСТВИЕ</span><b>03</b></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
