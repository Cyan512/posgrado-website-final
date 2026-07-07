export default function TipoLoading() {
  return (
    <div className="animate-pulse">
      <div className="mb-6 h-4 w-24 rounded bg-gray-200" />
      <div className="mb-8 h-8 w-48 rounded bg-gray-200" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-36 rounded-lg bg-gray-200" />
        ))}
      </div>
      <div className="mt-8 flex items-center justify-between">
        <div className="h-5 w-64 rounded bg-gray-200" />
        <div className="flex gap-2">
          <div className="h-9 w-28 rounded-lg bg-gray-200" />
          <div className="h-9 w-28 rounded-lg bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
