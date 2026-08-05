import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { Service } from "@/data/services";
import { siteConfig } from "@/data/site";

type ServicePageProps = { service: Service };

export function ServicePage({ service }: ServicePageProps) {
  return (
    <>
      <Header />
      <main id="main">
        <section className="subpage-hero">
          <div className="shell">
            <div className="breadcrumbs">
              <Link href="/">Главная</Link><span>/</span><span>{service.breadcrumb}</span>
            </div>

            <div className="subpage-hero-grid">
              <div>
                <span className="section-label section-label-light">Практика {service.index}</span>
                <h1>{service.title}</h1>
              </div>
              <div>
                <p>{service.intro}</p>
                <Link className="button button-accent" href="/#consultation">
                  {service.ctaLabel}<span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>

            <div className="subpage-meta">
              {service.meta.map((item) => (
                <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell content-grid">
            <aside className="sticky-aside">
              <span className="section-label">Содержание</span>
              <nav aria-label="Содержание страницы">
                {service.sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`}>{section.navLabel}</a>
                ))}
              </nav>
            </aside>

            <div>
              {service.sections.map((section) => (
                <section className="content-block" id={section.id} key={section.id}>
                  <h2>{section.title}</h2>
                  {section.lead ? <p className="lead">{section.lead}</p> : null}
                  {section.items?.length ? (
                    <ul className="content-list">
                      {section.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  ) : null}
                  {section.notice ? (
                    <div className="notice-box">
                      <strong>{section.notice.title}</strong>
                      <p>{section.notice.text}</p>
                    </div>
                  ) : null}
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-band">
          <div className="shell cta-band-grid">
            <div>
              <span className="section-label section-label-light">Следующий шаг</span>
              <h2>{service.cta.title}</h2>
              <p>{service.cta.text}</p>
            </div>
            <div className="cta-band-actions">
              <Link className="button button-accent" href="/#consultation">
                {service.cta.primary}<span aria-hidden="true">↗</span>
              </Link>
              <a className="button button-outline-light" href={`tel:${siteConfig.phone}`}>
                Позвонить<span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
