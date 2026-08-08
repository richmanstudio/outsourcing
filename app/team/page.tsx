import type { Metadata } from "next";
import Link from "next/link";
import { CorporateHero } from "@/components/CorporateHero";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Команда",
  description: "Юристы «Аутсорсинг ДВ»: Ольга Богачёва, Екатерина Федорова и Анна Радченко.",
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <main id="main">
        <CorporateHero
          index="02"
          label="Команда"
          title="Профильные специалисты вместо обезличенного «юридического отдела»."
          lead="Каждый специалист работает со своими категориями дел. На персональных страницах собраны специализация, профессиональный путь, показатели и прямой контакт."
          backHref="/"
          backLabel="Главная"
        />

        <section className="section corp-section">
          <div className="shell team-directory">
            {team.map((person) => (
              <article className="team-directory-card" key={person.id}>
                <Link className="team-directory-photo" href={`/team/${person.slug}`}>
                  <img src={`${process.env.PAGES_BASE_PATH ?? ""}${person.image}`} alt={person.name} width="720" height="960" loading="eager" />
                </Link>
                <div className="team-directory-meta"><span>{person.index}</span><span>{person.role}</span></div>
                <h2><Link href={`/team/${person.slug}`}>{person.name}</Link></h2>
                <p className="team-directory-focus">{person.focus}</p>
                <div className="team-directory-actions">
                  <Link className="text-link" href={`/team/${person.slug}`}>Профиль специалиста ↗</Link>
                  <a className="text-link" href={`tel:${person.phone}`}>{person.phoneDisplay}</a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
