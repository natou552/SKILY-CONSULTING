import Link from "next/link";
import type { Service } from "@/lib/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className="group flex flex-col rounded-3xl border border-navy-900/8 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/30 hover:shadow-xl hover:shadow-navy-900/5"
    >
      <h3 className="text-lg font-semibold text-navy-900">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700">
        {service.shortDescription}
      </p>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 transition-transform group-hover:translate-x-1">
        En savoir plus →
      </span>
    </Link>
  );
}
