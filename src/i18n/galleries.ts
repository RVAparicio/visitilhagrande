// Galerías por pilar (translationKey). Las imágenes se importan aquí para que
// astro:assets las optimice (AVIF/WebP responsivo). El caption es el nombre del
// lugar (neutro); el alt va localizado para SEO/accesibilidad en cada idioma.
// Nota: la página de PLAYAS ya muestra una foto de referencia inline por playa,
// así que su galería se quitó; aquí queda la de SENDEROS.
import type { ImageMetadata } from 'astro';
import type { Lang } from './config';

import picoSunrise from '../assets/pico-do-papagaio-summit-sunrise-ilha-grande.jpg';
import picoSunset from '../assets/pico-do-papagaio-summit-boulder-sunset-ilha-grande.jpg';
import lopesBeach from '../assets/lopes-mendes-beach-ilha-grande.jpg';
import circuitoT1 from '../assets/circuito-historico-t1-trilha-ilha-grande.jpg';
import feiticeira from '../assets/cachoeira-da-feiticeira-ilha-grande.jpg';
import doisRios from '../assets/dois-rios-aerial-bay-ilha-grande.jpg';

export interface GalleryItem {
  src: ImageMetadata;
  alt: Record<Lang, string>;
  caption?: string;
}

export const galleries: Record<string, GalleryItem[]> = {
  trails: [
    { src: picoSunrise, caption: 'Pico do Papagaio', alt: {
      en: 'Hikers on the Pico do Papagaio summit at sunrise above the misty bay, Ilha Grande.',
      fr: "Randonneurs au sommet du Pico do Papagaio au lever du soleil au-dessus de la baie, Ilha Grande.",
      pt: 'Trilheiros no cume do Pico do Papagaio ao amanhecer sobre a baía enevoada, Ilha Grande.',
      es: 'Senderistas en la cima del Pico do Papagaio al amanecer sobre la bahía, Ilha Grande.' } },
    { src: picoSunset, caption: 'Pico do Papagaio', alt: {
      en: 'The parrot-shaped summit boulder of Pico do Papagaio against a pink sunset, Ilha Grande.',
      fr: "Le rocher sommital en forme de perroquet du Pico do Papagaio au coucher du soleil, Ilha Grande.",
      pt: 'A rocha do cume do Pico do Papagaio, em forma de papagaio, ao pôr do sol, Ilha Grande.',
      es: 'La roca de la cima del Pico do Papagaio, con forma de loro, al atardecer, Ilha Grande.' } },
    { src: lopesBeach, caption: 'Lopes Mendes', alt: {
      en: 'Lopes Mendes beach, the reward at the end of the trail, Ilha Grande.',
      fr: "La plage de Lopes Mendes, la récompense au bout du sentier, Ilha Grande.",
      pt: 'A praia de Lopes Mendes, a recompensa no fim da trilha, Ilha Grande.',
      es: 'La playa de Lopes Mendes, la recompensa al final del sendero, Ilha Grande.' } },
    { src: circuitoT1, caption: 'Circuito Histórico (T1)', alt: {
      en: 'Towering rainforest on the historic T1 trail near Abraão, Ilha Grande.',
      fr: "Forêt tropicale imposante sur le sentier historique T1 près d'Abraão, Ilha Grande.",
      pt: 'Mata atlântica imponente na trilha histórica T1, perto do Abraão, Ilha Grande.',
      es: 'Selva atlántica imponente en el sendero histórico T1, cerca de Abraão, Ilha Grande.' } },
    { src: feiticeira, caption: 'Cachoeira da Feiticeira', alt: {
      en: 'The Cachoeira da Feiticeira waterfall falling into a forest plunge pool, Ilha Grande.',
      fr: "La cascade Cachoeira da Feiticeira tombant dans un bassin en forêt, Ilha Grande.",
      pt: 'A Cachoeira da Feiticeira caindo numa piscina natural na mata, Ilha Grande.',
      es: 'La Cachoeira da Feiticeira cayendo en una poza natural en la selva, Ilha Grande.' } },
    { src: doisRios, caption: 'Dois Rios', alt: {
      en: 'Aerial of Dois Rios bay, a horseshoe beach where a river meets the sea, Ilha Grande.',
      fr: "Vue aérienne de la baie de Dois Rios, plage en fer à cheval où une rivière rejoint la mer, Ilha Grande.",
      pt: 'Vista aérea da baía de Dois Rios, praia em forma de ferradura onde um rio encontra o mar, Ilha Grande.',
      es: 'Vista aérea de la bahía de Dois Rios, playa en herradura donde un río llega al mar, Ilha Grande.' } },
  ],
};
