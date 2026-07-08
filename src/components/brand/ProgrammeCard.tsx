import Link from "next/link";
import type { Programa } from "@/lib/types";
import { MODALIDAD_MAP } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Building2, ArrowUpRight } from "lucide-react";

interface Props {
  programa: Programa;
  tipoSlug: string;
  featured?: boolean;
}

export function ProgrammeCard({ programa, tipoSlug, featured }: Props) {
  const modalidad = MODALIDAD_MAP[programa.modalidad ?? ""] ?? {
    label: programa.modalidad ?? "N/A",
    color: "bg-slate-50 text-slate-600 ring-slate-500/10",
  };

  return (
    <Link
      href={`/${tipoSlug}/${programa.slug}`}
      className="group block"
    >
      <Card className={`h-full transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-brand-100 hover:-translate-y-1 ${featured ? "ring-1 ring-brand-200 shadow-md" : ""}`}>
        <CardContent className="flex h-full flex-col p-5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="flex-1 font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">
              {programa.nombre}
            </h3>
            <ArrowUpRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-300 transition-all duration-300 group-hover:text-brand-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>

          <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Building2 className="h-3.5 w-3.5" />
            {programa.facultad?.nombreFacultad ?? "Sin facultad asignada"}
          </div>

          {featured && (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
              Programa de excelencia con enfoque en investigación aplicada y desarrollo profesional.
            </p>
          )}

          <div className="mt-auto flex items-center justify-between pt-4">
            <Badge variant="outline" className={`${modalidad.color} text-xs`}>
              {modalidad.label}
            </Badge>
            {featured && (
              <span className="text-xs font-medium text-brand-600 opacity-0 transition-opacity group-hover:opacity-100">
                Ver programa &rarr;
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
