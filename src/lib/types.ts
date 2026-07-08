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
  modalidad: string | null;
}

export interface Periodo {
  id: number;
  nombrePeriodo: string;
}

export interface Asignatura {
  id: number;
  nombreAsignatura: string;
  creditos: number;
  categoria: "OE" | "EE";
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

export interface InversionPrograma {
  costoMatricula: number;
  numeroMatriculas: number;
  costoTotalMatriculas: number;
  costoCursos: number;
  cuotasPorSemestre: number;
  numeroCuotas: number;
  inversionTotal: number;
}

export interface ProgramaDetalleResponse {
  id: number;
  nombre: string;
  slug: string;
  modalidad: string | null;
  facultad: Facultad | null;
  objetivoGeneral: string | null;
  objetivosEspecificos: string | null;
  perfilPosgraduado: string | null;
  asignaturasPorPeriodo: AsignaturaPorPeriodo[];
  inversion: InversionPrograma;
}
