import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de SKILY CONSULTING, cabinet d'expertise comptable à Paris 17e.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function LegalNoticePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold text-navy-900">Mentions légales</h1>

      <div className="mt-10 space-y-8 leading-relaxed text-navy-700">
        <div>
          <h2 className="text-lg font-semibold text-navy-900">Éditeur du site</h2>
          <p className="mt-2">
            Le présent site est édité par la société {siteConfig.name}, {siteConfig.legal.legalForm}{" "}
            au capital social de {siteConfig.legal.capital}, créée en {siteConfig.legal.createdOn}.
          </p>
          <ul className="mt-2 list-inside list-disc">
            <li>Siège social : {siteConfig.address.full}</li>
            <li>SIREN : {siteConfig.legal.siren}</li>
            <li>Immatriculation : {siteConfig.legal.rcs}</li>
            <li>N° de TVA intracommunautaire : {siteConfig.legal.vat}</li>
            <li>Président : {siteConfig.legal.president}, expert-comptable</li>
            <li>
              N° d&apos;inscription à l&apos;Ordre des experts-comptables :{" "}
              {siteConfig.legal.orderNumber}
            </li>
            <li>Téléphone : {siteConfig.contact.phone}</li>
            <li>Email : {siteConfig.contact.email}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy-900">Directeur de la publication</h2>
          <p className="mt-2">
            {siteConfig.legal.president}, en qualité de Président de {siteConfig.name}.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy-900">Hébergement</h2>
          <p className="mt-2">
            Ce site est hébergé par : {siteConfig.legal.host}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy-900">Propriété intellectuelle</h2>
          <p className="mt-2">
            L&apos;ensemble des contenus présents sur ce site (textes, logotype,
            visuels, structure) est la propriété de {siteConfig.name}, sauf
            mention contraire. Toute reproduction, totale ou partielle, est
            interdite sans autorisation préalable écrite.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy-900">Ordre professionnel</h2>
          <p className="mt-2">
            {siteConfig.legal.president} est inscrit à l&apos;Ordre des
            experts-comptables sous le numéro {siteConfig.legal.orderNumber},
            et soumis au code de déontologie de la profession ainsi qu&apos;au
            contrôle de l&apos;Ordre des experts-comptables de la région Paris
            Île-de-France. [À COMPLÉTER : coordonnées du conseil régional de
            l&apos;Ordre si nécessaire]
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy-900">Limitation de responsabilité</h2>
          <p className="mt-2">
            {siteConfig.name} s&apos;efforce d&apos;assurer l&apos;exactitude des
            informations diffusées sur ce site, sans garantir l&apos;absence
            d&apos;erreur ou d&apos;omission. Les informations présentées ne
            sauraient remplacer une consultation personnalisée avec le cabinet.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy-900">Droit applicable</h2>
          <p className="mt-2">
            Les présentes mentions légales sont soumises au droit français.
            Tout litige relatif à l&apos;utilisation du site relève de la
            compétence des tribunaux français.
          </p>
        </div>
      </div>
    </section>
  );
}
