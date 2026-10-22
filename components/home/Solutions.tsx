import Container from "@/components/Container";
import { CheckIcon } from "@/components/icons";
import { solutions } from "@/lib/data";
import ArrowLink from "./ArrowLink";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const [erpSolution, aiSolution, customSolution] = solutions;

const mandates = ["FIRS", "FBR", "ZATCA", "GST", "UK MTD"];

export default function Solutions() {
  return (
    <section className="border-b border-border">
      <Container className="py-20 md:py-28">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.02] text-foreground md:text-5xl">
              One team across your ERP, your integrations, and the software
              around them.
            </h2>
          </div>
          <p className="text-muted lg:col-span-5">
            Most projects start in one of these three places. Because we own all
            three, nothing gets lost in the handoff between them.
          </p>
        </Reveal>
      </Container>

      {/* 01 — ERP & compliance, full-bleed charcoal */}
      <div className="bg-ink text-paper">
        <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <Reveal>
            <Eyebrow tone="dark">01 · Core focus</Eyebrow>
            <h3 className="mt-5 max-w-xl font-display text-3xl font-medium leading-[1.05] md:text-[2.6rem]">
              {erpSolution.name}
            </h3>
            <p className="mt-5 max-w-lg font-display text-xl italic text-brand-bright">
              {erpSolution.pitch}
            </p>
            <p className="mt-6 max-w-xl leading-relaxed text-paper/60">
              {erpSolution.description}
            </p>
            <ArrowLink href={erpSolution.href} tone="dark" className="mt-8">
              Explore ERP services
            </ArrowLink>
          </Reveal>

          <Reveal delay={100}>
            <p className="font-mono-label text-[10px] uppercase text-paper/60">
              E-invoicing mandates handled
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {mandates.map((mandate) => (
                <li
                  key={mandate}
                  className="rounded-md border border-brand-bright/40 px-3 py-1.5 font-mono-label text-xs uppercase text-brand-bright"
                >
                  {mandate}
                </li>
              ))}
            </ul>

            <p className="mt-9 font-mono-label text-[10px] uppercase text-paper/60">
              Includes
            </p>
            <ul className="mt-4 divide-y divide-white/10">
              {erpSolution.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="flex items-start gap-3 py-3 text-sm leading-snug text-paper/85"
                >
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-bright" />
                  {capability}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </div>

      <Container className="py-16 md:py-20">
        {/* 02 — Integration & AI, warm tinted panel */}
        <Reveal>
          <article className="grid gap-10 rounded-2xl bg-background-2 p-8 md:p-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div>
              <p className="font-mono-label text-[11px] uppercase text-muted">
                02 · Automation
              </p>
              <h3 className="mt-4 font-display text-3xl font-medium leading-[1.05] text-foreground md:text-[2.1rem]">
                {aiSolution.name}
              </h3>
              <p className="mt-4 font-medium text-brand-dark">
                {aiSolution.pitch}
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                {aiSolution.description}
              </p>
              <ArrowLink href={aiSolution.href} className="mt-7">
                Explore AI &amp; automation
              </ArrowLink>
            </div>
            <ul className="grid gap-x-8 gap-y-0 self-start border-t border-border-strong sm:grid-cols-2 lg:grid-cols-1">
              {aiSolution.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="flex items-start gap-3 border-b border-border py-3.5 text-sm leading-snug text-foreground"
                >
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {capability}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        {/* 03 — Custom software, plain editorial */}
        <Reveal>
          <article className="mt-16 grid gap-10 border-t border-border pt-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-mono-label text-[11px] uppercase text-muted">
                03 · Bespoke
              </p>
              <h3 className="mt-4 font-display text-3xl font-medium leading-[1.05] text-foreground md:text-[2.1rem]">
                {customSolution.name}
              </h3>
              <p className="mt-4 font-medium text-brand-dark">
                {customSolution.pitch}
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                {customSolution.description}
              </p>
              <ArrowLink href={customSolution.href} className="mt-7">
                Explore web &amp; mobile
              </ArrowLink>
            </div>
            <ul className="grid gap-x-10 gap-y-0 self-start sm:grid-cols-2 lg:col-span-7">
              {customSolution.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="flex items-start gap-3 border-t border-border py-4 text-sm leading-snug text-foreground"
                >
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {capability}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
