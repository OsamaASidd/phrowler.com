import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import {
  webServices,
  mobileServices,
  getCaseStudiesBySlug,
  type CatalogService,
} from "@/lib/data";
import { CatalogIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Web & Mobile Development",
  description:
    "Web applications, portals, and mobile apps that connect directly to your ERP — built by the same team that implements it.",
};

const faqs = [
  {
    q: "Do you only build apps that connect to an ERP?",
    a: "No — but it's where we're strongest. If your project doesn't touch an ERP at all, we're still happy to help; it's just not the only thing we do.",
  },
  {
    q: "How long does a typical project take?",
    a: "Depends entirely on scope. A connected portal might be a few weeks; a full mobile app with ERP sync is usually a couple of months. We'll give you a real estimate after a scoping call, not before.",
  },
  {
    q: "Native or cross-platform mobile apps?",
    a: "Both — we pick based on what the project actually needs, not a default preference.",
  },
  {
    q: "Can you take over an existing app instead of starting from scratch?",
    a: "Yes. We regularly pick up existing codebases for modernization or ERP integration work.",
  },
];

function ServiceGrid({ services, basePath }: { services: CatalogService[]; basePath: string }) {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <a
          key={service.slug}
          href={`${basePath}${service.slug}/`}
          className="group flex flex-col rounded-xl border border-border bg-background p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-light text-brand">
            <CatalogIcon icon={service.icon} />
          </div>
          <h3 className="mt-4 font-semibold text-foreground">{service.name}</h3>
          <p className="mt-2 text-sm text-muted">{service.tagline}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand opacity-0 transition-opacity group-hover:opacity-100">
            Learn more →
          </span>
        </a>
      ))}
    </div>
  );
}

export default function WebMobilePage() {
  const relatedSlugs = Array.from(
    new Set([...webServices, ...mobileServices].flatMap((s) => s.relatedCaseStudies))
  );
  const related = getCaseStudiesBySlug(relatedSlugs).slice(0, 4);

  return (
    <>
      <section className="border-b border-border">
        <Container className="py-20">
          <p className="font-mono-label text-xs uppercase text-brand">
            Web &amp; Mobile
          </p>
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Websites and apps that extend your ERP, not sit next to it.
          </h1>
          <p className="mt-6 max-w-2xl text-muted">
            Business portals, customer and vendor apps, e-commerce, and
            field-operations tools — built to read and write directly to
            ERPNext, SAP, Sage, Dynamics 365, or Oracle, so your team never
            re-types the same data twice.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button href="/contact/">Start a project</Button>
            <Button href="/work/" variant="ghost">
              See the work →
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-b border-border">
        <Container className="py-16">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Website &amp; Web App Development
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Custom web applications, business portals, and e-commerce
            platforms — connected to your ERP where it matters.
          </p>
          <ServiceGrid services={webServices} basePath="/web-mobile/" />
        </Container>
      </section>

      <section className="border-b border-border bg-muted-bg">
        <Container className="py-16">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Mobile App Development
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Native and cross-platform apps for field teams, customers, and
            internal operations — from first prototype to App Store release.
          </p>
          <ServiceGrid services={mobileServices} basePath="/web-mobile/" />
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-b border-border">
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

      <section className="border-b border-border">
        <Container className="py-16">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Questions we get asked
          </h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {faqs.map((faq) => (
              <div key={faq.q} className="grid gap-2 py-6 md:grid-cols-4 md:gap-8">
                <h3 className="font-medium text-foreground">{faq.q}</h3>
                <p className="text-sm text-muted md:col-span-3">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-lg text-xl font-semibold tracking-tight text-foreground">
            Have a web or mobile app that needs to talk to your ERP?
          </h2>
          <Button href="/contact/" className="shrink-0">
            Start a conversation
          </Button>
        </Container>
      </section>
    </>
  );
}
