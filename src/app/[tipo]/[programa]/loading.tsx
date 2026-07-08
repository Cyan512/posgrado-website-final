import Skeleton from "@/components/ui/Skeleton";

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

      <div className="mb-6 flex gap-0 border-b border-slate-200 pb-0">
        <Skeleton className="h-10 w-28 rounded-none" />
        <Skeleton className="ml-0 h-10 w-36 rounded-none" />
        <Skeleton className="ml-0 h-10 w-24 rounded-none" />
      </div>

      <div className="mt-6 space-y-4">
        <Skeleton className="h-32" />
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
      </div>
    </div>
  );
}
