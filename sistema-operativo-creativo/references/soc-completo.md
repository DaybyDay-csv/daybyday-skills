# Sistema Operativo Creativo (SOC)

### Consolidación de 5 investigaciones (DeepSeek · Claude · Manus · ChatGPT · Gemini) en un sistema único, replicable y testeable para contenido orgánico y paid media

> **Qué es esto.** No es un documento de "ideas de vídeo". Es un **sistema operativo**: un banco de variables aisladas, cada una con definición, ejemplos y plantilla de ejecución, más las reglas para combinarlas, medirlas, diagnosticarlas y escalarlas. Está diseñado para tres usos simultáneos: (1) que un equipo humano produzca y testee con criterio, (2) que un agente de IA etiquete y analice creativos por sus componentes, y (3) que paid media optimice por variable, no por intuición.

> **Cómo leerlo.** Todo concepto vive dentro del **Modelo de 6 Capas**. Cada concepto tiene un **ID estable** (ej. `H-03`, `S-06`) para que puedas etiquetar cualquier creativo como una "receta" de IDs (ej. `H-03 + S-04 + F-11 + A-07 + C-02`) y que la IA aprenda qué combinaciones rinden.

---

## PARTE 0 — EL MODELO DE 6 CAPAS (arquitectura del sistema)

La tesis central, validada por las 5 fuentes, es que **cualquier vídeo se descompone en 6 capas independientes**. Cada capa es una palanca que se testea por separado. Combinas, aíslas, mides, documentas. Lo que funciona se vuelve patrón; lo que no, descarte rápido.

| # | Capa | Qué controla | Pregunta que responde | Métrica que la mide |
|---|------|--------------|----------------------|---------------------|
| **1** | **Hook** (`H-`) | Que pare el scroll | ¿Por qué me detengo? | Hook Rate / retención 1s–3s |
| **2** | **Estructura** (`S-`) | Que se quede hasta el final | ¿Por qué sigo viendo? | Hold Rate / % medio visto / completion |
| **3** | **Formato** (`F-`) | Coste, escala, estética, fit con marca | ¿Cómo se ve y cómo se graba? | Eficiencia de producción + retención |
| **4** | **Ángulo** (`A-`) | Intención (entretener/educar/convertir) y fase de funnel | ¿Para qué sirve este vídeo? | Engagement cualificado / conversión |
| **5** | **CTA** (`C-`) | Que haga algo | ¿Qué quiero que pase después? | Guardados, compartidos, comentarios, clics, conversión |
| **6** | **Edición/Retención** (`E-`) | Que la curva no se desplome | ¿Por qué no me voy a la mitad? | Forma de la curva de retención |

**Regla maestra (consenso de las 5 fuentes):** los algoritmos rankean por *watch-through rate*. La caída en los primeros 1–3 segundos es el peor castigo de distribución. Por eso el **orden de prioridad de testeo siempre es:**

> **Hook → Formato/Visual → Ángulo → CTA → Longitud/Copy.**
> Nadie ve el cuerpo de un vídeo que no le paró el scroll.

**Ventanas de referencia** (hipótesis de partida, NO constantes — valídalas con tus datos):
- El **hook hablado** debe aterrizar en ~3 s (≈10–14 palabras). El **hook visual**, en el **primer frame**.
- Sector apunta a que **~65% decide en los primeros 3 s** si sigue o no; retener **≥60% pasado el segundo 3** dispara distribución.
- **Interrupción de patrón cada 3–5 s** para sostener atención.

**Anatomía de una ficha de concepto** (Parte 2). Cada ficha trae:
`ID · Nombre · Capa/Tipo · Idea central · Cuándo usarlo · Por qué funciona · Ejemplos · Plantilla de guion · Dirección visual · Guía de edición · Estado de validación · Variable de testeo`.

> **Nota de granularidad (decisión de sistema).** Para evitar duplicación inútil, las plantillas de ejecución completas viven donde de verdad cambian: **Estructuras** (esqueleto de guion) y **familias de Hook**. **Formatos, Ángulos y CTA** comparten reglas de ejecución transversales (Capa 6) y por eso sus fichas son más compactas: añadir un "shot list" idéntico a 24 ángulos no haría el sistema más replicable, lo haría más pesado. La ejecución visual/edición común está centralizada en la **Capa 6** y se referencia desde el resto.

---

## PARTE 1 — RESUMEN DE COMPARACIÓN Y VALIDACIÓN

### 1.1 Qué aportó cada fuente

| Fuente | Aporte diferencial | Sesgo / mejor uso |
|--------|--------------------|--------------------|
| **DeepSeek** | Catálogo amplio: tipos de contenido por objetivo, 40+ hooks, adaptación por duración, funnel, combos. | Amplitud e inspiración. Bueno para *brainstorm* y cobertura. |
| **Claude** | El **modelo de 6 capas** (columna vertebral de este SOC), banco de hooks por gatillo, 17 estructuras, Content Matrix, sistema de testeo por variable aislada, plan de 4 semanas. | Sistematización y rigor de testeo. Es el esqueleto. |
| **Manus** | Frameworks de retención (HIVE, HOT, MrBeast, Subconscious Loop/Zeigarnik), storytelling pro (Pixar, StoryBrand SB7), pilares 4H, cadencia de corte. | Retención avanzada y narrativa de marca. |
| **ChatGPT** | Resumen ejecutivo, KPIs por formato, checklist de producción, **consideraciones legales/derechos**, SCQA. | Operativa y cumplimiento. |
| **Gemini** | El más **performance/paid**: psicología de Meta (ATT, Lattice/Entity IDs, fatiga), 7 interrupciones de patrón con timeline, **métricas de diagnóstico con fórmulas** (Hook/Hold/ThruPlay), matriz de diagnóstico, frameworks de testeo (3-3-3, 3-2-1, 3-fases) y escenarios de Ad Manager. | Diagnóstico clínico y testeo paid. El motor de optimización. |

### 1.2 Mapa de validación (qué entra y por qué)

- **VALIDATED** = aparece en ≥2 fuentes o es un estándar fuerte. Es el núcleo del SOC.
- **UNIQUE** = aparece en 1 sola fuente pero aporta algo no cubierto. Se integra marcado.
- **DISCARD** = bajo valor sistémico, redundante, o se decae con el tiempo. Se nombra para que sepas por qué no está.

