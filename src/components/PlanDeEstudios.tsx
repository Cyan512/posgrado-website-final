import type { AsignaturaPorPeriodo } from "@/lib/types";
import AsignaturaPeriodo from "./AsignaturaPeriodo";
import EmptyState from "./ui/EmptyState";

interface Props {
  bloques: AsignaturaPorPeriodo[];
}

export default function PlanDeEstudios({ bloques }: Props) {
  if (bloques.length === 0) {
    return (
      <EmptyState
        icon="empty"
        title="Sin plan de estudios"
        description="Este programa aún no tiene su plan de estudios publicado."
      />
    );
  }

  return (
    <div>
      {bloques.map((bloque) => (
        <AsignaturaPeriodo key={bloque.periodo.id} bloque={bloque} />
      ))}
    </div>
  );
}
