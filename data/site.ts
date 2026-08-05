export const siteConfig = {
  name: "Аутсорсинг ДВ",
  descriptor: "Юридическая компания",
  description:
    "Юридическая помощь в Хабаровске и по Дальнему Востоку. Арбитраж, наследственные, семейные, жилищные и имущественные споры.",
  legalName: "ИП Богачёва Ольга Анатольевна",
  inn: "270391742760",
  ogrnip: "323270000003871",
  phone: "+79141740873",
  phoneDisplay: "+7 914 174-08-73",
  email: "bogachevaolgajr@yandex.ru",
  address: {
    street: "ул. Гамарника, 72, офис 302",
    short: "Гамарника, 72 · офис 302",
    city: "Хабаровск",
    region: "Хабаровский край",
    postalCode: "680020",
  },
  hours: "Пн–Пт · 09:00–18:00",
  consultationPrice: "5 000 ₽",
  links: {
    whatsapp: "https://wa.me/79141740873",
    telegram: "https://t.me/outsourcing_dv",
    vk: "https://vk.com/outsourcing_dv",
    twoGis: "https://2gis.ru/khabarovsk/firm/70000001059993176",
  },
} as const;

const FALLBACK_SITE_URL = "https://richmanstudio.github.io/outsourcing/";

export const getSiteUrl = (): URL => {
  const value = process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL;

  try {
    const url = new URL(value);
    if (!url.pathname.endsWith("/")) url.pathname += "/";
    return url;
  } catch {
    return new URL(FALLBACK_SITE_URL);
  }
};

export const getAbsoluteSiteUrl = (path = ""): string => {
  const baseUrl = getSiteUrl();
  const normalizedBasePath = baseUrl.pathname.replace(/\/$/, "");
  const normalizedPath = path.replace(/^\//, "").replace(/\/$/, "");

  baseUrl.pathname = [normalizedBasePath, normalizedPath]
    .filter(Boolean)
    .join("/") || "/";
  baseUrl.pathname = `/${baseUrl.pathname.replace(/^\//, "")}`;
  const lastSegment = baseUrl.pathname.split("/").filter(Boolean).at(-1) ?? "";
  if (!lastSegment.includes(".") && !baseUrl.pathname.endsWith("/")) {
    baseUrl.pathname += "/";
  }
  baseUrl.search = "";
  baseUrl.hash = "";

  return baseUrl.toString();
};
