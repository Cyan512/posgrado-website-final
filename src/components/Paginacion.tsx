import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  tipoSlug: string;
  page: number;
  totalPages: number;
  totalElements: number;
  size: number;
  q?: string;
}

export default function Paginacion({
  tipoSlug,
  page,
  totalPages,
  totalElements,
  size,
  q,
}: Props) {
  if (totalPages <= 1) return null;

  const isFirst = page === 0;
  const isLast = page >= totalPages - 1;
  const displayPage = page + 1;
  const qSuffix = q ? `&q=${encodeURIComponent(q)}` : "";
  const baseHref = `/${tipoSlug}?size=${size}${qSuffix}`;

  const pageNumbers: (number | "dots")[] = [];
  for (let i = 0; i < totalPages; i++) {
    if (i === 0 || i === totalPages - 1 || (i >= page - 1 && i <= page + 1)) {
      pageNumbers.push(i);
    } else if (pageNumbers[pageNumbers.length - 1] !== "dots") {
      pageNumbers.push("dots");
    }
  }

  return (
    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
      <p className="text-sm text-slate-500">
        Página {displayPage} de {totalPages}{" "}
        <span className="hidden sm:inline">— {totalElements} programas</span>
      </p>

      <nav aria-label="Paginación" className="flex items-center gap-1">
        {isFirst ? (
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 cursor-default">
            <ChevronLeft className="h-4 w-4" />
          </span>
        ) : (
          <Link
            href={`${baseHref}&page=${page - 1}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Página anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </Link>
        )}

        {pageNumbers.map((p, i) =>
          p === "dots" ? (
            <span key={`dots-${i}`} className="px-1 text-slate-400 select-none">
              ...
            </span>
          ) : (
            <Link
              key={p}
              href={`${baseHref}&page=${p}`}
              className={`inline-flex h-9 min-w-[2.25rem] items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                p === page
                  ? "bg-brand-800 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
              aria-label={`Ir a página ${p + 1}`}
              aria-current={p === page ? "page" : undefined}
            >
              {p + 1}
            </Link>
          )
        )}

        {isLast ? (
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 cursor-default">
            <ChevronRight className="h-4 w-4" />
          </span>
        ) : (
          <Link
            href={`${baseHref}&page=${page + 1}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Página siguiente"
          >
            <ChevronRight className="h-4 w-4" />
          </Link>
        )}
      </nav>
    </div>
  );
}
