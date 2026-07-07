# API Pública — Posgrado API

## Información general

- **Prefijo base:** `/api/public/v1`
- **Autenticación:** No requerida
- **CORS:** Habilitado según `CORS_ALLOWED_ORIGINS` en el `.env` del backend
- **Formato de respuesta exitosa:** `ApiResult<T>`
- **Formato de error:** `ErrorResponse`

---

## Formato de respuesta exitosa (`ApiResult<T>`)

Todas las respuestas exitosas vienen envueltas en esta estructura:

```json
{
  "success": true,
  "message": "Programas obtenidos exitosamente",
  "data": { ... },
  "timestamp": 1712345678
}
```

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `success` | `boolean` | Siempre `true` en respuestas exitosas |
| `message` | `string` | Mensaje descriptivo de la operación |
| `data` | `T` | Datos de la respuesta (entidad, lista o null) |
| `timestamp` | `long` | Unix timestamp en segundos |

---

## Formato de error (`ErrorResponse`)

Cuando ocurre un error, la respuesta tiene esta estructura:

```json
{
  "success": false,
  "message": "Tipo de programa no encontrado con slug: inexistente",
  "errorCode": "TIPO_PROGRAMA_NOT_FOUND",
  "timestamp": 1712345678
}
```

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `success` | `boolean` | Siempre `false` en errores |
| `message` | `string` | Descripción del error |
| `errorCode` | `string` | Código único del error |
| `timestamp` | `long` | Unix timestamp en segundos |

### Códigos de error

| Código | Descripción |
|--------|-------------|
| `PROGRAMA_NOT_FOUND` | Programa no encontrado con el id o slug indicado |
| `TIPO_PROGRAMA_NOT_FOUND` | Tipo de programa no encontrado con el slug indicado |
| `VALIDATION_ERROR` | Parámetros de entrada inválidos |
| `INTERNAL_ERROR` | Error interno del servidor |

---

## CORS

Para consumir estas APIs desde un frontend, el backend debe tener tu origen en la variable de entorno `CORS_ALLOWED_ORIGINS`. Si recibís errores de CORS en el navegador, pedí al equipo de backend que agregue tu URL.

---

## Endpoints disponibles

| Entidad | Archivo |
|---------|---------|
| Programas | [programas.md](programas.md) |
| Tipos de Programas | [tipos-programas.md](tipos-programas.md) |
