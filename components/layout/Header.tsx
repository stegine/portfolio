"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, User, Code2, Languages, FolderKanban, Briefcase, Mail } from "lucide-react";
import { GB, DE } from "country-flag-icons/react/3x2";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/path";

const navKeys = [
  "nav.about",
  "nav.skills",
  "nav.languages",
  "nav.projects",
  "nav.experience",
  "nav.contact",
] as const;

const navItems: { key: (typeof navKeys)[number]; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "nav.about", icon: User },
  { key: "nav.skills", icon: Code2 },
  { key: "nav.languages", icon: Languages },
  { key: "nav.projects", icon: FolderKanban },
  { key: "nav.experience", icon: Briefcase },
  { key: "nav.contact", icon: Mail },
];

export function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6 md:px-8">
        <a
          href="#home"
          className="flex items-center font-sans text-lg font-semibold text-foreground"
          aria-label="Stegine – nach oben"
        >
          <img src={assetPath("/logo.svg")} alt="" className="h-5 w-auto sm:h-6" />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map(({ key, icon: Icon }) => {
            const sectionId = key.replace("nav.", "");
            return (
              <a
                key={key}
                href={`#${sectionId}`}
                className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
                {t(key)}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div
            className="flex items-center gap-2 rounded-lg border border-border/60 bg-foreground/5 px-2 py-1.5"
            role="group"
            aria-label="Sprache wählen"
          >
            <Link
              href="/"
              locale="en"
              className={cn(
                "block transition-opacity hover:opacity-100",
                locale === "en" ? "opacity-100" : "opacity-50"
              )}
              title="English"
              aria-label="English"
            >
              <GB className="h-4 w-6 rounded overflow-hidden" />
            </Link>
            <Link
              href="/"
              locale="de"
              className={cn(
                "block transition-opacity hover:opacity-100",
                locale === "de" ? "opacity-100" : "opacity-50"
              )}
              title="Deutsch"
              aria-label="Deutsch"
            >
              <DE className="h-4 w-6 rounded overflow-hidden" />
            </Link>
          </div>
          <button
            type="button"
            className="rounded-lg p-2 text-muted hover:bg-foreground/10 hover:text-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden border-t border-border bg-background/98 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.35)] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-0.5 px-3 pb-3 pt-2">
              {navItems.map(({ key, icon: Icon }, i) => {
                const sectionId = key.replace("nav.", "");
                return (
                  <motion.a
                    key={key}
                    href={`#${sectionId}`}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.04 * (i + 1) }}
                    className="flex min-h-[48px] items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors active:bg-foreground/10"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileOpen(false);
                      window.history.pushState(null, "", `#${sectionId}`);
                      const el = document.getElementById(sectionId);
                      if (el) {
                        requestAnimationFrame(() => {
                          requestAnimationFrame(() => {
                            el.scrollIntoView({ behavior: "smooth", block: "start" });
                          });
                        });
                      }
                    }}
                  >
                    <Icon className="h-4 w-4 shrink-0 text-accent" />
                    {t(key)}
                  </motion.a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
