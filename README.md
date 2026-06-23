# daybyday-skills

Internal doctrine for DayByDay content. **Not public.** These skills shape how any AI agent writes or audits copy for DayByDay — blog posts, social, ads, landings.

## How an agent should use this repo

If you are an AI agent (Claude Code, opencode, n8n agent, anything) writing or auditing copy for DayByDay, **read these files in this order before producing a single sentence**:

1. **`tono-humano/SKILL.md`** — voice, banned phrases, anti-IA structures. This is the floor. Nothing below this line gets shipped.
2. **`ethical-conversion-system/SKILL.md`** — orchestrator. The 7-phase pipeline. Decides which other skill to consult when.
3. **`direct-response-copy-engine/SKILL.md`** — doctrine (Schwartz, Masterson, Dry). Rule of One, six leads, three line tests, scorecard.
4. **`copy-estilo-jesus/SKILL.md`** — frameworks F1-F6 and ethical guardrail. The "voice" complement to copy mechanics.
5. **`mecanicas-atencion-hooks/SKILL.md`** — 18 attention mechanics for hooks + `references/sistema-hooks.md` for the deep version.

## The non-negotiables (from `tono-humano`)

- No **bold**, *italic*, or underlined emphasis in body prose. (Tables and headers are fine.)
- No "No es X, es Y" as empty antithesis.
- No anaphora stacks ("Más alcance. Más leads. Más ventas.").
- No "Here's the thing" / "Mira..." as filler.
- No rhetorical hooks that fake suspense ("¿El resultado? Cero clientes.").
- **Always** read the draft aloud before shipping. If it sounds like a coach in a BMW, rewrite. If it sounds like a friend in a café, ship.

## The non-negotiables (from `copy-estilo-jesus`)

- Speak to the deep need, not the surface request.
- Concrete image before abstract concept.
- Story before lesson.
- Dignity before change.
- Sell the new identity, not the task.
- **Invitation is voluntary.** No fake urgency, no manufactured guilt, no false countdown.
- If you removed fear, guilt, and false urgency and the message stopped moving the person, it was manipulation. Rewrite it.

## Integration with DayByDayWeb-HTML

The 6-gate pipeline in `DaybyDay-csv/DaybyDayWeb-HTML` (`scripts/qa-checklist.mjs` and beyond) enforces a small subset of these rules as a CI safety net. The full doctrine is for the **agent at write time**, not the regex at build time.

## Versioning

These skills evolve. Pin a commit SHA in any agent that consumes them so behavior is reproducible.