"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { useRef } from "react";
import type { Translations } from "@/context/LanguageContext";

interface HeroSectionProps {
  t: Translations;
}

export default function HeroSection({ t }: HeroSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[92vh] min-h-150 flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1758181560239-1e5ec8882781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5saXQlMjBjb3p5JTIwY2FmZSUyMGludGVyaW9yJTIwcGxhbnRzfGVufDF8fHx8MTc3NzMwMjU0OHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Cozy cafe interior"
          fill
          preload
          className="w-full h-full object-cover object-center scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#3E3129]/85 via-[#3E3129]/55 to-[#3E3129]/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-linear-to-t from-[#3E3129]/60 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#8A9A86]/90 backdrop-blur-sm text-xs font-semibold tracking-[0.2em] mb-7 uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FDFBF7] animate-pulse" />
            {t.heroTag}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-7 tracking-tight"
          >
            {t.heroHeadline1}
            <br />
            <span className="italic font-medium text-[#E8A38B]">
              {t.heroHeadline2}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-[#EAE2D6] mb-10 font-light leading-relaxed max-w-lg"
          >
            {t.heroDesc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/menu"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E8A38B] text-white rounded-full font-medium transition-all hover:bg-[#D48970] hover:shadow-[0_20px_40px_-15px_rgba(232,163,139,0.7)] hover:-translate-y-1"
            >
              {t.viewMenu}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180"
              />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-medium transition-all hover:bg-white/20"
            >
              {t.ourStory}
            </Link>
          </motion.div>

          {/* Rating row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-12 flex items-center gap-4 text-[#EAE2D6]"
          >
            <div className="flex gap-0.5 text-[#E8A38B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <div className="h-6 w-px bg-white/20" />
            <p className="text-sm text-[#EAE2D6]/85">
              4.9 · 320+ Google reviews
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/70"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">
          {t.scrollCue}
        </span>
        <div className="w-px h-10 bg-linear-to-b from-white/60 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
