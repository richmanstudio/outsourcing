import type { Metadata } from "next";
import Link from "next/link";
import { CorporateHero } from "@/components/CorporateHero";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { caseCategories, cases } from "@/data/cases";

export const metadata: Metadata = {
  title: "Судебная практика",
  description: "Система кейсов и судебной практики юридической фирмы «Аутсорсинг ДВ».",
};

export default function CasesPage() {
  return (
    <><Header /><main id="main">
      <CorporateHero index="06" label="Судебная практика" title="Результаты без рекламных обещаний." lead="Кейсы публикуются только после обезличивания материалов и согласования. На странице не будет вымышленных дел или неподтверждённых результатов." backHref="/" backLabel="Главная" />
      <section className="section corp-section"><div className="shell portal-grid-two">
        <div><span className="kicker">Категории</span><div className="case-category-list">{caseCategories.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2,"0")}</span><strong>{item}</strong></div>)}</div></div>
        <div className="cases-state"><span className="kicker">Публикация</span><h2>{cases.length ? "Опубликованные дела" : "Первые кейсы готовятся к публикации."}</h2><p>От заказчика ожидаются обезличенные судебные акты, описание исходной ситуации, стратегия и разрешённый к публикации результат. После получения материалов каждый кейс получит отдельную страницу.</p><Link className="button button-dark" href="/contacts">Связаться с фирмой <span aria-hidden="true">↗</span></Link></div>
      </div></section>
    </main><Footer /></>
  );
}
