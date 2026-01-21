'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    // Extract current locale from pathname
    const currentLocale = pathname.startsWith('/en') ? 'en' : 'fr';
    const otherLocale = currentLocale === 'fr' ? 'en' : 'fr';

    // Get the path without locale for switching
    const pathWithoutLocale = pathname.replace(/^\/(fr|en)/, '') || '/';
    const switchLocalePath = `/${otherLocale}${pathWithoutLocale}`;

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0 },
                    hidden: { y: -100 },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
            >
                <nav className="relative flex items-center justify-between px-6 py-3 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-xl shadow-2xl w-full max-w-3xl">
                    {/* Logo */}
                    <Link href={`/${currentLocale}`} className="text-xl font-bold font-heading tracking-tight flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">W</div>
                        <span>Wadestudio</span>
                    </Link>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
                        <li><Link href={`/${currentLocale}#works`} className="hover:text-white transition-colors">{currentLocale === 'fr' ? 'Réalisations' : 'Work'}</Link></li>
                        <li><Link href={`/${currentLocale}#services`} className="hover:text-white transition-colors">Services</Link></li>
                        <li><Link href={`/${currentLocale}#process`} className="hover:text-white transition-colors">Process</Link></li>
                        <li><Link href={`/${currentLocale}/about`} className="hover:text-white transition-colors">{currentLocale === 'fr' ? 'À propos' : 'About'}</Link></li>
                    </ul>

                    {/* Right section with language switcher and CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Language Switcher */}
                        <Link
                            href={switchLocalePath}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-700 bg-zinc-800/50 text-sm font-medium text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
                        >
                            <Globe size={14} />
                            <span className="uppercase">{otherLocale}</span>
                        </Link>

                        {/* CTA */}
                        <Link href={`/${currentLocale}/contact`} className="px-5 py-2 rounded-full bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-colors">
                            {currentLocale === 'fr' ? 'Parlons-en' : "Let's Talk"}
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
                        <Menu />
                    </button>
                </nav>
            </motion.header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[60] bg-zinc-950/95 backdrop-blur-xl flex flex-col items-center justify-center"
                >
                    <button className="absolute top-8 right-8 text-zinc-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                        <X size={32} />
                    </button>

                    <ul className="flex flex-col items-center gap-8 text-2xl font-bold font-heading">
                        <li onClick={() => setIsMobileMenuOpen(false)}><Link href={`/${currentLocale}#works`}>{currentLocale === 'fr' ? 'Réalisations' : 'Work'}</Link></li>
                        <li onClick={() => setIsMobileMenuOpen(false)}><Link href={`/${currentLocale}#services`}>Services</Link></li>
                        <li onClick={() => setIsMobileMenuOpen(false)}><Link href={`/${currentLocale}#process`}>Process</Link></li>
                        <li onClick={() => setIsMobileMenuOpen(false)}><Link href={`/${currentLocale}/about`}>{currentLocale === 'fr' ? 'À propos' : 'About'}</Link></li>

                        {/* Mobile Language Switcher */}
                        <li onClick={() => setIsMobileMenuOpen(false)}>
                            <Link
                                href={switchLocalePath}
                                className="flex items-center gap-2 text-indigo-400"
                            >
                                <Globe size={20} />
                                <span>{currentLocale === 'fr' ? 'English' : 'Français'}</span>
                            </Link>
                        </li>

                        <li onClick={() => setIsMobileMenuOpen(false)} className="pt-8">
                            <Link href={`/${currentLocale}/contact`} className="px-8 py-3 rounded-full bg-indigo-600 text-white text-lg">
                                {currentLocale === 'fr' ? 'Parlons-en' : "Let's Talk"}
                            </Link>
                        </li>
                    </ul>
                </motion.div>
            )}
        </>
    );
}
