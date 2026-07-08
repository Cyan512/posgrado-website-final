import Container from "@/components/layout/Container";
import { SectionHeader } from "@/components/brand/SectionHeader";
import { AccreditationBar } from "@/components/brand/AccreditationBar";
import { ACREDITACIONES, ALIADOS } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";

export function TrustBarSection() {
  return (
    <section className="py-16 sm:py-20 bg-muted/50">
      <Container>
        <SectionHeader
          eyebrow="Confianza"
          title="Reconocimiento y alianzas"
          align="center"
        />

        <div className="mt-12 space-y-8">
          <div>
            <p className="mb-4 text-center text-sm font-medium text-muted-foreground">
              Acreditaciones
            </p>
            <AccreditationBar acreditaciones={ACREDITACIONES} />
          </div>

          <div className="pt-8 border-t border-border">
            <p className="mb-4 text-center text-sm font-medium text-muted-foreground">
              Alianzas internacionales
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {ALIADOS.map((a) => (
                <Badge key={a} variant="secondary" className="text-sm">
                  {a}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
