"use client";

import { getFavorites } from "@/context/home";
import { useLanguage } from "@/context/LanguageContext";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import StorySection from "@/components/home/StorySection";
import FavoritesSection from "@/components/home/FavoritesSection";
import TestimonialSection from "@/components/home/TestimonialSection";

export default function Home() {
  const { t, language } = useLanguage();
  const favorites = getFavorites(language);

  return (
    <div className="flex flex-col w-full">
      <HeroSection t={t} />
      <FeaturesSection t={t} />
      <StorySection t={t} />
      <FavoritesSection t={t} favorites={favorites} />
      <TestimonialSection t={t} />
    </div>
  );
}
