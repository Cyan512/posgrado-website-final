import Link from "next/link";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-20 sm:py-28 bg-brand-900">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <Container className="relative text-center">
        <h2 className="font-display text-3xl font-normal italic text-white sm:text-4xl lg:text-5xl">
          ¿Listo para transformar tu futuro?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-brand-200">
          Da el siguiente paso en tu carrera. Postulá hoy a uno de nuestros programas de posgrado.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild className="bg-white text-brand-900 hover:bg-brand-50">
            <Link href="/maestria">Explorar programas</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white/20 text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/admision">Proceso de admisión</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
