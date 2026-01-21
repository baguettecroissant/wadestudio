import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";

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
    title: "Wade Studio | Architecte Digital & SaaS Builder",
    description: "Fondateurs de SaaS et éditeurs de sites. Nous concevons des architectures web performantes et des produits digitaux rentables pour la France et Maurice.",
    keywords: ["SaaS", "Next.js", "développement web", "Maurice", "France", "freelance", "agence digitale", "Nailsy"],
    authors: [{ name: "Wade Studio" }],
    openGraph: {
        title: "Wade Studio | Architecte Digital & SaaS Builder",
        description: "Fondateurs de SaaS et éditeurs. Architectures web taillées pour la croissance.",
        type: "website",
        locale: "fr_FR",
    },
    twitter: {
        card: "summary_large_image",
        title: "Wade Studio | Architecte Digital & SaaS Builder",
        description: "Fondateurs de SaaS et éditeurs. Architectures web performantes.",
    },
};

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as 'fr' | 'en')) {
        notFound();
    }

    // Providing all messages to the client side
    const messages = await getMessages();

    return (
        <html lang={locale} className="dark">
            <body className={`${inter.variable} ${outfit.variable} antialiased bg-zinc-950 text-white`}>
                {/* Noise overlay */}
                <div className="noise-overlay" />
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
