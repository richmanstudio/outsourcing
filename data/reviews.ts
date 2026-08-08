export type ReviewHighlight = {
  category: string;
  text: string;
  source: string;
  sourceUrl: string;
};

export const reviewSummary = {
  rating: "4,9",
  count: "16",
  source: "2ГИС",
  sourceUrl: "https://2gis.ru/khabarovsk/firm/70000001059993176/tab/reviews",
};

// Ниже — не дословные цитаты, а краткое резюме тем из публичных отзывов.
export const reviewHighlights: ReviewHighlight[] = [
  {
    category: "Наследственные и имущественные вопросы",
    text: "В публичных отзывах клиенты отмечают понятные объяснения, подготовку документов и последовательное ведение дела.",
    source: "2ГИС",
    sourceUrl: reviewSummary.sourceUrl,
  },
  {
    category: "Семейные споры",
    text: "Клиенты отдельно отмечают вовлечённость специалиста, связь по ходу процесса и спокойное объяснение следующих действий.",
    source: "2ГИС",
    sourceUrl: reviewSummary.sourceUrl,
  },
  {
    category: "Сопровождение бизнеса",
    text: "Корпоративные отзывы описывают формат постоянной юридической поддержки и участие специалистов в судебной работе по регионам.",
    source: "2ГИС",
    sourceUrl: reviewSummary.sourceUrl,
  },
];
