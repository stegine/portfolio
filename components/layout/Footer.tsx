import { useTranslations } from "next-intl";
import { Heart } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border bg-card/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2 px-6 text-center text-sm text-muted sm:px-8">
        <span className="flex items-center gap-1.5">
          © {new Date().getFullYear()} {t("copyright")}
          <Heart className="h-3.5 w-3.5 text-accent" aria-hidden />
        </span>
      </div>
    </footer>
  );
}
