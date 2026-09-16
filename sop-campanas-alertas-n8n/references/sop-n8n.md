SOP / PLAYBOOK
Gestión de Campañas + Sistema de Alertas Automáticas
Rutina diaria, semanal y mensual · Umbrales · Cadencias · Montaje en n8n paso a paso
Escrito desde cero — no se asume ningún conocimiento previo
Meta Ads · Google Ads · TikTok Ads · Pinterest Ads · ecommerce


## Índice


## Parte A — Antes de empezar: qué es todo esto
Si nunca has gestionado campañas ni has tocado una herramienta de automatización, lee esta parte entera. Si ya sabes, puedes saltar a la Parte B. Aquí explicamos cada palabra que vas a necesitar, sin dar nada por sabido.

### A.1 ¿Qué estamos montando y para qué?
Gestionamos mucho dinero de publicidad cada mes repartido en cuatro plataformas (Meta = Facebook + Instagram, Google, TikTok y Pinterest). El problema: revisar todo eso a mano, cada día, es lentísimo y es fácil que algo se rompa sin que te enteres a tiempo. Un anuncio puede gastar cientos de euros en una noche sin vender nada, y si lo descubres tres días después, ese dinero ya se perdió.
La solución tiene dos piezas:
- Una rutina humana (tú): una lista fija de preguntas que te haces cada día, cada semana y cada mes para tomar decisiones. Eso es la Parte B, C y D.
- Un vigilante automático (el robot): un programa que revisa las cuentas solo, a cualquier hora, y te avisa por mensaje cuando algo necesita tu atención. Eso es la Parte E y F.
Analogía: La rutina es como revisar tú mismo el coche antes de salir. El vigilante automático es la luz del salpicadero que se enciende sola cuando algo va mal. Necesitas las dos cosas.

### A.2 Glosario express (memoriza esto primero)

| Palabra | Qué significa, en cristiano |
| --- | --- |
| Campaña | El contenedor grande de tu publicidad para un objetivo (ej: 'Vender zapatillas'). Dentro tiene conjuntos de anuncios. |
| Conjunto de anuncios (ad set) | Dentro de una campaña: define a QUIÉN se le muestra y CUÁNTO se gasta. Aquí es donde más se optimiza. |
| Anuncio (ad) / Creativo | El vídeo o imagen concreto que ve la gente. |
| Presupuesto | El dinero que decides gastar al día o en total. |
| Conversión | La acción que quieres: normalmente una COMPRA en ecommerce. |
| Impresión | Una vez que tu anuncio aparece en la pantalla de alguien. |
| Plataforma de Ads | Donde corre la publicidad: Meta, Google, TikTok, Pinterest. |
| Shopify | La tienda online donde de verdad ocurren las ventas. Es la 'fuente de la verdad'. |
| n8n | El programa que usaremos para crear el vigilante automático (se lee 'en-eit-en'). |
| Slack | La app de mensajería del equipo. Ahí llegarán los avisos del robot. |
| MCP / Conector | El 'cable' que deja que un programa hable con otro (ej: que n8n pregunte datos a Meta). |
| API | El idioma técnico con el que las plataformas dan sus datos. No hace falta entenderlo a fondo. |


### A.3 Las métricas que vas a usar (explicadas con números)
Estas siglas son el vocabulario del día a día. Aprende qué miden y, sobre todo, si 'más alto' es bueno o malo.

