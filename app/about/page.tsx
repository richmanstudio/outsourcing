import type { Metadata } from "next";
import Link from "next/link";
import { CorporateHero } from "@/components/CorporateHero";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "О фирме",
  description: "О юридической фирме «Аутсорсинг ДВ»: судебный опыт, подход к работе и география практики.",
};

const timeline = [
  ["2010–2011", "Банкротный состав Арбитражного суда Хабаровского края", "Секретарь судебного заседания"],
  ["2012–2014", "Арбитражный суд Хабаровского края", "Помощник судьи"],
  ["2014–2016", "Арбитражный суд Дальневосточного округа", "Помощник заместителя председателя"],
  ["с 2017", "Самостоятельная юридическая практика", "Защита интересов граждан и бизнеса"],
] as const;

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main">
        <CorporateHero
          index="01"
          label="О фирме"
          title="Юридическая практика, построенная на опыте судебной системы."
          lead="«Аутсорсинг ДВ» работает со сложными судебными спорами граждан и бизнеса. Основа подхода — анализ фактов, доказательств и процессуальных рисков до начала активных действий."
          backHref="/"
          backLabel="Главная"
        >
          <Link className="button button-copper" href="/team">Познакомиться с командой <span aria-hidden="true">↗</span></Link>
        </CorporateHero>

        <section className="section corp-section">
          <div className="shell corp-split">
            <div><span className="kicker">01 / Позиция</span></div>
            <div className="corp-prose">
              <h2>Не обещать исход. Отвечать за качество позиции.</h2>
              <p>Фирма начинает работу с проверки документов, сроков и доказательств. Клиент получает понятное объяснение возможных сценариев, а затем — согласованную стратегию и процессуальное сопровождение.</p>
              <p>Приоритетные направления — арбитраж, наследственные, семейные и имущественные споры, а также постоянная юридическая поддержка бизнеса.</p>
            </div>
          </div>
        </section>

        <section className="section section-ink corp-section">
          <div className="shell corp-split">
            <div><span className="kicker kicker-on-dark">02 / Судебный опыт</span></div>
            <div>
              <h2 className="corp-light-title">Опыт внутри арбитражных судов — часть профессиональной базы фирмы.</h2>
              <div className="corp-timeline">
                {timeline.map(([period, place, role]) => (
                  <article key={period}><time>{period}</time><strong>{role}</strong><p>{place}</p></article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section corp-section">
          <div className="shell corp-split">
            <div><span className="kicker">03 / Принципы</span></div>
            <div className="corp-principles">
              <article><span>01</span><h3>Факты раньше выводов</h3><p>Сначала восстанавливаем события и доказательства, затем формируем правовую конструкцию.</p></article>
              <article><span>02</span><h3>Стратегия раньше процесса</h3><p>Суд — не автоматический первый шаг. Сравниваем переговоры, претензию и судебное разбирательство.</p></article>
              <article><span>03</span><h3>Понятная коммуникация</h3><p>Клиент понимает риски, следующий шаг и текущее состояние дела без юридического тумана.</p></article>
              <article><span>04</span><h3>Профильная ответственность</h3><p>Дело ведёт специалист, чья практика соответствует конкретной категории спора.</p></article>
            </div>
          </div>
        </section>

        <section className="section corp-cta">
          <div className="shell corp-cta-layout"><div><span className="kicker kicker-on-dark">Команда</span><h2>Три профильных юриста. Разные отрасли права. Одна система работы.</h2></div><Link className="button button-ice" href="/team">Открыть команду <span aria-hidden="true">↗</span></Link></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
