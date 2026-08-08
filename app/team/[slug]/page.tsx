import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StructuredData } from "@/components/StructuredData";
import { getAbsoluteSiteUrl } from "@/data/site";
import { team, teamBySlug } from "@/data/team";

type PersonRouteProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return team.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({ params }: PersonRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const person = teamBySlug.get(slug);
  if (!person) return {};
  return {
    title: person.name,
    description: `${person.name} — ${person.role}. ${person.focus}`,
    alternates: { canonical: getAbsoluteSiteUrl(`team/${person.slug}`) },
  };
}

export default async function PersonPage({ params }: PersonRouteProps) {
  const { slug } = await params;
  const person = teamBySlug.get(slug);
  if (!person) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    telephone: person.phone,
    image: getAbsoluteSiteUrl(person.image.replace(/^\//, "")),
    worksFor: { "@type": "LegalService", name: "Аутсорсинг ДВ", url: getAbsoluteSiteUrl() },
  };

  return (
    <>
      <StructuredData data={schema} />
      <Header />
      <main id="main">
        <section className="person-hero">
          <div className="shell person-hero-shell">
            <div className="corp-breadcrumbs corp-breadcrumbs-dark"><Link href="/">Главная</Link><span>/</span><Link href="/team">Команда</Link><span>/</span><span>{person.name}</span></div>
            <div className="person-hero-grid">
              <div className="person-hero-photo"><img src={`${process.env.PAGES_BASE_PATH ?? ""}${person.image}`} alt={person.name} width="900" height="1200" /></div>
              <div className="person-hero-copy">
                <span className="kicker kicker-on-dark">{person.index} / {person.role}</span>
                <h1>{person.name}</h1>
                <p className="person-hero-focus">{person.focus}</p>
                <p>{person.statement}</p>
                <div className="person-hero-actions"><a className="button button-copper" href={`tel:${person.phone}`}>Позвонить {person.phoneDisplay} <span aria-hidden="true">↗</span></a><Link className="text-link text-link-light" href="/consultation">Записаться на консультацию ↗</Link></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section corp-section">
          <div className="shell person-profile-grid">
            <div><span className="kicker">Профессиональный профиль</span><div className="person-metric-grid">{person.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div></div>
            <div className="corp-prose"><h2>Опыт и специализация</h2><ul className="person-experience-list">{person.experience.map((item) => <li key={item}>{item}</li>)}</ul><p className="source-note">{person.sourceNote}</p></div>
          </div>
        </section>

        <section className="section corp-cta"><div className="shell corp-cta-layout"><div><span className="kicker kicker-on-dark">Обращение</span><h2>Опишите ситуацию — определим, относится ли вопрос к практике специалиста.</h2></div><Link className="button button-ice" href="/consultation">Записаться <span aria-hidden="true">↗</span></Link></div></section>
      </main>
      <Footer />
    </>
  );
}
