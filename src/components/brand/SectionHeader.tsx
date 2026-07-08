import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  children?: React.ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  children,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-normal italic text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </div>
  );
}
