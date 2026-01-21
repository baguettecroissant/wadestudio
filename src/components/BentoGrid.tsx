'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code2, Palette, Zap, Database, Layers, Rocket } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
}

function TiltCard({ children, className = '', glowColor = 'indigo' }: CardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const glowColors: Record<string, string> = {
        indigo: 'rgba(99, 102, 241, 0.15)',
        purple: 'rgba(168, 85, 247, 0.15)',
        emerald: 'rgba(52, 211, 153, 0.15)',
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative group ${className}`}
        >
            <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: glowColors[glowColor] }}
            />
            <div className="relative h-full glass-strong rounded-3xl p-6 md:p-8 overflow-hidden glow-border">
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColors[glowColor]}, transparent 40%)`,
                    }}
                />
                <div style={{ transform: 'translateZ(40px)' }}>{children}</div>
            </div>
        </motion.div>
    );
}

export default function BentoGrid() {
    const t = useTranslations('Services');

    return (
        <section id="services" className="py-24 md:py-32 relative">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
                        {t('label')}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                        {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {/* Card 1 - Large */}
                    <TiltCard className="md:col-span-2 md:row-span-2" glowColor="indigo">
                        <div className="h-full flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center">
                                    <Code2 className="text-indigo-400" size={24} />
                                </div>
                                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                                    <Database className="text-emerald-400" size={24} />
                                </div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                {t('saas.title')}
                            </h3>
                            <p className="text-zinc-400 mb-8 flex-grow">
                                {t('saas.description')}
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="glass rounded-xl p-4">
                                    <span className="text-3xl font-bold gradient-text">10+</span>
                                    <p className="text-sm text-zinc-500 mt-1">{t('saas.stat1')}</p>
                                </div>
                                <div className="glass rounded-xl p-4">
                                    <span className="text-3xl font-bold gradient-text">100%</span>
                                    <p className="text-sm text-zinc-500 mt-1">{t('saas.stat2')}</p>
                                </div>
                            </div>
                        </div>
                    </TiltCard>

                    {/* Card 2 - Small */}
                    <TiltCard glowColor="purple">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                                <Palette className="text-purple-400" size={20} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t('site.title')}</h3>
                        <p className="text-zinc-400 text-sm">
                            {t('site.description')}
                        </p>
                        <div className="mt-6 flex gap-2">
                            <div className="w-8 h-8 rounded-lg bg-purple-500" />
                            <div className="w-8 h-8 rounded-lg bg-indigo-500" />
                            <div className="w-8 h-8 rounded-lg bg-violet-500" />
                            <div className="w-8 h-8 rounded-lg bg-fuchsia-500" />
                        </div>
                    </TiltCard>

                    {/* Card 3 - Medium */}
                    <TiltCard glowColor="emerald">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                                <Zap className="text-emerald-400" size={20} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t('seo.title')}</h3>
                        <p className="text-zinc-400 text-sm mb-6">
                            {t('seo.description')}
                        </p>
                        <div className="glass rounded-xl p-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-zinc-500">{t('seo.label')}</span>
                                <span className="text-emerald-400 font-bold">100/100</span>
                            </div>
                            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                                />
                            </div>
                        </div>
                    </TiltCard>

                    {/* Card 4 */}
                    <TiltCard glowColor="indigo">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                                <Layers className="text-indigo-400" size={20} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t('api.title')}</h3>
                        <p className="text-zinc-400 text-sm">
                            {t('api.description')}
                        </p>
                    </TiltCard>

                    {/* Card 5 */}
                    <TiltCard glowColor="purple">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                                <Rocket className="text-purple-400" size={20} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t('mvp.title')}</h3>
                        <p className="text-zinc-400 text-sm">
                            {t('mvp.description')}
                        </p>
                    </TiltCard>
                </div>
            </div>
        </section>
    );
}
