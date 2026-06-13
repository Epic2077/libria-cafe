"use client";

import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import type { Translations } from "@/context/LanguageContext";

interface TestimonialSectionProps {
  t: Translations;
}

export default function TestimonialSection({ t }: TestimonialSectionProps) {
  return (
    <section className="relative py-24 md:py-32 bg-[#8A9A86] text-white overflow-hidden">
      {/* Decorative pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#E8A38B]/15 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <Quote
          size={56}
          className="mx-auto mb-8 opacity-30"
          strokeWidth={1.2}
        />

        <div className="flex justify-center gap-1 text-[#E8A38B] mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} fill="currentColor" />
          ))}
        </div>

        <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-medium mb-12 leading-snug italic">
          {t.testimonialQuote}
        </h2>

        <div className="flex items-center justify-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center font-display text-lg font-semibold">
            {t.testimonialAuthor.slice(0, 2).toUpperCase()}
          </div>
          <div className="text-start">
            <p className="font-semibold">{t.testimonialAuthor}</p>
            <p className="text-white/70 text-sm">{t.testimonialRole}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
