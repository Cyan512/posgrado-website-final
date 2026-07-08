"use client";

import { useState, useMemo } from "react";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { PageHero } from "@/components/brand/PageHero";
import { SectionDivider } from "@/components/brand/Ornament";
import { RevealOnScroll } from "@/components/brand/RevealOnScroll";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FAQ {
  q: string;
  a: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    q: "¿Cuáles son los requisitos de admisión?",
    a: "Los requisitos varían según el programa. Generalmente se solicita título universitario, hoja de vida actualizada, carta de motivación y entrevista personal. Visitá la sección de admisión para información detallada.",
    category: "admision",
  },
  {
    q: "¿Puedo postularme a más de un programa?",
    a: "Sí, podés postularte a más de un programa. Cada postulación se evalúa de forma independiente.",
    category: "admision",
  },
  {
    q: "¿Hay límite de edad para postular?",
    a: "No. Nuestros programas están abiertos a profesionales de todas las edades que cumplan con los requisitos académicos.",
    category: "admision",
  },
  {
    q: "¿Cuánto dura un programa de posgrado?",
    a: "Las maestrías suelen durar entre 2 y 4 semestres académicos. Los doctorados pueden extenderse entre 4 y 6 semestres, dependiendo del plan de estudios.",
    category: "academico",
  },
  {
    q: "¿Ofrecen modalidades virtuales?",
    a: "Sí. Ofrecemos programas en modalidad presencial, semipresencial y virtual. La modalidad de cada programa está indicada en su página de detalle.",
    category: "academico",
  },
  {
    q: "¿Puedo convalidar cursos de otros posgrados?",
    a: "Sí, es posible convalidar cursos de otros programas de posgrado, sujeto a la evaluación del comité académico. Cada caso se analiza de forma individual.",
    category: "academico",
  },
  {
    q: "¿Cuál es el costo de los programas?",
    a: "El costo varía según el programa. Cada página de detalle incluye una sección de inversión con el desglose completo de matrícula, cursos y opciones de pago en cuotas.",
    category: "financiero",
  },
  {
    q: "¿Hay becas disponibles?",
    a: "Sí, contamos con becas de excelencia académica, becas por convenio institucional y becas de investigación. Consultá la sección de admisión para más detalles.",
    category: "financiero",
  },
  {
    q: "¿Los títulos tienen validez internacional?",
    a: "Nuestros títulos son emitidos por una universidad reconocida oficialmente. Para el reconocimiento en el extranjero se deben seguir los procesos de homologación del país de destino.",
    category: "general",
  },
  {
    q: "¿Puedo trabajar mientras estudio?",
    a: "Sí. Nuestros programas están diseñados para profesionales que continúan su actividad laboral. Los horarios se adaptan para facilitar la compatibilidad.",
    category: "general",
  },
  {
    q: "¿Ofrecen programas de intercambio internacional?",
    a: "Sí, tenemos convenios con universidades de diversos países que permiten estancias de investigación, pasantías y participación en programas conjuntos.",
    category: "general",
  },
  {
    q: "¿Qué pasa si mi título es del extranjero?",
    a: "Los títulos emitidos por universidades extranjeras deben estar legalizados o apostillados. El comité de admisión evaluará la equivalencia.",
    category: "admision",
  },
];

const categories = [
  { value: "todas", label: "Todas" },
  { value: "admision", label: "Admisión" },
  { value: "academico", label: "Académico" },
  { value: "financiero", label: "Financiero" },
  { value: "general", label: "General" },
];

export default function FaqPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("todas");

  const filtered = useMemo(() => {
    return faqs.filter((f) => {
      const matchCategory = activeCategory === "todas" || f.category === activeCategory;
      const matchSearch =
        !search ||
        f.q.toLowerCase().includes(search.toLowerCase()) ||
        f.a.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [search, activeCategory]);

  const grouped = useMemo(() => {
    const groups: Record<string, FAQ[]> = {};
    for (const f of filtered) {
      if (!groups[f.category]) groups[f.category] = [];
      groups[f.category].push(f);
    }
    return groups;
  }, [filtered]);

  const categoryLabels: Record<string, string> = {
    admision: "Admisión",
    academico: "Académico",
    financiero: "Financiero",
    general: "General",
  };

  return (
    <>
      <PageHero
        variant="default"
        eyebrow="FAQ"
        title="Preguntas frecuentes"
        description="Encontrá respuestas a las dudas más comunes sobre nuestros programas de posgrado."
      />

      <Container className="py-8 sm:py-12">
        <Breadcrumb items={[{ label: "Preguntas frecuentes" }]} />
      </Container>

      <div className="pb-20">
        <Container>
          <RevealOnScroll>
            <div className="mb-10 space-y-4">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar en preguntas frecuentes..."
                  className="h-11 pl-10 pr-10"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label="Limpiar búsqueda"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setActiveCategory(cat.value)}
                    className={cn(
                      "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                      activeCategory === cat.value
                        ? "bg-brand-800 text-white"
                        : "bg-muted text-muted-foreground hover:bg-brand-50 hover:text-brand-700"
                    )}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-lg font-medium text-slate-900">
                  Sin resultados
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  No se encontraron preguntas que coincidan con tu búsqueda.
                </p>
                <div className="mt-6">
                  <Button variant="outline" asChild>
                    <Link href="/contacto">Contactanos</Link>
                  </Button>
                </div>
              </div>
            ) : activeCategory === "todas" ? (
              <div className="space-y-10">
                {Object.entries(grouped).map(([cat, items]) => (
                  <div key={cat}>
                    <h2 className="mb-4 font-display text-xl font-normal italic text-slate-900">
                      {categoryLabels[cat] ?? cat}
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                      {items.map((faq, i) => (
                        <AccordionItem key={i} value={`${cat}-${i}`}>
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
                ))}
              </div>
            ) : (
              <Accordion type="single" collapsible className="w-full">
                {filtered.map((faq, i) => (
                  <AccordionItem key={i} value={`filtered-${i}`}>
                    <AccordionTrigger className="text-left text-base font-medium">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </RevealOnScroll>

          <SectionDivider className="mt-20" />

          <RevealOnScroll>
            <div className="mt-20 rounded-2xl bg-muted/50 p-8 text-center sm:p-10">
              <h3 className="font-display text-2xl font-normal italic text-slate-900">
                ¿No encontraste lo que buscabas?
              </h3>
              <p className="mt-3 text-muted-foreground">
                Escribinos y te responderemos a la brevedad.
              </p>
              <div className="mt-6">
                <Button asChild size="lg">
                  <Link href="/contacto">Contactanos</Link>
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </div>
    </>
  );
}
