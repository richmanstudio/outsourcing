import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { services } from "@/data/services";
import { team } from "@/data/team";
import { publications } from "@/data/publications";
import { reviewSummary } from "@/data/reviews";
import { getSiteUrl, siteConfig } from "@/data/site";

const feature = services[0];
const otherServices = services.slice(1);
const leadLawyer = team[0];
const basePath = process.env.PAGES_BASE_PATH ?? "";

export default function HomePage() {
  const legalService = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": getSiteUrl().toString() + "#legal-service",
    name: siteConfig.name,
    url: getSiteUrl().toString(),
    telephone: siteConfig.phones.map((contact) => contact.phone),
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "RU",
    },
    areaServed: ["Хабаровск", "Хабаровский край", "Дальний Восток"],
    sameAs: [siteConfig.links.telegram, siteConfig.links.vk, siteConfig.links.twoGis],
  };

  return (
    <>
      <StructuredData data={legalService} />
      <Header />
      <main id="main" className="ed-home">
        <section className="ed-hero" aria-labelledby="ed-hero-title">
          <div className="shell ed-hero-layout">
            <div className="ed-hero-content">
              <p className="ed-eyebrow"><span className="ed-rule" /> Юридическая фирма / Хабаровск</p>
              <h1 id="ed-hero-title">В сложном споре <span>важна каждая деталь.</span></h1>
              <p className="ed-hero-lead">
                Защищаем интересы граждан и бизнеса в судебных спорах.
                Изучаем документы, оцениваем риски и только потом предлагаем решение.
              </p>
              <div className="ed-hero-actions">
                <Link href="/consultation" className="ed-btn ed-btn-dark">
                  Обсудить вашу ситуацию <span aria-hidden="true">↗</span>
                </Link>
                <Link href="/services" className="ed-text-link">Направления практики <span aria-hidden="true">↗</span></Link>
              </div>
              <div className="ed-hero-grounding">
                <span>Арбитраж и гражданские споры</span>
                <span>Очные и дистанционные консультации</span>
              </div>
            </div>
            <figure className="ed-hero-portrait">
              <div className="ed-portrait-frame">
                <img src={basePath + leadLawyer.image} alt={leadLawyer.name + " — руководитель юридической фирмы"} width="720" height="940" fetchPriority="high" />
              </div>
              <figcaption>
                <span>01 / Руководитель практики</span>
                <strong>{leadLawyer.name}</strong>
                <span>{leadLawyer.role}</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="ed-facts" aria-label="О фирме в цифрах">
          <div className="shell ed-facts-grid">
            <div><strong>2017</strong><span>Начало самостоятельной юридической практики руководителя</span></div>
            <div><strong>03</strong><span>Специалиста с разными направлениями работы</span></div>
            <div><strong>ДФО</strong><span>Хабаровск — офис фирмы, работа по Дальнему Востоку</span></div>
          </div>
        </section>

        <section className="ed-section ed-services" aria-labelledby="ed-services-title">
          <div className="shell">
            <div className="ed-section-top">
              <p className="ed-eyebrow"><span className="ed-rule" /> 01 / Направления</p>
              <Link href="/services" className="ed-text-link">Все направления <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="ed-heading-row">
              <h2 id="ed-services-title">От конкретной задачи — <em>к правовому решению.</em></h2>
              <p>Не предлагаем универсальную стратегию для всех дел. Начинаем с характера спора, доказательств и процессуального положения.</p>
            </div>
            <div className="ed-services-layout">
              <Link href={"/services/" + feature.slug} className="ed-service-feature">
                <div className="ed-service-feature-top"><span>В фокусе практики</span><span aria-hidden="true">↗</span></div>
                <div>
                  <span className="ed-service-number">{feature.index} / Судебная защита</span>
                  <h3>{feature.breadcrumb}</h3>
                  <p>{feature.intro}</p>
                  <span className="ed-feature-link">Подробнее о практике <span aria-hidden="true">↗</span></span>
                </div>
              </Link>
              <div className="ed-service-list">
                {otherServices.map((service) => (
                  <Link href={"/services/" + service.slug} className="ed-service-row" key={service.slug}>
                    <span className="ed-service-index">{service.index}</span>
                    <span className="ed-service-row-copy"><strong>{service.breadcrumb}</strong><small>{service.intro}</small></span>
                    <span className="ed-service-arrow" aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="ed-method" aria-labelledby="ed-method-title">
          <div className="shell ed-method-layout">
            <div>
              <p className="ed-eyebrow"><span className="ed-rule" /> 02 / Как мы работаем</p>
              <h2 id="ed-method-title">Сначала — разобраться. <em>Затем — действовать.</em></h2>
              <p>В юридическом споре преждевременное действие иногда обходится дороже ожидания. Поэтому начинаем работу с проверяемых фактов.</p>
              <Link className="ed-text-link" href="/about">Подход фирмы <span aria-hidden="true">↗</span></Link>
            </div>
            <ol className="ed-method-steps">
              <li><span>01</span><div><h3>Изучаем материалы</h3><p>Восстанавливаем хронологию, проверяем документы и обстоятельства.</p></div></li>
              <li><span>02</span><div><h3>Оцениваем риски</h3><p>Разбираем доказательства, сроки и вероятные варианты развития спора.</p></div></li>
              <li><span>03</span><div><h3>Согласовываем стратегию</h3><p>Объясняем варианты, стоимость дальнейшей работы и последовательность действий.</p></div></li>
              <li><span>04</span><div><h3>Ведём дело</h3><p>Готовим правовую позицию и сопровождаем её реализацию.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="ed-team-band" aria-labelledby="ed-team-title">
          <div className="shell">
            <div className="ed-section-top">
              <p className="ed-eyebrow"><span className="ed-rule" /> 03 / Люди и опыт</p>
              <Link className="ed-text-link ed-on-dark" href="/team">Вся команда <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="ed-team-intro">
              <h2 id="ed-team-title">За каждым делом <em>стоит специалист.</em></h2>
              <p>Практический опыт работы в судебной системе и самостоятельная юридическая практика. Прямые контакты и персональная ответственность за работу.</p>
            </div>
            <div className="ed-team-grid">
              {team.map((person) => (
                <Link href={"/team/" + person.slug} className="ed-team-person" key={person.id}>
                  <div className="ed-team-photo"><img src={basePath + person.image} alt={person.name} width="540" height="680" loading="lazy" /></div>
                  <div className="ed-team-name"><strong>{person.name}</strong><span aria-hidden="true">↗</span></div>
                  <p>{person.shortRole}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="ed-section ed-business" aria-labelledby="ed-business-title">
          <div className="shell ed-business-layout">
            <div className="ed-business-index"><p className="ed-eyebrow"><span className="ed-rule" /> 04 / Для компаний</p><span>Системная правовая поддержка</span></div>
            <div>
              <h2 id="ed-business-title">Юрист должен знать бизнес <em>не только по материалам дела.</em></h2>
              <p>Договорная работа, претензии, взыскание задолженности, арбитраж и текущие вопросы компании — в рамках постоянного сопровождения.</p>
              <Link href="/business" className="ed-btn ed-btn-dark">Юридический аутсорсинг <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>

        <section className="ed-section ed-insights" aria-labelledby="ed-insights-title">
          <div className="shell">
            <div className="ed-section-top">
              <p className="ed-eyebrow"><span className="ed-rule" /> 05 / Материалы</p>
              <Link href="/publications" className="ed-text-link">Все публикации <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="ed-heading-row ed-insights-intro">
              <h2 id="ed-insights-title">Позицию юриста видно <em>в деталях.</em></h2>
              <p>Практические материалы о документах, судебной стратегии и юридической поддержке бизнеса.</p>
            </div>
            <div className="ed-articles">
              {publications.slice(0, 3).map((article, index) => (
                <Link href={"/publications/" + article.slug} key={article.slug} className="ed-article">
                  <div><span>0{index + 1}</span><span>{article.eyebrow}</span></div>
                  <h3>{article.title}</h3>
                  <span className="ed-article-arrow" aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="ed-reviews" aria-labelledby="ed-reviews-title">
          <div className="shell ed-reviews-layout">
            <div>
              <p className="ed-eyebrow"><span className="ed-rule" /> 06 / Репутация</p>
              <h2 id="ed-reviews-title">Доверие лучше проверять <em>в открытом источнике.</em></h2>
            </div>
            <div className="ed-rating-panel">
              <div className="ed-rating-main"><strong>{reviewSummary.rating}</strong><div><span>2ГИС</span><p>{reviewSummary.count} опубликованных отзывов — данные, указанные в профиле фирмы</p></div></div>
              <a href={reviewSummary.sourceUrl} target="_blank" rel="noopener noreferrer" className="ed-text-link">Смотреть отзывы в 2ГИС <span aria-hidden="true">↗</span></a>
              <small>Актуальную оценку и количество отзывов проверяйте на странице источника.</small>
            </div>
          </div>
        </section>

        <section className="ed-consult" aria-labelledby="ed-consult-title">
          <div className="shell ed-consult-layout">
            <div><p className="ed-eyebrow"><span className="ed-rule" /> 07 / Контакт</p><h2 id="ed-consult-title">Начните с разговора <em>по существу.</em></h2><p>Опишите задачу и документы, которые уже есть. На первой консультации разберём, с чего разумно начать.</p></div>
            <div className="ed-consult-action">
              <span>Первичная консультация</span>
              <strong>{siteConfig.consultationPrice}</strong>
              <p>Очно в Хабаровске или дистанционно</p>
              <Link href="/consultation" className="ed-btn ed-btn-light">Записаться на консультацию <span aria-hidden="true">↗</span></Link>
              <a href={"tel:" + siteConfig.phone}>Или позвоните: {siteConfig.phoneDisplay}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
