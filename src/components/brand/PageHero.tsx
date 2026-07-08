import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import Image from "next/image";

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
  image?: string;
  imageAlt?: string;
}

const darkSection = "relative overflow-hidden bg-brand-950 py-20 sm:py-32";

export function PageHero({
  variant = "default",
  eyebrow,
  title,
  description,
  actions,
  stats,
  className,
  image,
  imageAlt,
}: Props) {
  const isDark = variant === "dark";
  const statColor = isDark ? "text-gold-500" : "text-brand-700";
  const titleColor = isDark ? "text-white" : "text-slate-900";
  const descColor = isDark ? "text-brand-200" : "text-muted-foreground";
  const eyebrowColor = isDark ? "text-gold-500" : "text-brand-700";
  const sectionBg = isDark
    ? darkSection
    : variant === "split" || variant === "minimal"
      ? "py-16 sm:py-24"
      : "border-b border-border bg-muted/30 py-16 sm:py-24";

  return (
    <section className={cn(sectionBg, className)}>
      {isDark && image && (
        <>
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            className="object-cover opacity-25"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/60 via-brand-950/40 to-brand-950/80" />
        </>
      )}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className={cn("mb-3 text-sm font-semibold uppercase tracking-[0.2em]", eyebrowColor)}>
              {eyebrow}
            </p>
          )}
          <h1 className={cn("font-display text-4xl font-normal italic leading-tight sm:text-5xl lg:text-6xl", titleColor)}>
            {title}
          </h1>
          {description && (
            <p className={cn("mt-4 text-lg leading-relaxed", descColor)}>{description}</p>
          )}
          {actions && <div className="mt-8">{actions}</div>}
          {stats && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className={cn("font-display text-3xl italic sm:text-4xl", statColor)}>
                    {s.value}
                  </div>
                  <p className={cn("mt-1 text-sm", descColor)}>{s.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
