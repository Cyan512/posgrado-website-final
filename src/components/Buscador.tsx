import { Search, X } from "lucide-react";
import Link from "next/link";

interface Props {
  tipoSlug: string;
  q: string;
  size: number;
}

export default function Buscador({ tipoSlug, q, size }: Props) {
  return (
    <form method="get" action={`/${tipoSlug}`} className="mb-6">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="search"
          name="q"
          defaultValue={q}
          placeholder="Buscar programa por nombre..."
          className="block w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-20 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
        />
        <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1">
          {q && (
            <Link
              href={`/${tipoSlug}?page=0&size=${size}`}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
              aria-label="Limpiar búsqueda"
            >
              <X className="h-3.5 w-3.5" />
            </Link>
          )}
          <input type="hidden" name="size" value={size} />
          <button
            type="submit"
            className="rounded-lg bg-brand-800 px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-brand-700"
          >
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
}
