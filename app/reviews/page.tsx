import type { Metadata } from "next";
import { CorporateHero } from "@/components/CorporateHero";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { reviewHighlights, reviewSummary } from "@/data/reviews";

export const metadata: Metadata = { title: "Отзывы", description: "Публичная репутация и отзывы о юридической фирме «Аутсорсинг ДВ»." };

export default function ReviewsPage() {
  return <><Header /><main id="main"><CorporateHero index="08" label="Отзывы" title="Репутация, которую можно проверить в источнике." lead="На сайте не публикуются придуманные цитаты. Ниже — краткие резюме тем из публичных отзывов; оригиналы доступны в 2ГИС." backHref="/" backLabel="Главная"><a className="button button-copper" href={reviewSummary.sourceUrl} target="_blank" rel="noreferrer">Открыть отзывы в 2ГИС <span aria-hidden="true">↗</span></a></CorporateHero><section className="section corp-section"><div className="shell reviews-summary"><div className="reviews-score"><strong>{reviewSummary.rating}</strong><span>рейтинг в {reviewSummary.source}</span><small>{reviewSummary.count} публичных отзывов в карточке компании</small></div><div className="review-highlight-list">{reviewHighlights.map((item, index) => <article key={item.category}><span>{String(index+1).padStart(2,"0")}</span><div><h2>{item.category}</h2><p>{item.text}</p><a href={item.sourceUrl} target="_blank" rel="noreferrer">Источник: {item.source} ↗</a></div></article>)}</div></div></section></main><Footer /></>;
}
