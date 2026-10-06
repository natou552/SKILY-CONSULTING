"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants: Record<string, string> = {
  primary:
    "bg-accent-500 text-navy-950 hover:bg-accent-400 shadow-lg shadow-accent-500/20",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800",
  ghost:
    "bg-white text-navy-900 border border-navy-900/15 hover:border-navy-900/30",
};

export default function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CtaButtonProps) {
  const isValidHref = href.startsWith("http") || href.startsWith("/");
  const isExternal = href.startsWith("http");
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${variants[variant]} ${className}`;

  if (!isValidHref) {
    return (
      <a
        href="#"
        aria-disabled="true"
        title="Lien à configurer [À COMPLÉTER]"
        className={`${classes} cursor-not-allowed opacity-60`}
        onClick={(e) => e.preventDefault()}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={classes}
    >
      {children}
    </Link>
  );
}
