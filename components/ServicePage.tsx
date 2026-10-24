import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Service } from "@/data/services";
import { siteConfig } from "@/data/site";

export function ServicePage({ service }: { service: Service }) {
  const contact = service.slug === "criminal"
    ? siteConfig.phones.find((person) => person.id === "ekaterina") ?? siteConfig.phones[0]
    : siteConfig.phones[0];

  const pageTitle = service.seoTitle.replace(" — Аутсорсинг ДВ", "");

  return (
    <>
      <Header />
      <main id="main" className="ed-service-page">
        <section className="ed-service-hero">
          <div className="shell">
            <nav aria-label="Хлебные крошки" className="ed-service-crumbs">
              <Link href="/">Главная</Link><span>/</span><Link href="/services">Практики</Link><span>/</span><span aria-current="page">{service.breadcrumb}</span>
            </nav>
            <div className="ed-service-hero-layout">
              <div>
                <span className="ed-eyebrow"><span className="ed-rule" /> Практика {service.index} / Аутсорсинг ДВ</span>
                <h1>{pageTitle}</h1>
                <p>{service.intro}</p>
                <div className="ed-service-hero-actions">
                  <Link className="ed-btn ed-btn-light" href="/consultation">Обсудить ситуацию <span aria-hidden="true">↗</span></Link>
                  <a href={"tel:" + contact.phone} className="ed-text-link ed-on-dark">{contact.phoneDisplay} <span aria-hidden="true">↗</span></a>
                </div>
              </div>
              <aside className="ed-service-credentials" aria-label="Параметры услуги">
                <span>Кратко о направлении</span>
                {service.meta.map((item) => <div key={item.label}><small>{item.label}</small><strong>{item.value}</strong></div>)}
                <p>Стоимость первичной консультации — {siteConfig.consultationPrice}.</p>
              </aside>
            </div>
          </div>
        </section>

        <section className="ed-service-body">
          <div className="shell ed-service-body-layout">
            <aside className="ed-service-index">
              <span className="ed-eyebrow"><span className="ed-rule" /> На этой странице</span>
              <nav aria-label="Разделы практики">
                {service.sections.map((section, index) => (
                  <a href={"#" + section.id} key={section.id}><span>0{index + 1}</span>{section.navLabel} <span aria-hidden="true">↗</span></a>
                ))}
              </nav>
              <p>Не нашли свой случай? Обращайтесь за первичной оценкой: юридическая квалификация ситуации определяется по документам.</p>
            </aside>
            <div className="ed-service-sections">
              {service.sections.map((section, index) => (
                <section className="ed-service-block" id={section.id} key={section.id}>
                  <span className="ed-service-block-n">0{index + 1} / {section.navLabel}</span>
                  <h2>{section.title.charAt(0) + section.title.slice(1).toLocaleLowerCase("ru-RU")}</h2>
                  {section.lead && <p className="ed-service-lead">{section.lead}</p>}
                  {section.items?.length ? (
                    <ul className="ed-service-items">{section.items.map((item) => <li key={item}><span aria-hidden="true">↗</span>{item}</li>)}</ul>
                  ) : null}
                  {section.notice && (
                    <div className="ed-service-notice"><span>Важно</span><div><h3>{section.notice.title}</h3><p>{section.notice.text}</p></div></div>
                  )}
                </section>
              ))}
            </div>
          </div>
        </section>
        <section className="ed-service-next">
          <div className="shell ed-service-next-layout">
            <div><span className="ed-eyebrow"><span className="ed-rule" /> Консультация</span><h2>{service.cta.title.charAt(0) + service.cta.title.slice(1).toLocaleLowerCase("ru-RU")}</h2><p>{service.cta.text}</p></div>
            <div><Link href="/consultation" className="ed-btn ed-btn-light">Записаться <span aria-hidden="true">↗</span></Link><a href={"tel:" + contact.phone}>Позвонить: {contact.name} · {contact.phoneDisplay}</a></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
