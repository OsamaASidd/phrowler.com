import { CatalogService } from "@/lib/data";
import { CatalogIcon } from "./icons";

export default function NavDropdown({
  label,
  href,
  services,
}: {
  label: string;
  href: string;
  services: CatalogService[];
}) {
  return (
    <div className="group relative flex h-full items-center">
      <a
        href={href}
        className="text-sm font-medium text-muted transition-colors hover:text-foreground"
      >
        {label}
      </a>

      <div className="invisible absolute left-1/2 top-full z-50 w-[600px] -translate-x-1/2 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-xl border border-border bg-background shadow-lg">
          <div className="grid grid-cols-2 gap-2 p-4">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`${href}${service.slug}/`}
                className="group/item flex items-start gap-3 rounded-lg p-3 hover:bg-muted-bg"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-light text-brand">
                  <CatalogIcon icon={service.icon} className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground group-hover/item:text-brand">
                    {service.name}
                  </div>
                  <div className="mt-0.5 line-clamp-1 text-xs text-muted">
                    {service.tagline}
                  </div>
                </div>
              </a>
            ))}
          </div>
          <a
            href={href}
            className="block rounded-b-xl border-t border-border px-6 py-3 text-center text-sm font-medium text-brand hover:bg-muted-bg"
          >
            View all {label} services →
          </a>
        </div>
      </div>
    </div>
  );
}
