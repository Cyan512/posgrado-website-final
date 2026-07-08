import { getTiposProgramas } from "@/lib/api";
import { TIPO_DESCRIPCION_MAP } from "@/lib/constants";
import Container from "@/components/layout/Container";
import { SectionHeader } from "@/components/brand/SectionHeader";
import { RevealOnScroll } from "@/components/brand/RevealOnScroll";
import { IMAGES, IMAGE_ALTS } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { ArrowUpRight, GraduationCap, Microscope } from "lucide-react";
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

        <RevealOnScroll className="mt-14">
          <div className="grid gap-6 lg:grid-cols-2">
            {tipos.map((tipo) => (
              <TipoCardLarge key={tipo.id} tipo={tipo} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/maestria"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-500 transition-colors"
            >
              Ver todos los programas
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

const tipoImages: Record<string, keyof typeof IMAGES> = {
  maestria: "collaboration",
  doctorado: "research",
};

const tipoIcons: Record<string, React.ReactNode> = {
  maestria: <GraduationCap className="h-6 w-6" />,
  doctorado: <Microscope className="h-6 w-6" />,
};

function TipoCardLarge({ tipo }: { tipo: TipoPrograma }) {
  const imgKey = tipoImages[tipo.slug] ?? "library";
  const imgUrl = IMAGES[imgKey];
  const icon = tipoIcons[tipo.slug] ?? <GraduationCap className="h-6 w-6" />;
  const desc = TIPO_DESCRIPCION_MAP[tipo.slug] ?? `Explorá nuestros programas de ${tipo.nombreTipoPrograma.toLowerCase()}.`;

  return (
    <Link href={`/${tipo.slug}`} className="group block">
      <Card className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imgUrl}
            alt={IMAGE_ALTS[imgKey] ?? `Imagen de ${tipo.nombreTipoPrograma}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur text-white">
                {icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{tipo.nombreTipoPrograma}</h3>
                <p className="text-sm text-brand-200 line-clamp-1">{desc}</p>
              </div>
            </div>
          </div>
        </div>
        <CardContent className="p-5">
          <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
          <div className="mt-3 flex items-center gap-1 text-sm font-medium text-brand-700">
            Explorar programas
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export { ProgramsSection };
