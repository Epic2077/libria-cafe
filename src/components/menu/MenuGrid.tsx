"use client";

import { motion, AnimatePresence } from "motion/react";
import { CupSoda } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { MenuCategoryKey, MenuItem } from "@/context/menuItems";
import { useLanguage } from "@/context/LanguageContext";

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

  const { t } = useLanguage();

  if (filteredItems.length === 0) {
    return (
      <div className="text-center py-24">
        <CupSoda
          size={48}
          className="mx-auto text-[#B5A89E] mb-4"
          strokeWidth={1.2}
        />
        <p className="text-[#7D6B5D] text-lg">{t.menuNoResults}</p>
      </div>
    );
  }

  return (
    <motion.div layout className="columns-1 gap-6 md:columns-2 lg:columns-3">
      <AnimatePresence mode="popLayout">
        {filteredItems.map((item) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            key={item.id}
            className="mb-6 break-inside-avoid"
          >
            <Card className="group rounded-2xl border-[#EAE2D6]/60 bg-white py-0 shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_18px_40px_-20px_rgba(62,49,41,0.18)] hover:-translate-y-0.5 hover:border-[#EAE2D6]">
              <CardHeader className="px-7 pt-7 pb-3">
                <CardTitle className="font-display text-xl font-bold text-[#3E3129] leading-snug">
                  {item.name}
                  {item.isPopular && (
                    <span className="ms-2 inline-block rounded-full bg-[#E8A38B]/12 px-2.5 py-0.5 align-middle text-[10px] font-semibold tracking-wider uppercase text-[#E8A38B]">
                      {popularLabel}
                    </span>
                  )}
                  {item.developerSpecial && (
                    <span className="ms-2 inline-block rounded-full bg-[#8A9A86]/15 px-2.5 py-0.5 align-middle text-[10px] font-semibold tracking-wider uppercase text-[#8A9A86]">
                      {t.developerSpecial}
                    </span>
                  )}
                </CardTitle>
                {item.price && (
                  <CardAction className="font-display text-[#3E3129] font-semibold text-lg tabular-nums-fa">
                    {item.price}
                  </CardAction>
                )}
              </CardHeader>
              <CardContent className="px-7 pb-7">
                <p className="text-sm leading-relaxed text-[#7D6B5D]">
                  {item.description}
                </p>
              </CardContent>
              {item.options && (
                <CardFooter className="px-7 pt-3 pb-5 flex-wrap bg-[#FDFBF7]/60! border-t-[#EAE2D6]/60!">
                  {item.options.map((option, i) => (
                    <span
                      key={i}
                      className="inline-block rounded-full bg-white px-3 py-1 text-[11px] tracking-wider uppercase text-[#7D6B5D] me-2 mb-2 border border-[#EAE2D6]/70"
                    >
                      {option}
                    </span>
                  ))}
                </CardFooter>
              )}
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default MenuGrid;
