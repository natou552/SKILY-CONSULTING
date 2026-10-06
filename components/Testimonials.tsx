const testimonials = [
  {
    name: "Nom Prénom — [EXEMPLE À REMPLACER]",
    role: "Gérant de restaurant, Paris",
    quote:
      "[EXEMPLE À REMPLACER] Un accompagnement réactif et des explications claires sur la TVA de notre établissement. On enfin y voit clair dans nos marges.",
  },
  {
    name: "Nom Prénom — [EXEMPLE À REMPLACER]",
    role: "Dirigeante indépendante",
    quote:
      "[EXEMPLE À REMPLACER] Des outils digitaux simples et un suivi personnalisé : je gagne un temps précieux sur ma gestion comptable.",
  },
  {
    name: "Nom Prénom — [EXEMPLE À REMPLACER]",
    role: "Dirigeant de TPE, Paris 17e",
    quote:
      "[EXEMPLE À REMPLACER] Un cabinet proche de ses clients, qui répond vite et propose de vraies pistes d'optimisation fiscale.",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-3 inline-block rounded-full bg-amber-100 px-4 py-1 text-xs font-semibold text-amber-800">
        Contenu d&apos;exemple — témoignages réels à venir [À COMPLÉTER]
      </div>
      <h2 className="text-3xl font-bold text-navy-900">Ils nous font confiance</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <figure
            key={i}
            className="rounded-3xl border border-navy-900/8 bg-white p-8"
          >
            <blockquote className="text-sm leading-relaxed text-navy-700">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <div className="font-semibold text-navy-900">{t.name}</div>
              <div className="text-navy-700/70">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
