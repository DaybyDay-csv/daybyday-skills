---
name: sop-campanas-alertas-n8n
description: >-
  SOP y playbook para gestionar campañas de paid media (Meta, Google, TikTok,
  Pinterest) y montar un sistema de alertas automáticas en n8n. Incluye la rutina
  humana (preguntas diarias de 15 min, revisión semanal de los lunes, estrategia
  mensual), los umbrales de decisión (ROAS mínimo, CPA máximo, gasto sin venta,
  saltos de CPA/CPM), las cadencias, y el montaje paso a paso de los workflows de
  n8n (alertas de sangría, CPA, tracking, anuncios rechazados y resumen diario a
  Slack). Escrito desde cero, sin asumir conocimiento previo. Úsala SIEMPRE que
  haya que gestionar, monitorizar, optimizar o reportar campañas de ads, definir
  umbrales, decidir si subir/bajar presupuesto, montar alertas o automatizaciones
  en n8n, o cuando alguien diga "cómo reviso las campañas", "qué hago cada
  mañana", "monta una alerta", "se me escapan los problemas de ads" o "necesito un
  reporte para el cliente". Regla raíz: el robot detecta y avisa; tú decides y
  actúas.
---

# SOP · Gestión de campañas + sistema de alertas en n8n

Dos piezas que trabajan juntas: una rutina humana (tú, decidiendo) y un vigilante automático (el
robot en n8n, avisando). Analogía: la rutina es revisar tú el coche antes de salir; el vigilante es
la luz del salpicadero que se enciende sola.

## Cómo usarla

1. Antes de nada, define tus umbrales (la línea roja entre "esto va bien" y "esto necesita acción"):
   ROAS mínimo, CPA máximo, gasto sin venta, salto de CPA, salto de CPM. Sin umbrales no se decide
   nada ni el robot puede avisar.
2. Rutina diaria (15 min): primero el bloque "¿hay algo roto?" (proteger el dinero: pausar
   sangrías, bajar lo que dispara CPA), luego "¿qué está volando?" (acelerar ganadores +20%
   escalonado).
3. Rutina semanal (lunes): rendimiento, creativo (esto se lo pasas al equipo de contenido),
   audiencias y económico (esto va al cliente).
4. Rutina mensual: estrategia y cuenta, con el cliente delante.
5. Monta las alertas de n8n paso a paso para que el robot vigile a cualquier hora.

## Reglas de oro

- Cambios pequeños y reversibles: sube/baja presupuesto como mucho ±20% por acción; pausa ad sets
  concretos. Nunca cambios grandes de golpe (las plataformas "reaprenden" y el rendimiento cae).
- El robot detecta y avisa; tú decides y actúas. Nunca al revés mientras gestiones presupuestos
  grandes.

## Contenido completo

Todo el SOP —glosario express, las métricas explicadas con números, la tabla de umbrales, las
preguntas diarias/semanales/mensuales en orden, el montaje paso a paso de cada workflow de n8n, la
tabla de cadencias y los checklists de implementación— está en `references/sop-n8n.md`. Ábrelo para
el detalle.

Es la capa operativa del sistema: vive aguas abajo de la creación. Conecta con la Fase 7 (medir y
escalar) del Ethical Conversion System y con el testeo por capa del Sistema Operativo Creativo.