| Métrica | Qué es | ¿Subir es bueno? | Ejemplo |
| --- | --- | --- | --- |
| ROAS | Euros que ganas por cada euro invertido (Return On Ad Spend). | SÍ, más alto mejor | ROAS 3 = gastas 100€, vendes 300€. |
| CPA | Lo que te cuesta conseguir una venta (Cost Per Acquisition). | NO, más bajo mejor | CPA 20€ = cada compra te cuesta 20€ en ads. |
| CTR | % de gente que hace clic tras ver el anuncio. | Normalmente sí | CTR 2% = 2 de cada 100 hacen clic. |
| CPM | Coste por mostrar el anuncio 1.000 veces. | NO (si sube mucho = caro/saturado) | CPM 10€ = 1.000 impresiones cuestan 10€. |
| AOV | Valor medio de cada pedido (Average Order Value). | SÍ | AOV 45€ = el carrito medio son 45€. |
| LTV | Lo que un cliente gasta contigo en toda su vida. | SÍ | LTV 120€ = un cliente deja 120€ con el tiempo. |
| Frequency | Veces que la misma persona ve tu anuncio. | NO si es muy alta (cansa) | Frequency 5 = cada persona lo vio 5 veces. |

La métrica reina en ecommerce: ROAS y CPA. Casi todas tus decisiones diarias salen de mirar si el ROAS está por encima de tu objetivo o el CPA por debajo de tu máximo. Lo demás son pistas de POR QUÉ.

### A.4 Define tus umbrales (rellénalos antes de nada)
Un 'umbral' es la línea roja que separa 'esto va bien' de 'esto necesita acción'. Sin umbrales no puedes decidir nada ni el robot puede avisarte. Rellena esta tabla con tu cliente/negocio. Los valores de ejemplo son orientativos: cámbialos por los tuyos reales.

| Umbral | Qué significa | Tu valor (ejemplo) |
| --- | --- | --- |
| ROAS objetivo | Por debajo de esto, la campaña no es suficientemente rentable. | 3,0 |
| ROAS mínimo (línea roja) | Por debajo de esto hay que actuar ya. | 2,0 |
| CPA objetivo | Coste por compra que consideras sano. | 20€ |
| CPA máximo (línea roja) | Por encima, alerta. | 30€ |
| Gasto sin venta | Si un ad set gasta esto y vende 0, es sangría. | 25€ |
| Subida brusca de CPA | % de subida sobre la media de 7 días que dispara alerta. | +40% |
| Frequency máxima | A partir de aquí, riesgo de fatiga. | 3,0 |
| Descuadre de tracking | Diferencia entre ventas de la plataforma y de Shopify que es sospechosa. | 20% |

Importante: Estos umbrales aparecerán una y otra vez en el resto del documento y en la configuración del robot. Decídelos una vez aquí y reutilízalos en todas partes.


## Parte B — Rutina DIARIA (15 minutos cada mañana)
Cada mañana, a primera hora, antes de tocar nada. Objetivo: detectar lo roto (proteger el dinero) y lo que vuela (acelerar lo bueno). Solo decisiones pequeñas y reversibles. Nada estructural antes del café.
Mentalidad del diario: No vienes a rediseñar nada. Vienes a apagar fuegos pequeños y a echar gasolina a lo que ya arde bien. Triage, como en urgencias.

### B.1 Las preguntas diarias, en orden

#### Bloque 1 — ¿Hay algo roto? (protección)
- Pregunta: ¿Qué campañas/ad sets están hoy por debajo del ROAS mínimo o por encima del CPA máximo?
- Si la respuesta enciende alarma → Bajar presupuesto un 20% o pausar el peor.
- Pregunta: ¿Dónde gasté dinero ayer y vendí 0? (gasto > umbral 'gasto sin venta')
- Si la respuesta enciende alarma → Pausar ese ad set. Es sangría pura.
- Pregunta: ¿Algún ad set disparó su CPA ayer por encima del +40% vs su media de 7 días?
- Si la respuesta enciende alarma → Investigar: ¿creativo cansado? ¿audiencia saturada? Bajar presupuesto mientras decides.
- Pregunta: ¿El CPM subió de forma rara en alguna plataforma?
- Si la respuesta enciende alarma → Señal de saturación o más competencia. Vigilar, aún no actuar.
- Pregunta: ¿Cuadran las ventas de la plataforma con las de Shopify?
- Si la respuesta enciende alarma → Si el descuadre supera tu umbral, AVISAR a quien lleve la web. Es lo que más dinero quema en silencio.
- Pregunta: ¿Hay anuncios rechazados, en revisión, o alguna alerta de cuenta/pago?
- Si la respuesta enciende alarma → Resolver antes de que pare la entrega.

