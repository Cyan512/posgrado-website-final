import { FileQuestion } from "lucide-react";
import Button from "@/src/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
        <FileQuestion className="h-8 w-8 text-slate-500" />
      </div>
      <h1 className="text-2xl font-bold text-slate-900">404</h1>
      <p className="mt-2 text-sm text-slate-500">Página no encontrada</p>
      <p className="mt-1 text-sm text-slate-400">
        La página que buscás no existe o fue movida.
      </p>
      <div className="mt-6">
        <Button href="/">Volver al inicio</Button>
      </div>
    </div>
  );
}
