export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "conciergerie-billetterie",
    title: "Conciergerie et billetterie",
    shortDescription:
      "Une spécialité du cabinet : la fiscalité des entreprises de conciergerie et de billetterie, des activités aux règles bien particulières.",
    description:
      "Les entreprises de conciergerie (locations touristiques, gestion pour compte de tiers) et de billetterie opèrent souvent comme intermédiaires : encaissements pour le compte de propriétaires ou d'organisateurs, commissions, reversements. Ce fonctionnement a des conséquences fiscales et comptables spécifiques — régime de TVA sur les commissions, distinction mandat/commissionnaire, taxation des spectacles — que nous maîtrisons pour sécuriser votre activité et optimiser votre fiscalité.",
    bullets: [
      "Fiscalité des commissions et frais de service",
      "Comptabilisation des flux encaissés pour le compte de tiers (mandat, commissionnaire)",
      "TVA applicable à la billetterie et aux prestations de conciergerie",
      "Accompagnement des plateformes et conciergeries de locations touristiques",
    ],
  },
  {
    slug: "tenue-comptable-bilan",
    title: "Tenue comptable et bilan annuel",
    shortDescription:
      "Une comptabilité tenue à jour tout au long de l'année et un bilan annuel clair, livré dans les délais.",
    description:
      "Nous prenons en charge l'intégralité de votre comptabilité : saisie des pièces, rapprochements bancaires, suivi de trésorerie et établissement de votre bilan et compte de résultat annuels. Grâce à nos outils digitaux, vous suivez votre activité en temps réel, sans attendre la fin de l'exercice pour avoir une vision claire de votre situation.",
    bullets: [
      "Saisie et tenue comptable mensuelle ou trimestrielle",
      "Rapprochements bancaires et suivi de trésorerie",
      "Établissement du bilan et du compte de résultat",
      "Tableaux de bord et indicateurs de pilotage",
    ],
  },
  {
    slug: "declarations-revenus",
    title: "Déclarations de revenus",
    shortDescription:
      "Déclarations fiscales des particuliers et des dirigeants, préparées avec rigueur et déposées dans les temps.",
    description:
      "Qu'il s'agisse de votre déclaration personnelle (IR, revenus fonciers, plus-values) ou de celle de votre entreprise, nous préparons et déposons vos déclarations fiscales en veillant à l'exactitude des montants et au respect des échéances légales. Nous vous alertons en amont sur les pièces à réunir pour éviter tout retard.",
    bullets: [
      "Déclaration de revenus des particuliers",
      "Déclaration de revenus des dirigeants et indépendants",
      "Revenus fonciers et plus-values",
      "Suivi des échéances fiscales",
    ],
  },
  {
    slug: "optimisation-fiscale",
    title: "Optimisation fiscale",
    shortDescription:
      "Une stratégie fiscale adaptée à votre situation pour alléger durablement votre charge d'impôt, en toute légalité.",
    description:
      "Nous analysons votre structure juridique, votre rémunération et vos investissements pour identifier les leviers d'optimisation fiscale adaptés à votre activité : choix du régime fiscal, arbitrage rémunération/dividendes, dispositifs de défiscalisation. Chaque recommandation est documentée et conforme à la réglementation en vigueur.",
    bullets: [
      "Audit de votre situation fiscale actuelle",
      "Arbitrage rémunération / dividendes",
      "Choix et changement de régime fiscal",
      "Veille sur les dispositifs applicables à votre secteur",
    ],
  },
  {
    slug: "restaurateurs",
    title: "Accompagnement des restaurateurs",
    shortDescription:
      "Une spécialité du cabinet : les spécificités comptables et fiscales de la restauration, maîtrisées de A à Z.",
    description:
      "La restauration a ses propres règles : TVA à taux multiples, gestion des pourboires, ratios de marge, ardoise de trésorerie quotidienne. Nous accompagnons les restaurateurs avec des outils et une méthode pensés pour leur réalité : suivi de la marge matière, gestion de la masse salariale, optimisation de la TVA sur place / à emporter.",
    bullets: [
      "Gestion de la TVA multi-taux (sur place, à emporter, alcool)",
      "Suivi de la marge matière et des ratios clés",
      "Accompagnement social et paie du personnel",
      "Conseils d'implantation et de reprise d'établissement",
    ],
  },
  {
    slug: "creation-entreprise",
    title: "Création d'entreprise",
    shortDescription:
      "Du choix du statut juridique aux premières démarches, un accompagnement complet pour démarrer sur de bonnes bases.",
    description:
      "[À COMPLÉTER] — Détail du service de création d'entreprise à préciser : accompagnement au choix de la forme juridique, rédaction des statuts, formalités d'immatriculation, prévisionnel financier, etc.",
    bullets: [
      "Choix de la forme juridique adaptée",
      "Formalités de création et d'immatriculation",
      "Prévisionnel financier et business plan",
      "[À COMPLÉTER]",
    ],
  },
  {
    slug: "social-paie",
    title: "Social et paie",
    shortDescription:
      "La gestion sociale et la paie de vos salariés, assurées en conformité avec la réglementation en vigueur.",
    description:
      "[À COMPLÉTER] — Détail du service social/paie à préciser : établissement des bulletins de paie, déclarations sociales (DSN), contrats de travail, gestion des entrées/sorties de salariés, etc.",
    bullets: [
      "Établissement des bulletins de paie",
      "Déclarations sociales nominatives (DSN)",
      "Contrats de travail et formalités d'embauche",
      "[À COMPLÉTER]",
    ],
  },
];
