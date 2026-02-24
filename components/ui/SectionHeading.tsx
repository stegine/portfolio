import { type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  title: string;
  icon?: LucideIcon;
  className?: string;
};

export function SectionHeading({ title, icon: Icon, className = "" }: SectionHeadingProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`text-center ${className}`}
    >
      {Icon && (
        <div className="mb-3 flex justify-center" aria-hidden>
          <Icon className="h-8 w-8 text-accent" />
        </div>
      )}
      <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
        {title}
      </h2>
      <div
        className="mx-auto mt-3 h-1 w-14 rounded-full bg-accent"
        aria-hidden
      />
    </motion.header>
  );
}
