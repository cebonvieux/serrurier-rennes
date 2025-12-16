"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
}

export function FAQ({
  title = "Questions Fréquentes",
  subtitle,
  items,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const defaultSubtitle = `Retrouvez les réponses aux questions les plus fréquentes sur nos services de serrurerie à ${siteConfig.city}.`;

  return (
    <section className="section relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/serrurier-rennes-bretagne-pas-cher.webp"
          alt="FAQ serrurier Rennes"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/100" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Header & CTA */}
          <div className="lg:sticky lg:top-24">
            <span className="badge-primary mb-4">❓ FAQ</span>
            <h2 className="section-title">{title}</h2>
            <p className="section-subtitle mb-8">
              {subtitle || defaultSubtitle}
            </p>

            <div className="bg-primary-50/80 backdrop-blur-sm rounded-2xl p-6 border border-primary-100">
              <h3 className="font-bold text-gray-900 mb-2">
                Vous avez une autre question ?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Notre équipe est disponible 24h/24 pour répondre à toutes vos questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={siteConfig.phoneLink} className="btn-primary text-center">
                  📞 {siteConfig.phone}
                </a>
                <a href="/contact" className="btn-secondary text-center">
                  Nous contacter
                </a>
              </div>
            </div>
          </div>

          {/* Right - FAQ Items */}
          <div className="space-y-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl overflow-hidden hover:border-primary-300 hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {item.question}
                  </span>
                  <span 
                    className={`
                      w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center
                      text-primary-600 flex-shrink-0 transition-transform duration-200
                      ${openIndex === index ? 'rotate-45' : ''}
                    `}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5">
                    <div className="prose prose-sm max-w-none text-gray-600">
                      <p dangerouslySetInnerHTML={{ __html: item.answer }} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