| Concepto | Estado | Origen | Decisión |
|----------|--------|--------|----------|
| Modelo de capas (Hook/Estructura/Formato/Ángulo/CTA/Edición) | **VALIDATED** | Claude (explícito); el resto lo usa implícito | Columna vertebral del SOC |
| 4 gatillos cognitivos del hook | **VALIDATED** | Claude + Gemini + DeepSeek | Base de todos los hooks |
| Triple hook (visual + texto + verbal) | **VALIDATED** | Claude + Gemini + Manus | Regla de Capa 1 |
| Familias de hook (contradicción, curiosidad, error/coste, cifras, mito-verdad, autoridad, identificación, polémica, visual, recompensa rápida, comparación) | **VALIDATED** | Todas | Fichas H-01…H-18 |
| Hook "Familiaridad / reencuadre" | **UNIQUE** | Claude | H-15 |
| Hook "Teoría alternativa" | **UNIQUE** | Gemini | H-18 |
| Hook "Midway / secondary hook" | **VALIDATED** | Manus (MrBeast) + Gemini | H-16 |
| Estructuras de persuasión (AIDA, PAS, PASTOR, BAB, FAB, SPIN, STAR) | **VALIDATED** | Claude + Gemini + DeepSeek | Fichas S- |
| Estructura "But & So" (causa/giro) | **UNIQUE** | Claude | S-08 |
| Framework Pixar y StoryBrand SB7 | **UNIQUE** | Manus | S-21, S-22 |
| Frameworks long-form (HIVE, HOT, retención MrBeast) | **UNIQUE** | Manus | S-23, S-24, S-25 |
| 4 Ps (Picture-Promise-Prove-Push), SLAP, ACC | **UNIQUE** | Gemini | S-19, S-20 |
| SCQA | **UNIQUE** | ChatGPT | S-29 |
| Loop / bucle infinito + Subconscious loop (Zeigarnik) | **VALIDATED** | Todas | S-09 + E-08 |
| Content Marketing Matrix (Entretener/Inspirar/Educar/Convencer) | **VALIDATED** | Claude (+ funnel en todas) | Parte 2, Capa 4 |
| Pilares 4H (Heard/Helpful/Humor/Happenings) | **UNIQUE** | Manus | Capa 4 (rotación de parrilla) |
| Ecuación de Valor (Hormozi, *$100M Offers*) como brújula de ángulos | **VALIDATED** | Claude (+ alineado a método del equipo) | Capa 4 — brújula |
| 7 interrupciones de patrón con timeline | **VALIDATED** | Gemini (detalle) + Claude/Manus (reglas) | Capa 6 — toolkit E- |
| Métricas de diagnóstico con fórmulas (Hook/Hold/ThruPlay/CTR) | **VALIDATED** | Gemini (fórmulas) + Claude (lectura de curva) | Parte 4 |
| Matriz de diagnóstico (HookRate × Retención → acción) | **VALIDATED** | Gemini + Claude | Parte 4 |
| Aislar una variable + concept vs variation testing | **VALIDATED** | Todas | Parte 5 |
| Frameworks de testeo 3×3 / 3-2-1 / 3-3-3 / 3-fases | **VALIDATED** | DeepSeek/Claude (3×3) + Gemini (resto) | Parte 5 |
| Escenarios de Ad Manager (ASC+, CBO, ABO, Cost Cap, BAU) | **VALIDATED** | Gemini | Parte 5 (paid) |
| "Creativo = segmentación" post-ATT (Lattice/Entity IDs) | **VALIDATED** | Gemini | Parte 6 — insight de escala |
| Núcleo modular + extremos variables (1 cuerpo, N hooks/CTAs) | **VALIDATED** | Gemini + Claude | Parte 6 — principio de escala |
| Checklist de producción + derechos legales (música/imagen/#ad) | **UNIQUE** (mantener como checklist, no como concepto creativo) | ChatGPT + Manus | Parte 6 — guardarraíles |
| Nombres de agencias/creadores y hashtags concretos (Polimake, Achalay, etc.) | **DISCARD** del núcleo (valor que se decae, no sistémico) | Manus + ChatGPT | Solo como nota de *swipe file* |
| Hooks obsoletos ("¿Tienes problemas con…?", "Hola, hoy te voy a hablar de…", hype vago) | **DISCARD** como producción → se conservan como **anti-patrones** | Gemini + Claude | Parte 2, anti-patrones de Hook |
| Métricas de vanidad (vistas sin retención) | **DISCARD** como criterio de decisión | ChatGPT/Manus | Nota en Parte 4 |
| Redundancias fusionadas: "Circular"→Loop; "4 C's"≈arco 5 Cs/Storytime; "X pero Y"≈Contradicción; "Stop scrolling+lista+twist"≈Listicle+Hook | **DISCARD por duplicación** | DeepSeek | Fusionadas en su concepto canónico |

### 1.3 Solapamientos clave (señal de robustez)

Cuatro ideas aparecen en **las 5 fuentes** y son, por tanto, los pilares menos discutibles del sistema:
1. **El hook decide el destino del vídeo en ≤3 s.**
2. **Aislar una sola variable por test.**
3. **Estructura de 3 actos: Hook → Cuerpo/Valor → Cierre/CTA.**
4. **Retención y completion > vistas.** Un vídeo visto entero y compartido vale más que miles de vistas con abandono.

---

## PARTE 2 — BIBLIOTECA DE CONCEPTOS ESTANDARIZADA

---

# CAPA 1 — HOOKS (`H-`)

### Principios transversales de Capa 1 (aplican a TODOS los hooks)

**Los 4 gatillos cognitivos.** Todo hook activa al menos uno; los buenos **apilan 2+**:
1. **Brecha de curiosidad** — abres un bucle informativo que el cerebro necesita cerrar.
2. **Interrupción de patrón** — cambio brusco de audio/visual/afirmación rompe el trance del scroll.
3. **Auto-relevancia** — llamas a una audiencia/dolor/deseo concreto → "esto va de mí".
4. **Activación emocional** — sorpresa, asombro, ira, miedo. Opiniones polarizantes y *reveals* disparan retención.
> **Checklist de publicación:** verifica que el hook dispara **≥2 de los 4**. Los hooks de un solo gatillo rinden por debajo de forma fiable.

**El triple hook.** Un hook ataca por 3 canales a la vez, y los tres deben "aterrizar juntos" apuntando al mismo mensaje:
- **Visual** (primer frame: acción/contraste/movimiento) · **Texto** (rótulo quemado; la mayoría del scroll es en mute) · **Verbal** (la primera frase).

**Framework de 5 pasos para escribir un hook:**
1. Elige **un** gatillo (luego apila). 2. Define el **call-out de audiencia** (cuanto más específico, más potente). 3. Define la **promesa** (resultado concreto/secreto/sorpresa). 4. **Elimina** toda palabra que no se gane su sitio (<12 palabras habladas en 3 s). 5. Añade **capa sensorial** (empareja con interrupción visual).

**Anti-patrones de Hook (DISCARD como producción):**
- ❌ **Enterrar el hook:** abrir con contexto ("Hoy quiero hablar de…", "Mucha gente me pregunta…") y soltar el gancho en el segundo 6.
- ❌ **Pregunta corporativa genérica:** "¿Tienes problemas con tu marketing?" → se identifica como anuncio y se descarta.
- ❌ **Intro lenta:** "Hola, hoy te voy a hablar de…".
- ❌ **Hype vago:** "El gran secreto para crecer en redes" → sin anclaje realista, destruye credibilidad.
- ❌ **Clickbait desconectado:** sube scroll-stop pero hunde retención media y confianza.

---

### `H-01` · Contradicción / Subversión de expectativas
- **Capa/Tipo:** Hook · gatillo dominante: interrupción + curiosidad.
- **Idea central:** Desafías la sabiduría convencional del nicho. "Todos te dicen X. Están equivocados."
- **Cuándo usarlo:** audiencias que ya conocen el consejo popular; contenido de autoridad/opinión; TOFU y MOFU.
- **Por qué funciona:** disonancia cognitiva por violación de expectativas; el cerebro busca resolver la contradicción siguiendo el vídeo.
- **Ejemplos:**
  1. "Todos te dicen que publiques 3 veces al día. Es un error: la consistencia artificial está destruyendo tu alcance."
  2. "Deja de optimizar tu CV. Lo que de verdad te consigue la entrevista es otra cosa."
  3. (UFV, registro sobrio) "Más nota de corte no significa mejor formación. Esto es lo que sí lo determina."
- **Plantilla de guion:** *Hook:* "Todos te dicen que [acción X]. Están equivocados." → *Desarrollo:* justificas **de inmediato** la postura contraria con 1 dato/razón sólida → *Payoff:* la alternativa correcta → *CTA:* según ángulo.
- **Dirección visual:** plano cerrado a cámara, energía alta; el "están equivocados" cae con corte seco o zoom súbito (ver `E-01`).
- **Guía de edición:** la justificación contraria debe llegar **antes del segundo 4** o hay rebote. Texto en pantalla con la afirmación contraria.
- **Estado:** VALIDATED (Gemini, Claude, Manus). · **Variable de testeo:** afirmación contraria (grado de polémica).

### `H-02` · Brecha de curiosidad / Open loop
- **Capa/Tipo:** Hook · curiosidad.
- **Idea central:** Abres un bucle (pregunta/historia/resultado) que no cierras hasta el cuerpo o el final.
- **Cuándo usarlo:** casi universal; especialmente storytime, reveal, listas.
- **Por qué funciona:** "deuda informativa" (efecto Zeigarnik): el cerebro mantiene la atención hasta cerrar el bucle.
- **Ejemplos:**
  1. "Casi pierdo 10.000 € por este error… te cuento cuál en un segundo."
  2. "Esto es lo que los editores de Hollywood no te cuentan sobre el color."
  3. "El número 1 me cambió literalmente la forma de trabajar." (countdown tease para listas)
- **Plantilla de guion:** *Hook:* abre el bucle ("Casi [mal resultado] hasta que descubrí esto…") → *Desarrollo:* contexto mínimo, mantén el bucle → *Payoff:* cierras el bucle → *CTA.*
- **Dirección visual:** primer frame que insinúa el desenlace sin revelarlo (objeto tapado, reacción de cara).
- **Guía de edición:** no cierres el bucle antes de tiempo; refuerza con open loop verbal ("y al final te enseño el error que casi me cuesta el cliente").
- **Estado:** VALIDATED (todas). · **Variable de testeo:** grado de "tease" del bucle.

### `H-03` · Coste / Error revelado
- **Capa/Tipo:** Hook · curiosidad + prevención de pérdida.
- **Idea central:** Cifra exacta de lo que invertiste/perdiste, y la lección que ahorra ese error.
- **Cuándo usarlo:** autoridad, educación, prueba de experiencia; performance.
- **Por qué funciona:** transparencia financiera + aversión a la pérdida; la cifra exacta = credibilidad.
- **Ejemplos:**
  1. "Invertí 4.000 € en anuncios antes de descubrir que las audiencias similares no funcionan en este nicho."
  2. "Perdí 3 clientes el primer mes por este detalle del onboarding."
  3. (Garett) "Quemamos presupuesto en Black Friday por un fallo en el checkout. Esto es lo que cambiamos."
- **Plantilla de guion:** *Hook:* "Invertí [cifra exacta] aprendiendo esto. Te ahorro el error." → *Desarrollo:* el contexto del error → *Payoff:* la lección específica → *CTA.*
- **Dirección visual:** la cifra grande en pantalla en el segundo 0–1.
- **Guía de edición:** la cifra debe ser **plausible**; la lección **extremadamente específica** (no genérica).
- **Estado:** VALIDATED (Gemini, Claude). · **Variable de testeo:** la cifra (magnitud, especificidad).

### `H-04` · Cifras específicas / Numerado
- **Capa/Tipo:** Hook · claridad + curiosidad.
- **Idea central:** "[N] cosas/errores/factores que…", con un elemento controversial reservado.
- **Cuándo usarlo:** listicles, educación, recopilaciones; muy versátil.
- **Por qué funciona:** la cifra da estructura y promesa clara de payoff; el "el último te va a molestar" mantiene hasta el final.
- **Ejemplos:**
  1. "3 cambios que duplicaron mi conversión en 6 meses. El tercero te va a molestar."
  2. "5 errores que comete el 90% en su primer Reel."
  3. "7 ajustes de color en DaVinci que separan amateur de pro."
- **Plantilla de guion:** *Hook:* "[N] [cosas] que [resultado]. El [X] te va a molestar." → *Desarrollo:* lista con ritmo constante → *Payoff:* el ítem controversial cumplido → *CTA: guardar.*
- **Dirección visual:** número grande en pantalla; contador visible (1/5, 2/5…).
- **Guía de edición:** un corte/cambio por ítem; **cumple** la promesa del elemento molesto o cae la retención final.
- **Estado:** VALIDATED (todas). · **Variable de testeo:** el número (3 vs 5 vs 7) y la promesa controversial.

### `H-05` · Verdad inesperada / Mito-verdad
- **Capa/Tipo:** Hook · curiosidad intelectual.
- **Idea central:** "La mayoría cree [X]… pero la realidad es la opuesta."
- **Cuándo usarlo:** autoridad, educación, contenido que dispara comentarios.
- **Por qué funciona:** deconstrucción de supuestos; el contraste obliga a reevaluar.
- **Ejemplos:**
  1. "La mayoría cree que un buen diseño vende… pero es el texto simple el que convierte más."
  2. "Crees que necesitas mejor cámara. No: necesitas mejor guion."
  3. (UFV) "Se piensa que el MBA es solo para directivos. Los datos de inserción dicen otra cosa."
- **Plantilla de guion:** *Hook:* "La mayoría cree [creencia]… pero [verdad opuesta]." → *Desarrollo:* la verdad con evidencia → *Payoff:* cómo aplicarla → *CTA.*
- **Dirección visual:** aplica el contraste en los **primeros 2 s** (split de "mito" vs "verdad").
- **Guía de edición:** texto: mito en gris/tachado, verdad en color de acento.
- **Estado:** VALIDATED (DeepSeek, Claude, Gemini). · **Variable de testeo:** el mito elegido.

### `H-06` · Autoridad / Prueba
- **Capa/Tipo:** Hook · credibilidad + prueba social.
- **Idea central:** Credencial o resultado verificable que legitima lo que vas a decir.
- **Cuándo usarlo:** marca personal, B2B, registro institucional, BOFU.
- **Por qué funciona:** atajo de confianza; reduce el escepticismo de entrada.
- **Ejemplos:**
  1. "Como media buyer con 3 años gestionando campañas de educación superior, esta es mi opinión sobre los leads de máster."
  2. "Esta estructura ayudó a 40 alumnos a aprobar el TFM a la primera."
  3. (Garett) "Producto con certificación CE y 3 años de garantía. Te enseño qué mirar antes de comprar un dispositivo de belleza."
- **Plantilla de guion:** *Hook:* "Como [profesión/credencial], esto es lo que funciona." / "Esto ayudó a [nº] a [resultado]." → *Desarrollo:* el método → *Payoff* → *CTA.*
- **Dirección visual:** entorno que respalde la credencial (despacho, producto real, El Corte Inglés); rótulo con la cifra de prueba.
- **Guía de edición:** sobrio en registro institucional; evita superlativos.
- **Estado:** VALIDATED (Claude, Gemini). · **Variable de testeo:** tipo de prueba (credencial vs nº vs sello).

### `H-07` · Identificación / Dolor (Tú vs. Problema)
- **Capa/Tipo:** Hook · auto-relevancia.
- **Idea central:** Nombras un dolor o situación tan específica que el espectador siente "soy yo".
- **Cuándo usarlo:** tutoriales, listas de recursos, PAS; gran cualificador de audiencia.
- **Por qué funciona:** auto-relevancia inmediata; la **hiper-especificidad** (un momento humano concreto) conecta más que lo genérico.
- **Ejemplos:**
  1. "Si te cuesta conseguir tus primeros clientes como freelance, prueba este cambio hoy."
  2. "Para el que abre 14 pestañas y acaba sin hacer nada: esto es para ti."
  3. "Si alguna vez te has desabrochado el botón del pantalón en una cena…"
- **Plantilla de guion:** *Hook:* "Si [situación hiper-específica], esto es para ti." → *Desarrollo:* validas y das la solución → *Payoff* → *CTA.*
- **Dirección visual:** recrea el micro-momento del dolor en el primer frame.
- **Guía de edición:** cuanto más específico el call-out, mejor; "freelancers que pierden clientes el segundo mes" > "freelancers".
- **Estado:** VALIDATED (todas). · **Variable de testeo:** especificidad del call-out.

### `H-08` · Emoción / Vulnerabilidad / Confesión
- **Capa/Tipo:** Hook · activación emocional + conexión parasocial.
- **Idea central:** Confiesas algo personal o muestras una emoción real no resuelta.
- **Cuándo usarlo:** marca personal, storytime, conexión; no para BOFU duro.
- **Por qué funciona:** la vulnerabilidad y la tensión no resuelta detienen el scroll y crean vínculo.
- **Ejemplos:**
  1. "Estoy aterrado, pero voy a contarte cómo perdí todo el año pasado."
  2. "Voy a confesar algo que no le he dicho a nadie del equipo."
  3. "Llevo 6 meses fingiendo que esto me iba bien."
- **Plantilla de guion:** *Hook:* "Voy a confesar algo…" / "Estoy [emoción], pero…" → *Desarrollo:* la historia con tensión → *Payoff:* aprendizaje → *CTA blando.*
- **Dirección visual:** plano íntimo, sin sobreproducción; la imperfección suma autenticidad.
- **Guía de edición:** menos cortes, deja respirar la emoción (excepción a la regla de cortes rápidos).
- **Estado:** VALIDATED (Claude, Manus). · **Variable de testeo:** grado de exposición personal.

### `H-09` · Polémica / Hot take (engagement bait)
- **Capa/Tipo:** Hook · activación emocional → comentarios.
- **Idea central:** Opinión rotunda a contracorriente que invita a discutir.
- **Cuándo usarlo:** crecimiento orgánico, generar comentarios; con cuidado en marca/institucional.
- **Por qué funciona:** la polarización dispara comentarios (señal de distribución).
- **Ejemplos:**
  1. "Opinión impopular: el 90% de los cursos de marketing no deberían existir."
  2. "Las reuniones de 1h son un robo. Cámbiame de opinión."
  3. "Contratar por el CV es el error más caro de una empresa."
- **Plantilla de guion:** *Hook:* "Opinión impopular: [afirmación rotunda]." → *Desarrollo:* 1–2 argumentos → *CTA:* "¿estás de acuerdo? comenta".
- **Dirección visual:** a cámara, energía firme.
- **Guía de edición:** breve; el debate vive en comentarios, no en el vídeo.
- **Estado:** VALIDATED (Claude, DeepSeek). · **Variable de testeo:** intensidad de la opinión. · **Guardarraíl:** evita temas sensibles sin contexto (riesgo reputacional/legal).

### `H-10` · Visual / Pattern-break sin palabras
- **Capa/Tipo:** Hook · interrupción de patrón pura.
- **Idea central:** Una acción inesperada en el primer frame interrumpe el scroll antes de la primera palabra.
- **Cuándo usarlo:** cualquier formato visual; cuando el producto/proceso es vistoso.
- **Por qué funciona:** el movimiento/contraste visual es la interrupción más rápida que existe (más rápida que leer o escuchar).
- **Ejemplos:**
  1. Verter, romper, rasgar, dejar caer o montar/desmontar algo en el frame 1.
  2. Antes/después en split-screen inmediato.
  3. Un plano que "no encaja" (escala, color o lugar inesperado).
- **Plantilla de guion:** *Hook (visual):* acción física → *Verbal (entra en s. 1–2):* nombra el porqué → *Desarrollo → Payoff → CTA.*
- **Dirección visual:** sujeto que llena el cuadro; movimiento real; nada de intro/logo/saludo.
- **Guía de edición:** el sonido del impacto (`E-06`) sincronizado al frame de la acción.
- **Estado:** VALIDATED (Claude, Gemini). · **Variable de testeo:** la acción visual de apertura.

### `H-11` · Recompensa rápida
- **Capa/Tipo:** Hook · gratificación inmediata.
- **Idea central:** Prometes un beneficio aplicable **hoy mismo**, con resultado casi instantáneo.
- **Cuándo usarlo:** quick tips, demos, performance.
- **Por qué funciona:** deseo de gratificación inmediata; minimiza el "tiempo hasta el resultado" (denominador de la Ecuación de Valor).
- **Ejemplos:**
  1. "Cambia este ajuste en tu pasarela de pago hoy y la conversión sube ya."
  2. "Truco de 5 segundos para que tus subtítulos retengan más."
  3. "Haz esto antes de publicar y tu Reel arranca mejor."
- **Plantilla de guion:** *Hook:* "Haz esto hoy. El resultado es inmediato." → *Desarrollo:* el paso único → *Payoff:* muestra el resultado → *CTA.*
- **Dirección visual:** demuestra el beneficio **dentro del vídeo** (no solo lo afirmes).
- **Guía de edición:** ritmo ágil; el "antes→después" del beneficio en pantalla.
- **Estado:** VALIDATED (Gemini, DeepSeek). · **Variable de testeo:** la promesa de rapidez.

### `H-12` · Narrativa de acción ("Mírame transformar X")
- **Capa/Tipo:** Hook · proceso + satisfacción.
- **Idea central:** Anuncias una transformación visual y la ejecutas a la vista.
- **Cuándo usarlo:** procesos satisfactorios, antes/después, cocina, edición, producto.
- **Por qué funciona:** conexión visual de proceso + satisfacción de la transformación.
- **Ejemplos:**
  1. "Mírame convertir estos vegetales olvidados en un aderezo gourmet en 3 minutos."
  2. "Mírame pasar este clip plano a un look cinematográfico."
  3. "Mírame montar este set de rodaje completo con una sola maleta."
- **Plantilla de guion:** *Hook:* "Mírame transformar [A] en [B]." → *Desarrollo:* proceso acelerado → *Payoff:* resultado → *CTA.*
- **Dirección visual:** mostrar estado inicial (A) en s. 0–1 para anclar el contraste.
- **Guía de edición:** velocidad de corte acelerada / speed ramp (`E-07`) en el proceso.
- **Estado:** UNIQUE→VALIDATED (Gemini; solapa con formato proceso). · **Variable de testeo:** el "A→B".

### `H-13` · Comparación / Contraste
- **Capa/Tipo:** Hook · decisión.
- **Idea central:** Enfrentas dos opciones/métodos con un criterio claro.
- **Cuándo usarlo:** audiencia en fase de elección; reviews; MOFU/BOFU.
- **Por qué funciona:** la comparación da marco de decisión y resuelve la duda "¿cuál elijo?".
- **Ejemplos:**
  1. "Cámara de 500 € vs 5.000 €: ¿puedes notar la diferencia?"
  2. "Hice lo mismo de 2 formas. Una funcionó 10x mejor."
  3. "Meta Ads vs Google Ads para captar leads de máster: cuándo cada uno."
- **Plantilla de guion:** *Hook:* "[A] vs [B]: cuál elegir si [criterio]." → *Desarrollo:* criterios → *Payoff:* veredicto → *CTA.*
- **Dirección visual:** split-screen o A/B alternado.
- **Guía de edición:** etiqueta clara A/B; no reveles el ganador hasta el final si usas tease.
- **Estado:** VALIDATED (Claude, DeepSeek). · **Variable de testeo:** el criterio de decisión.

### `H-14` · POV (punto de vista)
- **Capa/Tipo:** Hook · auto-relevancia + inmersión.
- **Idea central:** "POV: [situación ultra-específica]" pone al espectador dentro de la escena.
- **Cuándo usarlo:** nativo de TikTok/Reels; relatable, humor, demostración.
- **Por qué funciona:** inmersión y reconocimiento ("ese soy yo / así me siento").
- **Ejemplos:**
  1. "POV: eres el que siempre arruina las fotos grupales… hasta que aprendes esta pose."
  2. "POV: descubres la herramienta que tu competencia oculta."
  3. "POV: es lunes y tu cuenta de ads amaneció con el CPL por las nubes."
- **Plantilla de guion:** *Hook:* "POV: [situación]." → *Escena:* la representas → *Revelación/Payoff → CTA.*
- **Dirección visual:** cámara subjetiva o encuadre que sitúe al espectador como protagonista.
- **Guía de edición:** texto "POV:" quemado desde el frame 1.
- **Estado:** VALIDATED (DeepSeek, Claude, Manus). · **Variable de testeo:** especificidad del POV.

### `H-15` · Familiaridad / Reencuadre
- **Capa/Tipo:** Hook · reconocimiento → curiosidad.
- **Idea central:** Usas algo muy reconocible como gancho y luego lo reencuadras.
- **Cuándo usarlo:** trend-jacking, marca, cuando hay un objeto/marca/icono asociable.
- **Por qué funciona:** el cerebro prefiere lo que reconoce; el reencuadre abre la curiosidad.
- **Ejemplos:**
  1. "Esto fue un símbolo de estatus… hasta que pasó esto."
  2. "Reconoces este logo. Lo que no sabes es por qué casi quiebra."
  3. "Todos usan esta plantilla de Canva. Por eso ya no funciona."
- **Plantilla de guion:** *Hook:* objeto/marca reconocible + giro → *Desarrollo:* el reencuadre → *Payoff → CTA.*
- **Dirección visual:** el elemento reconocible llena el frame 1.
- **Guía de edición:** el "giro" verbal/visual cae rápido tras el reconocimiento.
- **Estado:** UNIQUE (Claude). · **Variable de testeo:** el elemento de anclaje.

### `H-16` · Midway / Secondary hook
- **Capa/Tipo:** Hook · reset de atención a mitad.
- **Idea central:** Un segundo gancho insertado en el valle de retención del medio del vídeo.
- **Cuándo usarlo:** vídeos >20 s y long-form; donde la curva cae a mitad.
- **Por qué funciona:** desafía y reinicia la atención justo cuando empieza a caer (técnica MrBeast).
- **Ejemplos:**
  1. "El 90% deja de ver aquí, pero este es el paso que de verdad importa."
  2. "Si has llegado hasta aquí, esto es lo que nadie más te va a contar."
  3. "Y aquí viene lo que cambió todo…"
- **Plantilla de guion:** insertar en el minuto/valle: frase-reto + promesa renovada.
- **Dirección visual:** cambio de plano/ubicación que marque "nuevo capítulo".
- **Guía de edición:** colócalo donde la analítica muestre la caída; refuerza con `E-08` (recurrencia de estímulo del hook inicial).
- **Estado:** VALIDATED (Manus/MrBeast, Gemini). · **Variable de testeo:** posición del segundo hook.

### `H-17` · Teoría alternativa
- **Capa/Tipo:** Hook · intriga conceptual.
- **Idea central:** Planteas una hipótesis personal poco convencional, en tono conversacional.
- **Cuándo usarlo:** marca personal, pensamiento de autor, contenido "founder".
- **Por qué funciona:** intriga + validación filosófica + cercanía (no suena a libreto).
- **Ejemplos:**
  1. "Tengo la teoría de que cuando dejas de perseguir clientes, el algoritmo orgánico se activa a tu favor."
  2. "Mi hipótesis: la cultura de empresa la define quién NO contratas."
  3. "Creo que el contenido aburrido convierte mejor que el viral. Te explico."
- **Plantilla de guion:** *Hook:* "Tengo la teoría de que [hipótesis]." → *Desarrollo:* el razonamiento → *Payoff → CTA: debate.*
- **Dirección visual:** entorno natural, conversacional; nada corporativo.
- **Guía de edición:** tono espontáneo; menos pulido = más credibilidad.
- **Estado:** UNIQUE (Gemini). · **Variable de testeo:** la hipótesis.

### Banco de fórmulas de hook (para rellenar y rotar)
> Uso: elige 5–10 que encajen con tu tono, escribe 5 variaciones de cada una en TU voz, y rota. Repetir siempre la misma fórmula entrena a la audiencia a saltarse tu apertura.

- "Todo lo que crees saber sobre [tema] está mal." · "Casi [mal resultado] hasta que descubrí esto…" · "Esto es lo que [los expertos de X] no te cuentan." · "¿Y si te dijera que [afirmación inesperada]?" · "Hice [resultado extremo] en [poco tiempo] haciendo esto." · "Como [profesión] con [X] años, esta es mi opinión." · "Deja de hacer [práctica común]. Esto es lo que funciona." · "Si te cuesta [problema], esto es para ti." · "Todo el mundo hace esto menos tú." · "[Nº] cosas que ojalá supiera antes de [hito]." · "Esta herramienta gratis hace lo que yo pagaba [X] €/mes." · "Opinión impopular: [afirmación]." · "[Opción A] vs [Opción B]: cuál elegir si [criterio]." · "POV: [situación ultra-específica]."

---

# CAPA 2 — ESTRUCTURAS NARRATIVAS (`S-`)

> El esqueleto entre el hook y el cierre. Casi todas se montan sobre la base **Hook → Cuerpo → Payoff**. El mismo tema con estructura A vs B rinde distinto: la estructura es una variable de testeo.

### `S-01` · Hook → Cuerpo → Payoff (base universal)
- **Tipo:** estructura base. · **Idea:** la estructura mínima de todo corto. · **Cuándo:** si dudas, empieza aquí. · **Por qué:** cumple la expectativa del hook con una resolución; es el patrón que el cerebro espera.
- **Plantilla:** Hook (para el scroll) → Cuerpo (valor/historia) → Payoff (resolución/recompensa) → CTA opcional.
- **Visual/Edición:** ver Capa 6. · **Estado:** VALIDATED (todas).

### `S-02` · Hook → Problema → Solución → CTA
- **Tipo:** valor/persuasión. · **Idea:** columna vertebral del contenido útil y de muchos virales. · **Cuándo:** tutoriales, tips, demos. · **Por qué:** problema reconocible → alivio (solución) = arco de satisfacción rápido.
- **Plantilla:** Hook → expones el problema → das la solución → CTA.
- **Estado:** VALIDATED (todas). · **Variable:** especificidad del problema.

### `S-03` · AIDA (Atención · Interés · Deseo · Acción)
- **Tipo:** persuasión / venta. · **Cuándo:** audiencias frías (TOFU), lanzamientos, awareness. · **Por qué:** lleva al usuario de forma progresiva de la atención al deseo y a la acción.
- **Plantilla con timings (corto):** Atención (0–2 s) · Interés (2–8 s) · Deseo (8–20 s) · Acción (últimos 3–5 s).
- **Plantilla (60–70 s, paid):** 00–10 Atención · 10–35 Interés (datos del nicho) · 35–60 Deseo (beneficios) · 60–70 Acción.
- **Estado:** VALIDATED (todas). · **Variable:** longitud de la fase Deseo.

### `S-04` · PAS (Problema · Agitación · Solución)
- **Tipo:** persuasión por empatía. · **Cuándo:** reviews, contenido que resuelve un dolor; MOFU. · **Por qué:** agitar el dolor eleva el valor percibido de la solución.
- **Plantilla:** Problema → Agitación (lo haces más urgente/real) → Solución → (CTA).
- **Plantilla (paid 85 s):** 00–15 Problema · 15–35 Agitación · 35–60 Solución · 60–75 Prueba social · 75–85 CTA.
- **Ejemplo:** "¿Tus vídeos se ven planos? (P) Si no corriges la curva de contraste, pierdes retención y parece grabado con un móvil viejo (A). Con estos 3 ajustes en DaVinci logras un look cine en 2 minutos (S)."
- **Estado:** VALIDATED (todas). · **Variable:** intensidad de la agitación.

### `S-05` · PASTOR (Problema · Amplificación · Story/Solución · Testimonio · Oferta · Respuesta)
- **Tipo:** venta extendida. · **Cuándo:** problema claro + intención de cerrar; BOFU. · **Por qué:** PAS + prueba (testimonio) + oferta = persuasión completa.
- **Plantilla:** Problema → Amplificación → Story/Solución → Testimonio → Oferta → Respuesta (CTA).
- **Estado:** VALIDATED (Claude, Gemini). · **Variable:** el testimonio.

### `S-06` · BAB (Antes · Después · Puente)
- **Tipo:** transformación. · **Cuándo:** testimonios, casos de éxito, demos. · **Por qué:** revela problemas que el espectador no sabía que tenía y presenta tu método como el puente.
- **Plantilla:** Antes (mundo actual) → Después (mundo ideal) → Puente (tu método/producto como camino).
- **Visual:** split antes/después; el "después" debe ser deseable y creíble.
- **Estado:** VALIDATED (todas). · **Variable:** el "después" mostrado.

### `S-07` · Viaje del Héroe comprimido
- **Tipo:** storytelling. · **Cuándo:** marca, historia personal, mini-doc; 30–60 s o long-form. · **Por qué:** el arco de superación es memorable y universal.
- **Plantilla:** situación normal → reto/conflicto → lucha → transformación → nuevo estado. **(En negocio: el cliente es el héroe; la marca es el guía/mentor.)**
- **Estado:** VALIDATED (todas). · **Variable:** quién es el héroe (tú vs cliente).

### `S-08` · "Esto pasó → por lo tanto → pero" (But & So)
- **Tipo:** motor de tensión continua. · **Cuándo:** storytime, narrativa con varios beats; evita huecos de retención. · **Por qué:** encadenar beats con conectores de causa/giro ("…y por eso… pero entonces…") mete algo nuevo justo cuando la atención cae (motor de guion de South Park).
- **Plantilla:** Beat 1 → "por lo tanto" → Beat 2 → "pero" → Beat 3 → … → Payoff.
- **Estado:** UNIQUE (Claude). · **Variable:** densidad de giros.

### `S-09` · Loop / Bucle (incl. Circular y Subconscious Loop)
- **Tipo:** retención estructural. · **Cuándo:** relatos cortos <20–25 s; máxima completion. · **Por qué:** el final enlaza con el primer frame/frase → el espectador reinicia sin darse cuenta; el replay = vista extra + señal de calidad. Integra el **Subconscious Loop** (iniciar una idea y no cerrarla antes de un corte) y el cierre **Circular**.
- **Plantilla:** abre con frase/imagen X → desarrollo → cierra volviendo a X (callback verbal **+** match cut visual).
- **Edición:** diseña el último ~0,5 s para que encaje sonora y visualmente con el primer frame.
- **Estado:** VALIDATED (todas). · **Variable:** punto de enganche del loop.

### `S-10` · Listicle / Numerada (con countdown tease)
- **Tipo:** educación/entretenimiento. · **Cuándo:** tips, recopilaciones; alto guardado. · **Por qué:** ritmo consistente + promesa clara de payoff; "el número [X] me cambió la vida" retiene hasta el final.
- **Plantilla:** Hook numérico → ítem 1 → ítem 2 → … (cada uno mini-autoconclusivo) → ítem estrella al final → CTA guardar.
- **Estado:** VALIDATED (todas). · **Variable:** orden de los ítems.

### `S-11` · Open loop / Cliffhanger encadenado
- **Tipo:** retención. · **Cuándo:** cuando quieres "deuda informativa" durante todo el vídeo. · **Por qué:** abres bucles sin cerrar y los resuelves al final → tensión sostenida.
- **Plantilla:** abre bucle A → abre bucle B → (cuerpo) → cierras A y B al final.
- **Estado:** VALIDATED (todas). · **Variable:** nº de bucles abiertos.

### `S-12` · FAB (Feature · Advantage · Benefit)
- **Tipo:** producto/demo. · **Cuándo:** conectar especificación con "¿qué gano yo?". · **Por qué:** traduce características técnicas a beneficio sentido.
- **Plantilla:** Característica → Ventaja → Beneficio (por cada atributo clave).
- **Estado:** VALIDATED (Claude, Gemini-implícito). · **Variable:** orden característica↔beneficio.

### `S-13` · Mito → Verdad → Aplicación
- **Tipo:** autoridad. · **Cuándo:** educación; dispara comentarios. · **Por qué:** derribar una creencia construye autoridad y engagement.
- **Plantilla:** Mito (creencia común) → Verdad (con evidencia) → Aplicación (cómo usarla) → CTA.
- **Estado:** VALIDATED (DeepSeek, Claude). · **Variable:** el mito.

### `S-14` · Q&A / Pregunta → Respuesta progresiva
- **Tipo:** comunidad/educación. · **Cuándo:** series ("respondiendo comentarios"). · **Por qué:** responde una duda real por capas; bueno para serialización.
- **Plantilla:** lanzas la pregunta de la audiencia → respondes en capas → CTA "deja tu pregunta".
- **Estado:** VALIDATED (DeepSeek, Claude). · **Variable:** la pregunta elegida.

### `S-15` · Comparación A vs B
- **Tipo:** decisión. · **Cuándo:** audiencia eligiendo; reviews. · **Por qué:** alto valor cuando hay que decidir.
- **Plantilla:** plantea A y B → criterios → veredicto con condición ("elige A si…").
- **Estado:** VALIDATED (todas). · **Variable:** criterio decisivo.

### `S-16` · Tutorial / Proceso paso a paso
- **Tipo:** educación evergreen. · **Cuándo:** "cómo hacer X"; alto guardado, construye autoridad. · **Por qué:** valor tangible y replicable; funciona con VO grabada después.
- **Plantilla:** Hook (muestra el **resultado final** 2 s) → paso 1 → paso 2 → … → resultado → CTA guardar.
- **Estado:** VALIDATED (todas). · **Variable:** nº de pasos / mostrar resultado al inicio sí/no.

### `S-17` · STAR (Situación · Tarea · Acción · Resultado)
- **Tipo:** caso de éxito/testimonio. · **Cuándo:** demostrar resultados con narrativa. · **Por qué:** estructura el "antes/cómo/resultado" de forma creíble.
- **Plantilla:** Situación → Tarea → Acción → Resultado (con dato).
- **Estado:** VALIDATED (Claude, Gemini-ACC). · **Variable:** el resultado cuantificado.

### `S-18` · SPIN (Situación · Problema · Implicación · Necesidad-beneficio)
- **Tipo:** venta consultiva. · **Cuándo:** B2B, ventas de alto valor. · **Por qué:** revela la necesidad por lógica, no por presión.
- **Plantilla:** Situación → Problema → Implicación (coste de no resolver) → Necesidad-beneficio → CTA.
- **Estado:** VALIDATED (Claude, Gemini). · **Variable:** la "implicación".

### `S-19` · 4 Ps (Picture · Promise · Prove · Push)
- **Tipo:** venta directa. · **Cuándo:** anuncios de respuesta directa; BOFU. · **Por qué:** combina escenario aspiracional + prueba + impulso final.
- **Plantilla:** Picture (escenario deseado) → Promise (qué lograrás) → Prove (testimonio/dato) → Push (CTA asertivo).
- **Estado:** UNIQUE (Gemini). · **Variable:** la prueba.

### `S-20` · SLAP (Stop · Look · Act · Purchase)
- **Tipo:** compra de impulso. · **Cuándo:** productos baratos/impulsivos; performance. · **Por qué:** camino de descubrimiento ágil → conversión directa.
- **Plantilla:** Stop (interrumpe) → Look (muestra producto) → Act (instrucción) → Purchase (oferta/CTA).
- **Estado:** UNIQUE (Gemini). · **Variable:** la oferta.

### `S-21` · Framework Pixar ("Érase una vez… Hasta que finalmente")
- **Tipo:** storytelling de cambio. · **Cuándo:** narrativas de transformación, marca. · **Por qué:** seis pasos que el cerebro reconoce como "historia completa".
- **Plantilla:** 1) Érase una vez (estado actual) · 2) Todos los días (rutina) · 3) Un día (incidente) · 4) Debido a eso (consecuencia 1) · 5) Debido a eso (consecuencia 2) · 6) Hasta que finalmente (nueva realidad).
- **Estado:** UNIQUE (Manus). · **Variable:** el incidente incitador.

