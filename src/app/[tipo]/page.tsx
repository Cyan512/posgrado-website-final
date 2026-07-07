import { getTiposProgramas, getProgramasByTipo } from "@/src/lib/api";
import { TIPO_DESCRIPCION_MAP } from "@/src/lib/constants";
import Container from "@/src/components/layout/Container";
import Breadcrumb from "@/src/components/layout/Breadcrumb";
import ProgramaCard from "@/src/components/ProgramaCard";
import Paginacion from "@/src/components/Paginacion";
import Buscador from "@/src/components/Buscador";
import EmptyState from "@/src/components/ui/EmptyState";

interface Props {
  params: Promise<{ tipo: string }>;
  searchParams: Promise<{ page?: string; size?: string; q?: string }>;
}

export async function generateStaticParams() {
  const tipos = await getTiposProgramas();
  return tipos.map((t) => ({ tipo: t.slug }));
}

export default async function TipoPage({ params, searchParams }: Props) {
  const { tipo } = await params;
  const sp = await searchParams;

  const page = Number(sp.page) || 0;
  const size = Number(sp.size) || 10;
  const q = sp.q ?? "";

  const result = await getProgramasByTipo(tipo, { page, size, q });
  const descripcion = TIPO_DESCRIPCION_MAP[tipo] ?? `Programas de ${tipo}.`;

  return (
    <Container className="py-8 sm:py-12">
      <Breadcrumb items={[{ label: tipo, href: `/${tipo}` }]} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 capitalize sm:text-4xl">
          {tipo}
        </h1>
        <p className="mt-2 text-slate-500">{descripcion}</p>
      </div>

      <Buscador tipoSlug={tipo} q={q} size={size} />

      {q && (
        <p className="mb-4 text-sm text-slate-500">
          {result.totalElements} resultado{result.totalElements !== 1 ? "s" : ""} para &quot;{q}&quot;
        </p>
      )}

      {result.content.length === 0 ? (
        <EmptyState
          icon="search"
          title={
            q
              ? "Sin resultados"
              : "No hay programas disponibles"
          }
          description={
            q
              ? "No se encontraron programas que coincidan con tu búsqueda."
              : "No hay programas disponibles para esta categoría en este momento."
          }
          actionLabel="Ver todos los programas"
          actionHref="/"
        />
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {result.content.map((p) => (
            <ProgramaCard key={p.id} programa={p} tipoSlug={tipo} />
          ))}
        </div>
      )}

      <Paginacion
        tipoSlug={tipo}
        page={result.page}
        totalPages={result.totalPages}
        totalElements={result.totalElements}
        size={result.size}
        q={q || undefined}
      />
    </Container>
  );
}
