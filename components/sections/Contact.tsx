"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { meta } from "@/content/meta";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border bg-card/10 py-20 px-4 sm:py-24 sm:px-6 md:py-28 md:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeading title={t("title")} icon={Mail} />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-muted text-[1.05rem] leading-relaxed sm:mt-8"
        >
          {t("text")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 md:gap-6"
        >
          <a
            href={`tel:${meta.phone.replace(/\s/g, "")}`}
            className="flex min-h-[52px] items-center justify-center gap-3 rounded-xl border border-border bg-card/40 px-5 py-4 text-foreground transition-all hover:border-accent/40 hover:bg-accent/10 sm:justify-start sm:px-6"
          >
            <Phone className="h-5 w-5 shrink-0 text-accent" />
            <span className="text-sm font-medium">{t("phone")}</span>
          </a>
          <a
            href={`mailto:${meta.email}`}
            className="flex min-h-[52px] items-center justify-center gap-3 rounded-xl border border-border bg-card/40 px-5 py-4 text-foreground transition-all hover:border-accent/40 hover:bg-accent/10 sm:justify-start sm:px-6"
          >
            <Mail className="h-5 w-5 shrink-0 text-accent" />
            <span className="text-sm font-medium">{t("email")}</span>
          </a>
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[52px] items-center justify-center gap-3 rounded-xl border border-border bg-card/40 px-5 py-4 text-foreground transition-all hover:border-accent/40 hover:bg-accent/10 sm:justify-start sm:px-6"
          >
            <Github className="h-5 w-5 shrink-0 text-accent" />
            <span className="text-sm font-medium">{t("github")}</span>
          </a>
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[52px] items-center justify-center gap-3 rounded-xl border border-border bg-card/40 px-5 py-4 text-foreground transition-all hover:border-accent/40 hover:bg-accent/10 sm:justify-start sm:px-6"
          >
            <Linkedin className="h-5 w-5 shrink-0 text-accent" />
            <span className="text-sm font-medium">{t("linkedin")}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
