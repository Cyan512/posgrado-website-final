import Container from "@/components/layout/Container";
import { SectionHeader } from "@/components/brand/SectionHeader";
import { TestimonialCard } from "@/components/brand/TestimonialCard";
import { RevealOnScroll } from "@/components/brand/RevealOnScroll";
import { TESTIMONIOS } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-brand-900">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <Container className="relative">
        <SectionHeader
          eyebrow="Testimonios"
          title="Lo que dicen nuestros graduados"
          description="Historias reales de profesionales que transformaron su carrera con nuestros programas."
          align="center"
          className="[&_h2]:text-white [&_p]:text-brand-200 [&_.text-brand-700]:text-gold-500 [&_.text-muted-foreground]:text-brand-200/70"
        />

        <RevealOnScroll className="mt-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIOS.map((t) => (
              <TestimonialCard key={t.nombre} {...t} />
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
