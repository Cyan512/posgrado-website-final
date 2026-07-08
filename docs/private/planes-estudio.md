# Planes de Estudio — API Privada

## Información general

- **Base URL:** `/api/private/v1/planes-estudio`
- **Autenticación:** Pendiente (ver [README](README.md))

---

## Endpoints

### GET /

Lista todos los planes de estudio registrados.

- **Método:** `GET`
- **Path:** `/api/private/v1/planes-estudio`

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 200 | Lista de planes | `ApiResult<List<PlanEstudio>>` |

- **Ejemplo cURL:**
```bash
curl -X GET http://localhost:8080/api/private/v1/planes-estudio
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/planes-estudio');
const json = await response.json();
console.log(json.data);
```

---

### GET /{id}

Obtiene un plan de estudio por su ID.

- **Método:** `GET`
- **Path:** `/api/private/v1/planes-estudio/{id}`
- **Path params:**

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `id` | `Integer` | Sí | ID del plan de estudio |

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 200 | Plan encontrado | `ApiResult<PlanEstudio>` |
| 404 | Plan no encontrado | `ErrorResponse` |

- **Ejemplo cURL:**
```bash
curl -X GET http://localhost:8080/api/private/v1/planes-estudio/1
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/planes-estudio/1');
const json = await response.json();
if (json.success) console.log(json.data);
```

---

### GET /{id}/planes

Obtiene todos los planes de estudio de un programa específico.

- **Método:** `GET`
- **Path:** `/api/private/v1/planes-estudio/{id}/planes`
- **Path params:**

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `id` | `Integer` | Sí | ID del programa |

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 200 | Lista de planes | `List<PlanEstudio>` |

- **Ejemplo cURL:**
```bash
curl http://localhost:8080/api/private/v1/planes-estudio/1/planes
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/planes-estudio/1/planes');
const planes = await response.json();
planes.forEach(p => console.log(p.asignatura.nombreAsignatura, p.costo));
```

---

### POST /

Crea un nuevo plan de estudio (asignatura dentro de un programa y periodo).

- **Método:** `POST`
- **Path:** `/api/private/v1/planes-estudio`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
```json
{
  "programaId": 1,
  "periodoId": 1,
  "asignaturaId": 1,
  "creditos": 4,
  "categoria": "OE",
  "costo": 900.00
}
```

| Campo | Tipo | Requerido | Validación | Descripción |
|-------|------|-----------|------------|-------------|
| `programaId` | `Integer` | Sí | `@NotNull` | ID del programa |
| `periodoId` | `Integer` | Sí | `@NotNull` | ID del periodo |
| `asignaturaId` | `Integer` | Sí | `@NotNull` | ID de la asignatura |
| `creditos` | `Short` | Sí | `@NotNull` | Cantidad de créditos (valor positivo) |
| `categoria` | `String` | Sí | `@NotBlank`, `@Pattern(regexp = "OE\|EE")` | `OE` o `EE` |
| `costo` | `BigDecimal` | No | — | Costo del curso en este programa |

> **Categoría:** `OE` = Obligatoria Específica, `EE` = Electiva Específica.

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 201 | Plan creado | `ApiResult<PlanEstudio>` |
| 400 | Datos inválidos | `ErrorResponse` |
| 404 | Programa, periodo o asignatura no encontrado | `ErrorResponse` |

- **Ejemplo cURL:**
```bash
curl -X POST http://localhost:8080/api/private/v1/planes-estudio \
  -H "Content-Type: application/json" \
  -d '{"programaId": 1, "periodoId": 1, "asignaturaId": 1, "creditos": 4, "categoria": "OE", "costo": 900.00}'
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/planes-estudio', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    programaId: 1,
    periodoId: 1,
    asignaturaId: 1,
    creditos: 4,
    categoria: 'OE',
    costo: 900.00
  })
});
const json = await response.json();
if (json.success) console.log('Creado:', json.data);
```

---

### PUT /{id}

Actualiza un plan de estudio existente.

- **Método:** `PUT`
- **Path:** `/api/private/v1/planes-estudio/{id}`
- **Headers:**
  - `Content-Type: application/json`
- **Path params:**

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `id` | `Integer` | Sí | ID del plan a actualizar |

- **Body:**
```json
{
  "programaId": 1,
  "periodoId": 2,
  "asignaturaId": 1,
  "creditos": 6,
  "categoria": "EE",
  "costo": 800.00
}
```

