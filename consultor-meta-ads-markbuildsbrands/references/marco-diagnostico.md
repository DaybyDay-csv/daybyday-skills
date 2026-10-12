# MARCO DE DIAGNÓSTICO DE CUENTAS META ADS (Mark Builds Brands)
Guía para auditar y diagnosticar una cuenta de Meta Ads por bloques, en orden.

## Bloque 1: TRACKING Y OFERTA
Diagnóstico (cómo saber si tu cuenta está aquí): La cuenta quema presupuesto con mentalidad de 'a ver si funciona': se gasta cientos de dólares en tests sin KPIs definidos de antemano y, cuando el test sale no rentable, se mata el producto por reflejo o se declara que Facebook ads está muerto. En el gestor se mide el CPC con 'cost per click (all)' en lugar de 'cost per link click', y nadie sabe decir si el CPM, CTR, add-to-cart o AOV están por encima o por debajo de su KPI. A esto suele sumarse una oferta débil: producto sin problema doloroso detrás, mercado sin pasión, margen bruto menor de $25 por unidad o precio por debajo de 3x el COGS, que hace casi imposible ser rentable aunque los ads estén bien.
Objetivo del bloque: Convertir cada dólar gastado en datos legibles: definir el KPI de cada métrica clave antes de testear y usar cada test no rentable como un 'check engine light' que localiza la restricción concreta. En paralelo, asegurar que la oferta (mercado, problema, producto, márgenes) esté construida para poder ser rentable de verdad.
Retos típicos:
- Esperar que el producto sea rentable el primer día de test y, si no lo es, concluir que es un scam o que Facebook ads está muerto.
- Tirar ~$500 de ad spend sin un plan predefinido de qué harás con los datos que salgan.
- Culpar al producto de todo y matar tests por reflejo sin revisar métrica a métrica cuál es la restricción.
- Medir el CPC con 'cost per click (all)' y tomar decisiones sobre un dato falseado.
- Perseguir el 100% en todos los sliders en lugar de aceptar que con ~75% de media ya eres rentable.
- Elegir producto por product research antes de hacer market research y problem research.
- Lanzar creatividades sin investigación detrás (AI slop), lo que ensucia la lectura de las métricas de ads.
- Ignorar la señal de CPM alto + CPC alto + CTR bajo que indica creatividades flojas o red ocean.
Soluciones y palancas:
- Aplica el framework de los 12 sliders: divide las métricas clave en soft metrics de ads (CPC, CPM, CTR) y métricas de funnel (add-to-cart rate, conversion rate, AOV/unit economics), y define el KPI de cada una por adelantado.
- En cada test pregúntate solo dos cosas por slider: ¿estoy por encima o por debajo del KPI, y qué hago si está fuera? Corrige únicamente las que fallen y relanza; con ~75% de media en KPI ya eres rentable.
- Trata cada test no rentable como una luz de check engine (la manguera doblada): recorre las métricas una a una para encontrar la restricción concreta antes de decidir si matas o relanzas.
- Configura el gestor para usar 'cost per link click' como CPC real; medir todos los clics falsea el diagnóstico.
- Si detectas CPM alto + CPC alto + CTR bajo, prioriza mejorar creatividades y evalúa si tu nicho es tan competitivo (red ocean) que conviene moverte de mercado.
- Ordena la research: primero mercado (de una lista probada: mascotas, weight loss, pelo, cosmética before/after, skincare, suplementos, belleza, wellness), luego problema emocional específico, y solo después el producto.
- Filtra productos con criterios duros: problema doloroso profundo (nivel salud/seguridad en Maslow) en un mercado apasionado, mínimo $25 de margen bruto por unidad y venta a mínimo 3x el COGS.
- Valida el producto con datos reales, no con intuición: usa los 3 ads metrics (CPC, CTR, CPM) y las 3 funnel metrics (ATC ratio, ATC a compra, AOV/LTV) para saber exactamente qué arreglar en cada relanzamiento.
- Antes de lanzar ads, haz compras de prueba en la tienda para verificar que el payment processor funciona y ver lo que ven tus clientes reales.
- Cuando algo no funcione, no declares que el producto no sirve: identifica el slider fuera de KPI, aplica la estrategia correcta para esa métrica, ajusta store/producto/ads y relanza siendo rentable.
Foco diario:
- Revisar cada ad set slider a slider contra su KPI: por encima o por debajo, y qué acción toca.
- Ante cualquier test no rentable, ejecutar el diagnóstico de restricción antes de tomar cualquier otra decisión.
- Asegurar que cada creativo ataca un problema emocional específico del mercado, porque el CPC, CPM y CTR dependen de ello.
- Mantener las cuentas claras de margen: $25 de margen bruto mínimo y precio a 3x el COGS antes de escalar nada.
- No tocar targeting de intereses ni lookalikes como palanca: la creatividad es el targeting y el ad set corre broad.
Señales de éxito:
- Cada test, incluso los no rentables, termina con un diagnóstico concreto de qué slider falló y qué se va a arreglar.
- Los relanzamientos tras arreglar la restricción llegan a rentabilidad sin haber cambiado de producto.
- El CPC que miras es 'cost per link click' y las decisiones se basan en las 3 métricas de ads más las 3 de funnel.
- El producto activo cumple los tres criterios: problema doloroso en mercado apasionado, margen bruto ≥$25 y 3x COGS.
- Dejas de matar productos por reflejo y de culpar a Facebook: el gasto se reenmarca como compra de datos que se saben leer.
- La cuenta es rentable operando al ~75% de sliders en KPI, sin obsesionarse con la perfección.
Graduación al siguiente bloque: Antes de cada test existe un KPI escrito para las métricas de ads (CPC, CPM, CTR) y de funnel (add-to-cart rate, ATC a compra, conversion rate, AOV/unit economics). El gestor muestra 'cost per link click', no 'cost per click (all)'. Tras cada test no rentable hay un diagnóstico métrico a métrico que identifica qué slider está fuera de KPI y qué acción se toma. El producto validado cumple: problema doloroso profundo en un mercado apasionado, mínimo $25 de margen bruto y precio a 3x el COGS. La cuenta alcanza rentabilidad con ~75% de sliders en KPI, sin exigir perfección.

