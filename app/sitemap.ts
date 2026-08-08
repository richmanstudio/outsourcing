import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { getAbsoluteSiteUrl } from "@/data/site";
import { team } from "@/data/team";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const coreRoutes = ["about", "services", "team", "business", "contacts", "consultation"];

  return [
    { url: getAbsoluteSiteUrl(), lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...coreRoutes.map((route) => ({ url: getAbsoluteSiteUrl(route), lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 })),
    ...services.map((service) => ({ url: getAbsoluteSiteUrl(`services/${service.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...team.map((person) => ({ url: getAbsoluteSiteUrl(`team/${person.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.75 })),
    { url: getAbsoluteSiteUrl("privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: getAbsoluteSiteUrl("consent"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
