"use client";

import Link from "next/link";
import { Coffee, MapPin, Clock, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { navLinks } from "@/context/navLinks";
import type { Translations } from "@/context/LanguageContext";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3500);
  };

  return (
    <footer className="relative bg-[#3E3129] text-[#EAE2D6] overflow-hidden">
      {/* Decorative top border */}
      <div className="h-px bg-linear-to-r from-transparent via-[#8A9A86]/40 to-transparent" />

      {/* Newsletter band */}
      <div className="border-b border-[#4A3B32]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#FDFBF7] mb-2">
              {t.newsletterTitle}
            </h3>
            <p className="text-[#B5A89E] leading-relaxed max-w-md">
              {t.newsletterDesc}
            </p>
          </div>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-1">
              <Mail
                size={18}
                className="absolute start-4 top-1/2 -translate-y-1/2 text-[#8A9A86]"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletterPlaceholder}
                className="w-full bg-[#4A3B32]/60 border border-[#4A3B32] focus:border-[#8A9A86] focus:bg-[#4A3B32] text-[#FDFBF7] placeholder:text-[#B5A89E]/60 ps-12 pe-4 py-3.5 rounded-full outline-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-[#E8A38B] text-[#3E3129] hover:bg-[#FDFBF7] transition-colors font-medium px-6 py-3.5 rounded-full whitespace-nowrap"
            >
              {subscribed ? "✓" : t.newsletterButton}
              {!subscribed && <Send size={16} />}
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-6 group">
              <div className="bg-[#8A9A86] text-white p-2 rounded-full transition-transform group-hover:scale-105">
                <Coffee size={22} strokeWidth={1.5} />
              </div>
              <span className="font-display text-2xl font-semibold tracking-tight text-[#FDFBF7]">
                Libria
              </span>
            </Link>
            <p className="text-[#B5A89E] mb-6 leading-relaxed">{t.tagline}</p>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#8A9A86] mb-3">
                {t.followUs}
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: BsInstagram, label: "Instagram" },
                  { Icon: FaXTwitter, label: "X" },
                  { Icon: FaFacebookF, label: "Facebook" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-10 h-10 rounded-full bg-[#4A3B32] flex items-center justify-center text-[#B5A89E] hover:bg-[#E8A38B] hover:text-white transition-all hover:-translate-y-0.5"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Explore links */}
          <div>
            <h3 className="font-display text-lg text-[#FDFBF7] mb-6">
              {t.explore}
            </h3>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.path}
                    className="text-[#B5A89E] hover:text-[#E8A38B] transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-px bg-[#E8A38B] me-0 group-hover:w-4 group-hover:me-2 transition-all duration-300" />
                    {t[link.key as keyof Translations]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg text-[#FDFBF7] mb-6">
              {t.contactTitle}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#B5A89E]">
                <MapPin size={18} className="shrink-0 mt-0.5 text-[#8A9A86]" />
                <span className="leading-relaxed">{t.address}</span>
              </li>
              <li className="flex items-center gap-3 text-[#B5A89E]">
                <Phone size={18} className="shrink-0 text-[#8A9A86]" />
                <a href={`tel:${t.phone}`} className="hover:text-[#FDFBF7] transition-colors">
                  {t.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#B5A89E]">
                <Mail size={18} className="shrink-0 text-[#8A9A86]" />
                <a href={`mailto:${t.email}`} className="hover:text-[#FDFBF7] transition-colors">
                  {t.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-lg text-[#FDFBF7] mb-6 flex items-center gap-2">
              <Clock size={18} className="text-[#8A9A86]" />
              {t.hours}
            </h3>
            <ul className="space-y-3 text-[#B5A89E]">
              <li className="flex justify-between gap-3 border-b border-[#4A3B32] pb-2.5">
                <span>{t.monFri}</span>
                <span className="text-[#FDFBF7] tabular-nums-fa">{t.monFriHours}</span>
              </li>
              <li className="flex justify-between gap-3 border-b border-[#4A3B32] pb-2.5">
                <span>{t.saturday}</span>
                <span className="text-[#FDFBF7] tabular-nums-fa">{t.saturdayHours}</span>
              </li>
              <li className="flex justify-between gap-3 border-b border-[#4A3B32] pb-2.5">
                <span>{t.sunday}</span>
                <span className="text-[#FDFBF7] tabular-nums-fa">{t.sundayHours}</span>
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
