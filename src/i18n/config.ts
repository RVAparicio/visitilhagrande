// Lista maestra de idiomas del sitio.
// Si algún día se agrega un idioma, se toca SOLO acá.

export const languages = {
  en: 'English',
  fr: 'Français',
  pt: 'Português',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const locales = Object.keys(languages) as Lang[];

/**
 * Construye la ruta localizada de una página.
 * El idioma por defecto (inglés) NO lleva prefijo.
 *   localizedPath('en', 'beaches')  -> '/beaches/'
 *   localizedPath('fr', 'plages')   -> '/fr/plages/'
 *   localizedPath('en', '')         -> '/'   (home)
 */
export function localizedPath(lang: Lang, path: string): string {
  const clean = path.replace(/^\/+|\/+$/g, ''); // quita barras sobrantes
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  return clean ? `${prefix}/${clean}/` : `${prefix}/`;
}
