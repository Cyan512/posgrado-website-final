import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Stat {
  value: string;
  label: string;
}

type PageHeroVariant = "default" | "dark" | "split" | "minimal";

interface Props {
  variant?: PageHeroVariant;
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  stats?: Stat[];
  className?: string;
}

const variantStyles: Record<PageHeroVariant, { section: string; title: string; desc: string; eyebrow: string }> = {
  default: {
    section: "border-b border-border bg-muted/30 py-16 sm:py-24",
    title: "text-slate-900",
    desc: "text-muted-foreground",
    eyebrow: "text-brand-700",
  },
  dark: {
    section: "bg-gradient-to-b from-brand-950 via-brand-900 to-brand-800 py-20 sm:py-32",
    title: "text-white",
    desc: "text-brand-200",
    eyebrow: "text-gold-500",
  },
  split: {
    section: "border-b border-border bg-muted/30 py-16 sm:py-24",
    title: "text-slate-900",
    desc: "text-muted-foreground",
    eyebrow: "text-brand-700",
  },
  minimal: {
    section: "py-12 sm:py-16",
    title: "text-slate-900",
    desc: "text-muted-foreground",
    eyebrow: "text-brand-700",
  },
};

export function PageHero({
  variant = "default",
  eyebrow,
  title,
  description,
  actions,
  stats,
  className,
}: Props) {
  const styles = variantStyles[variant];
  const statColor = variant === "dark" ? "text-gold-500" : "text-brand-700";

  return (
    <section className={cn(styles.section, className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {variant === "split" && stats ? (
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              {eyebrow && (
                <p className={cn("mb-3 text-sm font-semibold uppercase tracking-[0.2em]", styles.eyebrow)}>
                  {eyebrow}
                </p>
              )}
              <h1 className={cn("font-display text-4xl font-normal italic leading-tight sm:text-5xl lg:text-6xl", styles.title)}>
                {title}
              </h1>
              {description && (
                <p className={cn("mt-4 text-lg leading-relaxed", styles.desc)}>{description}</p>
              )}
              {actions && <div className="mt-8">{actions}</div>}
            </div>
            <div className="flex flex-wrap gap-8 lg:flex-nowrap">
              {stats.map((s) => (
                <div key={s.label} className="text-center min-w-[100px]">
                    <div className={cn("font-display text-3xl italic sm:text-4xl", statColor)}>
                    {s.value}
                  </div>
                  <p className={cn("mt-1 text-sm", styles.desc)}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-3xl">
            {eyebrow && (
              <p className={cn("mb-3 text-sm font-semibold uppercase tracking-[0.2em]", styles.eyebrow)}>
                {eyebrow}
              </p>
            )}
            <h1 className={cn("font-display text-4xl font-normal italic leading-tight sm:text-5xl lg:text-6xl", styles.title)}>
              {title}
            </h1>
            {description && (
              <p className={cn("mt-4 text-lg leading-relaxed", styles.desc)}>{description}</p>
            )}
            {actions && <div className="mt-8">{actions}</div>}
            {stats && (
              <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                  <div className={cn("font-display text-3xl italic sm:text-4xl", statColor)}>
                      {s.value}
                    </div>
                    <p className={cn("mt-1 text-sm", styles.desc)}>{s.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
