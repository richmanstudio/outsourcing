import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer portal-footer v5-footer">
      <div className="shell v5-footer-shell">
        <div className="v5-footer-cta">
          <div><span>Аутсорсинг ДВ · Хабаровск</span><h2>Когда вопрос сложный, начните с точной оценки ситуации.</h2></div>
          <Link className="button button-ice" href="/consultation">Записаться на консультацию <span>↗</span></Link>
        </div>
        <div className="footer-main portal-footer-main v5-footer-main">
          <div className="footer-intro"><Logo inverse /><p>Юридическая фирма для судебных споров граждан и бизнеса на Дальнем Востоке.</p></div>
          <div className="footer-column"><span>Фирма</span><Link href="/about">О фирме</Link><Link href="/services">Практики</Link><Link href="/team">Команда</Link><Link href="/business">Бизнесу</Link></div>
          <div className="footer-column"><span>Экспертиза</span><Link href="/cases">Судебная практика</Link><Link href="/publications">Публикации</Link><Link href="/reviews">Отзывы</Link><Link href="/consultation">Консультация</Link></div>
          <div className="footer-column"><span>Специалисты</span>{siteConfig.phones.map((contact) => <a href={`tel:${contact.phone}`} key={contact.id}>{contact.name}<small>{contact.phoneDisplay}</small></a>)}</div>
          <div className="footer-column"><span>Офис</span><p>Хабаровск<br />ул. Гамарника, 72<br />офис 302, 3 этаж</p><Link href="/contacts">Маршрут и контакты ↗</Link></div>
        </div>
        <div className="footer-bottom v5-footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.name}</span><span>{siteConfig.legalName} · ИНН {siteConfig.inn} · ОГРНИП {siteConfig.ogrnip}</span><nav aria-label="Юридические документы"><Link href="/privacy">Конфиденциальность</Link><Link href="/consent">Согласие на обработку данных</Link></nav><span className="footer-credit">Digital system by <strong>DUONIQ</strong></span></div>
      </div>
    </footer>
  );
}
