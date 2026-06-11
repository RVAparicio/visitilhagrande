// Mapa central de slugs de cada pilar por idioma.
// Un solo lugar: lo usan el Header, el Footer y la caja de autor.
import type { Lang } from './config';

export const routes = {
  gettingThere: {
    en: 'how-to-get-to-ilha-grande',
    fr: 'comment-aller-a-ilha-grande',
    pt: 'como-chegar-na-ilha-grande',
    es: 'como-llegar-a-ilha-grande',
  },
  whereToStay: {
    en: 'where-to-stay-ilha-grande',
    fr: 'ou-dormir-ilha-grande',
    pt: 'onde-ficar-ilha-grande',
    es: 'donde-dormir-ilha-grande',
  },
  beaches: {
    en: 'ilha-grande-beaches',
    fr: 'plages-ilha-grande',
    pt: 'praias-ilha-grande',
    es: 'playas-ilha-grande',
  },
  trails: {
    en: 'ilha-grande-trails',
    fr: 'sentiers-ilha-grande',
    pt: 'trilhas-ilha-grande',
    es: 'senderos-ilha-grande',
  },
  bestTime: {
    en: 'best-time-to-visit-ilha-grande',
    fr: 'quand-visiter-ilha-grande',
    pt: 'melhor-epoca-ilha-grande',
    es: 'cuando-visitar-ilha-grande',
  },
  faq: {
    en: 'ilha-grande-travel-tips',
    fr: 'infos-pratiques-ilha-grande',
    pt: 'dicas-praticas-ilha-grande',
    es: 'info-practica-ilha-grande',
  },
  about: {
    en: 'about',
    fr: 'a-propos',
    pt: 'sobre',
    es: 'acerca-de',
  },
} satisfies Record<string, Record<Lang, string>>;
