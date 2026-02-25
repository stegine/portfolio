import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LocaleLayoutContent } from "@/app/(locale)/locale-layout";
import { HomeContent } from "@/app/(locale)/home-content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "en", namespace: "meta" });
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";

  const metadata: Metadata = {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: "en_US",
    },
  };

  if (baseUrl) {
    const base = baseUrl.replace(/\/$/, "");
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";
    const origin = basePath ? `${base}${basePath}` : base;
    metadata.alternates = {
      canonical: origin,
      languages: {
        en: origin,
        de: `${origin}/de`,
      },
    };
  }

  return metadata;
}

export default async function RootPage() {
  return (
    <LocaleLayoutContent locale="en">
      <HomeContent />
    </LocaleLayoutContent>
  );
}
