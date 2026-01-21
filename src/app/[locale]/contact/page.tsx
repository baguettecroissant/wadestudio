'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function ContactPage() {
    const t = useTranslations('Contact');
    const pathname = usePathname();
    const locale = pathname.startsWith('/en') ? 'en' : 'fr';

    const prestations = locale === 'fr' ? [
        { id: 'mvp', label: 'MVP / Application Web', icon: '🚀' },
        { id: 'saas', label: 'Plateforme SaaS', icon: '☁️' },
        { id: 'mobile', label: 'Application Mobile', icon: '📱' },
        { id: 'design', label: 'UI/UX Design', icon: '🎨' },
        { id: 'ecommerce', label: 'E-commerce', icon: '🛒' },
        { id: 'other', label: 'Autre', icon: '💡' },
    ] : [
        { id: 'mvp', label: 'MVP / Web App', icon: '🚀' },
        { id: 'saas', label: 'SaaS Platform', icon: '☁️' },
        { id: 'mobile', label: 'Mobile App', icon: '📱' },
        { id: 'design', label: 'UI/UX Design', icon: '🎨' },
        { id: 'ecommerce', label: 'E-commerce', icon: '🛒' },
        { id: 'other', label: 'Other', icon: '💡' },
    ];

    const budgets = [
        { id: 'small', label: '5K - 15K €' },
        { id: 'medium', label: '15K - 30K €' },
        { id: 'large', label: '30K - 50K €' },
        { id: 'enterprise', label: '50K+ €' },
    ];

    const durations = locale === 'fr' ? [
        { id: '1month', label: '1 mois' },
        { id: '2-3months', label: '2-3 mois' },
        { id: '3-6months', label: '3-6 mois' },
        { id: '6months+', label: '6+ mois' },
    ] : [
        { id: '1month', label: '1 month' },
        { id: '2-3months', label: '2-3 months' },
        { id: '3-6months', label: '3-6 months' },
        { id: '6months+', label: '6+ months' },
    ];

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        prestation: '',
        budget: '',
        duration: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (field: string, value: string) => {
        setFormState(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-green-600/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-[100px]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 text-center max-w-md"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', delay: 0.2 }}
                        className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8"
                    >
                        <CheckCircle className="w-12 h-12 text-green-400" />
                    </motion.div>

                    <h1 className="text-4xl font-bold mb-4">{t('success')}</h1>
                    <p className="text-zinc-400 mb-8">
                        {t('successDescription')}
                    </p>

                    <Link
                        href={`/${locale}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 rounded-full font-semibold hover:bg-zinc-200 transition-colors"
                    >
                        <ArrowLeft size={18} />
                        {t('backHome')}
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-24 px-4">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
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

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        {t('title')}{' '}
                        <span className="gradient-text">{t('titleHighlight')}</span>
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-1 space-y-6"
                    >
                        <div className="glass rounded-2xl p-6">
                            <h3 className="text-xl font-semibold mb-6">{t('contactInfo')}</h3>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                                        <Mail className="text-indigo-400" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-400">{t('email')}</p>
                                        <p className="text-white">contact@wadestudio.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                                        <Phone className="text-purple-400" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-400">{t('phone')}</p>
                                        <p className="text-white">+33 1 23 45 67 89</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                                        <MapPin className="text-cyan-400" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-400">{t('locationLabel')}</p>
                                        <p className="text-white">Paris, France</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick stats */}
                        <div className="glass rounded-2xl p-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4">
                                    <p className="text-3xl font-bold gradient-text">50+</p>
                                    <p className="text-sm text-zinc-400">{t('stats.projects')}</p>
                                </div>
                                <div className="text-center p-4">
                                    <p className="text-3xl font-bold gradient-text">98%</p>
                                    <p className="text-sm text-zinc-400">{t('stats.satisfaction')}</p>
                                </div>
                                <div className="text-center p-4">
                                    <p className="text-3xl font-bold gradient-text">24h</p>
                                    <p className="text-sm text-zinc-400">{t('stats.response')}</p>
                                </div>
                                <div className="text-center p-4">
                                    <p className="text-3xl font-bold gradient-text">5★</p>
                                    <p className="text-sm text-zinc-400">{t('stats.rating')}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-2"
                    >
                        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
                            {/* Personal Info */}
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                                        {t('formName')} *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none text-white placeholder:text-zinc-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                                        {t('formEmail')} *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none text-white placeholder:text-zinc-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                                        {t('formCompany')}
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formState.company}
                                        onChange={handleInputChange}
                                        placeholder={t('formCompanyPlaceholder')}
                                        className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none text-white placeholder:text-zinc-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                                        {t('formPhone')}
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formState.phone}
                                        onChange={handleInputChange}
                                        placeholder="+33 6 12 34 56 78"
                                        className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none text-white placeholder:text-zinc-500"
                                    />
                                </div>
                            </div>

                            {/* Prestation Selection */}
                            <div className="mb-8">
                                <label className="block text-sm font-medium text-zinc-300 mb-4">
                                    {t('prestationType')} *
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {prestations.map((item) => (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => handleSelectChange('prestation', item.id)}
                                            className={`p-4 rounded-xl border transition-all text-left ${formState.prestation === item.id
                                                ? 'border-indigo-500 bg-indigo-500/20 text-white'
                                                : 'border-zinc-700 bg-zinc-900/30 text-zinc-400 hover:border-zinc-600'
                                                }`}
                                        >
                                            <span className="text-2xl mb-2 block">{item.icon}</span>
                                            <span className="text-sm font-medium">{item.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Budget Selection */}
                            <div className="mb-8">
                                <label className="block text-sm font-medium text-zinc-300 mb-4">
                                    {t('budget')} *
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {budgets.map((item) => (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => handleSelectChange('budget', item.id)}
                                            className={`py-3 px-4 rounded-xl border transition-all text-center ${formState.budget === item.id
                                                ? 'border-indigo-500 bg-indigo-500/20 text-white'
                                                : 'border-zinc-700 bg-zinc-900/30 text-zinc-400 hover:border-zinc-600'
                                                }`}
                                        >
                                            <span className="text-sm font-medium">{item.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Duration Selection */}
                            <div className="mb-8">
                                <label className="block text-sm font-medium text-zinc-300 mb-4">
                                    {t('duration')}
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {durations.map((item) => (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => handleSelectChange('duration', item.id)}
                                            className={`py-3 px-4 rounded-xl border transition-all text-center ${formState.duration === item.id
                                                ? 'border-indigo-500 bg-indigo-500/20 text-white'
                                                : 'border-zinc-700 bg-zinc-900/30 text-zinc-400 hover:border-zinc-600'
                                                }`}
                                        >
                                            <span className="text-sm font-medium">{item.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Message */}
                            <div className="mb-8">
                                <label className="block text-sm font-medium text-zinc-300 mb-2">
                                    {t('projectDescription')} *
                                </label>
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    placeholder={t('projectPlaceholder')}
                                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none text-white placeholder:text-zinc-500 resize-none"
                                />
                            </div>

                            {/* Submit */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-white text-zinc-900 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed btn-shine"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-zinc-400 border-t-zinc-900 rounded-full animate-spin" />
                                        {t('submitting')}
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        {t('submit')}
                                    </>
                                )}
                            </motion.button>

                            <p className="text-center text-sm text-zinc-500 mt-4">
                                {t('consent')}
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
