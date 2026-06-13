# visitilhagrande.com

Guía de viaje local, independiente y multilingüe de Ilha Grande (Brasil).
Mantenida por Richard (Pousada CostaVerde, Vila do Abraão) — con transparencia
total de autoría. Optimizada para SEO clásico y para ser citada por IAs
(ChatGPT, Perplexity, Gemini, Google AI Overviews).

**Producción:** https://visitilhagrande.com
**Stack:** [Astro](https://astro.build) (sitio estático) · 4 idiomas · Cloudflare Workers · GitHub

---

## Cómo funciona el flujo de publicación

```
editás un archivo .md  →  git commit + push  →  Cloudflare construye y publica solo (~1 min)
```

No hay panel de administración ni base de datos. El contenido son archivos de
texto Markdown dentro del repo. Git es el historial de cambios y el botón de
publicar.

## Comandos del día a día

```sh
npm install        # solo la primera vez en una máquina nueva
npm run dev        # servidor local en http://localhost:4321 (se actualiza al guardar)
npm run build      # construye el sitio en dist/ — si algo está mal, AVISA y no publica
```

**Regla de oro:** antes de pushear, corré `npm run build`. Si el build pasa,
producción va a estar bien. Si falla, el mensaje de error dice qué archivo y
qué campo está mal.

## Publicar un cambio

```sh
git add .
git commit -m "Actualiza precios de la lancha rápida"
git push
```

Un minuto después está en vivo. Verificá en https://visitilhagrande.com con
Ctrl+F5 (recarga sin caché).

---

## Dónde vive cada cosa

```
src/content/guides/            ← LOS ARTÍCULOS (acá pasás el 95% del tiempo)
src/components/HomePage.astro  ← la home «ficha de campo» (compartida por los 4 idiomas)
src/i18n/routes.ts             ← mapa de slugs de los pilares (para menú y footer)
src/i18n/ui.ts                 ← textos de la interfaz (menú, footer, botones) en 4 idiomas
src/assets/                    ← imágenes optimizadas por Astro (mapa, futuras fotos)
public/                        ← archivos servidos tal cual (robots.txt, llms.txt)
src/styles/global.css          ← todo el CSS del sitio
wrangler.jsonc                 ← config de Cloudflare (dominio incluido) — no tocar
```

## Editar un artículo existente

Cada pilar son **4 archivos**, uno por idioma:

```
src/content/guides/best-time.en.md   ← inglés (la versión "madre")
src/content/guides/best-time.fr.md   ← francés
src/content/guides/best-time.pt.md   ← portugués
src/content/guides/best-time.es.md   ← español
```

1. Abrí el archivo del idioma que querés tocar.
2. Editá el texto (es Markdown: `##` para títulos, `**negrita**`, tablas con `|`).
3. **Actualizá `updatedDate`** en el frontmatter (la fecha entre los `---` de
   arriba). Google y las IAs premian contenido con fecha fresca y real.
4. Si el cambio es de datos (precios, horarios), repetilo en los 4 idiomas.
5. Build + commit + push.

## Crear un artículo nuevo

Un archivo nuevo en `src/content/guides/` **genera su página automáticamente**
— no hay que registrar nada en ningún lado. Pasos:

1. Creá los 4 archivos: `mi-tema.en.md`, `mi-tema.fr.md`, `mi-tema.pt.md`, `mi-tema.es.md`.
2. El frontmatter (el bloque entre `---`) lleva estos campos:

```yaml
---
title: "Título que se ve en Google (50-60 caracteres)"
description: "Resumen para Google y las IAs (140-160 caracteres)."
lang: "es"                          # en | fr | pt | es — según el archivo
slug: "comer-en-ilha-grande"        # la URL, en el idioma del archivo, sin barras
translationKey: "food"              # LA MISMA palabra en los 4 archivos — los vincula
updatedDate: 2026-06-12
faq:                                # opcional pero MUY recomendado (rich results)
  - q: "¿Pregunta tal cual la haría un viajero?"
    a: "Respuesta completa y autosuficiente, 2-4 frases."
draft: true                         # mientras escribís; borralo (o false) para publicar
---

El primer párrafo responde la pregunta del título de forma directa —
es lo que las IAs citan. Después desarrollá.
```

3. Reglas que importan:
   - **`translationKey` idéntico en los 4 idiomas** — es lo que genera los
     enlaces hreflang y el selector de idiomas. Si difiere, la página queda
     huérfana (sin sus traducciones vinculadas).
   - **`slug` traducido por idioma** (`food-in-ilha-grande` / `ou-manger-...` /
     `onde-comer-...` / `comer-en-...`). El slug define la URL: EN sin prefijo,
     los demás con `/fr/`, `/pt/`, `/es/`.
   - **`draft: true`** te deja pushear sin publicar. Sacalo cuando esté listo.
4. (Opcional) Para que aparezca en el menú o el footer hay que agregar el slug
   en `src/i18n/routes.ts` — copiá el patrón de cualquier pilar existente.

## Recetas de escritura que ya funcionan en este sitio

- **Responder primero, desarrollar después**: el primer párrafo contesta la
  búsqueda; las IAs citan eso.
- **Datos de local que nadie más tiene** (la Taxa se muestra también al salir,
  Claro es la única señal que funciona, los borrachudos...) — esa es la
  ventaja competitiva del sitio.
- **FAQ en el frontmatter**: cada par q/a se convierte en datos estructurados
  que Google puede mostrar como desplegables en los resultados.
- **Transparencia**: la autoría y la relación con CostaVerde siempre visibles.
  Es el pacto del sitio — fingir neutralidad es lo único que puede hundirlo.

## Mantenimiento (rutina sugerida)

| Cada | Qué |
|---|---|
| Semana | Google Search Console → Rendimiento: qué busca la gente (ideas de contenido) |
| Mes | Revisar precios/datos que cambian (lanchas, Taxa, transfers) y actualizar `updatedDate` |
| Temporada | Cloudflare Web Analytics: qué páginas rinden; XTERRA/festivales con fechas nuevas |

## Servicios conectados (quién hace qué)

| Servicio | Rol | Acceso |
|---|---|---|
| GitHub `RVAparicio/visitilhagrande` | guarda el código, dispara el deploy | tu cuenta GitHub |
| Cloudflare Workers | construye y sirve el sitio + dominio + SSL | tu cuenta Cloudflare |
| Cloudflare Web Analytics | visitas sin cookies | mismo panel |
| Web3Forms | el formulario de contacto → rvaparicio@gmail.com | clave pública en el código |
| Google Search Console / Bing | salud de la indexación | tu cuenta Google |
