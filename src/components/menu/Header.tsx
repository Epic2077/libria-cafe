"use client";

import clsx from "clsx";
import { motion } from "motion/react";

import type { Translations } from "@/context/LanguageContext";
import type { MenuCategory, MenuCategoryKey } from "@/context/menuItems";

interface HeaderProps {
  activeCategory: MenuCategoryKey;
  setActiveCategory: (category: MenuCategoryKey) => void;
  categories: MenuCategory[];
  t: Translations;
  itemsCount: number;
}

const Header = ({
  activeCategory,
  setActiveCategory,
  categories,
  t,
  itemsCount,
}: HeaderProps) => {
  return (
    <>
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block text-xs tracking-[0.3em] uppercase text-[#8A9A86] font-semibold mb-4"
        >
          — {t.menu}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="font-display text-5xl md:text-7xl font-bold text-[#3E3129] mb-6 leading-tight tracking-tight"
        >
          {t.menuPageTitle}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[#7D6B5D] text-lg max-w-2xl mx-auto"
        >
          {t.menuPageSubtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-8 w-16 h-px bg-[#E8A38B]"
        />
      </div>

      {/* Category Filter — sticky pill rail */}
      <div className="sticky top-16 z-30 -mx-4 sm:mx-0 mb-12 backdrop-blur-md bg-[#FDFBF7]/85 border-y sm:border border-[#EAE2D6] sm:rounded-2xl px-4 sm:px-3 py-3">
        <div className="flex items-center gap-3 overflow-x-auto sm:flex-wrap sm:justify-center scrollbar-hide -mx-1 px-1">
          {categories.map((category) => {
            const isActive = activeCategory === category.key;
            return (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={clsx(
                  "shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap",
                  isActive
                    ? "bg-[#3E3129] text-[#FDFBF7] shadow-[0_8px_20px_-8px_rgba(62,49,41,0.4)]"
                    : "bg-white/70 text-[#7D6B5D] border border-[#EAE2D6] hover:border-[#8A9A86] hover:text-[#3E3129]"
                )}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <p className="text-xs text-[#7D6B5D] tracking-widest uppercase">
          <span className="text-[#3E3129] font-semibold tabular-nums-fa">
            {itemsCount}
          </span>{" "}
          {t.menuItemsCount}
        </p>
      </div>
    </>
  );
};

export default Header;
