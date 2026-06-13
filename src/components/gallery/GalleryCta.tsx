"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryCta() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#EAE2D6]/40 py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-[#3E3129] mb-4 leading-tight">
          {t.galleryCtaTitle}
        </h2>
        <p className="text-[#7D6B5D] text-lg mb-8 max-w-xl mx-auto">
          {t.galleryCtaDesc}
        </p>
        <Link
          href="/menu"
          className="group inline-flex items-center gap-2 px-8 py-4 bg-[#3E3129] text-[#FDFBF7] rounded-full font-medium transition-all hover:bg-[#E8A38B] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-15px_rgba(232,163,139,0.5)]"
        >
          {t.galleryCtaButton}
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180"
          />
        </Link>
      </motion.div>
    </section>
  );
}
