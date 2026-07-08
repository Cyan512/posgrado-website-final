import { getTiposProgramas } from "@/lib/api";
import { TIPO_ICON_MAP, TIPO_DESCRIPCION_MAP } from "@/lib/constants";
import Container from "@/components/layout/Container";
import { SectionHeader } from "@/components/brand/SectionHeader";
import { Card, CardContent } from "@/components/ui/Card";
import IconBadge from "@/components/ui/IconBadge";
import Link from "next/link";
import type { TipoPrograma } from "@/lib/types";

async function ProgramsSection() {
  const tipos = await getTiposProgramas();

  if (tipos.length === 0) return null;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Programas académicos"
          title="Encontrá el programa ideal para vos"
          description="Elegí entre una amplia oferta de maestrías y doctorados diseñados con los más altos estándares académicos."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tipos.map((tipo) => (
            <TipoCard key={tipo.id} tipo={tipo} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function TipoCard({ tipo }: { tipo: TipoPrograma }) {
  const icon = TIPO_ICON_MAP[tipo.slug] ?? "graduation-cap";
  const desc =
    TIPO_DESCRIPCION_MAP[tipo.slug] ??
    `Explorá todos nuestros programas de ${tipo.nombreTipoPrograma.toLowerCase()}.`;

  return (
    <Link href={`/${tipo.slug}`} className="group block">
      <Card className="h-full transition-shadow hover:shadow-md hover:ring-foreground/15">
        <CardContent className="p-6">
          <IconBadge
            icon={icon}
            className="mb-4 transition-transform duration-300 group-hover:scale-110"
          />
          <h3 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-brand-700">
            {tipo.nombreTipoPrograma}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{desc}</p>
          <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand-700 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Ver programas
            <span aria-hidden="true">&rarr;</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export { ProgramsSection };
