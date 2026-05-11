import { Container } from "@/components/ui/Container";

const ehrs = [
  "SimplePractice",
  "TheraNest",
  "TherapyNotes",
  "AdvancedMD",
  "Tebra",
  "Athena",
  "DrChrono",
  "Kareo",
];

export function IntegrationsStrip() {
  return (
    <section className="py-16">
      <Container>
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
            We work inside your EHR
          </p>
        </div>
        <div className="relative mt-8 overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--color-bg)] to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--color-bg)] to-transparent"
          />
          <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {ehrs.map((name) => (
              <li
                key={name}
                className="text-base font-medium tracking-tight text-[var(--color-fg-subtle)] transition-colors hover:text-[var(--color-fg-muted)]"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
