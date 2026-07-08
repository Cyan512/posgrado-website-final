import type { AsignaturaPorPeriodo } from "@/lib/types";
import { CATEGORIA_MAP } from "@/lib/constants";
import { Badge } from "./ui/Badge";

interface Props {
  bloque: AsignaturaPorPeriodo;
}

export default function AsignaturaPeriodo({ bloque }: Props) {
  return (
    <div className="mb-8">
      <h3 className="mb-4 text-lg font-semibold text-slate-800">
        {bloque.periodo.nombrePeriodo}
      </h3>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <caption className="sr-only">
              Asignaturas de {bloque.periodo.nombrePeriodo}
            </caption>
            <thead>
              <tr className="bg-slate-50">
                <th
                  scope="col"
                  className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"
                >
                  Asignatura
                </th>
                <th
                  scope="col"
                  className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"
                >
                  Créditos
                </th>
                <th
                  scope="col"
                  className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"
                >
                  Categoría
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {bloque.asignaturas.map((asig, index) => (
                <tr
                  key={index}
                  className="transition-colors hover:bg-slate-50/50"
                >
                  <td className="whitespace-nowrap px-5 py-3.5 text-sm font-medium text-slate-900">
                    {asig.nombreAsignatura}
                  </td>
                  <td className="whitespace-nowrap px-5 py-3.5 text-sm text-slate-600">
                    {asig.creditos}
                  </td>
                  <td className="whitespace-nowrap px-5 py-3.5 text-sm">
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
      </div>
    </div>
  );
}