### `S-22` · StoryBrand SB7
- **Tipo:** venta clara. · **Cuándo:** vídeos de ventas, landings. · **Por qué:** claridad absoluta; el cliente es el héroe y la marca el guía.
- **Plantilla:** Personaje (cliente) → Problema → Guía (marca) → Plan → Llamado a la acción → evita el Fracaso → logra el Éxito.
- **Estado:** UNIQUE (Manus). · **Variable:** el "plan" ofrecido.

### `S-23` · HIVE (Hook · Intro · Value · End) — long-form
- **Tipo:** estructura de vídeo educativo largo (Ali Abdaal). · **Cuándo:** YouTube educativo/tutoriales. · **Por qué:** ordena el vídeo largo en bloques claros.
- **Plantilla:** Hook → Intro (promesa/roadmap) → Value (cuerpo) → End (resumen + CTA).
- **Estado:** UNIQUE (Manus). · **Variable:** la promesa de la Intro.

### `S-24` · HOT (Hook mini · Outline · Takeaway) — por sección
- **Tipo:** micro-estructura para CADA sección de un vídeo largo. · **Cuándo:** evitar valles de retención dentro de long-form. · **Por qué:** cada sección se auto-vende como un mini-vídeo.
- **Plantilla (por sección):** mini-Hook → Outline (qué verás) → Takeaway (conclusión).
- **Estado:** UNIQUE (Manus). · **Variable:** dónde colocar mini-hooks.

