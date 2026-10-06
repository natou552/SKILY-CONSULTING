import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles de SKILY CONSULTING, conforme au RGPD.",
  alternates: { canonical: "/politique-de-confidentialite" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold text-navy-900">
        Politique de confidentialité
      </h1>
      <p className="mt-4 text-sm text-navy-700">Dernière mise à jour : [À COMPLÉTER]</p>

      <div className="mt-10 space-y-8 leading-relaxed text-navy-700">
        <div>
          <h2 className="text-lg font-semibold text-navy-900">1. Responsable du traitement</h2>
          <p className="mt-2">
            Le responsable du traitement des données collectées sur ce site
            est {siteConfig.name}, {siteConfig.legal.legalForm}, {siteConfig.address.full},
            SIREN {siteConfig.legal.siren}. Pour toute question relative à vos
            données personnelles, vous pouvez nous contacter à l&apos;adresse{" "}
            {siteConfig.contact.email}.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy-900">
            2. Données collectées via le formulaire de contact
          </h2>
          <p className="mt-2">
            Lorsque vous utilisez notre formulaire de contact, nous collectons
            les données suivantes : nom, adresse email, numéro de téléphone
            (facultatif), type de besoin et contenu de votre message. Ces
            données sont transmises de manière sécurisée via notre
            prestataire d&apos;envoi de formulaires (Formspree).
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy-900">3. Finalité du traitement</h2>
          <p className="mt-2">
            Ces données sont collectées dans le seul but de répondre à votre
            demande de contact ou de rendez-vous, et ne font l&apos;objet
            d&apos;aucune prospection commerciale sans votre consentement
            explicite.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy-900">4. Base légale</h2>
          <p className="mt-2">
            Le traitement de vos données repose sur votre consentement,
            exprimé lors de l&apos;envoi du formulaire de contact, conformément
            à l&apos;article 6 du Règlement Général sur la Protection des
            Données (RGPD).
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy-900">5. Durée de conservation</h2>
          <p className="mt-2">
            Vos données sont conservées pendant la durée nécessaire au
            traitement de votre demande, puis archivées conformément aux
            obligations légales applicables à notre activité. [À COMPLÉTER :
            durée précise de conservation]
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy-900">6. Destinataires des données</h2>
          <p className="mt-2">
            Vos données sont destinées exclusivement à {siteConfig.name} et à
            son prestataire technique d&apos;envoi de formulaires (Formspree).
            Elles ne sont ni vendues, ni cédées, ni échangées avec des tiers.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy-900">7. Vos droits</h2>
          <p className="mt-2">
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
            rectification, d&apos;effacement, de limitation, d&apos;opposition et
            de portabilité de vos données. Vous pouvez exercer ces droits en
            nous contactant à {siteConfig.contact.email}. Vous disposez
            également du droit d&apos;introduire une réclamation auprès de la
            CNIL (www.cnil.fr).
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy-900">8. Cookies</h2>
          <p className="mt-2">
            Ce site n&apos;utilise pas de cookies de suivi publicitaire. [À
            COMPLÉTER si un outil d&apos;analyse d&apos;audience ou un cookie
            technique est ajouté ultérieurement]
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-navy-900">9. Sécurité</h2>
          <p className="mt-2">
            Nous mettons en œuvre des mesures techniques et organisationnelles
            appropriées pour protéger vos données contre tout accès non
            autorisé, perte ou divulgation.
          </p>
        </div>
      </div>
    </section>
  );
}
