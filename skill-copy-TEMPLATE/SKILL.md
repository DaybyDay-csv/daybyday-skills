---
name: skill-copy-TEMPLATE
description: >-
  PLANTILLA de skill de voz por cliente de ContentFlow. NO se usa directamente:
  se copia a skill-copy-<cliente> y se rellena con el análisis de voz de ese
  cliente (ver "Proceso de extracción de voz"). Una vez rellenada, la skill de
  voz del cliente se carga SIEMPRE que el agente redactor escriba, revise o
  adapte contenido para ese cliente —posts, reels, guiones, hooks, CTAs— junto
  a las skills de doctrina (breakthrough-advertising, direct-response-copy-engine,
  copy-estilo-jesus): la doctrina decide QUÉ técnica aplicar y esta skill decide
  CÓMO suena la voz del cliente. Si algo de este documento choca con lo que el
  cliente diría de verdad, manda lo que el cliente diría; propón actualizar la
  skill en vez de forzar su voz. Última revisión: [FECHA]. Contiene datos
  extraídos solo de fuentes documentadas; donde no consta, se escribe "no
  consta" y nunca se inventa.
---

# Skill de voz de <CLIENTE>

Esta skill es la ficha de voz de <CLIENTE> para el agente redactor de
ContentFlow. Toda pieza que salga para este cliente tiene que poder pasar el
test: "¿<CLIENTE> diría esto, dicho así, en una charla con su audiencia?". Si
la respuesta es no o "más o menos", se reescribe.

Estado de esta ficha: [COMPLETAR CON ANÁLISIS — primera versión / revisión N].
Fuentes usadas: [COMPLETAR CON ANÁLISIS — lista de URLs/joyas/transcripts con
fechas]. Nada de lo que está aquí abajo se ha inventado: si un campo no sale de
una fuente documentada, pone "no consta" y eso es también una instrucción para
el agente (tantea con preguntas de revisión en lugar de rellenar el hueco).

---

## Proceso de extracción de voz (cómo se rellena esta plantilla)

Ejecutar en orden. No pasar al siguiente paso sin cerrar el anterior. Todos los
pasos producen material citable: cita siempre la fuente concreta (URL, minuto
del transcript, campo del form), nunca "en general".

1. **Recopilar contenido publicado.** Coger los últimos [N] posts/reels/vídeos
   del cliente (número acordado en onboarding; por defecto los últimos 20-30,
   mínimo un mes de contenido) y, aparte, sus [N] top performers (mayor alcance,
   retención o interacción según métrica disponible). Guardar cada pieza con su
   URL, fecha y formato. Si el cliente no tiene contenido propio publicado aún,
   este paso queda vacío y la voz se construye solo de la call de venta y del
   form de Ana, marcándolo explícitamente en el estado de la ficha.

2. **Transcribir y guardar citas verbatim.** Transcribir (o pedir el caption
   original) de cada pieza. Guardar las frases tal cual las dijo/escribió el
   cliente —con sus muletillas, sus tics y su puntuación— en un archivo de
   citas. No limpiar, no resumir, no corregir: el verbatim es la materia prima
   de todo lo demás.

3. **Destilar el tono.** De las citas verbatim, responder con evidencia:
   formal o informal (trata de tú/usted a su audiencia), energía (pausado,
   conversacional, acelerado, polémico), longitud (frases cortas vs. largas,
   párrafo medio, duración típica de reel), nivel de jerga (cuánto tecnicismo
   de su nicho usa y cuándo lo traduce), humor (presente, ausente, irónico).
   Cada rasgo con al menos 2 citas que lo demuestren.

