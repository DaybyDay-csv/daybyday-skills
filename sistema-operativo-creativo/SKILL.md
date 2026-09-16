---
name: sistema-operativo-creativo
description: >-
  Sistema operativo creativo (SOC): banco de variables aisladas para diseñar,
  etiquetar, testear y escalar creativos de vídeo por componentes, no por
  intuición. Descompone cualquier vídeo en 6 capas independientes con IDs
  estables: Hook (H-), Estructura narrativa (S-), Formato (F-), Ángulo (A-), CTA
  (C-) y Edición/Retención (E-). Permite escribir un creativo como una "receta"
  de IDs (ej. H-03 + S-04 + F-… + A-07 + C-02), aislar una variable por test,
  diagnosticar la curva de retención (Hook Rate × Hold Rate) y documentar qué
  combinaciones rinden. Úsala SIEMPRE que haya que DISEÑAR un creativo de vídeo
  por piezas, montar un plan de testing A/B de creativos, etiquetar/clasificar
  anuncios por componentes, diagnosticar por qué un vídeo no retiene, o cuando
  alguien diga "qué hook+estructura uso", "monta variantes para testear",
  "etiqueta estos creativos" o "la retención se desploma a la mitad". Sirve a
  equipos humanos, a IA que etiqueta creativos y a paid media que optimiza por
  variable.
---

# Sistema Operativo Creativo (SOC) · 6 capas

No es un documento de "ideas de vídeo": es un sistema operativo. Cada concepto vive dentro del
Modelo de 6 Capas y tiene un ID estable para que puedas etiquetar cualquier creativo como una
receta y aprender qué combinaciones rinden.

## El modelo de 6 capas

| # | Capa | Qué controla | Métrica |
|---|------|--------------|---------|
| 1 | Hook (`H-`) | Que pare el scroll | Hook Rate / retención 1-3s |
| 2 | Estructura (`S-`) | Que se quede hasta el final | Hold Rate / completion |
| 3 | Formato (`F-`) | Coste, escala, estética, fit de marca | Eficiencia + retención |
| 4 | Ángulo (`A-`) | Intención (entretener/educar/convertir) y fase de funnel | Engagement / conversión |
| 5 | CTA (`C-`) | Que haga algo | Guardados, compartidos, clics, conversión |
| 6 | Edición/Retención (`E-`) | Que la curva no se desplome | Forma de la curva |

Regla maestra: los algoritmos rankean por watch-through rate. La caída en los primeros 1-3 segundos
es el peor castigo de distribución. Por eso el orden de prioridad de testeo es siempre: Hook
primero.

## Cómo usarla

1. Compón el creativo como una receta de IDs: un `H-`, un `S-`, un `F-`, un `A-`, un `C-` y la
   `E-`. Ejemplo: `H-07 + S-04 + A-08 + C-05`.
2. Aísla UNA variable por test (concept testing antes que variation testing). Cambia solo el hook,
   o solo el ángulo, y mide.
3. Diagnostica con la matriz Hook Rate × Hold Rate para saber qué capa arreglar: hook rate bajo →
   cambia los 3s; hold bajo → cambia el cuerpo/edición.
4. Documenta: lo que funciona se vuelve patrón; lo que no, descarte rápido. Itera el ganador
   cambiando una sola variable.

## Contenido completo

La biblioteca entera —los 17 hooks (`H-01`…`H-17`) con principio y plantilla, las 30 estructuras
narrativas (`S-01`…`S-30`), los formatos (`F-`), los 24 ángulos (`A-01`…`A-24`) con su cuadrante y
variable de valor de Hormozi, los 8 CTAs (`C-01`…`C-08`), las 7 interrupciones de patrón de la capa
de edición (`E-`), el sistema de clasificación e IDs, las 4 métricas clínicas, la lectura de la
curva de retención y el sistema de testeo— está en `references/soc-completo.md`. Ábrelo para
trabajar con los IDs.

Encaja en el Ethical Conversion System en la Fase 4 (diseñar la receta creativa) y la Fase 7
(medir y escalar). El Hook (`H-`) se nutre de `mecanicas-atencion-hooks`; los frameworks (`S-`) se
solapan con el `glosario-playbook-video-ads`.
