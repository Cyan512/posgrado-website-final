import Skeleton from "@/src/components/ui/Skeleton";

export default function ProgramaLoading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <Skeleton className="mb-8 h-5 w-48" />
      <Skeleton className="mb-3 h-10 w-96" />
      <Skeleton className="mb-2 h-5 w-64" />
      <Skeleton className="mb-8 h-6 w-28" />

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <Skeleton className="h-20" />
        <Skeleton className="h-20" />
        <Skeleton className="h-20" />
      </div>

      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="mb-8">
          <Skeleton className="mb-4 h-6 w-44" />
          <Skeleton className="h-48" />
        </div>
      ))}
    </div>
  );
}
