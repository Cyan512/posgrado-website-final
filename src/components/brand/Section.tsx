import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
  number?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ number, title, description, children, className }: Props) {
  return (
    <section className={cn("py-16 sm:py-24", className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {(number || title) && (
          <div className="mb-14">
            {number && (
              <span className="mb-3 block text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
                {number}
              </span>
            )}
            <h2 className="font-display text-3xl font-normal italic text-slate-900 sm:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
