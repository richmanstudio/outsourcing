import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="legal-page" id="main">
        <div className="container legal-wrap">
          <div className="draft-banner">
            <strong>Черновик.</strong> Перед публикацией документ должен быть
            проверен и утверждён оператором персональных данных.
          </div>
          <span className="eyebrow">ЮРИДИЧЕСКИЙ ДОКУМЕНТ</span>
          <h1>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</h1>

          <h2>1. Общие положения</h2>
          <p>
            Настоящая страница является рабочим шаблоном политики обработки
            персональных данных для сайта юридической компании «Аутсорсинг ДВ».
          </p>

          <h2>2. Оператор</h2>
          <p>
            Предполагаемый оператор: {siteConfig.legalName}, ИНН {siteConfig.inn},
            ОГРНИП {siteConfig.ogrnip}. Контактный email: {siteConfig.email}.
          </p>

          <h2>3. Какие данные обрабатываются</h2>
          <ul>
            <li>имя;</li>
            <li>номер телефона;</li>
            <li>содержание обращения;</li>
            <li>
              технические данные, которые могут передаваться хостинг-провайдеру.
            </li>
          </ul>

          <h2>4. Цели обработки</h2>
          <p>
            Обратная связь, запись на консультацию, подготовка ответа на обращение
            и исполнение договора при его заключении.
          </p>

          <h2>5. Важное замечание</h2>
          <p>
            Форма текущего прототипа не отправляет данные на сервер сайта. Она
            формирует текст сообщения и открывает WhatsApp; пользователь
            самостоятельно подтверждает отправку.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
