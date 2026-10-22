import Container from "@/components/Container";
import Button from "@/components/Button";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import HeroIntegrations from "./HeroIntegrations";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <Container className="grid items-center gap-12 py-14 md:py-16 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16 lg:py-24">
        <Reveal>
          <Eyebrow>ERP · E-invoicing compliance · AI automation</Eyebrow>

          <h1 className="mt-6 font-display text-[2.7rem] font-medium leading-[0.98] tracking-tight text-foreground sm:text-[3.5rem] lg:text-[4.1rem] xl:text-[4.6rem]">
            Your business systems
            <br className="hidden sm:block" /> should work{" "}
            <span className="italic text-brand">as one.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
            Phrowler connects your ERP, tax-authority pipelines, and the tools
            your team lives in, so data moves once. Invoices clear the authority
            on their own, approvals run themselves, and every report draws from
            the same numbers.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="/contact/" className="px-6 py-3">
              Discuss your project
            </Button>
            <Button href="/work/" variant="secondary" className="px-6 py-3">
              Explore our work
            </Button>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6">
            <div className="flex items-center gap-3">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                aria-hidden="true"
              />
              <div>
                <dt className="font-mono-label text-[10px] uppercase text-muted">
                  Official
                </dt>
                <dd className="text-sm font-medium text-foreground">
                  ERPNext / Frappe Partner in Oman
                </dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                aria-hidden="true"
              />
              <div>
                <dt className="font-mono-label text-[10px] uppercase text-muted">
                  Track record
                </dt>
                <dd className="text-sm font-medium text-foreground">
                  16+ Tier-1 clients kept compliant
                </dd>
              </div>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={120}>
          <HeroIntegrations />
        </Reveal>
      </Container>
    </section>
  );
}
