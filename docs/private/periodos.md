# Periodos — API Privada

## Información general

- **Base URL:** `/api/private/v1/periodos`
- **Autenticación:** Pendiente (ver [README](README.md))

---

## Endpoints

### GET /

Lista todos los periodos académicos registrados.

- **Método:** `GET`
- **Path:** `/api/private/v1/periodos`

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 200 | Lista de periodos | `ApiResult<List<Periodo>>` |

- **Ejemplo cURL:**
```bash
curl -X GET http://localhost:8080/api/private/v1/periodos
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/periodos');
const json = await response.json();
console.log(json.data);
```

---

### GET /{id}

Obtiene un periodo por su ID.

- **Método:** `GET`
- **Path:** `/api/private/v1/periodos/{id}`
- **Path params:**

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `id` | `Integer` | Sí | ID del periodo |

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 200 | Periodo encontrado | `ApiResult<Periodo>` |
| 404 | Periodo no encontrado | `ErrorResponse` |

- **Ejemplo cURL:**
```bash
curl -X GET http://localhost:8080/api/private/v1/periodos/1
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/periodos/1');
const json = await response.json();
if (json.success) console.log(json.data);
```

---

### POST /

Crea un nuevo periodo académico.

- **Método:** `POST`
- **Path:** `/api/private/v1/periodos`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
```json
{
  "nombrePeriodo": "Cuarto Semestre"
}
```

| Campo | Tipo | Requerido | Validación |
|-------|------|-----------|------------|
| `nombrePeriodo` | `String` | Sí | `@NotBlank` |

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 201 | Periodo creado | `ApiResult<Periodo>` |
| 400 | Datos inválidos | `ErrorResponse` |

- **Ejemplo cURL:**
```bash
curl -X POST http://localhost:8080/api/private/v1/periodos \
  -H "Content-Type: application/json" \
  -d '{"nombrePeriodo": "Cuarto Semestre"}'
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/periodos', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nombrePeriodo: 'Cuarto Semestre' })
});
const json = await response.json();
if (json.success) console.log('Creado:', json.data);
```

---

### PUT /{id}

Actualiza el nombre de un periodo existente.

- **Método:** `PUT`
- **Path:** `/api/private/v1/periodos/{id}`
- **Headers:**
  - `Content-Type: application/json`
- **Path params:**

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `id` | `Integer` | Sí | ID del periodo a actualizar |

- **Body:**
```json
{
  "nombrePeriodo": "Cuarto Semestre - Actualizado"
}
```

| Campo | Tipo | Requerido | Validación |
|-------|------|-----------|------------|
| `nombrePeriodo` | `String` | Sí | `@NotBlank` |

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 200 | Periodo actualizado | `ApiResult<Periodo>` |
| 400 | Datos inválidos | `ErrorResponse` |
| 404 | Periodo no encontrado | `ErrorResponse` |

- **Ejemplo cURL:**
```bash
curl -X PUT http://localhost:8080/api/private/v1/periodos/1 \
  -H "Content-Type: application/json" \
  -d '{"nombrePeriodo": "Cuarto Semestre - Actualizado"}'
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/periodos/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nombrePeriodo: 'Cuarto Semestre - Actualizado' })
});
const json = await response.json();
if (json.success) console.log('Actualizado:', json.data);
```

---

### DELETE /{id}

Elimina un periodo por su ID.

- **Método:** `DELETE`
- **Path:** `/api/private/v1/periodos/{id}`
- **Path params:**

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `id` | `Integer` | Sí | ID del periodo a eliminar |

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 204 | Periodo eliminado | Vacío |
| 404 | Periodo no encontrado | `ErrorResponse` |

- **Ejemplo cURL:**
```bash
curl -X DELETE http://localhost:8080/api/private/v1/periodos/1
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/periodos/1', {
  method: 'DELETE'
});
if (response.status === 204) console.log('Periodo eliminado');
```

---

## Modelos de datos

### Periodo

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `Integer` | ID del periodo (auto-generado) |
| `nombrePeriodo` | `String` | Nombre del periodo (único) |

### CreatePeriodoRequestBody

| Campo | Tipo | Requerido | Validación |
|-------|------|-----------|------------|
| `nombrePeriodo` | `String` | Sí | `@NotBlank` |

---

## Errores comunes

| Código | Causa | Solución |
|--------|-------|----------|
| `PERIODO_NOT_FOUND` | ID no existe | Verificar con `GET /` |
| `VALIDATION_ERROR` | `nombrePeriodo` vacío | Enviar string no vacío |
| `INTERNAL_ERROR` | Error inesperado | Contactar backend |
