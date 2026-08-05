import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="not-found" id="main">
        <div className="container">
          <span className="eyebrow">404 / СТРАНИЦА НЕ НАЙДЕНА</span>
          <h1>ТАКОЙ СТРАНИЦЫ НЕТ</h1>
          <p>Вернитесь на главную или выберите нужное направление практики.</p>
          <Link className="button button-primary" href="/">
            На главную
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