## Bloque 2: ESTRUCTURA DE CAMPAÑAS
Diagnóstico (cómo saber si tu cuenta está aquí): Abres el gestor y ves ad sets construidos sobre intereses, lookalikes y custom audiences como método principal, con retargeting lleno de audiencias apiladas. Cada ad set lleva un solo anuncio o mezcla varios conceptos nuevos distintos entre sí, sin estructura de variaciones. Las campañas están fragmentadas en estructuras complejas por audiencia y los intereses corren con presupuesto alto sin cap. Cuando algo falla, el reflejo del equipo es tocar el targeting en vez de revisar creativos y métricas (CPC, CTR, CPM).
Objetivo del bloque: Alinear la estructura de la cuenta con cómo funciona de verdad el algoritmo post-Andromeda: broad targeting con Advantage+, targeting mínimo en el ad set y el creativo como mecanismo real de segmentación. La cuenta deja de ser un laberinto de audiencias y pasa a ser un sistema limpio de testing por conceptos.
Retos típicos:
- Arrastrar el manual antiguo de Meta y construir intereses, lookalikes y custom audiences por inercia.
- Miedo a correr broad creyendo que sin audiencias el anuncio no encontrará al cliente.
- Mezclar varios conceptos net new dentro del mismo ad set y romper la lectura que hace el algoritmo.
- Presión del cliente por 'controlar' a quién se le muestra el anuncio con targeting real, sobre todo en retargeting.
- Dejar que los intereses consuman presupuesto alto sin límite cuando ya no lo sostienen de forma rentable.
- Querer controlar el algoritmo en vez de darle control within reason.
- Creer que basta con que el creativo sea bueno sin entender la parte científica del sistema.
- Confundir entender el algoritmo con aceptar sin cuestionar todo lo que la plataforma recomienda.
Soluciones y palancas:
- Corre broad targeting con Advantage+ y usa el targeting del ad set solo como pequeño sandbox de experimentación, nunca como método principal.
- Aplica la estructura de creative diversity por ad set: lanza 1 net new concept como anuncio 1 y añade los anuncios 2, 3 y 4 como variaciones de ese mismo concepto.
- Configura el retargeting completamente broad, sin custom audiences, como mucho una exclusión de purchasers, igual que hacen los anunciantes de alto nivel.
- Si usas audiencias de intereses, mantenlas con presupuesto capped porque tras Andromeda rara vez sostienen presupuestos altos de forma rentable.
- Domina los 4 pasos del algoritmo (retrieval, light ranking, heavy ranking, auction) para asumir que es el creativo, no el ad set, quien define el targeting real.
- Ten presente que en retrieval Meta analiza hook, formato, demografía, copy, guion, thumbnail y landing page para decidir a quién mostrar el anuncio; trabaja esas piezas, no los intereses.
- Cuando algo falle, diagnostica con las 3 métricas de ads (CPC, CTR, CPM) y las 3 de funnel (add to cart ratio, ATC a compra, AOV/LTV) para saber exactamente qué arreglar antes de reestructurar.
- Dale a Facebook control within reason y cuestiona todo lo que la plataforma recomienda en lugar de aplicarlo por defecto.
- Prioriza tu tiempo en creatividades y funnel por encima de la estrategia de ads; deja de tocar la estructura una vez montada.
- Mantén cuentas de anuncios de respaldo ante ban waves para no quedarte sin operación.
Foco diario:
- Revisa que cada ad set activo respete la regla de 1 concepto nuevo + variaciones del mismo concepto.
- Abstente de tocar intereses, custom audiences y lookalikes durante el vuelo de las campañas.
- Vigila que las campañas de intereses capped no crezcan en presupuesto.
- Mira CPC, CTR y CPM a diario para detectar dónde rompe el sistema antes de cambiar estructura.
- Al lanzar algo nuevo, pregúntate si el targeting del ad set es realmente mínimo o si estás sobreconfigurando.
- Manda buena data a la plataforma manteniendo la estructura estable en vez de resetearla.
Señales de éxito:
- El gestor se ve simple: campañas broad, ad sets con un concepto y sus variaciones.
- Los anuncios nuevos reciben entrega sin necesitar capas de audiencia.
- El retargeting corre broad con solo la exclusión de purchasers y mantiene rendimiento.
- El equipo deja de proponer cambios de targeting y pasa a proponer conceptos y variaciones creativas.
- Cuando algo falla, el diagnóstico sale de CPC/CTR/CPM y métricas de funnel, no de reestructurar audiencias.
- Los intereses capped dejan de ser necesarios porque el broad sostiene el presupuesto de forma rentable.
Graduación al siguiente bloque: Todas las campañas corren broad/Advantage+ con targeting mínimo en el ad set. No existen intereses, lookalikes ni custom audiences como estrategia principal; si quedan pruebas de intereses, están con presupuesto capped. El retargeting corre completamente broad sin custom audiences, solo con exclusión de purchasers. Cada ad set sigue la estructura de creative diversity: 1 net new concept como anuncio 1 y los anuncios 2, 3 y 4 como variaciones de ese concepto. El equipo diagnostica con CPC, CTR, CPM y métricas de funnel (ATC ratio, ATC a compra, AOV/LTV) en vez de reestructurar targeting.

