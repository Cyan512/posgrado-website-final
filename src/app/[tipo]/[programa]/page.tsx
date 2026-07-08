import { getProgramaBySlug } from "@/src/lib/api";
import Container from "@/src/components/layout/Container";
import Breadcrumb from "@/src/components/layout/Breadcrumb";
import ProgramaHeader from "@/src/components/ProgramaHeader";
import Tabs from "@/src/components/Tabs";
import ProgramaDescripcion from "@/src/components/ProgramaDescripcion";
import PlanDeEstudios from "@/src/components/PlanDeEstudios";
import InversionCard from "@/src/components/InversionCard";
import Button from "@/src/components/ui/Button";

interface Props {
  params: Promise<{ tipo: string; programa: string }>;
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

      <Tabs
        defaultTab="informacion"
        tabs={[
          {
            id: "informacion",
            label: "Información",
            content: <ProgramaDescripcion programa={data} />,
          },
          {
            id: "plan",
            label: "Plan de estudios",
            content: (
              <PlanDeEstudios bloques={data.asignaturasPorPeriodo} />
            ),
          },
          {
            id: "inversion",
            label: "Inversión",
            content: <InversionCard inversion={data.inversion} />,
          },
        ]}
      />

      <div className="mt-8">
        <Button href={`/${tipo}`} variant="ghost">
          &larr; Volver a {tipo}
        </Button>
      </div>
    </Container>
  );
}
