# Deploy y verificación en producción

## Cadena Cloudflare Pages (dos repos)

El proyecto CF Pages `danylodolgov` (cuenta contact@daybydayconsulting.com,
dominio danylodolgov.com) tiene la integración git apuntando al **repo espejo**
`DaybyDay-csv/danylodolgvo` — no reasignable por API. Por eso:

```bash
git push origin main                      # repo fuente
git push mirror HEAD:main --force         # espejo = el que construye CF
```

Remotes del clon local: `origin` = remix-of-danylo-dolgov-portfolio, `mirror` =
danylodolgvo. **Si el deployment nuevo no arranca solo** (CF no ve el push a
tiempo), dispararlo por API: `POST /accounts/{id}/pages/projects/danylodolgov/
deployments` con `{}` — toma el último commit de la rama.

**Build command fijado por API** (CF auto-detectaba bun por el `bun.lockb` de
Lovable y moría con frozen-lockfile): `npm install --include=dev --no-audit
--no-fund --loglevel=error && npm run build`. El `bun.lockb` está borrado del
repo y el lockfile es npm. Si un día cambia el build command desde el
dashboard, volver a dejarlo así (la source del repo no es patchable por API,
el build_config sí).

**El server (Gen10) no alcanza npmjs ni api.cloudflare.com** — los agentes que
trabajen desde el server solo pueden git push; transcodificar con docker
(imagen ya en local) y hacer los wrangler/deploy desde el Mac.

## Antes de pushear

El motor del sync puede haber commiteado a main mientras trabajabas:

```bash
git fetch origin main && git rebase origin/main   # antes de commit/push
```

## Caché CDN (gotcha caro)

CF Pages sirve el index como fallback 200 para rutas inexistentes — si el media
aún no está, el CDN cacheó **el HTML de fallback como si fuera el JPEG durante
24 h**. Defensas ya en el repo:

- `public/_headers`: `/media/*` max-age=3600 (NUNCA 86400), `/assets/*`
  immutable.
- Media nuevo/regenerado con **`?v=N`** en la URL (versionar al regenerar).
- Diagnóstico: comparar la URL de deployment (sirve el fichero real) contra el
  dominio (sirve la caché). Si difieren, es caché, no media roto.

## robots / SEO

`robots.txt` permite Googlebot/Bingbot/Twitterbot/facebookexternalhit y cierra:

```
User-agent: *
Allow: /
Disallow: /admin
```

## Verificación en producción (rutina)

1. **Bundle hash**: comparar `ls dist/assets/index-*.js` local con el
   `/assets/index-*.js` que sirve el dominio — si no coinciden, el deploy no
   llegó.
2. **HTTP 200 por contenido**, no por status (el fallback 200 engaña): comprobar
   que el HTML/JPEG pedido contiene lo esperado.
3. **Playwright E2E sobre producción** para cambios de UI (login admin, click
   en el candado → /admin, reveal por scroll, cortina con reducedMotion).
4. Builds de CF tardan ~2-3 min tras el push al espejo; esperar ~160 s antes
   de verificar.

## Verificación local (antes de pushear)

- `npx tsc --noEmit` + `npm run build` limpios.
- Preview en :4173 y Playwright: los 3 casos de reveal (scroll/reload-mitad/
  reload-top), cortina en ambos reduced-motion, sticky midiendo la Y de los h2
  en la costura (delta 1:1), `mouse.wheel` para la inercia (distancia extra y
  tiempo de asentado).
- `elementFromPoint` NO sirve para medir oclusión de elementos con
  pointer-events:none — medir con getBoundingClientRect y orden DOM.
