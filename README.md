# Аутсорсинг ДВ

Сайт юридической компании «Аутсорсинг ДВ» на TypeScript, Next.js App Router и React.

## Технологии

- TypeScript
- Next.js App Router
- React
- статический экспорт Next.js
- GitHub Actions
- GitHub Pages

## Локальный запуск

```bash
npm install
npm run dev
```

Откройте `http://localhost:3000`.

## Проверка

```bash
npm run typecheck
npm run lint
npm run build
```

После `npm run build` статическая версия формируется в каталоге `out`.

## Публикация

Workflow `.github/workflows/deploy-pages.yml` автоматически:

1. устанавливает зависимости;
2. проверяет TypeScript;
3. собирает статический экспорт;
4. загружает каталог `out` в GitHub Pages;
5. публикует сайт после каждого push в `main`.

Адрес проекта на GitHub Pages:

`https://richmanstudio.github.io/outsourcing/`

## Переменные окружения

Локально можно создать `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://ваш-домен.ru
```

В GitHub Actions URL и базовый путь определяются автоматически через `actions/configure-pages`.

## Перед коммерческой публикацией

- подтвердить биографии и показатели специалистов;
- добавить утверждённые фотографии команды;
- добавить реальные кейсы и отзывы с согласиями;
- утвердить политику обработки персональных данных и согласие;
- при необходимости подключить собственный домен и серверную обработку формы.
