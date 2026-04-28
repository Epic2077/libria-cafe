import type { Language } from "./LanguageContext";

export type MenuCategoryKey =
  | "all"
  | "coffee"
  | "teaMatcha"
  | "pastries"
  | "breakfast";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: Exclude<MenuCategoryKey, "all">;
  isPopular?: boolean;
}

export interface MenuCategory {
  key: MenuCategoryKey;
  label: string;
}

const menuItemsByLanguage: Record<Language, MenuItem[]> = {
  en: [
    {
      id: 1,
      name: "Pour Over",
      description:
        "Single-origin beans, brewed to order for a clean, complex cup.",
      price: "$4.50",
      category: "coffee",
      isPopular: true,
    },
    {
      id: 2,
      name: "Cortado",
      description: "Equal parts espresso and steamed milk, served warm.",
      price: "$4.00",
      category: "coffee",
    },
    {
      id: 3,
      name: "Oat Milk Lavender Latte",
      description:
        "Espresso with house-made lavender syrup and creamy oat milk.",
      price: "$5.50",
      category: "coffee",
      isPopular: true,
    },
    {
      id: 4,
      name: "Iced Matcha Whisper",
      description:
        "Ceremonial grade matcha whisked with almond milk and vanilla.",
      price: "$6.00",
      category: "teaMatcha",
    },
    {
      id: 5,
      name: "Earl Grey Reserve",
      description: "Premium loose-leaf Earl Grey with hints of bergamot.",
      price: "$3.50",
      category: "teaMatcha",
    },
    {
      id: 6,
      name: "Almond Croissant",
      description: "Twice-baked butter croissant filled with almond frangipane.",
      price: "$4.75",
      category: "pastries",
      isPopular: true,
    },
    {
      id: 7,
      name: "Cardamom Bun",
      description: "A soft, spiced Scandinavian classic.",
      price: "$4.00",
      category: "pastries",
    },
    {
      id: 8,
      name: "Avocado Toast",
      description:
        "Smashed avocado, chili flakes, and microgreens on sourdough.",
      price: "$9.50",
      category: "breakfast",
      isPopular: true,
    },
    {
      id: 9,
      name: "Overnight Oats",
      description:
        "Chia, rolled oats, oat milk, topped with fresh berries and honey.",
      price: "$6.50",
      category: "breakfast",
    },
  ],
  fa: [
    {
      id: 1,
      name: "قهوه دمی",
      description: "دانه تک‌مبدأ، به‌صورت سفارشی برای فنجانی شفاف و پیچیده.",
      price: "۵۵,۰۰۰ تومان",
      category: "coffee",
      isPopular: true,
    },
    {
      id: 2,
      name: "کورتادو",
      description: "ترکیب برابر اسپرسو و شیر بخار داده شده، گرم سرو می‌شود.",
      price: "۵۰,۰۰۰ تومان",
      category: "coffee",
    },
    {
      id: 3,
      name: "لاته لاوندر شیر جو",
      description: "اسپرسو با شربت لاوندر خانگی و شیر جو خامه‌ای.",
      price: "۶۵,۰۰۰ تومان",
      category: "coffee",
      isPopular: true,
    },
    {
      id: 4,
      name: "ماچای خنک",
      description: "ماچای مرغوب با شیر بادام و وانیل، به روش سنتی.",
      price: "۷۰,۰۰۰ تومان",
      category: "teaMatcha",
    },
    {
      id: 5,
      name: "ارل‌گری ویژه",
      description: "چای ارل‌گری برگ کامل با رایحه لطیف ترنج.",
      price: "۴۵,۰۰۰ تومان",
      category: "teaMatcha",
    },
    {
      id: 6,
      name: "کروآسان بادامی",
      description: "کروآسان کره‌ای دوبار پخت با مغزی بادام.",
      price: "۵۵,۰۰۰ تومان",
      category: "pastries",
      isPopular: true,
    },
    {
      id: 7,
      name: "نان هل",
      description: "یک شیرینی نرم و ادویه‌دار به سبک اسکاندیناوی.",
      price: "۵۰,۰۰۰ تومان",
      category: "pastries",
    },
    {
      id: 8,
      name: "آووکادو تست",
      description: "آووکادوی له‌شده، فلفل قرمز و ریزسبزی روی نان ترش.",
      price: "۱۲۰,۰۰۰ تومان",
      category: "breakfast",
      isPopular: true,
    },
    {
      id: 9,
      name: "اوتمیل شبانه",
      description: "چیا، جو دوسر پرک و شیر جو با توت تازه و عسل.",
      price: "۸۰,۰۰۰ تومان",
      category: "breakfast",
    },
  ],
};

const categoryLabels: Record<
  Language,
  Record<MenuCategoryKey, string>
> = {
  en: {
    all: "All",
    coffee: "Coffee",
    teaMatcha: "Tea & Matcha",
    pastries: "Pastries",
    breakfast: "Breakfast",
  },
  fa: {
    all: "همه",
    coffee: "قهوه",
    teaMatcha: "چای و ماچا",
    pastries: "شیرینی",
    breakfast: "صبحانه",
  },
};

const categoryOrder: MenuCategoryKey[] = [
  "all",
  "coffee",
  "teaMatcha",
  "pastries",
  "breakfast",
];

export function getMenuItems(language: Language): MenuItem[] {
  return menuItemsByLanguage[language];
}

export function getMenuCategories(language: Language): MenuCategory[] {
  return categoryOrder.map((key) => ({
    key,
    label: categoryLabels[language][key],
  }));
}

// Backward compatibility exports
export const menuItems = menuItemsByLanguage.en;
export const menuCategories = categoryOrder.map((key) => categoryLabels.en[key]);
