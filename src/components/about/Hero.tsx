"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[60vh] min-h-100 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1649777888193-e47833d91521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzczMDI1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Coffee beans"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#3E3129]/60" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block py-1 px-3 rounded-full bg-[#8A9A86]/80 backdrop-blur-sm text-sm font-medium tracking-wider text-white mb-6"
        >
          {t.about}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-['Playfair_Display',serif] text-5xl md:text-6xl font-bold text-[#FDFBF7] mb-4"
        >
          {t.aboutHeroTitle}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#EAE2D6] text-lg max-w-xl mx-auto"
        >
          {t.aboutHeroSubtitle}
        </motion.p>
      </div>
    </section>
  );
}
