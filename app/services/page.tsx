import type { Metadata } from "next";
import Link from "next/link";
import { CorporateHero } from "@/components/CorporateHero";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Практики",
  description: "Юридические практики «Аутсорсинг ДВ»: арбитраж, наследство, семейные и имущественные споры, сопровождение бизнеса.",
};

export default function ServicesIndexPage() {
  return (
    <>
      <Header />
      <main id="main">
        <CorporateHero
          index="03"
          label="Практики"
          title="Конкретные категории дел вместо обещания «решить любой вопрос»."
          lead="Выберите направление. На каждой странице — типовые ситуации, порядок работы, документы для первичной оценки и следующий шаг."
          backHref="/"
          backLabel="Главная"
        />

        <section className="section corp-section">
          <div className="shell services-directory">
            {services.map((service) => (
              <Link className="services-directory-row" href={`/services/${service.slug}`} key={service.slug}>
                <span className="services-directory-index">{service.index}</span>
                <div><span className="services-directory-audience">{service.meta[0]?.value}</span><h2>{service.breadcrumb}</h2></div>
                <p>{service.intro}</p>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="section corp-note-section"><div className="shell corp-note"><span className="kicker">Не нашли категорию?</span><p>Не каждое обращение требует отдельной публичной страницы. Опишите ситуацию — фирма определит профиль вопроса и подходящего специалиста.</p><Link className="button button-dark" href="/consultation">Описать ситуацию <span aria-hidden="true">↗</span></Link></div></section>
      </main>
      <Footer />
    </>
  );
}
