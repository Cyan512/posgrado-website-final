import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-1.5 text-sm text-slate-500">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 transition-colors hover:text-brand-700"
          >
            <Home className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Inicio</span>
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
            {item.href ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-brand-700 capitalize"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="font-medium text-slate-900 capitalize"
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
