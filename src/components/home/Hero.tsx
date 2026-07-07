import { GraduationCap } from "lucide-react";
import Container from "../layout/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-brand-900">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <Container className="relative py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-brand-300 backdrop-blur">
            <GraduationCap className="h-4 w-4" />
            Excelencia académica
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Formá tu futuro con nuestros programas de{" "}
            <span className="text-brand-400">posgrado</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
            Explorá maestrías y doctorados diseñados para impulsar tu carrera
            profesional y académica al siguiente nivel.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/maestria" variant="primary" size="lg">
              Ver Maestrías
            </Button>
            <Button href="/doctorado" variant="secondary" size="lg">
              Ver Doctorados
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
