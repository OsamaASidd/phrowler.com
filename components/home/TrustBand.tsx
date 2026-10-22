import Image from "next/image";
import Container from "@/components/Container";
import { platforms, stats } from "@/lib/data";
import Counter from "./Counter";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function TrustBand() {
  return (
    <section aria-label="Phrowler credentials" className="bg-ink text-paper">
      <Container className="py-16 md:py-24">
        <Reveal className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Eyebrow tone="dark">By the numbers</Eyebrow>
            <h2 className="mt-5 max-w-sm font-display text-3xl font-medium leading-[1.05] md:text-4xl">
              Credentials, not adjectives.
            </h2>
            <p className="mt-5 max-w-sm text-paper/55">
              The figures below come from delivery work that is still running in
              production today, not a slide deck.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {stats.map((stat) => (
              <div key={stat.label} className="border-t border-white/15 pt-6">
                <div className="flex flex-col-reverse">
                  <dt className="mt-4 text-sm leading-snug text-paper/55">
                    {stat.label}
                  </dt>
                  <dd>
                    <span
                      className="mb-5 block h-1 w-8 bg-brand-bright"
                      aria-hidden="true"
                    />
                    <span className="font-display text-5xl font-medium leading-none text-paper md:text-[3.25rem]">
                      <Counter value={stat.value} />
                    </span>
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-14 border-t border-white/15 pt-8">
            <p className="font-mono-label text-[10px] uppercase text-paper/60">
              Platforms we implement &amp; integrate
            </p>
            <ul className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-6">
              {platforms.map((platform) => (
                <li key={platform.name}>
                  <Image
                    src={`/assets/logos/${platform.logo}`}
                    alt={platform.name}
                    width={72}
                    height={32}
                    className="h-7 w-auto opacity-65 brightness-0 invert transition-opacity hover:opacity-100"
                  />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
