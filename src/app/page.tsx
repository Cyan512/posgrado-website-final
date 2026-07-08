import Hero from "@/components/home/Hero";
import { StatsSection } from "@/components/home/StatsSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { WhySection } from "@/components/home/WhySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TrustBarSection } from "@/components/home/TrustBarSection";
import { NewsSection } from "@/components/home/NewsSection";
import { CtaSection } from "@/components/home/CtaSection";
import { FaqSection } from "@/components/home/FaqSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ProgramsSection />
      <WhySection />
      <TestimonialsSection />
      <TrustBarSection />
      <NewsSection />
      <CtaSection />
      <FaqSection />
    </>
  );
}
