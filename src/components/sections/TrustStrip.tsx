import { Container } from "@/components/ui/Container";
import { positioningPoints } from "@/content/siteCopy";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { MotionItem } from "@/components/motion/MotionItem";

export function TrustStrip() {
  return (
    <section className="relative border-y border-white/[0.05] bg-[var(--color-bg-raised)]">
      <Container>
        <MotionStagger
          as="dl"
          className="grid gap-y-10 py-14 sm:grid-cols-2 sm:py-16 lg:grid-cols-4"
          staggerChildren={0.06}
        >
          {positioningPoints.map((p, i) => (
            <MotionItem
              key={p.title}
              className={[
                "px-2 sm:px-6",
                i > 0 ? "lg:border-l lg:border-white/[0.05]" : "",
              ].join(" ")}
            >
              <dt className="text-2xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-[26px]">
                <span className="text-gradient-accent">{p.title}</span>
              </dt>
              <dd className="mt-3 text-[14.5px] leading-relaxed text-[var(--color-fg-muted)]">
                {p.body}
              </dd>
            </MotionItem>
          ))}
        </MotionStagger>
      </Container>
    </section>
  );
}
