"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/data/site";

const navigation = [
  { href: "/#services", label: "Практики" },
  { href: "/#team", label: "Команда" },
  { href: "/#approach", label: "Подход" },
  { href: "/#contacts", label: "Контакты" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="shell header-inner">
        <Logo />

        <nav className="desktop-nav" aria-label="Основная навигация">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={`tel:${siteConfig.phone}`}>
            {siteConfig.phoneDisplay}
          </a>
          <Link className="button button-dark button-compact desktop-cta" href="/#consultation">
            Записаться
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span>{menuOpen ? "Закрыть" : "Меню"}</span>
          <span className="menu-icon" aria-hidden="true" />
        </button>
      </div>

      <div className="mobile-menu" id="mobile-menu" hidden={!menuOpen}>
        <div className="shell mobile-menu-inner">
          <nav aria-label="Мобильная навигация">
            {navigation.map((item, index) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                <span>0{index + 1}</span>{item.label}
              </Link>
            ))}
          </nav>
          <div className="mobile-menu-footer">
            <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
            <Link className="button button-accent" href="/#consultation" onClick={() => setMenuOpen(false)}>
              Записаться на консультацию
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