## Bloque 3: INVESTIGACIÓN Y ÁNGULOS
Diagnóstico (cómo saber si tu cuenta está aquí): Se testean decenas de creativos sin encontrar ganador estable porque se persigue el anuncio ganador y no el mensaje ganador: no existen foundational docs ni investigación documentada, y el copy se improvisa. Los hooks se quedan en el nivel consciente (sin emociones, creencias ni identidad) y el CTR se hunde por desconexión entre anuncio, avatar y landing. Se publica volumen IA sin pensamiento detrás ('AI slop'), se copia a competidores sin ingeniería inversa, y el vídeo se produce antes de validar el ángulo en imagen barata, con anuncios solo directos que no escalan en frío.
Objetivo del bloque: Entender al cliente mejor que nadie mediante investigación profunda (5 capas) para encontrar el mensaje o ángulo ganador, y sistematizar su testeo con anuncios de imagen baratos antes de invertir en vídeo, transmutando después el mensaje validado en cientos de formatos.
Retos típicos:
- Perseguir el anuncio ganador testeando sin fin en lugar de construir el mensaje ganador que escala a toda la cuenta.
- Lanzar AI slop: volumen masivo de creatividades IA sin investigación ni pensamiento detrás.
Graduación al siguiente bloque: 1) Existen foundational docs con research psicológica y psicográfica del avatar cargados en un proyecto de Claude con instrucciones fijas. 2) Están documentados los 5 niveles (pensamientos conscientes, emociones, creencias, identidad, consciencia) y la emoción de calibración del avatar (culpa, miedo, dolor...). 3) Hay research en orden: mercado probado → problema emocional con subnichos listados → producto. 4) Existe biblioteca de swipes de anuncios 4-5 estrellas convertidos en fórmulas adaptadas a tu marca. 5) Un mensaje ganador ha sido validado con imagen antes de producir vídeo y ya se está transmutando en múltiples formatos. 6) Todo creativo nuevo nace de un guion/copy escrito, no de la producción.

