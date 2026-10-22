"use client";

import { ReactNode, useEffect, useRef } from "react";

/**
 * Scroll-reveal wrapper. Content renders fully visible in the initial HTML;
 * after hydration, only below-the-fold elements are hidden before animating
 * in via DOM class changes, so the page stays readable without JS and
 * respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "header";
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) return;

    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.classList.add("reveal-hidden");

    if (typeof IntersectionObserver === "undefined") {
      el.classList.remove("reveal-hidden");
      return;
    }

    const show = () => {
      el.classList.remove("reveal-hidden");
      el.classList.add("reveal-shown");
      if (delay > 0) el.style.setProperty("--reveal-delay", `${delay}ms`);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            observer.disconnect();
          }
        }
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const Component = Tag as "div";

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}
