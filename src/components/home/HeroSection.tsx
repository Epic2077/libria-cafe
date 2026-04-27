"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import type { Translations } from "@/context/LanguageContext";

interface HeroSectionProps {
  t: Translations;
}

export default function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="relative h-[90vh] min-h-150 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1758181560239-1e5ec8882781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5saXQlMjBjb3p5JTIwY2FmZSUyMGludGVyaW9yJTIwcGxhbnRzfGVufDF8fHx8MTc3NzMwMjU0OHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Cozy cafe interior"
          fill
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#3E3129]/80 to-[#3E3129]/40 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-white"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#8A9A86]/90 backdrop-blur-sm text-sm font-medium tracking-wider mb-6">
            {t.heroTag}
          </span>
          <h1 className="font-['Playfair_Display',serif] text-5xl md:text-7xl font-bold leading-tight mb-6">
            {t.heroHeadline1}
            <br />
            {t.heroHeadline2}
          </h1>
          <p className="text-lg md:text-xl text-[#EAE2D6] mb-10 font-light leading-relaxed max-w-lg">
            {t.heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#E8A38B] text-white rounded-full font-medium transition-all hover:bg-[#D48970] hover:shadow-xl hover:-translate-y-1"
            >
              {t.viewMenu}
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-medium transition-all hover:bg-white/20"
            >
              {t.ourStory}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
