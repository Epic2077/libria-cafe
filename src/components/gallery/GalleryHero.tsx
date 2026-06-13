"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryHero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 bg-[#FDFBF7] overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-[#E8A38B]/10 blur-3xl"
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block text-xs tracking-[0.3em] uppercase text-[#8A9A86] font-semibold mb-4"
        >
          — {t.galleryHeroTag}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="font-display text-5xl md:text-7xl font-bold text-[#3E3129] mb-5 leading-[1.05] tracking-tight"
        >
          {t.galleryTitle}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="text-[#7D6B5D] text-lg max-w-2xl mx-auto"
        >
          {t.galleryDesc}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-8 w-16 h-px bg-[#E8A38B]"
        />
      </div>
    </section>
  );
}
