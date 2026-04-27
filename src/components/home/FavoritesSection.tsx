"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Translations } from "@/context/LanguageContext";
import type { FavoriteItem } from "@/context/home";

interface FavoritesSectionProps {
  t: Translations;
  favorites: FavoriteItem[];
}

export default function FavoritesSection({ t, favorites }: FavoritesSectionProps) {
  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display',serif] text-4xl font-bold text-[#3E3129] mb-4">
            {t.favoritesTitle}
          </h2>
          <p className="text-[#7D6B5D] text-lg max-w-2xl mx-auto">
            {t.favoritesDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {favorites.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-[#EAE2D6]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 start-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#3E3129] uppercase">
                  {item.tag}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#3E3129]">
                    {item.name}
                  </h3>
                  <span className="text-[#E8A38B] font-medium">{item.price}</span>
                </div>
                <div className="flex gap-1 text-[#E8A38B] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#3E3129] text-[#3E3129] rounded-full font-medium transition-all hover:bg-[#3E3129] hover:text-white"
          >
            {t.exploreFullMenu}
          </Link>
        </div>
      </div>
    </section>
  );
}
