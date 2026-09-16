# Métricas y matemática del Money Model (detalle)

El money model se valida con números. Estas son las cifras que importan y cómo se
calculan. Trabaja con los datos reales del usuario; si no los tiene, usa rangos y
marca el supuesto.

## CAC — Coste de Adquisición de Cliente
Todo el gasto de marketing y ventas en un periodo ÷ número de clientes conseguidos
en ese periodo.
```
CAC = (gasto en ads + comisiones + coste de equipo de ventas + herramientas) / clientes nuevos
```
Incluye TODO lo que cuesta traer al cliente, no solo el ad spend. Un CAC subestimado
te hace creer que el modelo funciona cuando no.

## Gross profit a 30 días (30-day gross profit)
Beneficio BRUTO (ingreso − coste directo de entregar) que deja un cliente en sus
primeros 30 días, sumando todo lo que compra en ese plazo:
```
GP30 = ingreso(atracción + upsell + downsell + 1er ciclo continuidad)
       − coste directo de entregar todo eso
```
Es la cifra que tiene que cubrir el CAC dentro del plazo de la tarjeta de crédito.

## Múltiplo CFA (adquisición financiada por el cliente)
```
Múltiplo CFA = GP30 / CAC
```
- **< 1:** cada cliente te consume caja en 30 días. El crecimiento te ahoga. Arregla
  la secuencia antes de gastar más en leads.
- **= 1:** te financia (recuperas justo lo que cuesta). Puedes sostener.
- **≥ 2:** tienes margen para reinvertir y escalar agresivo. Hormozi: aquí es donde
  "puedes hacer publicidad sin límite", porque ganas más rápido de lo que gastas.

## Payback period
Días que tardas en recuperar el CAC con el beneficio bruto del cliente.
```
Meta: payback ≤ 30 días
```
La razón del 30: es el plazo de crédito sin interés que casi cualquiera consigue
(tarjeta). Recuperas dentro → pagas la tarjeta → repites → crecimiento auto-financiado.

## LTV y LTV:CAC
- **LTV (lifetime value):** beneficio bruto total que deja un cliente en toda su
  vida (incluye continuidad y recompras).
- **LTV:CAC:** salud de largo plazo. Referencia común sana ≥ 3:1.
Importante: el LTV:CAC mide rentabilidad de largo plazo, pero la CAJA la decide el
**payback de 30 días**. Un LTV altísimo con payback de 8 meses igual te quiebra por
falta de efectivo. Prioriza recuperar rápido, luego optimiza LTV.

## Cómo diagnosticar con estas cifras
1. Calcula CAC real y GP30 real.
2. Saca el múltiplo CFA.
3. Si < 1 → la palanca NO es más leads, es el money model:
   - ¿Hay oferta de atracción que recupere CAC en la 1ª compra?
   - ¿Hay upsell inmediato? (suele ser el mayor salto de GP30)
   - ¿Hay downsell que rescate noes?
   - ¿Hay continuidad que sume al primer ciclo?
4. Reproyecta GP30 con la nueva secuencia y vuelve a calcular el múltiplo.
5. Cuando el múltiplo ≥ 1 (ideal ≥2), entonces sí: escala leads con
   `generacion-leads-core-four`.

## Ejemplo numérico (ilustrativo, no real)
- CAC = $300.
- Oferta de atracción $200 (coste entrega $40) → GP $160.
- Upsell tomado por 40% a $500 (coste $100) → GP medio por cliente $160.
- Continuidad $99/mes, 70% se queda 1er mes (coste $20) → GP medio ~$55.
- GP30 ≈ 160 + 160 + 55 = $375.
- Múltiplo CFA = 375 / 300 = 1,25 → financia el crecimiento. Subiendo la toma de
  upsell o el precio de atracción se llega a ≥2 y se puede escalar fuerte.
Sustituye siempre por las cifras reales del usuario.
