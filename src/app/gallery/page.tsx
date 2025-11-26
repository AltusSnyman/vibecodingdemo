'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function GalleryPage() {
    const projects = [
        {
            title: 'Modern Metal Roofing',
            location: 'Remuera, Auckland',
            description: 'Sleek dark grey standing seam metal roof for a contemporary home.',
            image: '/assets/images/gallery/modern_metal_roof.png',
        },
        {
            title: 'Classic Terracotta Tile',
            location: 'Mission Bay, Auckland',
            description: 'Traditional terracotta tile roof restoring the character of a classic home.',
            image: '/assets/images/gallery/classic_tile_roof.png',
        },
        {
            title: 'Premium Asphalt Shingle',
            location: 'Albany, North Shore',
            description: 'High-quality charcoal asphalt shingles providing durability and style.',
            image: '/assets/images/gallery/asphalt_shingle_roof.png',
        },
        {
            title: 'Luxury Slate Roof',
            location: 'Herne Bay, Auckland',
            description: 'Magnificent natural slate roof with subtle color variations.',
            image: '/assets/images/gallery/slate_roof_luxury.png',
        },
        {
            title: 'Eco-Friendly Flat Roof',
            location: 'Grey Lynn, Auckland',
            description: 'Modern flat roof system with green roof elements and solar integration.',
            image: '/assets/images/gallery/green_flat_roof.png',
        },
        {
            title: 'Heritage Corrugated Iron',
            location: 'Devonport, Auckland',
            description: 'Classic corrugated iron roof in Pioneer Red for a heritage bungalow.',
            image: '/assets/images/gallery/corrugated_iron_roof.png',
        },
    ];

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#BBBF3F] selection:text-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-32 md:py-48 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/images/gallery/modern_metal_roof.png')] bg-cover bg-center opacity-20 fixed-bg" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]" />

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Our <span className="text-gradient-gold">Masterpieces</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Explore our portfolio of stunning roofing projects across Auckland. From modern metal to classic tile, we deliver excellence in every detail.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-12 pb-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative rounded-2xl overflow-hidden glass-panel border border-white/5 hover:border-[#BBBF3F]/30 transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="aspect-[4/3] relative overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="mb-2">
                                        <span className="text-[#BBBF3F] text-sm font-bold tracking-wider uppercase">{project.location}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#BBBF3F] transition-colors">{project.title}</h3>
                                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 relative overflow-hidden border-t border-white/10">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="glass-panel p-12 rounded-3xl text-center max-w-4xl mx-auto relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#BBBF3F]/10 to-transparent opacity-50" />

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
                            Ready to Transform <span className="text-gradient-gold">Your Roof?</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                            Join hundreds of satisfied Auckland homeowners. Get a free, no-obligation quote for your roofing project today.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center relative z-10">
                            <Link
                                href="/#booking"
                                className="px-8 py-4 bg-gradient-to-r from-[#BBBF3F] to-[#F2EC91] text-black font-bold rounded-full text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(187,191,63,0.3)] flex items-center gap-2"
                            >
                                <Calendar className="w-5 h-5" />
                                Book Free Quote
                            </Link>
                            <Link
                                href="/contact"
                                className="px-8 py-4 glass-panel rounded-full text-white font-bold text-lg hover:bg-white/10 transition-colors flex items-center gap-2"
                            >
                                Contact Us <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
