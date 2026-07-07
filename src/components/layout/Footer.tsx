import Link from "next/link";
import { GraduationCap } from "lucide-react";
import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-slate-900">
              <GraduationCap className="h-5 w-5 text-brand-700" />
              Posgrado
            </Link>
            <p className="mt-2 text-sm text-slate-500">
              Explorá nuestra oferta académica de posgrado y encontrá el programa ideal para vos.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-slate-900">Programas</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/maestria" className="text-sm text-slate-500 transition-colors hover:text-brand-700">
                  Maestrías
                </Link>
              </li>
              <li>
                <Link href="/doctorado" className="text-sm text-slate-500 transition-colors hover:text-brand-700">
                  Doctorados
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-slate-900">Legal</h4>
            <p className="text-sm text-slate-500">
              &copy; {currentYear} Posgrado. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
