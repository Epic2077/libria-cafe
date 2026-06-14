"use client";

import Link from "next/link";
import { Coffee, LogOut, Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0";

import { useLanguage } from "@/context/LanguageContext";
import { navLinks } from "@/context/navLinks";
import type { Translations } from "@/context/LanguageContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, t, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const { user } = useUser();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLabelStyle =
    language === "en" ? "text-sm tracking-widest uppercase" : "text-sm";

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FDFBF7]/95 backdrop-blur-xl border-b border-[#EAE2D6] shadow-[0_1px_20px_rgba(62,49,41,0.04)]"
          : "bg-[#FDFBF7]/70 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="bg-[#8A9A86] text-white p-2 rounded-full transition-all duration-300 group-hover:scale-105 group-hover:bg-[#7A8B76] shadow-sm">
                <Coffee size={22} strokeWidth={1.5} />
              </div>
              <span className="absolute -inset-0.5 rounded-full bg-[#8A9A86]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-display text-2xl font-semibold tracking-tight text-[#3E3129]">
              Libria
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.key}
                  href={link.path}
                  className={`relative ${navLabelStyle} px-4 py-2 transition-colors ${
                    active
                      ? "text-[#3E3129]"
                      : "text-[#7D6B5D] hover:text-[#3E3129]"
                  }`}
                >
                  {t[link.key as keyof Translations]}
                  {active && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[#E8A38B]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href="/menu"
              className="ms-3 bg-[#3E3129] text-[#FDFBF7] px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:bg-[#E8A38B] hover:shadow-[0_8px_24px_-8px_rgba(232,163,139,0.6)] hover:-translate-y-0.5"
            >
              {t.orderNow}
            </Link>
            <button
              onClick={toggleLanguage}
              className="ms-2 text-xs font-semibold px-3 py-2 rounded-full border border-[#EAE2D6] text-[#7D6B5D] hover:bg-[#EAE2D6]/50 hover:text-[#3E3129] transition-colors min-w-10"
              aria-label={
                language === "fa" ? "Switch to English" : "تغییر به فارسی"
              }
            >
              {language === "fa" ? "EN" : "فا"}
            </button>

            {/* Admin session indicator + sign out (logout route lives outside the router → plain <a>) */}
            {user && (
              <div className="ms-2 flex items-center gap-2 ps-2 border-s border-[#EAE2D6]">
                <Link
                  href="/dashboard/menu"
                  className="text-sm font-medium text-[#7D6B5D] hover:text-[#3E3129] transition-colors"
                >
                  Dashboard
                </Link>
                <span
                  className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-[#8A9A86] text-white text-xs font-semibold uppercase"
                  title={user.email ?? user.name ?? "Admin"}
                >
                  {(user.email ?? user.name ?? "A").charAt(0)}
                </span>
                <a
                  href="/auth/logout"
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full border border-[#EAE2D6] text-[#7D6B5D] hover:bg-[#E8A38B]/15 hover:text-[#C56C50] transition-colors"
                >
                  <LogOut size={14} strokeWidth={2} />
                  Sign out
                </a>
              </div>
            )}
          </div>

          {/* Mobile: lang switcher + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border border-[#EAE2D6] text-[#7D6B5D] hover:bg-[#EAE2D6]/50 transition-colors min-w-10"
              aria-label={
                language === "fa" ? "Switch to English" : "تغییر به فارسی"
              }
            >
              {language === "fa" ? "EN" : "فا"}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#3E3129] hover:text-[#E8A38B] transition-colors p-1.5"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
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
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#FDFBF7] border-b border-[#EAE2D6] overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.key}
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      active
                        ? "bg-[#EAE2D6]/60 text-[#3E3129]"
                        : "text-[#7D6B5D] hover:bg-[#EAE2D6]/30"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full me-3 transition-colors ${
                        active ? "bg-[#E8A38B]" : "bg-transparent"
                      }`}
                    />
                    {t[link.key as keyof Translations]}
                  </Link>
                );
              })}
              <div className="pt-3">
                <Link
                  href="/menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-[#3E3129] text-[#FDFBF7] px-6 py-3.5 rounded-xl text-base font-medium hover:bg-[#E8A38B] transition-colors"
                >
                  {t.orderNow}
                </Link>
              </div>

              {/* Admin session row */}
              {user && (
                <div className="mt-3 pt-3 border-t border-[#EAE2D6]">
                  <Link
                    href="/dashboard/menu"
                    className="block text-sm font-medium text-center my-2 border-2 border-[#EAE2D6] rounded-xl bg-accent text-[#7D6B5D] hover:text-[#3E3129] transition-colors"
                  >
                    Dashboard
                  </Link>
                  <p className="px-4 pb-2 text-xs text-[#7D6B5D]">
                    Signed in as{" "}
                    <span className="font-semibold text-[#3E3129]">
                      {user.email ?? user.name}
                    </span>
                  </p>
                  <a
                    href="/auth/logout"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl text-base font-medium border border-[#EAE2D6] text-[#C56C50] hover:bg-[#E8A38B]/15 transition-colors"
                  >
                    <LogOut size={18} strokeWidth={2} />
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
