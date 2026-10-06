import Link from "next/link";
import Logo from "./Logo";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="mt-24 bg-navy-950 text-white/80">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Cabinet d&apos;expertise comptable à Paris 17e, au service des
              dirigeants, indépendants et restaurateurs.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="hover:text-accent-400">Accueil</Link></li>
              <li><Link href="/services" className="hover:text-accent-400">Services</Link></li>
              <li><Link href="/a-propos" className="hover:text-accent-400">À propos</Link></li>
              <li><Link href="/contact" className="hover:text-accent-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Coordonnées</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>{siteConfig.address.full}</li>
              <li>{siteConfig.contact.phone}</li>
              <li>{siteConfig.contact.email}</li>
              <li>{siteConfig.contact.hours}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Informations légales</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/mentions-legales" className="hover:text-accent-400">Mentions légales</Link></li>
              <li><Link href="/politique-de-confidentialite" className="hover:text-accent-400">Politique de confidentialité</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} — SASU au capital de {siteConfig.legal.capital}
          </p>
          <p>SIREN {siteConfig.legal.siren} — {siteConfig.legal.rcs}</p>
        </div>
      </div>
    </footer>
  );
}
