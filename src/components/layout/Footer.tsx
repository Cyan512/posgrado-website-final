import Link from "next/link";
import { BrandMark } from "@/components/brand/BrandMark";
import { Separator } from "@/components/ui/separator";
import Container from "./Container";

const programLinks = [
  { href: "/maestria", label: "Maestrías" },
  { href: "/doctorado", label: "Doctorados" },
];

const resourceLinks = [
  { href: "/admision", label: "Admisión" },
  { href: "/sobre-la-escuela", label: "Sobre la escuela" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-card">
      <Container className="py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <BrandMark />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Formación de posgrado de excelencia. Impulsá tu futuro académico y profesional con programas de calidad internacional.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide uppercase text-foreground">
              Programas
            </h4>
            <ul className="space-y-2.5">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide uppercase text-foreground">
              Recursos
            </h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide uppercase text-foreground">
              Contacto
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>Escuela de Posgrado</li>
              <li>Av. Universitaria 1801</li>
              <li>San Miguel, Lima — Perú</li>
              <li className="pt-2">
                <a
                  href="mailto:posgrado@universidad.edu.pe"
                  className="transition-colors hover:text-foreground"
                >
                  posgrado@universidad.edu.pe
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Escuela de Posgrado. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/sobre-la-escuela" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Acerca de
            </Link>
            <Link href="/contacto" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contacto
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
