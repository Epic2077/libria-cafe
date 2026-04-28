"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Heart, Leaf, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Content() {
  const { t } = useLanguage();

  const values = [
    { icon: Heart, title: t.aboutValue1Title, desc: t.aboutValue1Desc },
    { icon: Leaf, title: t.aboutValue2Title, desc: t.aboutValue2Desc },
    { icon: Users, title: t.aboutValue3Title, desc: t.aboutValue3Desc },
  ];

  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section 1 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display',serif] text-3xl text-[#3E3129] font-bold mb-6">
            {t.aboutSection1Title}
          </h2>
          <p className="text-[#7D6B5D] text-lg mb-6 leading-relaxed">
            {t.aboutSection1Para1}
          </p>
          <p className="text-[#7D6B5D] text-lg leading-relaxed">
            {t.aboutSection1Para2}
          </p>
        </motion.div>

        {/* Image Grid — fixed: parent has relative + explicit height */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1713026454120-ece73625a8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwdGFibGUlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzc3MzAyNTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Cafe aesthetic"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1672706431425-592b17fe7d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW5kb29yJTIwcGxhbnRzfGVufDF8fHx8MTc3NzMwMjU1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Cafe plants"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Values Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center p-7 bg-[#EAE2D6]/40 rounded-2xl border border-[#EAE2D6]"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#8A9A86]/20 text-[#8A9A86] mb-4">
                <val.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="font-['Playfair_Display',serif] text-lg font-semibold text-[#3E3129] mb-2">
                {val.title}
              </h3>
              <p className="text-[#7D6B5D] text-sm leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Section 2 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="font-['Playfair_Display',serif] text-3xl text-[#3E3129] font-bold mb-6">
            {t.aboutSection2Title}
          </h2>
          <p className="text-[#7D6B5D] text-lg mb-6 leading-relaxed">
            {t.aboutSection2Para1}
          </p>
          <p className="text-[#7D6B5D] text-lg leading-relaxed">
            {t.aboutSection2Para2}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
