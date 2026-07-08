import { Badge } from "@/components/ui/Badge";

interface Props {
  acreditaciones: { nombre: string; ano: number }[];
}

export function AccreditationBar({ acreditaciones }: Props) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {acreditaciones.map((a) => (
        <Badge
          key={a.nombre}
          variant="outline"
          className="border-gold-200 bg-gold-50/30 px-4 py-2 text-sm font-medium text-gold-800"
        >
          {a.nombre}
          <span className="ml-1 font-normal text-gold-600">{a.ano}</span>
        </Badge>
      ))}
    </div>
  );
}
