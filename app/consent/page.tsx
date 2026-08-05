import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Согласие на обработку персональных данных",
  robots: { index: false, follow: true },
};

export default function ConsentPage() {
  return (
    <>
      <Header />
      <main className="legal-page" id="main">
        <div className="container legal-wrap">
          <div className="draft-banner">
            <strong>Черновик.</strong> Текст необходимо проверить и утвердить до
            запуска формы на рабочем домене.
          </div>
          <span className="eyebrow">ЮРИДИЧЕСКИЙ ДОКУМЕНТ</span>
          <h1>СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ</h1>
          <p>
            Оставляя данные в форме сайта, пользователь подтверждает, что
            предоставляет их добровольно для получения обратной связи по
            юридическому вопросу.
          </p>

          <h2>Предполагаемый оператор</h2>
          <p>
            {siteConfig.legalName}, ИНН {siteConfig.inn}, ОГРНИП {siteConfig.ogrnip}.
          </p>

          <h2>Перечень данных</h2>
          <p>
            Имя, номер телефона, выбранная категория обращения и текст сообщения.
          </p>

          <h2>Цель</h2>
          <p>
            Обработка обращения, связь с пользователем и организация консультации.
          </p>

          <h2>Отзыв согласия</h2>
          <p>
            Порядок отзыва согласия и срок хранения данных должны быть дополнены
            после выбора хостинга, CRM и способа обработки заявок.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
