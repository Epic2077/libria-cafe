"use client";

import Link from "next/link";
import { Coffee, MapPin, Clock, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { navLinks } from "@/context/navLinks";
import type { Translations } from "@/context/LanguageContext";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#3E3129] text-[#EAE2D6] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="bg-[#8A9A86] text-white p-2 rounded-full">
                <Coffee size={24} strokeWidth={1.5} />
              </div>
              <span className="font-['Playfair_Display',serif] text-2xl font-semibold tracking-wide text-[#FDFBF7]">
                Libria
              </span>
            </Link>
            <p className="text-[#B5A89E] mb-6 leading-relaxed">{t.tagline}</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#4A3B32] flex items-center justify-center hover:bg-[#E8A38B] hover:text-white transition-colors"
              >
                <BsInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Explore links */}
          <div>
            <h3 className="font-['Playfair_Display',serif] text-lg text-[#FDFBF7] mb-6">
              {t.explore}
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.path}
                    className="text-[#B5A89E] hover:text-[#E8A38B] transition-colors"
                  >
                    {t[link.key as keyof Translations]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-['Playfair_Display',serif] text-lg text-[#FDFBF7] mb-6">
              {t.contactTitle}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#B5A89E]">
                <MapPin size={20} className="shrink-0 mt-0.5 text-[#8A9A86]" />
                <span>{t.address}</span>
              </li>
              <li className="flex items-center gap-3 text-[#B5A89E]">
                <Phone size={20} className="shrink-0 text-[#8A9A86]" />
                <span>{t.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-[#B5A89E]">
                <Clock size={20} className="shrink-0 text-[#8A9A86]" />
                <span>{t.email}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-['Playfair_Display',serif] text-lg text-[#FDFBF7] mb-6">
              {t.hours}
            </h3>
            <ul className="space-y-4 text-[#B5A89E]">
              <li className="flex justify-between border-b border-[#4A3B32] pb-2">
                <span>{t.monFri}</span>
                <span>{t.monFriHours}</span>
              </li>
              <li className="flex justify-between border-b border-[#4A3B32] pb-2">
                <span>{t.saturday}</span>
                <span>{t.saturdayHours}</span>
              </li>
              <li className="flex justify-between border-b border-[#4A3B32] pb-2">
                <span>{t.sunday}</span>
                <span>{t.sundayHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#4A3B32] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#B5A89E]">
          <p>
            &copy; {new Date().getFullYear()} Libria Café. {t.allRightsReserved}
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#FDFBF7] transition-colors">
              {t.privacyPolicy}
            </a>
            <a href="#" className="hover:text-[#FDFBF7] transition-colors">
              {t.termsOfService}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
