interface BadgeProps {
  children: string;
  color?: string;
  className?: string;
}

export default function Badge({ children, color, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${
        color ?? "bg-slate-50 text-slate-600 ring-slate-500/10"
      } ${className}`}
    >
      {children}
    </span>
  );
}
