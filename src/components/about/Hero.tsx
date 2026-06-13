"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[68vh] min-h-112 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1649777888193-e47833d91521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzczMDI1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Coffee beans"
          fill
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#3E3129]/85 via-[#3E3129]/55 to-[#3E3129]/80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#8A9A86]/85 backdrop-blur-sm text-xs font-semibold tracking-[0.2em] uppercase text-white mb-7"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          {t.about}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-display text-5xl md:text-7xl font-bold text-[#FDFBF7] mb-5 leading-[1.05] tracking-tight"
        >
          {t.aboutHeroTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-[#EAE2D6] text-lg md:text-xl max-w-xl mx-auto font-light italic"
        >
          {t.aboutHeroSubtitle}
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mx-auto mt-10 w-24 h-px bg-[#E8A38B]"
        />
      </div>
    </section>
  );
}
