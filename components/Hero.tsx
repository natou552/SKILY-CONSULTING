import CtaButton from "./CtaButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <span className="inline-flex items-center rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium text-white/70">
          Expert-comptable · Paris 17e
        </span>

        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Une comptabilité claire,
          <span className="text-accent-400"> un cabinet qui vous répond vraiment.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          SKILY CONSULTING accompagne dirigeants, indépendants et restaurateurs
          avec des outils digitaux modernes et une relation de proximité, au
          cœur du 17e arrondissement de Paris.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <CtaButton href="/contact">Prendre rendez-vous</CtaButton>
          <CtaButton href="/contact" variant="ghost" className="!bg-white/5 !text-white !border-white/15 hover:!border-white/30">
            Demander un devis
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
