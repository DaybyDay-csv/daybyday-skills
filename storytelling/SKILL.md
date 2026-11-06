---
name: storytelling
description: Diagnostica qué historia contar (formato, canal, propósito, contexto) y carga la doctrina correcta para escribirla. Úsala SIEMPRE que toque escribir o auditar una pieza narrativa: guion de vídeo, short, reel, YouTube largo, serie, pitch o deck, email o secuencia, email frío de outbound, landing o página de venta, post de LinkedIn, About/bio, case study, testimonial, lanzamiento — o cuando pidan "cuéntalo mejor", "ponle historia", "hazlo más narrativo" o storytelling a secas, aunque no nombren formato.
---

# Storytelling

Sistema de escritura narrativa construido sobre 20 fuentes destiladas (Steve Jobs, Kallaway,
Hemingway, Pixar, TEDx David JP Phillips, Caleb Ralston, Vinh Giang y más), cada una con su
ficha completa en `references/fichas/`. El catálogo de fuentes y su papel en cada módulo está
en `references/CATALOGO.md`.

## Regla de oro: primero diagnostica, después carga

No escribas nada antes de saber QUÉ historia es. El diagnóstico decide qué conocimiento
cargar; cargarlo todo es cargarte a ti mismo.

### Paso 0 — ¿Merece historia?

Antes de nada, la regla de los 15 minutos (`vinh-giang-3-ingredientes`): si tienes al oyente
menos de 15 minutos de permiso (short, email frío, CTA, respuesta directa), la historia no
entra o entra comprimida. Con 15 minutos o más, la historia es la mejor herramienta que
tienes. Si el encargo no necesita historia (una lista, una respuesta técnica, un aviso),
dilo y no la fuerces.

### Paso 1 — Las 4 preguntas del diagnóstico (en este orden)

1. **Formato** — ¿short, vídeo largo, serie, documental, presentación/deck, email, landing,
   post escrito?
2. **Canal** — ¿TikTok, Instagram, YouTube, LinkedIn, email, web?
3. **Propósito** — ¿venta directa, atracción, conversión, retención, crear comunidad,
   capitalizar comunidad?
4. **Contexto** — ¿orgánico o paid? ¿outbound o inbound? ¿contenido de valor o de venta?

Si el usuario no lo dice, infiérelo del encargo y CONFÍRMALO en una línea ("Entiendo que es
un Reel de atracción para Instagram, orgánico — si no, dime") antes de escribir. Un
diagnóstico mal hecho produce una pieza buena para otra cosa.

### Paso 2 — Carga selectiva

Lee SIEMPRE y en este orden:

1. `references/00-transversal.md` — la doctrina que aplica a toda historia + el pipeline
   universal de 7 pasos + la checklist de auditoría.
2. El archivo de formato que el diagnóstico decidió:

| Formato diagnosticado | Archivo a cargar |
| --- | --- |
| Short (TikTok/Reels/Shorts), UGC paid | `references/01-short.md` |
| Vídeo largo, serie, documental, comfort | `references/02-largo-serie-doc.md` |
| Presentación, deck, pitch, lanzamiento | `references/03-deck-pitch.md` |
| Email (secuencia o one-off), email frío | `references/04-email-outbound.md` |
| Landing, página de venta, web de marca | `references/05-landing-web.md` |
| Post escrito (LinkedIn, posts narrativos, About/bio) | `references/06-linkedin-post.md` |

3. `references/07-proposito-contexto.md` — cárgalo cuando el propósito o el contexto necesiten
   afinarse: propósito ambiguo, dos propósitos en la misma pieza, mezcla valor/venta, o
   decisión orgánico/paid u outbound/inbound que cambie la pieza.
4. Para profundizar en una técnica o una fuente concreta: `references/CATALOGO.md` mapea los
   20 slugs (p. ej. `kallaway-neurociencia-dopamina`) a sus fichas en
   `references/fichas/<slug>.md`. Las citas de slug en los archivos de doctrina apuntan ahí.

## Fase de construcción

Con la doctrina cargada, escribe siguiendo el pipeline universal (detalle en
`00-transversal.md`, aquí el orden):

1. Esqueleto de 5 líneas (`runia-5-lineas`): situación, deseo, conflicto, cambio, resultado.
   Si no cabe en 5 líneas, no hay historia: hay material.
2. Valida la causalidad línea a línea: cada beat conecta con "but" o "therefore", nunca
   "and then" (`pixar-story-spine`, `kallaway-6-tecnicas`).
3. Decide UNA emoción North Star antes de redactar (`arco-minimo-adrian-per`).
4. Escribe desde el final: la última frase primero (`kallaway-6-tecnicas`).
5. Escribe las escenas con los 5 elementos (`humm-5-elementos`): dónde + qué haces +
   pensamiento crudo + qué sientes en el cuerpo + diálogo literal.
6. Audita con la checklist universal de `00-transversal.md` y la checklist específica del
   formato. Corrige antes de entregar, no después.

## Integración con el sistema DaybyDay

- **Voz**: toda la prosa pasa por `#tono-humano` después de esta skill. El storytelling da la
  estructura; la voz humana da el tono.
- **Copy de conversión**: si la pieza es parte de un embudo con objetivo de venta, esta skill
  alimenta las fases narrativas pero `#ethical-conversion-system` es la maestra — empieza por
  ahí y deja que esta skill entre en las fases que tocan historia.
- **Hooks y atención**: `#mecanicas-atencion-hooks` complementa en la apertura; el bucle de
  `kallaway-neurociencia-dopamina` (en `00-transversal.md`) manda en la retención.
- **Negocio primero**: si el problema real es qué vender, a qué precio o cómo captar leads,
  las skills Hormozi (`#oferta-grand-slam`, `#money-model-secuencia-ofertas`,
  `#generacion-leads-core-four`) van ANTES. La mejor historia del mundo no arregla una oferta
  rota.

## Mapa rápido de slugs por módulo

| Módulo | Slugs principales |
| --- | --- |
| M1 Estrategia y diagnóstico | `estrategia-marca-ralston`, `vinh-giang-3-ingredientes` |
| M2 Estructura narrativa | `arco-minimo-adrian-per`, `pixar-story-spine`, `runia-5-lineas`, `oficio-richard-powers` |
| M3 Ingeniería de atención | `kallaway-neurociencia-dopamina`, `kallaway-6-tecnicas`, `tumadreanna-6-tecnicas`, `hoyos-60-segundos` |
| M4 Escena y voz | `vinh-giang-3-ingredientes`, `humm-5-elementos`, `hemingway-the-killers`, `hemingway-big-two-hearted`, `hemingway-bookfox-9-tecnicas` |
| M5 Emoción y vínculo | `david-phillips-hormonas`, `comfort-video-dry-creek`, `7-tramas-joe-bart` |
| M6 Venta y producto | `steve-jobs-storytelling`, `estrategia-marca-ralston`, `david-phillips-hormonas` |
| M7 Proceso y oficio | `stephen-king-proceso`, `belmont-guion-4-fases`, `hemingway-bookfox-9-tecnicas` |
