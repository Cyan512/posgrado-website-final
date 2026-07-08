import Container from "@/components/layout/Container";
import { SectionHeader } from "@/components/brand/SectionHeader";
import { StatBlock } from "@/components/brand/StatBlock";

const stats = [
  { value: "50+", label: "Años de trayectoria" },
  { value: "25+", label: "Programas académicos" },
  { value: "5,000+", label: "Graduados" },
  { value: "90%", label: "Tasa de empleabilidad" },
];

export function StatsSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="En números"
          title="Resultados que hablan por sí solos"
        />
        <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <StatBlock key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
