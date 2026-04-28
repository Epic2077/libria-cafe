"use client";

import { useState } from "react";
import Header from "@/components/menu/Header";
import MenuGrid from "@/components/menu/MenuGrid";
import { useLanguage } from "@/context/LanguageContext";
import {
  getMenuCategories,
  getMenuItems,
  type MenuCategoryKey,
} from "@/context/menuItems";

export default function MenuPage() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<MenuCategoryKey>("all");

  const items = getMenuItems(language);
  const categories = getMenuCategories(language);

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categories={categories}
          t={t}
        />
        <MenuGrid
          items={items}
          activeCategory={activeCategory}
          popularLabel={t.popular}
        />
      </div>
    </div>
  );
}