## Bloque 4: CREATIVIDADES CON IA
Diagnóstico (cómo saber si tu cuenta está aquí): Detecta este problema si el cliente produce pocas creatividades nuevas por semana, depende de edición manual o creadores caros, y se queda sin ángulos que testear mientras los ad sets mueren por falta de conceptos netos nuevos. Otras señales: fatiga creativa con CTR deteriorándose, todo el presupuesto en frío corriendo solo anuncios directos, y anuncios de competidores copiados literalmente sin analizar por qué funcionaron. También si publica texto generado por IA con errores ortográficos o espera resultados sin un sistema de producción que alimente la cuenta: la creatividad es el targeting, y sin volumen de testeo el algoritmo no tiene con qué trabajar.
Objetivo del bloque: Industrializar la producción de creatividades con IA para convertir anuncios ganadores swiped en variaciones propias de tu marca en minutos, testear masivamente ángulos y mensajes con imagen barata antes de invertir en vídeo, y encontrar el mensaje ganador que luego se transmuta en cientos de formatos.
Retos típicos:
- Pedirle a la IA que copie el anuncio del competidor sin un proceso que analice por qué funcionó.
- Saltar directo al vídeo (caro y lento) sin haber validado antes los ángulos con anuncios de imagen.
- Hacer solo anuncios directos cuando los indirectos son los que permiten escalar la cuenta en frío.
- Publicar texto generado por IA sin revisar ortografía y legibilidad, o abusar del texto en la imagen.
- Perseguir el anuncio ganador en lugar del mensaje ganador que se transmuta en docenas de formatos.
- Swipear solo dentro del propio nicho y perder los ganadores de nichos cruzados.
- Tratar el copy como un añadido cuando es la fundación de todo el anuncio.
- Autoimponerse el límite de 'la IA no puede hacer eso' antes de siquiera intentar el workflow.
Soluciones y palancas:
- Construye foundational docs: research psicológica y psicográfica de tu cliente cargada en un proyecto de Claude con instrucciones fijas, para que analice cualquier anuncio swiped o guion de competidor y lo adapte a tu marca.
- Aplica el workflow de swipe con IA: busca en Get Hooked anuncios de imagen 4-5 estrellas en inglés, descárgalos, súbelos a tu proyecto de Claude para ingeniería inversa, y pega el prompt text-to-image resultante en Higgsfield con Nano Banana Pro, ratio 1:1 o 9:16 y 4 generaciones.
- Empieza siempre por anuncios de imagen: son baratísimos y rapidísimos, perfectos para testear gran cantidad de ángulos, mensajes y avatares antes de invertir en vídeo.
- Sube un PNG del producto sobre fondo blanco en cada generación que muestre el producto; cada ejecución tarda 10-30 segundos.
- Itera en Gemini cuando una generación esté bien pero no sea perfecta: copia la imagen y usa prompts de una sola frase tipo 'arregla esto, cambia esto por aquello'; funciona casi siempre.
- Produce vídeo en dos partes: frame inicial con text-to-image y luego image-to-video con Kling 3, para anuncios completos en menos de 30 minutos.
- Matchea el tipo de anuncio con la temperatura del tráfico: indirectos en frío porque son los que más escalan, directos en retargeting MOF/BOF donde son rentables a menor escala.
- Trabaja por mensaje ganador, no por anuncio ganador: cuando lo encuentres, transmútalo en docenas de formatos y variaciones para saturar cada segmento con el mismo ángulo validado.
Graduación al siguiente bloque:
- Tienes unos foundational docs con research psicológica y psicográfica del cliente cargados en un proyecto de Claude con instrucciones fijas.
- Existe un workflow de swipe operativo: anuncio de imagen 4-5 estrellas de Get Hooked en inglés, ingeniería inversa en Claude (copy, colores, layout), y prompt a Higgsfield con Nano Banana Pro, 4 variaciones y PNG del producto en fondo blanco.
- Produces imágenes de anuncio en menos de 60 segundos y docenas de conceptos en ~20 minutos.
- Has testado gran cantidad de ángulos, mensajes y avatares con anuncios de imagen antes de gastar tiempo y dinero en vídeo.
- Las imágenes casi perfectas pasan por iteración en Gemini con prompts de una frase hasta cerrarse, en vez de descartarse.
- Produce vídeos IA completos (frame text-to-image + image-to-video con Kling 3) en menos de 30 minutos, revisando metadatos antes de subirlos.
- El mix de anuncios es correcto: indirectos en frío y directos reservados a retargeting de medio y bajo embudo.
- Ningún anuncio se copia literalmente: cada swipe se convierte en fórmula analizada y adaptada a la marca.

