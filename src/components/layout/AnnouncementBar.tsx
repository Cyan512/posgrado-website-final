import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-brand-900 text-white">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-center gap-2 px-4 text-sm">
        <span className="hidden sm:inline text-brand-200">
          Inscripciones abiertas 2025 — Hasta el 30 de julio
        </span>
        <span className="sm:hidden text-brand-200">Inscripciones 2025 abiertas</span>
        <Link
          href="/admision"
          className="rounded-full bg-white/15 px-3 py-0.5 text-xs font-medium transition-colors hover:bg-white/25"
        >
          Postular
        </Link>
      </div>
    </div>
  );
}
