import Link from "next/link";

/**
 * Editorial inline link with an arrow that steps forward on hover. Used to
 * close feature blocks without resorting to another button.
 */
export default function ArrowLink({
  href,
  children,
  tone = "light",
  className = "",
}: {
  href: string;
  children: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const color =
    tone === "dark"
      ? "text-brand-bright hover:text-paper"
      : "text-brand-dark hover:text-foreground";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-sm font-medium ${color} transition-colors ${className}`}
    >
      <span className="border-b border-current/40 pb-0.5">{children}</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
