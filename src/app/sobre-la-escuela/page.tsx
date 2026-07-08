import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { SectionHeader } from "@/components/brand/SectionHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { Target, Eye, BookOpen, Shield } from "lucide-react";

export default function SobrePage() {
  return (
    <Container className="py-8 sm:py-12">
      <Breadcrumb items={[{ label: "Sobre la escuela" }]} />

      <SectionHeader
        eyebrow="Sobre nosotros"
        title="Escuela de Posgrado"
        description="Formamos líderes académicos y profesionales desde nuestra fundación, combinando tradición, investigación e innovación."
        align="left"
        className="!mx-0 mt-6 !max-w-none"
      />

      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Misión</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Formar profesionales e investigadores de alto nivel, capaces de contribuir al
              desarrollo científico, tecnológico y social del país, mediante programas de
              posgrado de excelencia académica.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
              <Eye className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Visión</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Ser reconocida como una escuela de posgrado de referencia internacional,
              comprometida con la generación de conocimiento, la innovación y la formación
              de líderes que transformen la sociedad.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Trayectoria</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Con más de 50 años de historia, nuestra escuela ha formado a miles de
              profesionales que hoy ocupan posiciones de liderazgo en el ámbito académico,
              empresarial y gubernamental.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
              <Shield className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Acreditación</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Nuestros programas cuentan con las acreditaciones de los organismos
              nacionales de educación superior, garantizando calidad y reconocimiento
              oficial de los títulos otorgados.
            </p>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
