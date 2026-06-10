// Textos de la "interfaz" (menú, footer, etiquetas) en los 4 idiomas.
// El CONTENIDO de los artículos vive en Markdown; esto es solo la ropa del sitio.
import type { Lang } from './config';

type UIKey =
  | 'nav_home'
  | 'nav_getting_there'
  | 'nav_trails'
  | 'nav_beaches'
  | 'skip'
  | 'faq_title'
  | 'author_prefix'
  | 'author_bio'
  | 'footer_disclosure';

export const ui: Record<Lang, Record<UIKey, string>> = {
  en: {
    nav_home: 'Home',
    nav_getting_there: 'Getting there',
    nav_trails: 'Trails',
    nav_beaches: 'Beaches',
    skip: 'Skip to content',
    faq_title: 'Frequently asked questions',
    author_prefix: 'Written by',
    author_bio: 'Lives on Ilha Grande · runs Pousada CostaVerde · listed in Lonely Planet',
    footer_disclosure:
      'This guide is written and kept up to date by Richard, who lives on Ilha Grande and runs Pousada CostaVerde. Recommendations come from local, first-hand experience.',
  },
  fr: {
    nav_home: 'Accueil',
    nav_getting_there: 'Comment venir',
    nav_trails: 'Sentiers',
    nav_beaches: 'Plages',
    skip: 'Aller au contenu',
    faq_title: 'Questions fréquentes',
    author_prefix: 'Écrit par',
    author_bio: 'Vit à Ilha Grande · gère la Pousada CostaVerde · cité dans le Lonely Planet',
    footer_disclosure:
      "Ce guide est rédigé et tenu à jour par Richard, qui vit à Ilha Grande et gère la Pousada CostaVerde. Les recommandations reposent sur une expérience locale et de première main.",
  },
  pt: {
    nav_home: 'Início',
    nav_getting_there: 'Como chegar',
    nav_trails: 'Trilhas',
    nav_beaches: 'Praias',
    skip: 'Ir para o conteúdo',
    faq_title: 'Perguntas frequentes',
    author_prefix: 'Escrito por',
    author_bio: 'Mora na Ilha Grande · administra a Pousada CostaVerde · citado no Lonely Planet',
    footer_disclosure:
      'Este guia é escrito e mantido por Richard, que mora na Ilha Grande e administra a Pousada CostaVerde. As recomendações vêm da experiência local, em primeira mão.',
  },
  es: {
    nav_home: 'Inicio',
    nav_getting_there: 'Cómo llegar',
    nav_trails: 'Senderos',
    nav_beaches: 'Playas',
    skip: 'Ir al contenido',
    faq_title: 'Preguntas frecuentes',
    author_prefix: 'Escrito por',
    author_bio: 'Vive en Ilha Grande · gestiona la Pousada CostaVerde · citado en Lonely Planet',
    footer_disclosure:
      'Esta guía la escribe y mantiene Richard, que vive en Ilha Grande y gestiona la Pousada CostaVerde. Las recomendaciones surgen de la experiencia local, de primera mano.',
  },
};

export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key] ?? ui.en[key];
}
