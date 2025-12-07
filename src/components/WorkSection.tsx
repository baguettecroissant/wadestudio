'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowUpRight, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const projects = [
    {
        title: "FinanceFlow",
        category: "Fintech SaaS",
        description: "A complete financial dashboard for modern startups. Real-time analytics, AI forecasting, and seamless bank integration.",
        color: "from-emerald-500 to-teal-600",
        stats: ["40% Growth", "2M+ Users"]
    },
    {
        title: "NexusHealth",
        category: "MedTech Platform",
        description: "HIPAA-compliant telemedicine platform connecting patients with top specialists. Features secure video, EMR, and scheduling.",
        color: "from-blue-500 to-cyan-600",
        stats: ["Secure", "Real-time"]
    },
    {
        title: "Vantage AI",
        category: "Analytics Tool",
        description: "Predictive analytics engine for e-commerce. Uses machine learning to optimize inventory and marketing spend.",
        color: "from-violet-500 to-indigo-600",
        stats: ["99.9% Accuracy", "AI-Powered"]
    }
];

export default function WorkSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

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
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Selected Work</h2>
                        <p className="text-zinc-400 max-w-md text-lg">
                            We partner with visionary founders to build products that define categories.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors group">
                        View all Case Studies <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
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
                                    {project.stats.map((stat, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full text-xs font-medium border border-indigo-500/20 bg-indigo-500/10 text-indigo-300">{stat}</span>
                                    ))}
                                </div>
                                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                                    {project.description}
                                </p>
                                <button className="flex items-center gap-2 text-white font-medium hover:gap-4 transition-all">
                                    Case Study <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
