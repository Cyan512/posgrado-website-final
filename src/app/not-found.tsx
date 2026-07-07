import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <h1 className="text-4xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-gray-500">Página no encontrada</p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
