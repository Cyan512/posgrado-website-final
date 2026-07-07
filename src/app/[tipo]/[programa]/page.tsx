import { getProgramaBySlug } from "@/src/lib/api";
import Container from "@/src/components/layout/Container";
import Breadcrumb from "@/src/components/layout/Breadcrumb";
import ProgramaHeader from "@/src/components/ProgramaHeader";
import AsignaturaPeriodo from "@/src/components/AsignaturaPeriodo";
import EmptyState from "@/src/components/ui/EmptyState";
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

      {data.asignaturasPorPeriodo.length === 0 ? (
        <EmptyState
          icon="empty"
          title="Sin asignaturas"
          description="Este programa aún no tiene asignaturas publicadas."
          actionLabel={`Volver a ${tipo}`}
          actionHref={`/${tipo}`}
        />
      ) : (
        <div className="mt-4">
          {data.asignaturasPorPeriodo.map((bloque) => (
            <AsignaturaPeriodo key={bloque.periodo.id} bloque={bloque} />
          ))}
        </div>
      )}

      <div className="mt-8">
        <Button href={`/${tipo}`} variant="ghost">
          &larr; Volver a {tipo}
        </Button>
      </div>
    </Container>
  );
}
