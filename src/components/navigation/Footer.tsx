import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { footerNav, site } from "@/lib/site";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/[0.06] bg-[var(--color-bg-raised)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-line)] to-transparent"
      />
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
              {site.description}
            </p>
            <div className="mt-8 space-y-3 text-sm text-[var(--color-fg-muted)]">
              <a
                href={`mailto:${site.contactEmail}`}
                className="flex items-center gap-3 hover:text-[var(--color-fg)]"
              >
                <Mail className="size-4 text-[var(--color-fg-subtle)]" />
                {site.contactEmail}
              </a>
              <a
                href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-3 hover:text-[var(--color-fg)]"
              >
                <Phone className="size-4 text-[var(--color-fg-subtle)]" />
                {site.phone}
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-[var(--color-fg-subtle)]" />
                <span>
                  {site.address.line1}, {site.address.line2}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </span>
              </div>
            </div>
          </div>

          {footerNav.map((group) => (
            <div key={group.title} className="md:col-span-2">
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-fg-subtle)]">
                {group.title}
              </div>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-fg-subtle)]">
              Hours
            </div>
            <p className="mt-4 text-sm text-[var(--color-fg-muted)]">
              {site.hours}
            </p>
            <div className="mt-8 rounded-[var(--radius-md)] border border-white/[0.06] bg-[var(--color-surface)] p-4">
              <div className="text-xs uppercase tracking-[0.12em] text-[var(--color-fg-subtle)]">
                Status
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-[var(--color-fg)]">
                <span className="relative grid place-items-center">
                  <span className="absolute size-2.5 animate-ping rounded-full bg-[var(--color-accent)] opacity-50" />
                  <span className="size-2 rounded-full bg-[var(--color-accent)]" />
                </span>
                All systems operational
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] py-8 text-xs text-[var(--color-fg-subtle)] sm:flex-row sm:items-center">
          <div>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>HIPAA-aligned operations</span>
            <span className="hidden sm:inline text-[var(--color-fg-faint)]">/</span>
            <Link href="/compliance" className="hover:text-[var(--color-fg-muted)]">
              Privacy and security
            </Link>
            <span className="hidden sm:inline text-[var(--color-fg-faint)]">/</span>
            <Link href="/contact" className="hover:text-[var(--color-fg-muted)]">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
