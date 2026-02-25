import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LocaleLayoutContent } from "@/app/(locale)/locale-layout";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PrivacyContent } from "@/components/legal/PrivacyContent";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "en", namespace: "privacy" });
  return { title: t("title") };
}

export default async function PrivacyPageEn() {
  return (
    <LocaleLayoutContent locale="en">
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-14 sm:pt-16">
          <PrivacyContent />
        </main>
        <Footer />
      </div>
    </LocaleLayoutContent>
  );
}
