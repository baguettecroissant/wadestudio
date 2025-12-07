'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
    const titleWords = ['Turn', 'Ideas', 'into', 'SaaS', 'Empires.'];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
            {/* Animated gradient blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[120px] animate-gradient-shift"
                    animate={{
                        x: [0, 100, -50, 0],
                        y: [0, -50, 100, 0],
                        scale: [1, 1.2, 0.9, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]"
                    animate={{
                        x: [0, -80, 60, 0],
                        y: [0, 60, -80, 0],
                        scale: [1, 0.9, 1.1, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-500/20 rounded-full blur-[80px]"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
                >
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-zinc-400">Available for new projects</span>
                </motion.div>

                {/* Main Title */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
                    {titleWords.map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`inline-block mr-4 ${word === 'SaaS' || word === 'Empires.'
                                    ? 'gradient-text'
                                    : 'text-white'
                                }`}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12"
                >
                    Wadestudio builds scalable MVPs with world-class design.
                    <br className="hidden md:block" />
                    We turn your vision into products that users love.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.a
                        href="#contact"
                        className="group px-8 py-4 bg-white text-zinc-900 rounded-full font-semibold flex items-center gap-2 btn-shine"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Project
                        <ArrowRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </motion.a>

                    <motion.a
                        href="#works"
                        className="group px-8 py-4 rounded-full font-semibold flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Play size={16} className="text-indigo-400" />
                        View Work
                    </motion.a>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                    className="absolute top-20 right-10 md:right-20 w-16 h-16 glass rounded-2xl flex items-center justify-center animate-float"
                    style={{ animationDelay: '0s' }}
                >
                    <span className="text-2xl">⚡</span>
                </motion.div>

                <motion.div
                    className="absolute bottom-32 left-10 md:left-20 w-14 h-14 glass rounded-2xl flex items-center justify-center animate-float"
                    style={{ animationDelay: '2s' }}
                >
                    <span className="text-2xl">🚀</span>
                </motion.div>

                <motion.div
                    className="absolute top-40 left-[15%] w-12 h-12 glass rounded-xl flex items-center justify-center animate-float hidden md:flex"
                    style={{ animationDelay: '1s' }}
                >
                    <span className="text-xl">✨</span>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-zinc-600 flex justify-center pt-2"
                >
                    <motion.div className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
