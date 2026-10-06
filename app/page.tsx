import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import CtaButton from "@/components/CtaButton";
import RevealOnScroll from "@/components/RevealOnScroll";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Expert-comptable à Paris 17 | SKILY CONSULTING",
  description:
    "Cabinet d'expertise comptable à Paris 17e : tenue comptable, déclarations fiscales, optimisation fiscale et accompagnement des restaurateurs. Prenez rendez-vous.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Expert-comptable à Paris 17 | SKILY CONSULTING",
    description:
      "Tenue comptable, déclarations fiscales, optimisation fiscale et accompagnement des restaurateurs à Paris 17e.",
    url: "/",
  },
};

const reasons = [
  {
    title: "Réactivité",
    description:
      "Une question, une urgence ? Nous vous répondons rapidement, sans attendre des semaines pour avoir un interlocuteur.",
  },
  {
    title: "Digital",
    description:
      "Des outils modernes pour suivre votre comptabilité en temps réel, transmettre vos documents et échanger simplement avec le cabinet.",
  },
  {
    title: "Proximité, Paris 17e",
    description:
      "Un cabinet implanté au cœur du 17e arrondissement, à votre écoute et disponible pour des rendez-vous en présentiel comme à distance.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold text-navy-900">Nos services</h2>
          <p className="mt-3 max-w-2xl text-navy-700">
            Un accompagnement complet, de la tenue comptable à l&apos;optimisation
            fiscale, avec une expertise reconnue des métiers de la restauration.
          </p>
        </RevealOnScroll>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <RevealOnScroll key={service.slug} delay={i * 80}>
              <ServiceCard service={service} />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="bg-navy-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold">Pourquoi nous choisir</h2>
          </RevealOnScroll>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {reasons.map((reason, i) => (
              <RevealOnScroll key={reason.title} delay={i * 100}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                  <h3 className="text-lg font-semibold text-accent-400">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {reason.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold text-navy-900">
            Prêt à simplifier votre comptabilité ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-navy-700">
            Parlons de votre activité et de vos besoins : premier échange sans
            engagement.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CtaButton href="/contact">Prendre rendez-vous</CtaButton>
            <CtaButton href="/contact" variant="secondary">
              Demander un devis
            </CtaButton>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
