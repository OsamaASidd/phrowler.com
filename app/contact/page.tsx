import type { Metadata } from "next";
import Container from "@/components/Container";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Phrowler about your ERP integration, compliance, or AI automation project.",
};

const formEndpoint =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/REPLACE_ME";

export default function ContactPage() {
  return (
    <section className="py-20">
      <Container className="grid gap-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="font-mono-label text-xs uppercase text-brand">
            Contact
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Let&apos;s scope it.
          </h1>
          <p className="mt-6 text-muted">
            Tell us what systems you&apos;re working with and what deadline
            you&apos;re up against. We usually reply within one business
            day.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <div>
              <div className="font-medium text-foreground">Email</div>
              <a
                href={`mailto:${site.email}`}
                className="text-muted hover:text-brand transition-colors"
              >
                {site.email}
              </a>
            </div>
            <div>
              <div className="font-medium text-foreground">Location</div>
              <div className="text-muted">{site.location}</div>
            </div>
            <div>
              <div className="font-medium text-foreground">Elsewhere</div>
              <div className="flex gap-4">
                <a
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-brand transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={site.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-brand transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <form
          action={formEndpoint}
          method="POST"
          className="md:col-span-3 space-y-6 border border-border p-8"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-sm border border-border px-4 py-2.5 text-sm outline-none focus:border-ink"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-sm border border-border px-4 py-2.5 text-sm outline-none focus:border-ink"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="text-sm font-medium text-foreground">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="mt-2 w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-brand"
            />
          </div>

          <div>
            <label htmlFor="systems" className="text-sm font-medium text-foreground">
              What systems are involved?
            </label>
            <input
              id="systems"
              name="systems"
              type="text"
              placeholder="e.g. SAP S/4HANA, Sage X3, ERPNext"
              className="mt-2 w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-brand"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-2 w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-brand"
            />
          </div>

          <input type="hidden" name="_subject" value="New inquiry from phrowler.com" />

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-sm bg-ink px-6 py-3 text-sm font-medium text-background hover:bg-brand transition-colors"
          >
            Send message
          </button>
        </form>
      </Container>
    </section>
  );
}