#### Bloque 2 — ¿Qué está volando? (oportunidad)
- Pregunta: ¿Qué creativos o ad sets superaron ayer el ROAS objetivo con volumen suficiente?
- Si va bien → Subir presupuesto +20% (nunca de golpe, escalonado).
- Pregunta: ¿Hay campañas rentables tocando su límite de presupuesto diario?
- Si va bien → Subir el tope: están dejando ventas sobre la mesa.
- Pregunta: ¿Algún creativo nuevo (últimas 72h) ya rinde por encima de la media?
- Si va bien → Acelerarlo. Si rinde por debajo, marcarlo para cortar pronto.

### B.2 Regla de oro del diario
Cambios pequeños y reversibles: Subir o bajar presupuesto como mucho un 20% por acción, y pausar ad sets concretos. Nunca cambies la estructura, ni toques audiencias grandes, ni hagas cambios masivos por la mañana. Eso se decide en la rutina semanal con la cabeza fría.
Por qué el ±20%: las plataformas 'reaprenden' cada vez que haces un cambio grande, y durante ese reaprendizaje el rendimiento empeora. Cambios pequeños no resetean ese aprendizaje.


## Parte C — Rutina SEMANAL (revisión profunda, los lunes)
Una vez por semana, con tiempo, miras el bosque en vez de los árboles. Aquí decides hacia dónde mover el dinero, qué testear y qué pedirle al equipo de contenido.

### C.1 Rendimiento de la semana
- ¿Cuál fue el ROAS / CPA / gasto de cada cuenta esta semana vs la anterior vs el objetivo del mes? ¿Voy adelantado o atrasado en el gasto previsto (pacing)?
- ¿Qué % del gasto está en campañas rentables, qué % en pruebas (testing), y qué % en 'zombis' (gastan sin rendir ni aprender nada)? Los zombis se cortan.
- ¿Cómo reparte el resultado cada plataforma? ¿Meta carga con todo o Google/TikTok/Pinterest aportan de verdad?

### C.2 Creativo (esto se lo pasas al equipo de contenido)
- ¿Qué ángulos / formatos / ganchos están ganando esta semana, agrupados por tema? (no anuncio por anuncio, sino el patrón que se repite).
- ¿Qué creativos están en fatiga? (la frequency sube + el CTR baja + el CPA sube, los tres a la vez).
- ¿Cuántos creativos nuevos entraron y cuántos resultaron ganadores? ¿Estoy alimentando suficiente volumen de pruebas?
- ¿Qué creativo ganador puedo iterar? (mismo ángulo, cambiar el gancho o el formato).

### C.3 Audiencias y estructura
- ¿Hay audiencias solapadas compitiendo entre sí (yo contra mí mismo en la subasta)?
- ¿Qué audiencias están saturadas (frequency alta, CPM subiendo) y cuáles tienen recorrido?
- ¿La estructura de campañas sigue teniendo sentido o toca consolidar?

### C.4 Económico (esto va al cliente)
- ¿Cuál es el CPA comparado con el AOV y el LTV? ¿El ROAS que reporto es rentable de verdad teniendo en cuenta los márgenes?
- ¿Qué 3 cosas movieron la aguja esta semana y qué 3 propongo para la próxima? (esto es la base de tu reporte).


