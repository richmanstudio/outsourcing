import Link from "next/link";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { StructuredData } from "@/components/StructuredData";
import { services } from "@/data/services";
import { getSiteUrl, siteConfig } from "@/data/site";

const team = [
  {
    index: "01",
    role: "Руководитель · старший юрист",
    name: "Ольга Богачёва",
    focus: "Арбитраж, банкротство, наследственные и семейные споры",
    proof: "Опыт работы в Арбитражном суде Хабаровского края и Арбитражном суде Дальневосточного округа.",
    metrics: ["300+ судебных процессов", "154 выигранных дела", "с 2017 года — практика"],
  },
  {
    index: "02",
    role: "Юрист",
    name: "Екатерина Федорова",
    focus: "Арбитраж, наследство, земельные, налоговые и предпринимательские споры",
    proof: "С 2009 по 2021 год — государственная гражданская служба в Арбитражном суде Хабаровского края.",
    metrics: ["134 выигранных дела", "советник юстиции 3 класса", "с 2021 года — практика"],
  },
  {
    index: "03",
    role: "Юрист",
    name: "Анна Радченко",
    focus: "Банковское, предпринимательское, хозяйственное и страховое право",
    proof: "Сопровождение коммерческих споров, договорных вопросов и взаимодействия со страховыми организациями.",
    metrics: ["83 выигранных дела", "75% выигранных дел", "20% дел завершено до суда"],
  },
] as const;

const process = [
  ["01", "Анализ", "Изучаем документы, сроки, участников и фактические риски."],
  ["02", "Стратегия", "Сравниваем сценарии и объясняем последствия каждого решения."],
  ["03", "Подготовка", "Формируем правовую позицию, доказательства и процессуальные документы."],
  ["04", "Сопровождение", "Ведём переговоры, представляем интересы в суде и контролируем исполнение."],
] as const;

