import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to a behavioral health billing specialist. We respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            <span className="text-gradient">Tell us about your practice.</span>{" "}
            <span className="text-gradient-accent">We will reply within a day.</span>
          </>
        }
        description="No automated qualifying funnel. A real person from our team will reach out, learn about your situation, and tell you whether we are the right fit."
      />

      <Section className="!py-16 sm:!py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-[var(--radius-xl)] border border-white/[0.06] bg-[var(--color-surface)] p-7">
              <h2 className="text-lg font-semibold tracking-tight">
                Talk to us directly
              </h2>
              <p className="mt-2 text-sm text-[var(--color-fg-muted)]">
                Prefer to skip the form? Reach out the old fashioned way.
              </p>
              <div className="mt-6 space-y-4 text-sm">
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="group flex items-start gap-3 text-[var(--color-fg)]"
                >
                  <span className="mt-0.5 grid size-9 place-items-center rounded-[var(--radius-md)] border border-white/[0.06] bg-[var(--color-bg-raised)] text-[var(--color-accent)]">
                    <Mail className="size-4" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.12em] text-[var(--color-fg-subtle)]">
                      Email
                    </span>
                    <span className="mt-0.5 block group-hover:text-[var(--color-accent)]">
                      {site.contactEmail}
                    </span>
                  </span>
                </a>
                <a
                  href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
                  className="group flex items-start gap-3 text-[var(--color-fg)]"
                >
                  <span className="mt-0.5 grid size-9 place-items-center rounded-[var(--radius-md)] border border-white/[0.06] bg-[var(--color-bg-raised)] text-[var(--color-accent)]">
                    <Phone className="size-4" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.12em] text-[var(--color-fg-subtle)]">
                      Phone
                    </span>
                    <span className="mt-0.5 block group-hover:text-[var(--color-accent)]">
                      {site.phone}
                    </span>
                  </span>
                </a>
                <div className="flex items-start gap-3 text-[var(--color-fg)]">
                  <span className="mt-0.5 grid size-9 place-items-center rounded-[var(--radius-md)] border border-white/[0.06] bg-[var(--color-bg-raised)] text-[var(--color-accent)]">
                    <MapPin className="size-4" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.12em] text-[var(--color-fg-subtle)]">
                      Office
                    </span>
                    <span className="mt-0.5 block">
                      {site.address.line1}, {site.address.line2}
                      <br />
                      {site.address.city}, {site.address.state} {site.address.zip}
                    </span>
                  </span>
                </div>
                <div className="flex items-start gap-3 text-[var(--color-fg)]">
                  <span className="mt-0.5 grid size-9 place-items-center rounded-[var(--radius-md)] border border-white/[0.06] bg-[var(--color-bg-raised)] text-[var(--color-accent)]">
                    <Clock className="size-4" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.12em] text-[var(--color-fg-subtle)]">
                      Hours
                    </span>
                    <span className="mt-0.5 block">{site.hours}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[var(--radius-xl)] border border-white/[0.06] bg-[var(--color-bg-raised)] p-7 text-sm text-[var(--color-fg-muted)]">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-fg-subtle)]">
                What happens next
              </div>
              <ol className="mt-4 space-y-3">
                <li className="flex gap-3">
                  <span className="font-mono text-[var(--color-accent)]">01</span>
                  <span>We acknowledge your message within one business day.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-[var(--color-accent)]">02</span>
                  <span>A 30-minute discovery call to understand your practice.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-[var(--color-accent)]">03</span>
                  <span>A written proposal with scope, timeline, and pricing.</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[var(--radius-xl)] border border-white/[0.06] bg-[var(--color-surface)] p-7 sm:p-9">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      <Container>
        <div className="mx-auto mt-4 max-w-2xl pb-20 text-center text-xs text-[var(--color-fg-subtle)]">
          Please do not include protected health information (PHI) in this form.
          For client support requests involving PHI, use your secure portal.
        </div>
      </Container>
    </>
  );
}
