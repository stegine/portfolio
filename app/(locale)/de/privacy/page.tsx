import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PrivacyContent } from "@/components/legal/PrivacyContent";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "de", namespace: "privacy" });
  return { title: t("title") };
}

export default async function PrivacyPageDe() {
  setRequestLocale("de");
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-14 sm:pt-16">
        <PrivacyContent />
      </main>
      <Footer />
    </div>
  );
}
