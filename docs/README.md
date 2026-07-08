# API Posgrado — Documentación para Frontend

## Estructura

| Carpeta | Contenido |
|---------|-----------|
| [public/](public/README.md) | Endpoints públicos (sin autenticación) |
| [private/](private/README.md) | Endpoints privados (admin, sin auth por ahora) |
| [arquitectura.md](arquitectura.md) | CORS, errores, paginación, types TypeScript |

## Inicio rápido

**Base URL desarrollo:** `http://localhost:8080`

**Swagger UI:** `http://localhost:8080/swagger-ui.html`

## Resumen de endpoints

### Públicos

| Entidad | Archivo |
|---------|---------|
| Programas | [public/programas.md](public/programas.md) |
| Tipos de Programas | [public/tipos-programas.md](public/tipos-programas.md) |

### Privados

| Entidad | Archivo |
|---------|---------|
| Facultades | [private/facultades.md](private/facultades.md) |
| Programas | [private/programas.md](private/programas.md) |
| Tipos de Programas | [private/tipos-programas.md](private/tipos-programas.md) |
| Periodos | [private/periodos.md](private/periodos.md) |
| Asignaturas | [private/asignaturas.md](private/asignaturas.md) |
| Planes de Estudio | [private/planes-estudio.md](private/planes-estudio.md) |

## Autenticación

Pendiente de implementación. Hoy todos los endpoints son accesibles sin token.

## CORS

Configurado en `CORS_ALLOWED_ORIGINS` del backend. Ver [arquitectura.md](arquitectura.md#1-cors).

## TypeScript Types

Copia los types de [arquitectura.md](arquitectura.md#9-typescript-types) en tu proyecto para type safety.
