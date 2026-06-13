"use client";

import ContactHeader from "@/components/contact/HeaderSection";
import InfoCards from "@/components/contact/InfoCards";
import ContactForm from "@/components/contact/ContactForm";
import HoursMap from "@/components/contact/HoursMap";

export default function Contact() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-12 pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ContactHeader />
        <InfoCards />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <HoursMap />
          </div>
        </div>
      </div>
    </div>
  );
}
