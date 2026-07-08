import Skeleton from "@/components/ui/Skeleton";

export default function RootLoading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <Skeleton className="mb-4 h-6 w-24" />
      <Skeleton className="mb-2 h-12 w-96" />
      <Skeleton className="mb-8 h-5 w-80" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-40" />
        ))}
      </div>
    </div>
  );
}
