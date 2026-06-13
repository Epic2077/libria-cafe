"use client";

import { motion } from "motion/react";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function InfoCards() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: MapPin,
      title: t.contactVisitUs,
      lines: [t.address],
      href: "https://maps.google.com",
      cta: t.contactDirections,
      accent: "#E8A38B",
    },
    {
      icon: Phone,
      title: t.contactCallUs,
      lines: [t.phone, `${t.monFri} · ${t.monFriHours}`],
      href: `tel:${t.phone}`,
      cta: t.phone,
      accent: "#8A9A86",
    },
    {
      icon: Mail,
      title: t.contactWriteUs,
      lines: [t.email, t.contactFormDesc],
      href: `mailto:${t.email}`,
      cta: t.email,
      accent: "#B5A89E",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {cards.map((card, i) => (
        <motion.a
          key={card.title}
          href={card.href}
          target={card.href.startsWith("http") ? "_blank" : undefined}
          rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          className="group relative bg-white rounded-3xl p-8 border border-[#EAE2D6]/70 hover:border-[#EAE2D6] hover:shadow-[0_24px_60px_-30px_rgba(62,49,41,0.18)] hover:-translate-y-1 transition-all duration-500 overflow-hidden block"
        >
          <div
            aria-hidden
            className="absolute -top-12 -end-12 w-40 h-40 rounded-full opacity-10 group-hover:opacity-20 blur-2xl transition-opacity duration-500"
            style={{ backgroundColor: card.accent }}
          />

          <div className="relative">
            <div
              className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-5 transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundColor: `${card.accent}1F`, color: card.accent }}
            >
              <card.icon size={22} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-xl font-semibold text-[#3E3129] mb-3">
              {card.title}
            </h3>
            <ul className="space-y-1 mb-5">
              {card.lines.map((line, idx) => (
                <li key={idx} className="text-[#7D6B5D] leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
            <div className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3E3129] group-hover:text-[#E8A38B] transition-colors">
              {card.cta}
              <ExternalLink
                size={14}
                className="opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
