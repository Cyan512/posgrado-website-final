# Facultades — API Privada

## Información general

- **Base URL:** `/api/private/v1/facultades`
- **Autenticación:** Pendiente (ver [README](README.md))

---

## Endpoints

### GET /

Lista todas las facultades registradas.

- **Método:** `GET`
- **Path:** `/api/private/v1/facultades`

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 200 | Lista de facultades | `ApiResult<List<Facultad>>` |

- **Ejemplo cURL:**
```bash
curl -X GET http://localhost:8080/api/private/v1/facultades \
  -H "Accept: application/json"
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/facultades');
const json = await response.json();
console.log(json.data); // List<Facultad>
```

---

### GET /{id}

Obtiene una facultad por su ID.

- **Método:** `GET`
- **Path:** `/api/private/v1/facultades/{id}`
- **Path params:**

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `id` | `Integer` | Sí | ID de la facultad |

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 200 | Facultad encontrada | `ApiResult<Facultad>` |
| 404 | Facultad no encontrada | `ErrorResponse` |

- **Ejemplo cURL:**
```bash
curl -X GET http://localhost:8080/api/private/v1/facultades/1
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/facultades/1');
const json = await response.json();
if (json.success) console.log(json.data);
```

---

### POST /

Crea una nueva facultad.

- **Método:** `POST`
- **Path:** `/api/private/v1/facultades`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
```json
{
  "nombreFacultad": "Facultad de Ciencias Sociales"
}
```

| Campo | Tipo | Requerido | Validación |
|-------|------|-----------|------------|
| `nombreFacultad` | `String` | Sí | `@NotBlank` — no puede estar vacío |

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 201 | Facultad creada | `ApiResult<Facultad>` |
| 400 | Datos inválidos | `ErrorResponse` |

- **Ejemplo cURL:**
```bash
curl -X POST http://localhost:8080/api/private/v1/facultades \
  -H "Content-Type: application/json" \
  -d '{"nombreFacultad": "Facultad de Ciencias Sociales"}'
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/facultades', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nombreFacultad: 'Facultad de Ciencias Sociales' })
});
const json = await response.json();
if (json.success) console.log('Creado:', json.data);
```

---

### PUT /{id}

Actualiza el nombre de una facultad existente.

- **Método:** `PUT`
- **Path:** `/api/private/v1/facultades/{id}`
- **Headers:**
  - `Content-Type: application/json`
- **Path params:**

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `id` | `Integer` | Sí | ID de la facultad a actualizar |

- **Body:**
```json
{
  "nombreFacultad": "Facultad de Ciencias Sociales y Humanidades"
}
```

| Campo | Tipo | Requerido | Validación |
|-------|------|-----------|------------|
| `nombreFacultad` | `String` | Sí | `@NotBlank` |

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 200 | Facultad actualizada | `ApiResult<Facultad>` |
| 400 | Datos inválidos | `ErrorResponse` |
| 404 | Facultad no encontrada | `ErrorResponse` |

- **Ejemplo cURL:**
```bash
curl -X PUT http://localhost:8080/api/private/v1/facultades/1 \
  -H "Content-Type: application/json" \
  -d '{"nombreFacultad": "Facultad de Ciencias Sociales y Humanidades"}'
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/facultades/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nombreFacultad: 'Facultad de Ciencias Sociales y Humanidades' })
});
const json = await response.json();
if (json.success) console.log('Actualizado:', json.data);
```

---

### DELETE /{id}

Elimina una facultad por su ID.

- **Método:** `DELETE`
- **Path:** `/api/private/v1/facultades/{id}`
- **Path params:**

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `id` | `Integer` | Sí | ID de la facultad a eliminar |

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 204 | Facultad eliminada | Vacío (no content) |
| 404 | Facultad no encontrada | `ErrorResponse` |

- **Ejemplo cURL:**
```bash
curl -X DELETE http://localhost:8080/api/private/v1/facultades/1
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/facultades/1', {
  method: 'DELETE'
});
if (response.status === 204) {
  console.log('Facultad eliminada');
}
```

---

## Modelos de datos

### Facultad

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `Integer` | ID de la facultad (auto-generado) |
| `nombreFacultad` | `String` | Nombre de la facultad (único) |

### CreateFacultadRequestBody

| Campo | Tipo | Requerido | Validación |
|-------|------|-----------|------------|
| `nombreFacultad` | `String` | Sí | `@NotBlank` |

---

## Errores comunes

| Código | Causa | Solución |
|--------|-------|----------|
| `FACULTAD_NOT_FOUND` | El id no corresponde a ninguna facultad | Verificar el id con `GET /` |
| `VALIDATION_ERROR` | `nombreFacultad` vacío o faltante | Enviar un string no vacío |
| `INTERNAL_ERROR` | Error inesperado | Contactar backend |
