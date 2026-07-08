import { cn } from "@/lib/utils";
import { GraduationCap } from "lucide-react";

interface BrandMarkProps {
  className?: string;
  iconOnly?: boolean;
}

export function BrandMark({ className, iconOnly = false }: BrandMarkProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-800 text-white">
        <GraduationCap className="h-5 w-5" />
      </div>
      {!iconOnly && (
        <span className="font-sans text-lg font-bold tracking-tight text-slate-900">
          Posgrado
        </span>
      )}
    </div>
  );
}
