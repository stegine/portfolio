"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { User, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const t = useTranslations("about");

  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border bg-card/20 py-20 px-4 sm:py-24 sm:px-6 md:py-28 md:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeading title={t("title")} icon={User} />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-8 text-muted text-[1.05rem] leading-relaxed"
        >
          {t("text")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-6 flex flex-col items-center gap-3 rounded-2xl border border-accent/25 bg-accent/10 px-5 py-4 text-center sm:mt-8 sm:inline-flex sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-1.5 sm:rounded-lg sm:px-4 sm:py-2.5 sm:text-base"
        >
          <div className="flex items-center justify-center gap-2 sm:contents">
            <Sparkles className="h-5 w-5 shrink-0 text-accent sm:h-4 sm:w-4" aria-hidden />
            <span className="text-lg font-semibold text-accent sm:shrink-0 sm:text-base">{t("nameOriginStegine")}</span>
          </div>
          <span className="hidden text-muted sm:inline" aria-hidden>·</span>
          <span className="w-full border-t border-accent/15 pt-3 text-base leading-relaxed text-muted sm:block sm:w-auto sm:border-0 sm:pt-0 sm:leading-snug">
            {t("nameOriginPrefix")}
            <span className="font-medium text-foreground">{t("nameOriginStefan")}</span>
            {t("nameOriginMiddle")}
            <span className="font-medium text-foreground">{t("nameOriginEngineering")}</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
