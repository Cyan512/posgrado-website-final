import Hero from "@/components/home/Hero";
import { StatsSection } from "@/components/home/StatsSection";
import { WhySection } from "@/components/home/WhySection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { CtaSection } from "@/components/home/CtaSection";
import { FaqSection } from "@/components/home/FaqSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ProgramsSection />
      <WhySection />
      <CtaSection />
      <FaqSection />
    </>
  );
}
