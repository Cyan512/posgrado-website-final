interface Props {
  value: string;
  label: string;
  variant?: "default" | "gold";
}

export function StatRow({ value, label, variant = "default" }: Props) {
  return (
    <div className="text-center">
      <div className={`font-display text-3xl italic sm:text-4xl ${variant === "gold" ? "text-gold-500" : "text-brand-700"}`}>
        {value}
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
