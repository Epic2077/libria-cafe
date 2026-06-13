"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Heart, Leaf, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Content() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t.aboutValue1Title,
      desc: t.aboutValue1Desc,
      accent: "#E8A38B",
    },
    {
      icon: Leaf,
      title: t.aboutValue2Title,
      desc: t.aboutValue2Desc,
      accent: "#8A9A86",
    },
    {
      icon: Users,
      title: t.aboutValue3Title,
      desc: t.aboutValue3Desc,
      accent: "#B5A89E",
    },
  ];

  const timeline = [
    {
      year: t.aboutTimeline1Year,
      title: t.aboutTimeline1Title,
      desc: t.aboutTimeline1Desc,
    },
    {
      year: t.aboutTimeline2Year,
      title: t.aboutTimeline2Title,
      desc: t.aboutTimeline2Desc,
    },
    {
      year: t.aboutTimeline3Year,
      title: t.aboutTimeline3Title,
      desc: t.aboutTimeline3Desc,
    },
    {
      year: t.aboutTimeline4Year,
      title: t.aboutTimeline4Title,
      desc: t.aboutTimeline4Desc,
    },
  ];

  const stats = [
    { value: t.aboutStatYears, label: t.aboutStatYearsLabel },
    { value: t.aboutStatBeans, label: t.aboutStatBeansLabel },
    { value: t.aboutStatGuests, label: t.aboutStatGuestsLabel },
  ];

  return (
    <>
      {/* Stats strip */}
      <section className="bg-[#FDFBF7] border-b border-[#EAE2D6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-3 gap-4 md:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-[#3E3129] mb-2 tabular-nums-fa">
                {s.value}
              </p>
              <p className="text-xs md:text-sm text-[#7D6B5D] uppercase tracking-wider">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 1 — Beginnings */}
      <section className="py-24 md:py-28 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#8A9A86] font-semibold mb-4">
              — Chapter 01
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-[#3E3129] font-bold mb-7 leading-tight">
              {t.aboutSection1Title}
            </h2>
            <p className="text-[#7D6B5D] text-lg mb-5 leading-relaxed">
              {t.aboutSection1Para1}
            </p>
            <p className="text-[#7D6B5D] text-lg leading-relaxed">
              {t.aboutSection1Para2}
            </p>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-[0_20px_50px_-25px_rgba(62,49,41,0.25)] group">
              <Image
                src="https://images.unsplash.com/photo-1713026454120-ece73625a8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwdGFibGUlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzc3MzAyNTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cafe aesthetic"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-[0_20px_50px_-25px_rgba(62,49,41,0.25)] md:translate-y-10 group">
              <Image
                src="https://images.unsplash.com/photo-1672706431425-592b17fe7d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW5kb29yJTIwcGxhbnRzfGVufDF8fHx8MTc3NzMwMjU1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cafe plants"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-28 bg-[#EAE2D6]/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#8A9A86] font-semibold mb-4">
              — Values
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-[#3E3129] font-bold mb-4 leading-tight">
              {t.aboutValuesTitle}
            </h2>
            <p className="text-[#7D6B5D] text-lg max-w-xl mx-auto">
              {t.aboutValuesSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative bg-white rounded-3xl p-8 md:p-10 border border-[#EAE2D6]/70 hover:border-[#EAE2D6] hover:shadow-[0_24px_60px_-30px_rgba(62,49,41,0.18)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute -top-12 -inset-e-12 w-40 h-40 rounded-full opacity-10 transition-opacity duration-500 group-hover:opacity-20 blur-2xl"
                  style={{ backgroundColor: val.accent }}
                />
                <div
                  className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundColor: `${val.accent}1F`,
                    color: val.accent,
                  }}
                >
                  <val.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="relative font-display text-xl font-semibold text-[#3E3129] mb-3">
                  {val.title}
                </h3>
                <p className="relative text-[#7D6B5D] leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-28 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#8A9A86] font-semibold mb-4">
              — Journey
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-[#3E3129] font-bold leading-tight">
              {t.aboutTimelineTitle}
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical guideline */}
            <div className="absolute inset-s-3 md:inset-s-1/2 top-0 bottom-0 w-px bg-[#EAE2D6] md:-translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`relative flex flex-col md:flex-row md:items-center gap-6 ps-12 md:ps-0 ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot */}
                  <span className="absolute inset-s-3 md:inset-s-1/2 top-1.5 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-[#E8A38B] ring-4 ring-[#FDFBF7] z-10" />

                  <div className="md:w-1/2 md:px-8">
                    <div
                      className={`bg-white rounded-2xl p-6 border border-[#EAE2D6]/70 shadow-[0_10px_30px_-20px_rgba(62,49,41,0.15)] ${
                        i % 2 === 0 ? "md:text-end" : ""
                      }`}
                    >
                      <p className="font-display text-2xl font-bold text-[#E8A38B] mb-1 tabular-nums-fa">
                        {item.year}
                      </p>
                      <h3 className="font-display text-xl font-semibold text-[#3E3129] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#7D6B5D] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Philosophy */}
      <section className="py-24 md:py-28 bg-[#3E3129] text-[#FDFBF7] relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#8A9A86]/10 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#E8A38B]/10 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#8A9A86] font-semibold mb-4">
            — Chapter 02
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-7 leading-tight">
            {t.aboutSection2Title}
          </h2>
          <p className="text-[#EAE2D6] text-lg mb-5 leading-relaxed">
            {t.aboutSection2Para1}
          </p>
          <p className="text-[#EAE2D6] text-lg leading-relaxed">
            {t.aboutSection2Para2}
          </p>
        </motion.div>
      </section>
    </>
  );
}
