import type { Metadata } from "next";
import Link from "next/link";
import { CorporateHero } from "@/components/CorporateHero";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Бизнесу",
  description: "Юридический аутсорсинг и сопровождение бизнеса в Хабаровске и на Дальнем Востоке.",
};

const scope = ["Договорная работа", "Претензии и ответы", "Взыскание задолженности", "Арбитражные споры", "Корпоративные вопросы", "Банкротные дела", "Взаимодействие с государственными органами", "Исполнительное производство"];

export default function BusinessPage() {
  return (
    <>
      <Header />
      <main id="main">
        <CorporateHero
          index="04"
          label="Бизнесу"
          title="Юридическая функция, встроенная в работу компании."
          lead="Постоянное сопровождение позволяет не начинать правовой анализ с нуля при каждой новой задаче: юрист понимает договоры, контрагентов, текущие споры и приоритеты бизнеса."
          backHref="/"
          backLabel="Главная"
        ><Link className="button button-copper" href="/consultation">Обсудить сопровождение <span aria-hidden="true">↗</span></Link></CorporateHero>

        <section className="section corp-section"><div className="shell corp-split"><div><span className="kicker">01 / Контур работы</span></div><div><h2>Что можно передать на сопровождение</h2><div className="business-service-grid">{scope.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}</div></div></div></section>

        <section className="section section-ink corp-section"><div className="shell corp-split"><div><span className="kicker kicker-on-dark">02 / Модель</span></div><div><h2 className="corp-light-title">Не набор разовых консультаций, а постоянный контекст.</h2><div className="business-model-grid"><article><span>01</span><h3>Диагностика</h3><p>Определяем текущие договоры, споры, риски и юридическую нагрузку.</p></article><article><span>02</span><h3>Регламент</h3><p>Фиксируем перечень задач, порядок постановки вопросов и сроки реакции.</p></article><article><span>03</span><h3>Работа</h3><p>Юрист подключается к текущим задачам и ведёт отдельные судебные процессы.</p></article><article><span>04</span><h3>Контроль</h3><p>Руководитель понимает статус юридических вопросов и следующие действия.</p></article></div></div></div></section>

        <section className="section corp-section"><div className="shell corp-split"><div><span className="kicker">03 / Когда подходит</span></div><div className="corp-prose"><h2>Для компаний, которым уже недостаточно обращаться к юристу только после возникновения проблемы.</h2><p>Формат особенно полезен, когда регулярно появляются договоры, дебиторская задолженность, претензии, вопросы с контрагентами или арбитражные процессы.</p><p>Стоимость постоянного сопровождения определяется после оценки реального объёма задач. Первичная консультация для знакомства с ситуацией — 2 500 ₽.</p></div></div></section>

        <section className="section corp-cta"><div className="shell corp-cta-layout"><div><span className="kicker kicker-on-dark">Следующий шаг</span><h2>Покажите текущую юридическую нагрузку — предложим рабочий формат сопровождения.</h2></div><Link className="button button-ice" href="/consultation">Обсудить задачи <span aria-hidden="true">↗</span></Link></div></section>
      </main>
      <Footer />
    </>
  );
}
