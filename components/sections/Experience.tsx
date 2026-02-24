"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/content/experience";

export function Experience() {
  const t = useTranslations("experience");

  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-border bg-card/20 py-20 px-4 sm:py-24 sm:px-6 md:py-28 md:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeading title={t("title")} icon={Briefcase} />
        <div className="mx-auto mt-10 max-w-3xl space-y-4 text-left sm:mt-14 sm:space-y-6">
          {experience.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card/40 px-5 py-4 backdrop-blur-sm sm:rounded-2xl sm:px-6 sm:py-5 md:px-7 md:py-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                {"tagKey" in item ? (
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                    {t(item.tagKey)}
                  </span>
                ) : (
                  <span />
                )}
                <span className="text-sm font-medium text-accent tabular-nums">
                  {t(item.periodKey)}
                </span>
              </div>
              <h3 className="mt-3 font-heading text-lg font-semibold text-foreground md:text-xl">
                {t(item.roleKey)}
              </h3>
              <p className="mt-1 text-sm font-medium text-muted md:text-base">
                {t(item.companyKey)}
              </p>
              <p className="mt-3 text-sm text-muted leading-relaxed md:text-base">
                {t(item.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
