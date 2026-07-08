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
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-rose-50">
        <AlertTriangle className="h-10 w-10 text-rose-600" />
      </div>
      <h1 className="font-display text-3xl font-normal italic text-slate-900 sm:text-4xl">
        Algo salió mal
      </h1>
      <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
        {error.message || "Ocurrió un error inesperado al cargar esta página. Intentá de nuevo."}
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button size="lg" onClick={reset}>Reintentar</Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  );
}
