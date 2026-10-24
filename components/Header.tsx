"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";

const navigation = [
  { href: "/about", label: "О фирме" },
  { href: "/services", label: "Практики" },
  { href: "/team", label: "Команда" },
  { href: "/business", label: "Бизнесу" },
  { href: "/publications", label: "Материалы" },
  { href: "/contacts", label: "Контакты" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="ed-header">
      <div className="shell ed-header-inner">
        <Logo className="ed-logo" />
        <nav className="ed-main-nav" aria-label="Основная навигация">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href || (item.href === "/services" && pathname.startsWith("/services/")) ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ed-header-contact">
          <a href={"tel:" + siteConfig.phone} className="ed-header-phone">{siteConfig.phoneDisplay}</a>
          <Link href="/consultation" className="ed-header-book">Консультация <span aria-hidden="true">↗</span></Link>
        </div>
        <button type="button" className="ed-menu-toggle" aria-expanded={open} aria-controls="ed-mobile-menu" aria-label={open ? "Закрыть меню" : "Открыть меню"} onClick={() => setOpen((value) => !value)}>
          <span>{open ? "Закрыть" : "Меню"}</span><span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </div>
      <div className="ed-mobile-menu" id="ed-mobile-menu" hidden={!open}>
        <nav className="shell" aria-label="Мобильная навигация">
          {navigation.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <small>{String(index + 1).padStart(2, "0")}</small>{item.label}<span aria-hidden="true">↗</span>
            </Link>
          ))}
          <details>
            <summary>Направления практики <span aria-hidden="true">+</span></summary>
            <div>{services.map((item) => <Link key={item.slug} href={"/services/" + item.slug} onClick={() => setOpen(false)}>{item.breadcrumb}</Link>)}</div>
          </details>
          <Link className="ed-mobile-cta" href="/consultation" onClick={() => setOpen(false)}>Записаться на консультацию ↗</Link>
          <a className="ed-mobile-phone" href={"tel:" + siteConfig.phone}>{siteConfig.phoneDisplay}</a>
        </nav>
      </div>
    </header>
  );
}
