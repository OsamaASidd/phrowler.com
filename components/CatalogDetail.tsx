import Container from "./Container";
import Button from "./Button";
import { CatalogService, getCaseStudiesBySlug } from "@/lib/data";
import { CatalogIcon, CheckIcon } from "./icons";

export default function CatalogDetail({
  service,
  basePath,
  hubLabel,
}: {
  service: CatalogService;
  basePath: string;
  hubLabel: string;
}) {
  const related = getCaseStudiesBySlug(service.relatedCaseStudies);

  return (
    <>
      <section className="border-b border-border">
        <Container className="py-20">
          <a
            href={basePath}
            className="font-mono-label text-xs uppercase text-brand hover:underline"
          >
            ← {hubLabel}
          </a>
          <div className="mt-4 flex items-start gap-4">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand sm:flex">
              <CatalogIcon icon={service.icon} className="h-6 w-6" />
            </div>
            <div>
              <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {service.name}
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-brand">{service.tagline}</p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-muted">{service.description}</p>
          <Button href="/contact/" className="mt-8">
            Talk to us about this
          </Button>
        </Container>
      </section>

      <section className="border-b border-border">
        <Container className="py-16">
          <h2 className="font-mono-label text-xs uppercase text-muted">
            What&apos;s included
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {service.capabilities.map((cap) => (
              <li key={cap} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                  <CheckIcon />
                </span>
                <span className="text-sm text-foreground">{cap}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {service.modules && (
        <section className="border-b border-border bg-muted-bg">
          <Container className="py-16">
            <h2 className="font-mono-label text-xs uppercase text-muted">
              Modules we implement
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              A typical rollout covers whichever of these your business
              needs. We don&apos;t make you buy the whole suite to get one
              piece working.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {service.modules.map((mod) => (
                <div
                  key={mod.name}
                  className="rounded-xl border border-border bg-background p-5"
                >
                  <h3 className="font-medium text-foreground">{mod.name}</h3>
                  <p className="mt-1.5 text-sm text-muted">{mod.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {related.length > 0 && (
        <section>
          <Container className="py-16">
            <h2 className="font-mono-label text-xs uppercase text-muted">
              Related work
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {related.map((project) => (
                <a
                  key={project.slug}
                  href="/work/"
                  className="block rounded-xl border border-border p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="font-medium text-foreground">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted">{project.client}</p>
                  <p className="mt-3 text-sm text-foreground">{project.summary}</p>
                </a>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="border-t border-border">
        <Container className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-lg text-xl font-semibold tracking-tight text-foreground">
            Ready to scope {service.name.toLowerCase()}?
          </h2>
          <Button href="/contact/" className="shrink-0">
            Start a conversation
          </Button>
        </Container>
      </section>
    </>
  );
}
