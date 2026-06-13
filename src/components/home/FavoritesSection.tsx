"use client";

import { motion } from "motion/react";
import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Translations } from "@/context/LanguageContext";
import type { FavoriteItem } from "@/context/home";

interface FavoritesSectionProps {
  t: Translations;
  favorites: FavoriteItem[];
}

export default function FavoritesSection({
  t,
  favorites,
}: FavoritesSectionProps) {
  return (
    <section className="relative py-24 md:py-32 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-16 gap-6">
          <div className="md:max-w-2xl">
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#8A9A86] font-semibold mb-4">
              — {t.menu}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#3E3129] mb-4 leading-tight">
              {t.favoritesTitle}
            </h2>
            <p className="text-[#7D6B5D] text-lg max-w-xl">{t.favoritesDesc}</p>
          </div>
          <Link
            href="/menu"
            className="hidden md:inline-flex items-center text-[#3E3129] font-medium hover:text-[#E8A38B] transition-colors group whitespace-nowrap"
          >
            <span className="border-b border-[#3E3129] group-hover:border-[#E8A38B] pb-0.5 transition-colors">
              {t.exploreFullMenu}
            </span>
            <ArrowRight
              className="ms-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform"
              size={18}
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {favorites.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="group bg-white rounded-3xl overflow-hidden border border-[#EAE2D6]/60 shadow-[0_10px_40px_-20px_rgba(62,49,41,0.1)] hover:shadow-[0_30px_60px_-30px_rgba(62,49,41,0.25)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden bg-[#EAE2D6]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#3E3129]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 inset-s-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.15em] text-[#3E3129] uppercase shadow-sm">
                  {item.tag}
                </div>
              </div>
              <div className="p-6 md:p-7">
                <div className="flex justify-between items-start gap-3 mb-3">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-[#3E3129] leading-tight">
                    {item.name}
                  </h3>
                  <span className="text-[#E8A38B] font-semibold whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5 text-[#E8A38B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-xs text-[#B5A89E] tracking-wider uppercase">
                    Loved
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center md:hidden">
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
