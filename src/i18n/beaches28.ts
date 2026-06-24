// Directorio de las 28 playas/comunidades numeradas del mapa de la página de
// playas. Fuente: docs/playas-28-descripciones.md (investigado, revisado por
// Richard). Los NOMBRES propios quedan en portugués (consistencia de entidad
// para SEO/GEO); solo se localiza la prosa. NO agregar datos no verificados.
import type { Lang } from './config';

export type BeachGroup = 'vilas' | 'praias' | 'islas';

export interface Beach28 {
  num: number;
  name: string; // nombre canónico en portugués, igual en los 4 idiomas
  group: BeachGroup;
  desc: Record<Lang, string>;
}

export const groupLabels: Record<BeachGroup, Record<Lang, string>> = {
  vilas: {
    en: 'Villages & communities',
    fr: 'Villages et communautés',
    pt: 'Vilas e comunidades',
    es: 'Vilas y comunidades',
  },
  praias: {
    en: 'Semi-deserted & deserted beaches',
    fr: 'Plages semi-désertes et désertes',
    pt: 'Praias semidesertas e desertas',
    es: 'Playas semidesiertas y desiertas',
  },
  islas: {
    en: 'Paradise islands — Angra dos Reis bay (boat trip from Abraão)',
    fr: "Îles paradisiaques — baie d'Angra dos Reis (excursion en bateau depuis Abraão)",
    pt: 'Ilhas paradisíacas — baía de Angra dos Reis (passeio de barco a partir de Abraão)',
    es: 'Islas paradisíacas — bahía de Angra dos Reis (paseo en barco desde Abraão)',
  },
};

export const directoryHeading: Record<Lang, string> = {
  en: 'The main beaches & communities, one by one',
  fr: 'Les principales plages et communautés, une par une',
  pt: 'As principais praias e comunidades, uma a uma',
  es: 'Las principales playas y comunidades, una por una',
};

export const directoryIntro: Record<Lang, string> = {
  en: 'Ilha Grande has around 113 beaches — far more than anyone could list. These are 23 of the main ones (and the fishing communities), matching the numbered points on the map above, from the calm northern and western coves to the wild Atlantic beaches of the east.',
  fr: "Ilha Grande compte environ 113 plages — bien plus qu'on ne pourrait en lister. En voici 23 parmi les principales (et les villages de pêcheurs), qui correspondent aux points numérotés de la carte ci-dessus, des anses calmes du nord et de l'ouest aux plages atlantiques sauvages de l'est.",
  pt: 'A Ilha Grande tem cerca de 113 praias — muito mais do que se poderia listar. Estas são 23 das principais (e as comunidades de pescadores), que correspondem aos pontos numerados do mapa acima, das enseadas calmas do norte e do oeste às praias atlânticas selvagens do leste.',
  es: 'Ilha Grande tiene unas 113 playas — muchas más de las que se podrían listar. Estas son 23 de las principales (y las comunidades de pescadores), que se corresponden con los puntos numerados del mapa de arriba, desde las ensenadas calmas del norte y el oeste hasta las playas atlánticas y salvajes del este.',
};

// Sección "aparte" al final: las 5 islas de Angra (no son de Ilha Grande).
export const islandsHeading: Record<Lang, string> = {
  en: 'The 5 islands of Angra (a boat trip from Abraão)',
  fr: "Les 5 îles d'Angra (une excursion en bateau depuis Abraão)",
  pt: 'As 5 ilhas de Angra (um passeio de barco a partir de Abraão)',
  es: 'Las 5 islas de Angra (un paseo en barco desde Abraão)',
};

export const islandsIntro: Record<Lang, string> = {
  en: 'These are not on Ilha Grande itself, but in the Angra dos Reis bay nearby — five paradise islands and sandbars usually strung together on a boat day-trip from Vila do Abraão.',
  fr: "Elles ne se trouvent pas sur Ilha Grande même, mais dans la baie voisine d'Angra dos Reis — cinq îles et bancs de sable paradisiaques, généralement enchaînés lors d'une excursion en bateau à la journée depuis Vila do Abraão.",
  pt: 'Estas não ficam na própria Ilha Grande, mas na vizinha baía de Angra dos Reis — cinco ilhas e bancos de areia paradisíacos, geralmente encadeados num passeio de barco de um dia a partir da Vila do Abraão.',
  es: 'Estas no están en la propia Ilha Grande, sino en la cercana bahía de Angra dos Reis — cinco islas y bancos de arena paradisíacos que suelen encadenarse en un paseo en barco de un día desde Vila do Abraão.',
};

