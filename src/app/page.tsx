import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { IntegrationsStrip } from "@/components/sections/IntegrationsStrip";
import { FeaturePillars } from "@/components/sections/FeaturePillars";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Specialties } from "@/components/sections/Specialties";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <IntegrationsStrip />
      <FeaturePillars />
      <ProcessSteps />
      <Specialties />
      <Testimonials />
      <CTASection />
    </>
  );
}
