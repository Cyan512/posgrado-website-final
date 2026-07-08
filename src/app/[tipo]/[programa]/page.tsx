import { getProgramaBySlug } from "@/lib/api";
import { IMAGES, IMAGE_ALTS } from "@/lib/images";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { PageHero } from "@/components/brand/PageHero";
import { Section } from "@/components/brand/Section";
import { SectionDivider } from "@/components/brand/Ornament";
import { RevealOnScroll } from "@/components/brand/RevealOnScroll";
import { RelatedProgrammes } from "@/components/brand/RelatedProgrammes";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MODALIDAD_MAP, CATEGORIA_MAP } from "@/lib/constants";
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
    color: "bg-slate-50 text-slate-600 ring-slate-500/10",
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
            {/* Main content */}
            <div>
              {/* Quick facts */}
              <RevealOnScroll>
                <div className="mb-10 grid gap-4 sm:grid-cols-3">
                  <Card>
                    <CardContent className="flex items-center gap-3 p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Modalidad</p>
                        <p className="text-sm font-semibold">{modalidad.label}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-center gap-3 p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Facultad</p>
                        <p className="text-sm font-semibold">
                          {data.facultad?.nombreFacultad ?? "—"}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-center gap-3 p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Duración</p>
                        <p className="text-sm font-semibold">{totalPeriodos} periodos</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </RevealOnScroll>

              {/* Tabs */}
              <RevealOnScroll>
                <Tabs defaultValue="informacion" className="mt-8">
                  <TabsList className="w-full justify-start rounded-xl border border-border bg-muted/50 p-1">
                    <TabsTrigger value="informacion" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
                      Información
                    </TabsTrigger>
                    <TabsTrigger value="plan" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
                      Plan de estudios
                    </TabsTrigger>
                    <TabsTrigger value="inversion" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
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

            {/* Sidebar — sticky on desktop */}
            <RevealOnScroll className="hidden lg:block">
              <div className="sticky top-24 space-y-4">
                <Card className="border-brand-200 bg-brand-50/50">
                  <CardContent className="p-5 space-y-4">
                    {data.inversion.inversionTotal > 0 && (
                      <div className="text-center">
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
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <Link href="/contacto">
                          <Share2 className="mr-1.5 h-3.5 w-3.5" />
                          Consultar
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
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
                  </CardContent>
                </Card>
              </div>
            </RevealOnScroll>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
            <Button variant="ghost" asChild>
              <Link href={`/${tipo}`}>&larr; Volver a {tipo}</Link>
            </Button>
            <Button asChild className="lg:hidden">
              <Link href="/admision">Postular</Link>
            </Button>
          </div>

          {/* Related programmes */}
          <SectionDivider className="mt-20" />
          <Section title="Programas relacionados" className="!px-0">
            <RelatedProgrammes tipoSlug={tipo} excludeSlug={data.slug} />
          </Section>
        </Container>
      </div>
    </>
  );
}

/* ── Tab contents ── */

