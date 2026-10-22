import Link from "next/link";
import Container from "@/components/Container";
import { site } from "@/lib/data";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 right-0 select-none font-display text-[26vw] font-semibold leading-none text-outline-light opacity-50 lg:-bottom-10 lg:text-[15rem]"
      >
        Phrowler
      </span>

      <Container className="relative z-10 grid gap-12 py-20 md:py-32 lg:grid-cols-[1.25fr_1fr] lg:items-end">
        <Reveal>
          <Eyebrow tone="dark">Start a conversation</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-[2.5rem] font-medium leading-[1] md:text-[3.5rem] lg:text-[4rem]">
            Tell us what is breaking. We will tell you what it takes to fix it.
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-paper/55">
            A short conversation is usually enough to know whether we can help,
            and roughly what it would involve. We reply within one business day.
          </p>
        </Reveal>

        <Reveal delay={100} className="flex flex-col gap-6 lg:items-end">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-bright px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-paper"
            >
              Discuss your project
            </Link>
            <a
              href={site.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:border-paper"
            >
              Message on WhatsApp
            </a>
          </div>
          <p className="text-sm text-paper/50 lg:text-right">
            Or email{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-brand-bright underline underline-offset-4 transition-colors hover:text-paper"
            >
              {site.email}
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
