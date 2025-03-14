import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Menggunakan generateMetadata() agar lebih optimal
export const generateMetadata = () => ({
  title: "Crumbled Outlaws",
  description: "Komunitas kecil dari Guardian Tales yang solid dan penuh petualangan. Bergabunglah bersama kami 😊",
  keywords: [
    "Komunitas Guardian Tales Indonesia",
    "Guardian Tales Indonesia",
    "Guardian Tales",
    "komunitas game",
    "Crumbled Outlaws",
    "RPG",
    "petualangan",
    "game online"
  ].join(", "),
  openGraph: {
    title: "Crumbled Outlaws - Komunitas Guardian Tales",
    description: "Hanya Komunitas Kecil Guardian Tales Di Indonesia.",
    url: "https://crumbledoutlaws.vercel.app",
    type: "website",
    siteName: "Crumbled Outlaws",
    images: [
      {
        url: "/logo512.png",
        width: 512,
        height: 512,
        alt: "Crumbled Outlaws Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CrumbledOutlaws", // Jika tidak punya Twitter, hapus saja
    title: "Crumbled Outlaws - Komunitas Guardian Tales",
    description: "Hanya Komunitas Kecil Guardian Tales di Indonesia.",
    images: ["/logo512.png"],
  },
  metadataBase: new URL("https://crumbledoutlaws.vercel.app"),
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
