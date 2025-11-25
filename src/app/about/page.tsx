'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Users, Clock, MapPin } from 'lucide-react';

export default function About() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#BBBF3F] selection:text-black">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#0a0a0a] -z-10" />
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Built to <span className="text-gradient-gold">Last</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Auckland Roofing is a premier, family-owned roofing contractor specializing in residential and light commercial roofing solutions.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-square rounded-2xl overflow-hidden glass-panel glow-border">
                            <Image
                                src="/assets/images/roof_inspection.png"
                                alt="David Chen inspecting a roof"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    Established in 2015 by Master Roofer David Chen, our company has built a reputation for integrity, quality craftsmanship, and reliable service.
                                </p>
                                <p>
                                    We are committed to protecting your most valuable asset—your home—with durable, weather-tight roofing systems and exceptional customer care.
                                </p>
                                <p>
                                    What started as a small team has grown into one of Auckland's most trusted roofing specialists, serving the entire Greater Auckland Region from our Penrose headquarters.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mt-10">
                                <div className="p-4 glass-panel rounded-xl">
                                    <h3 className="text-3xl font-bold text-[#BBBF3F] mb-1">10+</h3>
                                    <p className="text-sm text-gray-400">Years Experience</p>
                                </div>
                                <div className="p-4 glass-panel rounded-xl">
                                    <h3 className="text-3xl font-bold text-[#BBBF3F] mb-1">500+</h3>
                                    <p className="text-sm text-gray-400">Projects Completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-20 bg-[#0f172a]/50">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="glass-panel p-8 rounded-xl hover:border-[#BBBF3F]/50 transition-colors">
                            <Shield className="w-10 h-10 text-[#BBBF3F] mb-6" />
                            <h3 className="text-xl font-bold mb-4">Integrity First</h3>
                            <p className="text-gray-400">
                                We believe in honest advice and transparent pricing. No hidden costs, no unnecessary work. Just straight-up reliable service.
                            </p>
                        </div>
                        <div className="glass-panel p-8 rounded-xl hover:border-[#BBBF3F]/50 transition-colors">
                            <Users className="w-10 h-10 text-[#BBBF3F] mb-6" />
                            <h3 className="text-xl font-bold mb-4">Family Values</h3>
                            <p className="text-gray-400">
                                As a family-owned business, we treat every client like a neighbor. We take personal pride in every job we sign off on.
                            </p>
                        </div>
                        <div className="glass-panel p-8 rounded-xl hover:border-[#BBBF3F]/50 transition-colors">
                            <Clock className="w-10 h-10 text-[#BBBF3F] mb-6" />
                            <h3 className="text-xl font-bold mb-4">Reliability</h3>
                            <p className="text-gray-400">
                                We show up when we say we will. Our team respects your time and your property, ensuring a smooth, stress-free process.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">Meet the Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div className="glass-panel p-6 rounded-2xl text-center group hover:border-[#BBBF3F]/50 transition-colors">
                            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-[#BBBF3F]/20 group-hover:border-[#BBBF3F] transition-colors">
                                <Image
                                    src="/assets/images/roof_inspection.png"
                                    alt="David Chen"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-1">David Chen</h3>
                            <p className="text-[#BBBF3F] font-medium mb-4">Founder & Master Roofer</p>
                            <p className="text-gray-400 text-sm">
                                With over 15 years in the industry, David leads the team with a focus on technical excellence and safety.
                            </p>
                        </div>

                        <div className="glass-panel p-6 rounded-2xl text-center group hover:border-[#BBBF3F]/50 transition-colors">
                            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-[#BBBF3F]/20 group-hover:border-[#BBBF3F] transition-colors">
                                {/* Using a placeholder or reusing an image as requested if specific one not available */}
                                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                                    <span className="text-4xl">SC</span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-1">Sarah Chen</h3>
                            <p className="text-[#BBBF3F] font-medium mb-4">Operations Manager</p>
                            <p className="text-gray-400 text-sm">
                                Sarah ensures every project runs on schedule and that our clients are kept in the loop every step of the way.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