const principles = [
  ["Без гарантий результата", "Судебное решение нельзя обещать заранее. Можно отвечать за качество анализа, документов и представительства."],
  ["Без технического языка", "Переводим сложную правовую конструкцию в понятные варианты и конкретные действия."],
  ["Без размытых смет", "После первичного анализа фиксируем объём работы, этапы и стоимость сопровождения."],
] as const;

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${getSiteUrl().toString()}#legal-service`,
    name: siteConfig.name,
    url: getSiteUrl().toString(),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "₽₽",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "RU",
    },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    }],
    areaServed: ["Хабаровский край", "Дальний Восток"],
    sameAs: [siteConfig.links.telegram, siteConfig.links.vk],
  };

  return (
    <>
      <StructuredData data={schema} />
      <Header />

      <main id="main">
        <section className="hero">
          <div className="shell hero-shell">
            <div className="hero-meta-line">
              <span>Юридическая компания</span>
              <span>Хабаровск · Дальний Восток</span>
              <span>{siteConfig.hours}</span>
            </div>

            <div className="hero-layout">
              <Reveal className="hero-main">
                <span className="section-label">Практика / 2026</span>
                <h1>
                  Правовая стратегия
                  <span>для сложных споров</span>
                  и бизнеса.
                </h1>
                <p className="hero-lead">
                  Арбитраж, наследство, семейные и имущественные споры. Анализируем ситуацию, формируем позицию и сопровождаем дело до завершения процесса.
                </p>
                <div className="hero-actions">
                  <Link className="button button-accent" href="#consultation">
                    Записаться на консультацию
                    <span aria-hidden="true">↗</span>
                  </Link>
                  <a className="quiet-link" href={`tel:${siteConfig.phone}`}>Позвонить {siteConfig.phoneDisplay}</a>
                </div>
              </Reveal>

              <Reveal className="hero-aside" delay={70}>
                <div className="case-sheet case-sheet-back" aria-hidden="true" />
                <div className="case-sheet">
                  <div className="case-sheet-head">
                    <span>Первичная консультация</span>
                    <strong>{siteConfig.consultationPrice}</strong>
                  </div>
                  <div className="case-sheet-body">
                    <div><span>01</span><p>Изучение ситуации и документов</p></div>
                    <div><span>02</span><p>Оценка правовых рисков</p></div>
                    <div><span>03</span><p>Рекомендация следующего шага</p></div>
                  </div>
                  <div className="case-sheet-foot">
                    <span>Очно / дистанционно</span>
                    <b>60–90 минут</b>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="hero-proof">
              <div><strong>3</strong><span>профильных юриста</span></div>
              <div><strong>Судебная система</strong><span>опыт работы внутри арбитражных судов</span></div>
              <div><strong>ДФО</strong><span>приоритетная география сопровождения</span></div>
            </div>
          </div>
        </section>

        <section className="section practices" id="services" aria-labelledby="services-title">
          <div className="shell">
            <div className="editorial-heading">
              <span className="section-label">01 / Практики</span>
              <h2 id="services-title">Работаем с делами, где важны стратегия и доказательства.</h2>
              <p>Не обещаем «решить любой вопрос». Берём задачи, в которых можем оценить перспективу, выстроить позицию и отвечать за качество работы.</p>
            </div>

            <div className="practice-grid">
              {services.map((service) => {
                const descriptions: Record<string, string> = {
                  arbitration: "Договорные и корпоративные конфликты, взыскание задолженности, банкротство.",
                  inheritance: "Оформление наследства, сроки, установление фактов и раздел имущества.",
                  family: "Алименты, раздел имущества, споры о детях и расторжение брака.",
                  property: "Право собственности, недвижимость, ЖКХ и споры с застройщиками.",
                  business: "Договоры, претензии, арбитраж и постоянная правовая поддержка компании.",
                };
                return (
                  <Link className="practice-card" href={`/services/${service.slug}`} key={service.slug}>
                    <span className="practice-index">{service.index}</span>
                    <h3>{service.breadcrumb}</h3>
                    <p>{descriptions[service.slug]}</p>
                    <span className="practice-arrow" aria-hidden="true">↗</span>
                  </Link>
                );
              })}
              <div className="practice-note">
                <span>Также</span>
                <p>Трудовые и страховые споры, защита прав потребителей, банкротство граждан, исполнительное производство.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section statement" id="approach" aria-labelledby="statement-title">
          <div className="shell statement-grid">
            <div>
              <span className="section-label section-label-light">02 / Подход</span>
              <p className="statement-kicker">Юридическая работа начинается не с иска.</p>
            </div>
            <div>
              <h2 id="statement-title">Сначала нужно понять, что произошло, какие доказательства уже есть и какой результат действительно имеет смысл.</h2>
              <p>Только после этого определяется стратегия: переговоры, претензия, судебный процесс или последовательность нескольких действий.</p>
            </div>
          </div>

          <div className="shell process-list">
            {process.map(([index, title, text]) => (
              <article key={index}>
                <span>{index}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section team" id="team" aria-labelledby="team-title">
          <div className="shell editorial-heading team-heading">
            <span className="section-label">03 / Команда</span>
            <h2 id="team-title">Дело ведёт специалист по конкретному направлению права.</h2>
            <p>Профессиональные сведения и показатели основаны на открытых профилях специалистов и подлежат финальному подтверждению перед публикацией.</p>
          </div>

          <div className="shell team-list">
            {team.map((person) => (
              <article className="person" key={person.name}>
                <div className="person-top">
                  <span>{person.index}</span>
                  <span>{person.role}</span>
                </div>
                <div className="person-main">
                  <div>
                    <h3>{person.name}</h3>
                    <p className="person-focus">{person.focus}</p>
                  </div>
                  <p className="person-proof">{person.proof}</p>
                </div>
                <div className="person-metrics">
                  {person.metrics.map((metric) => <span key={metric}>{metric}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section principles" aria-labelledby="principles-title">
          <div className="shell principles-layout">
            <div className="principles-title">
              <span className="section-label">04 / Принципы</span>
              <h2 id="principles-title">Спокойная работа без лишних обещаний.</h2>
            </div>
            <div className="principles-list">
              {principles.map(([title, text], index) => (
                <article key={title}>
                  <span>0{index + 1}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section geography" aria-labelledby="geo-title">
          <div className="shell geography-layout">
            <div className="geo-copy">
              <span className="section-label section-label-light">05 / География</span>
              <h2 id="geo-title">Хабаровск — точка присутствия. Дальний Восток — рабочая территория.</h2>
              <p>Принимаем в офисе на улице Гамарника и сопровождаем клиентов дистанционно в регионах ДФО.</p>
              <ul>
                <li>Консультации по телефону и видеосвязи</li>
                <li>Электронный обмен документами</li>
                <li>Подготовка процессуальных документов</li>
                <li>Представительство и контроль дела</li>
              </ul>
            </div>
            <div className="geo-visual" aria-hidden="true">
              <div className="geo-axis geo-axis-x" />
              <div className="geo-axis geo-axis-y" />
              <div className="geo-circle geo-circle-a" />
              <div className="geo-circle geo-circle-b" />
              <div className="geo-center"><b>ХБР</b><span>48.48° N / 135.08° E</span></div>
              <span className="geo-tag tag-amur">Амурская область</span>
              <span className="geo-tag tag-eao">ЕАО</span>
              <span className="geo-tag tag-primorye">Приморский край</span>
              <span className="geo-tag tag-magadan">Магаданская область</span>
            </div>
          </div>
        </section>

        <section className="section consultation" id="consultation" aria-labelledby="consultation-title">
          <div className="shell consultation-layout">
            <div className="consultation-copy">
              <span className="section-label section-label-light">06 / Консультация</span>
              <h2 id="consultation-title">Начните с анализа ситуации.</h2>
              <p>Кратко опишите вопрос. После заполнения формы откроется WhatsApp с готовым сообщением — отправку подтверждаете вы.</p>
              <div className="consultation-price">
                <span>Стоимость</span>
                <strong>{siteConfig.consultationPrice}</strong>
                <small>первичная консультация</small>
              </div>
            </div>
            <ConsultationForm />
          </div>
        </section>

        <section className="section contacts" id="contacts" aria-labelledby="contacts-title">
          <div className="shell contacts-layout">
            <div className="contacts-heading">
              <span className="section-label">07 / Контакты</span>
              <h2 id="contacts-title">Офис в Хабаровске.</h2>
              <p>Приём по предварительной записи. Свяжитесь с компанией, чтобы согласовать время и перечень документов.</p>
            </div>

            <div className="contact-card">
              <div className="contact-grid">
                <div><span>Адрес</span><strong>ул. Гамарника, 72<br />офис 302, 3 этаж</strong></div>
                <div><span>График</span><strong>Пн–Пт<br />09:00–18:00</strong></div>
                <div><span>Телефон</span><a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a></div>
                <div><span>Email</span><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
              </div>
              <div className="contact-actions">
                <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a>
                <a href={siteConfig.links.telegram} target="_blank" rel="noreferrer">Telegram ↗</a>
                <a href={siteConfig.links.vk} target="_blank" rel="noreferrer">ВКонтакте ↗</a>
                <a href={siteConfig.links.twoGis} target="_blank" rel="noreferrer">Маршрут в 2ГИС ↗</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
