export type ErrorCode =
  | "PROGRAMA_NOT_FOUND"
  | "FACULTAD_NOT_FOUND"
  | "TIPO_PROGRAMA_NOT_FOUND"
  | "PERIODO_NOT_FOUND"
  | "ASIGNATURA_NOT_FOUND"
  | "PLAN_ESTUDIO_NOT_FOUND"
  | "VALIDATION_ERROR"
  | "INTERNAL_ERROR";

export class PosgradoApiError extends Error {
  constructor(
    public errorCode: ErrorCode,
    message: string,
    public status: number
  ) {
    super(message);
    this.name = "PosgradoApiError";
  }
}

export function getErrorMessage(errorCode: string): string {
  const messages: Record<string, string> = {
    PROGRAMA_NOT_FOUND: "El programa solicitado no existe",
    FACULTAD_NOT_FOUND: "La facultad solicitada no existe",
    TIPO_PROGRAMA_NOT_FOUND: "El tipo de programa solicitado no existe",
    PERIODO_NOT_FOUND: "El periodo solicitado no existe",
    ASIGNATURA_NOT_FOUND: "La asignatura solicitada no existe",
    PLAN_ESTUDIO_NOT_FOUND: "El plan de estudio solicitado no existe",
    VALIDATION_ERROR: "Los datos enviados son inválidos",
    INTERNAL_ERROR: "Error del servidor. Por favor intenta de nuevo",
  };
  return messages[errorCode] ?? "Ha ocurrido un error inesperado";
}
