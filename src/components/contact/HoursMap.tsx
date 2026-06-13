"use client";

import { motion } from "motion/react";
import { Clock, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HoursMap() {
  const { t } = useLanguage();

  const rows = [
    { day: t.monFri, hours: t.monFriHours },
    { day: t.saturday, hours: t.saturdayHours },
    { day: t.sunday, hours: t.sundayHours },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Hours card */}
      <div className="bg-[#3E3129] text-[#FDFBF7] rounded-3xl p-8 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-24 -inset-e-24 w-64 h-64 rounded-full bg-[#E8A38B]/15 blur-3xl"
        />
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#8A9A86]/25 text-[#8A9A86] flex items-center justify-center">
              <Clock size={18} strokeWidth={1.6} />
            </div>
            <h3 className="font-display text-xl font-semibold">{t.hours}</h3>
          </div>
          <ul className="space-y-3">
            {rows.map((row) => (
              <li
                key={row.day}
                className="flex justify-between items-center gap-3 border-b border-[#4A3B32] pb-3 last:border-b-0 last:pb-0"
              >
                <span className="text-[#B5A89E]">{row.day}</span>
                <span className="text-[#FDFBF7] font-medium tabular-nums-fa">
                  {row.hours}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Map (static, no API key needed) */}
      <div className="rounded-3xl overflow-hidden border border-[#EAE2D6]/70 bg-white shadow-[0_30px_80px_-50px_rgba(62,49,41,0.25)]">
        <div className="relative aspect-4/3 bg-[#EAE2D6]/40">
          <iframe
            title="Libria Café location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=51.3886%2C35.6892%2C51.4286%2C35.7092&layer=mapnik"
            className="absolute inset-0 w-full h-full grayscale-[0.2]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="p-5 flex items-start gap-3 border-t border-[#EAE2D6]/70">
          <MapPin
            size={18}
            className="shrink-0 mt-0.5 text-[#E8A38B]"
            strokeWidth={1.6}
          />
          <div>
            <p className="text-[#3E3129] font-medium leading-snug">
              {t.address}
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#7D6B5D] hover:text-[#E8A38B] transition-colors mt-1 inline-block"
            >
              {t.contactDirections} →
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
