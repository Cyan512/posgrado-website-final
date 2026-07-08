import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { PageHero } from "@/components/brand/PageHero";
import { Section } from "@/components/brand/Section";
import { SectionDivider } from "@/components/brand/Ornament";
import { Timeline } from "@/components/brand/Timeline";
import { FacultyGrid } from "@/components/brand/FacultyGrid";
import { AccreditationBar } from "@/components/brand/AccreditationBar";
import { Quote } from "@/components/brand/Quote";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/brand/RevealOnScroll";
import { Shield, Star, Heart, Lightbulb, Users, Globe } from "lucide-react";
import { ACREDITACIONES, DIRECTIVOS, HITOS, VALORES } from "@/lib/data";
import { IMAGES, IMAGE_ALTS } from "@/lib/images";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  star: <Star className="h-5 w-5" />,
  lightbulb: <Lightbulb className="h-5 w-5" />,
  heart: <Heart className="h-5 w-5" />,
  shield: <Shield className="h-5 w-5" />,
  users: <Users className="h-5 w-5" />,
  globe: <Globe className="h-5 w-5" />,
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        variant="dark"
        image={IMAGES.graduates}
        imageAlt={IMAGE_ALTS.graduates}
        eyebrow="Sobre nosotros"
        title="Formamos líderes desde 1974"
        description="La Escuela de Posgrado combina tradición académica con visión de futuro. Más de cinco décadas formando profesionales e investigadores que transforman la sociedad."
        stats={[
          { value: "50+", label: "Años" },
          { value: "5,000+", label: "Graduados" },
          { value: "25+", label: "Programas" },
          { value: "20+", label: "Alianzas" },
        ]}
      />

      <Container className="py-8 sm:py-12">
        <Breadcrumb items={[{ label: "Sobre la escuela" }]} />
      </Container>

      <RevealOnScroll>
        <section className="py-8 sm:py-12">
          <Container>
            <Quote
              text="Nuestra misión es formar profesionales e investigadores de alto nivel, capaces de contribuir al desarrollo científico, tecnológico y social del país, mediante programas de posgrado de excelencia académica."
              author="Dra. María Elena Rodríguez"
              role="Decana"
              className="mx-auto max-w-3xl"
            />
          </Container>
        </section>
      </RevealOnScroll>

      <SectionDivider className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />

      <Section number="01" title="Nuestros valores">
        <RevealOnScroll>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALORES.map((v) => (
              <Card key={v.titulo} className="transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    {iconMap[v.icono] ?? <Star className="h-5 w-5" />}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">{v.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealOnScroll>
      </Section>

      <SectionDivider className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />

      <Section number="02" title="Nuestra historia">
        <RevealOnScroll>
          <Timeline hitos={HITOS} />
        </RevealOnScroll>
      </Section>

      <SectionDivider className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />

      <Section number="03" title="Directorio">
        <RevealOnScroll>
          <FacultyGrid personas={DIRECTIVOS} />
        </RevealOnScroll>
      </Section>

      <SectionDivider className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />

      <Section number="04" title="Acreditaciones y reconocimientos">
        <RevealOnScroll>
          <AccreditationBar acreditaciones={ACREDITACIONES} />
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Nuestros programas cumplen con los más altos estándares de calidad educativa.
          </p>
        </RevealOnScroll>
      </Section>

      <section className="py-20 bg-brand-900">
        <Container className="text-center">
          <h2 className="font-display text-3xl font-normal italic text-white sm:text-4xl">
            ¿Querés ser parte?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-brand-200">
            Conocé nuestro proceso de admisión y comenzá tu camino académico.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-white text-brand-900 hover:bg-brand-50">
              <Link href="/admision">Proceso de admisión</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
