// Definición de las Content Collections y su esquema de validación (Zod).
// Cada artículo es un archivo Markdown/MDX dentro de src/content/<colección>/.
// El esquema es el "guardián": si falta un campo obligatorio, el build falla
// con un mensaje claro en vez de publicar algo roto.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Un par pregunta/respuesta para el bloque FAQ (se convierte en FAQPage JSON-LD).
const faqItem = z.object({
  q: z.string(),
  a: z.string(),
});

// Campos comunes a todas las colecciones.
const baseFields = {
  title: z.string(),
  description: z.string(),
  lang: z.enum(['en', 'fr', 'pt', 'es']),
  // Slug localizado de ESTA versión (sin prefijo de idioma).
  // Ej: 'how-to-get-to-ilha-grande' / 'comment-aller-a-ilha-grande'.
  slug: z.string(),
  // Clave que vincula las 4 versiones de un mismo artículo entre idiomas.
  // Las 4 traducciones comparten el MISMO translationKey.
  translationKey: z.string(),
  updatedDate: z.coerce.date(),
  author: z.string().default('Ricardo Aparicio'),
  faq: z.array(faqItem).optional(),
  // Si está en true, no se publica (sirve para borradores).
  draft: z.boolean().default(false),
};

// Guías: las páginas pilar tipo artículo (cómo llegar, dónde dormir, etc.).
const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: z.object({ ...baseFields }),
});

// Playas: cada playa como ficha, con coordenadas para TouristAttraction.
const beaches = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/beaches' }),
  schema: z.object({
    ...baseFields,
    lat: z.number().optional(),
    lng: z.number().optional(),
  }),
});

// Trilhas: cada sendero como ficha (dificultad, distancia, etc.).
const trails = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/trails' }),
  schema: z.object({
    ...baseFields,
    difficulty: z.enum(['easy', 'moderate', 'hard']).optional(),
    distanceKm: z.number().optional(),
  }),
});

export const collections = { guides, beaches, trails };
