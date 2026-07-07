import { notFound } from "next/navigation";
import type {
  ApiResult,
  ErrorResponse,
  TipoPrograma,
  Programa,
  PagedResponse,
  ProgramaDetalleResponse,
} from "./types";

const BASE_URL = process.env.API_BASE_URL ?? "http://localhost:8080/api/public/v1";

async function fetchApi<T>(path: string): Promise<ApiResult<T> | ErrorResponse> {
  const res = await fetch(`${BASE_URL}${path}`, { cache: "no-store" });
  const json = (await res.json()) as ApiResult<T> | ErrorResponse;
  return json;
}

export async function getTiposProgramas(): Promise<TipoPrograma[]> {
  const result = await fetchApi<TipoPrograma[]>("/tipos-programas");
  if (!result.success) throw new Error(result.message);
  return result.data;
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
  const result = await fetchApi<PagedResponse<Programa>>(
    `/tipos-programas/${tipoSlug}/programa?${params}`
  );
  if (!result.success) {
    if (result.errorCode === "TIPO_PROGRAMA_NOT_FOUND") notFound();
    throw new Error(result.message);
  }
  return result.data;
}

export async function getProgramaBySlug(
  slug: string
): Promise<ProgramaDetalleResponse> {
  const result = await fetchApi<ProgramaDetalleResponse>(
    `/programas/slug/${slug}`
  );
  if (!result.success) {
    if (result.errorCode === "PROGRAMA_NOT_FOUND") notFound();
    throw new Error(result.message);
  }
  return result.data;
}
