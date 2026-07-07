import { getTiposProgramas } from "@/src/lib/api";
import TipoProgramaCard from "@/src/components/TipoProgramaCard";

export default async function Home() {
  const tipos = await getTiposProgramas();

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-gray-900">
        Programas de Posgrado
      </h1>

      {tipos.length === 0 ? (
        <p className="text-gray-500">No hay tipos de programa disponibles.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tipos.map((tipo) => (
            <TipoProgramaCard key={tipo.id} tipo={tipo} />
          ))}
        </div>
      )}
    </div>
  );
}
