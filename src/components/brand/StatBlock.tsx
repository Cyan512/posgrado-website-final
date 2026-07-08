import { cn } from "@/lib/utils";

interface StatBlockProps {
  value: string;
  label: string;
  className?: string;
}

export function StatBlock({ value, label, className }: StatBlockProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className="font-display text-4xl font-normal italic text-brand-800 sm:text-5xl">
        {value}
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
