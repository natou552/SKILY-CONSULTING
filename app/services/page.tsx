import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";
import RevealOnScroll from "@/components/RevealOnScroll";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Nos services d'expertise comptable",
  description:
    "Tenue comptable, déclarations de revenus, optimisation fiscale, accompagnement des restaurateurs, création d'entreprise et social/paie. Tarifs sur devis.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold">Nos services</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            De la tenue comptable à l&apos;optimisation fiscale, un accompagnement
            sur mesure pour les dirigeants, indépendants et restaurateurs.
            Tarifs sur devis, adaptés à votre activité.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-20 px-6 py-20">
        {services.map((service) => (
          <RevealOnScroll key={service.slug}>
            <article id={service.slug} className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-navy-900">{service.title}</h2>
              <p className="mt-4 leading-relaxed text-navy-700">
                {service.description}
              </p>
              <ul className="mt-6 space-y-2">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-navy-800">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <CtaButton href="/contact" variant="secondary">
                  Demander un devis
                </CtaButton>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>

      <section className="bg-paper py-16 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-2xl font-bold text-navy-900">
            Une question sur nos services ?
          </h2>
          <p className="mt-3 text-navy-700">
            Contactez-nous pour un premier échange et un devis personnalisé.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <CtaButton href="/contact">Prendre rendez-vous</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
