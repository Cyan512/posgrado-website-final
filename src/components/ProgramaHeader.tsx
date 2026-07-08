import type { ProgramaDetalleResponse } from "@/src/lib/types";
import { MODALIDAD_MAP } from "@/src/lib/constants";
import Badge from "./ui/Badge";
import { Building2, Clock, GraduationCap } from "lucide-react";

interface Props {
  programa: ProgramaDetalleResponse;
}

export default function ProgramaHeader({ programa }: Props) {
  const modalidad = MODALIDAD_MAP[programa.modalidad ?? ""] ?? {
    label: programa.modalidad ?? "N/A",
    color: "bg-slate-50 text-slate-600 ring-slate-500/10",
  };

  const totalCreditos = programa.asignaturasPorPeriodo.reduce(
    (sum, bloque) =>
      sum + bloque.asignaturas.reduce((s, a) => s + a.creditos, 0),
    0
  );

  const totalAsignaturas = programa.asignaturasPorPeriodo.reduce(
    (sum, bloque) => sum + bloque.asignaturas.length,
    0
  );

  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {programa.nombre}
      </h1>

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1.5 text-sm text-slate-500">
          <Building2 className="h-4 w-4" />
          {programa.facultad?.nombreFacultad ?? "Sin facultad asignada"}
        </div>
        <span className="text-slate-300 select-none">&middot;</span>
        <Badge color={modalidad.color}>{modalidad.label}</Badge>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50">
            <GraduationCap className="h-5 w-5 text-brand-700" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Modalidad</p>
            <p className="text-sm font-semibold text-slate-900">{modalidad.label}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50">
            <Clock className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Créditos totales</p>
            <p className="text-sm font-semibold text-slate-900">{totalCreditos} créditos</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
            <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Asignaturas</p>
            <p className="text-sm font-semibold text-slate-900">{totalAsignaturas} materias</p>
          </div>
        </div>
      </div>
    </div>
  );
}
