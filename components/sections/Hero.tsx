"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FolderKanban, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { meta } from "@/content/meta";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 pb-20 sm:px-6 sm:pb-24 md:px-8 lg:px-10"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_60%_at_50%_-15%,rgba(16,185,129,0.18),transparent_50%)]" />
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-accent font-medium text-lg sm:text-xl"
        >
          {t("greeting")}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-heading mt-2 text-4xl font-bold tracking-tight text-foreground sm:mt-3 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {meta.name}
        </motion.h1>
        <div className="mx-auto mt-4 max-w-sm sm:mt-5 sm:max-w-md">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center text-xl text-accent font-semibold sm:text-2xl md:text-3xl"
          >
            {t("role")}
          </motion.p>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed sm:mt-8 sm:text-xl md:text-[1.25rem]"
        >
          {t("tagline")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-12 sm:gap-5"
        >
          <Button href="#projects" variant="primary" className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 px-5 py-3 sm:py-2.5">
            <FolderKanban className="h-4 w-4" />
            {t("ctaProjects")}
          </Button>
          <Button href="#contact" variant="secondary" className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 px-5 py-3 sm:py-2.5">
            <Mail className="h-4 w-4" />
            {t("ctaContact")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
