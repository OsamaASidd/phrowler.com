"use client";

import { useState } from "react";
import { nav, erpServices, aiServices } from "@/lib/data";

const catalogs: Record<string, typeof erpServices> = {
  "/erp/": erpServices,
  "/ai/": aiServices,
};

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const close = () => {
    setOpen(false);
    setExpanded(null);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          {open ? (
            <path
              d="M4 4l10 10M14 4L4 14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M2 5h14M2 9h14M2 13h14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-16 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-border bg-background shadow-sm">
          <nav className="flex flex-col px-6 py-4">
            {nav.map((item) => {
              const services = catalogs[item.href];

              if (services) {
                const isExpanded = expanded === item.href;
                return (
                  <div key={item.href} className="border-b border-border">
                    <div className="flex items-center justify-between">
                      <a
                        href={item.href}
                        onClick={close}
                        className="flex-1 py-3 text-sm font-medium text-foreground"
                      >
                        {item.label}
                      </a>
                      <button
                        onClick={() =>
                          setExpanded(isExpanded ? null : item.href)
                        }
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={isExpanded}
                        className="flex h-9 w-9 items-center justify-center text-muted"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          aria-hidden="true"
                          className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        >
                          <path
                            d="M2 4l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    {isExpanded && (
                      <div className="pb-3 pl-3">
                        {services.map((service) => (
                          <a
                            key={service.slug}
                            href={`${item.href}${service.slug}/`}
                            onClick={close}
                            className="block py-2 text-sm text-muted"
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="py-3 text-sm font-medium text-foreground border-b border-border last:border-none"
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="/contact/"
              onClick={close}
              className="mt-4 inline-flex items-center justify-center rounded-sm bg-ink px-5 py-2.5 text-sm font-medium text-background"
            >
              Start a project
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
