import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { NewsletterForm } from "./NewsletterForm";
import { ACREDITACIONES } from "@/lib/data";
import { Linkedin, Instagram, Youtube, Facebook, Mail, MapPin, Phone } from "lucide-react";
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

const socialLinks = [
  { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "#" },
  { icon: <Instagram className="h-5 w-5" />, label: "Instagram", href: "#" },
  { icon: <Facebook className="h-5 w-5" />, label: "Facebook", href: "#" },
  { icon: <Youtube className="h-5 w-5" />, label: "YouTube", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-brand-950 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <Container className="relative py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <span className="font-display text-lg italic text-gold-400">P</span>
                </div>
                <span className="text-lg font-bold text-white">Posgrado</span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-200">
              Formación de posgrado de excelencia. Impulsá tu futuro académico y profesional con programas de calidad internacional.
            </p>
            <div className="mt-6">
              <p className="mb-2 text-xs font-medium text-brand-200 uppercase tracking-wider">
                Recibí novedades
              </p>
              <NewsletterForm />
            </div>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-brand-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-brand-300">
              Programas
            </h4>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-brand-300">
              Recursos
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-brand-300">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-brand-200">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-brand-400" />
                <span>Av. Universitaria 1801<br />San Miguel, Lima — Perú</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 flex-shrink-0 text-brand-400" />
                <span>+51 1 626 2000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 flex-shrink-0 text-brand-400" />
                <a
                  href="mailto:posgrado@universidad.edu.pe"
                  className="transition-colors hover:text-white"
                >
                  posgrado@universidad.edu.pe
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
          {ACREDITACIONES.map((a) => (
            <span
              key={a.nombre}
              className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-brand-300"
            >
              {a.nombre}
              <span className="ml-1 text-brand-500">{a.ano}</span>
            </span>
          ))}
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-brand-400">
            &copy; {currentYear} Escuela de Posgrado. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/sobre-la-escuela" className="text-xs text-brand-400 transition-colors hover:text-white">
              Acerca de
            </Link>
            <Link href="/contacto" className="text-xs text-brand-400 transition-colors hover:text-white">
              Contacto
            </Link>
            <Link href="/preguntas-frecuentes" className="text-xs text-brand-400 transition-colors hover:text-white">
              FAQ
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
