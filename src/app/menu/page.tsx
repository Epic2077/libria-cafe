"use client";

import { useState, useMemo } from "react";
import Header from "@/components/menu/Header";
import MenuGrid from "@/components/menu/MenuGrid";
import { useLanguage } from "@/context/LanguageContext";
import { type MenuCategoryKey } from "@/context/menuItems";
import { useMenuDataView } from "../../lib/menuDataStore";

export default function MenuPage() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<MenuCategoryKey>("all");

  const { items, categories } = useMenuDataView(language);

  const filteredCount = useMemo(
    () =>
      activeCategory === "all"
        ? items.length
        : items.filter((i) => i.category === activeCategory).length,
    [items, activeCategory],
  );

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categories={categories}
          t={t}
          itemsCount={filteredCount}
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
