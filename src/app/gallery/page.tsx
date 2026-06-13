import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCta from "@/components/gallery/GalleryCta";

export default function GalleryPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <GalleryHero />
      <GalleryGrid />
      <GalleryCta />
    </div>
  );
}
