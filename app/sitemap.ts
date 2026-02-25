import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://stegine.com";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";
  const origin = basePath ? `${baseUrl}${basePath}` : baseUrl;

  const routes: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    const path = locale === routing.defaultLocale ? "" : `/${locale}`;
    const url = path ? `${origin}${path}` : origin;
    routes.push({
      url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: locale === routing.defaultLocale ? 1 : 0.9,
    });
  }

  return routes;
}
