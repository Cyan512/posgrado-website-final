import Container from "@/components/layout/Container";
import { SectionHeader } from "@/components/brand/SectionHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NOTICIAS } from "@/lib/data";

export function NewsSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Actualidad"
          title="Últimas noticias"
          description="Enterate de las novedades de nuestra escuela y la comunidad académica."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {NOTICIAS.map((n) => (
            <Card key={n.titulo} className="flex flex-col transition-shadow hover:shadow-md">
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-2">
                  <Badge variant="outline" className="text-xs bg-brand-50 text-brand-700 border-brand-200">
                    {n.categoria}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{n.fecha}</span>
                </div>
                <h3 className="text-base font-semibold text-slate-900">{n.titulo}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {n.resumen}
                </p>
                <div className="mt-4">
                  <span className="text-sm font-medium text-brand-700 hover:text-brand-500 transition-colors cursor-pointer">
                    Leer más &rarr;
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" asChild>
            <Link href="/admision">Ver más noticias</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
