"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { PosgradoApiError, getErrorMessage } from "@/lib/errors";

export default function ProgramaError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const message =
    error instanceof PosgradoApiError
      ? getErrorMessage(error.errorCode)
      : error.message || "Error desconocido al cargar la página.";

  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50">
        <AlertTriangle className="h-8 w-8 text-rose-600" />
      </div>
      <h1 className="text-xl font-semibold text-slate-900">Error al cargar</h1>
      <p className="mt-2 max-w-sm text-sm text-slate-500">{message}</p>
      <button
        onClick={reset}
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-700 transition-colors"
      >
        Reintentar
      </button>
    </div>
  );
}
