import Container from "./Container";
import Logo from "./Logo";
import Button from "./Button";
import { nav, erpServices, aiServices, webMobileServices } from "@/lib/data";
import MobileNav from "./MobileNav";
import NavDropdown from "./NavDropdown";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden h-full items-center gap-8 md:flex">
          {nav.map((item) => {
            if (item.href === "/erp/") {
              return (
                <NavDropdown
                  key={item.href}
                  label={item.label}
                  href={item.href}
                  services={erpServices}
                />
              );
            }
            if (item.href === "/ai/") {
              return (
                <NavDropdown
                  key={item.href}
                  label={item.label}
                  href={item.href}
                  services={aiServices}
                />
              );
            }
            if (item.href === "/web-mobile/") {
              return (
                <NavDropdown
                  key={item.href}
                  label={item.label}
                  href={item.href}
                  services={webMobileServices}
                />
              );
            }
            return (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <Button href="/contact/" variant="primary">
            Start a project
          </Button>
        </div>
        <MobileNav />
      </Container>
    </header>
  );
}
