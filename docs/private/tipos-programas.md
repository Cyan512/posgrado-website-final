# Tipos de Programas — API Privada

## Información general

- **Base URL:** `/api/private/v1/tipos-programas`
- **Autenticación:** Pendiente (ver [README](README.md))

---

## Endpoints

### GET /

Lista todos los tipos de programas registrados.

- **Método:** `GET`
- **Path:** `/api/private/v1/tipos-programas`

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 200 | Lista de tipos | `ApiResult<List<TipoPrograma>>` |

- **Ejemplo cURL:**
```bash
curl -X GET http://localhost:8080/api/private/v1/tipos-programas
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/tipos-programas');
const json = await response.json();
console.log(json.data);
```

---

### POST /

Crea un nuevo tipo de programa. El slug se genera automáticamente a partir del nombre (kebab-case sin acentos).

- **Método:** `POST`
- **Path:** `/api/private/v1/tipos-programas`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
```json
{
  "nombreTipoPrograma": "Especialización"
}
```

| Campo | Tipo | Requerido | Validación | Descripción |
|-------|------|-----------|------------|-------------|
| `nombreTipoPrograma` | `String` | Sí | `@NotBlank` | Nombre del tipo de programa |

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 201 | Tipo creado | `ApiResult<TipoPrograma>` |
| 400 | Datos inválidos | `ErrorResponse` |

- **Ejemplo cURL:**
```bash
curl -X POST http://localhost:8080/api/private/v1/tipos-programas \
  -H "Content-Type: application/json" \
  -d '{"nombreTipoPrograma": "Especialización"}'
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/private/v1/tipos-programas', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nombreTipoPrograma: 'Especialización' })
});
const json = await response.json();
if (json.success) console.log('Creado:', json.data);
```

- **Ejemplo de respuesta (201):**
```json
{
  "success": true,
  "message": "Tipo de programa creado exitosamente",
  "data": {
    "id": 3,
    "nombreTipoPrograma": "Especialización",
    "slug": "especializacion"
  },
  "timestamp": 1712345678
}
```

---

## Modelos de datos

### TipoPrograma

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `Integer` | ID del tipo de programa (auto-generado) |
| `nombreTipoPrograma` | `String` | Nombre del tipo (único) |
| `slug` | `String` | Slug en kebab-case (auto-generado desde el nombre) |

### CreateTipoProgramaRequestBody

| Campo | Tipo | Requerido | Validación |
|-------|------|-----------|------------|
| `nombreTipoPrograma` | `String` | Sí | `@NotBlank` |

---

## Errores comunes

| Código | Causa | Solución |
|--------|-------|----------|
| `VALIDATION_ERROR` | `nombreTipoPrograma` vacío | Enviar string no vacío |
| `INTERNAL_ERROR` | Error inesperado | Contactar backend |
