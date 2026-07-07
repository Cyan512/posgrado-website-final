interface Props {
  tipoSlug: string;
  q: string;
  size: number;
}

export default function Buscador({ tipoSlug, q, size }: Props) {
  return (
    <form
      method="get"
      action={`/${tipoSlug}`}
      className="mb-6 flex gap-2"
    >
      <input
        type="search"
        name="q"
        defaultValue={q}
        placeholder="Buscar programa..."
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
      />
      <input type="hidden" name="size" value={size} />
      <button
        type="submit"
        className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 transition-colors"
      >
        Buscar
      </button>
    </form>
  );
}