### `S-25` · Retención MrBeast (Subconscious loops · Roadmap · Secondary hook)
- **Tipo:** retención de alto presupuesto/entretenimiento. · **Cuándo:** retos, entretenimiento masivo, long-form ambicioso. · **Por qué:** combina bucles subconscientes + hoja de ruta explícita + segundo hook a mitad (`H-16`).
- **Plantilla:** Roadmap inicial ("voy a hacer X, Y, Z") → bucles abiertos → secondary hook en el valle → pago de todos los bucles.
- **Estado:** UNIQUE (Manus). · **Variable:** posición del roadmap/secondary hook.

### `S-26` · In Media Res
- **Tipo:** storytelling. · **Cuándo:** historias con clímax fuerte. · **Por qué:** empezar en el punto álgido crea curiosidad inmediata.
- **Plantilla:** abre en el momento más álgido → corte → "pero todo empezó [tiempo] antes" → desarrollo → vuelves al clímax → resolución.
- **Ejemplo:** "Estaba a punto de perder 10k€… (negro) …pero todo empezó 3 meses antes."
- **Estado:** VALIDATED (DeepSeek). · **Variable:** punto de entrada.

### `S-27` · Montaña rusa emocional
- **Tipo:** retención por ritmo. · **Cuándo:** entretenimiento de alta retención. · **Por qué:** un giro/chiste/revelación cada 20–30 s evita la planicie emocional.
- **Plantilla:** alterna altos y bajos rápidos; cada beat cambia el tono.
- **Estado:** VALIDATED (DeepSeek; solapa con `S-08`/Capa 6). · **Variable:** frecuencia de giros.