4. **Muletillas y arranques típicos.** Listar las palabras y construcciones que
   repite sin darse cuenta ("a ver", "mira", "te lo digo yo", "la verdad es
   que"...), sus formas de abrir video/post, y sus formas de cerrar. Son el
   sello más difícil de falsificar: se copian tal cual.

5. **Estructuras de guion que ya usa.** Identificar 2-4 esqueletos que el
   cliente repite en su contenido (hook → historia → lección → CTA, problema →
   error común → solución, etc.). Describir cada uno con un ejemplo suyo real y
   nombre de archivo donde está. Estas estructuras son prioritarias sobre
   cualquier framework externo: si el framework externo no encaja en su voz, no
   se usa.

6. **Temas que le importan y TABÚS.** Dos listas: (a) temas y ángulos que
   defiende con frecuencia (sus batallas, sus opiniones fuertes, su tesis);
   (b) TABÚS: temas de los que no habla, tonos que no tolera (vulnerabilidad
   forzada, humillación del cliente ideal, referencias religiosas/políticas,
   promesas de resultados cifrados...), y cosas que ha dicho explícitamente en
   venta o onboarding que no quiere decir jamás. Un tabú no documentado aquí
   igual existe: ante la duda, marcar la pieza para revisión humana en lugar de
   arriesgar.

7. **Cruzar con las fuentes de ContentFlow.** Sumar a lo publicado lo que digan
   (a) el transcript de la call de VENTA (leads.venta_transcript /
   onboarding.call_transcript), (b) el form de Ana (leads.ana_form /
   onboarding.ana_form) y (c) lo que exista de onboarding. Estas fuentes son
   la referencia para objetivos, cruce personal×objetivo, accesos y cualquier
   "por qué" del mensaje. Regla fija: solo entra en esta ficha lo que esté en
   una de estas fuentes; si algo no consta, se escribe "no consta".

8. **Cerrar con 5-10 citas verbatim como muestras.** Elegir las citas que
   mejor resuman la voz (las que leerías a un redactor nuevo para que "coga el
   punto") y dejarlas en la sección final, cada una con su fuente y fecha. Esa
   sección es la prueba de que la ficha describe a esta persona y no a un
   cliente genérico.

9. **Guardar y versionar.** Rellenar el estado y las fuentes en la cabecera,
   con fecha. Toda revisión posterior sustituye secciones completas y actualiza
   la fecha de la cabecera; nunca se mezclan dos análisis.

---

## Secciones de salida (se rellenan al ejecutar el proceso)

### 1. Ficha de voz en una frase

<CLIENTE> escribe como [COMPLETAR CON ANÁLISIS: descripción en una frase que
cualquiera del equipo reconozca al leer una pieza sin firma].

### 2. Tono

- Registro: [COMPLETAR CON ANÁLISIS: formal / informal / de tú / de usted]
- Energía: [COMPLETAR CON ANÁLISIS]
- Longitud: [COMPLETAR CON ANÁLISIS: frase media, duración típica]
- Jerga del nicho: [COMPLETAR CON ANÁLISIS]
- Humor: [COMPLETAR CON ANÁLISIS]
- Evidencia: [COMPLETAR CON ANÁLISIS: 2+ citas que demuestren cada rasgo]

### 3. Muletillas y arranques típicos

- Muletillas: [COMPLETAR CON ANÁLISIS: lista literal]
- Formas de abrir: [COMPLETAR CON ANÁLISIS: 2-3 arranques literales suyos]
- Formas de cerrar: [COMPLETAR CON ANÁLISIS: 2-3 cierres literales suyos]

### 4. Estructuras de guion que ya usa

1. [COMPLETAR CON ANÁLISIS: nombre del esqueleto + descripción + ejemplo suyo]
2. [COMPLETAR CON ANÁLISIS]
3. [COMPLETAR CON ANÁLISIS] (opcional)

### 5. Temas que le importan

- [COMPLETAR CON ANÁLISIS: tema + ángulo + cita donde lo defiende]
- [COMPLETAR CON ANÁLISIS]
- [COMPLETAR CON ANÁLISIS]

### 6. Tabús (lo que no dirá jamás)

- [COMPLETAR CON ANÁLISIS: tabú + fuente que lo justifica (venta/onboarding/
  contenido)]
- [COMPLETAR CON ANÁLISIS]
- Si no consta ningún tabú documentado: escribir "no consta; ante la duda,
  escalar a revisión humana antes de publicar".

### 7. Reglas de escritura para el agente (haz / no hagas)

- HAZ: [COMPLETAR CON ANÁLISIS: 3-5 reglas derivadas del tono, p. ej. "abre con
  una anécdota de primera persona, nunca con una pregunta retórica"]
- NO HAGAS: [COMPLETAR CON ANÁLISIS: 3-5 anti-reglas, p. ej. "no uses
  mayúsculas de grito", "no digas 'voy a ser sincero contigo'"]

### 8. Citas verbatim (muestras de voz)

1. "[COMPLETAR CON ANÁLISIS: cita literal]" — fuente: [URL / transcript min.
   MM:SS / campo del form], fecha: [FECHA]
2. [COMPLETAR CON ANÁLISIS]
3. [COMPLETAR CON ANÁLISIS]
(mínimo 5, máximo 10)

### 9. Fuentes y control de versión

- Análisis realizado el: [FECHA]
- Material analizado: [COMPLETAR CON ANÁLISIS: nº de piezas, periodo cubierto,
  transcript de venta sí/no, form de Ana sí/no]
- Próxima revisión prevista: [FECHA — ver "Renovación" más abajo]

---

## Cómo se usa esta skill (una vez rellenada)

1. **Pila del agente redactor (T4.1).** Esta skill se añade a la pila junto a
   breakthrough-advertising, direct-response-copy-engine y copy-estilo-jesus.
   Reparto de papeles: las skills de doctrina aportan la técnica (estructura,
   persuasión, marcos); esta skill manda en la VOZ —vocabulario, ritmo,
   muletillas, tabús y estructuras propias del cliente. Ante conflicto, gana
   esta skill: es más difícil enseñar la voz de alguien que aplicar un
   framework.

2. **Orden de consulta al escribir.** Primero esta skill (quién habla), luego
   la doctrina (qué técnica), y al final la pasada por tono-humano (que suene a
   persona). Toda pieza se genera como propuesta: la revisión y aprobación es
   humana (Pablo en /admin, flujo T2.1/T2.2); esta skill no autoriza publicar
   nada por sí sola.

3. **Cuándo no fiarse de esta skill.** Si el material del cliente cambió
   (nueva línea de negocio, cambio de audiencia, nuevo formato), la ficha
   queda obsoleta en lo tocante al cambio: señálalo en la revisión y dispara
   la renovación.

4. **Renovación.** Esta skill se renueva cuando cambie el contenido del
   cliente —y como mínimo de forma periódica según lo que decida Pablo. Una
   renovación repite el proceso completo sobre material nuevo y sustituye las
   secciones afectadas, actualizando la fecha de la cabecera.
