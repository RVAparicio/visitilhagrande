# Estrategia de afiliados — visitilhagrande.com

> Documento de estrategia. Decisión de fondo: **primero audiencia + afiliados, después
> (quizás) checkout propio.** El ecommerce es la recompensa por haber ganado la audiencia,
> no el camino para ganarla. Esta es la Fase 1: monetizar el tráfico que ya genera el sitio,
> con riesgo casi nulo, y medir la demanda real antes de invertir en venta directa.
>
> Los porcentajes de comisión son rangos típicos del mercado (orden de magnitud). Cada portal
> da la tarifa real al registrarse; verificar en el dashboard. Última revisión del concepto: 2026-06-11.

---

## 1. El portfolio de afiliados (no es solo tours)

El dinero real en una guía de viaje viene de **cubrir todo el viaje**, ordenado por ticket e
intención de compra. Los tours atraen el tráfico; el alojamiento y los ancilares dan el margen.

| Programa | Qué monetiza | Comisión aprox. | Por qué importa |
|---|---|---|---|
| **Booking.com** | Pousadas en Abraão | ~4% del valor de la estadía | El ticket más alto. 3 noches > 10 tours compartidos. Alta intención. |
| **GetYourGuide** | Tours, lanchas, transfers | ~8% | Mejor widget/deep-linking; inventario fuerte en inglés |
| **Civitatis** | Tours (mercado ES/PT) | ~6–8% | Clave para el tráfico en español/portugués, donde GYG es más débil |
| **Viator** | Tours, buceo | ~8%, cookie 30 días | Cookie larga = más conversiones atribuidas |
| **Airalo (eSIM)** | Datos para el turista extranjero | ~10–15% | Compra de impulso, alta conversión, ticket chico pero volumen |
| **Heymondo / SafetyWing** | Seguro de viaje | ~5–7% o fijo | Intención altísima en extranjeros; casi nadie lo cubre en este nicho |

**Insight:** Booking + eSIM + seguro probablemente generen más que todos los tours juntos, y
casi nadie en el nicho de Ilha Grande los trabaja bien.

---

## 2. El concepto central: "capa de experiencias" + páginas hub

No meter links sueltos en los artículos. Separar **la capa de datos del contenido** y usar dos
tipos de página:

- **Páginas hub de alta intención** (las que monetizan fuerte): "Mejores paseos en barco",
  "Cómo llegar a Ilha Grande", "Buceo en Ilha Grande", "Dónde dormir en Abraão". Imanes de SEO
  *y* densas en afiliados.
- **Recomendaciones nativas inline** dentro de los artículos de contenido, que apuntan al hub o
  al producto.

Mantenibilidad: cada "experiencia" (tour, centro de buceo, pousada) vive **una sola vez** como
dato y se renderiza en muchos lados. Se cambia el link una vez, se actualiza en todo el sitio.

---

## 3. Pieza técnica clave: el redireccionador `/go/`

**Ningún link de afiliado apunta directo desde el HTML.** Todos pasan por un redireccionador
propio en Cloudflare:

```
<a href="/go/lancha-grupo-chico"> → Cloudflare Function → 302 → getyourguide.com/...?partner_id=TU_ID
```

Por qué resuelve todo de una:

- **Anti-link-rot**: si una URL cambia o se migra de programa, se edita *un* archivo, no 40 artículos.
- **Tracking propio**: clicks contados en analytics propio (Cloudflare/Plausible), sin depender
  del dashboard de cada red. **Esto da el dato para decidir si hay demanda real.**
- **SEO correcto**: el link interno `/go/` se marca `rel="sponsored nofollow"` y `/go/` se bloquea
  en `robots.txt`. Google feliz, sin penalización por links de afiliado.
- **Limpieza**: oculta los parámetros feos de afiliado.

Implementación: una Function en `functions/go/[slug].ts` que lee el slug, busca el destino en la
capa de experiencias y hace `Response.redirect(url, 302)`. (Para casos simples, un `_redirects`
estático también sirve.)

---

## 4. Modelo de datos en Astro (content collection)

Una content collection tipada con Zod (Astro lo trae integrado; avisa si falta un campo):

```ts
// src/content/config.ts
const experiences = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),               // → /go/{slug}
    category: z.enum(['boat-tour','dive','transfer','stay','esim','insurance']),
    network: z.enum(['gyg','civitatis','viator','booking','airalo','heymondo']),
    affiliateUrl: z.string().url(),  // destino real, vive solo acá
    title: z.record(z.string()),     // { es, en, pt, fr }
    priceFrom: z.number().optional(),
    rating: z.number().optional(),
    badges: z.array(z.string()).default([]),      // 'grupo-chico','bestseller'
    highlights: z.array(z.string()).default([]),
  }),
});
```

Componentes que consumen esa data:
- `<ExperienceCard>` — la tarjeta nativa
- `<ExperienceGrid>` — para los hubs
- `<InlineRecommend>` — el link contextual dentro de la prosa

El `href` de todos sale de `/go/{slug}`, nunca la URL cruda.

**Puente a la Fase 2:** el día que quieras pasar de afiliado a venta directa, cambiás el `network`
y el `affiliateUrl` de esa experiencia por tu propio checkout y la tarjeta sigue igual. La capa de
experiencias es el puente entre las dos fases.

---

## 5. Bonus GEO: structured data sobre la misma data

De la misma colección se genera automáticamente **schema.org** (`TouristTrip`, `Product` con
`offers`) + un bloque de "datos rápidos" por tour. Los motores generativos (ChatGPT, Perplexity,
Gemini) adoran el contenido estructurado y citable. Misma fuente de datos, dos salidas: HTML para
humanos, structured data para máquinas. Ventaja que los operadores locales con su WhatsApp jamás
van a tener.

---

## 6. Medición = la decisión

En 3–6 meses, con el tracking del `/go/`:
- **CTR** por categoría (¿clicks en tours? ¿en booking?)
- **Clicks → conversiones** (cada red lo reporta)
- **EPC** (earnings per click) por programa

Si Booking y eSIM convierten y los tours apenas, dice dónde poner energía — y si algún día vale
construir checkout propio. Decisión por dato, no por corazonada.

---

## 7. Rollout

1. **Semana 1–2**: alta en Booking, GYG, Civitatis. Montar el redireccionador `/go/` + la content
   collection con 10–15 experiencias.
2. **Semana 3–4**: una página hub fuerte — arrancar con **"Cómo llegar a Ilha Grande"** (altísima
   intención, evergreen) antes que con tours.
3. **Mes 2**: `<InlineRecommend>` en los mejores artículos existentes + Airalo/seguro.
4. **Mes 3–6**: leer los datos y decidir sobre la Fase 2.

---

## 8. Transparencia (no negociable)

Coherente con la línea editorial del sitio: declarar la relación de afiliado. Una nota breve y
honesta ("algunos enlaces son de afiliados; si reservás a través de ellos, el sitio recibe una
comisión sin costo extra para vos") en el footer y/o al pie de las páginas hub. La transparencia
ya es parte de la marca; aplicarla acá también.
