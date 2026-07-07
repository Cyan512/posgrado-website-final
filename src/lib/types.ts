export interface ApiResult<T> {
  success: true;
  message: string;
  data: T;
  timestamp: number;
}

export interface ErrorResponse {
  success: false;
  message: string;
  errorCode: string;
  timestamp: number;
}

export interface TipoPrograma {
  id: number;
  nombreTipoPrograma: string;
  slug: string;
}

export interface Facultad {
  id: number;
  nombreFacultad: string;
}

export interface Programa {
  id: number;
  nombre: string;
  slug: string;
  facultad: Facultad | null;
  tipoPrograma: TipoPrograma;
  modalidad: string;
}

export interface Periodo {
  id: number;
  nombrePeriodo: string;
}

export interface Asignatura {
  id: number;
  nombreAsignatura: string;
  creditos: number;
  categoria: string;
}

export interface AsignaturaPorPeriodo {
  periodo: Periodo;
  asignaturas: Asignatura[];
}

export interface PagedResponse<T> {
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
}

export interface ProgramaDetalleResponse {
  id: number;
  nombre: string;
  slug: string;
  modalidad: string;
  facultad: Facultad | null;
  asignaturasPorPeriodo: AsignaturaPorPeriodo[];
}
