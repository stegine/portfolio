import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Syne, DM_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { PersonJsonLd } from "@/components/PersonJsonLd";
import { routing } from "@/i18n/routing";
import "../globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales
    .filter((locale) => locale !== routing.defaultLocale)
    .map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";

  const metadata: Metadata = {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === "de" ? "de_DE" : "en_US",
    },
  };

  if (baseUrl) {
    const base = baseUrl.replace(/\/$/, "");
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";
    const origin = basePath ? `${base}${basePath}` : base;
    const canonical =
      locale === routing.defaultLocale ? origin : `${origin}/${locale}`;
    metadata.alternates = {
      canonical,
      languages: {
        en: origin,
        de: `${origin}/de`,
      },
    };
  }

  return metadata;
}

export async function LocaleLayoutContent({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  if (!routing.locales.includes(locale as "en" | "de")) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <PersonJsonLd />
      <div
        className={`${syne.variable} ${dmSans.variable} min-h-screen font-sans`}
      >
        {children}
      </div>
    </NextIntlClientProvider>
  );
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  return <LocaleLayoutContent locale={locale}>{children}</LocaleLayoutContent>;
}
