// Utilidades para trabajar con las colecciones de contenido.
import type { CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/config';

type AnyGuide = CollectionEntry<'guides'>;

/**
 * Dada la lista completa de entradas y un translationKey, devuelve las
 * versiones equivalentes en otros idiomas, en el formato que espera el
 * componente Hreflang: { lang, path } (path = slug localizado).
 */
export function getAlternates(
  entries: AnyGuide[],
  translationKey: string
): { lang: Lang; path: string }[] {
  return entries
    .filter((e) => e.data.translationKey === translationKey)
    .map((e) => ({ lang: e.data.lang, path: e.data.slug }));
}
