import Link from "next/link";
import { getProgramaBySlug } from "@/src/lib/api";
import ProgramaHeader from "@/src/components/ProgramaHeader";
import AsignaturaPeriodo from "@/src/components/AsignaturaPeriodo";

interface Props {
  params: Promise<{ tipo: string; programa: string }>;
}

export default async function ProgramaPage({ params }: Props) {
  const { tipo, programa } = await params;
  const data = await getProgramaBySlug(programa);

  return (
    <div>
      <Link
        href={`/${tipo}`}
        className="mb-6 inline-block text-sm text-gray-500 hover:text-gray-700 transition-colors"
      >
        &larr; {tipo}
      </Link>

      <ProgramaHeader programa={data} />

      {data.asignaturasPorPeriodo.length === 0 ? (
        <p className="text-gray-500">No hay asignaturas disponibles.</p>
      ) : (
        data.asignaturasPorPeriodo.map((bloque) => (
          <AsignaturaPeriodo
            key={bloque.periodo.id}
            bloque={bloque}
          />
        ))
      )}
    </div>
  );
}
