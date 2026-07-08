import Link from "next/link";
import type { Programa } from "@/lib/types";
import { MODALIDAD_MAP } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { Building2, ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface Props {
  programa: Programa;
  tipoSlug: string;
}

export function FeaturedProgramCard({ programa, tipoSlug }: Props) {
  const modalidad = MODALIDAD_MAP[programa.modalidad ?? ""] ?? {
    label: programa.modalidad ?? "N/A",
    color: "",
  };

  return (
    <Link href={`/${tipoSlug}/${programa.slug}`} className="group block lg:col-span-2">
      <Card className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-56 overflow-hidden">
          <Image
            src={IMAGES.collaboration}
            alt={programa.nombre}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <Badge className="mb-2 bg-white/15 border-white/20 text-white text-xs backdrop-blur">
              Destacado
            </Badge>
            <h3 className="text-xl font-bold text-white">{programa.nombre}</h3>
          </div>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur text-white">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>
        <CardContent className="p-5">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Building2 className="h-3.5 w-3.5" />
              {programa.facultad?.nombreFacultad ?? "Sin facultad"}
            </div>
            <Badge variant="outline" className={`${modalidad.color} text-xs`}>
              {modalidad.label}
            </Badge>
          </div>
          <div className="mt-3 flex items-center gap-1 text-sm font-medium text-brand-700 group-hover:text-brand-500 transition-colors">
            Ver programa
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
