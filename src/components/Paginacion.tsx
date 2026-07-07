import Link from "next/link";

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

  return (
    <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
      <p className="text-sm text-gray-500">
        Página {displayPage} de {totalPages} — {totalElements} programas en total
      </p>

      <div className="flex gap-2">
        {isFirst ? (
          <span className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-300 cursor-default">
            &larr; Anterior
          </span>
        ) : (
          <Link
            href={`/${tipoSlug}?page=${page - 1}&size=${size}${qSuffix}`}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            &larr; Anterior
          </Link>
        )}

        {isLast ? (
          <span className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-300 cursor-default">
            Siguiente &rarr;
          </span>
        ) : (
          <Link
            href={`/${tipoSlug}?page=${page + 1}&size=${size}${qSuffix}`}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Siguiente &rarr;
          </Link>
        )}
      </div>
    </div>
  );
}
