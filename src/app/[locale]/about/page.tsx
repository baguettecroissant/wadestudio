'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Briefcase, Code2, Rocket, Users, Award, ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

const skills = [
    { name: 'React / Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Product Strategy', level: 90 },
];

export default function AboutPage() {
    const t = useTranslations('About');
    const pathname = usePathname();
    const locale = pathname.startsWith('/en') ? 'en' : 'fr';

    const experiences = locale === 'fr' ? [
        {
            role: 'Founder & Lead Developer',
            company: 'Wade Studio',
            period: '2022 - Present',
            description: 'Création de produits digitaux sur mesure pour startups et entreprises. Spécialisés dans les MVPs, SaaS et applications web haute performance.',
            current: true,
        },
        {
            role: 'SaaS Builder',
            company: 'Projets Personnels',
            period: '2020 - Present',
            description: 'Développement et lancement de plusieurs SaaS générant des revenus récurrents. Focus sur l\'automatisation et les outils B2B.',
            current: true,
        },
        {
            role: 'Freelance Developer',
            company: 'International Clients',
            period: '2018 - 2022',
            description: 'Collaboration avec des clients en France, Maurice et à l\'international sur des projets web complexes.',
            current: false,
        },
    ] : [
        {
            role: 'Founder & Lead Developer',
            company: 'Wade Studio',
            period: '2022 - Present',
            description: 'Creating custom digital products for startups and enterprises. Specialized in MVPs, SaaS and high-performance web applications.',
            current: true,
        },
        {
            role: 'SaaS Builder',
            company: 'Personal Projects',
            period: '2020 - Present',
            description: 'Development and launch of multiple SaaS generating recurring revenue. Focus on automation and B2B tools.',
            current: true,
        },
        {
            role: 'Freelance Developer',
            company: 'International Clients',
            period: '2018 - 2022',
            description: 'Collaboration with clients in France, Mauritius and internationally on complex web projects.',
            current: false,
        },
    ];

    const stats = [
        { value: '50+', labelKey: 'stats.projects', icon: Briefcase },
        { value: '5+', labelKey: 'stats.experience', icon: Calendar },
        { value: '3', labelKey: 'stats.saas', icon: Rocket },
        { value: '98%', labelKey: 'stats.satisfaction', icon: Users },
    ];

    const values = locale === 'fr' ? [
        {
            title: 'Excellence Technique',
            description: 'Code propre, performances optimales, architecture scalable. Chaque ligne compte.',
            icon: Code2,
        },
        {
            title: 'Vision Produit',
            description: 'Au-delà du code : nous pensons business, conversion et expérience utilisateur.',
            icon: Rocket,
        },
        {
            title: 'Partenariat Long Terme',
            description: 'Pas juste un prestataire, mais un partenaire investi dans votre succès.',
            icon: Users,
        },
        {
            title: 'Qualité Premium',
            description: 'Standards élevés, attention aux détails, résultats qui dépassent les attentes.',
            icon: Award,
        },
    ] : [
        {
            title: 'Technical Excellence',
            description: 'Clean code, optimal performance, scalable architecture. Every line counts.',
            icon: Code2,
        },
        {
            title: 'Product Vision',
            description: 'Beyond code: we think business, conversion and user experience.',
            icon: Rocket,
        },
        {
            title: 'Long-Term Partnership',
            description: 'Not just a contractor, but a partner invested in your success.',
            icon: Users,
        },
        {
            title: 'Premium Quality',
            description: 'High standards, attention to detail, results that exceed expectations.',
            icon: Award,
        },
    ];

    return (
        <div className="min-h-screen py-24 px-4">
            {/* Animated background */}
            <div className="fixed inset-0 overflow-hidden -z-10">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px]"
                    animate={{
                        x: [0, 50, -25, 0],
                        y: [0, -25, 50, 0],
                        scale: [1, 1.1, 0.95, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[100px]"
                    animate={{
                        x: [0, -40, 30, 0],
                        y: [0, 30, -40, 0],
                        scale: [1, 0.95, 1.05, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Back link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Link
                        href={`/${locale}`}
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={18} />
                        {t('back')}
                    </Link>
                </motion.div>

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid lg:grid-cols-2 gap-12 items-center mb-24"
                >
                    {/* Profile Image */}
                    <div className="relative order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative aspect-square max-w-md mx-auto"
                        >
                            {/* Decorative elements */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl opacity-10" />

                            {/* Main image container */}
                            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900">
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10" />
                                {/* Placeholder for profile image */}
                                <div className="h-full w-full bg-gradient-to-br from-indigo-900/50 to-purple-900/50 flex items-center justify-center">
                                    <div className="text-9xl font-bold gradient-text">W</div>
                                </div>
                            </div>

                            {/* Floating badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -right-4 -bottom-4 px-6 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl z-20"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-sm font-medium text-white">{t('available')}</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md mb-6"
                        >
                            <MapPin size={14} className="text-indigo-400" />
                            <span className="text-sm text-indigo-300">{t('location')}</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="text-4xl md:text-6xl font-bold mb-6 font-heading"
                        >
                            {t('title')}{' '}
                            <span className="gradient-text">{t('titleHighlight')}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-zinc-400 mb-6 leading-relaxed"
                        >
                            {t('description1')}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            className="text-zinc-500 mb-8"
                        >
                            {t('description2')}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link
                                href={`/${locale}/contact`}
                                className="px-6 py-3 bg-white text-zinc-900 rounded-full font-semibold hover:bg-zinc-200 transition-colors"
                            >
                                {t('cta')}
                            </Link>
                            <div className="flex items-center gap-3">
                                <a
                                    href="https://x.com/wadestudio"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                                >
                                    <Twitter size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                                >
                                    <Linkedin size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                                >
                                    <Github size={18} />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.labelKey}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            className="glass rounded-2xl p-6 text-center group hover:border-indigo-500/30 transition-all"
                        >
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <stat.icon className="text-indigo-400" size={24} />
                            </div>
                            <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                            <p className="text-sm text-zinc-400">{t(stat.labelKey)}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-24"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {t('valuesTitle')} <span className="gradient-text">{t('valuesTitleHighlight')}</span>
                        </h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            {t('valuesDescription')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="glass rounded-2xl p-8 group hover:border-indigo-500/30 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <value.icon className="text-indigo-400" size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                                        <p className="text-zinc-400 leading-relaxed">{value.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-24"
                >
                    <div className="glass rounded-2xl p-8">
                        <h2 className="text-2xl font-bold mb-8">{t('skills')}</h2>
                        <div className="space-y-6">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                >
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium text-white">{skill.name}</span>
                                        <span className="text-indigo-400">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Experience Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mb-24"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {t('journeyTitle')} <span className="gradient-text">{t('journeyTitleHighlight')}</span>
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.role}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                                className="glass rounded-2xl p-8 relative overflow-hidden group hover:border-indigo-500/30 transition-all"
                            >
                                {exp.current && (
                                    <div className="absolute top-4 right-4">
                                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-xs font-medium text-green-400">{t('current')}</span>
                                        </div>
                                    </div>
                                )}
                                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                                        <span className="text-indigo-400">{exp.company}</span>
                                        <span>•</span>
                                        <span>{exp.period}</span>
                                    </div>
                                </div>
                                <p className="text-zinc-400">{exp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="glass rounded-3xl p-12 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            {t('collab')} <span className="gradient-text">{t('collabHighlight')}</span> ?
                        </h2>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
                            {t('collabDescription')}
                        </p>
                        <Link
                            href={`/${locale}/contact`}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-900 rounded-full font-bold text-lg hover:bg-zinc-200 transition-colors"
                        >
                            {t('cta')}
                            <ExternalLink size={18} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
