// Galerías por pilar (translationKey). Las imágenes se importan aquí para que
// astro:assets las optimice (AVIF/WebP responsivo). El caption es el nombre del
// lugar (neutro); el alt va localizado para SEO/accesibilidad en cada idioma.
import type { ImageMetadata } from 'astro';
import type { Lang } from './config';

// --- Playas ---
import lopesAerialSurf from '../assets/lopes-mendes-aerial-surf-ilha-grande.jpg';
import aventureiroPalm from '../assets/praia-do-aventureiro-leaning-palm-ilha-grande.jpg';
import caxadaco from '../assets/caxadaco-cove-aerial-ilha-grande.jpg';
import cataguas from '../assets/cataguas-islet-aerial-ilha-grande.jpg';
import dentista from '../assets/praia-do-dentista-aerial-ilha-grande.jpg';
import lagoaAzul from '../assets/lagoa-azul-fish-ilha-grande.jpg';
import lagoaVerde from '../assets/lagoa-verde-aerial-ilha-grande.jpg';
import meros from '../assets/meros-cove-ilha-grande.jpg';
import gruta from '../assets/gruta-do-acaia-freedive-ilha-grande.jpg';

// --- Senderos ---
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
  beaches: [
    { src: lopesAerialSurf, caption: 'Lopes Mendes', alt: {
      en: 'Aerial of Lopes Mendes beach, white sand meeting turquoise surf, Ilha Grande.',
      fr: "Vue aérienne de la plage de Lopes Mendes, sable blanc et eau turquoise, Ilha Grande.",
      pt: 'Vista aérea da praia de Lopes Mendes, areia branca e mar turquesa, Ilha Grande.',
      es: 'Vista aérea de la playa de Lopes Mendes, arena blanca y mar turquesa, Ilha Grande.' } },
    { src: aventureiroPalm, caption: 'Praia do Aventureiro', alt: {
      en: 'The leaning palm over turquoise water at Praia do Aventureiro, Ilha Grande.',
      fr: "Le cocotier penché au-dessus de l'eau turquoise de Praia do Aventureiro, Ilha Grande.",
      pt: 'O coqueiro inclinado sobre a água turquesa da Praia do Aventureiro, Ilha Grande.',
      es: 'El coqueiro inclinado sobre el agua turquesa de Praia do Aventureiro, Ilha Grande.' } },
    { src: caxadaco, caption: 'Caxadaço', alt: {
      en: 'Aerial of Caxadaço cove with turquoise water and golden sand, Ilha Grande.',
      fr: "Vue aérienne de la crique de Caxadaço, eau turquoise et sable doré, Ilha Grande.",
      pt: 'Vista aérea da enseada de Caxadaço, água turquesa e areia dourada, Ilha Grande.',
      es: 'Vista aérea de la cala de Caxadaço, agua turquesa y arena dorada, Ilha Grande.' } },
    { src: cataguas, caption: 'Cataguás', alt: {
      en: 'Aerial of the Cataguás islet with its white sandbar and turquoise sea, Ilha Grande.',
      fr: "Vue aérienne de l'îlot de Cataguás, banc de sable blanc et mer turquoise, Ilha Grande.",
      pt: 'Vista aérea da ilhota de Cataguás, banco de areia branca e mar turquesa, Ilha Grande.',
      es: 'Vista aérea del islote de Cataguás, banco de arena blanca y mar turquesa, Ilha Grande.' } },
    { src: dentista, caption: 'Praia do Dentista', alt: {
      en: 'Aerial of Praia do Dentista, boats anchored in a turquoise cove, Ilha Grande.',
      fr: "Vue aérienne de Praia do Dentista, bateaux mouillés dans une crique turquoise, Ilha Grande.",
      pt: 'Vista aérea da Praia do Dentista, barcos ancorados em enseada turquesa, Ilha Grande.',
      es: 'Vista aérea de Praia do Dentista, barcos fondeados en una cala turquesa, Ilha Grande.' } },
    { src: lagoaAzul, caption: 'Lagoa Azul', alt: {
      en: 'Tropical fish in the clear turquoise water of Lagoa Azul, a snorkelling stop on Ilha Grande.',
      fr: "Poissons tropicaux dans l'eau turquoise de Lagoa Azul, spot de snorkeling à Ilha Grande.",
      pt: 'Peixes tropicais na água turquesa da Lagoa Azul, ponto de mergulho na Ilha Grande.',
      es: 'Peces tropicales en el agua turquesa de Lagoa Azul, parada de snorkel en Ilha Grande.' } },
    { src: lagoaVerde, caption: 'Lagoa Verde', alt: {
      en: 'Aerial of Lagoa Verde, turquoise water meeting boulders and forest, Ilha Grande.',
      fr: "Vue aérienne de Lagoa Verde, eau turquoise, rochers et forêt, Ilha Grande.",
      pt: 'Vista aérea da Lagoa Verde, água turquesa entre pedras e mata, Ilha Grande.',
      es: 'Vista aérea de Lagoa Verde, agua turquesa entre rocas y selva, Ilha Grande.' } },
    { src: meros, caption: 'Meros', alt: {
      en: 'The calm turquoise cove of Praia do Meros with anchored boats, Ilha Grande.',
      fr: "La crique turquoise et calme de Praia do Meros avec bateaux mouillés, Ilha Grande.",
      pt: 'A enseada turquesa e calma da Praia do Meros com barcos ancorados, Ilha Grande.',
      es: 'La cala turquesa y tranquila de Praia do Meros con barcos fondeados, Ilha Grande.' } },
    { src: gruta, caption: 'Gruta do Acaiá', alt: {
      en: 'Freediving through the glowing blue water of the Gruta do Acaiá sea cave, Ilha Grande.',
      fr: "Apnée dans l'eau bleue lumineuse de la grotte marine Gruta do Acaiá, Ilha Grande.",
      pt: 'Mergulho livre na água azul luminosa da Gruta do Acaiá, Ilha Grande.',
      es: 'Buceo libre en el agua azul luminosa de la Gruta do Acaiá, Ilha Grande.' } },
  ],
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
