"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Code2, Braces, Box, Database, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/content/skills";

const categoryIcons = {
  languages: Braces,
  frameworks: Box,
  databases: Database,
  tools: Wrench,
} as const;

export function Skills() {
  const t = useTranslations("skills");

  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-border bg-card/10 py-20 px-4 sm:py-24 sm:px-6 md:py-28 md:px-8"
    >
      <div className="mx-auto max-w-5xl text-center">
        <SectionHeading title={t("title")} icon={Code2} />
        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 text-left">
          {skills.map((group, groupIndex) => {
            const Icon = categoryIcons[group.category];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: groupIndex * 0.06 }}
                className="rounded-2xl border border-border bg-card/40 px-4 py-4 backdrop-blur-sm sm:px-6 sm:py-5"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground sm:text-base">
                    {t(group.category)}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border/80 bg-background/50 px-3 py-1.5 text-base text-foreground sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
