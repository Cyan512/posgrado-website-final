import Link from "next/link";
import type { TipoPrograma } from "@/src/lib/types";

interface Props {
  tipo: TipoPrograma;
}

export default function TipoProgramaCard({ tipo }: Props) {
  return (
    <Link
      href={`/${tipo.slug}`}
      className="block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-gray-300"
    >
      <h2 className="text-lg font-semibold text-gray-900">
        {tipo.nombreTipoPrograma}
      </h2>
      <p className="mt-2 text-sm text-gray-500">
        Ver programas de {tipo.nombreTipoPrograma.toLowerCase()}
      </p>
    </Link>
  );
}
