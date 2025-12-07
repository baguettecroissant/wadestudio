'use client';

import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "CTO at FinScale",
        text: "Wadestudio didn't just build an MVP, they architected a scalable engine for our growth. The attention to detail is unmatched.",
        image: "S"
    },
    {
        name: "David Chen",
        role: "Founder, HealthNova",
        text: "The speed and quality of delivery was incredible. They understood our vision better than we did.",
        image: "D"
    },
    {
        name: "Elena Rodriguez",
        role: "VP Product, DataSights",
        text: "World-class design combined with rock-solid engineering. A rare find in the agency world.",
        image: "E"
    },
    {
        name: "Marcus Johnson",
        role: "CEO, TechFlow",
        text: "They transformed our clunky prototype into a sleek, market-ready SaaS product in just 8 weeks.",
        image: "M"
    }
];

export default function TestimonialTicker() {
    return (
        <section className="py-24 bg-zinc-950 overflow-hidden border-t border-zinc-900 border-b">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Trusted by Industry Leaders</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">Don't just take our word for it. Here's what founders say about working with us.</p>
            </div>

            <div className="relative flex overflow-hidden group">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10" />

                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                    className="flex gap-8 whitespace-nowrap px-4"
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-[400px] flex-shrink-0 p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm group-hover:border-indigo-500/30 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-lg font-bold text-white">
                                    {testimonial.image}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{testimonial.name}</div>
                                    <div className="text-sm text-zinc-400">{testimonial.role}</div>
                                </div>
                            </div>
                            <p className="text-zinc-300 text-lg leading-relaxed whitespace-normal">
                                "{testimonial.text}"
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
