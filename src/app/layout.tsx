import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Added Outfit for headings
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wadestudio | We Build MVPs & SaaS Products",
  description: "Wadestudio builds scalable MVPs with world-class design. Turn your ideas into SaaS empires with our expert development team.",
  keywords: ["SaaS", "MVP", "web development", "Next.js", "startup", "product development"],
  authors: [{ name: "Wadestudio" }],
  openGraph: {
    title: "Wadestudio | We Build MVPs & SaaS Products",
    description: "Wadestudio builds scalable MVPs with world-class design. Turn your ideas into SaaS empires.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wadestudio | We Build MVPs & SaaS Products",
    description: "Wadestudio builds scalable MVPs with world-class design.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-zinc-950 text-white`}>
        {/* Noise overlay */}
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
