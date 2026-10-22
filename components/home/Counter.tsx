"use client";

import { useEffect, useRef, useState } from "react";

function parseValue(value: string): { target: number; prefix: string; suffix: string } {
  const match = value.match(/^([^0-9]*)(\d+)(.*)$/);
  if (!match) return { target: 0, prefix: "", suffix: value };
  return { target: Number(match[2]), prefix: match[1], suffix: match[3] };
}

/**
 * Animates the numeric part of a stat (e.g. "45K+") once it scrolls into
 * view. Renders the final value immediately when motion is reduced or the
 * animation has not been triggered.
 */
export default function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const { target, prefix, suffix } = parseValue(value);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || target === 0) return;

    if (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let frame = 0;
    let started = false;

    const run = () => {
      started = true;
      const duration = 900;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.max(0, Math.min((now - start) / duration, 1));
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(`${prefix}${Math.round(target * eased)}${suffix}`);
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            run();
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (started) cancelAnimationFrame(frame);
    };
  }, [target, prefix, suffix]);

  return <span ref={ref}>{display}</span>;
}
