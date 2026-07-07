export const MODALIDAD_MAP: Record<string, { label: string; color: string }> = {
  PRESENCIAL: { label: "Presencial", color: "bg-emerald-50 text-emerald-700 ring-emerald-600/20" },
  SEMIPRESENCIAL: { label: "Semipresencial", color: "bg-sky-50 text-sky-700 ring-sky-600/20" },
  VIRTUAL: { label: "Virtual", color: "bg-violet-50 text-violet-700 ring-violet-600/20" },
  "NO CONVOCABLE": { label: "No convocable", color: "bg-rose-50 text-rose-700 ring-rose-600/20" },
};

export const CATEGORIA_MAP: Record<string, string> = {
  OE: "Obligatoria Específica",
  EE: "Electiva Específica",
};

export const TIPO_ICON_MAP: Record<string, string> = {
  maestria: "graduation-cap",
  doctorado: "microscope",
};

export const TIPO_DESCRIPCION_MAP: Record<string, string> = {
  maestria: "Especializate con programas de maestría diseñados para potenciar tu carrera profesional.",
  doctorado: "Alcanzá el máximo nivel académico con nuestros programas de doctorado.",
};
