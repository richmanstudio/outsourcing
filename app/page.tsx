import Link from "next/link";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { StructuredData } from "@/components/StructuredData";
import { services } from "@/data/services";
import { getSiteUrl, siteConfig } from "@/data/site";
import { team } from "@/data/team";

const practiceMeta: Record<string, { scope: string; signal: string }> = {
  arbitration: { scope: "Компании и предприниматели", signal: "Договоры · долги · банкротство" },
  inheritance: { scope: "Частные клиенты", signal: "Сроки · факты · раздел имущества" },
  family: { scope: "Частные клиенты", signal: "Алименты · имущество · дети" },
  property: { scope: "Граждане и организации", signal: "Собственность · жильё · застройщики" },
  business: { scope: "ООО и ИП", signal: "Договоры · претензии · суды" },
};

const method = [
  { index: "01", title: "Факты", text: "Восстанавливаем картину спора: документы, события, сроки, участники и уже совершённые действия." },
  { index: "02", title: "Позиция", text: "Определяем правовую конструкцию, доказательства и слабые места каждой стороны." },
  { index: "03", title: "Стратегия", text: "Сравниваем переговоры, претензию и судебный процесс по рискам, срокам и экономическому смыслу." },
  { index: "04", title: "Процесс", text: "Готовим документы, представляем интересы и держим клиента в курсе каждого значимого шага." },
] as const;