### `S-28` · SCQA (Situación · Complicación · Pregunta · Respuesta)
- **Tipo:** estructura analítica/persuasiva. · **Cuándo:** B2B, contenido de consultoría, explainers. · **Por qué:** marco lógico que conduce a la respuesta como conclusión inevitable.
- **Plantilla:** Situación (statu quo) → Complicación (qué lo rompe) → Pregunta (qué hacer) → Respuesta (tu solución).
- **Estado:** UNIQUE (ChatGPT). · **Variable:** la complicación.

### `S-29` · Unboxing / Primeras impresiones
- **Tipo:** estructura-formato de conversión. · **Cuándo:** producto físico; BOFU. · **Por qué:** mostrar tangibilidad, empaque y primeras reacciones reduce la fricción de compra.
- **Plantilla (paid 70 s):** 00–10 gancho físico → 10–25 contexto del problema → 25–50 desembalaje + sensaciones + características → 50–60 demo en uso → 60–70 veredicto + CTA.
- **Estado:** UNIQUE (Gemini; reforzado por DeepSeek "unboxing+review"). · **Variable:** orden características↔reacción.

### `S-30` · Video-Ensayo (long-form)
- **Tipo:** autoridad profunda. · **Cuándo:** cultura, tecnología, psicología; YouTube. · **Por qué:** tesis + evidencia + contrapunto construye autoridad y retención por argumento.
- **Plantilla:** tesis → argumentos con evidencia visual → contrapunto → conclusión.
- **Estado:** VALIDATED (DeepSeek). · **Variable:** fuerza de la tesis inicial.

---

# CAPA 3 — FORMATOS DE PRODUCCIÓN (`F-`)

> El "cómo se ve / cómo se graba". Decide coste, escalabilidad y estética. Misma estructura + mismo ángulo rinden distinto según el formato → testea el formato como variable aparte. Las reglas de shots/edición transversales viven en la Capa 6; aquí va lo propio de cada formato.

| ID | Formato | Idea central | Cuándo usarlo | Por qué funciona | Coste/Escala |
|----|---------|--------------|---------------|------------------|--------------|
| `F-01` | **Talking head (a cámara)** | Sales hablando directo a cámara | Tips, opinión, anuncios | Cara + tono = conexión rápida | Bajo / alta |
| `F-02` | **VO sobre b-roll** | Grabas imágenes, narras encima después | Vlogs editados, BTS, procesos | Máximo control de guion | Medio / alta |
| `F-03` | **Combo (cámara + b-roll)** | Talking head con b-roll intercalado | Contenido de valor "pro" | Ritmo + autoridad; el estándar | Medio / media |
| `F-04` | **POV** | Muestras tu perspectiva/lo que ves | Relatable, demo, humor | Inmersión nativa de TikTok | Bajo / alta |
| `F-05` | **Green screen / react** | Te pones sobre imagen/noticia/tweet/gráfico | React, trend-jacking, comentar datos | Rápido de producir; oportuno | Muy bajo / muy alta |
| `F-06` | **Texto en pantalla / faceless** | Sin cara: rótulos + b-roll/stock + música/VO | Volumen, anonimato | Escalable y anónimo | Bajo / muy alta |
| `F-07` | **Storytime** | Narras una historia con gancho | Conexión, marca personal | Alta retención si hay tensión | Bajo / alta |
| `F-08` | **Tutorial / screen-rec / demo** | Grabación de pantalla o proceso paso a paso | Software, "cómo usar", workflows | Valor tangible, alto guardado | Bajo / alta |
| `F-09` | **Day-in-the-life / vlog** | Un día/semana documentado | Conexión y aspiración | Parasocial + aspiracional | Medio / media |
| `F-10` | **BTS (detrás de cámaras)** | El proceso, lo imperfecto, el making-of | Transparencia de marca | Transparencia → confianza | Bajo / alta |
| `F-11` | **UGC (estilo usuario)** | Parece grabado por un cliente real, no "publicidad" | Performance, ads | El formato "orgánico" suele rendir más que el pulido | Bajo / alta |
| `F-12` | **Clips / recopilaciones** | Trozos de podcast, directo, charla | Repurposing de contenido largo | Reutiliza activos existentes | Muy bajo / muy alta |
| `F-13` | **Tendencias (audio/baile/reto)** | Te montas sobre un trend viral | Alcance rápido | Distribución por la ola del trend | Bajo / alta (efímero) |
| `F-14` | **Sketch / skit** | Mini-escena guionizada, humor/relatable | Compartibilidad | Alto potencial de share | Medio / media |
| `F-15` | **Entrevista / micro-doc / street** | Preguntas a gente/experto | Variedad de voces, autoridad | Ritmo por edición, credibilidad | Medio / media |
| `F-16` | **Carrusel-a-vídeo / slideshow** | Secuencia de imágenes con texto + música | Tutoriales estáticos, photo dump | Producción mínima, alto guardado | Muy bajo / muy alta |
| `F-17` | **ASMR / proceso satisfactorio** | Sonido/visual hipnótico (cocina, limpieza, unboxing) | Retención sensorial | Satisfacción mantiene la vista | Bajo / media |
| `F-18` | **Time-lapse / antes-después visual** | Transformación acelerada | Procesos, resultados físicos | Contraste inmediato = hook visual | Bajo / media |
| `F-19` | **Faceless con IA** | Guion + voz IA + stock + subtítulos auto | Volumen, testeo masivo sin grabar | Escala sin rodaje | Muy bajo / máxima |
| `F-20` | **Cinematográfico / marca** | VO sobre b-roll cuidado, atmósfera | Lanzamientos, branding | Atmósfera y deseo aspiracional | Alto / baja |

