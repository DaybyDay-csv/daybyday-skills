---
name: skill-nicho-TEMPLATE
description: >-
  PLANTILLA de skill de nicho de ContentFlow. NO se usa directamente: se copia
  a skill-nicho/<nicho> y se rellena a partir del informe que produce
  PROMPT-AGENTE-ANALISIS.md tras analizar los referentes del nicho. Una vez
  rellena, la skill de nicho se carga SIEMPRE que el agente redactor escriba,
  revise o adapte contenido para un cliente de ese nicho —posts, reels,
  guiones, hooks, ángulos— junto a las skills de doctrina
  (breakthrough-advertising y direct-response-copy-engine) y a la skill de voz
  del cliente (skill-copy-<cliente>): la doctrina aporta la técnica, la skill
  de voz manda en CÓMO suena el cliente y esta skill manda en QUÉ EXIGE ESTE
  MERCADO (qué funciona, qué ángulos y estructuras están probados, nivel de
  consciencia y sofisticación). Ante conflicto, manda lo que el informe
  documenta; si el nicho ha cambiado, propón renovar esta skill en vez de
  contradecirla. Se renueva cada mes repitiendo el análisis. Todo lo que
  contiene procede del informe de análisis: donde el informe no traiga el dato
  se escribe "no consta" y nunca se inventa.
---

# Skill de nicho <NICHO>

Esta skill es el destilado mensual del mercado de <NICHO> para el agente
redactor de ContentFlow: qué funciona en este nicho y por qué, qué ángulos y
estructuras de guión están ya probados por quienes dominan, y en qué punto de
consciencia y sofisticación está el público (Schwartz). No describe al
cliente —eso es trabajo de skill-copy-<cliente>—: describe el tablero sobre
el que se juega. Toda pieza para este nicho tiene que poder responder a la
pregunta: "¿esto está al nivel de lo que ya funciona aquí, o le falta un paso
de mercado?".

Estado de esta ficha: [COMPLETAR DESDE EL INFORME — primera versión / revisión N].
Fuentes: [COMPLETAR DESDE EL INFORME — informe de análisis, fecha, referentes
y material usado]. Nada de lo que está aquí abajo se ha inventado: si un dato
no sale del informe, pone "no consta" y eso es también una instrucción para
el agente (tantea con preguntas de revisión en lugar de rellenar el hueco).

NOTA DE PLANTILLA: este documento no contiene datos de ningún nicho real. Al
copiarlo a skill-nicho/<nicho> se sustituye <NICHO> y se rellenan todos los
[COMPLETAR DESDE EL INFORME] exclusivamente con el informe de análisis.

---

## Cómo se rellena esta plantilla

1. Copiar esta carpeta a skill-nicho/<nicho> (slug del nicho, en minúsculas).
2. Ejecutar el análisis de PROMPT-AGENTE-ANALISIS.md sobre los referentes
   aprobados por Pablo en /admin y obtener el informe: (1) estructuras de
   guión de los top performers, (2) el destilado que rellena esta skill y
   (3) el perfil de cada referente (voz, formato, ángulos, frecuencia).
3. Rellenar cada sección SOLO con lo que diga el informe. Cada afirmación
   lleva su evidencia: referente, pieza y métrica que la sostiene. Nunca "en
   general".
4. Donde el informe no cubra un campo, escribir "no consta" en ese campo.
5. Actualizar el estado y las fuentes de la cabecera con fecha. Toda revisión
   sustituye secciones completas (ver RENOVACIÓN MENSUAL al final); nunca se
   mezclan dos análisis.

---

## Secciones (se rellenan desde el informe)

### 0. Referentes y material de origen

- Referentes analizados: [COMPLETAR DESDE EL INFORME: los 3 aprobados,
  handle + plataforma]
- Material cubierto: [COMPLETAR DESDE EL INFORME: nº de piezas por referente,
  periodo analizado, ads de Meta Ad Library sí/no]
- Fecha del análisis: [FECHA]

### 1. Reglas del nicho: qué funciona y por qué

1. Regla: [COMPLETAR DESDE EL INFORME: qué funciona en <NICHO>]
   Por qué: [COMPLETAR DESDE EL INFORME: el mecanismo que lo explica, no la
   correlación]
   Evidencia: [COMPLETAR DESDE EL INFORME: referente / pieza / métrica]
2. [COMPLETAR DESDE EL INFORME]
3. [COMPLETAR DESDE EL INFORME]
(3-5 reglas)

Regla de entrada: una regla sin "por qué" es una moda, no una regla. El
mecanismo tiene que canalizar un deseo que ya existe en el público del nicho
(lenguaje de breakthrough-advertising: el copy no crea el deseo, lo canaliza).

### 2. Ángulos y hooks probados

1. Ángulo: [COMPLETAR DESDE EL INFORME: la tesis que defiende el contenido
   que gana]
   Hooks que lo abren: [COMPLETAR DESDE EL INFORME: 2-3 formas de apertura
   (tipo de hook + forma literal o paráfrasis) y qué retención/engagement
   muestran]
   Evidencia: [COMPLETAR DESDE EL INFORME: referente / pieza]
2. [COMPLETAR DESDE EL INFORME]
3. [COMPLETAR DESDE EL INFORME]

- Ángulos ya quemados en este nicho (usados hasta el agotamiento, probados
  por el volumen de ads que los repiten): [COMPLETAR DESDE EL INFORME] — si
  no consta ninguno, escribir "no consta".