const geography = [
  ["27", "Хабаровский край"],
  ["28", "Амурская область"],
  ["79", "Еврейская автономная область"],
  ["49", "Магаданская область"],
  ["25", "Приморский край"],
] as const;

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
    sameAs: [siteConfig.links.telegram, siteConfig.links.vk, siteConfig.links.twoGis],
  };

  return (
    <>
      <StructuredData data={schema} />
      <Header />

      <main id="main">
        <section className="hero-v3" aria-labelledby="hero-title">
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="shell hero-v3-shell">
            <div className="hero-v3-topline">
              <span>Юридическая фирма</span>
              <span>Хабаровск · Дальний Восток</span>
              <span>Практика с 2017 года</span>
            </div>

            <div className="hero-v3-layout">
              <Reveal className="hero-v3-copy">
                <span className="kicker kicker-on-dark">Сложные споры · точная позиция</span>
                <h1 id="hero-title">
                  Юридическая практика
                  <span>для дел, где цена ошибки слишком высока.</span>
                </h1>
                <p>
                  Арбитраж, наследство, семейные и имущественные споры. Команда с опытом работы внутри арбитражной судебной системы.
                </p>
                <div className="hero-v3-actions">
                  <Link className="button button-copper" href="#consultation">
                    Обсудить ситуацию <span aria-hidden="true">↗</span>
                  </Link>
                  <a className="text-link text-link-light" href={`tel:${siteConfig.phone}`}>
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </Reveal>

              <Reveal className="hero-v3-evidence" delay={80}>
                <div className="evidence-head">
                  <span>Ключевое преимущество</span>
                  <strong>Опыт внутри судебной системы</strong>
                </div>
                <ol className="court-track">
                  <li><time>2010–2012011</time><p>Банкротный состав Арбитражного суда Хабаровского края</p></li>
                  <li><time>2012–2014</time><p>Помощник судьи Арбитражного суда Хабаровского края</p></li>
                  <li><time>2014–2016</time><p>Аппарат Арбитражного суда Дальневосточного округа</p></li>
                  <li><time>с 2017</time><p>Самостоятельная юридическая практика</p></li>
                </ol>
                <div className="evidence-foot">
                  <span>Профиль руководителя фирмы</span>
                  <span>Данные из открытых профессиональных источников</span>
                </div>
              </Reveal>
            </div>

            <div className="hero-v3-proof">
              <div><strong>300+</strong><span>судебных процессов у руководителя</span></div>
              <div><strong>3</strong><span>профильных юриста</span></div>
              <div><strong>4,9</strong><span>рейтинг компании в 2ГИС</span></div>
              <div><strong>{siteConfig.consultationPrice}</strong><span>первичная консультация</span></div>
            </div>
          </div>
        </section>

        <section className="section section-paper" id="practices" aria-labelledby="practices-title">
          <div className="shell section-intro-grid">
            <div>
              <span className="kicker">01 / Практики</span>
            </div>
            <div>
              <h2 id="practices-title">Не «полный спектр». Конкретные категории дел и понятная ответственность.</h2>
            </div>
            <div>
              <p>Каждое обращение сначала проходит правовую оценку. Если у задачи нет рабочей стратегии, это объясняется до начала большого процесса.</p>
            </div>
          </div>

          <div className="shell practice-system">
            {services.map((service, index) => {
              const meta = practiceMeta[service.slug];
              return (
                <Link
                  className={`practice-row${index === 0 ? " practice-row-featured" : ""}`}
                  href={`/services/${service.slug}`}
                  key={service.slug}
                >
                  <span className="practice-row-index">{service.index}</span>
                  <div className="practice-row-title">
                    <span>{meta.scope}</span>
                    <h3>{service.breadcrumb}</h3>
                  </div>
                  <p>{meta.signal}</p>
                  <span className="practice-row-arrow" aria-hidden="true">↗</span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="section section-ink experience" id="experience" aria-labelledby="experience-title">
          <div className="shell experience-layout">
            <div className="experience-sticky">
              <span className="kicker kicker-on-dark">02 / Судебный опыт</span>
              <h2 id="experience-title">Судебный процесс понимается не только со стороны представителя.</h2>
              <p>Опыт в аппарате арбитражных судов помогает точнее оценивать процессуальные риски, доказательства и логику движения дела.</p>
            </div>

            <div className="experience-ledger">
              <div className="ledger-header">
                <span>Период</span><span>Роль и система</span><span>Практическое значение</span>
              </div>
              <article>
                <time>2010–2011</time>
                <div><strong>Секретарь судебного заседания</strong><span>Банкротный состав, Арбитражный суд Хабаровского края</span></div>
                <p>Понимание процессуального порядка, материалов дела и судебной дисциплины.</p>
              </article>
              <article>
                <time>2012–2014</time>
                <div><strong>Помощник судьи</strong><span>Арбитражный суд Хабаровского края</span></div>
                <p>Работа с экономическими спорами, судебными актами и правовыми позициями.</p>
              </article>
              <article>
                <time>2014–2016</time>
                <div><strong>Помощник заместителя председателя</strong><span>Арбитражный суд Дальневосточного округа</span></div>
                <p>Опыт на уровне кассационного пересмотра и анализа судебной практики региона.</p>
              </article>
              <article>
                <time>с 2017</time>
                <div><strong>Практикующий юрист</strong><span>Защита интересов граждан и бизнеса</span></div>
                <p>Стратегия, документы, представительство и сопровождение до исполнения решения.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-sand team-v3" id="team" aria-labelledby="team-title">
          <div className="shell section-intro-grid">
            <div><span className="kicker">03 / Команда</span></div>
            <div><h2 id="team-title">Дело ведёт юрист, который работает именно с этой отраслью права.</h2></div>
            <div><p>Профили не спрятаны за общим словом «команда»: видны специализация, опыт и опубликованные профессиональные показатели.</p></div>
          </div>

          <div className="shell team-v3-list">
            {team.map((person) => (
              <article className="team-v3-person" key={person.id}>
                <div className="team-v3-person-head">
                  <span>{person.index}</span>
                  <span>{person.role}</span>
                </div>
                <div className="team-v3-person-main">
                  <div className="team-v3-portrait">
                    <img
                      src={`${process.env.PAGES_BASE_PATH ?? ""}${person.image}`}
                      alt={`${person.name} — ${person.role}`}
                      width="360"
                      height="480"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="team-v3-nameblock">
                    <h3>{person.name}</h3>
                    <p>{person.shortRole}</p>
                    <a className="team-v3-phone" href={`tel:${person.phone}`}>{person.phoneDisplay}</a>
                  </div>
                  <p className="team-v3-statement">{person.statement}</p>
                  <div className="team-v3-metrics">
                    {person.metrics.map((metric) => (
                      <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
                    ))}
                  </div>
                </div>
                <details className="team-v3-details">
                  <summary>Профессиональный профиль <span aria-hidden="true">+</span></summary>
                  <div>
                    <p>{person.focus}</p>
                    <ul>{person.experience.map((item) => <li key={item}>{item}</li>)}</ul>
                    <small>{person.sourceNote}</small>
                  </div>
                </details>
              </article>
            ))}
          </div>
        </section>

        <section className="section business-section" id="business" aria-labelledby="business-title">
          <div className="business-grid-bg" aria-hidden="true" />
          <div className="shell business-layout">
            <div className="business-index">
              <span>04 / Бизнесу</span>
              <strong>LEGAL<br />OUTSOURCE</strong>
              <small>Хабаровск · ДФО</small>
            </div>
            <div className="business-copy">
              <span className="kicker kicker-on-dark">Юридическая функция без разрозненных обращений</span>
              <h2 id="business-title">Постоянное сопровождение вместо реакции на проблемы в последний момент.</h2>
              <p>Фирма подключается к договорам, претензиям, взысканию задолженности, арбитражным спорам и текущим правовым вопросам компании.</p>
              <ul className="business-scope">
                <li><span>01</span>Договорная работа</li>
                <li><span>02</span>Претензии и взыскание</li>
                <li><span>03</span>Арбитражные споры</li>
                <li><span>04</span>Корпоративные вопросы</li>
                <li><span>05</span>Банкротные дела</li>
                <li><span>06</span>Работа с госорганами</li>
              </ul>
              <Link className="button button-ice" href="/services/business">
                О сопровождении бизнеса <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section section-paper method-section" aria-labelledby="method-title">
          <div className="shell method-head">
            <div><span className="kicker">05 / Метод</span></div>
            <div><h2 id="method-title">Сначала — понимание дела. Потом — процессуальные действия.</h2></div>
          </div>
          <div className="shell method-grid">
            {method.map((item) => (
              <article key={item.index}>
                <span>{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reputation" aria-labelledby="reputation-title">
          <div className="shell reputation-layout">
            <div className="reputation-score">
              <span className="kicker">06 / Репутация</span>
              <strong>4,9</strong>
              <p>Рейтинг «Аутсорсинг ДВ» в 2ГИС на момент подготовки сайта.</p>
              <a className="text-link" href={siteConfig.links.twoGis} target="_blank" rel="noreferrer">Открыть карточку компании ↗</a>
            </div>
            <div className="reputation-copy">
              <h2 id="reputation-title">Клиенты отмечают не громкие обещания, а работу по существу.</h2>
              <div className="reputation-signals">
                <div><span>01</span><p>Понятные объяснения и честная оценка перспектив.</p></div>
                <div><span>02</span><p>Постоянная связь и контроль движения дела.</p></div>
                <div><span>03</span><p>Подготовка документов и уверенное представительство в суде.</p></div>
                <div><span>04</span><p>Возможность полностью передать процесс профильному специалисту.</p></div>
              </div>
              <small>Формулировки обобщают публичные отзывы. Полные тексты доступны в карточке 2ГИС.</small>
            </div>
          </div>
        </section>

        <section className="section section-ink geography-v3" aria-labelledby="geography-title">
          <div className="shell geography-v3-layout">
            <div className="geography-v3-copy">
              <span className="kicker kicker-on-dark">07 / География</span>
              <h2 id="geography-title">Хабаровск — офис. Дальний Восток — рабочая территория.</h2>
              <p>Очно принимаем на улице Гамарника. Дистанционно обмениваемся документами, проводим консультации и сопровождаем дела в регионах ДФО.</p>
              <div className="geography-v3-actions">
                <a className="button button-copper" href={siteConfig.links.twoGis} target="_blank" rel="noreferrer">Маршрут в офис <span aria-hidden="true">↗</span></a>
                <a className="text-link text-link-light" href={siteConfig.links.telegram} target="_blank" rel="noreferrer">Написать в Telegram ↗</a>
              </div>
            </div>
            <div className="region-index" aria-label="Приоритетные регионы работы">
              <div className="region-index-head"><span>Код</span><span>Регион</span><span>Формат</span></div>
              {geography.map(([code, region]) => (
                <div key={code}><span>{code}</span><strong>{region}</strong><span>Очно / дистанционно</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section consultation-v3" id="consultation" aria-labelledby="consultation-title">
          <div className="shell consultation-v3-layout">
            <div className="consultation-v3-copy">
              <span className="kicker">08 / Первый шаг</span>
              <h2 id="consultation-title">Начните с анализа ситуации и документов.</h2>
              <p>На первичной консультации юрист оценивает сроки, риски, возможные сценарии и объясняет, что имеет смысл делать дальше.</p>
              <div className="consultation-v3-price">
                <span>Стоимость</span>
                <strong>{siteConfig.consultationPrice}</strong>
                <small>60–90 минут · очно или дистанционно</small>
              </div>
            </div>
            <ConsultationForm />
          </div>
        </section>

        <section className="section contacts-v3" id="contacts" aria-labelledby="contacts-title">
          <div className="shell contacts-v3-head">
            <span className="kicker">09 / Контакты</span>
            <h2 id="contacts-title">Офис в Хабаровске.</h2>
            <p>Приём по предварительной записи. Свяжитесь с фирмой, чтобы согласовать время и перечень документов.</p>
          </div>
          <div className="shell contacts-v3-grid">
            <div><span>Адрес</span><strong>ул. Гамарника, 72<br />офис 302, 3 этаж</strong></div>
            <div><span>График</span><strong>Пн–Пт<br />09:00–18:00</strong></div>
            {siteConfig.phones.map((contact) => (
              <div key={contact.id}>
                <span>{contact.name}</span>
                <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
              </div>
            ))}
            <div><span>Email</span><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
          </div>
          <div className="shell contacts-v3-links">
            <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a>
            <a href={siteConfig.links.telegram} target="_blank" rel="noreferrer">Telegram ↗</a>
            <a href={siteConfig.links.vk} target="_blank" rel="noreferrer">ВКонтакте ↗</a>
            <a href={siteConfig.links.twoGis} target="_blank" rel="noreferrer">2ГИС ↗</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
