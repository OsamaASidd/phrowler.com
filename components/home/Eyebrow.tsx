import { ReactNode } from "react";

/**
 * Small monospace section label with a leading rule. Anchors every section
 * with the same editorial signature while letting the accent colour adapt to
 * light or dark backgrounds.
 */
export default function Eyebrow({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const color = tone === "dark" ? "text-brand-bright" : "text-brand-dark";
  return (
    <p
      className={`flex items-center gap-3 font-mono-label text-[11px] uppercase ${color} ${className}`}
    >
      <span className="h-px w-7 bg-current opacity-50" aria-hidden="true" />
      {children}
    </p>
  );
}
