import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4">
      <h1 className="font-heading text-3xl font-bold text-foreground">
        {t("title")}
      </h1>
      <p className="text-muted-foreground">{t("description")}</p>
      <Link
        href="/"
        className={cn(
          "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium",
          "bg-accent text-white hover:bg-accent-hover transition-colors"
        )}
      >
        {t("back")}
      </Link>
    </div>
  );
}
