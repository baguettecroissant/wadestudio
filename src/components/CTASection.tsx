'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function CTASection() {
    const t = useTranslations('CTA');

    return (
        <section id="contact" className="py-24 md:py-32 relative">
            <div className="max-w-5xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Background glow */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-indigo-600/20 animate-pulse-glow" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-[100px]" />
                    </div>

                    {/* Content */}
                    <div className="relative glass-strong rounded-3xl p-8 md:p-16 text-center overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 md:top-8 md:right-8">
                            <Sparkles className="text-indigo-400/50" size={24} />
                        </div>
                        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
                            <Sparkles className="text-purple-400/50" size={24} />
                        </div>

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
                        >
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-sm text-zinc-400">{t('badge')}</span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-6xl font-bold mb-6"
                        >
                            {t('title1')} <span className="gradient-text">{t('titleHighlight')}</span>
                            <br />
                            {t('title2')}
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-zinc-400 text-lg max-w-xl mx-auto mb-10"
                        >
                            {t('description')}
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.a
                                href="mailto:hello@wadestudio.com"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-zinc-900 rounded-full font-semibold text-lg btn-shine"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {t('button')}
                                <ArrowRight
                                    size={20}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </motion.a>

                            <p className="text-sm text-zinc-500 mt-4">
                                {t('note')}
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
