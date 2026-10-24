import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CorporateHero } from "@/components/CorporateHero";
import { reviewSummary } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Отзывы",
  description: "Публичная репутация юридической фирмы «Аутсорсинг ДВ»: проверяемый источник отзывов.",
};

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <CorporateHero
          index="08"
          label="Отзывы"
          title="Доверие подтверждается не лозунгом, а источником."
          lead="Не публикуем придуманные отзывы или обезличенные истории успеха. Оценки и полный текст обратной связи доступны в независимом справочнике."
          backHref="/"
          backLabel="Главная"
        />
        <section className="section corp-section ed-reviews-page">
          <div className="shell ed-reviews-source">
            <div><span className="ed-eyebrow"><span className="ed-rule" /> Проверить информацию</span><h2>Отзывы о фирме в 2ГИС</h2><p>Переходите к первоисточнику: там можно прочитать полные тексты отзывов, посмотреть даты публикации и актуальную оценку компании.</p></div>
            <div className="ed-reviews-source-score"><strong>{reviewSummary.rating}</strong><span>Оценка по данным, указанным на сайте фирмы</span><p>{reviewSummary.count} опубликованных отзывов по данным сайта. Показатели могут изменяться.</p><a className="ed-btn ed-btn-dark" href={reviewSummary.sourceUrl} target="_blank" rel="noopener noreferrer">Открыть отзывы в 2ГИС <span aria-hidden="true">↗</span></a></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
