import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="ed-footer">
      <div className="shell ed-footer-top">
        <div className="ed-footer-brand"><Logo inverse className="ed-logo" /><p>Юридическая помощь гражданам и компаниям. Судебные споры, документы и правовая стратегия.</p></div>
        <div className="ed-footer-links">
          <div><span>Фирма</span><Link href="/about">О нас</Link><Link href="/team">Специалисты</Link><Link href="/services">Практики</Link><Link href="/business">Для бизнеса</Link></div>
          <div><span>Информация</span><Link href="/publications">Публикации</Link><Link href="/cases">Судебная практика</Link><Link href="/reviews">Отзывы</Link><Link href="/consultation">Консультация</Link></div>
          <div><span>Связаться</span><a href={"tel:" + siteConfig.phone}>{siteConfig.phoneDisplay}</a><a href={"mailto:" + siteConfig.email}>{siteConfig.email}</a><Link href="/contacts">Хабаровск, Гамарника, 72, офис 302 ↗</Link><a href={siteConfig.links.twoGis} target="_blank" rel="noopener noreferrer">Открыть в 2ГИС ↗</a></div>
        </div>
      </div>
      <div className="shell ed-footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span>{siteConfig.legalName} · ИНН {siteConfig.inn} · ОГРНИП {siteConfig.ogrnip}</span>
        <div><Link href="/privacy">Конфиденциальность</Link><Link href="/consent">Согласие на обработку данных</Link></div>
        <span className="ed-credit">Создание сайта — DUONIQ</span>
      </div>
    </footer>
  );
}
