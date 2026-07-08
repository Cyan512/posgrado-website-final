import { getTiposProgramas, getProgramasByTipo } from "@/lib/api";
import { TIPO_DESCRIPCION_MAP } from "@/lib/constants";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { PageHero } from "@/components/brand/PageHero";
import { RevealOnScroll } from "@/components/brand/RevealOnScroll";
import { ProgrammeCard } from "@/components/brand/ProgrammeCard";
import EmptyState from "@/components/ui/EmptyState";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  params: Promise<{ tipo: string }>;
  searchParams: Promise<{ page?: string; size?: string; q?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tipo } = await params;
  const desc = TIPO_DESCRIPCION_MAP[tipo] ?? `Programas de ${tipo}.`;
  return {
    title: tipo.charAt(0).toUpperCase() + tipo.slice(1),
    description: desc,
    openGraph: {
      title: `${tipo.charAt(0).toUpperCase() + tipo.slice(1)} | Escuela de Posgrado`,
      description: desc,
    },
  };
}

export async function generateStaticParams() {
  const tipos = await getTiposProgramas();
  return tipos.map((t) => ({ tipo: t.slug }));
}

export default async function TipoPage({ params, searchParams }: Props) {
  const { tipo } = await params;
  const sp = await searchParams;
  const page = Number(sp.page) || 0;
  const size = Number(sp.size) || 9;
  const q = sp.q ?? "";
  const result = await getProgramasByTipo(tipo, { page, size, q });
  const totalPages = result.totalPages;

  return (
    <>
      <PageHero
        variant="split"
        eyebrow="Programas"
        title={tipo.charAt(0).toUpperCase() + tipo.slice(1)}
        description={TIPO_DESCRIPCION_MAP[tipo] ?? `Programas de ${tipo}.`}
        stats={[
          { value: String(result.totalElements), label: "Programas" },
        ]}
      />

      <Container className="py-8 sm:py-12">
        <Breadcrumb items={[{ label: tipo, href: `/${tipo}` }]} />
      </Container>

      <div className="pb-20">
        <Container>
          <RevealOnScroll>
            <form method="get" action={`/${tipo}`} className="mb-8">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  name="q"
                  defaultValue={q}
                  placeholder="Buscar programa por nombre..."
                  className="h-11 pl-10 pr-24 text-base"
                />
                <div className="absolute right-1.5 top-1/2 flex -translate-y-1/2 items-center gap-1">
                  {q && (
                    <Button variant="ghost" size="icon" asChild className="h-8 w-8" aria-label="Limpiar búsqueda">
                      <Link href={`/${tipo}?page=0&size=${size}`}>
                        <X className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  )}
                  <input type="hidden" name="size" value={size} />
                  <Button type="submit" size="sm">Buscar</Button>
                </div>
              </div>
            </form>

            {q && (
              <p className="mb-6 text-sm text-muted-foreground">
                {result.totalElements} resultado{result.totalElements !== 1 ? "s" : ""}{" "}
                para &quot;{q}&quot;
              </p>
            )}
          </RevealOnScroll>

          <RevealOnScroll>
            {result.content.length === 0 ? (
              <EmptyState
                icon="search"
                title={q ? "Sin resultados" : "No hay programas disponibles"}
                description={q
                  ? "No se encontraron programas que coincidan con tu búsqueda."
                  : "No hay programas disponibles para esta categoría en este momento."}
                actionLabel="Ver todos los programas"
                actionHref="/"
              />
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {result.content.map((p, i) => (
                  <ProgrammeCard
                    key={p.id}
                    programa={p}
                    tipoSlug={tipo}
                    featured={i === 0 && page === 0 && !q}
                  />
                ))}
              </div>
            )}
          </RevealOnScroll>

          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href={`/${tipo}?page=${Math.max(0, page - 1)}&size=${size}${q ? `&q=${encodeURIComponent(q)}` : ""}`}
                      aria-disabled={page === 0}
                      className={page === 0 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => (
                    i === 0 || i === totalPages - 1 || (i >= page - 1 && i <= page + 1) ? (
                      <PaginationItem key={i}>
                        <PaginationLink
                          href={`/${tipo}?page=${i}&size=${size}${q ? `&q=${encodeURIComponent(q)}` : ""}`}
                          isActive={i === page}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ) : (i === page - 2 || i === page + 2) ? (
                      <PaginationItem key={`dots-${i}`}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    ) : null
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      href={`/${tipo}?page=${Math.min(totalPages - 1, page + 1)}&size=${size}${q ? `&q=${encodeURIComponent(q)}` : ""}`}
                      aria-disabled={page >= totalPages - 1}
                      className={page >= totalPages - 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                {result.totalElements} programas en total
              </p>
            </div>
          )}

          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link href="/admision">Iniciar proceso de admisión</Link>
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
