import Link from "next/link";
import { GraduationCap, Menu } from "lucide-react";
import Container from "./Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bold text-slate-900 transition-colors hover:text-brand-700"
          >
            <GraduationCap className="h-6 w-6 text-brand-700" />
            <span className="text-lg">Posgrado</span>
          </Link>

          <nav className="hidden items-center gap-1 sm:flex" aria-label="Principal">
            <Link
              href="/"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              Inicio
            </Link>
            <Link
              href="/maestria"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              Maestrías
            </Link>
            <Link
              href="/doctorado"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              Doctorados
            </Link>
          </nav>

          <button
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 sm:hidden"
            aria-label="Abrir menú"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </Container>
    </header>
  );
}
