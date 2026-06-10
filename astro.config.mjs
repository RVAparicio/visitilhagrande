// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Dominio final del sitio. Se usa para generar URLs absolutas
  // en el sitemap, el hreflang y los datos estructurados (JSON-LD).
  site: 'https://visitilhagrande.com',

  // Configuración de los 4 idiomas.
  // prefixDefaultLocale: false  ->  el inglés vive en la raíz "/"
  // (sin "/en/"), y los demás idiomas en su subcarpeta.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'pt', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      // Hace que el sitemap agrupe las versiones por idioma
      // (<xhtml:link rel="alternate" hreflang>), no como URLs sueltas.
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          fr: 'fr',
          pt: 'pt',
          es: 'es',
        },
      },
    }),
  ],
});
