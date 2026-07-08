import { getProgramaBySlug } from "@/lib/api";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ProgramaHeader from "@/components/ProgramaHeader";
import ProgramaDescripcion from "@/components/ProgramaDescripcion";
import PlanDeEstudios from "@/components/PlanDeEstudios";
import InversionCard from "@/components/InversionCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

interface Props {
  params: Promise<{ tipo: string; programa: string }>;
}

interface Props {
  params: Promise<{ tipo: string; programa: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { programa } = await params;
  try {
    const data = await getProgramaBySlug(programa);
    return {
      title: data.nombre,
      description: data.objetivoGeneral?.slice(0, 160) ?? `Detalle del programa ${data.nombre}.`,
      openGraph: {
        title: `${data.nombre} | Posgrado`,
        description: data.objetivoGeneral?.slice(0, 160) ?? `Detalle del programa ${data.nombre}.`,
        type: "article",
      },
    };
  } catch {
    return {
      title: "Programa no encontrado",
    };
  }
}

export default async function ProgramaPage({ params }: Props) {
  const { tipo, programa } = await params;
  const data = await getProgramaBySlug(programa);

  return (
    <Container className="py-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: tipo, href: `/${tipo}` },
          { label: data.nombre },
        ]}
      />

      <ProgramaHeader programa={data} />

      <Tabs defaultValue="informacion" className="mt-8">
        <TabsList className="w-full justify-start rounded-xl border border-border bg-muted/50 p-1">
          <TabsTrigger value="informacion" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
            Información
          </TabsTrigger>
          <TabsTrigger value="plan" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
            Plan de estudios
          </TabsTrigger>
          <TabsTrigger value="inversion" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
            Inversión
          </TabsTrigger>
        </TabsList>

        <TabsContent value="informacion" className="mt-6">
          <ProgramaDescripcion programa={data} />
        </TabsContent>

        <TabsContent value="plan" className="mt-6">
          <PlanDeEstudios bloques={data.asignaturasPorPeriodo} />
        </TabsContent>

        <TabsContent value="inversion" className="mt-6">
          <InversionCard inversion={data.inversion} />
        </TabsContent>
      </Tabs>

      <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
        <Button variant="ghost" asChild>
          <Link href={`/${tipo}`}>&larr; Volver a {tipo}</Link>
        </Button>
        <Button asChild>
          <Link href="/admision">Postular a este programa</Link>
        </Button>
      </div>
    </Container>
  );
}