## Bloque 5: LANDING Y FUNNEL
Diagnóstico (cómo saber si tu cuenta está aquí): Las métricas de ads (CTR, CPC, CPM) están sanas pero la conversión se rompe al llegar a la web: mucho add to cart pero bajo ratio de ATC a compra, o directamente poco ATC. El AOV es bajo (~40$) y no permite pujar con ventaja en la subasta. Revisa también el match tráfico-página: si mandas tráfico frío con ads indirectos directo a una sales page, o tráfico BOF caliente a un funnel largo de 4 páginas, el problema es de arquitectura de funnel, no de anuncios.
Objetivo del bloque: Controlar la percepción del producto y maximizar el valor por visitante (EPV) con páginas y funnels diseñados por conversión, no por estética, matcheando siempre la temperatura del tráfico con la arquitectura del funnel.
Retos típicos:
- Optimizar la landing por estética buscando la página más bonita en lugar de los elementos que mueven conversión (outcome, autoridad, escasez, urgencia).
- Hacer split tests en la primera página que Facebook crawlea, lo que sesga resultados, rompe el learning y destruye el control que ya funcionaba.
- Mostrar el precio demasiado pronto, antes de justificar el producto con features, beneficios y outcome.
- Desalinear la temperatura del tráfico con el formato del ad y la página: ads indirectos de frío mandados directo a sales page o tráfico caliente a funnels largos.
- Querer dar al cliente máxima información en vez de escalar el copy hasta el estado emocional final que compra.
- Tener un AOV bajo que impide pujar más que los competidores en la subasta de Meta.
- Pedirle a la IA estrategia de funnel en vez de usarla solo para ejecutar lo que ya decidiste.
- Ser poco intencional con las imágenes de la página: fotos de producto y lifestyle sin propósito definido.
Soluciones y palancas:
- Sustituye la PDP templated de Shopify por una sales page custom (Claude, Replo, GemPages) para controlar la justificación del producto todo el tiempo posible antes de revelar el precio.
- Aplica la cadena de persuasión: 1) features (cosas específicas del producto), 2) beneficios, 3) ultimate outcome (estado emocional tras recibir los beneficios), 4) vende el outcome como razón principal de compra.
- Matchea temperatura y formato: clasifica tráfico en TOF/MOF/BOF, ubica el ad en el espectro directo-indirecto (UGC y statics de oferta = directo; native statics = máximo indirecto), y envía ads indirectos a advertorial, listical o quiz antes de la sales page.
- Monta un chat funnel con advertorial tipo artículo y upsells post-compra de 80-300$ (no de 20$): eleva el AOV de ~40$ a ~100$ y te deja pujar más que la competencia. Un 10% de take rate sobre un upsell de 200$ aporta 20$ al AOV.
- Diagnostica antes de tocar nada: si no convierte, mira CPC, CTR y CPM (lado ads) frente a add to cart ratio, ATC a compra y AOV/LTV (lado funnel) para saber exactamente qué arreglar.
- Testea landers creando nuevos post IDs hacia nuevas URLs y midiendo EPV; prioriza quitar elementos antes que añadir, porque restar mueve más la conversión.
- Construye la landing con el proceso de 6 pasos: swipe en PDF, copy con Claude sobre foundational docs, imágenes con IA con propósito, diseño, chiefing (leer en voz alta 5-7 veces) y deploy a GitHub + Cloudflare.
- Escribe el copy a nivel de lectura máximo de 8º grado, idealmente 5º grado o menos, priorizando claridad sobre ingenio: que sea bonito no correlaciona con cuánto convierte.
- No split testees nunca la primera página que Facebook crawlea; prueba cambios en páginas secundarias o con nuevos post IDs hacia URLs nuevas.
- Ten en cuenta que el retrieval de Meta analiza también la landing page para decidir targeting: la creatividad es el targeting, pero la página es parte de la señal.
Foco diario:
- Revisar las 3 métricas de funnel (ATC ratio, ATC a compra, AOV/EPV) separadas de las 3 de ads antes de tocar nada.
- Auditar que cada ad activo dirige a la página correcta según su temperatura y formato (directo a sales page, indirecto a advertorial).
- Iterar el copy leyéndolo en voz alta, simplificándolo y bajando el nivel de lectura, escalando de features a beneficios a outcome.
- Producir y testear nuevos conceptos estáticos hacia URLs nuevas midiendo EPV, con la regla de quitar antes que añadir.
- Optimizar el chat funnel: fuerza y estructura de los upsells post-compra de 80-300$.
- Usar la IA solo para ejecutar (copy, imágenes, montar páginas), nunca para decidir la estructura del funnel.
Señales de éxito:
- El EPV de las páginas sube test a test gracias a quitado de elementos y venta del outcome.
- El AOV crece de ~40$ hacia ~100$ con take rates sanos en los upsells, y puedes pujar más en la subasta que tus competidores.
- Mejora el ratio de ATC a compra sin haber tocado los anuncios, confirmando que el problema estaba en la página.
- Los ads indirectos (advertorial, native statics) escalan tráfico frío de forma rentable porque llegan a una arquitectura de funnel correcta.
- Cada landing nueva se monta en horas con el proceso de swipe + Claude y mantiene el nivel de lectura bajo y el copy validado en voz alta.
- Nadie en el equipo split testea la primera página crawleada y los tests se hacen vía nuevos post IDs hacia URLs nuevas.
Graduación al siguiente bloque: Tienes una sales page custom (Claude, Replo, GemPages) o advertorial en lugar de la PDP templated de Shopify, y el precio no aparece hasta que el outcome ya se ha vendido. Has diagnosticado el funnel con las 3 métricas de ads y las 3 de funnel sabiendo qué palanca tocar. El AOV sube con upsells post-compra de 80-300$ en un chat funnel con advertorial. Mides EPV por URL, haces tests con nuevos post IDs hacia nuevas URLs y no split testeas la primera página que Facebook crawlea.

