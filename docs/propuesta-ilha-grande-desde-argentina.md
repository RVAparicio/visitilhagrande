# PROPUESTA de artículo nuevo para VIG — "Ilha Grande desde Argentina"

> Handoff para el equipo editorial de Visit Ilha Grande. Redactado por el asistente del
> proyecto web_posada (Pousada Costa Verde) el 2026-07-13, con la fruta de primera mano de
> Ricardo (audio del 2026-07-12). NO fue pusheado: se deja como propuesta para que el equipo
> de VIG lo revise, calibre a su voz y lo publique desde acá.

---

## 1. Intraanálisis / brief para el equipo

**Qué es:** una guía nueva, ES-only, para captar al viajero argentino (y de refilón chileno)
que busca "cómo llegar a Ilha Grande desde Argentina / desde Buenos Aires". Nace de una
decisión estratégica: el contenido específicamente argentino (voseo, tema del dólar/tarjeta,
trucos de transfer) **no pertenece al sitio institucional de la posada** (voz elegante en
"tú"), sino **acá, en el blog**, donde el registro descontracturado y el "qué evitar" son oro
y donde además hace el trabajo SEO/GEO.

**Objetivo SEO/GEO (keywords a preservar):** "Ilha Grande desde Argentina", "cómo llegar a
Ilha Grande desde Buenos Aires", "Río de Janeiro a Ilha Grande", "Ilha Grande para
argentinos". Van en title, description, FAQ y cuerpo. Argentina repetido a propósito.

**Ubicación técnica propuesta:**
- Colección `guides`, archivo `from-argentina.es.md`.
- `slug: ilha-grande-desde-argentina` · `translationKey: from-argentina` · `lang: es`.
- Es **ES-only** (no hay versiones EN/FR/PT): el artículo es argentino por naturaleza.
  → ⚠️ **A revisar por el equipo:** verificar que un guide con un solo idioma no rompa el
  language-switcher/hreflang (el build local pasó, 38 páginas, sin error — pero confirmar el
  comportamiento del selector). Si molesta, decidir si se excluye del switcher o se acepta
  como post monolingüe.

**Enlaces internos** (ya apuntan a slugs ES reales, verificados): `/es/como-llegar-a-ilha-grande/`
y `/es/donde-dormir-ilha-grande/`. **Backlink saliente** a https://pousadacostaverde.com
en la nota de transparencia (coherente con el resto de VIG).

**Tono:** honesto y descontracturado, voseo (como ya usa el ES de VIG), receta editorial de
la casa (respuesta directa arriba, FAQ en frontmatter, "qué evitar" como ángulo, transparencia
de autoría al final). NO cae en el registro "ahorro/mochilero seco" (Ricardo lo detesta):
el hook es el HECHO ECONÓMICO (tarjeta afuera = mal negocio), no la complicidad identitaria.

**Puntos que el equipo debería revisar/actualizar antes de publicar:**
1. **Precios**, todos aproximados y del 2026 (transfer ~R$200 pp, Uber Río→muelle ~R$230,
   vuelos BUE→Río ~USD 300, Santiago→Río ~USD 200): refrescar si pasaron meses.
2. **Realidad cambiaria argentina**: Impuesto PAIS eliminado 1/1/2026; percepción 30% a
   cuenta de Ganancias vigente sobre tarjeta en pesos; Pix vía apps tipo Belo. Confirmar que
   siga vigente a la fecha de publicación (es lo más volátil del artículo).
3. **No duplicar** la guía "cómo llegar": este artículo da el veredicto argentino y linkea al
   detalle. Mantener esa división.
4. **Pix de la posada**: se menciona que "muchas pousadas serias" dejan pagar por Pix por
   WhatsApp — redacción deliberadamente genérica (no revela nada de la posada ni descuentos).
5. **Ricardo NO es argentino**: es brasilero que vivió 42 años en Argentina. La voz suena
   argentina pero no se declara "argentino" en ningún lado. Mantener así.
6. Pedir **indexación manual en Search Console** (EN+ES son prioridad en VIG) una vez publicado.

---

## 2. Artículo propuesto (listo para crear como `guides/from-argentina.es.md`)