**Notas de ejecución por familia:**
- **Faceless/UGC/IA (`F-06`, `F-11`, `F-19`)** son los caballos de batalla del **volumen de testeo** en paid: máxima cantidad de variantes a bajo coste.
- **Combo (`F-03`)** es el default de contenido de valor con marca personal.
- **Cinematográfico (`F-20`)** prioriza atmósfera sobre densidad informativa; reservado para lanzamiento (encaja con el rodaje desierto/jewelry y el registro "marca").
- En vertical 9:16, **prioriza inserts/close-ups** (Capa 6, b-roll) sobre planos amplios.

**Estado:** todos VALIDATED (catálogo Claude + DeepSeek; UGC/faceless reforzados por Gemini para paid).

---

# CAPA 4 — ÁNGULOS Y TIPOS DE CONTENIDO (`A-`)

> El "para qué". Define la intención (entretener/educar/convertir) y la fase de funnel. El ángulo se recombina con cualquier estructura y formato.

### 4.1 La Content Marketing Matrix (brújula de intención)

| Cuadrante | Trabajo que hace | Fase de funnel | Formatos típicos |
|-----------|------------------|----------------|------------------|
| **Entretener** | Captar atención (emoción) | Top / awareness | Viral, humor, trends, sketch (`F-13/14`) |
| **Inspirar** | Conexión emocional, deseo | Top–Mid | Historias, testimonios, transformación (`F-07/09/20`) |
| **Educar** | Autoridad y confianza (razón) | Mid / consideración | Tutorial, how-to, mito-verdad, datos (`F-08/03`) |
| **Convencer** | Empujar a la acción (razón) | Bottom / decisión | Demo, comparación, prueba social, caso (`F-11`, `S-29`) |

> **Regla:** equilibra la parrilla entre los 4 cuadrantes. Faltarte uno = hueco en el funnel.

### 4.2 Rotación de parrilla: Content buckets + Pilares 4H

- **6 buckets clásicos (tipos, no temas):** educación · inspiración · personal · promoción · conversacional · entretenimiento.
- **Pilares 4H (Manus) para mantener la cuenta humana:** **H**eard (validar sentimientos) · **H**elpful (micro-tutoriales/hacks) · **H**umor (situaciones comunes con gracia) · **H**appenings (BTS y vida real).
> Cubre cada pilar de marca desde varios buckets/pilares para dar variedad y evitar saturación.

### 4.3 Mapeo a funnel (qué ángulo en cada fase)

- **TOFU (frío):** viral, tendencias, curiosidades, listas, retos, entretenimiento puro.
- **MOFU (educar/nutrir):** tutoriales avanzados, casos, comparativas, webinars, transformación.
- **BOFU (convertir):** demos, testimonios, BTS de la experiencia de cliente, FAQ, unboxing.

### 4.4 La Ecuación de Valor (Hormozi, *$100M Offers*) — brújula para diseñar ángulos

> **Valor = (Resultado soñado × Probabilidad percibida de logro) ÷ (Tiempo hasta el resultado × Esfuerzo y sacrificio)**

Los ángulos que más rinden **maximizan** resultado y prueba (numerador) y **minimizan** tiempo y esfuerzo percibidos (denominador). Por eso convierten fórmulas como *"cómo lograr [resultado grande] en [poco tiempo] sin [esfuerzo]"* o *"esta herramienta gratis hace lo que yo pagaba 200 €/mes"*.
- **Aplicación operativa:** al diseñar un test de ángulo, **ataca una variable distinta de la ecuación por variante**: uno sobre **magnitud del resultado**, otro sobre **rapidez** (↓tiempo), otro sobre **ausencia de esfuerzo** (↓sacrificio), otro sobre **probabilidad** (prueba/garantía). Así sabes qué palanca de valor mueve a TU audiencia.
- *Justificación (cap. Value Equation):* el contenido orgánico compite por atención igual que una oferta compite por la decisión de compra; las mismas variables que hacen irresistible una oferta hacen irresistible un ángulo.

### 4.5 Banco de ángulos (cada uno es un concepto testeable)

| ID | Ángulo | Idea / ejemplo | Cuadrante | Variable de valor (Hormozi) |
|----|--------|----------------|-----------|------------------------------|
| `A-01` | How-to / tutorial | "Cómo hacer X" | Educar | ↓Esfuerzo |
| `A-02` | Error / "deja de hacer X" | Aversión a la pérdida | Educar/Convencer | ↑Probabilidad |
| `A-03` | Mito-busting | "Lo que crees sobre X está mal" | Educar | ↑Probabilidad |
| `A-04` | Contrarian / hot take | Opinión a contracorriente | Entretener | — (engagement) |
| `A-05` | Listicle | "[N] cosas/errores/trucos" | Educar | ↑Resultado |
| `A-06` | Comparación | A vs B, barato vs caro | Convencer | ↑Probabilidad |
| `A-07` | Caso de estudio / resultados | "Cómo conseguimos [resultado]" | Convencer | ↑Resultado + Prueba |
| `A-08` | Transformación | De un estado a otro | Inspirar | ↑Resultado |
| `A-09` | Día en la vida / detrás de | Proceso y rutina | Inspirar | — (conexión) |
| `A-10` | Q&A / responder comentarios | Resolver dudas reales | Educar | ↓Esfuerzo |
| `A-11` | Review / análisis de producto | Honesto, pros/contras | Convencer | ↑Probabilidad |
| `A-12` | Reacción / react | A noticia, trend, dato | Entretener | — |
| `A-13` | Trend-jacking | Montarte sobre actualidad | Entretener | — (alcance) |
| `A-14` | Vulnerabilidad / confesión | Algo personal nunca contado | Inspirar | — (conexión) |
| `A-15` | Prueba social | Testimonios, números reales | Convencer | Prueba |
| `A-16` | "Lo que nadie te cuenta de [industria]" | Insider | Educar | ↑Probabilidad |
| `A-17` | Predicción / tendencia | "Lo que viene en [sector]" | Educar | ↑Resultado |
| `A-18` | Glosario / definición | Explicar un concepto del nicho | Educar | ↓Esfuerzo |
| `A-19` | Herramienta / recurso | "Esta app/plantilla hace X" | Educar | ↓Tiempo+Esfuerzo |
| `A-20` | Errores comunes (recopilación) | Lista de fallos | Educar | ↑Probabilidad |
| `A-21` | "X cosas que ojalá supiera antes de [hito]" | Experiencia condensada | Inspirar | ↓Tiempo (curva de aprendizaje) |
| `A-22` | Checklist / framework propio | Algo guardable | Educar | ↓Esfuerzo |
| `A-23` | Storytime con lección | Anécdota + aprendizaje | Inspirar | — |
| `A-24` | Debate / pregunta a la audiencia | Abrir conversación | Entretener | — (engagement) |

**Estado:** Matrix + funnel + ángulos VALIDATED (Claude/DeepSeek/Gemini). 4H UNIQUE (Manus). Ecuación de Valor VALIDATED y alineada al método del equipo.

---

# CAPA 5 — CTA (`C-`)

> El cierre es una variable aparte: mismo vídeo, distinto CTA, distinta acción. **Un solo CTA claro > tres CTAs diluidos.**

| ID | CTA | Cómo se formula | Cuándo usarlo | Señal que genera |
|----|-----|------------------|---------------|------------------|
| `C-01` | **Comentario (comment bait)** | "Comenta [palabra/emoji]", "¿tú qué opinas?", encuesta binaria | Crecer alcance orgánico | Comentarios (señal fuerte) |
| `C-02` | **Guardado (save bait)** | "Guárdalo para cuando…", checklist, framework | Contenido de referencia/valor | Guardados (señal de valor) |
| `C-03` | **Compartir** | "Etiqueta a quien necesite esto" | Contenido relatable/útil | Shares (alcance) |
| `C-04` | **Seguir (con razón)** | "Sígueme y te enseño la parte 2" | Construir audiencia | Follows |
| `C-05` | **Click / enlace (soft)** | "Link en bio" — **después** de entregar valor | Tráfico/conversión | Clics de salida |
| `C-06` | **Loop-back** | "Vuelve a verlo y fíjate en [detalle]" | Forzar replay | Replays (señal de calidad) |
| `C-07` | **Serie / próximo vídeo** | "Esto es la parte 1 de 3" | Retención de canal | Vistas sucesivas |
| `C-08` | **Conversión dura** | "Compra ahora", "Reserva tu plaza", "Solicita info" | BOFU, paid | Conversión |

- **Soft vs hard:** en awareness, CTA blando o sin CTA explícito (estilo marca). En decisión, CTA **duro y específico**. Testea ambos por fase.
- **Registro institucional (UFV):** CTAs sobrios ("Solicita información", "Conoce el plan de estudios"), sin hype ni superlativos.
- **Estado:** VALIDATED (Claude + todas). · **Variable de testeo:** tipo de CTA, momento (antes/después del valor), soft vs hard.

---

# CAPA 6 — EDICIÓN Y RETENCIÓN (`E-`)

> Capa transversal: no cuenta historia, evita que la curva de retención se desplome. Cada técnica es testeable de forma aislada y aplica a todos los formatos.

### 6.1 Las 7 interrupciones de patrón (toolkit técnico)

Inserta una interrupción **visual, auditiva o narrativa cada 3–5 s**. Menos = se percibe lento; demasiadas sin justificación = saturación.

| ID | Interrupción | Implementación técnica | Cuándo |
|----|--------------|------------------------|--------|
| `E-01` | **Zoom súbito (push in / pull out)** | Cambio abrupto de escala (plano medio → detalle) sobre una transición verbal o énfasis. Los zooms lentos NO interrumpen. | Énfasis, remate de frase |
| `E-02` | **Jump cut limpio** | Elimina pausas, muletillas y silencios; recorta cada 2–4 palabras. | Talking head, entrega ágil |
| `E-03` | **Cambio de ángulo de cámara** | Alterna perspectivas o mueve al presentador (p. ej. giro de 45°). | Evitar monotonía del plano fijo |
| `E-04` | **Texto pop-up animado** | Palabras clave animadas sincronizadas con la locución. | Captar el scroll en mute |
| `E-05` | **Cambio de etalonaje (LUT change)** | Variación de paleta o paso a B/N para marcar error/frustración/pensamiento. | Momento de error o contraste |
| `E-06` | **SFX punch (golpe de sonido)** | Whoosh/pop/hit sincronizado exacto al frame de corte o aparición de palabra. | Cada transición clave |
| `E-07` | **Speed ramp (rampa de velocidad)** | Acelera procesos predecibles, ralentiza revelaciones. | Demos, transformaciones |

### 6.2 Reglas de ritmo y atención

- **Regla de 3 s:** entrega curiosidad/novedad/emoción antes del segundo 3.
- **Micro-cortes (0,4–1,2 s)** en los primeros 2–3 planos para "despertar" al scroller.
- **Corte cada 3–5 s** tras el hook; **reset de atención cada 5–8 s** (cambio de ángulo, punch-in, dato, pregunta, rótulo nuevo).
- **Sin dead air:** nunca silencio muerto; rellena transiciones con J-cut/L-cut, whoosh, text pop o b-roll.
- **Open loops verbales:** "y al final te enseño el error que casi me cuesta el cliente".

### 6.3 Tipos de b-roll (para combo y VO)

