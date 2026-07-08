import type { TipoPrograma } from "@/lib/types";
import { TIPO_DESCRIPCION_MAP } from "@/lib/constants";
import { TIPOS_FALLBACK } from "@/lib/data";
import Container from "@/components/layout/Container";
import { SectionHeader } from "@/components/brand/SectionHeader";
import { RevealOnScroll } from "@/components/brand/RevealOnScroll";
import { IMAGES, IMAGE_ALTS } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const tipoImages: Record<string, keyof typeof IMAGES> = {
  maestria: "collaboration",
  doctorado: "research",
};

interface Props {
  tipos?: TipoPrograma[];
}

function ProgramsSection({ tipos = [] }: Props) {
  const cards = tipos.length > 0 ? tipos : TIPOS_FALLBACK;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Programas académicos"
          title="Explorá nuestros programas"
          description="Elegí entre una amplia oferta de maestrías y doctorados diseñados con los más altos estándares académicos."
        />

        <RevealOnScroll className="mt-14">
          <div className="flex items-stretch gap-2 h-[380px] sm:h-[420px] w-full max-w-6xl mx-auto overflow-x-auto sm:overflow-visible">
            {cards.map((tipo) => {
              const imgKey = tipoImages[tipo.slug] ?? "library";
              const desc =
                TIPO_DESCRIPCION_MAP[tipo.slug] ??
                `Explorá todos nuestros programas de ${tipo.nombreTipoPrograma.toLowerCase()}.`;

              return (
                <Link
                  key={tipo.id}
                  href={`/${tipo.slug}`}
                  className="relative group flex-1 min-w-[240px] sm:min-w-0 transition-all duration-500 overflow-hidden rounded-xl hover:flex-[2.5]"
                  aria-label={tipo.nombreTipoPrograma}
                >
                  <Image
                    src={IMAGES[imgKey]}
                    alt={IMAGE_ALTS[imgKey] ?? tipo.nombreTipoPrograma}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/25 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <h3 className="text-white font-bold text-2xl sm:text-3xl">
                      {tipo.nombreTipoPrograma}
                    </h3>
                    <p className="mt-1 text-sm text-brand-200 line-clamp-2">{desc}</p>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 text-center">
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

export { ProgramsSection };
