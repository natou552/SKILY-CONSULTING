"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import CtaButton from "./CtaButton";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/5 bg-paper/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Navigation principale"
      >
        <Logo />

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-800 transition-colors hover:text-accent-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <CtaButton href="/contact">Prendre rendez-vous</CtaButton>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/10 lg:hidden"
          aria-expanded={open}
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 bg-navy-900" />
            <span className="h-0.5 w-5 bg-navy-900" />
            <span className="h-0.5 w-5 bg-navy-900" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-navy-900/5 bg-paper px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-navy-800"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <CtaButton href="/contact" className="mt-2 w-full">
              Prendre rendez-vous
            </CtaButton>
          </div>
        </div>
      )}
    </header>
  );
}
