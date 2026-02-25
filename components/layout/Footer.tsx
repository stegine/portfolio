import { useTranslations } from "next-intl";
import { Heart } from "lucide-react";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border bg-card/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-6 text-center text-sm text-muted sm:px-8">
        <span className="flex items-center gap-1.5">
          © {new Date().getFullYear()} {t("copyright")}
          <Heart className="h-3.5 w-3.5 text-accent" aria-hidden />
        </span>
        <span className="hidden sm:inline" aria-hidden>
          ·
        </span>
        <Link
          href="/privacy"
          className="transition-colors hover:text-foreground"
        >
          {t("privacy")}
        </Link>
        <span aria-hidden>·</span>
        <Link
          href="/imprint"
          className="transition-colors hover:text-foreground"
        >
          {t("imprint")}
        </Link>
      </div>
    </footer>
  );
}