## Bloque 6: LECTURA DE MÉTRICAS
Diagnóstico (cómo saber si tu cuenta está aquí): La cuenta tiene este problema cuando el cliente mata productos tras el primer test no rentable sin saber qué métrica falló, o gasta cientos de dólares con mentalidad de 'a ver si funciona' sin KPIs definidos de antemano. Otras señales: evalúa el CPC con la métrica equivocada (cost per click all en vez de cost per link click), culpa al producto o a Facebook de todo y no puede decirte qué slider está fuera de KPI tras un test fallido. También aparece cuando espera rentabilidad el primer día y, si no llega, declara que es un scam o que los ads están muertos.
Objetivo del bloque: Convertir cada gasto en datos accionables leyendo las 12 métricas clave como sliders contra KPIs predefinidos. Que un test no rentable deje de ser un veredicto sobre el producto y se convierta en un diagnóstico de la restricción concreta que hay que arreglar antes de relanzar.
Retos típicos:
- Esperar que el producto sea rentable el primer día de test y, si no lo es, declararlo scam o decir que Facebook ads está muerto.
- Tirar ~500$ de ad spend sin haber decidido qué harás con los datos que salgan.
- Medir el CPC con 'cost per click (all)', que incluye todos los clics y falsea el dato real.
- No tener el KPI de cada métrica definido antes de lanzar, lo que impide saber si estás por encima o por debajo.
- Culpar al producto de todo, como repiten los gurús, en lugar de buscar la restricción.
- Perseguir el 100% en todos los sliders en vez de aceptar que ~75% de media ya es rentable.
- No saber qué acción aplicar cuando una métrica concreta está fuera de KPI.
- Confundir CPM alto + CPC alto + CTR bajo con un problema de producto cuando puede ser una red ocean.
Soluciones y palancas:
- Aplica el framework de los 12 sliders: divide las métricas clave en soft metrics de ads (CPC, CPM, CTR) y métricas de funnel (add-to-cart rate, conversion rate, AOV/unit economics), y trata cada una como un slider independiente.
- Define el KPI de cada métrica por adelantado y reduce la lectura a dos preguntas: ¿estoy por encima o por debajo del KPI, y qué hago si está fuera de KPI?
- Usa 'cost per link click' en el gestor de Meta para evaluar tu CPC real; 'cost per click (all)' mide todos los clics y falsea el dato.
- Trata cada test no rentable como un 'check engine light': te dice que algo falla pero no qué, así que revisa métrica a métrica cuál es la restricción antes de decidir matar el producto.
- Aplica el método de la manguera doblada: identificada la métrica fuera de KPI, aplica la estrategia correcta para arreglarla, ajusta store/producto/ads y relanza.
- Corrige solo las sliders que estén fuera de KPI y relanza; no necesitas todas al 100%, con ~75% de media ya eres rentable sin perfección.
- Reenmarca el gasto: no pierdes dinero, compras datos, pero solo si sabes leerlos y tienes decidido de antemano qué harás con ellos.
- Si tienes CPM alto, CPC alto y CTR bajo, prioriza mejorar creatividades y evalúa si tu nicho es tan competitivo (red ocean) que conviene moverte a otro.
- Para un diagnóstico rápido usa las 6 métricas del diagnóstico: 3 de ads (CPC, CTR, CPM) y 3 de funnel (add to cart ratio, ATC a compra, AOV/LTV) para saber exactamente qué arreglar.
Foco diario:
- Antes de lanzar cualquier test, tener por escrito el KPI de las 12 métricas y qué harás con los datos que salgan.
- Verificar que el gestor muestra cost per link click y no cost per click (all).
- Al leer resultados, comparar cada slider contra su KPI: ¿por encima o por debajo?
- Ante un test no rentable, identificar la restricción concreta métrica a métrica antes de cualquier decisión de matar o escalar.
- Aplicar el fix de la métrica fuera de KPI (store, producto o ads) y relanzar en lugar de empezar de cero.
- Evaluar con los datos si el mercado es red ocean y toca cambiar de nicho en vez de insistir con creatividades.
Señales de éxito:
- Ningún test no rentable se cierra sin haber identificado la métrica restricción concreta.
- Los relanzamientos tras corregir una slider fuera de KPI salen rentables.
- Consigues rentabilidad con ~75% de media entre sliders sin perseguir la perfección en todas.
- Cada dólar gastado produce un dato accionable porque los KPIs estaban definidos de antemano.
- Dejas de culpar al producto o a Facebook tras un primer mal test y operas por diagnóstico.
- El CPC que lees en tus reportes coincide con el CPC real de clics a la landing, no con clics inflados.
Graduación al siguiente bloque: Tiene KPIs definidos por adelantado para las 12 métricas (soft metrics de ads: CPC, CPM, CTR; métricas de funnel: add-to-cart rate, conversion rate, AOV/unit economics) antes de lanzar cualquier test. Usa cost per link click y no cost per click (all) en el gestor. Tras cada test no rentable identifica métrica a métrica cuál es la restricción, aplica la estrategia correcta para arreglarla y relanza. Considera un test rentable con ~75% de media entre sliders sin perseguir el 100% en todos.

