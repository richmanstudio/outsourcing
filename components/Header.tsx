"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { team } from "@/data/team";

type MegaKey = "practices" | "team" | "expertise" | null;

const teamHref: Record<string, string> = {
  bogacheva: "/team/olga-bogacheva",
  fedorova: "/team/ekaterina-fedorova",
  radchenko: "/team/anna-radchenko",
};

const expertise = [
  { href: "/cases", label: "Судебная практика", note: "Кейсы и результаты после обезличивания" },
  { href: "/publications", label: "Публикации", note: "Практические разборы и позиция фирмы" },
  { href: "/reviews", label: "Отзывы", note: "Публичная репутация и источники" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<MegaKey>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { setMenuOpen(false); setActiveMega(null); }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const toggleMega = (key: Exclude<MegaKey, null>) => setActiveMega((value) => value === key ? null : key);

  return (
    <header className={`site-header portal-header${scrolled ? " is-scrolled" : ""}`} onMouseLeave={() => setActiveMega(null)}>
      <div className="header-rule" aria-hidden="true" />
      <div className="shell header-inner portal-header-inner">
        <Logo />

        <nav className="desktop-nav portal-nav" aria-label="Основная навигация">
          <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined}>О фирме</Link>
          <button type="button" onMouseEnter={() => setActiveMega("practices")} onFocus={() => setActiveMega("practices")} onClick={() => toggleMega("practices")} aria-expanded={activeMega === "practices"}>Практики <span>⌄</span></button>
          <button type="button" onMouseEnter={() => setActiveMega("team")} onFocus={() => setActiveMega("team")} onClick={() => toggleMega("team")} aria-expanded={activeMega === "team"}>Команда <span>⌄</span></button>
          <Link href="/business" aria-current={pathname === "/business" ? "page" : undefined}>Бизнесу</Link>
          <button type="button" onMouseEnter={() => setActiveMega("expertise")} onFocus={() => setActiveMega("expertise")} onClick={() => toggleMega("expertise")} aria-expanded={activeMega === "expertise"}>Экспертиза <span>⌄</span></button>
          <Link href="/contacts" aria-current={pathname === "/contacts" ? "page" : undefined}>Контакты</Link>
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
          <Link className="header-cta" href="/consultation">Записаться <span aria-hidden="true">↗</span></Link>
        </div>

        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((value) => !value)}>
          <span>{menuOpen ? "Закрыть" : "Меню"}</span><span className="menu-icon" aria-hidden="true" />
        </button>
      </div>

      {activeMega ? (
        <div className="mega-menu" onMouseEnter={() => setActiveMega(activeMega)}>
          <div className="shell mega-menu-layout">
            <div className="mega-menu-intro">
              <span>{activeMega === "practices" ? "Практики" : activeMega === "team" ? "Команда" : "Экспертиза"}</span>
              <p>{activeMega === "practices" ? "Выберите категорию вопроса." : activeMega === "team" ? "Профильные специалисты и прямые контакты." : "Проверяемые материалы о работе фирмы."}</p>
            </div>
            <div className="mega-menu-grid">
              {activeMega === "practices" ? services.map((service) => <Link href={`/services/${service.slug}`} key={service.slug}><small>{service.index}</small><strong>{service.breadcrumb}</strong><span>{service.intro}</span></Link>) : null}
              {activeMega === "team" ? team.map((person) => <Link href={teamHref[person.id]} key={person.id}><small>{person.index}</small><strong>{person.name}</strong><span>{person.shortRole}</span></Link>) : null}
              {activeMega === "expertise" ? expertise.map((item, index) => <Link href={item.href} key={item.href}><small>0{index + 1}</small><strong>{item.label}</strong><span>{item.note}</span></Link>) : null}
            </div>
            <div className="mega-menu-side">
              <span>Консультация</span><strong>{siteConfig.consultationPrice}</strong><p>Хабаровск · очно и дистанционно</p><Link href="/consultation">Записаться ↗</Link>
            </div>
          </div>
        </div>
      ) : null}

      <div className="mobile-menu" id="mobile-menu" hidden={!menuOpen}>
        <div className="shell mobile-menu-inner portal-mobile-menu">
          <div className="mobile-menu-meta"><span>Хабаровск</span><span>{siteConfig.hours}</span></div>
          <nav aria-label="Мобильная навигация">
            <Link href="/about" onClick={() => setMenuOpen(false)}><span>01</span><strong>О фирме</strong><i>↗</i></Link>
            <details><summary><span>02</span><strong>Практики</strong><i>+</i></summary><div>{services.map((service) => <Link href={`/services/${service.slug}`} onClick={() => setMenuOpen(false)} key={service.slug}>{service.breadcrumb}</Link>)}</div></details>
            <details><summary><span>03</span><strong>Команда</strong><i>+</i></summary><div>{team.map((person) => <Link href={teamHref[person.id]} onClick={() => setMenuOpen(false)} key={person.id}>{person.name}</Link>)}</div></details>
            <Link href="/business" onClick={() => setMenuOpen(false)}><span>04</span><strong>Бизнесу</strong><i>↗</i></Link>
            <details><summary><span>05</span><strong>Экспертиза</strong><i>+</i></summary><div>{expertise.map((item) => <Link href={item.href} onClick={() => setMenuOpen(false)} key={item.href}>{item.label}</Link>)}</div></details>
            <Link href="/contacts" onClick={() => setMenuOpen(false)}><span>06</span><strong>Контакты</strong><i>↗</i></Link>
          </nav>
          <div className="mobile-menu-footer"><a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a><Link className="button button-copper" href="/consultation" onClick={() => setMenuOpen(false)}>Записаться на консультацию <span>↗</span></Link></div>
        </div>
      </div>
    </header>
  );
}