- **Establishing:** plano amplio que sitúa (lugar, sala, ciudad).
- **Insert / close-up:** detalle (manos, pantalla, producto). **En 9:16, prioriza estos.**
- **Acción:** el proceso en curso (teclear, cocinar, montar).
- **Reacción / corte ambiental:** crea ritmo.
- **Time-lapse / cámara lenta:** la variación de velocidad = impacto visual.

### 6.4 Subtítulos (`E-04` aplicado)

- Quemados, alto contraste, sans-serif bold (Montserrat, Bebas Neue, Impact). La mayoría del scroll es en mute.
- La primera línea de texto debe **igualar la energía del hook hablado**.
- Estilo karaoke/animado (palabra por palabra) sube completion: capta audio-on y audio-off.
- Resalta palabras clave con color de acento; sincroniza la aparición con el ritmo del audio.

### 6.5 Loop e ingeniería de retención (`E-08`)

- **Loop:** diseña el último ~0,5 s para que encaje (visual + entonación) con el primer frame → replays automáticos.
- **Open loops de información:** promete una revelación al inicio y posponla hasta antes del CTA.
- **Recurrencia de estímulo (Zeigarnik):** repite un gráfico/color/sonido característico en el punto medio para reactivar la asociación del hook inicial (ata con `H-16` midway).

### 6.6 First-frame checklist (antes de publicar)

☐ Sujeto que llena el cuadro ☐ Texto de alto contraste (1–6 palabras) ☐ Algo en movimiento ☐ Nada de intro/logo/saludo ☐ El hook visual, de texto y verbal aterrizan juntos.

### 6.7 Plantilla de línea de tiempo (vídeo de conversión 30–45 s)

| Tiempo | Acción narrativa | Interrupción de patrón | Texto en pantalla | Audio/SFX |
|--------|------------------|------------------------|-------------------|-----------|
| 00:00–00:01 | Hook (detención del scroll) | Zoom súbito al rostro (`E-01`) | Línea 1 alto contraste (1–6 palabras) | Silencio 1 ms → diálogo a volumen normal |
| 00:01–00:02 | Respaldo visual rápido | Corte a B-roll / cambio de fondo | Línea 2 sincronizada | Whoosh/pop (`E-06`) en el corte |
| 00:02–00:03 | Consecuencia / prueba | Vuelta al presentador, ángulo 45° (`E-03`) | Métrica o dolor clave | Hit seco al aparecer el dato |
| 00:10–00:14 | Primer paso/argumento | Demo con speed ramp (`E-07`) | Texto que enumera el paso | Música entra con beat coincidente |
| 00:22–00:26 | Error/contraste | Split antes/después o B/N (`E-05`) | Tipografía roja de alerta | Corte de música = tensión |
| 00:33–00:38 | Recap + CTA | Zoom inverso lento → pantalla limpia | "Haz clic / Solicita info" | Música sube + SFX de confirmación |

### 6.8 Duración por plataforma (punto de partida — testear)

- **TikTok:** 15–34 s tendencias/entretenimiento; hasta 60 s para valor. · **Reels:** 30–60 s. · **Shorts:** ~60 s (más desarrollo educativo). · **<20–25 s** → mayor completion y loops más limpios. · **YouTube largo:** 5–15 min (estructurar con `S-23/24/25` para sostener ≥50%).

**Estado:** VALIDATED (7 interrupciones y timeline de Gemini; reglas de ritmo/b-roll/subtítulos/loop de Claude/Manus). · **Variables de testeo aislables:** densidad de cortes, estilo de subtítulo, presencia de loop, SFX sí/no.

---

## PARTE 3 — SISTEMA DE CLASIFICACIÓN (taxonomía para etiquetar y para IA)

### 3.1 Nomenclatura de IDs

Cada creativo se describe como una **receta de capas**:

```
[H-xx] + [S-xx] + [F-xx] + [A-xx] + [C-xx] + [E-xx...]
```

**Ejemplo real (Garett, UGC de conversión):**
`H-03` (coste/error revelado) + `S-04` (PAS) + `F-11` (UGC) + `A-11` (review) + `C-08` (conversión dura) + `E-02,E-04,E-06` (jump cut + subtítulos + SFX).

**Ejemplo real (UFV, registro institucional):**
`H-06` (autoridad/prueba) + `S-16` (tutorial/proceso "hecho → aplicabilidad → marco") + `F-03` (combo) + `A-07` (caso/resultados) + `C-08` soft ("Solicita información") + `E-03,E-04`.

> Este etiquetado es lo que permite la **analítica creativa por IA**: en lugar de "este vídeo funcionó", el sistema aprende "los creativos con `H-03` + `F-11` rinden +X% de Hook Rate en esta cuenta". Cada pieza publicada se etiqueta con su receta y su rendimiento.

### 3.2 Las 5 categorías del sistema (vista resumida)

| Categoría | Capa | Qué agrupa | Nº de conceptos |
|-----------|------|------------|-----------------|
| **Hooks** | 1 | Aperturas que paran el scroll | 17 familias + banco de fórmulas |
| **Story formats** | 2 | Esqueletos narrativos de guion | 30 estructuras |
| **Visual styles** | 3 | Formatos de producción | 20 formatos |
| **Conversion-oriented formats** | 4 | Ángulos por intención y funnel | Matrix + 24 ángulos |
| **Editing patterns** | 6 | Interrupciones y reglas de retención | 7 interrupciones + reglas |
| *(CTA)* | 5 | Cierres / acción | 8 tipos |

### 3.3 Reglas de clasificación limpia (para no contaminar datos)

1. **Una variable por test** (Parte 5). 2. **No mezcles formatos narrativos distintos en el mismo grupo de prueba**: si testeas un testimonio, varía solo su hook/CTA, no conviertas la mitad en sketch. 3. **Agrupa por tipologías homogéneas** y varía solo el elemento crítico. Así, si una pieza falla, sabes si fue el gancho o el formato, no una mezcla ambigua.

---

## PARTE 4 — MÉTRICAS DE DIAGNÓSTICO (análisis clínico de la retención)

> Decide por datos de comportamiento, no por apreciaciones artísticas. **Retención y completion > vistas** (las vistas sin retención no viralizan — métrica de vanidad, DISCARD como criterio de decisión).

### 4.1 Las 4 métricas clínicas (con fórmulas)

| Métrica | Qué mide | Fórmula | Diagnostica |
|---------|----------|---------|-------------|
| **Hook Rate / Thumbstop** | % que se detiene ≥3 s | (Reproducciones de 3 s ÷ Impresiones) × 100 | Calidad del **hook** (Capa 1) |
| **Hold Rate** | % de los que pasaron 3 s que llegan a 15 s | (Reproducciones de 15 s ÷ Reproducciones de 3 s) × 100 | Calidad de **transición + cuerpo** (Capas 2/6) |
| **ThruPlay Rate** | % que completa o supera 15 s | (ThruPlays ÷ Reproducciones totales) × 100 | Completion (⚠️ comparar solo entre vídeos de **igual duración**) |
| **Downstream CTR** | % que hace clic al destino | (Clics de salida ÷ Impresiones) × 100 | Fuerza de **cuerpo + CTA** (Capas 4/5) |

### 4.2 Métricas por capa (mide la capa correcta)

| Capa testeada | Métrica primaria | Señal de fallo |
|---------------|------------------|----------------|
| Hook | Hook Rate, retención 1s/3s | Caída fuerte en 1s = hook visual/audio débil |
| Estructura/cuerpo | Hold Rate, % medio visto, completion | Caída en mitad = ritmo/relleno o promesa incumplida |
| Ángulo/propuesta | Engagement cualificado, conversión | Mucho alcance, cero acción = ángulo no relevante |
| CTA | Guardados, compartidos, comentarios, clics, conversión | Vistas altas sin acción = CTA débil/ausente |

> No midas todo a la vez. Para hooks → retención temprana/CTR. Para mensaje → conversión. Para iteraciones → coste por resultado.

### 4.3 Lectura de la curva de retención (diagnóstico rápido)

- **Caída en el segundo 1:** el hook no interrumpió → pattern interrupt visual/audio más fuerte (`E-01`/`E-06`).
- **Caída en el segundo 3:** el hook paró el scroll pero la promesa es débil → reescribe la segunda cláusula del hook.
- **Caída en mitad:** ritmo lento/relleno o el cuerpo no cumple → más cortes, más open loops, inserta midway hook (`H-16`), recorta.
- **Sin caída + replays:** estructura en bucle funcionando → **escala el patrón**.

### 4.4 Matriz de diagnóstico (Hook Rate × Hold Rate → acción)

| Hook Rate | Hold Rate | Diagnóstico | Acción prioritaria |
|-----------|-----------|-------------|--------------------|
| **Bajo** (<25%) | **Bajo** (<30%) | Falla en todo: ni capta ni aporta | Reemplazar enfoque completo: nuevo hook + nueva estructura |
| **Bajo** (<25%) | **Alto** (>50%) | Buen cuerpo, hook aburrido | Mantener cuerpo intacto; grabar **3 variaciones de hook** para los primeros 3 s |
| **Alto** (>35%) | **Bajo** (<30%) | Gran hook, cuerpo no cumple | Ajustar transición s.3→s.10; recortar rodeos; más interrupciones de patrón |
| **Alto** (>35%) | **Alto** (>50%) | Ganador | **Escalar presupuesto** + producir variaciones iterativas del patrón |

### 4.5 KPIs orientativos por plataforma

