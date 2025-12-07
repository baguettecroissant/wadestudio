'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code2, Sparkles, Zap, Layers } from 'lucide-react';
import { useRef } from 'react';

export default function HeroV2() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const rotate = useTransform(scrollY, [0, 500], [0, 10]);

    return (
        <section ref={containerRef} className="relative min-h-[110vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-violet-600/10 blur-[100px] rounded-full mix-blend-screen" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Text Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md mb-8"
                    >
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        <span className="text-xs font-medium text-indigo-300 tracking-wide uppercase">V2.0 is Live</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6 font-heading"
                    >
                        Crafting <br />
                        <span className="relative inline-block">
                            <span className="gradient-text relative z-10">Digital</span>
                            <motion.svg
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="absolute -bottom-2 left-0 w-full h-3 text-indigo-500 -z-0"
                                viewBox="0 0 100 10"
                                preserveAspectRatio="none"
                            >
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </motion.svg>
                        </span> <br />
                        Future.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg md:text-xl text-zinc-400 max-w-xl mb-10 leading-relaxed"
                    >
                        We build high-performance SaaS platforms and immersive web experiences that redefine industry standards.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <button className="group relative px-8 py-4 rounded-full bg-white text-zinc-950 font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                            <span className="relative flex items-center gap-2">
                                Start Building <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        <button className="px-8 py-4 rounded-full border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm text-white font-medium text-lg hover:bg-zinc-900 transition-colors flex items-center gap-2">
                            <Layers size={20} className="text-zinc-400" />
                            View Projects
                        </button>
                    </motion.div>
                </div>

                {/* Visual Content - 3D Card Stack */}
                <div className="hidden lg:block relative h-[600px] w-full perspective-[2000px]">
                    <motion.div
                        style={{ y: y1, rotateX: rotate, rotateY: -10 }}
                        className="absolute right-0 top-20 w-[450px] aspect-[4/3] rounded-2xl border border-zinc-800 bg-zinc-900/90 backdrop-blur-xl shadow-2xl p-6 z-10"
                    >
                        {/* Mock UI Header */}
                        <div className="flex items-center gap-2 mb-6 border-b border-zinc-800 pb-4">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                            </div>
                            <div className="flex-1 text-center">
                                <div className="inline-block px-3 py-1 rounded-full bg-zinc-800 text-[10px] text-zinc-400 font-mono">dashboard.tsx</div>
                            </div>
                        </div>
                        {/* Mock UI Body */}
                        <div className="space-y-3">
                            <div className="h-24 w-full rounded-lg bg-zinc-800/50 animate-pulse" />
                            <div className="grid grid-cols-2 gap-3">
                                <div className="h-32 rounded-lg bg-zinc-800/30" />
                                <div className="h-32 rounded-lg bg-zinc-800/30" />
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-8 top-1/2 -translate-y-1/2 p-4 rounded-xl bg-indigo-600 shadow-xl border border-indigo-400/20 backdrop-blur-md"
                        >
                            <Sparkles className="text-white w-6 h-6" />
                        </motion.div>
                    </motion.div>

                    {/* Background Card */}
                    <motion.div
                        style={{ y: y2, scale: 0.9, opacity: 0.6 }}
                        className="absolute right-20 top-0 w-[450px] aspect-[4/3] rounded-2xl border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm -z-10"
                    />
                </div>
            </div>

            {/* Scroll Mouse */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-6 h-10 border-2 border-zinc-800 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-2 bg-indigo-500 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
