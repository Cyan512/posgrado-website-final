import Link from "next/link";
import { getTiposProgramas, getProgramasByTipo } from "@/src/lib/api";
import ProgramaCard from "@/src/components/ProgramaCard";
import Paginacion from "@/src/components/Paginacion";

interface Props {
  params: Promise<{ tipo: string }>;
  searchParams: Promise<{ page?: string; size?: string }>;
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

  const result = await getProgramasByTipo(tipo, { page, size });

  return (
    <div>
      <Link
        href="/"
        className="mb-6 inline-block text-sm text-gray-500 hover:text-gray-700 transition-colors"
      >
        &larr; Inicio
      </Link>

      <h1 className="mb-2 text-3xl font-bold text-gray-900 capitalize">
        {tipo}
      </h1>

      {result.content.length === 0 ? (
        <p className="mt-6 text-gray-500">
          No hay programas disponibles para esta categoría.
        </p>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      />
    </div>
  );
}
