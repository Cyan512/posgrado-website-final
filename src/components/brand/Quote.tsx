import { cn } from "@/lib/utils";

interface Props {
  text: string;
  author?: string;
  role?: string;
  className?: string;
}

export function Quote({ text, author, role, className }: Props) {
  return (
    <blockquote className={cn("border-l-4 border-brand-600 pl-6", className)}>
      <p className="font-display text-xl font-normal italic leading-relaxed text-slate-800 sm:text-2xl">
        &ldquo;{text}&rdquo;
      </p>
      {author && (
        <footer className="mt-4 flex items-center gap-3">
          <div className="h-px w-8 bg-brand-300" />
          <cite className="not-italic">
            <span className="text-sm font-semibold text-slate-900">{author}</span>
            {role && <span className="text-sm text-muted-foreground"> — {role}</span>}
          </cite>
        </footer>
      )}
    </blockquote>
  );
}
