import { getProgramasByTipo } from "@/lib/api";
import { ProgrammeCard } from "./ProgrammeCard";
import { RelatedLink } from "./RelatedLink";

interface Props {
  tipoSlug: string;
  excludeSlug: string;
}

export async function RelatedProgrammes({ tipoSlug, excludeSlug }: Props) {
  let result;
  try {
    result = await getProgramasByTipo(tipoSlug, { size: 4 });
  } catch {
    return null;
  }

  const filtered = result.content.filter(
    (p) => p.slug !== excludeSlug
  ).slice(0, 3);

  if (filtered.length === 0) return null;

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-display text-2xl font-normal italic text-slate-900">
          Programas relacionados
        </h2>
        <RelatedLink href={`/${tipoSlug}`} label="Ver todos" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProgrammeCard key={p.id} programa={p} tipoSlug={tipoSlug} />
        ))}
      </div>
    </div>
  );
}
