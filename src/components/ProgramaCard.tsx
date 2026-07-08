import Link from "next/link";
import type { Programa } from "@/src/lib/types";
import { MODALIDAD_MAP } from "@/src/lib/constants";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import { Building2, ArrowUpRight } from "lucide-react";

interface Props {
  programa: Programa;
  tipoSlug: string;
}

export default function ProgramaCard({ programa, tipoSlug }: Props) {
  const modalidad = MODALIDAD_MAP[programa.modalidad ?? ""] ?? {
    label: programa.modalidad ?? "N/A",
    color: "bg-slate-50 text-slate-600 ring-slate-500/10",
  };

  return (
    <Link href={`/${tipoSlug}/${programa.slug}`} className="group block">
      <Card className="h-full">
        <div className="flex h-full flex-col p-5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="flex-1 font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">
              {programa.nombre}
            </h3>
            <ArrowUpRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-300 transition-all duration-200 group-hover:text-brand-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>

          <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
            <Building2 className="h-3.5 w-3.5" />
            {programa.facultad?.nombreFacultad ?? "Sin facultad asignada"}
          </div>

          <div className="mt-auto pt-4">
            <Badge color={modalidad.color}>{modalidad.label}</Badge>
          </div>
        </div>
      </Card>
    </Link>
  );
}
