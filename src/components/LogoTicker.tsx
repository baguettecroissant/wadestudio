'use client';

import { motion } from 'framer-motion';

const logos = [
    { name: 'Vercel', svg: 'M12 2L2 19.5h20L12 2z' },
    { name: 'Stripe', svg: 'M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z' },
    { name: 'Linear', svg: 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z' },
    { name: 'Figma', svg: 'M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5zM12 2h3.5a3.5 3.5 0 1 1 0 7H12V2zm0 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm-3.5-2A3.5 3.5 0 1 0 12 16H8.5a3.5 3.5 0 0 0 0-7zM5 18.5A3.5 3.5 0 0 1 8.5 15H12v3.5a3.5 3.5 0 1 1-7 0z' },
    { name: 'Supabase', svg: 'M10.7 21c-.3.4-.9.2-.9-.3V11h7.8c.7 0 1.1.8.6 1.3L10.7 21zM13.3 3c.3-.4.9-.2.9.3V13H6.4c-.7 0-1.1-.8-.6-1.3L13.3 3z' },
    { name: 'Next.js', svg: 'M11.5 0C5.149 0 0 5.149 0 11.5S5.149 23 11.5 23 23 17.851 23 11.5 17.851 0 11.5 0zm4.17 17.29l-6.62-9.335v6.955H7.85V5.71h1.24l6.5 9.165V5.71h1.24v11.58h-1.16z' },
];

export default function LogoTicker() {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 mb-12">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-sm text-zinc-500 uppercase tracking-widest"
                >
                    Trusted by forward-thinking founders
                </motion.p>
            </div>

            {/* Logo scroll */}
            <div className="relative">
                {/* Gradient masks */}
                <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10" />
                <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10" />

                <motion.div
                    className="flex gap-16 items-center"
                    animate={{ x: [0, -1056] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 20,
                            ease: 'linear',
                        },
                    }}
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <div
                            key={`${logo.name}-${index}`}
                            className="flex items-center gap-3 opacity-40 hover:opacity-70 transition-opacity shrink-0"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="w-6 h-6 fill-current text-zinc-400"
                            >
                                <path d={logo.svg} />
                            </svg>
                            <span className="text-zinc-400 font-medium whitespace-nowrap">
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
