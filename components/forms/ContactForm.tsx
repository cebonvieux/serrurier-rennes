"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/config/site";

const WEBHOOK_URL = "https://lioai.app.n8n.cloud/webhook-test/drm-contact";

interface FormData {
  nom: string;
  telephone: string;
  email: string;
  adresse: string;
  prestation: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    telephone: "",
    email: "",
    adresse: "",
    prestation: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const payload = {
        // Données du formulaire
        nom: formData.nom,
        telephone: formData.telephone,
        email: formData.email,
        adresse: formData.adresse,
        prestation: formData.prestation,
        message: formData.message,
        // Métadonnées du site
        source: `${siteConfig.domain}-contact-form`,
        formulaire: `Demande de devis gratuit ${siteConfig.city}`,
        brand: siteConfig.fullName,
        city: siteConfig.city,
        sitePhone: siteConfig.phone,
        siteEmail: siteConfig.email,
        // Infos techniques
        submittedAt: new Date().toISOString(),
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
        userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
      };

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setStatus("success");
      setFormData({
        nom: "",
        telephone: "",
        email: "",
        adresse: "",
        prestation: "",
        message: "",
      });
    } catch (error) {
      console.error("Erreur:", error);
      setStatus("error");
      setErrorMessage("Une erreur est survenue. Veuillez réessayer ou nous appeler directement.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 rounded-2xl p-6 md:p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Demande envoyée !</h3>
        <p className="text-gray-600 mb-4">
          Nous avons bien reçu votre demande et vous recontacterons dans les plus brefs délais.
        </p>
        <p className="text-sm text-gray-500">
          Pour une urgence, appelez le{" "}
          <a href={siteConfig.phoneLink} className="text-primary-600 font-semibold">
            {siteConfig.phone}
          </a>
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Demande de devis
      </h2>

      {status === "error" && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
              Nom *
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              required
              value={formData.nom}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone *
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              required
              value={formData.telephone}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="06 XX XX XX XX"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="votre@email.com"
            />
          </div>
          <div>
            <label htmlFor="adresse" className="block text-sm font-medium text-gray-700 mb-1">
              Adresse d&apos;intervention
            </label>
            <input
              type="text"
              id="adresse"
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="Votre adresse"
            />
          </div>
        </div>

        <div>
          <label htmlFor="prestation" className="block text-sm font-medium text-gray-700 mb-1">
            Type d&apos;intervention
          </label>
          <select
            id="prestation"
            name="prestation"
            value={formData.prestation}
            onChange={handleChange}
            disabled={status === "loading"}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            <option value="">Sélectionnez...</option>
            <option value="urgence">Urgence / Porte claquée</option>
            <option value="changement">Changement de serrure</option>
            <option value="installation">Installation serrure</option>
            <option value="blindage">Blindage de porte</option>
            <option value="cylindre">Remplacement cylindre</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            disabled={status === "loading"}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Décrivez votre besoin..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === "loading" ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Envoi en cours...
            </>
          ) : (
            "Envoyer ma demande"
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          Pour une urgence, appelez directement le{" "}
          <a href={siteConfig.phoneLink} className="text-primary-600 font-semibold">
            {siteConfig.phone}
          </a>
        </p>
      </form>
    </div>
  );
}

