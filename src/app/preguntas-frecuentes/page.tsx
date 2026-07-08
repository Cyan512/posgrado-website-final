import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { SectionHeader } from "@/components/brand/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    q: "¿Cuáles son los requisitos de admisión?",
    a: "Los requisitos varían según el programa. Generalmente se solicita título universitario, hoja de vida actualizada, carta de motivación y entrevista personal. Visitá la sección de admisión para información detallada.",
  },
  {
    q: "¿Cuánto dura un programa de posgrado?",
    a: "Las maestrías suelen durar entre 2 y 4 semestres académicos. Los doctorados pueden extenderse entre 4 y 6 semestres, dependiendo del plan de estudios y la dedicación del estudiante.",
  },
  {
    q: "¿Ofrecen modalidades virtuales?",
    a: "Sí. Ofrecemos programas en modalidad presencial, semipresencial y virtual. La modalidad de cada programa está indicada en su página de detalle. Las modalidades virtuales cuentan con la misma calidad académica.",
  },
  {
    q: "¿Cuál es el costo de los programas?",
    a: "El costo varía según el programa. Cada página de detalle incluye una sección de inversión con el desglose completo de matrícula, cursos y opciones de pago en cuotas.",
  },
  {
    q: "¿Hay becas disponibles?",
    a: "Sí, contamos con diferentes tipos de becas: becas de excelencia académica, becas por convenio institucional y becas de investigación. Contactanos para conocer las opciones vigentes y los requisitos.",
  },
  {
    q: "¿Los títulos tienen validez internacional?",
    a: "Nuestros títulos son emitidos por una universidad reconocida oficialmente. Para el reconocimiento en el extranjero, se deben seguir los procesos de homologación del país de destino. Muchos países tienen convenios que facilitan este proceso.",
  },
  {
    q: "¿Puedo trabajar mientras estudio?",
    a: "Sí. Nuestros programas están diseñados para profesionales que continúan su actividad laboral. Los horarios de clases se adaptan para facilitar la compatibilidad con el trabajo.",
  },
  {
    q: "¿Cómo es el proceso de selección de docentes?",
    a: "Nuestros docentes son seleccionados por su trayectoria académica y profesional. Muchos son investigadores activos con publicaciones internacionales y experiencia en dirección de tesis de posgrado.",
  },
  {
    q: "¿Ofrecen programas de intercambio internacional?",
    a: "Sí, tenemos convenios con universidades de diversos países que permiten estancias de investigación, pasantías y participación en programas conjuntos.",
  },
  {
    q: "¿Puedo convalidar cursos de otros posgrados?",
    a: "Sí, es posible convalidar cursos de otros programas de posgrado, sujeto a la evaluación del comité académico. Cada caso se analiza de forma individual.",
  },
];

export default function FaqPage() {
  return (
    <Container className="py-8 sm:py-12">
      <Breadcrumb items={[{ label: "Preguntas frecuentes" }]} />

      <SectionHeader
        eyebrow="FAQ"
        title="Preguntas frecuentes"
        description="Encontrá respuestas a las dudas más comunes sobre nuestros programas de posgrado."
        align="left"
        className="!mx-0 mt-6 !max-w-none"
      />

      <div className="mt-14">
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
      </div>

      <div className="mt-16 rounded-2xl bg-muted/50 p-8 text-center sm:p-10">
        <h3 className="font-display text-2xl font-normal italic text-slate-900">
          ¿No encontraste lo que buscabas?
        </h3>
        <p className="mt-3 text-muted-foreground">
          Escribinos y te responderemos a la brevedad.
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link href="/contacto">Contactanos</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
