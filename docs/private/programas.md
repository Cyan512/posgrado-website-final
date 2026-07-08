# Programas — API Privada

## Información general

- **Base URL:** `/api/private/v1/programas`
- **Autenticación:** Pendiente (ver [README](README.md))

---

## Endpoints

### GET /

Lista todos los programas registrados.

- **Método:** `GET`
- **Path:** `/api/private/v1/programas`

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 200 | Lista de programas | `ApiResult<List<Programa>>` |

- **Ejemplo cURL:**
```bash
curl -X GET http://localhost:8080/api/private/v1/programas
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/programas');
const json = await response.json();
console.log(json.data);
```

---

### GET /{id}

Obtiene un programa por su ID.

- **Método:** `GET`
- **Path:** `/api/private/v1/programas/{id}`
- **Path params:**

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `id` | `Integer` | Sí | ID del programa |

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 200 | Programa encontrado | `ApiResult<Programa>` |
| 404 | Programa no encontrado | `ErrorResponse` |

- **Ejemplo cURL:**
```bash
curl -X GET http://localhost:8080/api/private/v1/programas/1
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/programas/1');
const json = await response.json();
if (json.success) console.log(json.data);
```

---

### POST /

Crea un nuevo programa.

- **Método:** `POST`
- **Path:** `/api/private/v1/programas`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
```json
{
  "nombre": "Maestría en Inteligencia Artificial",
  "facultadId": 1,
  "modalidad": "PRESENCIAL",
  "tipoProgramaId": 1,
  "costoMatricula": 1500.00,
  "numeroCuotas": 6
}
```

| Campo | Tipo | Requerido | Validación | Descripción |
|-------|------|-----------|------------|-------------|
| `nombre` | `String` | Sí | `@NotBlank` | Nombre del programa |
| `facultadId` | `Integer` | No | — | ID de la facultad |
| `modalidad` | `String` | No | — | `PRESENCIAL`, `SEMIPRESENCIAL`, `VIRTUAL` o `NO CONVOCABLE` |
| `tipoProgramaId` | `Integer` | No | — | ID del tipo de programa |
| `costoMatricula` | `BigDecimal` | No | — | Costo de matrícula por semestre |
| `numeroCuotas` | `Integer` | No | — | Cuotas por semestre |

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 201 | Programa creado | `ApiResult<Programa>` |
| 400 | Datos inválidos | `ErrorResponse` |
| 404 | Facultad o tipo de programa no encontrado | `ErrorResponse` |

- **Ejemplo cURL:**
```bash
curl -X POST http://localhost:8080/api/private/v1/programas \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Maestría en Inteligencia Artificial", "facultadId": 1, "modalidad": "PRESENCIAL", "tipoProgramaId": 1}'
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/programas', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nombre: 'Maestría en Inteligencia Artificial',
    facultadId: 1,
    modalidad: 'PRESENCIAL',
    tipoProgramaId: 1
  })
});
const json = await response.json();
if (json.success) console.log('Creado:', json.data);
```

---

### PUT /{id}

Actualiza un programa existente.

- **Método:** `PUT`
- **Path:** `/api/private/v1/programas/{id}`
- **Headers:**
  - `Content-Type: application/json`
- **Path params:**

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `id` | `Integer` | Sí | ID del programa a actualizar |

- **Body:**
```json
{
  "nombre": "Maestría en Inteligencia Artificial",
  "facultadId": 1,
  "modalidad": "VIRTUAL",
  "tipoProgramaId": 1,
  "costoMatricula": 2000.00,
  "numeroCuotas": 8
}
```

| Campo | Tipo | Requerido | Validación | Descripción |
|-------|------|-----------|------------|-------------|
| `nombre` | `String` | Sí | `@NotBlank` | Nuevo nombre del programa |
| `facultadId` | `Integer` | No | — | ID de la facultad |
| `modalidad` | `String` | No | — | Modalidad actualizada |
| `tipoProgramaId` | `Integer` | No | — | ID del tipo de programa |
| `costoMatricula` | `BigDecimal` | No | — | Costo de matrícula por semestre |
| `numeroCuotas` | `Integer` | No | — | Cuotas por semestre |

