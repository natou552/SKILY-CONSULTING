# TODO — Éléments à compléter avant mise en ligne

Ce fichier liste tous les éléments marqués `[À COMPLÉTER]` ou `[À AJUSTER]` dans le site, à valider avec le cabinet avant la mise en production.

## Coordonnées et configuration (`lib/site-config.ts`)

- [x] Téléphone du cabinet (`contact.phone` et `contact.phoneHref`)
- [x] Email de contact (`contact.email`)
- [x] Horaires d'ouverture (`contact.hours`) — à confirmer : "Lun-Ven 9h-19h" déduit de "9h 19h", jours ouvrés non précisés
- [ ] Nom de domaine définitif (`url`)
- [ ] N° d'inscription à l'Ordre des experts-comptables (`legal.orderNumber`)
- [ ] Hébergeur du site, raison sociale + adresse (`legal.host`)
- [ ] Lien LinkedIn du cabinet (`social.linkedin`), si pertinent

## Variables d'environnement (`.env.example` → `.env.local`)

- [ ] `NEXT_PUBLIC_FORMSPREE_ENDPOINT` — créer un formulaire sur https://formspree.io et renseigner l'endpoint fourni
- [ ] `NEXT_PUBLIC_CALENDLY_URL` — créer/connecter un compte Calendly (ou équivalent) et renseigner le lien de réservation

## Contenus à valider ou compléter

- [ ] Page À propos : parcours et présentation détaillée d'Illan Yaiche (formation, expérience, spécialisations)
- [ ] Page À propos : préciser la cible exacte du cabinet (phrase marquée `[À AJUSTER]`)
- [ ] Service "Création d'entreprise" (`lib/services.ts`) : description détaillée à écrire
- [ ] Service "Social et paie" (`lib/services.ts`) : description détaillée à écrire
- [ ] Vérifier/compléter la liste des services si d'autres prestations existent (juridique, etc.)
- [ ] Témoignages de la page d'accueil (`components/Testimonials.tsx`) : actuellement des exemples factices, à remplacer par de vrais retours clients (avec leur accord)
- [ ] Politique de confidentialité : date de dernière mise à jour, durée précise de conservation des données, et mention des éventuels outils d'analyse d'audience si ajoutés
- [ ] Mentions légales : coordonnées du conseil régional de l'Ordre des experts-comptables, si à ajouter

## Vérifications techniques avant mise en ligne

- [ ] Vérifier les coordonnées GPS de la carte (`lib/site-config.ts` → `address.lat` / `address.lng` / `osmEmbedUrl`) : actuellement une estimation du 17e arrondissement
- [ ] Ajouter une image Open Graph définitive (`public/og-image.png`) à la place du placeholder
- [ ] Remplacer le favicon par défaut si besoin
- [ ] Relire l'ensemble des textes (orthographe, ton, exactitude des informations légales)
