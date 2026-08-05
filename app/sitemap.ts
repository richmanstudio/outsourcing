import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { getAbsoluteSiteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: getAbsoluteSiteUrl(),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...services.map((service) => ({
      url: getAbsoluteSiteUrl(`services/${service.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: getAbsoluteSiteUrl("privacy"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: getAbsoluteSiteUrl("consent"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
