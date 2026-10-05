import Container from "./Container";
import Logo from "./Logo";
import { nav, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted-bg">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-3 text-sm text-muted">{site.description}</p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span className="font-medium text-foreground">Site</span>
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted hover:text-brand transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span className="font-medium text-foreground">Contact</span>
          <a
            href={`mailto:${site.email}`}
            className="text-muted hover:text-brand transition-colors"
          >
            {site.email}
          </a>
          <a
            href={site.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-brand transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </Container>
      <Container className="border-t border-border py-6">
        <p className="text-xs text-muted">
          © 2016 {site.name}. All rights reserved.
        </p>
        <p className="mt-1 text-xs text-muted">
          {site.name} is the trading name of {site.legal.entityName}, CR No.{" "}
          {site.legal.registrationNumber}, License No. {site.legal.licenseNumber},{" "}
          {site.legal.jurisdiction}.
        </p>
        <p className="mt-1 text-xs text-muted">{site.legal.address}</p>
      </Container>
    </footer>
  );
}