| Campo | Tipo | Requerido | Validación |
|-------|------|-----------|------------|
| `programaId` | `Integer` | Sí | `@NotNull` |
| `periodoId` | `Integer` | Sí | `@NotNull` |
| `asignaturaId` | `Integer` | Sí | `@NotNull` |
| `creditos` | `Short` | Sí | `@NotNull` |
| `categoria` | `String` | Sí | `@NotBlank`, `OE` o `EE` |
| `costo` | `BigDecimal` | No | — |

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 200 | Plan actualizado | `ApiResult<PlanEstudio>` |
| 400 | Datos inválidos | `ErrorResponse` |
| 404 | Plan, programa, periodo o asignatura no encontrado | `ErrorResponse` |

- **Ejemplo cURL:**
```bash
curl -X PUT http://localhost:8080/api/private/v1/planes-estudio/1 \
  -H "Content-Type: application/json" \
  -d '{"programaId": 1, "periodoId": 2, "asignaturaId": 1, "creditos": 6, "categoria": "EE", "costo": 800.00}'
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/planes-estudio/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    programaId: 1,
    periodoId: 2,
    asignaturaId: 1,
    creditos: 6,
    categoria: 'EE',
    costo: 800.00
  })
});
const json = await response.json();
if (json.success) console.log('Actualizado:', json.data);
```

---

### DELETE /{id}

Elimina un plan de estudio por su ID.

- **Método:** `DELETE`
- **Path:** `/api/private/v1/planes-estudio/{id}`
- **Path params:**

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `id` | `Integer` | Sí | ID del plan a eliminar |

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 204 | Plan eliminado | Vacío |
| 404 | Plan no encontrado | `ErrorResponse` |

- **Ejemplo cURL:**
```bash
curl -X DELETE http://localhost:8080/api/private/v1/planes-estudio/1
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/planes-estudio/1', {
  method: 'DELETE'
});
if (response.status === 204) console.log('Plan eliminado');
```

---

## Modelos de datos

### PlanEstudio

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `Integer` | ID del plan (auto-generado) |
| `programa` | `Programa` | Programa asociado |
| `periodo` | `Periodo` | Periodo académico |
| `asignatura` | `Asignatura` | Asignatura |
| `creditos` | `Short` | Cantidad de créditos |
| `categoria` | `String` | `OE` o `EE` |
| `costo` | `BigDecimal` | Costo del curso en este programa |

### Programa

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `Integer` | ID del programa |
| `nombre` | `String` | Nombre del programa |
| `slug` | `String` | Slug del programa |
| `facultad` | `Facultad` | Facultad asociada |
| `tipoPrograma` | `TipoPrograma` | Tipo de programa |
| `modalidad` | `String` | Modalidad |

### Periodo

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `Integer` | ID del periodo |
| `nombrePeriodo` | `String` | Nombre del periodo |

### Asignatura

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `Integer` | ID de la asignatura |
| `nombreAsignatura` | `String` | Nombre de la asignatura |

### CreatePlanEstudioRequestBody

| Campo | Tipo | Requerido | Validación |
|-------|------|-----------|------------|
| `programaId` | `Integer` | Sí | `@NotNull` |
| `periodoId` | `Integer` | Sí | `@NotNull` |
| `asignaturaId` | `Integer` | Sí | `@NotNull` |
| `creditos` | `Short` | Sí | `@NotNull` |
| `categoria` | `String` | Sí | `@NotBlank`, debe ser `OE` o `EE` |
| `costo` | `BigDecimal` | No | — | Costo del curso en este programa |

---

## Errores comunes

| Código | Causa | Solución |
|--------|-------|----------|
| `PLAN_ESTUDIO_NOT_FOUND` | ID no existe | Verificar con `GET /` |
| `PROGRAMA_NOT_FOUND` | `programaId` inválido | Verificar con `GET /programas` |
| `PERIODO_NOT_FOUND` | `periodoId` inválido | Verificar con `GET /periodos` |
| `ASIGNATURA_NOT_FOUND` | `asignaturaId` inválido | Verificar con `GET /asignaturas` |
| `VALIDATION_ERROR` | `categoria` no es `OE` o `EE`, o campos requeridos faltan | Enviar valores válidos |
| `INTERNAL_ERROR` | Error inesperado | Contactar backend |