## Bloque 7: ESCALADO Y VELOCIDAD
Diagnóstico (cómo saber si tu cuenta está aquí): La cuenta no escala porque el ritmo de testeo es lento: pocas creatividades nuevas por semana, se espera días o semanas a que el algoritmo 'aprenda' y el product research se come el tiempo que debería ir en anuncios y funnel. En el gestor se ve un ad set con un solo anuncio o solo anuncios directos en frío, targeting apretado con intereses y lookalikes en vez de broad, y tráfico frío mandado directo a la PDP. Además, cuando no hay resultados, se culpa al producto por intuición en vez de diagnosticar con CPC/CTR/CPM y add to cart ratio, ATC a compra y AOV/LTV.
Objetivo del bloque: Cerrar el feedback loop lo más rápido posible: usar la IA para producir creatividades y funnels en horas, testear en volumen con la estructura correcta de ad sets y diagnosticar con las 6 métricas para escalar los ganadores hacia $1k/día y más.
Retos típicos:
- Copiar el anuncio del competidor pidiéndoselo tal cual a la IA sin analizar por qué funcionó y convertirlo en fórmula
- Quemar más de 2 horas en product research cuando con las herramientas adecuadas no debería llevar ni eso
- Hacer solo anuncios directos, que son los que menos escalan en frío, y descuidar los indirectos
- Elegir micro-nichos demasiado pequeños que convierten el escalado en imposible
- Diagnosticar mal y creer que si no hay dinero es por el producto equivocado sin mirar las métricas de ads y de funnel
- Split testear la primera página que Facebook crawlea, sesgando resultados y rompiendo el learning
- Depender de una sola cuenta de anuncios y quedarse fuera del juego con un ban wave
- Caer en la 'mental masturbation': planificar, investigar y pensar sin lanzar nada
Soluciones y palancas:
- Trata la velocidad como la ventaja real de la IA: de idea a negocio en marcha en menos de 24 horas, y elige el mercado en menos de 30 minutos de una lista de mercados probados (mascotas, weight loss, pelo, skincare, suplementos, salud).
- Producción masiva de estáticos: Nano Banana Pro en Higgsfield, ratio 1:1 o 9:16 y 4 generaciones por prompt (unas 8 variaciones casi perfectas); si la imagen está bien pero no es perfecta, itera en Gemini con prompts de una frase.
- Workflow de swipe con foundational docs: busca anuncios 4-5 estrellas en Get Hooked, súbelos a un proyecto de Claude con el research del cliente, deja que haga ingeniería inversa de copy, colores y layout adaptados a tu marca, y pega el prompt en Higgsfield con el PNG del producto en fondo blanco.
- Empieza por anuncios de imagen, no de vídeo: son baratísimos y rapidísimos (menos de 60 segundos por imagen), te permiten testear muchos ángulos, mensajes y avatares antes de invertir en vídeo; el vídeo se monta en dos pasos (frame text-to-image + image-to-video con Kling 3) en menos de 30 minutos.
- Estructura post-Andromeda: lanza un net new concept como anuncio 1 y añade los anuncios 2, 3 y 4 como variaciones de ese concepto en el mismo ad set; corre broad y usa los intereses solo como pequeño sandbox de experimentación con presupuesto limitado.
- Matchea temperatura de tráfico con funnel: indirectos y native statics en frío hacia advertorial, listical o quiz; directos reservados para MOF/BOF; no mandes tráfico frío a la PDP ni tráfico caliente a funnels de 4 páginas, y para testear páginas crea nuevos post IDs hacia nuevas URLs midiendo EPV, quitando elementos antes que añadiendo.
- Aplica criterios de producto simples para poder escalar: problema doloroso y profundo en un mercado apasionado, mínimo $25 de margen bruto por unidad y precio a mínimo 3x el COGS, dentro de mercados masivos (las marcas de 9 cifras no entran en micro-nichos).
- Diagnostica con las 6 métricas: CPC, CTR y CPM para saber si el problema es de ads; add to cart ratio, ATC a compra y AOV/LTV para saber si el problema es de funnel; así sabes exactamente qué capa arreglar en vez de reinventar el producto.
- Blindate la operación: haz compras de prueba en tu tienda antes de lanzar ads y mantén cuentas de anuncios de respaldo ante ban waves.
- Prioriza el tiempo en tienda y creatividades por encima de la estrategia de ads: la palanca máxima del escalado es correr más anuncios, y para eso protege tu foco eliminando decisiones triviales y trabajando en bloques profundos.
Foco diario:
- Generar y subir a la cuenta variaciones y net new concepts cada día; el objetivo es volumen de ángulos testados, no perfección
- Revisar las 6 métricas (CPC, CTR, CPM, ATC ratio, ATC a compra, AOV/LTV) y decidir si el problema está en el ad, en la página o en la oferta antes de tocar nada
- Swipear anuncios 4-5 estrellas en Get Hooked, convertirlos en fórmulas con Claude y regenerarlos con tu marca
- Verificar que cada ad indirecto va a advertorial y cada ad directo al embudo medio-bajo, y que el tráfico frío nunca aterriza directo en la PDP
- Bloquear una sesión de trabajo profundo al día (20 minutos mirando una pared antes de la más importante) y gastar la energía liberada en correr más anuncios, no en decisiones triviales
Señales de éxito:
- El ciclo desde que detectas un ángulo hasta que está corriendo en la cuenta se mide en horas, no en semanas
- Produces docenas de conceptos por tanda en unos 20 minutos y el pipeline de creatividades nunca se vacía
- Los ad sets sostienen creative diversity (1 concepto neto nuevo + variaciones) sin romper el learning phase
- El diagnóstico deja de ser una corazonada: cada decisión de arreglo apunta a la métrica concreta que falla
- El gasto y los ingresos crecen hacia $1k/día y más manteniendo el margen de 3x el COGS
- Un ban de cuenta no para el negocio porque ya tienes cuentas de respaldo operativas
Graduación al siguiente bloque:
- El mercado se elige en menos de 30 minutos y la primera campaña está viva en menos de 24-72 horas desde la idea
- Se generan docenas de conceptos de anuncios por tanda en unos 20 minutos con el workflow de IA (Nano Banana Pro en Higgsfield)
- Cada ad set corre con 1 net new concept más 3-4 variaciones del mismo concepto, no con anuncios sueltos
- La cuenta corre broad: el targeting del ad set es mínimo, y el retargeting va sin custom audiences salvo exclusión de purchasers
- Cada diagnóstico de rendimiento usa las 6 métricas (CPC, CTR, CPM, ATC ratio, ATC a compra, AOV/LTV) y señala la capa exacta a arreglar
- Se han hecho compras de prueba verificando el payment processor y existen cuentas de anuncios de respaldo preparadas

