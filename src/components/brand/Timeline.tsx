import type { Hito } from "@/lib/data";

interface Props {
  hitos: Hito[];
}

export function Timeline({ hitos }: Props) {
  return (
    <div className="space-y-0">
      {hitos.map((h, i) => (
        <div key={h.ano} className="group flex gap-6 sm:gap-10">
          <div className="flex flex-col items-center">
            <div className="font-mono text-2xl font-bold text-brand-700 group-hover:text-brand-500 transition-colors">
              {h.ano}
            </div>
            <div className="mt-1 h-full w-0.5 bg-border group-hover:bg-brand-200 transition-colors" />
          </div>
          <div className={`pb-12 ${i === hitos.length - 1 ? "pb-0" : ""}`}>
            <p className="text-sm leading-relaxed text-muted-foreground">{h.evento}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