## Parte D — Rutina MENSUAL (estrategia y cuenta)
Una vez al mes ya no miras botones, miras la estrategia. Esto es criterio tuyo, con el cliente delante.
- ¿Cumplimos el objetivo de inversión, ROAS y ventas del mes? ¿Por qué sí o por qué no?
- ¿Cómo evolucionan CAC y LTV mes a mes? ¿El negocio gana margen o lo pierde al escalar?
- ¿Qué plataforma merece más presupuesto el mes que viene y cuál menos?
- ¿Qué grandes apuestas creativas o de estructura probamos el mes que viene?
- ¿Hay estacionalidad, lanzamientos o promos que preparar?
- Reporte mensual al cliente: resultados, aprendizajes, y plan del mes siguiente.
Diferencia clave de niveles: Diario = salud (¿algo roto?). Semanal = rendimiento (¿hacia dónde muevo el dinero?). Mensual = estrategia (¿vamos por buen camino como negocio?). El robot te ayuda con los dos primeros para que tu cabeza quede libre para el tercero.


## Parte E — El sistema de alertas automáticas (el vigilante)
Aquí está la diferencia entre un buyer normal y uno de élite: en vez de esperar a la mañana para descubrir los problemas, montamos un robot que revisa las cuentas solo y te avisa por Slack en cuanto algo cruza una línea roja.
Qué es exactamente: Un conjunto de revisiones programadas. Cada una se ejecuta sola a una hora fija (o cada X horas), mira un dato concreto, y si cruza tu umbral, manda un mensaje a un canal de Slack. Nada más. No cambia nada por su cuenta: solo te avisa para que decidas tú.

### E.1 Las 7 alertas que vamos a montar
Cada alerta tiene: cuándo se ejecuta, qué condición revisa (usando tus umbrales de la sección A.4), y qué mensaje manda.

| Alerta | Cuándo corre | Qué revisa (condición) | Mensaje que manda |
| --- | --- | --- | --- |
| 1. Sangría (dinero quemado) | Cada 3 horas, 9:00–21:00 | Algún ad set con gasto mayor que tu 'gasto sin venta' y 0 conversiones en las últimas 12h. | 🚨 SANGRÍA: [ad set] lleva [X]€ gastados y 0 ventas hoy. Revisa o pausa. |
| 2. CPA disparado | Cada 6 horas | Algún ad set con CPA por encima de +40% sobre su media de 7 días, con gasto relevante. | ⚠️ CPA ALTO: [ad set] está a [X]€ (su media es [Y]€). Vigila. |
| 3. Tracking roto | 1 vez al día, 8:00 | Diferencia entre conversiones de la plataforma y pedidos de Shopify mayor que tu umbral (20%). | 🔴 TRACKING: la plataforma marca [X] ventas, Shopify [Y]. Descuadre del [Z]%. Crítico. |
| 4. Oportunidad de escala | 1 vez al día, 9:00 | Campaña rentable (ROAS > objetivo) tocando su tope de presupuesto diario. | 📈 ESCALA: [campaña] rinde a ROAS [X] y está tope de presupuesto. Considera subir. |
| 5. Fatiga de creativo | 1 vez al día, 9:00 | Creativo con frequency > umbral y CTR cayendo respecto a su media. | 🟡 FATIGA: el creativo [nombre] está quemado (freq [X], CTR bajando). Avisar a contenido. |
| 6. Resumen diario | 1 vez al día, 7:00 | Siempre. Junta los 5 puntos que más necesitan tu decisión hoy, ya priorizados. | 📋 BUENOS DÍAS. Gasto ayer: [X]€. ROAS: [Y]. Top 3 a revisar: ... Top 3 a escalar: ... |
| 7. Anuncios rechazados | Cada 6 horas | Algún anuncio en estado 'rechazado' o cuenta con alerta de pago. | ⛔ RECHAZO: el anuncio [nombre] fue rechazado. Revisa el motivo. |

Empieza por pocas: Si es tu primera vez, monta SOLO la alerta 1 (Sangría), la 3 (Tracking) y la 6 (Resumen diario). Son las que más dinero salvan y las más fáciles. Las demás las añades cuando domines el flujo.


## Parte F — Cómo montarlo en n8n, paso a paso
Aquí no se asume nada. Vamos desde 'no tengo ni cuenta de n8n' hasta 'me llegan los avisos a Slack'. Lee primero F.1 para entender las piezas, luego sigue F.2 en orden.

