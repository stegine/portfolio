import { type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  className?: string;
};

export function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";
  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-hover text-white",
    secondary:
      "border border-border bg-card text-foreground hover:bg-foreground/5",
    ghost: "text-foreground hover:bg-foreground/10",
  };
  return (
    <a
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </a>
  );
}
