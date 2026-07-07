# Tipos de Programas — API Pública

## Información general

- **Base URL:** `/api/public/v1/tipos-programas`
- **Autenticación:** No requerida

---

## Endpoints

### GET /

Lista todos los tipos de programas registrados.

- **Método:** `GET`
- **Path:** `/api/public/v1/tipos-programas`
- **Parámetros:** Ninguno

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 200 | Lista de tipos | `ApiResult<List<TipoPrograma>>` |

- **Ejemplo cURL:**
```bash
curl -X GET http://localhost:8080/api/public/v1/tipos-programas \
  -H "Accept: application/json"
```

- **Ejemplo JavaScript Fetch:**
```js
const response = await fetch('http://localhost:8080/api/public/v1/tipos-programas');
const json = await response.json();
if (json.success) {
  json.data.forEach(tipo => console.log(tipo.slug, tipo.nombreTipoPrograma));
}
```

- **Ejemplo de respuesta (200):**
```json
{
  "success": true,
  "message": "Tipos de programas obtenidos exitosamente",
  "data": [
    {
      "id": 1,
      "nombreTipoPrograma": "Maestría",
      "slug": "maestria"
    },
    {
      "id": 2,
      "nombreTipoPrograma": "Doctorado",
      "slug": "doctorado"
    }
  ],
  "timestamp": 1712345678
}
```

---

### GET /{slug}/programa

Obtiene los programas que pertenecen a un tipo de programa, buscando por slug, con paginación.

- **Método:** `GET`
- **Path:** `/api/public/v1/tipos-programas/{slug}/programa`
- **Path params:**

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `slug` | `String` | Sí | Slug del tipo de programa (ej: `maestria`, `doctorado`) |

- **Query params:**

| Parámetro | Tipo | Default | Requerido | Descripción |
|-----------|------|---------|-----------|-------------|
| `page` | `int` | `0` | No | Número de página (0-based) |
| `size` | `int` | `10` | No | Cantidad de elementos por página |
| `sort` | `String` | `nombre,asc` | No | Campo y dirección: `campo,asc` o `campo,desc` |
| `q` | `String` | — | No | Texto a buscar en el nombre del programa. **Accent-insensitive y case-insensitive**: `edu` matchea "Educación", `EDUCACION` también. Si está vacío o no se envía, devuelve todos. |

- **Respuestas:**

| Código | Descripción | Body |
|--------|-------------|------|
| 200 | Página de programas | `ApiResult<PagedResponse<Programa>>` |
| 404 | Tipo de programa no encontrado | `ErrorResponse` |

- **Ejemplo cURL:**
```bash
curl -X GET "http://localhost:8080/api/public/v1/tipos-programas/maestria/programa?q=edu&page=0&size=10&sort=nombre,asc" \
  -H "Accept: application/json"
```

- **Ejemplo JavaScript Fetch:**
```js
const slug = 'maestria';
const searchInput = document.getElementById('search')?.value || '';
const params = new URLSearchParams({
  page: '0',
  size: '10',
  sort: 'nombre,asc'
});
if (searchInput.trim()) {
  params.append('q', searchInput.trim());
}
const response = await fetch(`http://localhost:8080/api/public/v1/tipos-programas/${slug}/programa?${params}`);
const json = await response.json();
if (json.success) {
  const { content, totalPages, totalElements } = json.data;
  console.log(`${totalElements} resultados`);
  content.forEach(p => console.log(p.nombre));
} else {
  console.error(json.errorCode, json.message);
}
```

- **Ejemplo de respuesta (200):**
```json
{
  "success": true,
  "message": "Programas obtenidos exitosamente para el tipo de programa: Maestría",
  "data": {
    "content": [
      {
        "id": 1,
        "nombre": "Maestría en Ciencias de la Computación",
        "slug": "maestria-en-ciencias-de-la-computacion",
        "facultad": {
          "id": 1,
          "nombreFacultad": "Facultad de Ingeniería"
        },
        "tipoPrograma": {
          "id": 1,
          "nombreTipoPrograma": "Maestría",
          "slug": "maestria"
        },
        "modalidad": "PRESENCIAL"
      }
    ],
    "page": 0,
    "size": 10,
    "totalElements": 25,
    "totalPages": 3,
    "first": true,
    "last": false
  },
  "timestamp": 1712345678
}
```

- **Ejemplo de respuesta (404):**
```json
{
  "success": false,
  "message": "Tipo de programa no encontrado con slug: inexistente",
  "errorCode": "TIPO_PROGRAMA_NOT_FOUND",
  "timestamp": 1712345678
}
```

---

## Modelos de datos

### PagedResponse<T>

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `content` | `List<T>` | Elementos de la página actual |
| `page` | `int` | Número de la página actual (0-based) |
| `size` | `int` | Tamaño de página solicitado |
| `totalElements` | `long` | Total de elementos en todas las páginas |
| `totalPages` | `int` | Total de páginas disponibles |
| `first` | `boolean` | `true` si es la primera página |
| `last` | `boolean` | `true` si es la última página |

### TipoPrograma

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `Integer` | ID del tipo de programa |
| `nombreTipoPrograma` | `String` | Nombre (ej: "Maestría", "Doctorado") |
| `slug` | `String` | Slug en kebab-case (ej: `maestria`) |

### Programa

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `Integer` | ID del programa |
| `nombre` | `String` | Nombre del programa |
| `slug` | `String` | Slug del programa |
| `facultad` | `Facultad` | Facultad a la que pertenece |
| `tipoPrograma` | `TipoPrograma` | Tipo de programa al que pertenece |
| `modalidad` | `String` | Modalidad: `PRESENCIAL`, `SEMIPRESENCIAL`, `VIRTUAL`, `NO CONVOCABLE` |

### Facultad

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `Integer` | ID de la facultad |
| `nombreFacultad` | `String` | Nombre de la facultad |

---

## Errores comunes

| Código | Causa | Solución |
|--------|-------|----------|
| `TIPO_PROGRAMA_NOT_FOUND` | El slug no corresponde a ningún tipo de programa | Usar el slug exacto (ver `GET /`) |
| `INTERNAL_ERROR` | Error inesperado del servidor | Contactar al equipo de backend |

> **Nota sobre el filtro `q`:**
> - Búsqueda **accent-insensitive** y **case-insensitive** mediante columna dedicada `nombre_normalized` (auto-poblada al crear/actualizar y al iniciar la app).
> - `?q=edu` matchea "Doctorado en Educación".
> - `?q=EDUCACION` (sin tilde, mayúsculas) matchea "Doctorado en Educación".
> - Si el filtro no devuelve resultados, el endpoint responde 200 con `content: []` y `totalElements: 0`. No es un error.
> - `?q=` (vacío) o sin `q` devuelve todos los programas paginados.