## Bloque 8: FOCO Y EJECUCIÓN
Diagnóstico (cómo saber si tu cuenta está aquí): Se nota en el operador más que en una métrica suelta: tests que queman ~500$ en modo 'a ver si funciona' sin KPIs definidos por adelantado ni plan de qué hacer con los datos. Productos o cuentas declarados muertos tras el primer test no rentable sin revisar métrica a métrica cuál era la restricción. Semanas enteras en product research, planificación y 'estrategia' sin lanzar creatividades nuevas, mientras sesiones de trabajo interrumpidas por el teléfono y fake breaks impiden producir al ritmo que la cuenta necesita.
Objetivo del bloque: Recuperar el control de la atención y del sistema dopaminérgico para ejecutar a diario el trabajo que mueve la aguja en la cuenta: lanzar creatividades, testear con criterios predefinidos y diagnosticar con datos, en lugar de planificar, dispersarse o esperar resultados pasivamente.
Retos típicos:
- Coger el teléfono justo al terminar el trabajo y arruinar el bucle de hábito con fake breaks.
- Hacer un detox de dopamina literal o dejar los estímulos cold turkey sin sustituirlos por actividad tónica, acabando en recaída.
- Caer en la mental masturbation trap: planificar, investigar y pensar sin ejecutar nada, sintiéndote productivo.
- Esperar rentabilidad el primer día de test y declarar que el producto es un scam o que Meta Ads está muerto.
- Obsesionarse con la meta y refrescarla constantemente en vez de fijarse en los inputs diarios.
- Empezar preguntando qué más añadir en lugar de qué no hay que hacer (ley de la inversión).
- Decir 'la IA no puede hacer eso' y autoimponerse límites que no existen.
- Quemar energía mental diaria en microdecisiones triviales como qué comer o qué vestir.
Soluciones y palancas:
- Aplica el protocolo de mirar la pared: 20 min/día sin teléfono, sin comida y con poca luz, justo antes de tu sesión de trabajo profundo más importante, mínimo 30 días, emparejado con tareas de alto procesamiento interno.
- Cierra el bucle de hábito tras el trabajo con dopamina lenta (pasear, comer saludable), nunca con el teléfono; sustituye estímulos fásicos por suelo tónico, no los cortes en seco.
- Crea un disparador biológico (café, pre-entreno, habitación oscura) asociado siempre a la sesión de gestión de la cuenta, y repítelo hasta que ponerse a trabajar sea automático.
- Trackea el tiempo con alarmas cada 30 minutos durante al menos una semana para ver cuántas horas van realmente a lo que mueve la aguja: correr más anuncios, creatividades y tienda.
- Estandariza microdecisiones triviales (misma comida, misma ropa) para reservar la energía mental para decisiones de cuenta de alto impacto.
- Escribe la lista de lo que NO debes hacer con la cuenta (tocar intereses sin motivo, cambiar estrategia a mitad de test, matar productos por reflejo) y conviértela en innegociables usando la ley de la inversión de Munger.
- Antes de cada test, define el KPI de las 12 métricas clave (usa cost per link click, no cost per click all, para el CPC real) y solo pregúntate: ¿estoy por encima o por debajo, y qué hago si está fuera? Un test no rentable es un check engine light que exige diagnóstico slider a slider, no una sentencia.
- Prioriza ejecución sobre estrategia: máximo ~2h de product research, anuncios de imagen primero para testear ángulos barato y rápido, y workflows de IA (swipe, reescritura de guiones, generación de clips) para producir en minutos.
- Corre broad targeting con estructura de creative diversity por ad set (un net new concept + variaciones) porque el targeting real lo determina el creativo, no los intereses.
Graduación al siguiente bloque: Protocolo de mirar la pared sostenido mínimo 30 días a 20 min/día justo antes de la sesión de trabajo profundo más importante. Time tracking con alarmas cada 30 minutos completado al menos 1 semana, mostrando la mayoría del tiempo en creatividades, tienda y análisis. Cada test lanzado con KPIs definidos por adelantado y regla de decisión para cada métrica. Product research limitada a ~2 horas y revisión de metas hecha como máximo 1 vez al mes.
