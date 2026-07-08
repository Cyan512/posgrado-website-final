# API Privada — Posgrado API

## Información general

- **Prefijo base:** `/api/private/v1`
- **Autenticación:** Pendiente de implementación. Actualmente estos endpoints son accesibles sin token. El prefijo `/api/private/` está reservado para cuando se agregue autenticación (Bearer token).
- **CORS:** Habilitado según `CORS_ALLOWED_ORIGINS` en el `.env` del backend
- **Formato de respuesta exitosa:** `ApiResult<T>`
- **Formato de error:** `ErrorResponse`
- **📘 Guía transversal** (CORS, errores, paginación, types TypeScript): ver [arquitectura.md](../arquitectura.md)

---

## Formato de respuesta exitosa (`ApiResult<T>`)

```json
{
  "success": true,
  "message": "Operación exitosa",
  "data": { ... },
  "timestamp": 1712345678
}
```

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `success` | `boolean` | Siempre `true` en respuestas exitosas |
| `message` | `string` | Mensaje descriptivo de la operación |
| `data` | `T` | Datos de la respuesta |
| `timestamp` | `long` | Unix timestamp en segundos |

---

## Formato de error (`ErrorResponse`)

```json
{
  "success": false,
  "message": "Facultad no encontrada con id: 999",
  "errorCode": "FACULTAD_NOT_FOUND",
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
| `FACULTAD_NOT_FOUND` | Facultad no encontrada |
| `PROGRAMA_NOT_FOUND` | Programa no encontrado |
| `TIPO_PROGRAMA_NOT_FOUND` | Tipo de programa no encontrado |
| `PERIODO_NOT_FOUND` | Periodo no encontrado |
| `ASIGNATURA_NOT_FOUND` | Asignatura no encontrada |
| `PLAN_ESTUDIO_NOT_FOUND` | Plan de estudio no encontrado |
| `VALIDATION_ERROR` | Parámetros de entrada inválidos (body, path o query) |
| `INTERNAL_ERROR` | Error interno del servidor |

---

## CORS

Para consumir estas APIs desde un frontend, el backend debe tener tu origen en la variable de entorno `CORS_ALLOWED_ORIGINS`. Si recibís errores de CORS en el navegador, pedí al equipo de backend que agregue tu URL.

---

## Endpoints disponibles

| Módulo | Archivo |
|--------|---------|
| Facultades | [facultades.md](facultades.md) |
| Programas | [programas.md](programas.md) |
| Tipos de Programas | [tipos-programas.md](tipos-programas.md) |
| Periodos | [periodos.md](periodos.md) |
| Asignaturas | [asignaturas.md](asignaturas.md) |
| Planes de Estudio | [planes-estudio.md](planes-estudio.md) |

---

## Nota importante

Estos endpoints de administración no requieren autenticación en este momento. El prefijo `/api/private/` se mantiene para que, cuando se implemente autenticación, no cambien las URLs y el frontend no requiera migración. Por ahora, se consumen de la misma forma que los endpoints públicos.
