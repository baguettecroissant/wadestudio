'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageSquare, Pencil, Code, Rocket, CheckCircle } from 'lucide-react';

const steps = [
    {
        icon: MessageSquare,
        title: 'Discovery Call',
        description: 'We start with understanding your vision, goals, and requirements in detail.',
        duration: '30 min call',
    },
    {
        icon: Pencil,
        title: 'Design & Prototype',
        description: 'Our designers create stunning UI/UX prototypes in Figma for your approval.',
        duration: '1-2 weeks',
    },
    {
        icon: Code,
        title: 'Development',
        description: 'We build your product using cutting-edge technologies with clean, maintainable code.',
        duration: '4-8 weeks',
    },
    {
        icon: Rocket,
        title: 'Launch & Support',
        description: 'We handle deployment, monitoring, and provide ongoing support and maintenance.',
        duration: 'Ongoing',
    },
];

export default function ProcessSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

    return (
        <section className="py-24 md:py-32 relative" ref={containerRef}>
            <div className="max-w-4xl mx-auto px-4">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
                        Our Process
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                        How we <span className="gradient-text">work</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        A streamlined process designed to get you from idea to launch as quickly as possible.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line background */}
                    <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-zinc-800" />

                    {/* Animated glowing line */}
                    <motion.div
                        className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500"
                        style={{ height: lineHeight }}
                    >
                        <div className="absolute inset-0 blur-sm bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500" />
                    </motion.div>

                    {/* Steps */}
                    <div className="space-y-16 md:space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Icon */}
                                <div className="relative z-10 flex-shrink-0">
                                    <div className="w-16 h-16 rounded-2xl glass-strong flex items-center justify-center group">
                                        <step.icon className="text-indigo-400 group-hover:text-indigo-300 transition-colors" size={28} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div
                                    className={`flex-1 glass-strong rounded-2xl p-6 md:max-w-md ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                                        }`}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
                                            Step {index + 1}
                                        </span>
                                        <span className="text-xs text-zinc-500">{step.duration}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-zinc-400 text-sm">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Final checkmark */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative z-10 flex justify-center mt-16"
                    >
                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                            <CheckCircle className="text-white" size={36} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
