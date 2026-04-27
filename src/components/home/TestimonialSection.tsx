"use client";

import { Coffee } from "lucide-react";
import type { Translations } from "@/context/LanguageContext";

interface TestimonialSectionProps {
  t: Translations;
}

export default function TestimonialSection({ t }: TestimonialSectionProps) {
  return (
    <section className="py-24 bg-[#8A9A86] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Coffee size={40} className="mx-auto mb-8 opacity-50" strokeWidth={1} />
        <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-medium mb-12">
          {t.testimonialQuote}
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#EAE2D6]/20 flex items-center justify-center font-serif text-xl">
            {t.testimonialAuthor.slice(0, 2).toUpperCase()}
          </div>
          <div className="text-start">
            <p className="font-medium">{t.testimonialAuthor}</p>
            <p className="text-white/70 text-sm">{t.testimonialRole}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
