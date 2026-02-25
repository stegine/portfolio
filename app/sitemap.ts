import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

const staticPaths = ["", "/privacy", "/imprint"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://stegine.com";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";
  const origin = basePath ? `${baseUrl}${basePath}` : baseUrl;

  const routes: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    const localePrefix = locale === routing.defaultLocale ? "" : `/${locale}`;
    const isDefaultLocale = locale === routing.defaultLocale;
    for (const path of staticPaths) {
      const pathSegment = path === "" ? localePrefix : `${localePrefix}${path}`;
      const url = pathSegment ? `${origin}${pathSegment}` : origin;
      routes.push({
        url,
        lastModified: new Date(),
        changeFrequency: path === "" ? "monthly" : "yearly",
        priority: path === "" ? (isDefaultLocale ? 1 : 0.9) : 0.5,
      });
    }
  }

  return routes;
}
