import { useTranslations } from "next-intl";

const sections = [
  "responsible",
  "hosting",
  "access",
  "contact",
  "rights",
  "changes",
] as const;

export function PrivacyContent() {
  const t = useTranslations("privacy");

  return (
    <article className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl px-4 pt-8 pb-20 sm:px-6 sm:pt-12 sm:pb-24 md:px-8 md:py-24">
      <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
        {t("title")}
      </h1>
      <p className="mt-4 text-muted leading-relaxed">{t("intro")}</p>
      <div className="mt-10 space-y-10">
        {sections.map((key) => (
          <section key={key}>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              {t(`${key}.title`)}
            </h2>
            <p className="mt-2 text-muted leading-relaxed">
              {t(`${key}.text`)}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
