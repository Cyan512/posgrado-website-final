# Arquitectura de la API — Guía para Frontend

Documento central con información transversal que aplica a TODOS los endpoints.

## Tabla de contenidos

1. [CORS](#1-cors)
2. [Formato de respuesta exitosa](#2-formato-de-respuesta-exitosa)
3. [Formato de error](#3-formato-de-error)
4. [Códigos de error](#4-códigos-de-error)
5. [Paginación](#5-paginación)
6. [Ordenamiento (sort)](#6-ordenamiento-sort)
7. [Filtros de búsqueda](#7-filtros-de-búsqueda)
8. [Análisis de inversión](#8-análisis-de-inversión)
9. [TypeScript Types](#9-typescript-types)
10. [Convenciones](#10-convenciones)

---

## 1. CORS

### ¿Qué es?

El backend permite que tu frontend (que corre en otro origen) consuma las APIs. Sin esta configuración, el navegador bloquearía las requests por la política CORS.

### ¿Qué orígenes están permitidos?

Configurado en la variable de entorno `CORS_ALLOWED_ORIGINS` del backend.

**Por defecto (desarrollo):**

- `http://localhost:3000`
- `http://localhost:5173`

### ¿Cómo agregar tu frontend?

Pedile al equipo de backend que agregue tu URL a la variable `CORS_ALLOWED_ORIGINS` en el archivo `.env`:

```
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173,https://tu-frontend.com
```

### Headers que el backend acepta

- `Content-Type: application/json`
- `Authorization: Bearer <token>` (cuando se implemente autenticación)

### Métodos permitidos

GET, POST, PUT, DELETE, OPTIONS, PATCH

---

## 2. Formato de respuesta exitosa

Todas las respuestas exitosas vienen envueltas en `ApiResult<T>`:

```typescript
type ApiResult<T> = {
  success: true;
  message: string;
  data: T;
  timestamp: number;
};
```

**Ejemplo:**

```json
{
  "success": true,
  "message": "Programa obtenido exitosamente",
  "data": { ... },
  "timestamp": 1783460626
}
```

`timestamp` es un Unix timestamp en **segundos** (no milisegundos).

---

## 3. Formato de error

Todas las respuestas de error tienen esta estructura:

```typescript
type ErrorResponse = {
  success: false;
  message: string;
  errorCode: string;
  timestamp: number;
};
```

**Ejemplo:**

```json
{
  "success": false,
  "message": "Programa no encontrado con slug: foo",
  "errorCode": "PROGRAMA_NOT_FOUND",
  "timestamp": 1783460626
}
```

### Helper sugerido para el frontend

```typescript
async function posgradoApi<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, options);
  const json = await res.json();
  if (!json.success) {
    throw new PosgradoApiError(json.errorCode, json.message, res.status);
  }
  return json.data;
}

class PosgradoApiError extends Error {
  constructor(
    public errorCode: string,
    message: string,
    public status: number
  ) {
    super(message);
    this.name = 'PosgradoApiError';
  }
}
```

---

## 4. Códigos de error

| Código | HTTP Status | Significado |
|--------|-------------|-------------|
| `FACULTAD_NOT_FOUND` | 404 | Facultad no existe |
| `PROGRAMA_NOT_FOUND` | 404 | Programa no existe |
| `TIPO_PROGRAMA_NOT_FOUND` | 404 | Tipo de programa no existe |
| `PERIODO_NOT_FOUND` | 404 | Periodo no existe |
| `ASIGNATURA_NOT_FOUND` | 404 | Asignatura no existe |
| `PLAN_ESTUDIO_NOT_FOUND` | 404 | Plan de estudio no existe |
| `VALIDATION_ERROR` | 400 | Body o parámetros inválidos |
| `INTERNAL_ERROR` | 500 | Error del servidor |

### Helper sugerido

```typescript
function getErrorMessage(errorCode: string): string {
  const messages: Record<string, string> = {
    PROGRAMA_NOT_FOUND: 'El programa solicitado no existe',
    FACULTAD_NOT_FOUND: 'La facultad solicitada no existe',
    TIPO_PROGRAMA_NOT_FOUND: 'El tipo de programa solicitado no existe',
    PERIODO_NOT_FOUND: 'El periodo solicitado no existe',
    ASIGNATURA_NOT_FOUND: 'La asignatura solicitada no existe',
    PLAN_ESTUDIO_NOT_FOUND: 'El plan de estudio solicitado no existe',
    VALIDATION_ERROR: 'Los datos enviados son inválidos',
    INTERNAL_ERROR: 'Error del servidor. Por favor intenta de nuevo',
  };
  return messages[errorCode] ?? 'Ha ocurrido un error inesperado';
}
```

---

## 5. Paginación

Los endpoints que retornan listas paginadas usan `PagedResponse<T>`:

```typescript
type PagedResponse<T> = {
  content: T[];
  page: number;         // 0-based
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
};
```

### Query params estándar

| Param | Tipo | Default | Descripción |
|-------|------|---------|-------------|
| `page` | int | `0` | Número de página (0-based) |
| `size` | int | `10` | Cantidad de elementos por página |
| `sort` | string | varía | Formato: `campo,direccion` (ver sección 6) |

### Ejemplo de respuesta paginada

```json
{
  "success": true,
  "message": "Programas obtenidos exitosamente...",
  "data": {
    "content": [ ... ],
    "page": 0,
    "size": 10,
    "totalElements": 45,
    "totalPages": 5,
    "first": true,
    "last": false
  },
  "timestamp": 1783460626
}
```

### Ejemplo de uso en frontend

```typescript
import { useState } from 'react';

function usePage<T>(url: string) {
  const [page, setPage] = useState(0);
  const [data, setData] = useState<PagedResponse<T> | null>(null);

  const load = async () => {
    const params = new URLSearchParams({
      page: String(page),
      size: '10',
      sort: 'nombre,asc',
    });
    const result = await posgradoApi<PagedResponse<T>>(
      `http://localhost:8080/${url}?${params}`
    );
    setData(result);
  };

  return { page, setPage, data, load };
}
```

### Endpoint que usa paginación

- `GET /api/public/v1/tipos-programas/{slug}/programa`

---

## 6. Ordenamiento (sort)

Formato: `campo,direccion` donde `direccion` es `asc` o `desc`.

| Ejemplo | Significado |
|---------|-------------|
| `sort=nombre,asc` | Ascendente por nombre (A-Z) |
| `sort=nombre,desc` | Descendente por nombre (Z-A) |
| `sort=id,asc` | Ascendente por ID |

**Default:** `nombre,asc` en la mayoría de los endpoints.

---

## 7. Filtros de búsqueda

Query param opcional: `q` (texto a buscar).

### Características

- **Case-insensitive**: `EDU` matchea "Educación"
- **Accent-insensitive**: `edu` matchea "Educación"
- **Trim automático**: espacios al inicio/final se ignoran
- **Vacío/null = sin filtro**: `?q=` devuelve todos sin filtrar

### Implementación interna

Usa columna `nombre_normalized` (auto-poblada por el backfill al iniciar la app) normalizada con `TextNormalizer`.

### Endpoint que usa filtro

- `GET /api/public/v1/tipos-programas/{slug}/programa?q=edu`

### Ejemplo

```typescript
const params = new URLSearchParams({
  page: '0',
  size: '10',
  sort: 'nombre,asc',
});

const searchInput = document.getElementById('search')?.value || '';
if (searchInput.trim()) {
  params.append('q', searchInput.trim());
}

const result = await posgradoApi<PagedResponse<Programa>>(
  `http://localhost:8080/api/public/v1/tipos-programas/maestria/programa?${params}`
);
```

---

## 8. Análisis de inversión

El endpoint `GET /api/public/v1/programas/slug/{slug}` retorna un bloque `inversion` con el análisis financiero del programa.

### Estructura

```typescript
type InversionPrograma = {
  costoMatricula: number;
  numeroMatriculas: number;
  costoTotalMatriculas: number;
  costoCursos: number;
  cuotasPorSemestre: number;
  numeroCuotas: number;
  inversionTotal: number;
};
```

### Cómo se calcula

```
numeroSemestres       = cantidad de periodos cuyo nombre contiene "semestre"
costoTotalMatriculas  = numeroSemestres × programa.costoMatricula
costoCursos           = SUM(plan_estudio.costo) de periodos tipo semestre
numeroCuotas          = programa.numeroCuotas × numeroSemestres
inversionTotal        = costoTotalMatriculas + costoCursos
```

### Ejemplo

```json
{
  "inversion": {
    "costoMatricula": 1500.00,
    "numeroMatriculas": 2,
    "costoTotalMatriculas": 3000.00,
    "costoCursos": 5400.00,
    "cuotasPorSemestre": 6,
    "numeroCuotas": 12,
    "inversionTotal": 8400.00
  }
}
```

### Cómo varían los valores

- Si ningún costo está configurado → todos los valores son `0`
- Si un curso no tiene costo → se usa `0` en su lugar
- Solo se cuentan los periodos con "semestre" en el nombre (ignora "Módulo", "Electivos", etc.)

---

## 9. TypeScript Types

Copia estos tipos en tu proyecto para tener autocompletado y type safety:

```typescript
// Obtenido de docs/arquitectura.md — API Posgrado

// ============================================
// Respuestas
// ============================================

type ApiResult<T> = {
  success: true;
  message: string;
  data: T;
  timestamp: number;
};

type ErrorResponse = {
  success: false;
  message: string;
  errorCode: string;
  timestamp: number;
};

type PagedResponse<T> = {
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
};

// ============================================
// Entidades
// ============================================

type Facultad = {
  id: number;
  nombreFacultad: string;
};

type TipoPrograma = {
  id: number;
  nombreTipoPrograma: string;
  slug: string;
};

type Periodo = {
  id: number;
  nombrePeriodo: string;
};

type Asignatura = {
  id: number;
  nombreAsignatura: string;
};

type Programa = {
  id: number;
  nombre: string;
  slug: string;
  modalidad: string | null;
  facultad: Facultad;
  tipoPrograma: TipoPrograma;
  nombreNormalized: string;
  costoMatricula: number | null;
  numeroCuotas: number | null;
  objetivoGeneral: string | null;
  objetivosEspecificos: string | null;
  perfilPosgraduado: string | null;
};

type PlanEstudio = {
  id: number;
  programa: Programa;
  periodo: Periodo;
  asignatura: Asignatura;
  creditos: number;
  categoria: 'OE' | 'EE';
  costo: number | null;
};

type ProgramaDetalle = {
  id: number;
  nombre: string;
  slug: string;
  modalidad: string | null;
  facultad: Facultad;
  objetivoGeneral: string | null;
  objetivosEspecificos: string | null;
  perfilPosgraduado: string | null;
  asignaturasPorPeriodo: AsignaturaPorPeriodo[];
  inversion: InversionPrograma;
};

type AsignaturaPorPeriodo = {
  periodo: Periodo;
  asignaturas: AsignaturaResponse[];
};

type AsignaturaResponse = {
  id: number;
  nombreAsignatura: string;
  creditos: number;
  categoria: 'OE' | 'EE';
};

type InversionPrograma = {
  costoMatricula: number;
  numeroMatriculas: number;
  costoTotalMatriculas: number;
  costoCursos: number;
  cuotasPorSemestre: number;
  numeroCuotas: number;
  inversionTotal: number;
};

// ============================================
// Códigos de error
// ============================================

type ErrorCode =
  | 'PROGRAMA_NOT_FOUND'
  | 'FACULTAD_NOT_FOUND'
  | 'TIPO_PROGRAMA_NOT_FOUND'
  | 'PERIODO_NOT_FOUND'
  | 'ASIGNATURA_NOT_FOUND'
  | 'PLAN_ESTUDIO_NOT_FOUND'
  | 'VALIDATION_ERROR'
  | 'INTERNAL_ERROR';

// ============================================
// Cliente API
// ============================================

class PosgradoApiError extends Error {
  constructor(
    public errorCode: ErrorCode,
    message: string,
    public status: number
  ) {
    super(message);
    this.name = 'PosgradoApiError';
  }
}

async function posgradoApi<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, options);
  const json = await res.json();
  if (!json.success) {
    throw new PosgradoApiError(json.errorCode, json.message, res.status);
  }
  return json.data;
}
```

### Uso

```typescript
try {
  const detalle = await posgradoApi<ProgramaDetalle>(
    'http://localhost:8080/api/public/v1/programas/slug/doctorado-en-educacion'
  );
  console.log(detalle.inversion.inversionTotal);
} catch (err) {
  if (err instanceof PosgradoApiError) {
    console.error(err.errorCode, err.message);
  }
}
```

---

## 10. Convenciones

| Concepto | Formato | Ejemplo |
|----------|--------|---------|
| **Slugs** | kebab-case sin acentos | `maestria-en-educacion` |
| **IDs** | `number` (Integer en backend) | `1`, `42` |
| **Montos** | `number` (BigDecimal en JSON) | `1500.00` |
| **Fechas** | `number` (Unix timestamp en segundos) | `1783460626` |
| **Categorías** | `OE` o `EE` | `OE` (Obligatoria), `EE` (Electiva) |
| **Modalidad** | Enum string | `PRESENCIAL`, `SEMIPRESENCIAL`, `VIRTUAL`, `NO CONVOCABLE` |
| **Page numbers** | 0-based | Primera página = `0` |

## URLs base

| Entorno | URL |
|---------|-----|
| **Desarrollo local** | `http://localhost:8080` |
| **Público** | `{base}/api/public/v1/...` |
| **Privado (admin)** | `{base}/api/private/v1/...` |
| **Swagger UI** | `http://localhost:8080/swagger-ui.html` |

---

## Ver también

| Documento | Contenido |
|-----------|-----------|
| [public/README.md](public/README.md) | Endpoints públicos (sin autenticación) |
| [private/README.md](private/README.md) | Endpoints privados (admin, sin auth por ahora) |
| [public/programas.md](public/programas.md) | Detalle de programa por slug |
| [public/tipos-programas.md](public/tipos-programas.md) | Tipos de programa y filtro con paginación |
