import type { Persona } from "@/lib/data";
import { PersonCard } from "./PersonCard";

interface Props {
  personas: Persona[];
}

export function FacultyGrid({ personas }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {personas.map((p) => (
        <PersonCard key={p.nombre} {...p} />
      ))}
    </div>
  );
}
