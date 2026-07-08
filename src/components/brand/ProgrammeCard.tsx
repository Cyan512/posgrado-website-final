import Link from "next/link";
import type { Programa } from "@/lib/types";
import { MODALIDAD_MAP } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const CARD_IMAGES: Array<keyof typeof IMAGES> = [
  "collaboration",
  "lecture",
  "research",
  "library",
  "study",
];

interface Props {
  programa: Programa;
  tipoSlug: string;
  imageIndex?: number;
}

export function ProgrammeCard({ programa, tipoSlug, imageIndex = 0 }: Props) {
  const modalidad = MODALIDAD_MAP[programa.modalidad ?? ""] ?? {
    label: programa.modalidad ?? "N/A",
    color: "",
  };
  const imgKey = CARD_IMAGES[imageIndex % CARD_IMAGES.length];

  return (
    <Link href={`/${tipoSlug}/${programa.slug}`} className="group block">
      <div className="h-full rounded-xl overflow-hidden border border-border/60 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative h-72">
          <Image
            src={IMAGES[imgKey]}
            alt={programa.nombre}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/25 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <Badge
              variant="outline"
              className="mb-2 bg-white/10 border-white/20 text-white text-xs backdrop-blur"
            >
              {modalidad.label}
            </Badge>
            <h3 className="text-white font-bold text-lg leading-tight">
              {programa.nombre}
            </h3>
            <p className="mt-1 text-sm text-brand-200">
              {programa.facultad?.nombreFacultad ?? "Sin facultad"}
            </p>
          </div>

          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur text-white">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
