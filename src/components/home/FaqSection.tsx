import Link from "next/link";
import Container from "@/components/layout/Container";
import { SectionHeader } from "@/components/brand/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cuáles son los requisitos de admisión?",
    a: "Los requisitos varían según el programa. Generalmente se solicita título universitario, hoja de vida, carta de motivación y entrevista personal. Consultá la página de admisión para más detalles.",
  },
  {
    q: "¿Cuánto dura un programa de posgrado?",
    a: "Las maestrías suelen durar entre 2 y 4 semestres académicos, mientras que los doctorados pueden extenderse entre 4 y 6 semestres, dependiendo del plan de estudios.",
  },
  {
    q: "¿Ofrecen modalidades virtuales?",
    a: "Sí. Contamos con programas en modalidad presencial, semipresencial y virtual. Cada programa indica su modalidad en la página de detalle.",
  },
  {
    q: "¿Hay becas o financiamiento disponible?",
    a: "Sí, ofrecemos diferentes opciones de becas y planes de financiamiento. Te recomendamos visitar la sección de admisión o contactarnos directamente para conocer las opciones vigentes.",
  },
  {
    q: "¿Los programas están acreditados?",
    a: "Todos nuestros programas cuentan con las acreditaciones correspondientes de los organismos nacionales de educación superior.",
  },
];

export function FaqSection() {
  return (
    <section className="py-20 sm:py-28 bg-muted/50">
      <Container>
        <SectionHeader
          eyebrow="Preguntas frecuentes"
          title="Resolvé tus dudas"
        />

        <div className="mx-auto mt-14 max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <Button variant="outline" asChild>
              <Link href="/preguntas-frecuentes">Ver todas las preguntas</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