```markdown
---
title: "Ilha Grande desde Argentina: cómo llegar, pagar sin perder plata y cuántos días quedarte"
description: "Guía honesta para viajar a Ilha Grande desde Argentina, escrita por alguien que vive en la isla: cómo llegar de Buenos Aires y de Río de Janeiro a Ilha Grande, el tema del pago con tarjeta (y cómo resolverlo con Pix), cuántos días quedarte y los errores típicos del argentino."
lang: "es"
slug: "ilha-grande-desde-argentina"
translationKey: "from-argentina"
updatedDate: 2026-07-13
author: "Ricardo Aparicio"
faq:
  - q: "¿Cómo llego a Ilha Grande desde Argentina?"
    a: "Volás de Buenos Aires a Río de Janeiro (vuelo directo con Aerolíneas, GOL, LATAM, JetSMART o Flybondi) y de Río cruzás a la isla en barco. Ilha Grande no tiene autos, ni puentes, ni aeropuerto: siempre se entra en barco, al muelle de Vila do Abraão."
  - q: "¿Conviene pagar con tarjeta de crédito argentina en Brasil?"
    a: "No es lo más conveniente. Pagando en pesos con tarjeta te aplican la percepción del 30% a cuenta de Ganancias, además del dólar tarjeta. Lo más eficiente es pagar en reales por Pix (con apps tipo Belo, que convierten al momento): esquivás la percepción."
  - q: "¿Necesito llevar dólares o efectivo a Ilha Grande?"
    a: "No hace falta efectivo: casi todo se paga con Pix. Y si llevás algo de cash, que sean reales, nunca dólares — en la isla no hay cajero ni casa de cambio, el dólar no lo cambiás en ningún lado."
  - q: "¿Cuántos días conviene quedarse en Ilha Grande?"
    a: "Al menos cinco. Con cinco días la estadística juega a favor: uno puede llover y cuatro suelen ser espectaculares. Con dos o tres días, si te toca el nublado, te fuiste sin conocer la isla."
  - q: "¿Es seguro Ilha Grande para el turista argentino?"
    a: "Sí. Vila do Abraão es una villa tranquila, sin autos y con muy baja criminalidad, y hay una comunidad argentina bien nutrida. La mayor 'inseguridad' del viaje son los taxis en Río a la vuelta, no la isla."
---

Si estás pensando en venir a **Ilha Grande desde Argentina**, esta guía es para vos. No es otra nota de cómo gastar dos mangos —que en el fondo es cómo perder dos días por ahorrar unos reales—. Es al revés: cómo hacerla bien. Te la cuenta alguien que vive en la isla hace casi ocho años.

Lo esencial: volás de **Buenos Aires a Río de Janeiro** y de **Río de Janeiro a Ilha Grande** cruzás en barco (la isla no tiene autos ni aeropuerto). Y hay una sola cosa que conviene resolver de antemano, y es de plata: **pagar con tarjeta de crédito afuera hoy es un mal negocio para el argentino**. Abajo, las dos cosas resueltas.

## Cómo llegar a Ilha Grande desde Argentina

### El vuelo

Desde Buenos Aires hay **vuelos directos a Río de Janeiro** (Aerolíneas Argentinas, GOL, LATAM, JetSMART y Flybondi), y comprando con tiempo suelen arrancar cerca de los USD 300 ida y vuelta. Río es tu puerta de entrada: de ahí cruzás a la isla.

### De Río de Janeiro a Ilha Grande

Acá está el detalle que a los argentinos les cambia el viaje, y es distinto en la ida y en la vuelta:

- **La ida (Río → isla).** Si son **una pareja**, un transfer compartido puerta a muelle (~R$200 por persona) y te olvidás de todo. Si son **tres o más**, en la ida suele convenir un **Uber** hasta el muelle de Conceição de Jacareí (~R$230 el auto entero) más la lancha: en Río hay Uber de sobra. Un truco: cargá bien en la app el muelle exacto y el kilometraje, así nadie te sobrecobra "porque el destino era otro".
- **La vuelta (isla → Río): transfer, sí o sí.** Acá el Uber te juega sucio. En Conceição o Angra no hay ni la sombra de los autos que hay en Río, y hacen una avivada: se marcan "disponibles" media hora antes de que llegue el barco y, cuando lo ven entrar, se borran — el que queda te cobra un ojo de la cara. El transfer sale a horario fijo y tres horas después estás en la puerta de tu hotel en Río, entero.

> 🧭 El paso a paso completo de todas las rutas —puertos, horarios, precios de lanchas y buses— lo tenés en nuestra guía general: **[Cómo llegar a Ilha Grande](/es/como-llegar-a-ilha-grande/)**. Acá te dimos el veredicto para el que viene desde Argentina.

### ¿Y el bus desde Buenos Aires?

Se puede, y para muchos argentinos el viaje en ómnibus a Río es una experiencia en sí misma. Lo único traumático es la terminal Novo Rio (la rodoviaria), que es un caos. Llegar y tomarte el bus de ida es fácil; el problema es la vuelta, cuando te deja de nuevo ahí y caés en la mafia de los taxis. Si venís en bus, buenísimo — pero el traslado isla ↔ muelle dejáselo a una pousada.

## La plata: el tema del que nadie te avisa

Esta es la parte específicamente argentina, y la más valiosa.

**Pagar con tarjeta de crédito afuera hoy es un mal negocio.** El Impuesto PAIS ya no existe (se terminó el 1/1/2026), pero si pagás en pesos con tarjeta te siguen reteniendo la **percepción del 30% a cuenta de Ganancias**, además del dólar tarjeta. No es plata perdida —si no pagás Ganancias la podés recuperar— pero es plata inmovilizada y un precio más caro del que ves.

La solución es simple, y son tres pasos:

1. **Pagá por Pix, no con tarjeta.** Pix es el sistema instantáneo de Brasil, y esquiva la percepción porque pagás directo en reales. Hay apps (tipo **Belo**) donde cargás pesos y te hacen la conversión en el momento del pago; si te sobra saldo, te queda a favor para otra moneda o para devolverlo a tu cuenta.
2. **Si llevás efectivo, que sean reales, no dólares.** En la isla **no hay cajero ni casa de cambio**: el dólar no lo cambiás en ningún lado. En Brasil, hasta el agua de coco se paga con Pix.
3. **Reservá directo, sin intermediarios.** Los receptivos y las agencias te inflan todo entre un 20 y un 35%. Ese sobreprecio, mejor te lo quedás vos para comer un buen pescado acá. Muchas pousadas serias te dejan coordinar la reserva y el pago **por Pix, directo por WhatsApp**.

## Cuántos días quedarte (y dónde)

**Quedate al menos cinco días.** Con cinco, la estadística juega a tu favor: uno te puede llover, cuatro suelen ser espectaculares. Con dos o tres, si te toca el nublado, te fuiste sin conocer la isla. Y no quieras meter Búzios, Arraial, Copacabana y encima Ilha Grande en el mismo viaje — a la isla hay que darle sus días.

**Dormí en Vila do Abraão.** Es el centro neurálgico: de acá sale todo a pie —restaurantes, comida caiçara e internacional, música en vivo, cuatro supermercados—. Hay rincones preciosos para pasar el día (Araçatiba, Bananal, Praia Vermelha), pero para **dormir** te dejan aislado, con un barco por día y caro. Y ojo con la confusión clásica: **Mangaratiba no es Ilha Grande**, es otro municipio en el continente. Más en nuestra guía de [dónde dormir en Ilha Grande](/es/donde-dormir-ilha-grande/).

## Errores típicos del argentino (para que no los cometas)

- **Venir por menos de cinco días.** Ya lo dijimos, pero es el error número uno.
- **Cargar toda la vuelta de Río en el mismo viaje.** Elegí: o Río playero, o la isla. Mezclar los dos a las corridas es no disfrutar ninguno.
- **Reservarlo todo por un receptivo.** Pagás 20-35% de más por algo que resolvés solo o con la pousada.
- **Ratonear el traslado.** Ahorrarte cinco reales en un bus para después perder quince en un taxi —y una tarde entera de tus vacaciones— es la peor economía que hay. Tus vacaciones son de lo más valioso que tenés; no las gastes arriba de un colectivo por una moneda.

## ¿Venís desde Chile?

Casi todo lo de arriba te sirve igual. Volás directo Santiago–Río (LATAM, JetSMART, Sky — unas 4 horas, desde ~USD 200 ida y vuelta), sin escala en Buenos Aires, y de ahí el mismo camino. Una diferencia a tu favor: en Chile no tenés el drama del dólar tarjeta argentino, pero igual el Pix te conviene por el tipo de cambio. Y un consejo de búsqueda: escribí **"Ilha Grande"** con hache — "Isla Grande" te lleva a Chiloé, que es otra cosa.

## Una nota de transparencia

Esta guía la escribe Ricardo Aparicio, que vive en Ilha Grande y maneja la **[Pousada Costa Verde](https://pousadacostaverde.com)**, en Vila do Abraão. Así que si te quedás con nosotros, te dejamos el transfer agendado y arreglamos el pago por Pix; y si no, cualquier pousada seria hace lo mismo. La información de arriba es la misma en cualquier caso — la idea es que vengas y la pases bien, no que la pases apurado por ahorrar.
```
