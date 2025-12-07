'use client';

import { motion } from 'framer-motion';
import { Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative bg-zinc-950 pt-20 pb-10 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 -z-10" />

            <div className="container mx-auto px-4">
                {/* Giant CTA */}
                <div className="mb-24 border-b border-zinc-800 pb-12">
                    <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-bold font-heading leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 mb-8 opacity-90 transition-opacity hover:opacity-100 cursor-default">
                        LET'S TALK
                    </h2>
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                        <p className="text-xl md:text-2xl text-zinc-400 max-w-xl">
                            Have a project in mind? We'd love to hear about it.
                            Let's build something amazing together.
                        </p>
                        <button className="group px-8 py-4 rounded-full bg-indigo-600 text-white font-bold text-lg flex items-center gap-2 hover:bg-indigo-500 transition-all shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.6)]">
                            Start a Project <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div>
                        <h3 className="font-bold text-white mb-4">Sitemap</h3>
                        <ul className="space-y-2 text-zinc-400">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Home</a></li>
                            <li><a href="#works" className="hover:text-indigo-400 transition-colors">Work</a></li>
                            <li><a href="#services" className="hover:text-indigo-400 transition-colors">Services</a></li>
                            <li><a href="#process" className="hover:text-indigo-400 transition-colors">Process</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-white mb-4">Socials</h3>
                        <ul className="space-y-2 text-zinc-400">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Twitter / X</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Dribbble</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-white mb-4">Legal</h3>
                        <ul className="space-y-2 text-zinc-400">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-white mb-4">Location</h3>
                        <p className="text-zinc-400">
                            San Francisco, CA<br />
                            Available Worldwide
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800 text-zinc-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} Wadestudio. All rights reserved.</p>
                    <p className="flex items-center gap-1">Designed & Built with <span className="text-red-500">♥</span> by Wadestudio</p>
                </div>
            </div>
        </footer>
    );
}
