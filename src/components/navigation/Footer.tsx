import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { footerNav, site } from "@/lib/site";
import { Mail, Phone, MapPin } from "lucide-react";

const operationalNotes = [
  {
    label: "Response time",
    text: "Typically within one business day.",
  },
  {
    label: "Focus",
    text: "Therapy, psychiatry, and ABA workflows.",
  },
  {
    label: "Reach",
    text: "Serving behavioral health practices remotely across the U.S.",
  },
];

export function Footer() {
  return (
    <footer className="relative mt-28 border-t border-white/[0.06] bg-[var(--color-bg-raised)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-line)] to-transparent"
      />
      <Container>
        <div className="grid gap-y-16 gap-x-8 py-20 sm:gap-x-10 md:grid-cols-12 md:gap-y-0 md:py-24 lg:gap-x-14">
          {/* Brand + contact — slightly narrower prose so the grid feels balanced */}
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-7 max-w-[19.25rem] text-[15px] leading-[1.65] text-[var(--color-fg-muted)]">
              {site.description}
            </p>
            <p className="mt-5 max-w-[19.25rem] border-l-2 border-[var(--color-accent-line)] pl-4 text-[13px] leading-relaxed text-[var(--color-fg-muted)]">
              Focused exclusively on behavioral health revenue cycle operations—built
              around transparent workflows and operational clarity.
            </p>
            <p className="mt-3 max-w-[19.25rem] text-[12px] leading-relaxed text-[var(--color-fg-subtle)]">
              Supporting independent behavioral health practices.
            </p>

            <div className="mt-10">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-fg-subtle)]">
                Contact
              </div>
              <div className="mt-4 space-y-4 text-sm text-[var(--color-fg-muted)]">
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="flex items-start gap-3 transition-colors hover:text-[var(--color-fg)]"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-[var(--color-fg-subtle)]" />
                  <span className="break-all">{site.contactEmail}</span>
                </a>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="flex items-start gap-3 transition-colors hover:text-[var(--color-fg)]"
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-[var(--color-fg-subtle)]" />
                  <span className="tabular-nums">{site.phone}</span>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--color-fg-subtle)]" />
                  <span className="leading-relaxed">
                    {site.address.line1}, {site.address.line2}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-2 md:col-span-4 md:grid-cols-2 md:gap-x-10 lg:gap-x-12">
            {footerNav.map((group) => (
              <div key={group.title}>
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-fg-subtle)]">
                  {group.title}
                </div>
                <ul className="mt-5 space-y-3.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[14px] leading-snug text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Hours + operational context — extra column width for the card */}
          <div className="md:col-span-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-fg-subtle)]">
              Hours
            </div>
            <p className="mt-5 text-[14px] leading-relaxed text-[var(--color-fg)]">
              {site.hours}
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-fg-muted)]">
              Built for modern behavioral health operations.
            </p>

            <div className="mt-10 rounded-[var(--radius-xl)] border border-white/[0.045] bg-gradient-to-b from-[var(--color-surface-2)] to-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)] ring-1 ring-inset ring-white/[0.04] sm:p-7">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-fg-subtle)]">
                How we work with you
              </div>
              <dl className="mt-6 space-y-6">
                {operationalNotes.map((row) => (
                  <div key={row.label}>
                    <dt className="text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--color-fg-subtle)]">
                      {row.label}
                    </dt>
                    <dd className="mt-2 text-[13px] leading-relaxed text-[var(--color-fg-muted)]">
                      {row.text}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-5 border-t border-white/[0.06] py-10 text-[12px] leading-relaxed text-[var(--color-fg-subtle)] sm:flex-row sm:items-center">
          <div className="text-[var(--color-fg-subtle)]">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-[var(--color-fg-muted)]">HIPAA-aligned operations</span>
            <span className="hidden sm:inline text-[var(--color-fg-faint)]">/</span>
            <Link
              href="/privacy-policy"
              className="text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
            >
              Privacy Policy
            </Link>
            <span className="hidden sm:inline text-[var(--color-fg-faint)]">/</span>
            <Link
              href="/contact"
              className="text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
