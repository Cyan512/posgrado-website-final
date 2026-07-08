import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { RevealOnScroll } from "@/components/brand/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { IMAGES, IMAGE_ALTS } from "@/lib/images";
import { BookOpen, Users, MonitorPlay, Plane, Briefcase, ArrowRight } from "lucide-react";

const servicios = [
  {
    num: "01",
    icon: BookOpen,
    titulo: "Biblioteca y recursos",
    desc: "Acceso a biblioteca digital 24/7, más de 50,000 títulos y bases de datos académicas internacionales.",
  },
  {
    num: "02",
    icon: Users,
    titulo: "Tutorías y apoyo",
    desc: "Sesiones de tutoría personalizadas con docentes investigadores y consejería académica durante todo el programa.",
  },
  {
    num: "03",
    icon: MonitorPlay,
    titulo: "Plataforma virtual",
    desc: "Campus virtual con clases grabadas, materiales, foros y biblioteca digital accesible desde cualquier dispositivo.",
  },
  {
    num: "04",
    icon: Plane,
    titulo: "Movilidad internacional",
    desc: "Convenios con 20+ universidades en el extranjero para estancias de investigación y pasantías internacionales.",
  },
  {
    num: "05",
    icon: Briefcase,
    titulo: "Centro de empleabilidad",
    desc: "Bolsa de trabajo, mentoría profesional, talleres de inserción laboral y red de alumni con 5,000+ egresados.",
  },
];

export function StudentInfo() {
  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[5fr_6fr]">
          <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.library}
              alt={IMAGE_ALTS.library}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                Estudiar en la Escuela
              </p>
              <h2 className="mt-3 font-display text-3xl font-normal italic text-white sm:text-4xl">
                Información para el estudiante
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-200">
                Conocé los servicios y recursos disponibles para acompañarte durante toda tu formación académica.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {servicios.map((s) => (
              <RevealOnScroll key={s.num}>
                <div className="flex items-start gap-4 rounded-xl border border-border/40 bg-card p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-gold-600">{s.num}</p>
                    <h3 className="mt-1 text-sm font-semibold text-slate-900">{s.titulo}</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <Button asChild size="lg">
            <Link href="/admision">
              Ver proceso de admisión
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
