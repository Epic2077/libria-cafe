import { useLanguage } from "@/context/LanguageContext";
import { motion } from "motion/react";

export default function ContactHeader() {
  const { t } = useLanguage();
  return (
    <div className="text-center mb-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-['Playfair_Display',serif] text-5xl md:text-6xl font-bold text-[#3E3129] mb-6"
      >
        {t.contactPageTitle}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-[#7D6B5D] text-lg max-w-2xl mx-auto"
      >
        {t.contactPageDescription}
      </motion.p>
    </div>
  );
}
