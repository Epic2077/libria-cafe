import type { Translations } from "./LanguageContext";

export type GalleryCategory =
  | "all"
  | "interior"
  | "drinks"
  | "food"
  | "moments";

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
  span?: "tall" | "wide" | "default";
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1758181560239-1e5ec8882781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5saXQlMjBjb3p5JTIwY2FmZSUyMGludGVyaW9yJTIwcGxhbnRzfGVufDF8fHx8MTc3NzMwMjU0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Sunlit cafe interior",
    category: "interior",
    span: "tall",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1669162364316-a74b2d661d1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGNvZmZlZXxlbnwxfHx8fDE3NzcyNjk1MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Latte art",
    category: "drinks",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1771159978458-3df74f41a918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwcG91cmluZyUyMGNvZmZlZXxlbnwxfHx8fDE3NzczMDI1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Barista pouring",
    category: "moments",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1751151856149-5ebf1d21586a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwcGFzdHJ5JTIwY3JvaXNzYW50fGVufDF8fHx8MTc3NzMwMjU0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Almond croissant",
    category: "food",
    span: "wide",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1713026454120-ece73625a8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwdGFibGUlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzc3MzAyNTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Cafe table",
    category: "interior",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1749280447307-31a68eb38673?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwbWF0Y2hhJTIwbGF0dGV8ZW58MXx8fHwxNzc3MzAyNTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Iced matcha",
    category: "drinks",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1672706431425-592b17fe7d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW5kb29yJTIwcGxhbnRzfGVufDF8fHx8MTc3NzMwMjU1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Indoor plants",
    category: "interior",
    span: "tall",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1649777888193-e47833d91521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzczMDI1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Coffee beans",
    category: "moments",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Espresso shot",
    category: "drinks",
    span: "wide",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Cup on saucer",
    category: "drinks",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Plated breakfast",
    category: "food",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Reading and coffee",
    category: "moments",
    span: "tall",
  },
];

export const getGalleryFilters = (
  t: Translations,
): { key: GalleryCategory; label: string }[] => [
  { key: "all", label: t.galleryAllFilter },
  { key: "interior", label: t.galleryInteriorFilter },
  { key: "drinks", label: t.galleryDrinksFilter },
  { key: "food", label: t.galleryFoodFilter },
  { key: "moments", label: t.galleryMomentsFilter },
];
