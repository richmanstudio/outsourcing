import type { Metadata } from "next";
import { ConsultationForm } from "@/components/ConsultationForm";
import { CorporateHero } from "@/components/CorporateHero";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Консультация",
  description: "Запись на первичную юридическую консультацию в «Аутсорсинг ДВ». Стоимость — 2 500 ₽.",
};

export default function ConsultationPage() {
  return (
    <>
      <Header />
      <main id="main">
        <CorporateHero index="06" label="Консультация" title="Первичный анализ до принятия процессуальных решений." lead="На консультации юрист разбирает факты, документы, сроки и возможные сценарии. Стоимость первичной консультации — 2 500 ₽." backHref="/" backLabel="Главная" />

        <section className="section consultation-corporate"><div className="shell consultation-corporate-grid"><div><span className="kicker">Что входит</span><h2>60–90 минут, чтобы понять ситуацию и следующий шаг.</h2><ol className="consultation-steps"><li><span>01</span><p>Разбираем хронологию и участников ситуации.</p></li><li><span>02</span><p>Проверяем документы и процессуальные сроки.</p></li><li><span>03</span><p>Определяем ключевые правовые риски.</p></li><li><span>04</span><p>Формулируем возможные варианты дальнейших действий.</p></li></ol><div className="consultation-price-card"><span>Первичная консультация</span><strong>{siteConfig.consultationPrice}</strong><small>очно в Хабаровске или дистанционно</small></div></div><ConsultationForm /></div></section>
      </main>
      <Footer />
    </>
  );
}
