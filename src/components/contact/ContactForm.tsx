"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type Subject = "general" | "event" | "press" | "feedback";

export default function ContactForm() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState<Subject>("general");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const subjects: { value: Subject; label: string }[] = [
    { value: "general", label: t.formSubjectGeneral },
    { value: "event", label: t.formSubjectEvent },
    { value: "press", label: t.formSubjectPress },
    { value: "feedback", label: t.formSubjectFeedback },
  ];

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setSubject("general");
    }, 900);
  };

  const inputClass =
    "w-full bg-[#FDFBF7] border border-[#EAE2D6] focus:border-[#8A9A86] focus:bg-white text-[#3E3129] placeholder:text-[#B5A89E] px-4 py-3.5 rounded-xl outline-none transition-colors";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl p-8 md:p-10 border border-[#EAE2D6]/70 shadow-[0_30px_80px_-50px_rgba(62,49,41,0.25)]"
    >
      <div className="mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#3E3129] mb-2">
          {t.contactFormTitle}
        </h2>
        <p className="text-[#7D6B5D]">{t.contactFormDesc}</p>
      </div>

      {status === "sent" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center text-center py-12"
        >
          <div className="w-16 h-16 rounded-full bg-[#8A9A86]/15 text-[#8A9A86] flex items-center justify-center mb-5">
            <CheckCircle2 size={32} strokeWidth={1.5} />
          </div>
          <h3 className="font-display text-xl font-semibold text-[#3E3129] mb-2">
            {t.formSuccess}
          </h3>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm text-[#7D6B5D] hover:text-[#3E3129] underline underline-offset-4"
          >
            ↺
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs uppercase tracking-wider text-[#7D6B5D] mb-2 font-medium"
              >
                {t.formName}
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
                placeholder={t.formName}
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs uppercase tracking-wider text-[#7D6B5D] mb-2 font-medium"
              >
                {t.formEmail}
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
                placeholder="you@email.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-subject"
              className="block text-xs uppercase tracking-wider text-[#7D6B5D] mb-2 font-medium"
            >
              {t.formSubject}
            </label>
            <div className="flex flex-wrap gap-2">
              {subjects.map((s) => (
                <button
                  key={s.value}
                  type="button"
                  onClick={() => setSubject(s.value)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    subject === s.value
                      ? "bg-[#3E3129] text-[#FDFBF7] shadow-[0_8px_20px_-8px_rgba(62,49,41,0.4)]"
                      : "bg-[#FDFBF7] text-[#7D6B5D] border border-[#EAE2D6] hover:border-[#8A9A86] hover:text-[#3E3129]"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs uppercase tracking-wider text-[#7D6B5D] mb-2 font-medium"
            >
              {t.formMessage}
            </label>
            <textarea
              id="contact-message"
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputClass} resize-none`}
              placeholder={t.formMessage}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#3E3129] text-[#FDFBF7] rounded-full font-medium transition-all hover:bg-[#E8A38B] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-15px_rgba(232,163,139,0.5)] disabled:opacity-70 disabled:cursor-wait"
          >
            {status === "sending" ? t.formSubmitting : t.formSubmit}
            <Send
              size={16}
              className="transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 rtl:rotate-180"
            />
          </button>
        </form>
      )}
    </motion.div>
  );
}
