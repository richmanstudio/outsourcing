import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-topline">
        <span>Аутсорсинг ДВ</span>
        <span>Хабаровск · Дальний Восток</span>
        <span>48.4827° N · 135.0838° E</span>
      </div>

      <div className="shell footer-main">
        <div className="footer-intro">
          <Logo inverse />
          <p>Юридическая фирма для сложных судебных споров и постоянного сопровождения бизнеса.</p>
        </div>

        <div className="footer-column">
          <span>Связаться</span>
          <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>

        <div className="footer-column">
          <span>Офис</span>
          <p>Хабаровск<br />ул. Гамарника, 72<br />офис 302, 3 этаж</p>
        </div>

        <div className="footer-column">
          <span>Каналы</span>
          <a href={siteConfig.links.telegram} target="_blank" rel="noreferrer">Telegram ↗</a>
          <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a>
          <a href={siteConfig.links.vk} target="_blank" rel="noreferrer">ВКонтакте ↗</a>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span>{siteConfig.legalName} · ИНН {siteConfig.inn} · ОГРНИП {siteConfig.ogrnip}</span>
        <nav aria-label="Юридические документы">
          <Link href="/privacy">Политика конфиденциальности</Link>
          <Link href="/consent">Согласие на обработку данных</Link>
        </nav>
        <span className="footer-credit">Digital system by <strong>DUONIQ</strong></span>
      </div>
    </footer>
  );
}
