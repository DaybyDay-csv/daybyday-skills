# daybyday-skills

Doctrina interna de DaybyDay: cómo pensamos ofertas, negocio y copy.
**Repo privado.** Estas skills definen cómo cualquier agente (zcode, opencode,
Claude Code, n8n) escribe, audita y decide para DaybyDay.

## Las 11 skills y cómo se organizan

```
tono-humano  ──────────────  la VOZ: obligatoria en toda prosa, siempre
                             (incluida la respuesta del agente en el chat)

ethical-conversion-system  ─  la MAESTRA: pipeline de 7 fases; decide qué
                             skill consultar en cada paso

Capa de negocio (antes del copy, si el problema está más arriba):
  oferta-grand-slam            QUÉ vender y CUÁNTO cobrar (Hormozi, $100M Offers)
  money-model-secuencia-ofertas  CÓMO se financia el crecimiento (Money Models)
  generacion-leads-core-four     CÓMO conseguir leads (Core Four, $100M Leads)

Capa de ejecución (las fases del pipeline):
  mecanicas-atencion-hooks       GANCHOS: 18 mecánicas de atención
  glosario-playbook-video-ads    VÍDEO ADS: consciencia + frameworks + formatos
  sistema-operativo-creativo     TESTING: recetas de creativo por IDs (H-/S-/F-…)
  direct-response-copy-engine    COPY: Schwartz/Masterson/Dry, generar y auditar
  copy-estilo-jesus              VOZ profunda: parábola, dignidad, invitación

Capa de operación:
  sop-campanas-alertas-n8n       ADS EN VIVO: rutinas, umbrales y alertas n8n
```

Regla de oro: nunca elijas el formato primero. Audiencia → mensaje → estructura → ejecución.
Y el copy no arregla una oferta rota: si el problema es de negocio, la skill de negocio va antes.

## Cómo usa esto un agente

1. Toda prosa que se entregue pasa por `tono-humano` (desde la primera frase).
2. Toda tarea de copy/campaña/oferta empieza por `ethical-conversion-system`.
3. Si el problema es qué vender, precio, caja o leads: la skill de negocio correspondiente antes.
4. Las skills son autónomas: se consultan por nombre; los detalles profundos
   están en `references/` dentro de cada una.

## Instalación (dónde vive el canónico)

Este repo es la fuente de verdad. Las skills se despliegan como copias a los
tres directorios que los agentes leen:

- `~/.zcode/skills/<skill>/` — zcode (las lista y las propone por su `description`)
- `~/.config/opencode/skills/<skill>/` — opencode
- `~/.claude/skills/<skill>/` — Claude Code

Para desplegar o actualizar tras un cambio:

```
./sync.sh          # rsync de las 11 skills a los tres destinos
```

Pin de versión: los agentes que consuman esto por GitHub pueden fijar un SHA de commit.

## Los innegociables (resumen)

- Sin negritas/cursivas de énfasis en prosa (tono-humano).
- Nada de "no es X, es Y" vacío, anáforas apiladas ni preguntas retóricas de relleno.
- Léelo en voz alta antes de entregar: si suena a coach de reel, se reescribe.
- Invitación, nunca presión: sin urgencia falsa, culpa ni FOMO fabricado.
- Si quitas el miedo y la pieza deja de mover, era manipulación: reescríbela.

## Contenido

- `runbooks/` — runbooks de workflows (blog, n8n, autoridad de fuentes).
- `<skill>/SKILL.md` — la skill autónoma; `<skill>/references/` — el detalle.
