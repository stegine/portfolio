import { useTranslations } from "next-intl";
import { meta } from "@/content/meta";

export function ImprintContent() {
  const t = useTranslations("imprint");

  return (
    <article className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl px-4 pt-8 pb-20 sm:px-6 sm:pt-12 sm:pb-24 md:px-8 md:py-24">
      <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
        {t("title")}
      </h1>
      <section className="mt-8 space-y-4">
        <p className="text-sm font-medium text-muted">{t("responsible")}</p>
        <p className="text-foreground font-semibold">{meta.name}</p>
        <p className="text-muted whitespace-pre-line">{t("address")}</p>
        <p className="text-muted">
          {t("contact")}:{" "}
          <a
            href={`mailto:${meta.email}`}
            className="text-accent hover:underline"
          >
            {meta.email}
          </a>
          {" · "}
          <a
            href={`tel:${meta.phone.replace(/\s/g, "")}`}
            className="text-accent hover:underline"
          >
            {meta.phone}
          </a>
        </p>
        {meta.vatId ? (
          <p className="text-muted text-sm">
            {t("vatId")}: {meta.vatId}
          </p>
        ) : null}
      </section>
      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold text-foreground">
          {t("dispute.title")}
        </h2>
        <p className="mt-2 text-muted leading-relaxed">{t("dispute.text")}</p>
      </section>
    </article>
  );
}
