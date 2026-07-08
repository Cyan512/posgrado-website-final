# Asignaturas — API Privada

## Información general

- **Base URL:** `/api/private/v1/asignaturas`
- **Autenticación:** Pendiente (ver [README](README.md))

---

## Endpoints

### GET /

Lista todas las asignaturas registradas.

- **Método:** `GET`
- **Path:** `/api/private/v1/asignaturas`

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 200 | Lista de asignaturas | `ApiResult<List<Asignatura>>` |

- **Ejemplo cURL:**
```bash
curl -X GET http://localhost:8080/api/private/v1/asignaturas
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/asignaturas');
const json = await response.json();
console.log(json.data);
```

---

### GET /{id}

Obtiene una asignatura por su ID.

- **Método:** `GET`
- **Path:** `/api/private/v1/asignaturas/{id}`
- **Path params:**

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `id` | `Integer` | Sí | ID de la asignatura |

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 200 | Asignatura encontrada | `ApiResult<Asignatura>` |
| 404 | Asignatura no encontrada | `ErrorResponse` |

- **Ejemplo cURL:**
```bash
curl -X GET http://localhost:8080/api/private/v1/asignaturas/1
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/asignaturas/1');
const json = await response.json();
if (json.success) console.log(json.data);
```

---

### POST /

Crea una nueva asignatura.

- **Método:** `POST`
- **Path:** `/api/private/v1/asignaturas`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
```json
{
  "nombreAsignatura": "Algoritmos Avanzados"
}
```

| Campo | Tipo | Requerido | Validación |
|-------|------|-----------|------------|
| `nombreAsignatura` | `String` | Sí | `@NotBlank` |

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 201 | Asignatura creada | `ApiResult<Asignatura>` |
| 400 | Datos inválidos | `ErrorResponse` |

- **Ejemplo cURL:**
```bash
curl -X POST http://localhost:8080/api/private/v1/asignaturas \
  -H "Content-Type: application/json" \
  -d '{"nombreAsignatura": "Algoritmos Avanzados"}'
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/asignaturas', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nombreAsignatura: 'Algoritmos Avanzados' })
});
const json = await response.json();
if (json.success) console.log('Creada:', json.data);
```

---

### PUT /{id}

Actualiza el nombre de una asignatura existente.

- **Método:** `PUT`
- **Path:** `/api/private/v1/asignaturas/{id}`
- **Headers:**
  - `Content-Type: application/json`
- **Path params:**

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `id` | `Integer` | Sí | ID de la asignatura a actualizar |

- **Body:**
```json
{
  "nombreAsignatura": "Algoritmos Avanzados II"
}
```

| Campo | Tipo | Requerido | Validación |
|-------|------|-----------|------------|
| `nombreAsignatura` | `String` | Sí | `@NotBlank` |

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 200 | Asignatura actualizada | `ApiResult<Asignatura>` |
| 400 | Datos inválidos | `ErrorResponse` |
| 404 | Asignatura no encontrada | `ErrorResponse` |

- **Ejemplo cURL:**
```bash
curl -X PUT http://localhost:8080/api/private/v1/asignaturas/1 \
  -H "Content-Type: application/json" \
  -d '{"nombreAsignatura": "Algoritmos Avanzados II"}'
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/asignaturas/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nombreAsignatura: 'Algoritmos Avanzados II' })
});
const json = await response.json();
if (json.success) console.log('Actualizada:', json.data);
```

---

### DELETE /{id}

Elimina una asignatura por su ID.

- **Método:** `DELETE`
- **Path:** `/api/private/v1/asignaturas/{id}`
- **Path params:**

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `id` | `Integer` | Sí | ID de la asignatura a eliminar |

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 204 | Asignatura eliminada | Vacío |
| 404 | Asignatura no encontrada | `ErrorResponse` |

- **Ejemplo cURL:**
```bash
curl -X DELETE http://localhost:8080/api/private/v1/asignaturas/1
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/asignaturas/1', {
  method: 'DELETE'
});
if (response.status === 204) console.log('Asignatura eliminada');
```

---

## Modelos de datos

### Asignatura

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `Integer` | ID de la asignatura (auto-generado) |
| `nombreAsignatura` | `String` | Nombre de la asignatura (único) |

### CreateAsignaturaRequestBody

| Campo | Tipo | Requerido | Validación |
|-------|------|-----------|------------|
| `nombreAsignatura` | `String` | Sí | `@NotBlank` |

---

## Errores comunes

| Código | Causa | Solución |
|--------|-------|----------|
| `ASIGNATURA_NOT_FOUND` | ID no existe | Verificar con `GET /` |
| `VALIDATION_ERROR` | `nombreAsignatura` vacío | Enviar string no vacío |
| `INTERNAL_ERROR` | Error inesperado | Contactar backend |
