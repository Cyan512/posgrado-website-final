import Link from "next/link";
import type { Programa } from "@/src/lib/types";

interface Props {
  programa: Programa;
  tipoSlug: string;
}

const modalidadBadge: Record<string, string> = {
  PRESENCIAL: "bg-green-100 text-green-800",
  SEMIPRESENCIAL: "bg-blue-100 text-blue-800",
  VIRTUAL: "bg-purple-100 text-purple-800",
  "NO CONVOCABLE": "bg-red-100 text-red-800",
};

export default function ProgramaCard({ programa, tipoSlug }: Props) {
  return (
    <Link
      href={`/${tipoSlug}/${programa.slug}`}
      className="block rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-gray-300"
    >
      <h3 className="font-semibold text-gray-900">{programa.nombre}</h3>
      <p className="mt-1 text-sm text-gray-500">
        {programa.facultad?.nombreFacultad ?? "Sin facultad asignada"}
      </p>
      <span
        className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-medium ${modalidadBadge[programa.modalidad] ?? "bg-gray-100 text-gray-800"}`}
      >
        {programa.modalidad}
      </span>
    </Link>
  );
}
