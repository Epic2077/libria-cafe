"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Translations } from "@/context/LanguageContext";

interface StorySectionProps {
  t: Translations;
}

export default function StorySection({ t }: StorySectionProps) {
  return (
    <section className="relative py-24 md:py-32 bg-[#EAE2D6]/40 overflow-hidden">
      {/* Decorative serif numeral */}
      <div
        aria-hidden
        className="absolute top-12 inset-e-8 md:inset-e-16 font-display text-[12rem] md:text-[18rem] leading-none text-[#E8A38B]/8 select-none pointer-events-none"
      >
        02
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-4/5 rounded-3xl overflow-hidden relative z-10 shadow-[0_30px_80px_-30px_rgba(62,49,41,0.3)]">
              <Image
                src="https://images.unsplash.com/photo-1771159978458-3df74f41a918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwcG91cmluZyUyMGNvZmZlZXxlbnwxfHx8fDE3NzczMDI1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Barista pouring coffee"
                fill
                className="w-full h-full object-cover"
              />
            </div>
            {/* Outline frame */}
            <div className="absolute -top-6 -inset-s-6 w-full h-full border-2 border-[#8A9A86] rounded-3xl z-0" />

            {/* Floating accent badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute -bottom-6 inset-e-6 z-20 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_40px_-15px_rgba(62,49,41,0.25)] border border-[#EAE2D6]"
            >
              <p className="font-display text-3xl font-bold text-[#3E3129]">
                100%
              </p>
              <p className="text-xs text-[#7D6B5D] tracking-wider uppercase">
                Direct trade
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#8A9A86] font-semibold mb-4">
              — {t.about}
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#3E3129] mb-7 leading-[1.1]">
              {t.storyHeadline1}
              <br />
              <span className="italic font-medium text-[#8A9A86]">
                {t.storyHeadline2}
              </span>
            </h2>
            <p className="text-[#7D6B5D] text-lg mb-5 leading-relaxed">
              {t.storyPara1}
            </p>
            <p className="text-[#7D6B5D] text-lg mb-10 leading-relaxed">
              {t.storyPara2}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-[#3E3129] font-medium hover:text-[#E8A38B] transition-colors group"
            >
              <span className="border-b border-[#3E3129] group-hover:border-[#E8A38B] pb-0.5 transition-colors">
                {t.readFullStory}
              </span>
              <ArrowRight
                className="ms-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform"
                size={20}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
