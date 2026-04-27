import type { Language } from "./LanguageContext";

export interface FavoriteItem {
  name: string;
  price: string;
  tag: string;
  image: string;
}

const favoritesData: Record<Language, FavoriteItem[]> = {
  en: [
    {
      name: "Oat Milk Lavender Latte",
      price: "$5.50",
      tag: "Signature",
      image:
        "https://images.unsplash.com/photo-1669162364316-a74b2d661d1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGNvZmZlZXxlbnwxfHx8fDE3NzcyNjk1MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Almond Croissant",
      price: "$4.75",
      tag: "Fresh Baked",
      image:
        "https://images.unsplash.com/photo-1751151856149-5ebf1d21586a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwcGFzdHJ5JTIwY3JvaXNzYW50fGVufDF8fHx8MTc3NzMwMjU0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Iced Matcha Whisper",
      price: "$6.00",
      tag: "Seasonal",
      image:
        "https://images.unsplash.com/photo-1749280447307-31a68eb38673?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwbWF0Y2hhJTIwbGF0dGV8ZW58MXx8fHwxNzc3MzAyNTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ],
  fa: [
    {
      name: "لاته لاوندر شیر جو",
      price: "۶۵,۰۰۰ تومان",
      tag: "مخصوص",
      image:
        "https://images.unsplash.com/photo-1669162364316-a74b2d661d1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGNvZmZlZXxlbnwxfHx8fDE3NzcyNjk1MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "کروآسان بادامی",
      price: "۵۵,۰۰۰ تومان",
      tag: "تازه پخته",
      image:
        "https://images.unsplash.com/photo-1751151856149-5ebf1d21586a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwcGFzdHJ5JTIwY3JvaXNzYW50fGVufDF8fHx8MTc3NzMwMjU0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "ماچای خنک شیرین",
      price: "۷۰,۰۰۰ تومان",
      tag: "فصلی",
      image:
        "https://images.unsplash.com/photo-1749280447307-31a68eb38673?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwbWF0Y2hhJTIwbGF0dGV8ZW58MXx8fHwxNzc3MzAyNTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ],
};

export function getFavorites(language: Language): FavoriteItem[] {
  return favoritesData[language];
}

// Keep backward compat export
export const favorites = favoritesData.en;

