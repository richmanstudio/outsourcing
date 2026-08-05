import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { serviceBySlug, services } from "@/data/services";
import { getAbsoluteSiteUrl } from "@/data/site";

type ServiceRouteProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug.get(slug);

  if (!service) return {};

  return {
    title: service.seoTitle.replace(" — Аутсорсинг ДВ", ""),
    description: service.description,
    alternates: { canonical: getAbsoluteSiteUrl(`services/${service.slug}`) },
    openGraph: {
      title: service.seoTitle,
      description: service.description,
      url: getAbsoluteSiteUrl(`services/${service.slug}`),
      type: "article",
    },
  };
}

export default async function ServiceRoute({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = serviceBySlug.get(slug);

  if (!service) notFound();

  return <ServicePage service={service} />;
}
