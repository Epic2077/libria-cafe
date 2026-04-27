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
    <section className="py-24 bg-[#EAE2D6]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-4/5 rounded-2xl overflow-hidden relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1771159978458-3df74f41a918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwcG91cmluZyUyMGNvZmZlZXxlbnwxfHx8fDE3NzczMDI1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Barista pouring coffee"
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#8A9A86] rounded-2xl z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-bold text-[#3E3129] mb-6">
              {t.storyHeadline1}
              <br />
              {t.storyHeadline2}
            </h2>
            <p className="text-[#7D6B5D] text-lg mb-6 leading-relaxed">
              {t.storyPara1}
            </p>
            <p className="text-[#7D6B5D] text-lg mb-10 leading-relaxed">
              {t.storyPara2}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-[#E8A38B] font-medium hover:text-[#D48970] transition-colors group"
            >
              {t.readFullStory}
              <ArrowRight
                className="ms-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
