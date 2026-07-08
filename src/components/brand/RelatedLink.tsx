import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  href: string;
  label: string;
  className?: string;
}

export function RelatedLink({ href, label, className }: Props) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 transition-colors hover:text-brand-500 ${className ?? ""}`}
    >
      {label}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}
