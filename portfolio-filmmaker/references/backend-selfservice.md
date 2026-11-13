# Backend self-service (Supabase) + sync Drive→web

Objetivo: que el cliente (Danylo) añada proyectos, edite descripciones y
organice media **él solo**, sin builds. El catálogo vive en Supabase; el site
lee en runtime con fallback estático.

## Proyecto Supabase

- Crear proyecto NUEVO en la cuenta del cliente (Danylo crea el suyo y pega la
  service_role key en el chat; el viejo de Lovable se abandona).
- **Disciplina de claves:**
  - `service_role`: SOLO en `.env.supabase` (gitignored) del repo y en el
    `.env` del server del motor de sync (chmod 600). NUNCA en código cliente ni
    commits.
  - anon/publishable (`sb_publishable_…`): pública por diseño → va en el `.env`
    del repo como `VITE_SUPABASE_PUBLISHABLE_KEY` + `VITE_SUPABASE_URL` +
    `VITE_SUPABASE_PROJECT_ID` (el `.env` del repo SÍ está en git, repo privado).

## Schema (aplicar con assets/migration.sql)

La service key NO puede ejecutar DDL vía PostgREST → el SQL va en
`supabase/migration.sql` y **el cliente lo pega en el SQL Editor del dashboard**
(2 min). Contiene:

- `projects`: id/slug unique/title/client/industry/category/track (check
  production|personal-branding)/summary/description/services text[]/location/
  sort_order/created_at/updated_at.
- `project_assets`: project_id fk cascade, kind video|photo, orientation
  landscape|portrait, `video_url`, `video_portrait_url`, `poster_url`,
  `poster_portrait_url`, alt, sort_order. **Un asset puede llevar corte
  horizontal Y vertical** — el site elige por dispositivo.
- RLS: SELECT público en ambas; INSERT/UPDATE/DELETE solo `authenticated`.
- Bucket `media` público de lectura + sus policies.

## Data layer (useProjects)

Hook react-query (`staleTime: Infinity`) que:

1. Lee `projects?select=*,project_assets(*)`.
2. Mapea filas → shape `Project/MediaAsset` (cover = primer asset por
   sort_order). **Proyecto sin assets NO se publica** (return null).
3. En error → fallback al catálogo estático `src/data/projects.ts`. La web
   nunca se queda en blanco.

El catálogo estático se queda en el repo como fallback + fuente del seed.

## Media: mezcla CF Pages + Supabase Storage

Los ficheros viejos siguen servidos desde CF Pages (`/media/...`); el catálogo
guarda URLs completas, así que mezclar orígenes es transparente. Media nuevo
del admin va al bucket `media` de Supabase (`media/{slug}/…`). Cache-busting
`?v=N` donde toque (ver deploy.md).

## Admin `/admin`

- Login email+password (Supabase auth, sesión persistente). Dashboard agrupado
  por track, editor de todos los campos, media manager.
- Subida con detección de orientación por metadatos; poster auto capturado del
  vídeo vía canvas (al 33% del frame); opción de añadir versión vertical a un
  asset horizontal; reordenar ↑↓; borrar; cover = primer asset.
- **Límite 50 MB por subida** — si es mayor o `.mov`, aviso y redirigir al
  Drive (ese circuito transcodifica con ffmpeg).
- Mutaciones con la sesión authenticated (RLS). NUNCA la service key en cliente.
- Mobile-first (el cliente lo usa desde el iPhone).
- `robots.txt`: `Disallow: /admin` + SEO noindex.
- Acceso: candado discreto en el footer (Lock w-3.5, muted-foreground/40,
  hover oro, Link a /admin). Se ve quien lo sabe; no distrae.

**Al crear el usuario auth, guardar el password en un fichero del repo
(gitignored) o memoria — no solo en el informe del agente** (un password se
perdió cuando un workflow errored al publicar su informe; se tuvo que resetear
por la service key: PUT /auth/v1/admin/users/{id} con {"password": …} y
verificar con POST /auth/v1/token?grant_type=password).

## Seed

`scripts/seed-supabase.mjs` (+ `scripts/catalog.json` con el catálogo como
filas). Con la service key por env: sube filas de projects + project_assets con
las URLs de media existentes (sin migrar ficheros).

## Motor Drive→web (opcional)

Patrón del Gen10 para que el cliente publique soltando ficheros en su Drive
público:

- **n8n** cron cada 30 min + webhook manual → 1 nodo SSH al Gen10 (regla n8n:
  1 nodo SSH = 1 motor; credential bajo la clave `sshPassword` aunque sea de
  private-key).
- **Motor python** (`danylo_drive_sync.py`): lista el Drive con `gdown` (rate
  limit → 3 reintentos de 45 s; si el server está bloqueado, descargar masters
  en el Mac y scp por Tailscale), `state.json` para idempotencia, ffmpeg en
  docker (`jrottenberg/ffmpeg:5-alpine`, **monta /in y /out separados** — el
  motor dejaba los outputs junto a los masters y las fichas salían sin imagen;
  ffprobe requiere `--entrypoint ffprobe` porque el entrypoint del contenedor
  es ffmpeg), posters 1600w + MP4 1600p y 1080p vertical, copy por GLM vision
  (endpoint coding de z.ai, glm-5.3-flash; plantilla de fallback si falla la
  visión) con guards file-exists que abortan el proyecto a medias.
- **Publicación directa a Supabase** (storage + filas) con la service key del
  `.env` del server → Drive→web en ~2 min SIN build de CF. Telegram notifica.
- Regla del cliente: **SOLO AÑADE** — nunca borra lo ya publicado.
- Solo sirven las carpetas `01 — Production` y `02 — Personal Branding` del
  Drive; el resto (Raw, Logos, Brand Assets…) se ignora.

## Lección de workflows sobre este repo

Si los agentes de un workflow trabajan sobre un repo FUERA del workspace
(`~/Developer/repos/…`), la publicación de artifacts (`artifact.file`) falla por
symlink/real-path: el trabajo queda hecho pero el informe (y secretos generados
en él) se pierde. Guardar secretos en fichero gitignored del repo al crearlos.
