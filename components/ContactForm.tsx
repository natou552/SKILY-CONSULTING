"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

const needTypes = [
  "Conciergerie et billetterie",
  "Tenue comptable et bilan",
  "Déclaration de revenus",
  "Optimisation fiscale",
  "Accompagnement restaurateur",
  "Social et paie",
  "Autre demande",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const endpoint = siteConfig.form.formspreeEndpoint;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!endpoint) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-3xl border border-accent-500/30 bg-accent-500/10 p-8 text-center"
      >
        <p className="text-lg font-semibold text-navy-900">
          Merci, votre message a bien été envoyé !
        </p>
        <p className="mt-2 text-sm text-navy-700">
          Nous revenons vers vous dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {!endpoint && (
        <p className="rounded-xl bg-amber-100 px-4 py-3 text-xs font-medium text-amber-800">
          Le formulaire n&apos;est pas encore connecté à un service d&apos;envoi
          (Formspree). Renseignez NEXT_PUBLIC_FORMSPREE_ENDPOINT. [À COMPLÉTER]
        </p>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-navy-900">
            Nom complet
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-navy-900">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-2 w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
          />
        </div>

        <div>
          <label htmlFor="needType" className="text-sm font-medium text-navy-900">
            Type de besoin
          </label>
          <select
            id="needType"
            name="needType"
            required
            defaultValue=""
            className="mt-2 w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
          >
            <option value="" disabled>
              Sélectionnez une option
            </option>
            {needTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-navy-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-red-600">
          Une erreur est survenue lors de l&apos;envoi. Merci de réessayer ou de
          nous contacter directement par téléphone.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800 disabled:opacity-60 md:w-auto"
      >
        {status === "submitting" ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>
    </form>
  );
}
