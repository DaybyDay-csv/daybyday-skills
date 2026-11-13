# El efecto reel (estilo Preymaker) — física exacta

Resultado buscado: cada proyecto ocupa la pantalla completa; su título se clava
a media pantalla; al hacer scroll el panel siguiente sube y **corta** al título
saliente de abajo arriba; el título entrante aparece pegado al scroll (1:1 con
el dedo/rueda), aterriza en el MISMO píxel donde estaba el saliente y el sticky
lo clava. El usuario percibe "los títulos están siempre en el mismo sitio".

Referencia visual: preymaker.com. Referencia de lujo general: sturgetoth.com.

## La receta (versión final, 5 iteraciones)

Cada proyecto = `<section class="reel-panel">` de **150svh** con
`isolation: isolate` y dos hijos sticky:

```jsx
<section className="reel-panel group">           {/* 150svh, isolate */}
  {/* 1. ANCLA del título — h-0 es la clave */}
  <div className="sticky top-0 z-20 h-0">
    <div className="pointer-events-none absolute inset-x-0 top-[50svh] -translate-y-1/2">
      ...título (eyebrow + h2 + subline + View work)...
    </div>
  </div>
  {/* 2. WRAP del vídeo */}
  <div className="sticky top-0 z-10 h-[100svh] w-full overflow-hidden bg-black">
    <StreamVideo ... />
    <div className="anim-overlay absolute inset-0 bg-black" />  {/* apertura */}
    <Link className="absolute inset-0 z-10" />                  {/* todo clicable */}
  </div>
</section>
```

**Por qué funciona:** el ancla (h-0) se pega al top en cuanto la sección entra;
el bloque de título cuelga 50svh POR DEBAJO del ancla, así que mientras la
sección sube, el título entra desde abajo a velocidad 1:1 con el scroll y
aterriza a media pantalla, donde el sticky lo detiene. El borde inferior de la
sección (que sigue subiendo) termina empujando el ancla hacia arriba y el título
sale de la pantalla — al mismo tiempo que el panel siguiente (orden DOM +
`isolation`) pinta por encima: corte físico, sin fades.

## Las 5 iteraciones y por qué fallaron (NO repetir)

1. **Capa fixed global con clipPath swap** → el título flotaba, nunca se
   cortaba. Descartado.
2. **Ancla en `top-[50svh]` sin colgar el bloque** → dos títulos flotando
   apilados.
3-4. **Gating con opacity/fades para "mostrar" el título entrante** → Pablo,
   textualmente: *"que aparezca con el mismo scroll que come el título anterior,
   no de sopetón ni con fade-ins"*. TODO gating eliminado: el scroll ES el swap.
5. **`overflow: hidden` en la sección** → mató el sticky (títulos no se clavaban).
   Regla: overflow-hidden en ANCESTROS destruye sticky; en el propio wrap del
   vídeo está bien. `clip-path` tampoco lo arregla.

## IntersectionObserver del panel activo

Observar el **wrap de vídeo (100svh) con `threshold: 0.5`** — se dispara en el
mismo instante en que la costura pasa por el centro y el título cambia de dueño.
Con umbral >0.5 sobre la sección de 150svh nunca dispara (matemáticamente no
llega). Solo marcar en cruces ascendentes (`isIntersecting && ratio >= 0.5`).
El estado `active` reproduce el vídeo visible; `preload` (panel siguiente)
precarga con poster eager + `fetchPriority="high"` — sin eso hay banda negra al
scrollear rápido.

## Lenis (scroll con inercia) — valores afinados por Pablo

```ts
new Lenis({ lerp: 0.08, wheelMultiplier: 0.55, smoothWheel: true, syncTouch: false });
```

- **lerp 0.08** = glide largo y lujoso (~1,5 s hasta asentarse tras el gesto).
- **wheelMultiplier 0.55** = cada gesto fija el destino MENOS lejos. Historia:
  con 1.15 la inercia recorría 276px extra tras un gesto y Pablo lo sentía como
  "imanes"; pidió "menos intenso, NO más rápido" — rechazó subir el lerp (se
  sentía anti-natural) y pidió acortar el trayecto. Con 0.55: 132px extra,
  mismo glide de 1,4 s.
- **`syncTouch: false`** = móvil con inercia nativa del sistema (mejor que
  ninguna).
- **No inicializar Lenis con `prefers-reduced-motion`** (el hook lo salta).
- rAF manual propio; `lenis.stop()/start()` para congelar (lightbox); para
  saltos usar `lenis.scrollTo(0, { immediate: true, force: true })`.
- La percepción de "aterrizar en cada proyecto" NO es snap: la dan los paneles
  de 150svh con 50svh de dwell del título. No añadir scroll-snap: rompe el glide.

## Apertura de páginas (one-shot al montar)

Cascada escalonada del bloque del título + entrada del vídeo desde negro:

```css
.anim-fade-down { animation: fade-down 1s cubic-bezier(0.22,1,0.36,1) 0.15s backwards; }
.anim-stagger > * { animation: rise-in 1.1s cubic-bezier(0.22,1,0.36,1) backwards; }
/* delays 0.35/0.5/0.65/0.8s por nth-child */
.anim-video  { animation: video-in 2.6s cubic-bezier(0.22,1,0.36,1) backwards; }
/* overlay negro: base opacity:0 + fill backwards → nunca queda tapando */
.anim-overlay { opacity: 0; animation: fade-black 1.4s ease-out 0.1s backwards; }
```

