import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-8">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-muted">
          <FileQuestion className="h-10 w-10 text-muted-foreground" />
        </div>
      </div>

      <p className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-brand-600">
        Error 404
      </p>

      <h1 className="mt-3 font-display text-4xl font-normal italic text-slate-900 sm:text-5xl">
        Página no encontrada
      </h1>

      <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
        La página que buscás no existe o fue movida. Probá navegando desde el inicio.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button size="lg" asChild>
          <Link href="/">Volver al inicio</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/maestria">Ver programas</Link>
        </Button>
      </div>
    </div>
  );
}
