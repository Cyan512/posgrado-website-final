import Skeleton from "@/src/components/ui/Skeleton";

export default function TipoLoading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <Skeleton className="mb-8 h-5 w-40" />
      <Skeleton className="mb-2 h-10 w-64" />
      <Skeleton className="mb-6 h-5 w-80" />
      <Skeleton className="mb-6 h-11 w-full" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-40" />
        ))}
      </div>
    </div>
  );
}
