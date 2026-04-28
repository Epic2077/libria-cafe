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
}

const Header = ({
  activeCategory,
  setActiveCategory,
  categories,
  t,
}: HeaderProps) => {

  return (
    <>
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-['Playfair_Display',serif] text-5xl md:text-6xl font-bold text-[#3E3129] mb-6"
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
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={clsx(
              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeCategory === category.key
                ? "bg-[#3E3129] text-[#FDFBF7] shadow-md"
                : "bg-white text-[#7D6B5D] border border-[#EAE2D6] hover:border-[#8A9A86] hover:text-[#3E3129]",
            )}
          >
            {category.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default Header;
