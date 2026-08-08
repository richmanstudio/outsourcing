import type { Metadata } from "next";
import Link from "next/link";
import { CorporateHero } from "@/components/CorporateHero";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { publications } from "@/data/publications";

export const metadata: Metadata = { title: "Экспертиза и публикации", description: "Практические материалы юридической фирмы «Аутсорсинг ДВ»." };

export default function PublicationsPage() {
  return <><Header /><main id="main">
    <CorporateHero index="07" label="Экспертиза" title="Юридические материалы без информационного шума." lead="Короткие разборы о подготовке к спору, судебной стратегии и юридической работе бизнеса. Публикации носят информационный характер и не заменяют консультацию по конкретному делу." backHref="/" backLabel="Главная" />
    <section className="section corp-section"><div className="shell publication-directory">{publications.map((item, index) => <Link href={`/publications/${item.slug}`} className="publication-card" key={item.slug}><span>{String(index+1).padStart(2,"0")} · {item.eyebrow}</span><h2>{item.title}</h2><p>{item.description}</p><div><time>{item.date}</time><strong>{item.readingTime} ↗</strong></div></Link>)}</div></section>
  </main><Footer /></>;
}
