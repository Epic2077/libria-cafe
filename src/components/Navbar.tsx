"use client";

import Link from "next/link";
import { Coffee, Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { navLinks } from "@/context/navLinks";
import type { Translations } from "@/context/LanguageContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, t, toggleLanguage } = useLanguage();

  const navLabelStyle =
    language === "en" ? "text-sm tracking-widest uppercase" : "text-sm";

  return (
    <nav className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#EAE2D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-[#8A9A86] text-white p-2 rounded-full transition-transform group-hover:scale-105">
              <Coffee size={24} strokeWidth={1.5} />
            </div>
            <span className="font-['Playfair_Display',serif] text-2xl font-semibold tracking-wide">
              Libria
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.path}
                className={`${navLabelStyle} transition-colors hover:text-[#E8A38B] text-[#7D6B5D]`}
              >
                {t[link.key as keyof Translations]}
              </Link>
            ))}
            <Link
              href="/menu"
              className="bg-[#4A3B32] text-[#FDFBF7] px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:bg-[#E8A38B] hover:shadow-lg hover:-translate-y-0.5"
            >
              {t.orderNow}
            </Link>
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="text-sm font-semibold px-3 py-1.5 rounded-full border border-[#EAE2D6] text-[#7D6B5D] hover:bg-[#EAE2D6]/50 transition-colors min-w-10"
              aria-label={
                language === "fa" ? "Switch to English" : "تغییر به فارسی"
              }
            >
              {language === "fa" ? "EN" : "فا"}
            </button>
          </div>

          {/* Mobile: lang switcher + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="text-sm font-semibold px-3 py-1.5 rounded-full border border-[#EAE2D6] text-[#7D6B5D] hover:bg-[#EAE2D6]/50 transition-colors min-w-10"
              aria-label={
                language === "fa" ? "Switch to English" : "تغییر به فارسی"
              }
            >
              {language === "fa" ? "EN" : "فا"}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#4A3B32] hover:text-[#E8A38B] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FDFBF7] border-b border-[#EAE2D6] overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 rounded-xl text-base font-medium transition-colors text-[#7D6B5D] hover:bg-[#EAE2D6]/30"
                >
                  {t[link.key as keyof Translations]}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-[#4A3B32] text-[#FDFBF7] px-6 py-3 rounded-xl text-base font-medium hover:bg-[#E8A38B] transition-colors"
                >
                  {t.orderNow}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
