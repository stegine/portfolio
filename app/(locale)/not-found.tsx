"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const messages: Record<"en" | "de", { title: string; description: string; back: string }> = {
  en: { title: "Page not found", description: "This page does not exist.", back: "Back to home" },
  de: { title: "Seite nicht gefunden", description: "Diese Seite existiert nicht.", back: "Zur Startseite" },
};

export default function LocaleNotFound() {
  const locale = useLocale() as "en" | "de";
  const t = messages[locale] ?? messages.en;

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4">
      <h1 className="font-heading text-3xl font-bold text-foreground">
        {t.title}
      </h1>
      <p className="text-muted-foreground">{t.description}</p>
      <Link
        href="/"
        className={cn(
          "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium",
          "bg-accent text-white hover:bg-accent-hover transition-colors"
        )}
      >
        {t.back}
      </Link>
    </div>
  );
}
