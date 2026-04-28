"use client";

import { motion } from "motion/react";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { MenuCategoryKey, MenuItem } from "@/context/menuItems";

interface MenuGridProps {
  items: MenuItem[];
  activeCategory: MenuCategoryKey;
  popularLabel: string;
}

const MenuGrid = ({ items, activeCategory, popularLabel }: MenuGridProps) => {
  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Menu Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredItems.map((item) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            key={item.id}
            className="h-full"
          >
            <Card className="h-full rounded-2xl border-[#EAE2D6]/50 bg-white py-0 shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
              <CardHeader className="px-8 pt-8 pb-4">
                <CardTitle className="font-['Playfair_Display',serif] text-xl font-bold text-[#3E3129] leading-snug">
                  {item.name}
                  {item.isPopular && (
                    <span className="ms-3 inline-block rounded-full bg-[#E8A38B]/10 px-2 py-0.5 align-middle font-sans text-xs text-[#E8A38B]">
                      {popularLabel}
                    </span>
                  )}
                </CardTitle>
                <CardAction className="text-[#8A9A86] font-semibold font-sans">
                  {item.price}
                </CardAction>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-sm leading-relaxed text-[#7D6B5D]">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default MenuGrid;
