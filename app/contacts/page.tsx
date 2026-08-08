import type { Metadata } from "next";
import { CorporateHero } from "@/components/CorporateHero";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/data/site";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Контакты юридической фирмы «Аутсорсинг ДВ» в Хабаровске: Гамарника, 72, офис 302.",
};

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <CorporateHero index="05" label="Контакты" title="Офис в Хабаровске. Прямые контакты специалистов." lead="Приём по предварительной записи. Можно обратиться по основному номеру фирмы или напрямую к профильному юристу." backHref="/" backLabel="Главная" />

        <section className="section corp-section"><div className="shell contacts-corporate-grid"><article className="contacts-office"><span className="kicker">Офис</span><h2>ул. Гамарника, 72<br />офис 302, 3 этаж</h2><p>{siteConfig.hours}</p><a className="button button-dark" href={siteConfig.links.twoGis} target="_blank" rel="noreferrer">Открыть маршрут в 2ГИС <span aria-hidden="true">↗</span></a></article><div className="contacts-directory">{team.map((person) => <article key={person.id}><span>{person.role}</span><h3>{person.name}</h3><p>{person.shortRole}</p><a href={`tel:${person.phone}`}>{person.phoneDisplay}</a></article>)}</div></div></section>

        <section className="section section-ink corp-section"><div className="shell corp-split"><div><span className="kicker kicker-on-dark">Каналы связи</span></div><div className="contact-channel-grid"><a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>Написать ↗</strong></a><a href={siteConfig.links.telegram} target="_blank" rel="noreferrer"><span>Telegram</span><strong>Открыть ↗</strong></a><a href={siteConfig.links.vk} target="_blank" rel="noreferrer"><span>ВКонтакте</span><strong>Открыть ↗</strong></a><a href={`mailto:${siteConfig.email}`}><span>Email</span><strong>{siteConfig.email}</strong></a></div></div></section>
      </main>
      <Footer />
    </>
  );
}