function InformacionTab({ programa }: { programa: ProgramaDetalleResponse }) {
  const sections = [
    { icon: <Target className="h-5 w-5" />, title: "Objetivo general", content: programa.objetivoGeneral },
    { icon: <ListChecks className="h-5 w-5" />, title: "Objetivos específicos", content: programa.objetivosEspecificos },
    { icon: <UserCheck className="h-5 w-5" />, title: "Perfil del posgraduado", content: programa.perfilPosgraduado },
  ];

  const hasAny = sections.some((s) => s.content?.trim());

  if (!hasAny) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <Target className="mx-auto h-10 w-10 text-slate-300" />
          <p className="mt-3 font-medium text-slate-600">Información no disponible</p>
          <p className="mt-1 text-sm text-muted-foreground">
            La información detallada del programa aún no ha sido publicada.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {sections
        .filter((s) => s.content?.trim())
        .map((s) => (
          <Card key={s.title} className="sm:col-span-2 first:sm:col-span-2">
            <CardContent className="p-6">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  {s.icon}
                </div>
                <h3 className="text-sm font-semibold text-slate-900">{s.title}</h3>
              </div>
              <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                {s.content}
              </p>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}

function PlanTab({ bloques }: { bloques: AsignaturaPorPeriodo[] }) {
  if (bloques.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <BookOpen className="mx-auto h-10 w-10 text-slate-300" />
          <p className="mt-3 font-medium text-slate-600">Sin plan de estudios</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Este programa aún no tiene su plan de estudios publicado.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {bloques.map((bloque) => (
        <Card key={bloque.periodo.id}>
          <CardContent className="p-0">
            <div className="border-b border-border bg-muted/30 px-5 py-3">
              <h3 className="text-sm font-semibold text-slate-800">
                {bloque.periodo.nombrePeriodo}
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                <caption className="sr-only">
                  Asignaturas de {bloque.periodo.nombrePeriodo}
                </caption>
                <thead>
                  <tr className="bg-muted/20">
                    <th scope="col" className="px-5 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Asignatura
                    </th>
                    <th scope="col" className="px-5 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Créditos
                    </th>
                    <th scope="col" className="px-5 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Categoría
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {bloque.asignaturas.map((asig, idx) => (
                    <tr key={idx} className="transition-colors hover:bg-muted/30">
                      <td className="whitespace-nowrap px-5 py-3 text-sm font-medium text-slate-900">
                        {asig.nombreAsignatura}
                      </td>
                      <td className="whitespace-nowrap px-5 py-3 text-sm text-muted-foreground">
                        {asig.creditos}
                      </td>
                      <td className="whitespace-nowrap px-5 py-3 text-sm">
                        <Badge
                          variant="outline"
                          className={
                            asig.categoria === "OE"
                              ? "bg-brand-50 text-brand-700 border-brand-200"
                              : "bg-amber-50 text-amber-700 border-amber-200"
                          }
                        >
                          {CATEGORIA_MAP[asig.categoria] ?? asig.categoria}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function InversionTab({ inversion }: { inversion: ProgramaDetalleResponse["inversion"] }) {
  const sinCostos = inversion.inversionTotal === 0 && inversion.costoMatricula === 0;

  if (sinCostos) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <Wallet className="mx-auto h-10 w-10 text-slate-300" />
          <p className="mt-3 font-medium text-slate-600">Costo a consultar</p>
          <p className="mt-1 text-sm text-muted-foreground">
            La información de inversión no está disponible en este momento.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border-brand-200">
        <div className="bg-gradient-to-r from-brand-800 to-brand-900 px-6 py-6 text-white">
          <div className="flex items-center gap-2 text-brand-200">
            <Wallet className="h-5 w-5" />
            <span className="text-sm font-medium">Inversión total del programa</span>
          </div>
          <p className="mt-2 font-display text-4xl font-normal italic">
            {formatPEN(inversion.inversionTotal)}
          </p>
        </div>

        <CardContent className="divide-y divide-border p-0">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <p className="text-sm font-medium text-slate-900">Matrícula</p>
              <p className="text-xs text-muted-foreground">
                {inversion.numeroMatriculas} {inversion.numeroMatriculas === 1 ? "semestre" : "semestres"}
              </p>
            </div>
            <p className="text-sm font-semibold text-slate-900">{formatPEN(inversion.costoTotalMatriculas)}</p>
          </div>
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <p className="text-sm font-medium text-slate-900">Cursos</p>
              <p className="text-xs text-muted-foreground">Todos los semestres</p>
            </div>
            <p className="text-sm font-semibold text-slate-900">{formatPEN(inversion.costoCursos)}</p>
          </div>
          <div className="px-6 py-4">
            <p className="text-sm text-muted-foreground">
              {inversion.numeroCuotas} cuotas de {formatPEN(inversion.cuotasPorSemestre)} por semestre
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button asChild size="lg">
          <Link href="/admision">Postular a este programa</Link>
        </Button>
      </div>
    </div>
  );
}
