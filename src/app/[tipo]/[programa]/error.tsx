"use client";

import { useEffect } from "react";

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

  return (
    <div className="flex flex-col items-center justify-center py-24">
      <h1 className="text-2xl font-bold text-gray-900">Error al cargar</h1>
      <p className="mt-2 text-gray-500">{error.message}</p>
      <button
        onClick={reset}
        className="mt-6 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 transition-colors"
      >
        Reintentar
      </button>
    </div>
  );
}
