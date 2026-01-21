'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const t = useTranslations('Footer');
    const pathname = usePathname();
    const currentLocale = pathname.startsWith('/en') ? 'en' : 'fr';

    return (
        <footer className="relative bg-zinc-950 pt-20 pb-10 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 -z-10" />

            <div className="container mx-auto px-4">
                {/* Giant CTA */}
                <div className="mb-24 border-b border-zinc-800 pb-12">
                    <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-bold font-heading leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 mb-8 opacity-90 transition-opacity hover:opacity-100 cursor-default">
                        {t('cta')}
                    </h2>
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                        <p className="text-xl md:text-2xl text-zinc-400 max-w-xl">
                            {t('description')}
                        </p>
                        <Link href={`/${currentLocale}/contact`} className="group px-8 py-4 rounded-full bg-indigo-600 text-white font-bold text-lg flex items-center gap-2 hover:bg-indigo-500 transition-all shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.6)]">
                            {t('startProject')} <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div>
                        <h3 className="font-bold text-white mb-4">{t('sitemap')}</h3>
                        <ul className="space-y-2 text-zinc-400">
                            <li><Link href={`/${currentLocale}`} className="hover:text-indigo-400 transition-colors">{t('home')}</Link></li>
                            <li><Link href={`/${currentLocale}#works`} className="hover:text-indigo-400 transition-colors">{t('work')}</Link></li>
                            <li><Link href={`/${currentLocale}#services`} className="hover:text-indigo-400 transition-colors">{t('services')}</Link></li>
                            <li><Link href={`/${currentLocale}#process`} className="hover:text-indigo-400 transition-colors">{t('process')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-white mb-4">{t('socials')}</h3>
                        <ul className="space-y-2 text-zinc-400">
                            <li><a href="https://x.com/wadestudio" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Twitter / X</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Instagram</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-white mb-4">{t('legal')}</h3>
                        <ul className="space-y-2 text-zinc-400">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">{t('privacy')}</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">{t('terms')}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-white mb-4">{t('location')}</h3>
                        <p className="text-zinc-400">
                            {t('address')}<br />
                            <span className="text-indigo-400">{t('global')}</span>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800 text-zinc-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} Wade Studio. {t('rights')}</p>
                    <p className="flex items-center gap-1">{t.rich('madeIn', { heart: () => <span className="text-red-500">♥</span> })}</p>
                </div>
            </div>
        </footer>
    );
}
