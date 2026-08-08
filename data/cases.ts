export type CaseStudy = {
  slug: string;
  title: string;
  practice: string;
  summary: string;
  result: string;
  lawyerId?: string;
  publishedAt: string;
};

// Реальные кейсы публикуются только после обезличивания материалов и согласования с клиентом.
export const cases: CaseStudy[] = [];

export const caseCategories = [
  "Арбитраж",
  "Наследство",
  "Семейные споры",
  "Имущество и жильё",
  "Уголовные дела",
  "Сопровождение бизнеса",
] as const;
