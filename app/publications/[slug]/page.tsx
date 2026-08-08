import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { publicationBySlug, publications } from "@/data/publications";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return publications.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const item = publicationBySlug.get(slug); return item ? { title: item.title, description: item.description } : {}; }

export default async function PublicationPage({ params }: Props) {
  const { slug } = await params; const item = publicationBySlug.get(slug); if (!item) notFound();
  return <><Header /><main id="main"><article className="publication-article"><div className="shell publication-article-head"><div className="corp-breadcrumbs corp-breadcrumbs-dark"><Link href="/">Главная</Link><span>/</span><Link href="/publications">Публикации</Link></div><span className="kicker kicker-on-dark">{item.eyebrow}</span><h1>{item.title}</h1><p>{item.description}</p><div><time>{item.date}</time><span>{item.readingTime}</span></div></div></article><section className="section corp-section"><div className="shell publication-body">{item.sections.map((section, index) => <section key={section.title}><span>{String(index+1).padStart(2,"0")}</span><div><h2>{section.title}</h2><p>{section.text}</p></div></section>)}<aside>Материал носит общий информационный характер и не является заключением по конкретной ситуации.</aside></div></section></main><Footer /></>;
}
