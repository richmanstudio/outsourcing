import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StructuredData } from "@/components/StructuredData";
import { publications } from "@/data/publications";
import { reviewHighlights, reviewSummary } from "@/data/reviews";
import { services } from "@/data/services";
import { getSiteUrl, siteConfig } from "@/data/site";
import { team } from "@/data/team";

const teamHref: Record<string, string> = { bogacheva: "/team/olga-bogacheva", fedorova: "/team/ekaterina-fedorova", radchenko: "/team/anna-radchenko" };

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${getSiteUrl().toString()}#legal-service`,
    name: siteConfig.name,
    url: getSiteUrl().toString(),
    telephone: siteConfig.phones.map((contact) => contact.phone),
    email: siteConfig.email,
    priceRange: "₽₽",
    address: { "@type": "PostalAddress", streetAddress: siteConfig.address.street, addressLocality: siteConfig.address.city, addressRegion: siteConfig.address.region, postalCode: siteConfig.address.postalCode, addressCountry: "RU" },
    areaServed: ["Хабаровский край", "Дальний Восток"],
    sameAs: [siteConfig.links.telegram, siteConfig.links.vk, siteConfig.links.twoGis],
  };

  return <><StructuredData data={schema} /><Header /><main id="main">
    <section className="portal-hero"><div className="portal-grid-bg" aria-hidden="true" /><div className="shell portal-hero-shell">
      <div className="portal-hero-kicker"><span>Юридическая фирма · Хабаровск</span><span>Дальний Восток</span></div>
      <div className="portal-hero-layout"><div><span className="kicker kicker-on-dark">Сложные споры · точная позиция</span><h1>Юридическая фирма для сложных споров и бизнеса.</h1><p>Арбитраж, наследство, семейные, имущественные и уголовные дела. Команда с опытом работы внутри судебной системы.</p><div className="portal-hero-actions"><Link className="button button-copper" href="/consultation">Обсудить ситуацию <span>↗</span></Link><Link className="text-link text-link-light" href="/services">Все практики</Link></div></div><aside className="portal-facts"><div><span>Опыт руководителя</span><strong>300+</strong><small>судебных процессов</small></div><div><span>Команда</span><strong>3</strong><small>профильных юриста</small></div><div><span>Консультация</span><strong>{siteConfig.consultationPrice}</strong><small>первичная оценка</small></div><div><span>Репутация</span><strong>{reviewSummary.rating}</strong><small>рейтинг в 2ГИС</small></div></aside></div>
    </div></section>

    <section className="section portal-practices"><div className="shell portal-section-head"><span className="kicker">01 / Практики</span><div><h2>Выберите категорию вопроса.</h2><p>Главная больше не заменяет весь сайт: подробности, документы и порядок работы находятся на страницах практик.</p></div><Link className="text-link" href="/services">Все практики ↗</Link></div><div className="shell portal-practice-grid">{services.map((service) => <Link href={`/services/${service.slug}`} key={service.slug}><span>{service.index}</span><h3>{service.breadcrumb}</h3><p>{service.intro}</p><i>↗</i></Link>)}</div></section>

    <section className="section section-ink portal-proof"><div className="shell portal-proof-layout"><div><span className="kicker kicker-on-dark">02 / Профессиональная база</span><h2>Опыт внутри арбитражных судов — не декорация, а часть метода.</h2><p>С 2010 года профессиональный путь руководителя связан с арбитражной судебной системой, а с 2017 года — с самостоятельной юридической практикой.</p><div className="portal-proof-actions"><Link className="button button-ice" href="/about">О фирме <span>↗</span></Link><Link className="text-link text-link-light" href="/team">Команда</Link></div></div><div className="portal-team-mini">{team.map((person) => <Link href={teamHref[person.id]} key={person.id}><img src={`${process.env.PAGES_BASE_PATH ?? ""}${person.image}`} alt={person.name} width="240" height="300" loading="lazy" /><div><span>{person.role}</span><strong>{person.name}</strong><small>{person.shortRole}</small></div></Link>)}</div></div></section>

    <section className="section portal-cases"><div className="shell portal-split-feature"><div><span className="kicker">03 / Судебная практика</span><h2>Кейсы — только после обезличивания и подтверждения результата.</h2><p>Система Cases уже выделена в отдельный раздел. По мере получения материалов здесь появятся дела с задачей, стратегией, результатом и ответственным специалистом.</p><Link className="button button-dark" href="/cases">Судебная практика <span>↗</span></Link></div><div className="portal-case-placeholder"><span>CASE SYSTEM / READY</span><strong>0</strong><p>публичных кейсов до передачи клиентом согласованных материалов</p><div>Арбитраж · Наследство · Семья · Имущество · Уголовные дела · Бизнес</div></div></div></section>

    <section className="section section-sand portal-publications"><div className="shell portal-section-head"><span className="kicker">04 / Экспертиза</span><div><h2>Позиция фирмы — в открытых материалах.</h2><p>Публикации помогают клиенту понять логику работы ещё до первой встречи.</p></div><Link className="text-link" href="/publications">Все публикации ↗</Link></div><div className="shell portal-publication-grid">{publications.map((item, index) => <Link href={`/publications/${item.slug}`} key={item.slug}><span>0{index+1} · {item.eyebrow}</span><h3>{item.title}</h3><p>{item.description}</p><small>{item.readingTime} ↗</small></Link>)}</div></section>

    <section className="section portal-reviews"><div className="shell portal-review-layout"><div className="portal-review-score"><span className="kicker">05 / Репутация</span><strong>{reviewSummary.rating}</strong><p>рейтинг компании в {reviewSummary.source}</p><a href={reviewSummary.sourceUrl} target="_blank" rel="noreferrer">Открыть источник ↗</a></div><div className="portal-review-list">{reviewHighlights.map((item, index) => <article key={item.category}><span>0{index+1}</span><div><h3>{item.category}</h3><p>{item.text}</p></div></article>)}<Link className="text-link" href="/reviews">Все отзывы и источники ↗</Link></div></div></section>

    <section className="section portal-business"><div className="shell portal-business-layout"><div><span className="kicker kicker-on-dark">06 / Бизнесу</span><h2>Юридическая функция без разрозненных обращений.</h2><p>Договоры, претензии, взыскание, арбитраж и текущая правовая поддержка в одном постоянном контексте.</p></div><div><Link className="button button-ice" href="/business">О сопровождении бизнеса <span>↗</span></Link><Link className="text-link text-link-light" href="/consultation">Обсудить нагрузку</Link></div></div></section>

    <section className="section portal-contact"><div className="shell portal-contact-layout"><div><span className="kicker">07 / Контакт</span><h2>Начните с первичной оценки ситуации.</h2><p>{siteConfig.address.city}, ул. Гамарника, 72, офис 302 · {siteConfig.hours}</p></div><div><strong>{siteConfig.consultationPrice}</strong><span>первичная консультация</span><Link className="button button-dark" href="/consultation">Записаться <span>↗</span></Link><Link className="text-link" href="/contacts">Все контакты</Link></div></div></section>
  </main><Footer /></>;
}
