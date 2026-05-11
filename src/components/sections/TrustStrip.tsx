import { Container } from "@/components/ui/Container";
import { trustStats } from "@/content/siteCopy";

export function TrustStrip() {
  return (
    <section className="relative border-y border-white/[0.05] bg-[var(--color-bg-raised)]">
      <Container>
        <dl className="grid grid-cols-2 gap-y-10 py-14 sm:py-16 md:grid-cols-4">
          {trustStats.map((s) => (
            <div key={s.label} className="px-2 sm:px-4">
              <dt className="text-xs uppercase tracking-[0.14em] text-[var(--color-fg-subtle)]">
                {s.label}
              </dt>
              <dd className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-fg)] tabular-nums sm:text-4xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
