"use client";

import { useEffect, useState } from "react";
import { nav, erpServices, aiServices, webMobileServices } from "@/lib/data";
import { CatalogIcon } from "./icons";

const catalogs: Record<string, typeof erpServices> = {
  "/erp/": erpServices,
  "/ai/": aiServices,
  "/web-mobile/": webMobileServices,
};

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const close = () => {
    setOpen(false);
    setExpanded(null);
  };

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="relative z-50 flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground"
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
        <div
          onClick={close}
          aria-hidden="true"
          className="fixed left-0 top-0 z-40 h-screen w-screen bg-ink/40"
        />
      )}

      {open && (
        <div className="fixed inset-x-4 top-20 z-50 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border border-border bg-background shadow-xl">
          <nav className="flex flex-col divide-y divide-border p-2">
            {nav.map((item) => {
              const services = catalogs[item.href];

              if (services) {
                const isExpanded = expanded === item.href;
                return (
                  <div key={item.href}>
                    <div className="flex items-center gap-1">
                      <a
                        href={item.href}
                        onClick={close}
                        className="flex-1 rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors active:bg-muted-bg"
                      >
                        {item.label}
                      </a>
                      <button
                        onClick={() =>
                          setExpanded(isExpanded ? null : item.href)
                        }
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={isExpanded}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-muted transition-colors active:bg-muted-bg"
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
                      <div className="grid gap-1 px-1 pb-2">
                        {services.map((service) => (
                          <a
                            key={service.slug}
                            href={`${item.href}${service.slug}/`}
                            onClick={close}
                            className="flex items-center gap-3 rounded-lg px-2 py-2 transition-colors active:bg-muted-bg"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-light text-brand">
                              <CatalogIcon icon={service.icon} className="h-4 w-4" />
                            </span>
                            <span className="text-sm text-foreground">
                              {service.name}
                            </span>
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
                  className="rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors active:bg-muted-bg"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="border-t border-border p-2">
            <a
              href="/contact/"
              onClick={close}
              className="flex items-center justify-center rounded-lg bg-ink px-5 py-3 text-sm font-medium text-background transition-colors active:bg-brand"
            >
              Start a project
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
