'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, AlertCircle, Calculator } from 'lucide-react';

export default function Pricing() {
    const pricingItems = [
        {
            service: 'Standard Roof Repair',
            price: '$350 – $800',
            scope: 'Minor leak, replacement of 2-3 metal sheets/tiles, flashing touch-up.',
            notes: 'Includes call-out fee and initial inspection.',
            highlight: false,
        },
        {
            service: 'Residential Re-Roof',
            price: '$18,000 – $25,000',
            scope: 'Standard 3-bedroom home (approx. 120-150 sq. meters) with Long Run Metal.',
            notes: 'Includes scaffold, disposal, and 10-year warranty.',
            highlight: true,
        },
        {
            service: 'Roof Wash & Moss Treatment',
            price: '$450 – $700',
            scope: 'Single-storey, average size concrete tile roof.',
            notes: 'Protects tiles and extends roof life.',
            highlight: false,
        },
        {
            service: 'Gutter/Spouting Replacement',
            price: '$75 – $120',
            unit: 'per meter',
            scope: 'Per meter run of standard PVC spouting.',
            notes: 'Price varies by material (PVC vs. Metal).',
            highlight: false,
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
                        Transparent <span className="text-gradient-gold">Pricing</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Honest estimates for quality work. No hidden fees, just professional service you can trust.
                    </p>
                </div>
            </section>

            {/* Pricing Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">

                    {/* Disclaimer */}
                    <div className="mb-12 p-6 bg-[#BBBF3F]/10 border border-[#BBBF3F]/20 rounded-xl flex gap-4 items-start max-w-4xl mx-auto">
                        <AlertCircle className="w-6 h-6 text-[#BBBF3F] shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-white mb-2">Important Pricing Information</h3>
                            <p className="text-gray-300 text-sm">
                                All prices below are <strong>estimates only</strong> and subject to on-site inspection, roof pitch, accessibility, and final material selection. Prices are in NZD and exclude GST.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {pricingItems.map((item, index) => (
                            <div
                                key={index}
                                className={`glass-panel p-8 rounded-2xl relative group hover:border-[#BBBF3F]/50 transition-all duration-300 ${item.highlight ? 'border-[#BBBF3F]/50 shadow-[0_0_30px_rgba(187,191,63,0.1)]' : ''}`}
                            >
                                {item.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#BBBF3F] text-black font-bold px-4 py-1 rounded-full text-sm">
                                        Most Popular
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold mb-4">{item.service}</h3>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-[#BBBF3F]">{item.price}</span>
                                    {item.unit && <span className="text-gray-400 text-lg"> {item.unit}</span>}
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex gap-3">
                                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                            <Calculator className="w-3 h-3 text-white" />
                                        </div>
                                        <div>
                                            <span className="text-sm text-gray-400 block mb-1">Scope</span>
                                            <p className="text-gray-200">{item.scope}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-6 h-6 rounded-full bg-[#BBBF3F]/20 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 text-[#BBBF3F]" />
                                        </div>
                                        <div>
                                            <span className="text-sm text-gray-400 block mb-1">Includes</span>
                                            <p className="text-gray-200">{item.notes}</p>
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    href="/#booking"
                                    className={`block w-full py-3 rounded-lg font-bold text-center transition-colors ${item.highlight
                                            ? 'bg-[#BBBF3F] text-black hover:bg-[#F2EC91]'
                                            : 'bg-white/10 text-white hover:bg-white/20'
                                        }`}
                                >
                                    Get Exact Quote
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#0f172a] relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a custom quote?</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Every roof is unique. Book a free on-site inspection for an accurate assessment and fixed-price quote.
                    </p>
                    <Link
                        href="/#booking"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-[#BBBF3F] to-[#F2EC91] text-black font-bold rounded-full hover:scale-105 transition-transform"
                    >
                        Schedule Inspection
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
