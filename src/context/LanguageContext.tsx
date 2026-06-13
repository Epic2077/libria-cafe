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
  // Menu page
  menuPageTitle: string;
  menuPageSubtitle: string;
  popular: string;
  developerSpecial: string;
  // About page
  aboutHeroTitle: string;
  aboutHeroSubtitle: string;
  aboutSection1Title: string;
  aboutSection1Para1: string;
  aboutSection1Para2: string;
  aboutSection2Title: string;
  aboutSection2Para1: string;
  aboutSection2Para2: string;
  aboutValue1Title: string;
  aboutValue1Desc: string;
  aboutValue2Title: string;
  aboutValue2Desc: string;
  aboutValue3Title: string;
  aboutValue3Desc: string;
  contactPageTitle: string;
  contactPageDescription: string;
  // Gallery page
  galleryHeroTag: string;
  galleryTitle: string;
  galleryDesc: string;
  galleryAllFilter: string;
  galleryInteriorFilter: string;
  galleryDrinksFilter: string;
  galleryFoodFilter: string;
  galleryMomentsFilter: string;
  galleryCtaTitle: string;
  galleryCtaDesc: string;
  galleryCtaButton: string;
  // Contact extras
  contactInfoTitle: string;
  contactFormTitle: string;
  contactFormDesc: string;
  formName: string;
  formEmail: string;
  formSubject: string;
  formMessage: string;
  formSubjectGeneral: string;
  formSubjectEvent: string;
  formSubjectPress: string;
  formSubjectFeedback: string;
  formSubmit: string;
  formSubmitting: string;
  formSuccess: string;
  contactDirections: string;
  contactCallUs: string;
  contactWriteUs: string;
  contactVisitUs: string;
  // About extras
  aboutStatYears: string;
  aboutStatYearsLabel: string;
  aboutStatBeans: string;
  aboutStatBeansLabel: string;
  aboutStatGuests: string;
  aboutStatGuestsLabel: string;
  aboutValuesTitle: string;
  aboutValuesSubtitle: string;
  aboutTimelineTitle: string;
  aboutTimeline1Year: string;
  aboutTimeline1Title: string;
  aboutTimeline1Desc: string;
  aboutTimeline2Year: string;
  aboutTimeline2Title: string;
  aboutTimeline2Desc: string;
  aboutTimeline3Year: string;
  aboutTimeline3Title: string;
  aboutTimeline3Desc: string;
  aboutTimeline4Year: string;
  aboutTimeline4Title: string;
  aboutTimeline4Desc: string;
  // Newsletter
  newsletterTitle: string;
  newsletterDesc: string;
  newsletterPlaceholder: string;
  newsletterButton: string;
  // Hero scroll cue
  scrollCue: string;
  // Menu extras
  menuItemsCount: string;
  menuNoResults: string;
  // Misc
  followUs: string;
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
    email: "hello@Libriacafe.com",
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
    heroHeadline1: "بیا!! کجا؟",
    heroHeadline2: "لیبریا",
    heroDesc: "اینجا قهوه فقط شروع ماجراست؛ ما برایت حالِ خوب دم می‌کنیم",
    viewMenu: "مشاهده منو",
    ourStory: "داستان ما",
    // Features
    feature1Name: "قهوه با کیفیت",
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
    // Menu page
    menuPageTitle: "منوی ما",
    menuPageSubtitle:
      "با دقت آماده شده، با نیت درست انتخاب شده. از نوشیدنی‌های دست‌پخت و خوراکی‌های سالم ما لذت ببرید.",
    popular: "محبوب",
    developerSpecial: "منتخب اشکان",
    // About page
    aboutHeroTitle: "داستان ما",
    aboutHeroSubtitle: "پرورش آگاهی، یک فنجان در هر بار.",
    aboutSection1Title: "آغاز لیبریا",
    aboutSection1Para1:
      "لیبریا از یک ایده ساده بین دو دوست آغاز شد که در آیین قهوه صبحگاهی آرامش می‌یافتند. در شهری که هرگز از حرکت باز نمی‌ایستد، می‌خواستیم پناهگاهی بسازیم؛ جایی که زمان کند می‌شود و توجه به کیفیت، جامعه و لحظه حال معطوف می‌گردد.",
    aboutSection1Para2:
      "نام لیبریا، نور طبیعی را که فضای ما را پر می‌کند و شفافیتی را که امیدواریم یک فنجان قهوه خوب به روزتان هدیه دهد بازتاب می‌دهد. ماه‌ها گذشت تا گوشه‌ای آفتابی در محله پیدا کنیم تا این رؤیا را زنده کنیم.",
    aboutSection2Title: "فلسفه ما",
    aboutSection2Para1:
      "ما بر این باوریم که قهوه خوب نباید به بهای آسیب به زمین یا کشاورزانش تمام شود. به همین دلیل تنها با رست‌کارهای مستقلی همکاری می‌کنیم که تجارت مستقیم را رعایت می‌کنند و دستمزد عادلانه و روش‌های کشاورزی پایدار را تضمین می‌نمایند.",
    aboutSection2Para2:
      "هر جزئیاتی در لیبریا، از ماگ‌های سرامیکی دست‌ساز گرفته تا میزهای چوب بازیافتی و گیاهان فراوان داخلی، برای ارتباط شما با طبیعت انتخاب شده است. شما را دعوت می‌کنیم بنشینید، بنوشید و کمی بمانید.",
    aboutValue1Title: "اشتیاق",
    aboutValue1Desc: "هر فنجان با توجه کامل و دقت در هر مرحله آماده می‌شود.",
    aboutValue2Title: "پایداری",
    aboutValue2Desc: "مواد اولیه ارگانیک و شراکت با کشاورزان مستقل محلی.",
    aboutValue3Title: "جامعه",
    aboutValue3Desc:
      "ساختن فضایی که همه در آن احساس خوشایندی و تعلق داشته باشند.",
    //Contact
    contactPageTitle: "تماس با ما",
    contactPageDescription:
      "سوالی دارید، بازخوردی می‌خواهید یا می‌خواهید یک رویداد برگزار کنید؟ ما دوست داریم از شما بشنویم.",
    // Gallery
    galleryHeroTag: "گالری",
    galleryTitle: "لحظه‌های لیبریا",
    galleryDesc:
      "نگاهی به فضا، نوشیدنی‌ها و آدم‌هایی که لیبریا را زنده نگه می‌دارند.",
    galleryAllFilter: "همه",
    galleryInteriorFilter: "فضا",
    galleryDrinksFilter: "نوشیدنی",
    galleryFoodFilter: "غذا",
    galleryMomentsFilter: "لحظه‌ها",
    galleryCtaTitle: "حضوری بیایید",
    galleryCtaDesc: "یک گوشهٔ آفتابی برای شما آماده است. منتظرتان هستیم.",
    galleryCtaButton: "مشاهدهٔ منو",
    // Contact extras
    contactInfoTitle: "اطلاعات تماس",
    contactFormTitle: "برای ما پیام بفرستید",
    contactFormDesc: "تا ۲۴ ساعت پاسخ می‌دهیم. قول می‌دهیم.",
    formName: "نام شما",
    formEmail: "ایمیل",
    formSubject: "موضوع",
    formMessage: "پیام شما",
    formSubjectGeneral: "سؤال عمومی",
    formSubjectEvent: "رزرو رویداد",
    formSubjectPress: "همکاری و رسانه",
    formSubjectFeedback: "بازخورد",
    formSubmit: "ارسال پیام",
    formSubmitting: "در حال ارسال…",
    formSuccess: "پیام شما دریافت شد. به زودی با شما در تماس خواهیم بود.",
    contactDirections: "مسیریابی",
    contactCallUs: "تماس بگیرید",
    contactWriteUs: "برای ما بنویسید",
    contactVisitUs: "به ما سر بزنید",
    // About extras
    aboutStatYears: "۲",
    aboutStatYearsLabel: "سال میزبانی",
    aboutStatBeans: "۱۲+",
    aboutStatBeansLabel: "نوع دانه قهوه",
    aboutStatGuests: "۸ هزار+",
    aboutStatGuestsLabel: "میهمان خوشحال",
    aboutValuesTitle: "ارزش‌های ما",
    aboutValuesSubtitle: "سه اصلی که هر فنجان لیبریا را شکل می‌دهند.",
    aboutTimelineTitle: "مسیر ما",
    aboutTimeline1Year: "۱۴۰۲",
    aboutTimeline1Title: "ایده در یک کافه",
    aboutTimeline1Desc: "همه‌چیز از یک گفت‌وگوی صبحانه میان دو دوست شروع شد.",
    aboutTimeline2Year: "۱۴۰۲",
    aboutTimeline2Title: "پیدا کردن خانه",
    aboutTimeline2Desc:
      "گوشه‌ای آفتابی در محله، با پنجره‌های بلند و سکوت نسبی.",
    aboutTimeline3Year: "۱۴۰۳",
    aboutTimeline3Title: "افتتاح",
    aboutTimeline3Desc:
      "اولین فنجان را به دوستان نزدیک سرو کردیم؛ همان شب پر شد.",
    aboutTimeline4Year: "۱۴۰۴",
    aboutTimeline4Title: "رستِ اختصاصی",
    aboutTimeline4Desc: "همکاری با رست‌کارهای مستقل برای دانه‌های منحصربه‌فرد.",
    // Newsletter
    newsletterTitle: "از ما بشنوید",
    newsletterDesc:
      "نوشیدنی‌های فصلی، رویدادها و یادداشت‌های آرام — یک ایمیل در ماه.",
    newsletterPlaceholder: "ایمیل شما",
    newsletterButton: "عضویت",
    // Hero scroll cue
    scrollCue: "اسکرول کنید",
    // Menu extras
    menuItemsCount: "آیتم",
    menuNoResults: "موردی برای نمایش نیست.",
    // Misc
    followUs: "ما را دنبال کنید",
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
    email: "hello@Libriacafe.com",
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
    // Menu page
    menuPageTitle: "Our Menu",
    menuPageSubtitle:
      "Crafted with care, sourced with intention. Enjoy our selection of artisan beverages and wholesome bites.",
    popular: "Popular",
    developerSpecial: "Ashkan’s Pick",
    // About page
    aboutHeroTitle: "Our Story",
    aboutHeroSubtitle: "Cultivating mindfulness, one cup at a time.",
    aboutSection1Title: "The Beginnings of Libria",
    aboutSection1Para1:
      "Libria started as a simple idea between two friends who found peace in the ritual of morning coffee. In a city that never stops moving, we wanted to create a sanctuary—a place where time slows down, and the focus shifts to quality, community, and the present moment.",
    aboutSection1Para2:
      "Our name, Libria, reflects the natural light that fills our space and the clarity we hope a good cup of coffee brings to your day. We spent months finding the perfect sunlit corner in the neighborhood to bring this vision to life.",
    aboutSection2Title: "Our Philosophy",
    aboutSection2Para1:
      "We believe that good coffee shouldn't come at the expense of the earth or the people who farm it. That's why we partner exclusively with independent roasters who practice direct trade, ensuring fair wages and sustainable farming methods.",
    aboutSection2Para2:
      "Every detail in Libria—from the handcrafted ceramic mugs to the reclaimed wood tables and abundant indoor plants—has been chosen to ground you in nature. We invite you to sit, sip, and stay awhile.",
    aboutValue1Title: "Passion",
    aboutValue1Desc:
      "Every cup is prepared with full attention and care at every step.",
    aboutValue2Title: "Sustainability",
    aboutValue2Desc:
      "Organic ingredients and partnerships with independent local farmers.",
    aboutValue3Title: "Community",
    aboutValue3Desc:
      "Building a space where everyone feels welcome and at home.",

    //Contact
    contactPageTitle: "Get in Touch",
    contactPageDescription:
      "Have a question, feedback, or want to host an event? We'd love to hear from you.",
    // Gallery
    galleryHeroTag: "Gallery",
    galleryTitle: "Moments at Libria",
    galleryDesc:
      "A peek into the space, the drinks, and the people who make Libria what it is.",
    galleryAllFilter: "All",
    galleryInteriorFilter: "Space",
    galleryDrinksFilter: "Drinks",
    galleryFoodFilter: "Food",
    galleryMomentsFilter: "Moments",
    galleryCtaTitle: "Come visit us",
    galleryCtaDesc: "A sunlit corner is waiting. We'd love to make you a cup.",
    galleryCtaButton: "View the menu",
    // Contact extras
    contactInfoTitle: "Reach us",
    contactFormTitle: "Send us a message",
    contactFormDesc: "We reply within 24 hours. Promise.",
    formName: "Your name",
    formEmail: "Email",
    formSubject: "Subject",
    formMessage: "Your message",
    formSubjectGeneral: "General inquiry",
    formSubjectEvent: "Event booking",
    formSubjectPress: "Press & partnerships",
    formSubjectFeedback: "Feedback",
    formSubmit: "Send message",
    formSubmitting: "Sending…",
    formSuccess: "Thanks — your message landed. We'll be in touch shortly.",
    contactDirections: "Get directions",
    contactCallUs: "Call us",
    contactWriteUs: "Write to us",
    contactVisitUs: "Visit us",
    // About extras
    aboutStatYears: "2",
    aboutStatYearsLabel: "Years of pouring",
    aboutStatBeans: "12+",
    aboutStatBeansLabel: "Single-origin beans",
    aboutStatGuests: "8k+",
    aboutStatGuestsLabel: "Happy regulars",
    aboutValuesTitle: "What we stand for",
    aboutValuesSubtitle: "Three quiet principles behind every cup we pour.",
    aboutTimelineTitle: "Our journey",
    aboutTimeline1Year: "2023",
    aboutTimeline1Title: "An idea over coffee",
    aboutTimeline1Desc:
      "Two friends, a long breakfast, and a sketched-out dream of a quiet café.",
    aboutTimeline2Year: "2023",
    aboutTimeline2Title: "Finding a home",
    aboutTimeline2Desc:
      "A sunlit corner with tall windows and a hush you could almost hear.",
    aboutTimeline3Year: "2024",
    aboutTimeline3Title: "Opening day",
    aboutTimeline3Desc:
      "We poured the first cup for friends. By dusk, every chair was warm.",
    aboutTimeline4Year: "2025",
    aboutTimeline4Title: "Our own roast",
    aboutTimeline4Desc:
      "A small partnership with independent roasters for beans we believe in.",
    // Newsletter
    newsletterTitle: "Quiet notes, in your inbox",
    newsletterDesc:
      "Seasonal drinks, gentle events, and slow reading — once a month, never more.",
    newsletterPlaceholder: "your@email.com",
    newsletterButton: "Subscribe",
    // Hero scroll cue
    scrollCue: "Scroll",
    // Menu extras
    menuItemsCount: "items",
    menuNoResults: "Nothing here yet — try another category.",
    // Misc
    followUs: "Follow along",
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
