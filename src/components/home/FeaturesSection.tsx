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
    accent: "#E8A38B",
  },
  {
    nameKey: "feature2Name" as const,
    descKey: "feature2Desc" as const,
    icon: Leaf,
    accent: "#8A9A86",
  },
  {
    nameKey: "feature3Name" as const,
    descKey: "feature3Desc" as const,
    icon: MapPin,
    accent: "#B5A89E",
  },
];

export default function FeaturesSection({ t }: FeaturesSectionProps) {
  return (
    <section className="relative py-24 bg-[#FDFBF7] overflow-hidden">
      {/* Decorative top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-[#EAE2D6]" />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#E8A38B]/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#8A9A86]/10 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.nameKey}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="group relative"
            >
              <div className="relative h-full bg-white border border-[#EAE2D6]/70 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:border-[#EAE2D6] hover:shadow-[0_24px_60px_-30px_rgba(62,49,41,0.18)] hover:-translate-y-1 overflow-hidden">
                {/* Subtle accent corner */}
                <div
                  aria-hidden
                  className="absolute top-0 inset-e-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-3xl"
                  style={{ backgroundColor: feature.accent }}
                />

                <div className="relative">
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      backgroundColor: `${feature.accent}1F`,
                      color: feature.accent,
                    }}
                  >
                    <feature.icon size={26} strokeWidth={1.5} />
                  </div>

                  <h3 className="font-display text-2xl font-semibold mb-3 text-[#3E3129]">
                    {t[feature.nameKey]}
                  </h3>
                  <p className="text-[#7D6B5D] leading-relaxed">
                    {t[feature.descKey]}
                  </p>
                </div>

                {/* Hairline accent at the bottom */}
                <span
                  className="absolute bottom-0 inset-s-8 inset-e-8 h-px transition-opacity duration-500 opacity-30 group-hover:opacity-100"
                  style={{ backgroundColor: feature.accent }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
