'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

const projects = [
    {
        title: "Nailsy.fr",
        category: "SaaS B2B",
        description: {
            fr: "Logiciel de gestion complet pour prothésistes ongulaires. Architecture Laravel/Filament avec automatisation avancée et gestion multi-salons.",
            en: "Complete management software for nail technicians. Laravel/Filament architecture with advanced automation and multi-salon management."
        },
        color: "from-pink-500 to-rose-600",
        stats: ["Laravel/Filament", "B2B SaaS"]
    },
    {
        title: "Poupynails.com",
        category: "Funnel & Formation",
        description: {
            fr: "Écosystème de formation en ligne avec tunnel de vente optimisé, intégration Meta Ads et automatisation email marketing.",
            en: "Online training ecosystem with optimized sales funnel, Meta Ads integration and email marketing automation."
        },
        color: "from-violet-500 to-purple-600",
        stats: { fr: ["Tunnel de vente", "Meta Ads"], en: ["Sales Funnel", "Meta Ads"] }
    },
    {
        title: "Mauritius Insider",
        category: "SEO & Média",
        description: {
            fr: "Portail touristique et d'expatriation dominant les SERPs sur Maurice. Stratégie SEO sémantique et monétisation par affiliation.",
            en: "Tourism and expatriation portal dominating SERPs on Mauritius. Semantic SEO strategy and affiliate monetization."
        },
        color: "from-emerald-500 to-teal-600",
        stats: ["SEO", "Affiliation"]
    }
];

export default function WorkSection() {
    const t = useTranslations('Work');
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Detect locale from pathname
    const locale = typeof window !== 'undefined' && window.location.pathname.startsWith('/en') ? 'en' : 'fr';

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="works" ref={containerRef} className="relative py-32 bg-zinc-950 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-500/5 blur-[100px] rounded-full" />

            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">{t('title')}</h2>
                        <p className="text-zinc-400 max-w-md text-lg">
                            {t('description')}
                        </p>
                    </div>
                    <button className="flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors group">
                        {t('viewAll')} <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>

                <div className="flex flex-col gap-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative grid md:grid-cols-2 gap-8 md:gap-16 items-center"
                        >
                            {/* Visual Side */}
                            <div className={`order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity`} />

                                    {/* Mock UI Element - Simplified */}
                                    <div className="absolute inset-4 rounded-xl bg-zinc-950/50 backdrop-blur-md border border-white/5 p-6 flex flex-col justify-between">
                                        <div className="flex gap-4">
                                            <div className="w-8 h-8 rounded-full bg-white/10" />
                                            <div className="h-2 w-24 bg-white/10 rounded-full mt-3" />
                                        </div>
                                        <div className="space-y-3">
                                            <div className="h-32 w-full bg-white/5 rounded-lg border border-white/5" />
                                            <div className="flex gap-3">
                                                <div className="h-20 flex-1 bg-white/5 rounded-lg border border-white/5" />
                                                <div className="h-20 flex-1 bg-white/5 rounded-lg border border-white/5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className={`order-1 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                                <h3 className="text-3xl font-bold font-heading mb-4 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <span className="px-3 py-1 rounded-full text-xs font-medium border border-zinc-700 bg-zinc-800/50 text-zinc-300 uppercase tracking-wider">{project.category}</span>
                                    {(Array.isArray(project.stats) ? project.stats : (project.stats as Record<string, string[]>)[locale]).map((stat, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full text-xs font-medium border border-indigo-500/20 bg-indigo-500/10 text-indigo-300">{stat}</span>
                                    ))}
                                </div>
                                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                                    {project.description[locale as 'fr' | 'en']}
                                </p>
                                <button className="flex items-center gap-2 text-white font-medium hover:gap-4 transition-all">
                                    {t('caseStudy')} <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
