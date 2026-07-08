import Container from "@/components/layout/Container";
import { SectionHeader } from "@/components/brand/SectionHeader";
import { BentoGrid, BentoItem } from "@/components/brand/Bento";
import { GraduationCap, Users, Globe, BookOpen, Award, Briefcase } from "lucide-react";

const values = [
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Excelencia Académica",
    description:
      "Programas rigurosos diseñados por académicos de primer nivel con investigación de frontera.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Docentes de Prestigio",
    description:
      "Investigadores y profesionales con trayectoria internacional que comparten su experiencia.",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Visión Internacional",
    description:
      "Convenios con universidades líderes y oportunidades de intercambio académico global.",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Flexibilidad",
    description:
      "Modalidades presencial, semipresencial y virtual para que curses a tu ritmo.",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: "Impacto profesional",
    description:
      "Impulsá tu carrera con redes de contacto, prácticas y vinculación con el sector.",
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: "Acreditación",
    description:
      "Programas reconocidos y acreditados por organismos nacionales e internacionales.",
  },
];

export function WhySection() {
  return (
    <section className="py-20 sm:py-28 bg-muted/50">
      <Container>
        <SectionHeader
          eyebrow="Por qué elegirnos"
          title="Una formación que transforma"
          description="Nuestra escuela combina tradición académica con visión de futuro para ofrecerte una experiencia educativa única."
        />

        <BentoGrid className="mt-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <BentoItem key={v.title} className="group transition-shadow hover:shadow-md">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                {v.icon}
              </div>
              <h3 className="text-base font-semibold text-slate-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {v.description}
              </p>
            </BentoItem>
          ))}
        </BentoGrid>
      </Container>
    </section>
  );
}
