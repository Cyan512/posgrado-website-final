export default function ProgramaLoading() {
  return (
    <div className="animate-pulse">
      <div className="mb-6 h-4 w-24 rounded bg-gray-200" />
      <div className="mb-2 h-8 w-96 rounded bg-gray-200" />
      <div className="mb-4 h-5 w-64 rounded bg-gray-200" />
      <div className="mb-8 h-6 w-28 rounded-full bg-gray-200" />
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="mb-6">
          <div className="mb-3 h-6 w-40 rounded bg-gray-200" />
          <div className="h-32 rounded-lg bg-gray-200" />
        </div>
      ))}
    </div>
  );
}
