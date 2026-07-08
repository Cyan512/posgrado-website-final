import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { SectionHeader } from "@/components/brand/SectionHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { FileText, ClipboardCheck, CalendarCheck, UserCheck, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    icon: <FileText className="h-5 w-5" />,
    number: "01",
    title: "Revisión de requisitos",
    description:
      "Consultá los requisitos específicos del programa al que deseás postular. Cada programa puede tener condiciones particulares de admisión.",
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    number: "02",
    title: "Preparación de documentos",
    description:
      "Reuní tu documentación: título universitario, hoja de vida actualizada, carta de motivación y documentos de identidad.",
  },
  {
    icon: <CalendarCheck className="h-5 w-5" />,
    number: "03",
    title: "Inscripción en línea",
    description:
      "Completá el formulario de inscripción y adjuntá todos los documentos requeridos. Recibirás una confirmación por correo electrónico.",
  },
  {
    icon: <UserCheck className="h-5 w-5" />,
    number: "04",
    title: "Entrevista y evaluación",
    description:
      "El comité de admisión evaluará tu perfil. Se programará una entrevista personal para conocer tus motivaciones y objetivos.",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
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

export default function AdmisionPage() {
  return (
    <Container className="py-8 sm:py-12">
      <Breadcrumb items={[{ label: "Admisión" }]} />

      <SectionHeader
        eyebrow="Proceso de admisión"
        title="Comenzá tu camino académico"
        description="Conocé los pasos para postularte a nuestros programas de posgrado. Te acompañamos en cada etapa del proceso."
        align="left"
        className="!mx-0 mt-6 !max-w-none"
      />

      <div className="mt-14 space-y-6">
        {steps.map((step) => (
          <Card key={step.number}>
            <CardContent className="flex gap-6 p-6">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                {step.icon}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-brand-600">{step.number}</span>
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

      <div className="mt-16 rounded-2xl border border-border bg-muted/50 p-8 sm:p-10">
        <h3 className="font-display text-2xl font-normal italic text-slate-900 sm:text-3xl">
          Requisitos generales
        </h3>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {requirements.map((req) => (
            <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-0.5 text-brand-600">&bull;</span>
              {req}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 rounded-2xl bg-brand-900 p-8 text-center sm:p-12">
        <h3 className="font-display text-2xl font-normal italic text-white sm:text-3xl">
          ¿Listo para postularte?
        </h3>
        <p className="mx-auto mt-3 max-w-md text-brand-200">
          Si tenés dudas sobre el proceso de admisión, nuestro equipo está para ayudarte.
        </p>
        <div className="mt-6">
          <Button asChild className="bg-white text-brand-900 hover:bg-brand-50">
            <Link href="/contacto">Contactanos</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
