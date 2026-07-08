import { getTiposProgramas } from "@/lib/api";
import type { TipoPrograma } from "@/lib/types";
import Hero from "@/components/home/Hero";
import { RectorMessage } from "@/components/home/RectorMessage";
import { StatsSection } from "@/components/home/StatsSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { WhySection } from "@/components/home/WhySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TrustBarSection } from "@/components/home/TrustBarSection";
import { NewsSection } from "@/components/home/NewsSection";
import { CtaSection } from "@/components/home/CtaSection";
import { StudentInfo } from "@/components/home/StudentInfo";

export default async function Home() {
  let tipos: TipoPrograma[] = [];

  try {
    tipos = await getTiposProgramas();
  } catch (err) {
    console.warn("Home: API no disponible para tipos", err);
  }

  return (
    <>
      <Hero />
      <RectorMessage />
      <StatsSection />
      <ProgramsSection tipos={tipos} />
      <WhySection />
      <TestimonialsSection />
      <TrustBarSection />
      <NewsSection />
      <CtaSection />
      <StudentInfo />
    </>
  );
}