| Formato | Duración | KPI clave | Objetivo orientativo |
|---------|----------|-----------|----------------------|
| TikTok/Reels | 15–60 s | Tiempo medio, % finalización, shares | Retención ≥70%, completion ≥50% |
| YouTube Shorts | 15–60 s | Igual + CTR miniatura | Retención >60% |
| YouTube largo | 5–15 min | Tiempo medio, retención final, CTR miniatura | Retención ~50%, CTR 5–10% |
| IG Feed/Reels | 15 s–1 min | Likes/comentarios/**guardados**, tiempo | Engagement >5% |
| IG Stories | 15 s/segm. | % completitud secuencial | ≥85% |
| Facebook Feed | 1–3 min | Tiempo, % completitud, shares | ≥20–30% finalización |

> ⚠️ Estos números son **rangos de hipótesis**, no constantes. Valídalos contra tus propias métricas por cuenta y nicho.

### 4.6 Límite del reporte nativo (paid)

Las campañas dinámicas (Advantage+, creativos dinámicos) dan datos del anuncio ganador **agregados**, pero no aíslan qué elemento (hook, copy, imagen) movió el resultado. Para aprendizajes accionables → **etiqueta activos (Parte 3.1)** o usa campañas con variables aisladas (Parte 5).

---

## PARTE 5 — SISTEMA DE TESTEO (convertir el catálogo en experimentos)

### 5.1 Principio núcleo: aísla UNA variable

Si cambias hook + visual + CTA a la vez, no sabrás qué movió el resultado. **Una variable por test; lo demás, constante.**

### 5.2 Concept testing vs Variation testing (en secuencia, no a la vez)

- **Concept testing:** pruebas un ángulo/formato *entero* nuevo (talking-head educativo vs storytelling cinematográfico). Buscas el **territorio ganador**.
- **Variation testing:** sobre el concepto ganador, cambias *un* elemento de bajo impacto (hook, CTA, primer plano, rótulo). **Refinas y exprimes.**

### 5.3 Orden de prioridad (siempre)

> **Hook → Formato/Visual → Ángulo → CTA → Longitud/Copy.** El hook controla el scroll-stop; sin scroll-stop, el resto no se ve.

### 5.4 Frameworks de testeo (elige según presupuesto)

| Framework | Composición | Volumen | Presupuesto idóneo | Cuándo |
|-----------|-------------|---------|--------------------|--------|
| **Matriz 3×3** | 3 ideas × 3 estilos de hook | 9 vídeos | Cualquiera (orgánico) | Punto de partida semanal |
| **3-2-1** | 3 hooks × 2 cuerpos × 1 CTA | 6 activos | Moderado (consolidación) | Validar hook y cuerpo aislados |
| **3-3-3** | 3 conceptos × 3 ejecuciones × 3 hooks | 27 activos | Alto (>$500k/mes) | Señales muy diferenciadas para el píxel |
| **3 Fases** | Pre-Flight → Nuevo vs BAU → Escalado | Variable | Todos (escalonado) | Aislar el sesgo de datos históricos |
| **Test espejo** | Mismo contenido, distinto hook, días distintos | 2–3 vídeos | Cualquiera | Aislar el hook con producción mínima |

### 5.5 Protocolo de testeo de hooks aislado (paid)

1. Selecciona **una** familia de hook (ej. `H-01` contradicción). 2. Produce **10 variaciones** usando solo esa familia, manteniendo **idénticos** cuerpo y CTA. 3. Distribúyelas 2 semanas en campañas controladas. 4. Compara alcance/retención/guardado contra las 2 semanas previas con hooks mixtos. 5. Repite con otras familias hasta identificar las **2 que rinden mejor** → quedan como plantillas base de la cuenta.

### 5.6 Las 3 fases de testeo en Ad Manager (paid, Meta)

- **Fase 1 — Pre-Flight:** comparar creativos nuevos **entre sí**, sin anuncios con historial que dominen la entrega. Escenarios: ASC+ (cuentas pequeñas, precisión ⋆) · CBO 1 anuncio/conjunto (⋆) · **ABO 1 concepto/conjunto (⋆⋆, gasto comparable)** · CBO con reglas de apagado a 2–3× CPA (⋆) · Cost Cap (⋆⋆⋆, cuentas grandes).
- **Fase 2 — Nuevo vs BAU:** el ganador de Fase 1 compite contra el mejor anuncio histórico ("control"). Escenarios: CBO de 2 conjuntos (⋆) · ABO comparación directa (⋆⋆) · Cost Cap de cohorte (⋆⋆⋆).
- **Fase 3 — Escalado y ciclo de vida:** introduce el validado en los conjuntos con **fatiga**; **no pauses** los históricos de golpe (desestabiliza el píxel); da tiempo de estabilización a ASC+/CBO.

### 5.7 Formato de hipótesis (obligatorio antes de rodar)

> *"Creo que [variable concreta] producirá [resultado esperado] frente a [control], medido por [métrica]."*
> Ej.: "Creo que un hook de contradicción numérica (`H-01`+`H-04`) superará al hook directo en +15% de Hook Rate."

### 5.8 Plan maestro de 4 semanas (una variable aislada por semana)

| Semana | Variable a aislar | Constante | Qué pruebas | Métrica |
|--------|-------------------|-----------|-------------|---------|
| 1 | **Hook** | Mismo tema, formato y CTA | 3 familias (`H-01` vs `H-03` vs `H-09`) × 3 temas | Hook Rate / retención 3s |
| 2 | **Formato** | Hook ganador, mismo ángulo | `F-01` vs `F-03` vs `F-06` | % medio visto + coste producción |
| 3 | **Ángulo** | Hook + formato ganadores | `A-01` vs `A-08` vs `A-07` (mismo tema) | Engagement cualificado / clics |
| 4 | **CTA** | Todo lo ganador anterior | `C-01` vs `C-02` vs `C-06` vs sin CTA | Guardados/compartidos/conversión |

> Tras 4 semanas tienes un **"stack ganador"** documentado (hook + formato + ángulo + CTA) para tu audiencia concreta, listo para escalar, y un backlog de variaciones para exprimirlo.

### 5.9 Cadencia, volumen y documentación

- **Volumen para aprender:** ~3–5 vídeos/semana en solitario; 7+ con equipo. Sin volumen no hay datos.
- **Una variable a la vez**, semanal o quincenal (paid: 2 semanas por hook).
- **Rota antes de la fatiga:** cuando la frecuencia sube y CPL/retención se deterioran, refresca (no esperes al desplome).
- **Swipe file:** cada vez que un vídeo te pare *a ti* el scroll, captúralo y anota qué fórmula (`H-xx`) usa.
- **Biblia creativa:** documenta wins **y** losses con su receta de IDs. El aprendizaje compuesto (qué responde TU audiencia) es la ventaja real, no el viral suelto.

---

## PARTE 6 — INSIGHTS CLAVE PARA ESCALAR

### 6.1 El creativo ES la segmentación (post-ATT)

Tras ATT, el control manual de audiencias perdió efectividad: hoy **el activo creativo es la principal palanca de segmentación**. El algoritmo (sistema Lattice de Meta, Entity IDs) lee cada frame, texto y ángulo para predecir a quién mostrarlo. Implicaciones:
- **Diversifica formatos, ángulos y estilos visuales** → distribuyes a distintos clústeres de audiencia sin canibalizar inventario.
- **No satures con variantes "visualmente idénticas":** el algoritmo las consolida y las obliga a competir entre sí, lo que **sube el CPM** y frena el aprendizaje.

### 6.2 La fatiga creativa es el problema #1 — el único antídoto es un flujo constante

La sobreexposición hunde el CTR y sube el coste de conversión. El único método de contención es un **flujo continuo de creativos validados** vía protocolo de testeo. No buscas un viral fortuito; instauras una **fábrica iterativa**.

### 6.3 Principio de modularidad extrema (el que más escala)

> **Un cuerpo + N extremos.** Mantén el **núcleo narrativo** (cuerpo del vídeo) fiel al estilo orgánico/auténtico del creador, y **optimiza matemáticamente solo los extremos** (hook y cierre/CTA) para el testeo.

Esto resuelve la gran contradicción del testeo creativo (producir muchas variantes sin perder esencia orgánica): consigues **credibilidad + alta conversión** a la vez, y multiplicas variantes a coste marginal. En la práctica: grabas 1 cuerpo y le acoplas 5–10 hooks (`H-xx`) y 2–3 CTAs (`C-xx`).

### 6.4 No mezcles tipologías en un grupo de prueba

Mezclar formatos narrativos distintos en el mismo *ad set* contamina los datos. Cada tipo de contenido mantiene su **matriz de variación aislada**: si testeas un testimonio, varía solo sus hooks/cierres sin alterar su narrativa.

### 6.5 Separa fases de prueba e inversión

No metas creativos no validados en las campañas de escala. El protocolo de fases (Pre-Flight → Nuevo vs BAU → Escalado) protege el presupuesto principal: solo los activos con alta probabilidad de conversión reciben gasto elevado.

### 6.6 La Ecuación de Valor como brújula permanente

Cada hook y ángulo debe atacar una variable de **Valor = (Resultado × Probabilidad) ÷ (Tiempo × Esfuerzo)**. Al diseñar un test, conscientemente reparte las variantes entre las 4 palancas para descubrir cuál mueve a tu audiencia.

### 6.7 Registro multi-cliente (el sistema es agnóstico; adapta el tono)

| Registro | Hooks | Estructura | CTA | Formatos |
|----------|-------|------------|-----|----------|
| **Institucional / sobrio** (educación superior, UFV) | Autoridad (`H-06`), mito-verdad (`H-05`), dato | Hecho → aplicabilidad → marco → CTA; `S-16`, `S-30` | Sobrios (`C-08` soft), sin superlativos | Talking head experto, micro-doc, tutorial (`F-03/15`) |
| **Respuesta directa / performance** (e-commerce, Garett) | Promesa/error/prueba social (`H-03/06/11`) | PAS/BAB (`S-04/06`), unboxing (`S-29`) | Duro y específico (`C-08`) | UGC y demo (`F-11/08`), prueba social arriba |
| **Marca / cinematográfico** (lanzamiento, jewelry) | Visuales y aspiracionales (`H-10/15`) | Viaje del héroe / open loop (`S-07/11`) | Blando o de marca (`C-04`) | VO sobre b-roll cuidado (`F-20`); ritmo y atmósfera mandan |

### 6.8 Guardarraíles operativos y legales (checklist, no opcional)

- **Derechos de audio:** la música de TikTok/IG está licenciada **solo dentro de la app**; para ads/YouTube usa royalty-free (Epidemic Sound) o música propia, o el catálogo autorizado de cada red.
- **Derechos de imagen:** autorización de personas identificables (clientes, UGC, empleados); permiso/atribución para clips de terceros.
- **Transparencia:** etiqueta publicidad/patrocinio (#ad) según normativa.
- **Contenido sensible:** maneja hooks polémicos (`H-09`) con tacto; evita temas controvertidos sin contexto.
- **Adaptación nativa por plataforma:** nunca subas un Reel a YouTube por copy/paste con la música pegada; integra el audio con las herramientas de cada app para evitar muteo/penalización.

---

## QUICK-START (cómo arrancar mañana)

1. **Elige el registro** del activo (institucional / performance / marca) → Parte 6.7.
2. **Selecciona la receta inicial:** 1 hook + 1 estructura + 1 formato + 1 ángulo + 1 CTA por sus IDs.
3. **Escribe la hipótesis** (5.7) antes de rodar.
4. **Aplica la modularidad extrema** (6.3): 1 cuerpo, varios hooks/CTAs.
5. **Lanza el plan de 4 semanas** (5.8), aislando una capa por semana.
6. **Diagnostica** con Hook Rate × Hold Rate (4.4) y la curva (4.3).
7. **Etiqueta cada pieza con su receta de IDs** (3.1) y registra win/loss en la biblia creativa → es lo que alimentará el análisis por IA.
8. **Escala el stack ganador** y refresca antes de la fatiga (6.2).

---

### Procedencia y base

Síntesis consolidada de 5 investigaciones (DeepSeek, Claude, Manus, ChatGPT, Gemini) sobre estructuras de vídeo, frameworks creativos y testeo de paid social, más marcos clásicos de copywriting (AIDA, PAS, PASTOR, BAB, FAB, STAR, SPIN, SCQA, 4Ps, SLAP, Hero's Journey, StoryBrand, Pixar) y de creative testing de performance. La Ecuación de Valor procede de *$100M Offers* (A. Hormozi). Los datos cuantitativos del sector (ventanas de 3 s, umbrales de retención, duraciones) son **rangos de referencia para hipótesis, no constantes**: valídalos contra tus propias métricas por cuenta y nicho.
