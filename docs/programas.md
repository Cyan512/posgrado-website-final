# Programas — API Pública

## Información general

- **Base URL:** `/api/public/v1/programas`
- **Autenticación:** No requerida

---

## Endpoints

### GET /slug/{slug}

Obtiene un programa con todas sus asignaturas agrupadas por periodo académico, buscando por slug.

- **Método:** `GET`
- **Path:** `/api/public/v1/programas/slug/{slug}`
- **Path params:**

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `slug` | `String` | Sí | Slug del programa (ej: `maestria-en-ciencias-de-la-computacion`) |

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 200 | Programa encontrado | `ApiResult<ProgramaDetalleResponse>` |
| 404 | Programa no encontrado | `ErrorResponse` |

- **Ejemplo cURL:**
```bash
curl -X GET http://localhost:8080/api/public/v1/programas/slug/maestria-en-ciencias-de-la-computacion \
  -H "Accept: application/json"
```

- **Ejemplo JavaScript Fetch:**
```js
const slug = 'maestria-en-ciencias-de-la-computacion';
const response = await fetch(`http://localhost:8080/api/public/v1/programas/slug/${slug}`);
const json = await response.json();
if (json.success) {
  console.log(json.data); // ProgramaDetalleResponse
} else {
  console.error(json.errorCode, json.message);
}
```

- **Ejemplo de respuesta (200):**
```json
{
  "success": true,
  "message": "Programa obtenido exitosamente",
  "data": {
    "id": 1,
    "nombre": "Maestría en Ciencias de la Computación",
    "slug": "maestria-en-ciencias-de-la-computacion",
    "modalidad": "PRESENCIAL",
    "facultad": {
      "id": 1,
      "nombreFacultad": "Facultad de Ingeniería"
    },
    "asignaturasPorPeriodo": [
      {
        "periodo": {
          "id": 1,
          "nombrePeriodo": "Primer Semestre"
        },
        "asignaturas": [
          {
            "id": 1,
            "nombreAsignatura": "Algoritmos Avanzados",
            "creditos": 4,
            "categoria": "OE"
          }
        ]
      }
    ]
  },
  "timestamp": 1712345678
}
```
- **Ejemplo de respuesta (404):**
```json
{
  "success": false,
  "message": "Programa no encontrado con slug: slug-inexistente",
  "errorCode": "PROGRAMA_NOT_FOUND",
  "timestamp": 1712345678
}
```

---

## Modelos de datos

### ProgramaDetalleResponse

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `Integer` | ID del programa |
| `nombre` | `String` | Nombre del programa |
| `slug` | `String` | Slug del programa (kebab-case) |
| `modalidad` | `String` | Modalidad: `PRESENCIAL`, `SEMIPRESENCIAL`, `VIRTUAL` o `NO CONVOCABLE` |
| `facultad` | `Facultad` | Facultad a la que pertenece |
| `asignaturasPorPeriodo` | `List<AsignaturaPorPeriodoResponse>` | Asignaturas agrupadas por periodo |

### Facultad

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `Integer` | ID de la facultad |
| `nombreFacultad` | `String` | Nombre de la facultad |

### AsignaturaPorPeriodoResponse

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `periodo` | `Periodo` | Periodo académico |
| `asignaturas` | `List<AsignaturaResponse>` | Asignaturas de ese periodo |

### Periodo

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `Integer` | ID del periodo |
| `nombrePeriodo` | `String` | Nombre del periodo (ej: "Primer Semestre") |

### AsignaturaResponse

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `Integer` | ID de la asignatura |
| `nombreAsignatura` | `String` | Nombre de la asignatura |
| `creditos` | `Short` | Cantidad de créditos |
| `categoria` | `String` | Categoría: `OE` (Obligatoria Específica) o `EE` (Electiva Específica) |

---

## Errores comunes

| Código | Causa | Solución |
|--------|-------|----------|
| `PROGRAMA_NOT_FOUND` | El slug no corresponde a ningún programa | Verificar que el slug sea correcto |
| `INTERNAL_ERROR` | Error inesperado del servidor | Contactar al equipo de backend |
