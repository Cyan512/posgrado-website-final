import type { AsignaturaPorPeriodo } from "@/src/lib/types";

interface Props {
  bloque: AsignaturaPorPeriodo;
}

const categoriaLabel: Record<string, string> = {
  OE: "Obligatoria Específica",
  EE: "Electiva Específica",
};

export default function AsignaturaPeriodo({ bloque }: Props) {
  return (
    <div className="mb-6">
      <h3 className="mb-3 text-xl font-semibold text-gray-800">
        {bloque.periodo.nombrePeriodo}
      </h3>
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Asignatura
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Créditos
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Categoría
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {bloque.asignaturas.map((asig, index) => (
              <tr key={index}>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {asig.nombreAsignatura}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {asig.creditos}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {categoriaLabel[asig.categoria] ?? asig.categoria}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
