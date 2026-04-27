"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Language = "fa" | "en";

export interface Translations {
  // Nav / Footer
  home: string;
  menu: string;
  about: string;
  gallery: string;
  contact: string;
  orderNow: string;
  explore: string;
  contactTitle: string;
  hours: string;
  monFri: string;
  saturday: string;
  sunday: string;
  address: string;
  phone: string;
  email: string;
  privacyPolicy: string;
  termsOfService: string;
  allRightsReserved: string;
  tagline: string;
  monFriHours: string;
  saturdayHours: string;
  sundayHours: string;
  // Hero
  heroTag: string;
  heroHeadline1: string;
  heroHeadline2: string;
  heroDesc: string;
  viewMenu: string;
  ourStory: string;
  // Features
  feature1Name: string;
  feature1Desc: string;
  feature2Name: string;
  feature2Desc: string;
  feature3Name: string;
  feature3Desc: string;
  // Story section
  storyHeadline1: string;
  storyHeadline2: string;
  storyPara1: string;
  storyPara2: string;
  readFullStory: string;
  // Favorites section
  favoritesTitle: string;
  favoritesDesc: string;
  exploreFullMenu: string;
  // Testimonial
  testimonialQuote: string;
  testimonialAuthor: string;
  testimonialRole: string;
}

const translations: Record<Language, Translations> = {
  fa: {
    home: "خانه",
    menu: "منو",
    about: "درباره ما",
    gallery: "گالری",
    contact: "تماس",
    orderNow: "سفارش دهید",
    explore: "کاوش کنید",
    contactTitle: "تماس با ما",
    hours: "ساعت کاری",
    monFri: "دوشنبه - جمعه",
    saturday: "شنبه",
    sunday: "یکشنبه",
    address: "خیابان افشار ۱۲۳، تهران",
    phone: "(۰۲۱) ۱۲۳-۴۵۶۷",
    email: "hello@luminacafe.com",
    privacyPolicy: "سیاست حریم خصوصی",
    termsOfService: "شرایط استفاده",
    allRightsReserved: "تمامی حقوق محفوظ است.",
    tagline:
      "یک پناهگاه آرام محله‌ای، متعهد به قهوه‌های دست‌پخت، شیرینی‌های تازه و لحظات آرام.",
    monFriHours: "۷:۰۰ صبح - ۶:۰۰ عصر",
    saturdayHours: "۸:۰۰ صبح - ۷:۰۰ عصر",
    sundayHours: "۸:۰۰ صبح - ۵:۰۰ عصر",
    // Hero
    heroTag: "تأسیس ۲۰۲۴",
    heroHeadline1: "لحظات آگاهانه،",
    heroHeadline2: "دم‌نوش‌های دست‌پخت.",
    heroDesc:
      "پناهگاهی آرام که مینیمالیسم اسکاندیناوی را با گرمای طبیعت درهم می‌آمیزد. قهوه‌های دقیق و متفکرانه را در فضایی پر از نور آفتاب بچشید.",
    viewMenu: "مشاهده منو",
    ourStory: "داستان ما",
    // Features
    feature1Name: "قهوه دست‌پخت",
    feature1Desc: "دانه‌های با منشأ اخلاقی، بو داده تا حد کمال.",
    feature2Name: "مواد ارگانیک",
    feature2Desc: "تنها از بهترین مواد طبیعی استفاده می‌کنیم.",
    feature3Name: "جامعه محلی",
    feature3Desc: "فضایی دنج برای گردهمایی، کار و استراحت.",
    // Story
    storyHeadline1: "ریشه در طبیعت،",
    storyHeadline2: "با عشق دم شده.",
    storyPara1:
      "لیبریا از یک آرزوی ساده متولد شد: ساختن فضایی که مثل یک نفس عمیق احساس شود. ما باور داریم قهوه بیش از یک نوشیدنی است؛ یک آیین است، لحظه‌ای از مکث در دنیای پرشتاب.",
    storyPara2:
      "با همکاری کافه‌بازان محلی و کشاورزان ارگانیک، اطمینان داریم که هر فنجان هم به جامعه و هم به زمین خدمت می‌کند. به عقب‌نشینگاه جدید محله‌ی خود خوش آمدید.",
    readFullStory: "داستان کامل ما را بخوانید",
    // Favorites
    favoritesTitle: "محبوب‌های مشتریان",
    favoritesDesc: "نوشیدنی‌ها و خوراکی‌هایی که جامعه‌ی ما عاشق‌شان است.",
    exploreFullMenu: "مشاهده منوی کامل",
    // Testimonial
    testimonialQuote:
      "«ترکیب بی‌نظیری از طراحی مینیمالیستی و فضای گرم. مکان همیشگی من برای خواندن صبح‌های یکشنبه.»",
    testimonialAuthor: "مایکل چن",
    testimonialRole: "ساکن محلی",
  },
  en: {
    home: "Home",
    menu: "Menu",
    about: "About",
    gallery: "Gallery",
    contact: "Contact",
    orderNow: "Order Now",
    explore: "Explore",
    contactTitle: "Contact",
    hours: "Hours",
    monFri: "Mon – Fri",
    saturday: "Saturday",
    sunday: "Sunday",
    address: "123 Maple Street, Portland, OR 97204",
    phone: "(555) 123-4567",
    email: "hello@luminacafe.com",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    allRightsReserved: "All rights reserved.",
    tagline:
      "A peaceful neighborhood retreat dedicated to artisan coffee, fresh pastries, and mindful moments.",
    monFriHours: "7:00 AM – 6:00 PM",
    saturdayHours: "8:00 AM – 7:00 PM",
    sundayHours: "8:00 AM – 5:00 PM",
    // Hero
    heroTag: "EST. 2024",
    heroHeadline1: "Mindful Moments,",
    heroHeadline2: "Artisan Brews.",
    heroDesc:
      "A peaceful sanctuary where Scandinavian minimalism meets the warmth of nature. Savor thoughtfully crafted coffee in a sunlit space.",
    viewMenu: "View Menu",
    ourStory: "Our Story",
    // Features
    feature1Name: "Artisan Coffee",
    feature1Desc: "Ethically sourced beans roasted to perfection.",
    feature2Name: "Organic Ingredients",
    feature2Desc: "We use only the finest natural ingredients.",
    feature3Name: "Local Community",
    feature3Desc: "A cozy space to gather, work, and relax.",
    // Story
    storyHeadline1: "Rooted in Nature,",
    storyHeadline2: "Brewed with Love.",
    storyPara1:
      "Libria was born from a simple desire: to create a space that feels like a deep breath. We believe that coffee is more than just a drink; it's a ritual, a moment of pause in a busy world.",
    storyPara2:
      "By partnering with local roasters and organic farmers, we ensure every cup serves both our community and the earth. Welcome to your new favorite neighborhood retreat.",
    readFullStory: "Read our full story",
    // Favorites
    favoritesTitle: "Customer Favorites",
    favoritesDesc:
      "Discover the drinks and treats our community can't get enough of.",
    exploreFullMenu: "Explore Full Menu",
    // Testimonial
    testimonialQuote:
      '"A perfect blend of minimalist design and warm atmosphere. My go-to spot for Sunday morning reading."',
    testimonialAuthor: "Michael Chen",
    testimonialRole: "Local Resident",
  },
};

interface LanguageContextType {
  language: Language;
  dir: "rtl" | "ltr";
  t: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fa");
  const dir: "rtl" | "ltr" = language === "fa" ? "rtl" : "ltr";
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fa" ? "en" : "fa"));
  };

  return (
    <LanguageContext.Provider value={{ language, dir, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
