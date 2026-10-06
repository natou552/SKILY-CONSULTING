import { siteConfig } from "@/lib/site-config";

export default function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-3xl border border-navy-900/8">
      <iframe
        title={`Localisation de ${siteConfig.name}`}
        src={siteConfig.address.osmEmbedUrl}
        className="h-80 w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
