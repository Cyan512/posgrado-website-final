"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RootError({
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
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50">
        <AlertTriangle className="h-8 w-8 text-rose-600" />
      </div>
      <h1 className="text-xl font-semibold text-slate-900">Error inesperado</h1>
      <p className="mt-2 max-w-sm text-sm text-slate-500">
        {error.message || "Ocurrió un error al cargar esta página."}
      </p>
      <div className="mt-6 flex gap-3">
        <Button onClick={reset}>Reintentar</Button>
        <Button variant="outline" asChild>
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  );
}
