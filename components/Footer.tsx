import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div>
          <Logo className="footer-brand" />
          <p>Юридическая помощь гражданам и бизнесу в Хабаровске и по Дальнему Востоку.</p>
        </div>

        <div className="footer-contact">
          <span>Связаться</span>
          <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>

        <div className="footer-address">
          <span>Офис</span>
          <p>{siteConfig.address.city}<br />ул. Гамарника, 72<br />офис 302, 3 этаж</p>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span>{siteConfig.legalName} · ИНН {siteConfig.inn} · ОГРНИП {siteConfig.ogrnip}</span>
        <nav aria-label="Юридические документы">
          <Link href="/privacy">Политика конфиденциальности</Link>
          <Link href="/consent">Согласие на обработку данных</Link>
        </nav>
      </div>

      <div className="shell footer-credit">
        <span>Design & development</span>
        <strong>DUONIQ</strong>
      </div>
    </footer>
  );
}