### F.1 Las piezas de un 'flujo' (workflow) en n8n
En n8n, un 'workflow' es una secuencia de cajitas (llamadas 'nodos') conectadas por flechas. El dato entra por la izquierda, pasa por cada caja, y sale por la derecha. Cada caja hace UNA cosa. Para nuestras alertas usaremos siempre el mismo patrón de 4 cajas:

| Nodo (caja) | Qué hace | Analogía |
| --- | --- | --- |
| 1. Schedule Trigger | Arranca el flujo a una hora fija o cada X horas. | El despertador. |
| 2. Nodo de datos (HTTP / MCP) | Pregunta a la plataforma (Meta, etc.) por los números. | El que llama y pide los datos. |
| 3. IF / Filter | Comprueba si el dato cruza tu umbral. Si no, no pasa nada. | El portero: solo deja pasar si hay problema. |
| 4. Slack | Si pasó el filtro, escribe el mensaje en el canal. | El que pega el grito. |

La idea clave: Las 7 alertas son la MISMA estructura de 4 cajas. Solo cambian la hora (caja 1), la pregunta (caja 2) y la condición (caja 3). Si aprendes a montar una, las tienes todas.

### F.2 Pasos de instalación (una sola vez)
- Crear cuenta en n8n. Ve a n8n.io y crea una cuenta (la versión cloud es la más fácil; no necesitas instalar nada). También existe gratis si lo instalas en un servidor, pero para empezar usa la nube.
- Conectar Slack. En n8n, ve a 'Credentials' → 'New' → busca Slack → sigue el botón de autorizar. Esto le da permiso a n8n para escribir en tu Slack. Crea antes un canal en Slack llamado, por ejemplo, #alertas-ads.
- Conectar la plataforma de Ads. Dos caminos: (a) si tienes el MCP/conector oficial de Meta, lo añades como credencial igual que Slack; (b) si no, usas el nodo de la plataforma que ya trae n8n (Facebook Graph API, Google Ads, etc.) metiendo tus credenciales de la app. Este paso es el más técnico; si te atascas, es donde pides ayuda.
- Conectar Shopify (solo para la alerta de tracking). Credentials → Shopify → autorizar. Así el robot puede comparar las ventas reales con las que marca la plataforma.

### F.3 Montar tu primera alerta (Sangría) — clic a clic
Vamos a montar la alerta nº1 entera como ejemplo. Las demás son variaciones de esto.
- Crea un workflow nuevo y ponle nombre 'Alerta - Sangría'.
- Añade el nodo 'Schedule Trigger'. Configúralo para que corra cada 3 horas entre las 9 y las 21. En el campo de horas pones la expresión:
Cron / intervalo:  cada 3 horas
(o expresión cron):  0 9-21/3 * * *
- Añade el nodo de datos (MCP de Meta o HTTP a la API). Pídele: por cada ad set ACTIVO de hoy, su nombre, su gasto y su número de conversiones. En lenguaje sencillo, la consulta es:
PARA cada ad set activo HOY:
  devolver -> nombre, gasto (spend), compras (purchases)
- Añade el nodo 'IF' (el filtro). La condición que deja pasar solo los problemas es:
SI  gasto  >  25   (tu umbral 'gasto sin venta')
Y   compras  =  0
ENTONCES -> es sangría, dejar pasar
- Añade el nodo 'Slack'. Elige el canal #alertas-ads y en el texto del mensaje escribe, usando los datos que vienen del filtro:
🚨 SANGRÍA detectada
Ad set: {{ $json.nombre }}
Gasto hoy: {{ $json.gasto }} €  |  Ventas: 0
Acción: revisar o pausar.
- Conecta las 4 cajas en fila (arrastra las flechas), dale a 'Execute workflow' para probarlo a mano, y cuando funcione actívalo con el interruptor de arriba ('Active'). Listo: ya tienes un vigilante.
Las llaves dobles {{ }} son la forma que tiene n8n de decir 'aquí mete el dato real que vino de la caja anterior'. No las escribas a mano letra por letra: n8n te deja elegir el dato de una lista al hacer clic.

