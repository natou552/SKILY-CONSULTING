import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import CtaButton from "@/components/CtaButton";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez SKILY CONSULTING, expert-comptable à Paris 17e : formulaire de contact, coordonnées et prise de rendez-vous en ligne.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold">Contactez-nous</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Une question, un projet, un devis à demander ? Écrivez-nous ou
            prenez directement rendez-vous en ligne.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-bold text-navy-900">Envoyez-nous un message</h2>
            <p className="mt-2 text-navy-700">
              Nous vous répondons généralement sous 24 à 48h ouvrées.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-accent-500/30 bg-accent-500/10 p-8">
              <h2 className="text-lg font-semibold text-navy-900">
                Prendre rendez-vous directement
              </h2>
              <p className="mt-2 text-sm text-navy-700">
                Réservez un créneau dans notre agenda en ligne, sans attendre
                de réponse par email.
              </p>
              <div className="mt-6">
                <CtaButton href={siteConfig.booking.calendlyUrl}>
                  Prendre rendez-vous
                </CtaButton>
              </div>
              {siteConfig.booking.calendlyUrl === "[À COMPLÉTER]" && (
                <p className="mt-3 text-xs text-amber-700">
                  Lien de prise de rendez-vous à configurer (Calendly ou
                  équivalent). [À COMPLÉTER]
                </p>
              )}
            </div>

            <div className="rounded-3xl border border-navy-900/8 bg-white p-8">
              <h2 className="text-lg font-semibold text-navy-900">Coordonnées</h2>
              <dl className="mt-4 space-y-3 text-sm text-navy-700">
                <div>
                  <dt className="font-medium text-navy-900">Adresse</dt>
                  <dd>{siteConfig.address.full}</dd>
                </div>
                <div>
                  <dt className="font-medium text-navy-900">Téléphone</dt>
                  <dd>
                    <a href={siteConfig.contact.phoneHref} className="hover:text-accent-600">
                      {siteConfig.contact.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-navy-900">Email</dt>
                  <dd>
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-accent-600">
                      {siteConfig.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-navy-900">Horaires</dt>
                  <dd>{siteConfig.contact.hours}</dd>
                </div>
              </dl>
            </div>

            <MapEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
