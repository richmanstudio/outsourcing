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
const practiceTone = ["mist", "sage", "paper", "wine", "copper", "ink"] as const;

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

  return <><StructuredData data={schema} /><Header /><main id="main" className="v5-home">
    <section className="v5-hero">
      <div className="shell v5-hero-shell">
        <div className="v5-hero-meta"><span>Юридическая фирма · Хабаровск</span><span>Работаем по Дальнему Востоку</span></div>
        <div className="v5-hero-layout">
          <div className="v5-hero-copy">
            <span className="kicker kicker-on-dark">Сложные дела · точная позиция</span>
            <h1>Сложные дела требуют <em>точной позиции.</em></h1>
            <p>Арбитраж, наследственные, семейные, имущественные и уголовные дела. Сначала разбираем факты и риски — потом выбираем действие.</p>
            <div className="v5-hero-actions"><Link className="button button-copper" href="/consultation">Обсудить ситуацию <span>↗</span></Link><Link className="v5-quiet-link" href="/services">Выбрать практику <span>↗</span></Link></div>
            <div className="v5-hero-proofline"><span>С 2010 года — опыт внутри судебной системы</span><span>3 профильных юриста</span></div>
          </div>
          <aside className="v5-case-orbit" aria-label="Ключевые факты о фирме">
            <div className="v5-orbit-glow" aria-hidden="true" />
            <div className="v5-case-layer v5-case-layer-one"><small>СУДЕБНАЯ БАЗА</small><strong>300+</strong><span>процессов у руководителя</span></div>
            <div className="v5-case-layer v5-case-layer-two"><small>ПЕРВИЧНАЯ ОЦЕНКА</small><strong>{siteConfig.consultationPrice}</strong><span>очно / дистанционно</span></div>
            <div className="v5-case-layer v5-case-layer-three"><small>РЕПУТАЦИЯ</small><strong>{reviewSummary.rating}</strong><span>рейтинг в 2ГИС</span></div>
            <div className="v5-orbit-core" aria-hidden="true"><span>ФАКТЫ</span><span>ПОЗИЦИЯ</span><span>ДЕЙСТВИЕ</span></div>
          </aside>
        </div>
      </div>
    </section>

    <section className="v5-trust-strip"><div className="shell"><span>Арбитраж</span><span>Уголовные дела</span><span>Наследство</span><span>Семья</span><span>Имущество</span><span>Бизнес</span></div></section>

    <section className="section v5-practices">
      <div className="shell v5-section-heading"><div><span className="kicker">01 / Практики</span><h2>Правовая помощь начинается с правильной категории вопроса.</h2></div><div><p>На странице каждой практики — ситуации, документы, порядок работы и прямой контакт профильного специалиста.</p><Link className="v5-quiet-link" href="/services">Все практики <span>↗</span></Link></div></div>
      <div className="shell v5-practice-bento">{services.map((service, index) => <Link className={`v5-practice-card tone-${practiceTone[index % practiceTone.length]} card-${index + 1}`} href={`/services/${service.slug}`} key={service.slug}><div><span>{service.index}</span><i>↗</i></div><h3>{service.breadcrumb}</h3><p>{service.intro}</p><div className="v5-card-object" aria-hidden="true" /></Link>)}</div>
    </section>

    <section className="v5-experience-wrap">
      <div className="shell v5-experience-panel">
        <div className="v5-experience-copy"><span className="kicker kicker-on-dark">02 / Профессиональная база</span><h2>Опыт судебной системы встроен в метод работы.</h2><p>Фирма не начинает с обещания результата. Сначала — документы, сроки, доказательства и сценарии. После этого формируется позиция и процессуальный план.</p><div className="v5-experience-actions"><Link className="button button-ice" href="/about">О фирме <span>↗</span></Link><Link className="v5-quiet-link light" href="/team">Команда <span>↗</span></Link></div><div className="v5-experience-timeline"><span><b>2010</b> судебная система</span><span><b>2017</b> самостоятельная практика</span><span><b>2026</b> команда из 3 специалистов</span></div></div>
        <div className="v5-team-stack">{team.map((person, index) => <Link className={`v5-team-card team-${index + 1}`} href={teamHref[person.id]} key={person.id}><img src={`${process.env.PAGES_BASE_PATH ?? ""}${person.image}`} alt={person.name} width="520" height="680" loading="lazy" /><div><span>{person.shortRole}</span><strong>{person.name}</strong><small>{person.phoneDisplay}</small></div></Link>)}</div>
      </div>
    </section>

    <section className="section v5-business-section"><div className="shell v5-business-surface"><div className="v5-business-orb" aria-hidden="true" /><div><span className="kicker">03 / Для бизнеса</span><h2>Юридическая функция, которая знает контекст компании.</h2><p>Договоры, претензии, дебиторская задолженность, арбитраж и текущие вопросы — в одной системе сопровождения.</p></div><div className="v5-business-actions"><Link className="button button-dark" href="/business">Юридический аутсорсинг <span>↗</span></Link><Link className="v5-quiet-link" href="/consultation">Обсудить нагрузку <span>↗</span></Link></div></div></section>

    <section className="section v5-expertise-section"><div className="shell v5-section-heading"><div><span className="kicker">04 / Экспертиза</span><h2>Проверяйте подход до первой встречи.</h2></div><div><p>Судебная практика, публикации и публичная репутация вынесены в самостоятельные разделы.</p></div></div><div className="shell v5-expertise-grid"><Link className="v5-case-folder" href="/cases"><span>СУДЕБНАЯ ПРАКТИКА</span><h3>Cases</h3><p>Публикуем только после обезличивания и подтверждения результата клиентом.</p><i>Открыть раздел ↗</i><div className="v5-folder-tab" aria-hidden="true" /></Link><div className="v5-publication-feature"><div className="v5-publication-head"><span>ПУБЛИКАЦИИ</span><Link href="/publications">Все материалы ↗</Link></div>{publications.slice(0,3).map((item,index) => <Link href={`/publications/${item.slug}`} key={item.slug}><small>0{index+1} · {item.eyebrow}</small><h3>{item.title}</h3><span>{item.readingTime} ↗</span></Link>)}</div></div></section>

    <section className="section v5-reputation-section"><div className="shell v5-reputation-surface"><div className="v5-rating"><span className="kicker">05 / Репутация</span><strong>{reviewSummary.rating}</strong><p>{reviewSummary.count} публичных отзывов · {reviewSummary.source}</p><a href={reviewSummary.sourceUrl} target="_blank" rel="noreferrer">Проверить источник ↗</a></div><div className="v5-review-cards">{reviewHighlights.slice(0,3).map((item,index) => <article key={item.category}><span>0{index+1}</span><h3>{item.category}</h3><p>{item.text}</p></article>)}</div><Link className="v5-quiet-link" href="/reviews">Все отзывы <span>↗</span></Link></div></section>

    <section className="section v5-contact-section"><div className="shell v5-contact-surface"><div><span className="kicker kicker-on-dark">06 / Следующий шаг</span><h2>Начните с точной оценки ситуации.</h2><p>{siteConfig.address.city}, ул. Гамарника, 72, офис 302 · {siteConfig.hours}</p></div><div><span>Первичная консультация</span><strong>{siteConfig.consultationPrice}</strong><Link className="button button-ice" href="/consultation">Записаться <span>↗</span></Link><Link className="v5-quiet-link light" href="/contacts">Все контакты <span>↗</span></Link></div></div></section>
  </main><Footer /></>;
}
