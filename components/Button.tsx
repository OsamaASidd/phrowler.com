import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-ink text-background hover:bg-brand transition-colors",
  secondary:
    "bg-transparent text-foreground border border-border hover:border-ink transition-colors",
  ghost: "text-brand hover:text-brand-dark transition-colors underline underline-offset-4",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const isExternal = href.startsWith("http");
  const base =
    variant === "ghost"
      ? "inline-flex items-center gap-1.5 text-sm font-medium"
      : "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-2.5 text-sm font-medium";
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
