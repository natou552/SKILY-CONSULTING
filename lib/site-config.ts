// Configuration centralisée du site : coordonnées, infos légales, liens externes.
// Tous les champs marqués [À COMPLÉTER] doivent être renseignés avant mise en ligne (voir TODO.md).

export const siteConfig = {
  name: "SKILY CONSULTING",
  tagline: "Expert-comptable à Paris 17 — réactif, digital, à vos côtés",
  url: "https://www.skily-consulting.fr", // [À COMPLÉTER] nom de domaine définitif
  locale: "fr_FR",

  contact: {
    phone: "06 19 48 19 13",
    phoneHref: "tel:+33619481913",
    email: "illanyaiche@gmail.com",
    hours: "Lun-Ven 9h-19h", // [À AJUSTER] jours/horaires exacts à confirmer
  },

  address: {
    street: "4 rue Denis Poisson",
    postalCode: "75017",
    city: "Paris",
    country: "France",
    full: "4 rue Denis Poisson, 75017 Paris",
    // Coordonnées approximatives du 17e arrondissement — à ajuster si besoin via le lien ci-dessous.
    lat: 48.8793,
    lng: 2.2889,
    osmEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=2.2839%2C48.8768%2C2.2939%2C48.8818&layer=mapnik&marker=48.8793%2C2.2889",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=4+rue+Denis+Poisson+75017+Paris",
  },

  legal: {
    legalForm: "SASU",
    capital: "1 000 €",
    president: "Illan Yaiche",
    siren: "903 856 102",
    rcs: "RCS Paris",
    vat: "FR54903856102",
    createdOn: "octobre 2021",
    orderNumber: "[À COMPLÉTER]", // N° d'inscription à l'Ordre des experts-comptables
    host: "[À COMPLÉTER]", // ex: Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA
  },

  booking: {
    // Lien Calendly (ou équivalent) pour la prise de rendez-vous — à brancher.
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "[À COMPLÉTER]",
  },

  form: {
    // Endpoint Formspree pour la réception du formulaire de contact.
    formspreeEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "",
  },

  social: {
    linkedin: "[À COMPLÉTER]",
  },
};

export type SiteConfig = typeof siteConfig;
