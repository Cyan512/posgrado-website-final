import { BookOpen } from "lucide-react";
import Button from "./Button";

interface EmptyStateProps {
  icon?: "search" | "empty" | "error";
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
}

const icons = {
  search: BookOpen,
  empty: BookOpen,
  error: BookOpen,
};

export default function EmptyState({
  icon = "empty",
  title,
  description,
  actionLabel,
  actionHref,
}: EmptyStateProps) {
  const Icon = icons[icon];

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50">
        <Icon className="h-8 w-8 text-brand-600" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      {description && (
        <p className="mt-2 max-w-sm text-sm text-slate-500">{description}</p>
      )}
      {actionLabel && actionHref && (
        <div className="mt-6">
          <Button href={actionHref} variant="primary">
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
}
