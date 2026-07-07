import { getTiposProgramas } from "@/src/lib/api";
import { TIPO_ICON_MAP, TIPO_DESCRIPCION_MAP } from "@/src/lib/constants";
import Hero from "@/src/components/home/Hero";
import Container from "@/src/components/layout/Container";
import IconBadge from "@/src/components/ui/IconBadge";
import Card from "@/src/components/ui/Card";
import Link from "next/link";
import type { TipoPrograma } from "@/src/lib/types";

function TipoCard({ tipo }: { tipo: TipoPrograma }) {
  const icon = TIPO_ICON_MAP[tipo.slug] ?? "graduation-cap";
  const desc = TIPO_DESCRIPCION_MAP[tipo.slug] ?? `Explorá todos nuestros programas de ${tipo.nombreTipoPrograma.toLowerCase()}.`;

  return (
    <Link href={`/${tipo.slug}`} className="group block">
      <Card className="h-full">
        <div className="p-6">
          <IconBadge icon={icon} className="mb-4 transition-transform duration-200 group-hover:scale-110" />
          <h2 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">
            {tipo.nombreTipoPrograma}
          </h2>
          <p className="mt-2 text-sm text-slate-500 line-clamp-2">{desc}</p>
          <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand-700 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Ver programas
            <span aria-hidden="true">&rarr;</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default async function Home() {
  const tipos = await getTiposProgramas();

  return (
    <>
      <Hero />

      <Container className="py-16 sm:py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Nuestros programas
          </h2>
          <p className="mt-3 text-lg text-slate-500">
            Elegí la modalidad que mejor se adapte a vos
          </p>
        </div>

        {tipos.length === 0 ? (
          <p className="py-12 text-center text-slate-500">
            No hay tipos de programa disponibles en este momento.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tipos.map((tipo) => (
              <TipoCard key={tipo.id} tipo={tipo} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