export const beaches28: Beach28[] = [
  {
    num: 1,
    name: 'Praia Vermelha',
    group: 'vilas',
    desc: {
      en: `A caiçara fishing village (~150 inhabitants) on the island's most preserved side, near Araçatiba; calm greenish water, a few pousadas and restaurants. Reached by boat from Angra (~45 min) or on foot. A good diving spot.`,
      fr: `Village de pêcheurs caiçaras (~150 habitants) sur le versant le plus préservé de l'île, près d'Araçatiba ; eaux vertes et calmes, quelques pousadas et restaurants. Accès en bateau depuis Angra (~45 min) ou par les sentiers. Bon spot de plongée.`,
      pt: `Vila de pescadores caiçaras (~150 habitantes) no lado mais preservado da ilha, perto de Araçatiba; águas esverdeadas e calmas, algumas pousadas e restaurantes. Chega-se de barco desde Angra (~45 min) ou por trilhas. Bom ponto de mergulho.`,
      es: `Vila de pescadores caiçaras (~150 hab.) en el lado más preservado de la isla, cerca de Araçatiba; aguas verdosas y tranquilas, algunas pousadas y restaurantes. Se llega en barco desde Angra (~45 min) o por senderos. Buen punto de buceo.`,
    },
  },
  {
    num: 2,
    name: 'Itaguaçu',
    group: 'praias',
    desc: {
      en: `A semi-deserted beach and cove in the south, near Praia Vermelha and Araçatiba, home to a single family (with a pousada); calm water sheltered by rocks, ideal for snorkelling. Reached by boat or on foot from Araçatiba. Almost solitary.`,
      fr: `Plage et anse semi-déserte au sud, près de Praia Vermelha et d'Araçatiba, habitée par une seule famille (avec une pousada) ; eaux calmes protégées par les rochers, idéales pour le snorkeling. Accès en bateau ou par un sentier depuis Araçatiba. Presque solitaire.`,
      pt: `Praia e enseada semideserta no sul, perto de Praia Vermelha e Araçatiba, habitada por uma única família (com pousada); águas calmas protegidas por rochas, ideais para snorkel. Chega-se de barco ou por trilha desde Araçatiba. Quase solitária.`,
      es: `Playa y ensenada semidesierta en el sur, cerca de Praia Vermelha y Araçatiba, habitada por una sola familia (con pousada); aguas calmas protegidas por rocas, ideal para snorkel. Se llega en barco o por sendero desde Araçatiba. Casi solitaria.`,
    },
  },
  {
    num: 3,
    name: 'Enseada de Araçatiba',
    group: 'vilas',
    desc: {
      en: `A fishing village (~370 inhabitants) on a wide cove with several beaches linked by trails and clear water for snorkelling. Reached only by boat from Angra (~25 min by speedboat). The island's second tourist hub after Abraão.`,
      fr: `Village de pêcheurs (~370 habitants) sur une large anse aux plusieurs plages reliées par des sentiers, aux eaux transparentes pour le snorkeling. Accès uniquement en bateau depuis Angra (~25 min en vedette). Deuxième pôle touristique de l'île après Abraão.`,
      pt: `Vila de pescadores (~370 habitantes) numa enseada ampla com várias praias ligadas por trilhas e águas transparentes para snorkel. Só se chega de barco desde Angra (~25 min de lancha). Segundo polo turístico da ilha depois de Abraão.`,
      es: `Vila de pescadores (~370 hab.) en una ensenada amplia con varias playas conectadas por senderos y aguas transparentes para snorkel. Solo se llega en barco desde Angra (lancha ~25 min). Segundo polo turístico de la isla tras Abraão.`,
    },
  },
  {
    num: 4,
    name: 'Praia Longa',
    group: 'vilas',
    desc: {
      en: `A fishing and mussel-farming village, with the São Pedro church facing the pier and the Cachoeira da Longa waterfall nearby. Reached by boat from Angra (~25 min) or on foot from Bananal or Sítio Forte. A quiet hamlet with little infrastructure.`,
      fr: `Village de pêcheurs et de mytiliculture, avec l'église São Pedro face à la jetée et la cascade Cachoeira da Longa à proximité. Accès en bateau depuis Angra (~25 min) ou par les sentiers depuis Bananal ou Sítio Forte. Hameau tranquille, peu équipé.`,
      pt: `Vila de pescadores e de cultivo de mexilhões, com a igreja de São Pedro em frente ao cais e a Cachoeira da Longa por perto. Chega-se de barco desde Angra (~25 min) ou por trilhas desde o Bananal ou Sítio Forte. Vilarejo tranquilo, com pouca estrutura.`,
      es: `Vila de pescadores y cultivo de mejillones, con la iglesia de São Pedro frente al muelle y la Cachoeira da Longa cerca. Se llega en barco desde Angra (~25 min) o por senderos desde Bananal o Sítio Forte. Aldea tranquila, con poca estructura.`,
    },
  },
  {
    num: 5,
    name: 'Enseada de Sítio Forte',
    group: 'vilas',
    desc: {
      en: `A central cove of calm water with several small beaches (Tapera, Ubatubinha, Marinheiro…) and a rocky cliff wall. A caiçara village living from fishing and oyster and mussel farming. Reached only by boat. Wreck diving on the Pinguino.`,
      fr: `Anse centrale aux eaux paisibles, avec plusieurs petites plages (Tapera, Ubatubinha, Marinheiro…) et une paroi rocheuse. Village caiçara vivant de la pêche et de l'élevage d'huîtres et de moules. Accès uniquement en bateau. Plongée sur l'épave du Pinguino.`,
      pt: `Enseada central de águas mansas com várias prainhas (Tapera, Ubatubinha, Marinheiro…) e um paredão rochoso. Vila caiçara que vive da pesca e do cultivo de ostras e mexilhões. Só se chega de barco. Mergulho no naufrágio do Pinguino.`,
      es: `Ensenada central de aguas mansas con varias playitas (Tapera, Ubatubinha, Marinheiro…) y un paredón rocoso. Vila caiçara que vive de la pesca y del cultivo de ostras y mejillones. Solo se llega en barco. Buceo en el naufragio del Pinguino.`,
    },
  },
  {
    num: 6,
    name: 'Enseada do Bananal',
    group: 'vilas',
    desc: {
      en: `A caiçara village on the north coast (~370 inhabitants) with a Japanese heritage — old sardine canneries — and several calm beaches for diving. Reached by boat or schooner from Angra, and by trail. A quiet hamlet.`,
      fr: `Village caiçara sur la côte nord (~370 habitants), à l'héritage japonais — anciennes conserveries de sardines — et plusieurs plages calmes pour la plongée. Accès en bateau ou en goélette depuis Angra, et par les sentiers. Hameau tranquille.`,
      pt: `Vila caiçara na costa norte (~370 habitantes) com herança japonesa — antigas fábricas de sardinha — e várias praias calmas para mergulho. Chega-se de barco ou escuna desde Angra, e por trilhas. Vilarejo tranquilo.`,
      es: `Vila caiçara en la costa norte (~370 hab.) con herencia japonesa: viejas fábricas de sardina y varias playas calmas para bucear. Se llega en barco o escuna desde Angra, y por senderos. Aldea tranquila.`,
    },
  },
  {
    num: 7,
    name: 'Freguesia de Santana',
    group: 'praias',
    desc: {
      en: `A historic fishing community in the north, cradle of the island's first settlement, today home to ~50 residents and the colonial Santana church (1843). A calm beach, a regular stop for the schooners.`,
      fr: `Communauté historique de pêcheurs au nord, berceau du premier peuplement de l'île, aujourd'hui ~50 habitants et l'église coloniale de Santana (1843). Plage calme, escale habituelle des goélettes.`,
      pt: `Comunidade histórica de pescadores no norte, berço do primeiro povoamento da ilha, hoje com ~50 moradores e a igreja colonial de Santana (1843). Praia calma, parada habitual das escunas.`,
      es: `Comunidad histórica de pescadores en el norte, cuna del primer poblamiento de la isla, hoy con ~50 residentes y la iglesia colonial de Santana (1843). Playa calma, parada habitual de las escunas.`,
    },
  },
  {
    num: 8,
    name: 'Japariz',
    group: 'praias',
    desc: {
      en: `A north-coast beach with a small caiçara community and waterfront restaurants, calm clear water and pale sand. Reached by boat or schooner (a lunch stop) or on foot from Abraão. Very busy in season.`,
      fr: `Plage de la côte nord avec une petite communauté caiçara et des restaurants au bord de l'eau, aux eaux calmes et transparentes et au sable clair. Accès en bateau ou en goélette (halte déjeuner) ou par les sentiers depuis Abraão. Très fréquentée en saison.`,
      pt: `Praia da costa norte com uma pequena comunidade caiçara e restaurantes à beira-mar, águas calmas e transparentes e areia clara. Chega-se de barco ou escuna (parada de almoço) ou por trilhas desde Abraão. Muito movimentada na temporada.`,
      es: `Playa del norte con una pequeña comunidad caiçara y restaurantes a la orilla, aguas calmas y transparentes y arena clara. Se llega en barco o escuna (parada de almuerzo) o por senderos desde Abraão. Muy concurrida en temporada.`,
    },
  },
  {
    num: 9,
    name: 'Funil',
    group: 'praias',
    desc: {
      en: `A tiny, wild beach (~10 m) hidden in a corridor of vegetation next to Japariz, with lake-still water. Reached by boat (5 min from Japariz) or on foot. An almost deserted corner, with no infrastructure.`,
      fr: `Plage minuscule et sauvage (~10 m) cachée dans un couloir de végétation, à côté de Japariz, aux eaux dignes d'un lac. Accès en bateau (5 min de Japariz) ou par les sentiers. Coin presque désert, sans aucune infrastructure.`,
      pt: `Praia minúscula e selvagem (~10 m) escondida num corredor de vegetação, ao lado de Japariz, com águas de lago. Chega-se de barco (5 min de Japariz) ou por trilhas. Canto quase deserto, sem infraestrutura.`,
      es: `Playa diminuta y salvaje (~10 m) escondida en un corredor de vegetación, junto a Japariz, con aguas como de lago. Se llega en barco (5 min desde Japariz) o por senderos. Rincón casi desierto, sin infraestructura.`,
    },
  },
  {
    num: 10,
    name: 'Saco do Céu',
    group: 'vilas',
    desc: {
      en: `A fishing village in a well-sheltered northern cove, surrounded by Atlantic Forest and mangroves, with calm water. Reached by boat from Abraão or via trail T02. Rustic, with pousadas and restaurants serving good food.`,
      fr: `Village de pêcheurs dans une anse très abritée au nord, entourée de Mata Atlântica et de mangroves, aux eaux calmes. Accès en bateau depuis Abraão ou par le sentier T02. Rustique, avec pousadas et restaurants à la bonne cuisine.`,
      pt: `Vila de pescadores numa enseada bem abrigada no norte, cercada de Mata Atlântica e manguezais, de águas calmas. Chega-se de barco desde Abraão ou pela trilha T02. Rústico, com pousadas e restaurantes de boa gastronomia.`,
      es: `Vila de pescadores en una ensenada muy resguardada del norte, rodeada de Mata Atlântica y manglares, de aguas calmas. Se llega en barco desde Abraão o por la trilha T02. Rústico, con pousadas y restaurantes de buena gastronomía.`,
    },
  },
  {
    num: 11,
    name: 'Enseada das Estrelas',
    group: 'vilas',
    desc: {
      en: `A northern cove with a small community and semi-deserted beaches (Feiticeira, Camiranga, Perequê…), clear water with starfish. Reached by boat or on foot. Access to the Feiticeira waterfall.`,
      fr: `Anse du nord avec une petite communauté et des plages semi-désertes (Feiticeira, Camiranga, Perequê…), aux eaux cristallines peuplées d'étoiles de mer. Accès en bateau ou par les sentiers. Accès à la cascade da Feiticeira.`,
      pt: `Enseada do norte com uma pequena comunidade e praias semidesertas (Feiticeira, Camiranga, Perequê…), de águas cristalinas com estrelas-do-mar. Chega-se de barco ou por trilhas. Acesso à cachoeira da Feiticeira.`,
      es: `Ensenada del norte con una pequeña comunidad y playas semidesiertas (Feiticeira, Camiranga, Perequê…), de aguas cristalinas con estrellas de mar. Se llega en barco o por senderos. Acceso a la cascada da Feiticeira.`,
    },
  },
  {
    num: 12,
    name: 'Enseada do Abraão (Vila do Abraão)',
    group: 'vilas',
    desc: {
      en: `The largest cove and the main town: the island's gateway, with a horseshoe beach, shops, pousadas and a pier. Reached only by boat from the mainland, and there are no cars. The trails and boat trips all start here.`,
      fr: `La plus grande anse et le bourg principal : la porte d'entrée de l'île, avec sa plage en fer à cheval, ses commerces, ses pousadas et son embarcadère. Accès uniquement en bateau depuis le continent, sans aucune voiture. Les sentiers et les excursions partent d'ici.`,
      pt: `A maior enseada e o povoado principal: a porta de entrada da ilha, com praia em forma de ferradura, comércios, pousadas e cais. Só se chega de barco desde o continente e não há carros. É daqui que saem as trilhas e os passeios de barco.`,
      es: `La mayor ensenada y el pueblo principal: la puerta de entrada de la isla, con playa en herradura, comercios, pousadas y muelle. Solo se llega en barco desde el continente y no hay autos. De aquí salen los senderos y los paseos en barco.`,
    },
  },
  {
    num: 13,
    name: 'Enseada de Palmas',
    group: 'vilas',
    desc: {
      en: `One of the oldest caiçara villages, very sparsely populated and rustic (no mains electricity), with palm trees, campsites and bars. Reached on foot via trail T10 from Abraão (~4.7 km, ~2h30) or by boat. The closest access point to Lopes Mendes.`,
      fr: `L'un des plus anciens villages caiçaras, très peu peuplé et rustique (sans électricité du réseau), avec palmiers, campings et bars. Accès à pied par le sentier T10 depuis Abraão (~4,7 km, ~2h30) ou en bateau. Le point d'accès le plus proche de Lopes Mendes.`,
      pt: `Uma das vilas caiçaras mais antigas, muito pouco povoada e rústica (sem luz da rede), com palmeiras, campings e bares. Chega-se a pé pela trilha T10 desde Abraão (~4,7 km, ~2h30) ou de barco. É o acesso mais próximo de Lopes Mendes.`,
      es: `Una de las vilas caiçaras más antiguas, muy poco poblada y rústica (sin luz de red), con palmeras, campings y bares. Se llega a pie por la T10 desde Abraão (~4,7 km, ~2h30) o en barco. Es el acceso más cercano a Lopes Mendes.`,
    },
  },
  {
    num: 14,
    name: 'Jurubá',
    group: 'praias',
    desc: {
      en: `A deserted, rocky beach (~25 m) on the east coast, between Palmas and the Castelhanos lighthouse, ringed by forest and calm water. Reached on foot via trail T12 from Pouso (~30 min) or by boat. Isolated and almost untouched.`,
      fr: `Plage déserte et rocheuse (~25 m) sur la côte est, entre Palmas et le phare de Castelhanos, entourée de forêt et d'eaux calmes. Accès à pied par le sentier T12 depuis Pouso (~30 min) ou en bateau. Isolée et presque vierge.`,
      pt: `Praia deserta e rochosa (~25 m) na costa leste, entre Palmas e o Farol de Castelhanos, cercada de mata e águas tranquilas. Chega-se a pé pela trilha T12 desde Pouso (~30 min) ou de barco. Isolada e quase intocada.`,
      es: `Playa desierta y rocosa (~25 m) en la costa este, entre Palmas y el Faro de Castelhanos, rodeada de bosque y de aguas tranquilas. Se llega a pie por la T12 desde Pouso (~30 min) o en barco. Aislada y casi virgen.`,
    },
  },
  {
    num: 15,
    name: 'Castelhanos',
    group: 'praias',
    desc: {
      en: `A rocky, semi-deserted beach at the eastern tip, beside the historic Castelhanos lighthouse, with a single resident family and no services. Reached by boat or via trail T12 from Pouso (~1 h). Isolated — a day-visit spot.`,
      fr: `Plage rocheuse et semi-déserte à l'extrémité est, près du phare historique de Castelhanos, avec une seule famille résidente et aucun service. Accès en bateau ou par le sentier T12 depuis Pouso (~1 h). Isolée, à visiter à la journée.`,
      pt: `Praia rochosa e semideserta no extremo leste, junto ao histórico Farol de Castelhanos, com uma única família residente e sem serviços. Chega-se de barco ou pela trilha T12 desde Pouso (~1 h). Isolada, para visita de dia.`,
      es: `Playa rocosa y semidesierta en el extremo este, junto al histórico Faro de Castelhanos, con una sola familia residente y sin servicios. Se llega en barco o por la T12 desde Pouso (~1 h). Aislada, para visita de día.`,
    },
  },
  {
    num: 16,
    name: 'Lopes Mendes',
    group: 'praias',
    desc: {
      en: `A long beach of almost 3 km of white sand and crystal-clear water on the east coast, uninhabited and protected, famous for its beauty and its surf. Reached by boat to Pouso plus a ~1 km trail (or the full trail from Abraão).`,
      fr: `Longue plage de près de 3 km de sable blanc et d'eaux cristallines sur la côte est, inhabitée et préservée, célèbre pour sa beauté et ses vagues de surf. Accès en bateau jusqu'à Pouso + ~1 km de sentier (ou le sentier complet depuis Abraão).`,
      pt: `Longa praia de quase 3 km de areia branca e águas cristalinas na costa leste, desabitada e preservada, famosa pela beleza e pelas ondas para o surfe. Chega-se de barco até o Pouso + ~1 km de trilha (ou pela trilha completa desde Abraão).`,
      es: `Larga playa de casi 3 km de arena blanca y aguas cristalinas en la costa este, deshabitada y preservada, famosa por su belleza y su oleaje para surfear. Se llega en barco hasta Pouso + ~1 km de sendero (o por la trilha completa desde Abraão).`,
    },
  },
  {
    num: 17,
    name: 'Santo Antônio',
    group: 'praias',
    desc: {
      en: `A small fine-sand beach near Lopes Mendes, with large rocks, a freshwater stream and a view of Ilha Jorge Grego; good for snorkelling and surfing. Reached only on foot (a short trail from Pouso). Almost always semi-deserted.`,
      fr: `Petite plage de sable fin près de Lopes Mendes, avec de gros rochers, un ruisseau d'eau douce et une vue sur l'Ilha Jorge Grego ; propice au snorkeling et au surf. Accès uniquement à pied (court sentier depuis Pouso). Presque toujours semi-déserte.`,
      pt: `Pequena praia de areia fina perto de Lopes Mendes, com grandes rochas, um riacho de água doce e vista para a Ilha Jorge Grego; boa para snorkel e surfe. Só se chega a pé (trilha curta desde o Pouso). Quase sempre semideserta.`,
      es: `Pequeña playa de arena fina cerca de Lopes Mendes, con grandes rocas, un arroyo de agua dulce y vista a la Ilha Jorge Grego; buena para snorkel y surf. Solo se llega a pie (sendero corto desde Pouso). Casi siempre semidesierta.`,
    },
  },
  {
    num: 18,
    name: 'Caxadaço',
    group: 'praias',
    desc: {
      en: `A wild, almost deserted cove (~15–20 m) between Dois Rios and Lopes Mendes, with a natural rock pool, crystal-clear water and good snorkelling. Reached by boat (usually part of the "Volta à Ilha" island tour) or via the demanding trail T15 from Dois Rios. It has a viewpoint and a cliff-jumping spot.`,
      fr: `Crique sauvage et presque déserte (~15–20 m) entre Dois Rios et Lopes Mendes, avec une piscine naturelle de roche, des eaux cristallines et un bon snorkeling. Accès en bateau (souvent inclus dans le tour « Volta à Ilha ») ou par l'exigeant sentier T15 depuis Dois Rios. Elle a un belvédère et un spot de saut depuis les rochers.`,
      pt: `Enseada selvagem e quase deserta (~15–20 m) entre Dois Rios e Lopes Mendes, com piscina natural de rochas, águas cristalinas e bom snorkel. Chega-se de barco (costuma entrar na "Volta à Ilha") ou pela trilha T15 desde Dois Rios (puxada). Tem mirante e ponto de salto das rochas.`,
      es: `Cala salvaje y casi desierta (~15–20 m) entre Dois Rios y Lopes Mendes, con piscina natural de rocas, aguas cristalinas y buen snorkel. Se llega en barco (suele incluirse en la "Volta à Ilha") o por la T15 desde Dois Rios (exigente). Tiene mirante y punto de clavados.`,
    },
  },
  {
    num: 19,
    name: 'Dois Rios',
    group: 'vilas',
    desc: {
      en: `A historic village with an open-sea beach, site of the former Cândido Mendes prison (ruins and a museum) and a UERJ university centre, ~150 inhabitants; two rivers with waterfalls and surf. Reached on foot via trail T14 (~8 km, 2–3 h) or by boat. No overnight stays allowed.`,
      fr: `Village historique avec plage de pleine mer, site de l'ancien pénitencier Cândido Mendes (ruines et musée) et d'un centre de l'UERJ, ~150 habitants ; deux rivières à cascades et des vagues de surf. Accès à pied par le sentier T14 (~8 km, 2-3 h) ou en bateau. Nuitée non autorisée.`,
      pt: `Vila histórica com praia de mar aberto, sede do antigo presídio Cândido Mendes (ruínas e museu) e de um centro da UERJ, ~150 habitantes; dois rios com cachoeiras e ondas para surfe. Chega-se a pé pela trilha T14 (~8 km, 2-3 h) ou de barco. Não é permitido pernoitar.`,
      es: `Vila histórica con playa de mar abierto, sede del antiguo presidio Cândido Mendes (ruinas y museo) y de un centro de la UERJ, ~150 hab.; dos ríos con cascadas y olas para surf. Se llega a pie por la T14 (~8 km, 2-3 h) o en barco. No se permite pernoctar.`,
    },
  },
  {
    num: 20,
    name: 'Parnaioca',
    group: 'praias',
    desc: {
      en: `An isolated Atlantic beach of almost 1 km, with coarse yellowish sand and open sea; once the island's largest village (>1,000 inhabitants), today an almost deserted hamlet with ruins and a chapel, no electricity or signal. Reached on foot via trail T16 from Dois Rios (~3 h) or by boat. There is a campsite for overnight stays.`,
      fr: `Plage atlantique isolée de près de 1 km, au sable grossier jaunâtre et à la mer ouverte ; jadis le plus grand village de l'île (>1 000 habitants), aujourd'hui un hameau presque désert avec des ruines et une chapelle, sans électricité ni réseau. Accès à pied par le sentier T16 depuis Dois Rios (~3 h) ou en bateau. Camping possible pour la nuit.`,
      pt: `Praia atlântica isolada de quase 1 km, de areia grossa amarelada e mar aberto; outrora a maior vila da ilha (>1.000 habitantes), hoje um povoado quase deserto com ruínas e uma capela, sem luz nem sinal. Chega-se a pé pela trilha T16 desde Dois Rios (~3 h) ou de barco. Há camping para pernoitar.`,
      es: `Playa atlántica aislada de casi 1 km, de arena gruesa amarillenta y mar abierto; antaño fue la mayor villa de la isla (>1.000 hab.), hoy un caserío casi desierto con ruinas y una capilla, sin luz ni señal. Se llega a pie por la T16 desde Dois Rios (~3 h) o en barco. Hay camping para pernoctar.`,
    },
  },
  {
    num: 21,
    name: 'Aventureiro',
    group: 'praias',
    desc: {
      en: `A semi-isolated, protected beach at the southern tip, inside a sustainable-development reserve: a caiçara village with rustic campsites (no hotels, almost no electricity or signal) and open sea for surfers. Reached only by boat (1–3 h) or via trail T9 from Provetá (~6 km). Access requires a free wristband or permit.`,
      fr: `Plage semi-isolée et préservée à l'extrémité sud, dans une réserve de développement durable : village caiçara aux campings rustiques (pas d'hôtels, presque pas d'électricité ni de réseau) et mer ouverte pour les surfeurs. Accès uniquement en bateau (1-3 h) ou par le sentier T9 depuis Provetá (~6 km). L'accès nécessite un bracelet ou une autorisation gratuite.`,
      pt: `Praia semi-isolada e preservada no extremo sul, dentro de uma reserva de desenvolvimento sustentável: vila caiçara com campings rústicos (sem hotéis, quase sem luz nem sinal) e mar aberto para surfistas. Só se chega de barco (1-3 h) ou pela trilha T9 desde Provetá (~6 km). O acesso exige uma pulseira ou autorização gratuita.`,
      es: `Playa semiaislada y preservada en el extremo sur, dentro de una reserva de desarrollo sostenible: vila caiçara con campings rústicos (sin hoteles, casi sin luz ni señal) y mar abierto para surfistas. Solo se llega en barco (1-3 h) o por la T9 desde Provetá (~6 km). El acceso requiere una pulsera o autorización gratuita.`,
    },
  },
  {
    num: 22,
    name: 'Meros (Praia dos Meros)',
    group: 'praias',
    desc: {
      en: `A small, isolated beach at the south-western tip, reachable only by sea (by speedboat or schooner, on the "Volta à Ilha" tour or from Provetá/Araçatiba). Semi-deserted, with clear water and very white sand, and excellent snorkelling.`,
      fr: `Petite plage isolée à l'extrémité sud-ouest, accessible uniquement par la mer (en vedette ou en goélette, lors du tour « Volta à Ilha » ou depuis Provetá/Araçatiba). Semi-déserte, aux eaux claires et au sable très blanc, avec un excellent snorkeling.`,
      pt: `Praia pequena e isolada no extremo sudoeste, acessível somente por mar (de lancha ou escuna, na "Volta à Ilha" ou desde Provetá/Araçatiba). Semideserta, de águas claras e areia muito branca, com excelente snorkel.`,
      es: `Playa pequeña y aislada en el extremo suroeste, accesible solo por mar (en lancha o escuna, dentro de la "Volta à Ilha" o desde Provetá/Araçatiba). Semidesierta, de aguas claras y arena muy blanca, con excelente snorkel.`,
    },
  },
  {
    num: 23,
    name: 'Provetá',
    group: 'vilas',
    desc: {
      en: `A fishing village at the western tip, the island's second-largest community (~1,500 inhabitants), with a sheltered beach of green water and little tourism. Reached by boat from Angra (~2 h) or on foot from Aventureiro or Araçatiba. Diving at Ilha dos Meros.`,
      fr: `Village de pêcheurs à l'extrémité ouest, deuxième communauté de l'île (~1 500 habitants), avec une plage abritée aux eaux vertes et peu de tourisme. Accès en bateau depuis Angra (~2 h) ou par les sentiers depuis Aventureiro ou Araçatiba. Plongée à l'Ilha dos Meros.`,
      pt: `Vila de pescadores no extremo oeste, a segunda maior comunidade da ilha (~1.500 habitantes), com praia abrigada de águas verdes e pouco turismo. Chega-se de barco desde Angra (~2 h) ou por trilhas desde Aventureiro ou Araçatiba. Mergulho na Ilha dos Meros.`,
      es: `Vila de pescadores en el extremo oeste, la segunda comunidad más grande de la isla (~1.500 hab.), con playa abrigada de aguas verdes y poco turismo. Se llega en barco desde Angra (~2 h) o por senderos desde Aventureiro o Araçatiba. Buceo en la Ilha dos Meros.`,
    },
  },
  {
    num: 24,
    name: 'Dentista (Ilha da Gipóia)',
    group: 'islas',
    desc: {
      en: `A beach of calm, crystal-clear water (officially Jurubaíba), on Ilha da Gipóia; reached only by boat from Angra (~30 min). A popular anchorage for speedboats and sailboats, a social atmosphere and floating bars; quieter on weekdays.`,
      fr: `Plage aux eaux calmes et cristallines (officiellement Jurubaíba), sur l'Ilha da Gipóia ; accès uniquement en bateau depuis Angra (~30 min). Mouillage prisé des vedettes et voiliers, ambiance conviviale et bars flottants ; plus tranquille en semaine.`,
      pt: `Praia de águas calmas e cristalinas (oficialmente Jurubaíba), na Ilha da Gipóia; só se chega de barco desde Angra (~30 min). Fundeadouro popular de lanchas e veleiros, ambiente social e bares flutuantes; durante a semana é mais tranquila.`,
      es: `Playa de aguas calmas y cristalinas (oficialmente Jurubaíba), en la Ilha da Gipóia; solo se llega en barco desde Angra (~30 min). Fondeo popular de lanchas y veleros, ambiente social y bares flotantes; entre semana es más tranquila.`,
    },
  },
  {
    num: 25,
    name: 'Cataguás',
    group: 'islas',
    desc: {
      en: `A small island of white sand and Caribbean-coloured water off Angra, with no services and surrounded by fish, ideal for snorkelling. Reached only by boat; a regular stop on the tours.`,
      fr: `Petite île de sable blanc aux eaux couleur Caraïbes au large d'Angra, sans services et entourée de poissons, idéale pour le snorkeling. Accès uniquement en bateau ; escale habituelle des excursions.`,
      pt: `Pequena ilha de areia branca e águas cor de Caribe em frente a Angra, sem serviços e cercada de peixes, ideal para snorkel. Só se chega de barco; é parada habitual dos passeios.`,
      es: `Pequeña isla de arena blanca y aguas color caribe frente a Angra, sin servicios y rodeada de peces, ideal para snorkel. Solo se llega en barco; es parada habitual de los paseos.`,
    },
  },
  {
    num: 26,
    name: 'Botinas',
    group: 'islas',
    desc: {
      en: `Two twin rocky islets (shaped like boots) in the bay, with no beach; reached only by boat. Between the two islands lies a crystal-clear natural pool, aquarium-like, very popular for snorkelling and diving.`,
      fr: `Deux îlots rocheux jumeaux (en forme de bottes) dans la baie, sans plage ; accès uniquement en bateau. Entre les deux îles se forme une piscine naturelle cristalline, tel un aquarium, très prisée pour le snorkeling et la plongée.`,
      pt: `Dois ilhotes rochosos gêmeos (em forma de botas) na baía, sem praia; só se chega de barco. Entre as duas ilhas forma-se uma piscina natural cristalina, tipo aquário, muito popular para snorkel e mergulho.`,
      es: `Dos islotes rocosos gemelos (con forma de botas) en la bahía, sin playa; solo se llega en barco. Entre las dos islas se forma una piscina natural cristalina, tipo acuario, muy popular para snorkel y buceo.`,
    },
  },
  {
    num: 27,
    name: 'Flechas (Ilha da Gipóia)',
    group: 'islas',
    desc: {
      en: `A broad sandy beach on Ilha da Gipóia, reachable only by boat (~15–30 min from Angra). The left side is preserved and quiet; the right has restaurants and kiosks. Blue-green water; it gets lively at weekends.`,
      fr: `Vaste plage de sable sur l'Ilha da Gipóia, accessible uniquement en bateau (~15-30 min d'Angra). Le côté gauche est préservé et tranquille ; le côté droit compte restaurants et kiosques. Eaux bleu-vert ; animée le week-end.`,
      pt: `Praia de areia extensa na Ilha da Gipóia, acessível somente de barco (~15-30 min de Angra). O lado esquerdo é preservado e tranquilo; o direito tem restaurantes e quiosques. Águas verde-azuladas; anima nos fins de semana.`,
      es: `Playa de arena extensa en la Ilha da Gipóia, solo accesible en barco (~15-30 min de Angra). El lado izquierdo es preservado y tranquilo; el derecho tiene restaurantes y quioscos. Aguas verde-azuladas; se anima los fines de semana.`,
    },
  },
  {
    num: 28,
    name: 'Piedade (Ilha da Gipóia)',
    group: 'islas',
    desc: {
      en: `A small cove of calm, clear water on Ilha da Gipóia, famous for its little chapel (Igrejinha da Piedade) beside a strip of sand. Reached only by boat; a stop on the tour. Idyllic, ideal for families.`,
      fr: `Petite anse aux eaux calmes et transparentes sur l'Ilha da Gipóia, célèbre pour sa petite chapelle (Igrejinha da Piedade) au bord d'une bande de sable. Accès uniquement en bateau ; escale de l'excursion. Bucolique, idéale en famille.`,
      pt: `Pequena enseada de águas calmas e transparentes na Ilha da Gipóia, famosa pela capelinha (Igrejinha da Piedade) ao lado de uma faixa de areia. Só se chega de barco; é parada do passeio. Bucólico, ideal em família.`,
      es: `Pequeña ensenada de aguas calmas y transparentes en la Ilha da Gipóia, famosa por su capillita (Igrejinha da Piedade) junto a una franja de arena. Solo se llega en barco; es parada del paseo. Bucólico, ideal en familia.`,
    },
  },
];
