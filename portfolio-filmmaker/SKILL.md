---
name: portfolio-filmmaker
description: >-
  Receta completa para construir un portfolio de filmmaker/fotógrafo/creativo de
  lujo como danylodolgov.com: reel a pantalla completa con título que se corta
  por el panel siguiente (estilo Preymaker), scroll con inercia Lenis, cortina
  cinematográfica entre páginas, vídeo adaptado por dispositivo (horizontal
  desktop / vertical móvil), galería con filtro Films/Photos y backend
  self-service en Supabase para que el cliente gestione solo. Úsala SIEMPRE que
  Pablo pida crear un portfolio para un creativo, replicar el de Danylo, o
  mantener/evolucionar danylodolgov.com — aunque no diga "portfolio" literal:
  "una web como la de Danylo", "portfolio de vídeo", "web de fotógrafo".
  Contiene la física exacta del efecto sticky (5 iteraciones de ajuste con el
  cliente), los valores de Lenis afinados por Pablo y todos los gotchas de
  deploy que ya costaron horas.
---

# Portfolio de filmmaker/creativo — receta danylodolgov.com

## Qué es

Portfolio cinematográfico a pantalla completa: negro `#0A0A0A`, crema `#F5F1EA`,
oro `#C9A24C` (`--primary: 36 55% 58%`), Fraunces (display) + Inter (body).
La home son dos tarjetas 16:9 (Production / Personal Branding); cada disciplina
abre un **reel** de proyectos a pantalla completa donde el título de cada
proyecto se clava a media pantalla y **el panel siguiente lo corta físicamente**
(sin fades ni degradados). Ficha de proyecto con galería a sangre y filtro
All · Films · Photos. El catálogo vive en Supabase y el cliente se gestiona
solo desde `/admin` (candado discreto en el footer).

## Plantilla viva — NUNCA empezar de cero

El repo es la fuente de verdad; se clona y se re-skinnea:

- GitHub: `DaybyDay-csv/remix-of-danylo-dolgov-portfolio` (privado, gh CLI authed)
- Clon local de referencia: `~/Developer/repos/danylo/remix-of-danylo-dolgov-portfolio`
- Stack: React 18 + Vite + TS + Tailwind + shadcn/ui, framer-motion SOLO en
  Philosophy (todo lo demás es CSS/sticky puro), @tanstack/react-query, Lenis.

Si este repo cambió después de escribir esta skill, manda el repo: los ficheros
de `assets/` son instantáneas para leer rápido, no para sobreescribir al repo.

## Arquitectura de rutas

```
/                          Hero + TwoWorlds (2 tarjetas) + Philosophy + Contacto
/work/<track>              Reel de la disciplina (track = production | personal-branding)
/work/<track>/<slug>       Ficha: reel de cabecera + galería con filtro
/about  /contact  /admin   Admin self-service (noindex)
```

OJO: NO existe segmento de categoría en la URL (`/work/personal-branding/france`,
no `/work/personal-branding/travel/france`).

Flujo de datos: `useProjects()` (react-query) lee Supabase (projects +
project_assets) → mapea al shape `Project/MediaAsset` → las páginas. **Fallback
estático** a `src/data/projects.ts` si Supabase cae: la web nunca se queda en
blanco. Cover = primer asset por `sort_order`.

## Montaje por fases (checklist)

1. **Estructura**: categorías de los 2 tracks (`src/data/categories.ts`), páginas
   y rutas. Las categorías vacías enseñan "This chapter is being shot".
2. **Reel** (la pieza crítica): leer `references/efecto-reel.md` ANTES de tocar
   nada de sticky. Copiar `assets/ReelPanel.tsx` + `assets/reel.css`.
3. **Galería de ficha**: `AssetGrid` — a sangre (gap-0), films horizontales
   apilados a ancho completo, verticales centrados sobre su propio poster
   desenfocado, fotos en masonry, tabs All/Films/Photos con contador (solo si
   hay mezcla), lightbox que navega sobre el filtro activo, iconos finos
   (strokeWidth 1.25). Sin "Next project" (decisión del cliente).
4. **Transiciones y scroll**: cortina `PageTransition` + Lenis
   (`assets/smooth-scroll.ts`) + reveal por scroll en la home
   (`assets/useScrollReveal.ts`). Reglas en `references/efecto-reel.md`.
