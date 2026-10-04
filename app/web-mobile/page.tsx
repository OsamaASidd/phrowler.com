import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { webServices, mobileServices, type DigitalService } from "@/lib/data";
import { CatalogIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Web & Mobile Development",
  description:
    "Web applications, portals, and mobile apps that connect directly to your ERP — built by the same team that implements it.",
};

function ServiceGrid({ services }: { services: DigitalService[] }) {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <div
          key={service.name}
          className="flex flex-col rounded-xl border border-border bg-background p-6 shadow-sm"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-light text-brand">
            <CatalogIcon icon={service.icon} />
          </div>
          <h3 className="mt-4 font-semibold text-foreground">{service.name}</h3>
          <p className="mt-2 text-sm text-muted">{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default function WebMobilePage() {
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
          <ServiceGrid services={webServices} />
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
          <ServiceGrid services={mobileServices} />
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
