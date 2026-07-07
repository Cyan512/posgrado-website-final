import type { ProgramaDetalleResponse } from "@/src/lib/types";

interface Props {
  programa: ProgramaDetalleResponse;
}

const modalidadBadge: Record<string, string> = {
  PRESENCIAL: "bg-green-100 text-green-800",
  SEMIPRESENCIAL: "bg-blue-100 text-blue-800",
  VIRTUAL: "bg-purple-100 text-purple-800",
  "NO CONVOCABLE": "bg-red-100 text-red-800",
};

export default function ProgramaHeader({ programa }: Props) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">{programa.nombre}</h1>
      <p className="mt-2 text-gray-600">{programa.facultad?.nombreFacultad ?? "Sin facultad asignada"}</p>
      <span
        className={`mt-3 inline-block rounded-full px-3 py-1 text-sm font-medium ${modalidadBadge[programa.modalidad] ?? "bg-gray-100 text-gray-800"}`}
      >
        {programa.modalidad}
      </span>
    </div>
  );
}
