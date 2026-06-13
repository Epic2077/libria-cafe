"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import {
  galleryImages,
  getGalleryFilters,
  type GalleryCategory,
} from "@/context/galleryItems";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryGrid() {
  const { t } = useLanguage();
  const [active, setActive] = useState<GalleryCategory>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filters = getGalleryFilters(t);
  const filtered =
    active === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === active);

  return (
    <section className="bg-[#FDFBF7] pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => {
            const isActive = active === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={clsx(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  isActive
                    ? "bg-[#3E3129] text-[#FDFBF7] shadow-[0_8px_20px_-8px_rgba(62,49,41,0.4)]"
                    : "bg-white text-[#7D6B5D] border border-[#EAE2D6] hover:border-[#8A9A86] hover:text-[#3E3129]",
                )}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Masonry */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.button
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
                onClick={() => setLightbox(img.id)}
                className={clsx(
                  "relative group overflow-hidden rounded-2xl bg-[#EAE2D6] cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#E8A38B] focus:ring-offset-2 focus:ring-offset-[#FDFBF7]",
                  img.span === "tall" && "row-span-2",
                  img.span === "wide" && "col-span-2",
                )}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#3E3129]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 inset-x-0 p-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 text-start">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#3E3129]/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute top-6 end-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X size={22} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-4/3 rounded-3xl overflow-hidden shadow-2xl"
            >
              {(() => {
                const img = galleryImages.find((g) => g.id === lightbox);
                if (!img) return null;
                return (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
