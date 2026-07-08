export const IMAGES = {
  aerialCampus:
    "https://images.unsplash.com/photo-1562774053-701939374585?w=1400&q=80&fit=crop",
  graduates:
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80&fit=crop",
  library:
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80&fit=crop",
  lecture:
    "https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=1200&q=80&fit=crop",
  research:
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&q=80&fit=crop",
  campusBuilding:
    "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=1000&q=80&fit=crop",
  collaboration:
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80&fit=crop",
  study:
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80&fit=crop",
} as const;

export const IMAGE_ALTS: Record<keyof typeof IMAGES, string> = {
  aerialCampus: "Vista aérea del campus universitario moderno",
  graduates: "Graduados celebrando con birretes al aire",
  library: "Biblioteca universitaria con estanterías de libros",
  lecture: "Estudiantes en un aula moderna con proyector",
  research: "Investigadores trabajando en un laboratorio científico",
  campusBuilding: "Edificio institucional del campus universitario",
  collaboration: "Grupo de profesionales colaborando en una sesión de trabajo",
  study: "Estudiante trabajando con libros y laptop en biblioteca",
};
