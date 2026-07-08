import { getProgramaBySlug } from "@/lib/api";
import { IMAGES, IMAGE_ALTS } from "@/lib/images";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { PageHero } from "@/components/brand/PageHero";
import { SectionDivider } from "@/components/brand/Ornament";
import { RevealOnScroll } from "@/components/brand/RevealOnScroll";
import { RelatedProgrammes } from "@/components/brand/RelatedProgrammes";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Section } from "@/components/brand/Section";
import { MODALIDAD_MAP } from "@/lib/constants";
import { formatPEN } from "@/lib/format";
import type { ProgramaDetalleResponse, AsignaturaPorPeriodo } from "@/lib/types";
import {
  Building2,
  Clock,
  GraduationCap,
  BookOpen,
  Wallet,
  Target,
  ListChecks,
  UserCheck,
  ArrowRight,
  Share2,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

interface Props {
  params: Promise<{ tipo: string; programa: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { programa } = await params;
  try {
    const data = await getProgramaBySlug(programa);
    return {
      title: data.nombre,
      description: data.objetivoGeneral?.slice(0, 160) ?? `Detalle del programa ${data.nombre}.`,
      openGraph: {
        title: `${data.nombre} | Escuela de Posgrado`,
        description: data.objetivoGeneral?.slice(0, 160) ?? `Detalle del programa ${data.nombre}.`,
        type: "article",
      },
    };
  } catch {
    return { title: "Programa no encontrado" };
  }
}

export default async function ProgramaPage({ params }: Props) {
  const { tipo, programa } = await params;
  const data = await getProgramaBySlug(programa);

  const modalidad = MODALIDAD_MAP[data.modalidad ?? ""] ?? {
    label: data.modalidad ?? "N/A",
    color: "",
  };

  const totalCreditos = data.asignaturasPorPeriodo.reduce(
    (sum, b) => sum + b.asignaturas.reduce((s, a) => s + a.creditos, 0),
    0
  );
  const totalAsignaturas = data.asignaturasPorPeriodo.reduce(
    (sum, b) => sum + b.asignaturas.length,
    0
  );
  const totalPeriodos = data.asignaturasPorPeriodo.length;

  return (
    <>
      <PageHero
        variant="dark"
        image={IMAGES.graduates}
        imageAlt={IMAGE_ALTS.graduates}
        eyebrow={tipo.charAt(0).toUpperCase() + tipo.slice(1)}
        title={data.nombre}
        stats={[
          { value: String(totalCreditos), label: "Créditos" },
          { value: String(totalAsignaturas), label: "Materias" },
          { value: String(totalPeriodos), label: "Periodos" },
        ]}
      />

      <Container className="py-8 sm:py-12">
        <Breadcrumb
          items={[
            { label: tipo, href: `/${tipo}` },
            { label: data.nombre },
          ]}
        />
      </Container>

      <div className="pb-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_320px]">
            <div>
              <RevealOnScroll>
                <div className="mb-10 grid gap-4 sm:grid-cols-3">
                  <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 shadow-sm border-l-4 border-l-brand-600">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Modalidad</p>
                      <p className="text-sm font-semibold">{modalidad.label}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 shadow-sm border-l-4 border-l-amber-600">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Facultad</p>
                      <p className="text-sm font-semibold">{data.facultad?.nombreFacultad ?? "—"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 shadow-sm border-l-4 border-l-emerald-600">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Duración</p>
                      <p className="text-sm font-semibold">{totalPeriodos} periodos</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll>
                <Tabs defaultValue="informacion" className="mt-8">
                  <TabsList className="w-full justify-start gap-0 rounded-none border-b-2 border-border bg-transparent p-0">
                    <TabsTrigger value="informacion" className="rounded-none border-b-2 border-transparent px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors data-[state=active]:border-brand-700 data-[state=active]:bg-transparent data-[state=active]:text-brand-700">
                      Información
                    </TabsTrigger>
                    <TabsTrigger value="plan" className="rounded-none border-b-2 border-transparent px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors data-[state=active]:border-brand-700 data-[state=active]:bg-transparent data-[state=active]:text-brand-700">
                      Plan de estudios
                    </TabsTrigger>
                    <TabsTrigger value="inversion" className="rounded-none border-b-2 border-transparent px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors data-[state=active]:border-brand-700 data-[state=active]:bg-transparent data-[state=active]:text-brand-700">
                      Inversión
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="informacion" className="mt-6">
                    <InformacionTab programa={data} />
                  </TabsContent>
                  <TabsContent value="plan" className="mt-6">
                    <PlanTab bloques={data.asignaturasPorPeriodo} />
                  </TabsContent>
                  <TabsContent value="inversion" className="mt-6">
                    <InversionTab inversion={data.inversion} />
                  </TabsContent>
                </Tabs>
              </RevealOnScroll>
            </div>

            <RevealOnScroll className="hidden lg:block">
              <div className="sticky top-24 space-y-4">
                <div className="rounded-xl border border-brand-200 bg-brand-50/50 p-5 shadow-sm">
                  {data.inversion.inversionTotal > 0 && (
                    <div className="mb-4 text-center">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        Inversión total
                      </p>
                      <p className="mt-1 font-display text-2xl font-normal italic text-brand-700">
                        {formatPEN(data.inversion.inversionTotal)}
                      </p>
                    </div>
                  )}
                  <Button asChild className="w-full" size="lg">
                    <Link href="/admision">
                      Postular a este programa
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="mt-3 w-full" asChild>
                    <Link href="/contacto">
                      <Share2 className="mr-1.5 h-3.5 w-3.5" />
                      Consultar
                    </Link>
                  </Button>
                </div>

                <div className="rounded-xl border border-border/60 bg-card p-4 shadow-sm">
                  <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    En este programa
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                      {totalCreditos} créditos
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                      {totalAsignaturas} materias
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                      {modalidad.label}
                    </li>
                    {data.facultad && (
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                        {data.facultad.nombreFacultad}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
            <Button variant="ghost" asChild>
              <Link href={`/${tipo}`}>&larr; Volver a {tipo}</Link>
            </Button>
            <Button asChild className="lg:hidden">
              <Link href="/admision">Postular</Link>
            </Button>
          </div>

          <SectionDivider className="mt-20" />
          <Section title="Programas relacionados" className="!px-0">
            <RelatedProgrammes tipoSlug={tipo} excludeSlug={data.slug} />
          </Section>
        </Container>
      </div>
    </>
  );
}

function InformacionTab({ programa }: { programa: ProgramaDetalleResponse }) {
  const sections = [
    { icon: <Target className="h-5 w-5" />, title: "Objetivo general", content: programa.objetivoGeneral },
    { icon: <ListChecks className="h-5 w-5" />, title: "Objetivos específicos", content: programa.objetivosEspecificos },
    { icon: <UserCheck className="h-5 w-5" />, title: "Perfil del posgraduado", content: programa.perfilPosgraduado },
  ];

  const hasAny = sections.some((s) => s.content?.trim());

  if (!hasAny) {
    return (
      <div className="rounded-xl border border-border/60 bg-card p-8 text-center shadow-sm">
        <Target className="mx-auto h-10 w-10 text-slate-300" />
        <p className="mt-3 font-medium text-slate-600">Información no disponible</p>
        <p className="mt-1 text-sm text-muted-foreground">
          La información detallada del programa aún no ha sido publicada.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {sections
        .filter((s) => s.content?.trim())
        .map((s) => (
          <div key={s.title} className="rounded-xl border border-border/60 bg-card p-6 shadow-sm sm:col-span-2">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                {s.icon}
              </div>
              <h3 className="text-sm font-semibold text-slate-900">{s.title}</h3>
            </div>
            <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
              {s.content}
            </p>
          </div>
        ))}
    </div>
  );
}

function PlanTab({ bloques }: { bloques: AsignaturaPorPeriodo[] }) {
  if (bloques.length === 0) {
    return (
      <div className="rounded-xl border border-border/60 bg-card p-8 text-center shadow-sm">
        <BookOpen className="mx-auto h-10 w-10 text-slate-300" />
        <p className="mt-3 font-medium text-slate-600">Sin plan de estudios</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Este programa aún no tiene su plan de estudios publicado.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* DESKTOP: clean tables */}
      <div className="hidden sm:block space-y-8">
        {bloques.map((bloque) => (
          <div key={bloque.periodo.id} className="overflow-hidden rounded-xl border border-border/30 bg-card shadow-sm">
            <div className="border-l-4 border-l-brand-600 bg-gradient-to-r from-brand-50/40 to-transparent px-6 py-4">
              <h3 className="font-display text-lg font-normal italic text-brand-900">
                {bloque.periodo.nombrePeriodo}
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <caption className="sr-only">Asignaturas de {bloque.periodo.nombrePeriodo}</caption>
                <thead>
                  <tr className="border-b border-border/30 bg-muted/10">
                    <th scope="col" className="py-3 pl-6 pr-4 text-left text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Asignatura</th>
                    <th scope="col" className="px-3 py-3 text-center text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Créd.</th>
                    <th scope="col" className="py-3 pl-3 pr-6 text-right text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Cat.</th>
                  </tr>
                </thead>
                <tbody>
                  {bloque.asignaturas.map((asig, idx) => (
                    <tr key={idx} className="border-b border-border/20 transition-colors hover:bg-brand-50/20 last:border-b-0">
                      <td className="py-3.5 pl-6 pr-4 text-sm font-medium text-foreground">
                        <span className={`mr-2 inline-block h-1.5 w-1.5 rounded-full align-middle ${asig.categoria === "OE" ? "bg-brand-500" : "bg-amber-500"}`} />
                        {asig.nombreAsignatura}
                      </td>
                      <td className="px-3 py-3.5 text-center text-sm tabular-nums text-muted-foreground">
                        {asig.creditos}
                      </td>
                      <td className="py-3.5 pl-3 pr-6 text-right text-xs font-medium">
                        <span className={`inline-block rounded-md px-2 py-0.5 text-xs font-medium ${asig.categoria === "OE" ? "bg-brand-50 text-brand-700" : "bg-amber-50 text-amber-700"}`}>
                          {asig.categoria === "OE" ? "Obligatoria" : "Electiva"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE: accordions */}
      <div className="sm:hidden">
        <Accordion type="single" collapsible className="w-full">
          {bloques.map((bloque) => (
            <AccordionItem key={bloque.periodo.id} value={bloque.periodo.nombrePeriodo} className="rounded-xl border border-border/60 bg-card shadow-sm mb-3 overflow-hidden">
              <AccordionTrigger className="px-5 py-4 text-sm font-semibold text-brand-900 hover:no-underline bg-brand-50/40 border-l-4 border-l-brand-600">
                {bloque.periodo.nombrePeriodo}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-2">
                <ul className="space-y-2">
                  {bloque.asignaturas.map((asig, idx) => (
                    <li key={idx} className="flex items-center justify-between rounded-lg border border-border/30 bg-muted/10 p-3">
                      <div className="flex items-center gap-2">
                        <span className={`h-1.5 w-1.5 rounded-full ${asig.categoria === "OE" ? "bg-brand-500" : "bg-amber-500"}`} />
                        <div>
                          <p className="text-sm font-medium text-foreground">{asig.nombreAsignatura}</p>
                          <p className="text-xs text-muted-foreground">{asig.creditos} créditos</p>
                        </div>
                      </div>
                      <span className={`text-xs font-medium ${asig.categoria === "OE" ? "text-brand-700" : "text-amber-700"}`}>
                        {asig.categoria === "OE" ? "Obligatoria" : "Electiva"}
                      </span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

function InversionTab({ inversion }: { inversion: ProgramaDetalleResponse["inversion"] }) {
  const sinCostos = inversion.inversionTotal === 0 && inversion.costoMatricula === 0;

  if (sinCostos) {
    return (
      <div className="rounded-xl border border-border/60 bg-card p-8 text-center shadow-sm">
        <Wallet className="mx-auto h-10 w-10 text-slate-300" />
        <p className="mt-3 font-medium text-slate-600">Costo a consultar</p>
        <p className="mt-1 text-sm text-muted-foreground">
          La información de inversión no está disponible en este momento.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center py-6">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-[0.15em]">
          Inversión total del programa
        </p>
        <p className="mt-3 font-display text-5xl font-normal italic text-brand-700 sm:text-6xl">
          {formatPEN(inversion.inversionTotal)}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="rounded-xl border border-border/60 bg-card p-6 shadow-sm">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Matrícula
          </p>
          <p className="mt-2 font-display text-3xl italic text-brand-700">
            {formatPEN(inversion.costoTotalMatriculas)}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {inversion.numeroMatriculas} {inversion.numeroMatriculas === 1 ? "semestre" : "semestres"}
          </p>
        </div>
        <div className="rounded-xl border border-border/60 bg-card p-6 shadow-sm">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Cursos
          </p>
          <p className="mt-2 font-display text-3xl italic text-brand-700">
            {formatPEN(inversion.costoCursos)}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Todos los semestres
          </p>
        </div>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        {inversion.numeroCuotas} cuotas de {formatPEN(inversion.cuotasPorSemestre)} por semestre
      </p>

      <div className="flex justify-center pt-4">
        <Button asChild size="lg">
          <Link href="/admision">Postular a este programa</Link>
        </Button>
      </div>
    </div>
  );
}
