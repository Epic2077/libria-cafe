"use client";

import { motion } from "motion/react";
import { Leaf, Coffee, MapPin } from "lucide-react";
import type { Translations } from "@/context/LanguageContext";

interface FeaturesSectionProps {
  t: Translations;
}

const features = [
  {
    nameKey: "feature1Name" as const,
    descKey: "feature1Desc" as const,
    icon: Coffee,
  },
  {
    nameKey: "feature2Name" as const,
    descKey: "feature2Desc" as const,
    icon: Leaf,
  },
  {
    nameKey: "feature3Name" as const,
    descKey: "feature3Desc" as const,
    icon: MapPin,
  },
];

export default function FeaturesSection({ t }: FeaturesSectionProps) {
  return (
    <section className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.nameKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#EAE2D6] text-[#8A9A86] mb-6">
                <feature.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-['Playfair_Display',serif] text-2xl font-semibold mb-3 text-[#3E3129]">
                {t[feature.nameKey]}
              </h3>
              <p className="text-[#7D6B5D] leading-relaxed max-w-xs mx-auto">
                {t[feature.descKey]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
