import { getTiposProgramas, getProgramasByTipo } from "@/lib/api";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://posgrado.edu.pe";

export default async function sitemap() {
  const tipos = await getTiposProgramas();

  const staticRoutes = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1 },
    { url: `${BASE_URL}/admision`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/sobre-la-escuela`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/preguntas-frecuentes`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.6 },
    { url: `${BASE_URL}/contacto`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const tipoRoutes = tipos.map((tipo) => ({
    url: `${BASE_URL}/${tipo.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  const programasRoutes: Array<{
    url: string;
    lastModified: Date;
    changeFrequency: "weekly" | "daily" | "monthly";
    priority: number;
  }> = [];

  for (const tipo of tipos) {
    const result = await getProgramasByTipo(tipo.slug, { size: 100 });
    for (const programa of result.content) {
      programasRoutes.push({
        url: `${BASE_URL}/${tipo.slug}/${programa.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  return [...staticRoutes, ...tipoRoutes, ...programasRoutes];
}
