import { notFound } from "next/navigation";
import { PosgradoApiError } from "./errors";
import type {
  ApiResult,
  ErrorResponse,
  TipoPrograma,
  Programa,
  PagedResponse,
  ProgramaDetalleResponse,
} from "./types";

const BASE_URL = process.env.API_BASE_URL ?? "http://localhost:8080/api/public/v1";

async function fetchApi<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, { cache: "no-store" });
  const json = (await res.json()) as ApiResult<T> | ErrorResponse;

  if (!json.success) {
    throw new PosgradoApiError(
      json.errorCode as PosgradoApiError["errorCode"],
      json.message,
      res.status
    );
  }

  return json.data;
}

export async function getTiposProgramas(): Promise<TipoPrograma[]> {
  try {
    return await fetchApi<TipoPrograma[]>("/tipos-programas");
  } catch (err) {
    throw err;
  }
}

interface PaginationOptions {
  page?: number;
  size?: number;
  sort?: string;
  q?: string;
}

export async function getProgramasByTipo(
  tipoSlug: string,
  options: PaginationOptions = {}
): Promise<PagedResponse<Programa>> {
  const { page = 0, size = 10, sort = "nombre,asc", q } = options;
  const params = new URLSearchParams({
    page: String(page),
    size: String(size),
    sort,
  });
  if (q) params.set("q", q);

  try {
    return await fetchApi<PagedResponse<Programa>>(
      `/tipos-programas/${tipoSlug}/programa?${params}`
    );
  } catch (err) {
    if (err instanceof PosgradoApiError) {
      if (err.errorCode === "TIPO_PROGRAMA_NOT_FOUND") notFound();
    }
    throw err;
  }
}

export async function getProgramaBySlug(
  slug: string
): Promise<ProgramaDetalleResponse> {
  try {
    return await fetchApi<ProgramaDetalleResponse>(
      `/programas/slug/${slug}`
    );
  } catch (err) {
    if (err instanceof PosgradoApiError) {
      if (err.errorCode === "PROGRAMA_NOT_FOUND") notFound();
    }
    throw err;
  }
}
