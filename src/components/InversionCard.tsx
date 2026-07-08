import type { InversionPrograma } from "@/src/lib/types";
import { formatPEN } from "@/src/lib/format";
import { Wallet, ChevronDown } from "lucide-react";

interface Props {
  inversion: InversionPrograma;
}

export default function InversionCard({ inversion }: Props) {
  const sinCostos =
    inversion.inversionTotal === 0 &&
    inversion.costoMatricula === 0 &&
    inversion.costoCursos === 0;

  return (
    <div>
      {sinCostos ? (
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
          <Wallet className="mx-auto h-10 w-10 text-slate-300" />
          <p className="mt-3 font-medium text-slate-600">
            Costo a consultar
          </p>
          <p className="mt-1 text-sm text-slate-400">
            La información de inversión no está disponible en este momento.
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="bg-gradient-to-r from-brand-800 to-brand-900 px-6 py-6 text-white">
            <div className="flex items-center gap-2 text-brand-200">
              <Wallet className="h-5 w-5" />
              <span className="text-sm font-medium">Inversión total</span>
            </div>
            <p className="mt-2 text-3xl font-bold tracking-tight">
              {formatPEN(inversion.inversionTotal)}
            </p>
          </div>

          <div className="px-6 py-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    Matrícula
                  </p>
                  <p className="text-xs text-slate-500">
                    {inversion.numeroMatriculas}{" "}
                    {inversion.numeroMatriculas === 1 ? "semestre" : "semestres"}
                  </p>
                </div>
                <p className="text-sm font-semibold text-slate-900">
                  {formatPEN(inversion.costoTotalMatriculas)}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900">Cursos</p>
                  <p className="text-xs text-slate-500">Todos los semestres</p>
                </div>
                <p className="text-sm font-semibold text-slate-900">
                  {formatPEN(inversion.costoCursos)}
                </p>
              </div>
            </div>

            <div className="mt-4 border-t border-slate-100 pt-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <ChevronDown className="h-4 w-4" />
                <span>
                  {inversion.numeroCuotas} cuotas de{" "}
                  {inversion.cuotasPorSemestre} por semestre
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