5. **Backend self-service**: leer `references/backend-selfservice.md`. Aplicar
   `assets/migration.sql` (el cliente pega el SQL en el dashboard Supabase),
   seed con `assets/seed-supabase.mjs`, página `/admin`, candado en el footer
   (`<Link to="/admin">` con `Lock` w-3.5 muted, hover oro), robots cierra
   `/admin`.
6. **Sync Drive→web** (opcional, si el cliente publica por Drive): patrón del
   motor Gen10 en `references/backend-selfservice.md`.
7. **Deploy**: leer `references/deploy.md` ANTES del primer push.
8. **QA obligatorio**: Playwright con los DOS modos (`reducedMotion: "reduce"` y
   normal) para toda animación; scroll-entry vs reload-mid-page para reveals;
   verificación en producción comparando hash del bundle local vs
   `/assets/index-*.js` servido.

## Leyes no negociables (aprendidas con el cliente)

1. **"Reducir movimiento" NO significa quitar la transición** — el iPhone lo
   trae de serie y el cliente lo vio como "cambia de golpe". Se degrada:
   cross-fade corto (260/340 ms) en la cortina, fade-only en aperturas.
   Probar SIEMPRE los dos modos.
2. **El swap de títulos es física, no animación**: sin fades ni degradados ni
   gating. El título entra pegado al scroll 1:1 y el panel siguiente lo corta.
   Pablo rechazó expresamente fade-ins y "que aparezca de sopetón".
3. **`overflow: hidden` en un ANCESTRO mata el sticky.** En el propio elemento
   sticky está bien. Con `isolation: isolate` + orden DOM el panel entrante
   pinta encima del título saliente.
4. **Poster eager + fetchPriority high** en el panel visible y el siguiente —
   si no, banda negra al hacer scroll rápido.
5. **Cache-busting con `?v=N`** en media nuevo: el CDN de CF Pages sirvió el
   HTML de fallback 404 cacheado 24 h como si fuera el JPEG. `/media/*` a
   max-age=3600, `/assets/*` immutable.
6. **Service key de Supabase SOLO en el .env del server (chmod 600) o .env
   gitignored** — jamás en código cliente ni commits. La anon key es pública
   por diseño y SÍ va en el `.env` del repo (repo privado).
7. **El motor del sync solo AÑADE** (regla del cliente: "SOLO AÑADE") — nunca
   borra ni machaca contenido ya publicado.
8. **TODO entregable para el cliente va EN INGLÉS** (Danylo no lee español;
   PDFs de logos, mails, UI del admin).

## Assets (copiar al proyecto nuevo)

| Fichero | Qué es |
|---|---|
| `assets/ReelPanel.tsx` | Un panel del reel (ancla sticky + wrap vídeo + IO) |
| `assets/reel.css` | Bloques CSS: Lenis base, reel-panel, animaciones de apertura, reveal, reduced-motion |
| `assets/StreamVideo.tsx` | Vídeo de fondo con selección horizontal/vertical por dispositivo |
| `assets/PageTransition.tsx` | Cortina entre páginas (capture-phase + reduced-motion) |
| `assets/smooth-scroll.ts` | Lenis: init/destroy, scrollToTopImmediate, lockScroll |
| `assets/useScrollReveal.ts` | Reveal solo cuando el scroll trae el elemento (no al recargar) |
| `assets/migration.sql` | Schema Supabase completo con RLS y bucket |
| `assets/seed-supabase.mjs` | Seed del catálogo (ejemplo con `catalog.json`) |

## Referencias (leer según la fase)

- `references/efecto-reel.md` — física del sticky (las 5 iteraciones y por qué
  fallaron las anteriores), IO thresholds, Lenis afinado por Pablo
  (lerp 0.08, wheelMultiplier 0.55 — menos intenso, no más rápido), aperturas
  one-shot, cortina de páginas, reveal por scroll.
- `references/backend-selfservice.md` — Supabase (schema, RLS, disciplina de
  claves), hook con fallback, admin /admin (capacidades y límites), seed, motor
  Drive→web del Gen10 (gdown, ffmpeg docker, GLM vision, publicación directa a
  Supabase).
- `references/deploy.md` — cadena CF Pages (espejo + force-push, build command
  npm), gotchas de caché CDN, robots, verificación en producción.
