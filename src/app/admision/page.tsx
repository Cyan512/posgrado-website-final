import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { PageHero } from "@/components/brand/PageHero";
import { Section } from "@/components/brand/Section";
import { SectionDivider } from "@/components/brand/Ornament";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/brand/RevealOnScroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FileText,
  ClipboardCheck,
  CalendarCheck,
  UserCheck,
  GraduationCap,
  Clock,
  Award,
} from "lucide-react";
import { BECAS, FECHAS_ADMISION } from "@/lib/data";
import { IMAGES, IMAGE_ALTS } from "@/lib/images";
import Link from "next/link";

const steps = [
  {
    icon: <FileText className="h-6 w-6" />,
    number: "01",
    title: "Revisión de requisitos",
    description:
      "Consultá los requisitos específicos del programa al que deseás postular. Cada programa puede tener condiciones particulares de admisión.",
  },
  {
    icon: <ClipboardCheck className="h-6 w-6" />,
    number: "02",
    title: "Preparación de documentos",
    description:
      "Reuní tu documentación: título universitario, hoja de vida actualizada, carta de motivación y documentos de identidad.",
  },
  {
    icon: <CalendarCheck className="h-6 w-6" />,
    number: "03",
    title: "Inscripción en línea",
    description:
      "Completá el formulario de inscripción y adjuntá todos los documentos requeridos. Recibirás una confirmación por correo electrónico.",
  },
  {
    icon: <UserCheck className="h-6 w-6" />,
    number: "04",
    title: "Entrevista y evaluación",
    description:
      "El comité de admisión evaluará tu perfil. Se programará una entrevista personal para conocer tus motivaciones y objetivos.",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    number: "05",
    title: "Matrícula",
    description:
      "Una vez admitido, completá tu matrícula y comenzá tu formación de posgrado con nosotros.",
  },
];

const requirements = [
  "Título universitario de grado (o equivalente)",
  "Hoja de vida actualizada (CV)",
  "Carta de motivación personal",
  "Documento nacional de identidad o pasaporte",
  "Certificado de notas de pregrado",
  "Fotografía tamaño carnet reciente",
];

const admissionFAQ = [
  {
    q: "¿Puedo postularme a más de un programa?",
    a: "Sí, podés postularte a más de un programa. Cada postulación se evalúa de forma independiente. Deberás presentar la documentación requerida para cada uno.",
  },
  {
    q: "¿Hay límite de edad para postular?",
    a: "No. Nuestros programas están abiertos a profesionales de todas las edades que cumplan con los requisitos académicos establecidos.",
  },
  {
    q: "¿Qué pasa si mi título es del extranjero?",
    a: "Los títulos emitidos por universidades extranjeras deben estar legalizados o apostillados según corresponda. El comité de admisión evaluará la equivalencia.",
  },
  {
    q: "¿Se puede solicitar prórroga para la presentación de documentos?",
    a: "Sí, es posible solicitar una prórroga justificada. Debes comunicarte con la oficina de admisión antes de la fecha límite.",
  },
];

export default function AdmisionPage() {
  return (
    <>
      <PageHero
        variant="dark"
        image={IMAGES.lecture}
        imageAlt={IMAGE_ALTS.lecture}
        eyebrow="Admisión 2025"
        title="Tu próximo paso comienza acá"
        description="Conocé el proceso para postularte a nuestros programas de posgrado. Te acompañamos en cada etapa."
      />

      <Container className="py-8 sm:py-12">
        <Breadcrumb items={[{ label: "Admisión" }]} />
      </Container>

      <Section number="01" title="Proceso de admisión" className="pt-0">
        <RevealOnScroll>
          <div className="space-y-4">
            {steps.map((step) => (
              <Card key={step.number}>
                <CardContent className="flex gap-6 p-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                    {step.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-lg font-bold text-brand-600">
                        {step.number}
                      </span>
                      <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealOnScroll>
      </Section>

      <SectionDivider className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />

      <Section number="02" title="Fechas clave">
        <RevealOnScroll>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FECHAS_ADMISION.map((f) => (
              <Card key={f.evento}>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-brand-600" />
                    <span className="text-xs font-medium text-brand-600">{f.fecha}</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">{f.evento}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealOnScroll>
      </Section>

      <SectionDivider className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />

      <Section number="03" title="Becas y financiamiento">
        <RevealOnScroll>
          <div className="grid gap-6 sm:grid-cols-3">
            {BECAS.map((b) => (
              <Card key={b.nombre} className="transition-shadow hover:shadow-md">
                <CardContent className="flex flex-col p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gold-50 text-gold-700">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">{b.nombre}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-slate-700">Cobertura:</span> {b.cobertura}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-slate-700">Requisitos:</span> {b.requisitos}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealOnScroll>
      </Section>

      <SectionDivider className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />

      <Section number="04" title="Requisitos generales">
        <RevealOnScroll>
          <Card>
            <CardContent className="p-6 sm:p-8">
              <ul className="grid gap-3 sm:grid-cols-2">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-600" />
                    {req}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </RevealOnScroll>
      </Section>

      <Section number="05" title="Preguntas frecuentes">
        <RevealOnScroll>
          <Accordion type="single" collapsible className="w-full max-w-2xl">
            {admissionFAQ.map((faq, i) => (
              <AccordionItem key={i} value={`adm-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealOnScroll>
      </Section>

      <SectionDivider className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />

      <section className="pb-20">
        <Container>
          <RevealOnScroll>
            <Card className="bg-brand-900 text-center">
              <CardContent className="p-10 sm:p-12">
                <h3 className="font-display text-2xl font-normal italic text-white sm:text-3xl">
                  ¿Necesitás orientación personalizada?
                </h3>
                <p className="mx-auto mt-3 max-w-md text-brand-200">
                  Nuestro equipo de admisión está para ayudarte a elegir el programa ideal.
                </p>
                <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button asChild size="lg" className="bg-white text-brand-900 hover:bg-brand-50">
                    <Link href="/contacto">Hablar con un asesor</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                    <Link href="/maestria">Explorar programas</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </RevealOnScroll>
        </Container>
      </section>
    </>
  );
}
