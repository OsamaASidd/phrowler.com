import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Phrowler about your ERP integration, compliance, or AI automation project.",
};

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
              <div className="font-medium text-foreground">WhatsApp</div>
              <a
                href={site.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-brand transition-colors"
              >
                {site.whatsapp}
              </a>
            </div>
            <div>
              <div className="font-medium text-foreground">Location</div>
              <div className="text-muted">{site.location}</div>
            </div>
          </div>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}