> **Nota:** El `tipoProgramaId` no se actualiza en la versión actual; solo se usa `nombre`, `facultadId` y `modalidad`.

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 200 | Programa actualizado | `ApiResult<Programa>` |
| 400 | Datos inválidos | `ErrorResponse` |
| 404 | Programa o facultad no encontrado | `ErrorResponse` |

- **Ejemplo cURL:**
```bash
curl -X PUT http://localhost:8080/api/private/v1/programas/1 \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Maestría en IA y Data Science", "facultadId": 1, "modalidad": "VIRTUAL", "tipoProgramaId": 1}'
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/programas/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nombre: 'Maestría en IA y Data Science',
    facultadId: 1,
    modalidad: 'VIRTUAL',
    tipoProgramaId: 1
  })
});
const json = await response.json();
if (json.success) console.log('Actualizado:', json.data);
```

---

### DELETE /{id}

Elimina un programa por su ID.

- **Método:** `DELETE`
- **Path:** `/api/private/v1/programas/{id}`
- **Path params:**

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `id` | `Integer` | Sí | ID del programa a eliminar |

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 204 | Programa eliminado | Vacío |
| 404 | Programa no encontrado | `ErrorResponse` |

- **Ejemplo cURL:**
```bash
curl -X DELETE http://localhost:8080/api/private/v1/programas/1
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/programas/1', {
  method: 'DELETE'
});
if (response.status === 204) console.log('Programa eliminado');
```

---

## Modelos de datos

### Programa

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `Integer` | ID del programa (auto-generado) |
| `nombre` | `String` | Nombre del programa (único) |
| `slug` | `String` | Slug en kebab-case (auto-generado) |
| `facultad` | `Facultad` | Facultad asociada |
| `tipoPrograma` | `TipoPrograma` | Tipo de programa asociado |
| `modalidad` | `String` | `PRESENCIAL`, `SEMIPRESENCIAL`, `VIRTUAL`, `NO CONVOCABLE` |
| `costoMatricula` | `BigDecimal` | Costo de matrícula por semestre |
| `numeroCuotas` | `Integer` | Número de cuotas por semestre |

### Facultad

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `Integer` | ID de la facultad |
| `nombreFacultad` | `String` | Nombre de la facultad |

### TipoPrograma

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `Integer` | ID del tipo de programa |
| `nombreTipoPrograma` | `String` | Nombre (ej: "Maestría", "Doctorado") |
| `slug` | `String` | Slug en kebab-case |

### CreateProgramaRequestBody

| Campo | Tipo | Requerido | Validación |
|-------|------|-----------|------------|
| `nombre` | `String` | Sí | `@NotBlank` |
| `facultadId` | `Integer` | No | — |
| `modalidad` | `String` | No | — |
| `tipoProgramaId` | `Integer` | No | — |
| `costoMatricula` | `BigDecimal` | No | — | Costo de matrícula por semestre |
| `numeroCuotas` | `Integer` | No | — | Cuotas por semestre |
---

## Errores comunes

| Código | Causa | Solución |
|--------|-------|----------|
| `PROGRAMA_NOT_FOUND` | ID no existe | Verificar con `GET /` |
| `FACULTAD_NOT_FOUND` | `facultadId` inválido | Verificar IDs con `GET /facultades` |
| `TIPO_PROGRAMA_NOT_FOUND` | `tipoProgramaId` inválido | Verificar IDs con `GET /tipos-programas` |
| `VALIDATION_ERROR` | `nombre` vacío o faltante | Enviar string no vacío |
| `INTERNAL_ERROR` | Error inesperado | Contactar backend |