- Distinguir siempre ángulo vivo de ángulo quemado: en mercado sofisticado
  repetir un ángulo quemado es invisibilidad, no seguridad.

### 3. Estructuras de guión ganadoras

1. Nombre: [COMPLETAR DESDE EL INFORME: cómo se llama el esqueleto]
   Esqueleto: [COMPLETAR DESDE EL INFORME: paso a paso — hook → cuerpo →
   cierre, con qué hace cada tramo]
   Por qué retiene: [COMPLETAR DESDE EL INFORME]
   Referente: [COMPLETAR DESDE EL INFORME: pieza concreta donde se vio]
2. [COMPLETAR DESDE EL INFORME]
3. [COMPLETAR DESDE EL INFORME]
(2-4 esqueletos)

Las estructuras del nicho tienen prioridad sobre cualquier framework externo:
si un framework de la doctrina (leads, beats, scorecard) choca con lo que aquí
está probado, gana lo probado. El framework se adapta al esqueleto del nicho,
no al revés.

### 4. Temas y tabúes

Temas que pide la audiencia:

- [COMPLETAR DESDE EL INFORME: tema + señal de demanda (comentarios,
  preguntas, volumen) + evidencia]
- [COMPLETAR DESDE EL INFORME]

Tabúes (lo que aquí no funciona o no conviene decir):

- [COMPLETAR DESDE EL INFORME: tabú + por qué (normativa, tono del nicho,
  audiencia quemada) + fuente del informe]
- Si no consta ningún tabú documentado: escribir "no consta; ante la duda,
  escalar a revisión humana antes de publicar".

### 5. Consciencia y sofisticación del mercado (Schwartz)

Dos diales del marco de breakthrough-advertising: la CONSCIENCIA dice dónde
empieza la conversación (cuánto sabe el público de su problema y de las
soluciones) y la SOFISTICACIÓN dice cuánto aguanta ya de oír promesas como
las de este nicho. Este es el diagnóstico a nivel de MERCADO —no del
cliente— y alimenta directamente el Paso 2 (Diagnóstico) de
breakthrough-advertising al escribir cualquier pieza; cómo calibrar la claim
al nivel de sofisticación y elegir el lead según la temperatura está en
direct-response-copy-engine.

```
DIAGNÓSTICO DE MERCADO <NICHO>
· Deseo masivo dominante: [COMPLETAR DESDE EL INFORME]
· Evidencia: [COMPLETAR DESDE EL INFORME: qué dice el mercado hoy, con fuentes]
· Consciencia 1-5: [COMPLETAR DESDE EL INFORME: nivel + por qué]
· Sofisticación 1-5: [COMPLETAR DESDE EL INFORME: nivel + por qué, incl.
  señal de ads: tiempo activo × nº de variantes de lo que escalan pagando]
· Claims ya quemadas: [COMPLETAR DESDE EL INFORME]
· Jugada que exige ESTE punto de la matriz: [COMPLETAR DESDE EL INFORME:
  el tipo de apertura/claim que pide este cuadrante ahora]
```

Las escalas 1-5 y la jugada por nivel están en
`~/.zcode/skills/breakthrough-advertising/SKILL.md` (awareness × sofisticación
→ veredicto; si conciencia y sofisticación piden cosas distintas, manda la más
restrictiva, normalmente la sofisticación). Si el informe no da evidencia
suficiente para fijar un nivel, se escribe el nivel como **hipótesis a
validar** con la evidencia mínima que falta, nunca como dato firme.

---

## Cómo se usa esta skill (una vez rellena)

1. **Pila del agente redactor.** Orden de consulta: primero esta skill (qué
   exige el mercado y dónde empezar la conversación), luego skill-copy-<cliente>
   (quién habla y cómo suena), después la doctrina (breakthrough-advertising
   para el diagnóstico y la técnica; direct-response-copy-engine para escribir
   y auditar la pieza) y al final tono-humano (que suene a persona). La
   revisión y aprobación es humana (Pablo en /admin); esta skill no autoriza
   publicar nada por sí sola.

2. **Alimentación del diagnóstico.** Esta skill es la investigación de
   mercado ya destilada: úsala en los pasos 1-2 de breakthrough-advertising
   en lugar de re-investigar el nicho desde cero en cada pieza. Si la pieza
   exige un dato que aquí no consta, investiga para esa pieza y marca el hueco
   para la próxima renovación.

3. **Ante conflicto, gana la evidencia.** Si el nicho cambió (formato
   dominante nuevo, claim recién quemada, entrada de un actor grande), esta
   skill queda obsoleta en lo tocante al cambio: señálalo y dispara la
   renovación fuera de ciclo.

---

RENOVACIÓN MENSUAL: repetir el análisis de PROMPT-AGENTE-ANALISIS.md y
actualizar estas secciones.

- Se sustituyen secciones completas con el informe nuevo y se actualiza la
  fecha de la cabecera; nunca se mezclan dos análisis ni se conserva lo que
  "suena bien" sin evidencia nueva.
- Recalcular consciencia y sofisticación de cero cada renovación: el nicho
  sube de sofisticación y la jugada del mes pasado puede ya no valer.
- Registrar qué cambió desde el informe anterior (una línea por cambio) para
  ver la deriva del nicho: [COMPLETAR EN CADA RENOVACIÓN].
