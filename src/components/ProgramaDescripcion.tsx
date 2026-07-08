import type { ProgramaDetalleResponse } from "@/src/lib/types";
import { Target, ListChecks, UserCheck } from "lucide-react";

interface Props {
  programa: ProgramaDetalleResponse;
}

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  content: string | null;
}

function Section({ icon, title, content }: SectionProps) {
  if (!content || content.trim().length === 0) return null;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
          {icon}
        </div>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="whitespace-pre-line text-sm leading-relaxed text-slate-600">
        {content}
      </p>
    </div>
  );
}

export default function ProgramaDescripcion({ programa }: Props) {
  const sections = [
    {
      icon: <Target className="h-4 w-4" />,
      title: "Objetivo general",
      content: programa.objetivoGeneral,
    },
    {
      icon: <ListChecks className="h-4 w-4" />,
      title: "Objetivos específicos",
      content: programa.objetivosEspecificos,
    },
    {
      icon: <UserCheck className="h-4 w-4" />,
      title: "Perfil del posgraduado",
      content: programa.perfilPosgraduado,
    },
  ];

  const hasAny = sections.some(
    (s) => s.content && s.content.trim().length > 0
  );

  if (!hasAny) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
        <Target className="mx-auto h-10 w-10 text-slate-300" />
        <p className="mt-3 font-medium text-slate-600">
          Información no disponible
        </p>
        <p className="mt-1 text-sm text-slate-400">
          La información detallada del programa aún no ha sido publicada.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {sections
        .filter((s) => s.content && s.content.trim().length > 0)
        .map((s) => (
          <Section key={s.title} {...s} />
        ))}
    </div>
  );
}
