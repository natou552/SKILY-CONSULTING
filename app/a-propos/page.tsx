import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";
import RevealOnScroll from "@/components/RevealOnScroll";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "À propos du cabinet",
  description:
    "SKILY CONSULTING, cabinet d'expertise comptable dirigé par Illan Yaiche, implanté à Paris 17e depuis 2021.",
  alternates: { canonical: "/a-propos" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold">À propos de {siteConfig.name}</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Un cabinet d&apos;expertise comptable à taille humaine, pensé pour
            être réactif, digital et proche de ses clients.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <RevealOnScroll>
          <h2 className="text-2xl font-bold text-navy-900">Le cabinet</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-navy-700">
            <p>
              SKILY CONSULTING est un cabinet d&apos;expertise comptable créé en
              octobre 2021, sous forme de SASU au capital de{" "}
              {siteConfig.legal.capital}. Basé au {siteConfig.address.full},
              le cabinet accompagne des TPE, PME, indépendants, dirigeants et
              particuliers, avec une spécialité reconnue dans
              l&apos;accompagnement des restaurateurs. [À AJUSTER selon la
              cible exacte du cabinet]
            </p>
            <p>
              Notre approche repose sur trois piliers : une réactivité
              constante face aux demandes de nos clients, l&apos;usage d&apos;outils
              digitaux modernes pour simplifier le suivi comptable, et une
              relation de proximité, ancrée dans le 17e arrondissement de
              Paris.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mt-16">
          <h2 className="text-2xl font-bold text-navy-900">
            Illan Yaiche, Président
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-navy-700">
            <p>
              Expert-comptable et Président de SKILY CONSULTING, Illan Yaiche
              met son expertise au service des dirigeants et indépendants
              pour simplifier leur gestion comptable et fiscale et les aider
              à prendre des décisions éclairées pour leur activité.
              [À COMPLÉTER : parcours, formation, spécialisations, nombre
              d&apos;années d&apos;expérience]
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mt-16 rounded-3xl border border-navy-900/8 bg-white p-8">
          <h2 className="text-xl font-bold text-navy-900">Informations légales</h2>
          <dl className="mt-4 grid gap-3 text-sm text-navy-700 sm:grid-cols-2">
            <div>
              <dt className="font-medium text-navy-900">Forme juridique</dt>
              <dd>{siteConfig.legal.legalForm}</dd>
            </div>
            <div>
              <dt className="font-medium text-navy-900">Capital social</dt>
              <dd>{siteConfig.legal.capital}</dd>
            </div>
            <div>
              <dt className="font-medium text-navy-900">SIREN</dt>
              <dd>{siteConfig.legal.siren}</dd>
            </div>
            <div>
              <dt className="font-medium text-navy-900">RCS</dt>
              <dd>{siteConfig.legal.rcs}</dd>
            </div>
            <div>
              <dt className="font-medium text-navy-900">TVA intracommunautaire</dt>
              <dd>{siteConfig.legal.vat}</dd>
            </div>
            <div>
              <dt className="font-medium text-navy-900">Ordre des experts-comptables</dt>
              <dd>{siteConfig.legal.orderNumber}</dd>
            </div>
          </dl>
        </RevealOnScroll>

        <div className="mt-16 text-center">
          <CtaButton href="/contact">Prendre rendez-vous</CtaButton>
        </div>
      </section>
    </>
  );
}