### F.4 Lógica concreta de las otras alertas (para la caja IF)
Cuando montes las demás, solo cambias la hora, lo que pides en la caja de datos, y esta condición del filtro:

| Alerta | Condición del filtro (caja IF) |
| --- | --- |
| CPA disparado | SI cpa_hoy > cpa_medio_7dias * 1,40  Y  gasto > 25€ |
| Tracking roto | SI valor_absoluto(ventas_plataforma - pedidos_shopify) / pedidos_shopify > 0,20 |
| Oportunidad de escala | SI roas > 3,0  Y  gasto_hoy >= presupuesto_diario * 0,95 |
| Fatiga de creativo | SI frequency > 3,0  Y  ctr_hoy < ctr_medio_7dias |
| Anuncios rechazados | SI estado_anuncio = 'rechazado'  O  alerta_cuenta = verdadero |
| Resumen diario | Sin filtro: siempre manda. Aquí el truco está en juntar y ordenar los datos antes de Slack. |

Sobre el resumen diario (alerta 6): Es la más útil y la más laboriosa. En vez de un IF, usa un nodo que ordene los ad sets por gasto y por ROAS, coja los 3 peores y los 3 mejores, y arme un mensaje. Si te resulta difícil, móntala la última.

### F.5 Errores típicos de principiante (evítalos)
- Poner umbrales en el robot distintos a los de tu tabla A.4. Mantén UNA sola fuente de umbrales.
- Dejar que el robot CAMBIE cosas solo. Al principio que SOLO avise. La escritura automática se añade mucho más tarde y con topes.
- Hacer que corra demasiado seguido (cada 5 min). Saturas Slack y las APIs. Respeta las cadencias de la tabla E.1.
- Olvidar darle al interruptor 'Active'. Un workflow guardado pero no activado NO corre solo.
- No probarlo a mano antes de activarlo. Usa siempre 'Execute workflow' primero.


## Parte G — Tabla resumen de cadencias
Imprime esta tabla y tenla a la vista. Es todo el sistema en una página.

| Cuándo | Qué haces | Objetivo |
| --- | --- | --- |
| Cada día, 7:00 (robot) | Llega el resumen diario a Slack. | Saber en 1 min qué necesita tu atención. |
| Cada día, 15 min (tú) | Rutina diaria: bloque 'roto' + bloque 'vuela'. | Proteger dinero, acelerar ganadores. |
| Durante el día (robot) | Alertas de sangría, CPA, tracking, rechazos. | Reaccionar en horas, no en días. |
| Lunes (tú) | Rutina semanal: rendimiento, creativo, audiencias, económico. | Decidir hacia dónde mover el dinero. |
| Lunes (tú → contenido) | Brief data-driven al equipo de contenido. | Pedir el creativo correcto, no solo 'más'. |
| Fin de mes (tú + cliente) | Rutina mensual + reporte. | Estrategia y dirección del negocio. |


### Checklist de implementación
- ☐ Rellené mi tabla de umbrales (A.4) con valores reales.
- ☐ Creé el canal #alertas-ads en Slack.
- ☐ Creé cuenta de n8n y conecté Slack.
- ☐ Conecté al menos una plataforma de Ads (Meta) a n8n.
- ☐ Monté y activé la alerta de Sangría.
- ☐ Monté y activé la alerta de Tracking.
- ☐ Monté y activé el Resumen diario.
- ☐ Probé cada alerta a mano antes de activarla.
- ☐ Tengo clara mi rutina diaria de 15 min.
- ☐ Tengo agendada la revisión semanal de los lunes.

Recuerda la regla que sostiene todo el sistema: el robot detecta y avisa; tú decides y actúas. Nunca al revés mientras gestiones presupuestos grandes.