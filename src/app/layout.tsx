import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollRestorationEffect from "@/components/ScrollRestorationEffect"; // ⬅️ Tambahan ini
import { LoaderScreen } from "@/components/LoaderScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"), // ⬅️ Ganti dengan domain aslimu
  title: {
    default: "Nadhira | Fullstack Developer",
    template: "%s | Nadhira",
  },
  description:
    "Hi, I’m Nadhira – a fullstack developer crafting thoughtful user experiences with clean code and creative vision.",
  openGraph: {
    title: "Nadhira | Fullstack Developer Portfolio",
    description:
      "Explore the portfolio of Nadhira, a fullstack developer with a passion for design, interaction, and purposeful web development.",
    url: "http://localhost:3000/",
    siteName: "Nadhira Portfolio",
    images: [
      {
        url: "/assets/PersonalWeb.png",
        width: 1200,
        height: 630,
        alt: "Nadhira Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadhira | Fullstack Developer",
    description:
      "Nadhira is a fullstack developer focused on clean UI, seamless UX, and quality code.",
    images: ["/assets/og-hero.png"],
  },
  icons: {
    icon: "/favicon.ico", // ⬅️ Pastikan ada favicon juga di /public
  },
  manifest: "/site.webmanifest", // ⬅️ Bisa dibikin nanti kalau kamu mau PWA-ready
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollRestorationEffect /> {/* ⬅️ Tambahan ini */}
        <LoaderScreen />
        {children}
      </body>
    </html>
  );
}