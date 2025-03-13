import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Crumbled Outlaws",
  description: "Komunitas kecil dari Guardian Tales yang solid dan penuh petualangan. Bergabunglah bersama kami!",
  keywords: "Komunitas Guardian Tales Indonesia, Guardian Tales Indonesia, Guardian Tales, komunitas game, Crumbled Outlaws, RPG, petualangan, game online",
  openGraph: {
    title: "Crumbled Outlaws - Komunitas Guardian Tales",
    description: "Hanya Komunitas Kecil Guardian Tales Di indonesia.",
    url: "https://crumbledoutlaws.vercel.app", // Sesuaikan dengan URL asli website
    type: "website",
    siteName: "Crumbled Outlaws",
    images: [
      {
        url: "/logo512.png", // Menggunakan path dari folder public
        width: 512,
        height: 512,
        alt: "Crumbled Outlaws Logo",
      },
    ],
  },
  whatsapp: {
    card: "summary_large_image",
    site: "https://chat.whatsapp.com/GyDz7UWVJQZ3HrzwtAHjKD", // Sesuaikan dengan akun Twitter komunitas
    title: "Crumbled Outlaws - Komunitas Guardian Tales",
    description: "Hanya Komunitas Kecil Guardian Tales di indonesia.",
    images: ["/logo512.png"], // Menggunakan logo yang ada di public/
  },
  discord: {
    title: "Crumbled Outlaws - Komunitas Guardian Tales",
    description: "Group Komunitas Kecil Guardian Tales di indonesia.",
    url: "https://discord.gg/4a6u3VQ4",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta name="whatsapp:card" content={metadata.whatsapp.card} />
        <meta name="whatsapp:site" content={metadata.whatsapp.site} />
        <meta name="whatsapp:title" content={metadata.whatsapp.title} />
        <meta name="whatsapp:description" content={metadata.whatsapp.description} />
        <meta name="whatsapp:image" content={metadata.whatsapp.images[0]} />
        <meta name="discord:title" content={metadata.discord.title} />
        <meta name="discord:description" content={metadata.discord.description} />
        <meta name="discord:url" content={metadata.discord.url} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": metadata.openGraph.siteName,
              "url": metadata.openGraph.url,
              "logo": metadata.openGraph.images[0].url,
              "description": metadata.openGraph.description,
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
