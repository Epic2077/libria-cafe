import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Vazirmatn,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CreatorConsoleLog from "@/components/CreatorConsoleLog";
import { siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Libria Café — Specialty Cafe in Shiraz | لیبریا کافه شیراز",
    template: "%s | Libria Café Shiraz",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: "Libria Café" }],
  creator: "Libria Café",
  publisher: "Libria Café",
  category: "food & drink",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Libria Café — Specialty Cafe in Shiraz",
    description: siteConfig.description,
    url: siteConfig.url,
    locale: "fa_IR",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Libria Café — Specialty Cafe in Shiraz",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// Structured data (JSON-LD) — helps Google show Libria as a local café in Shiraz
// in rich results and maps. https://schema.org/CafeOrCoffeeShop
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: siteConfig.name,
  alternateName: "لیبریا کافه",
  description: siteConfig.description,
  url: siteConfig.url,
  servesCuisine: ["Coffee", "Café", "Pastries"],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Shiraz",
    addressRegion: "Fars",
    addressCountry: "IR",
  },
  areaServed: {
    "@type": "City",
    name: "Shiraz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${vazirmatn.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <CreatorConsoleLog />
          <div className="min-h-screen bg-[#FDFBF7] text-[#4A3B32] selection:bg-[#E8A38B] selection:text-white flex flex-col">
            <Navbar />
            <main className="grow">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
