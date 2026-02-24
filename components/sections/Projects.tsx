"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ExternalLink, FolderKanban, FolderOpen, Github, Lock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { projects } from "@/content/projects";
import { assetPath } from "@/lib/path";

export function Projects() {
  const t = useTranslations("projects");

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-border bg-card/10 py-20 px-4 sm:py-24 sm:px-6 md:py-28 md:px-8"
    >
      <div className="mx-auto max-w-4xl text-center md:max-w-5xl">
        <SectionHeading title={t("title")} icon={FolderKanban} />
        <div className="mt-10 grid gap-5 text-left sm:mt-14 sm:grid-cols-2 sm:gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card/40 shadow-lg shadow-black/5 backdrop-blur-sm"
            >
              <div
                className="relative flex w-full items-center justify-center overflow-hidden aspect-video"
                style={{
                  backgroundColor: "var(--background)",
                  backgroundImage: [
                    "radial-gradient(ellipse 70% 60% at 20% 30%, rgba(16, 185, 129, 0.2) 0%, transparent 55%)",
                    "radial-gradient(ellipse 60% 70% at 80% 70%, rgba(16, 185, 129, 0.15) 0%, transparent 55%)",
                  ].join(", "),
                }}
              >
                {project.image && !project.image.includes("placeholder") ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={assetPath(project.image)}
                    alt=""
                    className="max-h-[85%] max-w-[85%] object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget.nextElementSibling;
                      if (fallback) (fallback as HTMLElement).style.display = "flex";
                    }}
                  />
                ) : null}
                {(!project.image || project.image.includes("placeholder")) && (
                  <div className="flex h-full w-full items-center justify-center">
                    <FolderOpen className="h-12 w-12 text-accent/50 sm:h-14 sm:w-14 sm:text-accent/60" aria-hidden />
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h3 className="font-heading text-base font-semibold text-foreground sm:text-lg">
                  {t(project.titleKey)}
                </h3>
                <p className="mt-3 flex-1 text-base text-muted leading-relaxed sm:text-sm">
                  {t(project.descriptionKey)}
                </p>
                {project.liveUrl || project.githubUrl ? (
                  <>
                    <p className="mt-3 text-base font-medium text-accent sm:text-sm">{t(project.techKey)}</p>
                    <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:flex-wrap">
                      {project.liveUrl && (
                        <Button
                          href={project.liveUrl}
                          variant="primary"
                          className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 py-3 text-white sm:min-h-[44px] sm:w-auto sm:py-2.5"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          {t("viewLive")}
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          href={project.githubUrl}
                          variant="secondary"
                          className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 py-3 sm:min-h-[44px] sm:w-auto sm:py-2.5"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          {t("viewCode")}
                        </Button>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:flex-wrap">
                    <span
                      role="status"
                      aria-disabled="true"
                      className="inline-flex min-h-[48px] w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-border/60 bg-muted/20 px-5 py-3 text-sm font-medium text-muted opacity-80 sm:min-h-[44px] sm:w-auto sm:py-2.5"
                    >
                      <Lock className="h-4 w-4 shrink-0" />
                      {t(project.techKey)}
                    </span>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
