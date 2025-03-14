import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const generateMetadata = () => ({
  title: "🚀 Komunitas Guardian Tales Indonesia | Crumbled Outlaws 🎮",
  description: "Bergabunglah dengan komunitas Guardian Tales Indonesia yang solid! Diskusi, tips, event eksklusif, dan squad terbaik. Daftar sekarang! 💥",
  keywords: [
    "Guardian Tales Indonesia",
    "Komunitas Guardian Tales",
    "Guild Guardian Tales",
    "Tips Guardian Tales",
    "Event Guardian Tales",
    "Crumbled Outlaws"
  ].join(", "),
  openGraph: {
    title: "🚀 Komunitas Guardian Tales Indonesia - Crumbled Outlaws 🎮",
    description: "Gabung dengan komunitas terbaik Guardian Tales di Indonesia! Dapatkan event eksklusif & squad terbaik.",
    url: "https://crumbledoutlaws.vercel.app",
    type: "website",
    siteName: "Crumbled Outlaws",
    images: [
      {
        url: "/logo512.png",
        width: 512,
        height: 512,
        alt: "Crumbled Outlaws - Komunitas Guardian Tales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CrumbledOutlaws",
    title: "Guardian Tales Indonesia | Komunitas Terbaik! 🎮",
    description: "Gabung komunitas Guardian Tales Indonesia terbaik & temukan squad terbaikmu!",
    images: ["/logo512.png"],
  },
  metadataBase: new URL("https://crumbledoutlaws.vercel.app"),
  robots: "index, follow",
  canonical: "https://crumbledoutlaws.vercel.app",
  alternates: {
    languages: {
      'id-ID': 'https://crumbledoutlaws.vercel.app',
      'en-US': 'https://crumbledoutlaws.vercel.app/en'
    }
  }
});

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
