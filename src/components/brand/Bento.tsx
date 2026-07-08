import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid auto-rows-[minmax(0,auto)] gap-4 sm:gap-6",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  span?: "sm" | "md" | "lg";
}

const spanClasses = {
  sm: "sm:col-span-1 sm:row-span-1",
  md: "sm:col-span-2 sm:row-span-1",
  lg: "sm:col-span-1 sm:row-span-2",
};

export function BentoItem({ children, className, span = "sm" }: BentoItemProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8",
        spanClasses[span],
        className
      )}
    >
      {children}
    </div>
  );
}