(Ver `assets/reel.css` para las keyframes completas.)

## Reduced-motion: degradar, NUNCA quitar

El iPhone de los clientes suele traer "Reducir movimiento" activado. Si las
animaciones se saltan con `animation: none`, el cliente ve "cambia de golpe" y
lo reporta como bug. Doctrina aplicada:

- **Cortina de páginas**: normal 480/560 ms → reduce **260/340 ms** de solo
  opacidad (cross-fade corto, sin desplazamiento).
- **Aperturas**: `.anim-stagger`/`.anim-fade-down` pasan a `fade-only` 0.45s
  (delays 0.05-0.26s); `.anim-video` se apaga (el zoom no aporta); overlay
  oculto.
- **Reveal de la home**: `transform: none` + transición de opacidad 0.45s.
- **Probar SIEMPRE con Playwright `reducedMotion: "reduce"`** además del modo
  normal antes de dar una animación por buena.

## Cortina entre páginas (PageTransition)

Montada una vez en App. Intercepta clicks en **fase captura** sobre `document`
(cubre todos los Link sin tocar componentes). Cover 480ms a negro → navega (la
nueva página se monta detrás) → reveal 560ms mientras corre su apertura.
Respeta cmd/ctrl/shift/alt, `target`, `download`, externos (`//`), misma ruta.
Timer de red de seguridad (cover+2000ms) para no dejar la cortina puesta.

**Bug clásico que lo rompió:** poner el `navigate` en un `useEffect` que depende
de `phase` → el paso a "cover" re-ejecutaba el efecto con `pending` ya limpio y
el reveal se disparaba antes de navegar (la cortina subía y bajaba sin cambiar
de URL). Fix: navegar desde el propio handler con `setTimeout(COVER_MS)` y
revelar solo cuando `location.pathname` cambia de verdad (ref prevPath + flag
navigating).

## Reveal por scroll en la home (useScrollReveal)

La tarjeta de coches de la home anima SOLO cuando el SCROLL la trae a pantalla;
si un reload te deja ya en pantalla, se pinta asentada (el usuario no ve
animaciones a mitad de página). Mecánica:

- IO con `threshold: 0.25, rootMargin: "-60px"` sobre el elemento.
- Un listener de scroll marca `scrolled`, con **ventana de gracia de 800 ms**
  tras el mount: los scroll events dentro de la gracia son la restauración del
  navegador en un reload, no el usuario (con Lenis la inercia de un flick sigue
  soltando events después de la gracia y cuenta como scroll real).
- `instant` (ya estaba en pantalla) → clases `is-in no-anim` (settled sin
  transición).

**Gotchas que lo rompieron:** (1) olvidar pasar el `ref` del hook al elemento
(el IO observaba null y no animaba nunca); (2) clase `reveal-text` sin mecanismo
que añada `is-in` → el elemento queda **invisible para siempre** (opacity 0) —
ocurrió con la tarjeta Personal Branding en móvil y desktop: cuando haya varias
tarjetas con reveal, cada una necesita SU PROPIO hook (componente por tarjeta,
como `WorldCard` en TwoWorlds), nunca clases de reveal sueltas sin hook. Verificación de 3 casos: carga arriba +
scroll → anima; reload a media página → asentado instantáneo; reload arriba →
oculto esperando scroll.

## Detalles de la galería de ficha (AssetGrid)

- A sangre: cero padding/gaps (`gap-0`), sin espacio negro detrás.
- Films horizontales apilados a ancho completo; films verticales centrados sobre
  SU PROPIO poster desenfocado de fondo; fotos en columnas masonry.
- Tabs All · Films · Photos con contador, sticky y transparentes; solo aparecen
  si hay mezcla. El **lightbox navega sobre el filtro activo**, no sobre todos.
- Iconos de play/mute finos (`strokeWidth 1.25`). Lightbox con sonido (muted
  false) mientras el resto del site es muted.
- "Next project" ELIMINADO (petición del cliente): la ficha acaba en galería +
  footer.
- Labels en inglés: **"Photos", no "Stills"** (el cliente rechazó "stills").

## Barra de categorías

Sticky transparente (h-0), letras en BLANCO PURO (white/50 se perdía sobre
vídeo claro), activa con subrayado oro, hover tiñe de oro.

## Eyebrow sin duplicados

El nombre de industria puede normalizarse igual que la categoría
("Wellness Beauty" vs "Wellness & Beauty") → dedupe con `norm()` (lowercase sin
no-alfanuméricos) antes de componer "CATEGORY · INDUSTRY". Si la subline repite
el eyebrow, no se pinta. Regla: comparar nombres de Drive contra labels SIEMPRE
normalizados, nunca string exacto.

## StreamVideo (vídeo por dispositivo)

- Elige `portraitMp4/portraitPoster` en móvil si existen, si no el horizontal
  (el cliente sube lo que quiera; el site se defiende).
- Poster pinta primero; el `<video>` entra con fade 700ms al `canplay`.
- `loop playsInline muted autoPlay`, `disablePictureInPicture`.
- Solo reproduce el panel activo; el resto pausado en su poster.
- `loading={active || preload ? "eager" : "lazy"}` + `fetchPriority high` en el
  activo.
