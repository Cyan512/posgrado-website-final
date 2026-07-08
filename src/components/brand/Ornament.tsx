export function Ornament({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z" />
    </svg>
  );
}

export function SectionDivider({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className ?? ""}`} aria-hidden="true">
      <div className="h-px flex-1 bg-border" />
      <Ornament className="h-4 w-4 text-gold-500" />
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
