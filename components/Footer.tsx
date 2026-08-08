import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/data/site";

export function Footer() {
  return <footer className="site-footer portal-footer">
    <div className="shell footer-topline"><span>Аутсорсинг ДВ</span><span>Хабаровск · Дальний Восток</span><span>48.4827° N · 135.0838° E</span></div>
    <div className="shell footer-main portal-footer-main">
      <div className="footer-intro"><Logo inverse /><p>Юридическая фирма для сложных судебных споров и постоянного сопровождения бизнеса.</p></div>
      <div className="footer-column"><span>Разделы</span><Link href="/about">О фирме</Link><Link href="/services">Практики</Link><Link href="/team">Команда</Link><Link href="/business">Бизнесу</Link></div>
      <div className="footer-column"><span>Экспертиза</span><Link href="/cases">Судебная практика</Link><Link href="/publications">Публикации</Link><Link href="/reviews">Отзывы</Link><Link href="/consultation">Консультация</Link></div>
      <div className="footer-column"><span>Связаться</span>{siteConfig.phones.map((contact) => <a href={`tel:${contact.phone}`} key={contact.id}>{contact.name} · {contact.phoneDisplay}</a>)}<a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
      <div className="footer-column"><span>Офис</span><p>Хабаровск<br />ул. Гамарника, 72<br />офис 302, 3 этаж</p><Link href="/contacts">Все контакты ↗</Link></div>
    </div>
    <div className="shell footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.name}</span><span>{siteConfig.legalName} · ИНН {siteConfig.inn} · ОГРНИП {siteConfig.ogrnip}</span><nav aria-label="Юридические документы"><Link href="/privacy">Политика конфиденциальности</Link><Link href="/consent">Согласие на обработку данных</Link></nav><span className="footer-credit">Digital system by <strong>DUONIQ</strong></span></div>
  </footer>;
}
