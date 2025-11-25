'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Check } from 'lucide-react';

export default function Services() {
    const services = [
        {
            id: 'new-roofing',
            title: 'New Roofing',
            description: 'Expert installation for new builds and extensions. We work with architects and builders to deliver stunning, durable roofs.',
            features: ['Long Run Metal', 'Asphalt Shingles', 'Corrugated Iron', '10-Year Warranty'],
            image: '/assets/images/roof_installation.png',
        },
        {
            id: 're-roofing',
            title: 'Re-Roofing',
            description: 'Transform your home with a complete roof replacement. We handle everything from removal to final inspection.',
            features: ['Decramastic Replacement', 'Tile Conversion', 'Asbestos Removal', 'Insulation Upgrades'],
            image: '/assets/images/roof_repair.png',
        },
        {
            id: 'repairs',
            title: 'Repairs & Maintenance',
            description: 'Fast, effective repairs to stop leaks and prevent further damage. Emergency services available.',
            features: ['Leak Detection', 'Flashing Repairs', 'Storm Damage', 'Moss Treatment'],
            image: '/assets/images/roof_inspection.png',
        },
        {
            id: 'gutters',
            title: 'Gutters & Spouting',
            description: 'Protect your foundation with properly installed guttering systems. Repair, replacement, and cleaning.',
            features: ['PVC & Metal Options', 'Internal Gutters', 'Downpipes', 'Leaf Guards'],
            image: '/assets/images/gutter_services.png',
        },
    ];

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#BBBF3F] selection:text-black">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#0a0a0a] -z-10" />
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Our <span className="text-gradient-gold">Services</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Comprehensive roofing solutions tailored to the unique needs of Auckland homes and businesses.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="space-y-24">
                        {services.map((service, index) => (
                            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="flex-1 relative aspect-video w-full rounded-2xl overflow-hidden glass-panel glow-border group">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                </div>

                                <div className="flex-1 space-y-6">
                                    <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        {service.description}
                                    </p>

                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3 text-gray-400">
                                                <div className="w-6 h-6 rounded-full bg-[#BBBF3F]/20 flex items-center justify-center shrink-0">
                                                    <Check className="w-3 h-3 text-[#BBBF3F]" />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-4">
                                        <Link
                                            href={`/services/${service.id}`}
                                            className="inline-flex items-center gap-2 text-[#BBBF3F] font-bold hover:gap-3 transition-all"
                                        >
                                            View Details <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#0f172a] relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Contact us today for a free, no-obligation quote. We'll inspect your roof and provide a detailed assessment.
                    </p>
                    <Link
                        href="/#booking"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-[#BBBF3F] to-[#F2EC91] text-black font-bold rounded-full hover:scale-105 transition-transform"
                    >
                        Book Free Inspection
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
