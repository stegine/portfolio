"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Languages as LanguagesIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { languages } from "@/content/languages";
import type { LanguageLevel } from "@/content/languages";

const levelKeys: Record<LanguageLevel, "native" | "fluent" | "business" | "basic"> = {
  native: "native",
  fluent: "fluent",
  business: "business",
  basic: "basic",
};

export function Languages() {
  const t = useTranslations("languages");

  return (
    <section
      id="languages"
      className="scroll-mt-20 border-t border-border bg-card/20 py-20 px-4 sm:py-24 sm:px-6 md:py-28 md:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeading title={t("title")} icon={LanguagesIcon} />
        <ul className="mx-auto mt-10 max-w-3xl space-y-4 text-left sm:mt-14 sm:space-y-6">
          {languages.map((lang, i) => (
            <motion.li
              key={lang.name}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center justify-between rounded-2xl border border-border bg-card/40 px-4 py-4 backdrop-blur-sm sm:px-6 sm:py-5"
            >
              <span className="text-base font-medium text-foreground sm:text-sm">{lang.name}</span>
              <span className="text-base font-medium text-accent sm:text-sm">{t(levelKeys[lang.level])}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
