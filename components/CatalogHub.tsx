import { ReactNode } from "react";
import Container from "./Container";
import Button from "./Button";
import { CatalogService, FeaturedProduct } from "@/lib/data";
import { CatalogIcon } from "./icons";

export default function CatalogHub({
  eyebrow,
  title,
  intro,
  badge,
  services,
  basePath,
  featured,
  diagram,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  badge?: string;
  services: CatalogService[];
  basePath: string;
  featured?: FeaturedProduct;
  diagram?: { heading: string; content: ReactNode };
}) {
  return (
    <>
      <section className="border-b border-border">
        <Container className="py-20">
          <p className="font-mono-label text-xs uppercase text-brand">
            {eyebrow}
          </p>
          {badge && (
            <span className="mt-4 inline-block rounded-full border border-brand/30 bg-brand-light px-3 py-1 text-xs font-medium text-brand">
              {badge}
            </span>
          )}
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-muted">{intro}</p>
        </Container>
      </section>

      {diagram && (
        <section className="border-b border-border">
          <Container className="py-16">
            <h2 className="text-center text-xl font-semibold tracking-tight text-foreground">
              {diagram.heading}
            </h2>
            <div className="mt-10">{diagram.content}</div>
          </Container>
        </section>
      )}

      {featured && (
        <section className="border-b border-border bg-muted-bg">
          <Container className="py-16">
            <a
              href={featured.href}
              className="group flex flex-col gap-6 rounded-xl border border-brand/30 bg-background p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md md:flex-row md:items-center"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                <CatalogIcon icon={featured.icon} className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <span className="inline-block rounded-full bg-brand-light px-3 py-1 text-xs font-medium text-brand">
                  Featured
                </span>
                <h2 className="mt-3 text-lg font-semibold text-foreground">
                  {featured.name}
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">{featured.tagline}</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-brand">
                Learn more →
              </span>
            </a>
          </Container>
        </section>
      )}

      <section className="border-b border-border">
        <Container className="py-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`${basePath}${service.slug}/`}
                className="group flex flex-col rounded-xl border border-border bg-background p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-light text-brand">
                  <CatalogIcon icon={service.icon} />
                </div>
                <h2 className="mt-4 font-semibold text-foreground">
                  {service.name}
                </h2>
                <p className="mt-2 text-sm text-muted">{service.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more →
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-lg text-xl font-semibold tracking-tight text-foreground">
            Don&apos;t see your exact system or use case listed?
          </h2>
          <Button href="/contact/" className="shrink-0">
            Ask us about it
          </Button>
        </Container>
      </section>
    </>
  );
}
