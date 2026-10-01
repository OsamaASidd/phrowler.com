import Link from "next/link";
import { useId } from "react";

export default function Logo({ className = "" }: { className?: string }) {
  const id = useId();
  const gradientId = `glossyOrange${id}`;
  const glowId = `softGlow${id}`;

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 text-lg font-semibold tracking-tight text-foreground ${className}`}
    >
      <span className="relative block h-9 w-9 shrink-0 overflow-hidden rounded-[7%] bg-[#14141c]">
        <img
          src="/assets/phrowler-logo.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
        />
        <svg
          viewBox="0 0 1600 1600"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id={gradientId}
              x1="0.1"
              y1="0.05"
              x2="0.9"
              y2="0.95"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0%" stopColor="#5c260f" />
              <stop offset="15%" stopColor="#c1531a" />
              <stop offset="35%" stopColor="#ff8a3d" />
              <stop offset="50%" stopColor="#ffe8c2" />
              <stop offset="65%" stopColor="#ff8a3d" />
              <stop offset="85%" stopColor="#c1531a" />
              <stop offset="100%" stopColor="#5c260f" />
              <animateTransform
                attributeName="gradientTransform"
                type="rotate"
                from="0 0.5 0.5"
                to="360 0.5 0.5"
                dur="4s"
                repeatCount="indefinite"
              />
            </linearGradient>
            <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>

          <circle
            cx="649.5"
            cy="639.5"
            r="330"
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="55"
          />

          <circle
            cx="649.5"
            cy="639.5"
            r="330"
            fill="none"
            stroke="#fff6e6"
            strokeWidth="55"
            strokeLinecap="round"
            strokeDasharray="90 1983"
            opacity="0.85"
            filter={`url(#${glowId})`}
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-2073"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </span>
      Phrowler
    </Link>
  );
}
