"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "motion/react";

export default function ContactHeader() {
  const { t } = useLanguage();
  return (
    <div className="text-center mb-16 md:mb-20 relative">
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-xl h-144 rounded-full bg-[#E8A38B]/10 blur-3xl pointer-events-none"
      />
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative inline-block text-xs tracking-[0.3em] uppercase text-[#8A9A86] font-semibold mb-4"
      >
        — {t.contact}
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="relative font-display text-5xl md:text-7xl font-bold text-[#3E3129] mb-5 leading-[1.05] tracking-tight"
      >
        {t.contactPageTitle}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12 }}
        className="relative text-[#7D6B5D] text-lg max-w-2xl mx-auto"
      >
        {t.contactPageDescription}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative mx-auto mt-8 w-16 h-px bg-[#E8A38B]"
      />
    </div>
  );
}
