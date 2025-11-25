'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#BBBF3F] selection:text-black">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#0a0a0a] -z-10" />
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Get in <span className="text-gradient-gold">Touch</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We're here to help with all your roofing needs. Contact us for a free quote or emergency repairs.
                    </p>
                </div>
            </section>

            {/* Contact Info & Map */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Info Cards */}
                        <div className="space-y-8">
                            <div className="glass-panel p-8 rounded-2xl flex items-start gap-6 hover:border-[#BBBF3F]/50 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-[#BBBF3F]/10 flex items-center justify-center shrink-0 border border-[#BBBF3F]/20">
                                    <Phone className="w-6 h-6 text-[#BBBF3F]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Phone</h3>
                                    <p className="text-gray-400 mb-2">Speak directly to our team.</p>
                                    <a href="tel:098891025" className="text-2xl font-bold text-white hover:text-[#BBBF3F] transition-colors">
                                        (09) 889-1025
                                    </a>
                                    <p className="text-sm text-[#BBBF3F] mt-2">24/7 Emergency Support Available</p>
                                </div>
                            </div>

                            <div className="glass-panel p-8 rounded-2xl flex items-start gap-6 hover:border-[#BBBF3F]/50 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-[#BBBF3F]/10 flex items-center justify-center shrink-0 border border-[#BBBF3F]/20">
                                    <Mail className="w-6 h-6 text-[#BBBF3F]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Email</h3>
                                    <p className="text-gray-400 mb-2">Send us your plans or questions.</p>
                                    <a href="mailto:info@aucklandroofing.co.nz" className="text-xl font-bold text-white hover:text-[#BBBF3F] transition-colors">
                                        info@aucklandroofing.co.nz
                                    </a>
                                </div>
                            </div>

                            <div className="glass-panel p-8 rounded-2xl flex items-start gap-6 hover:border-[#BBBF3F]/50 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-[#BBBF3F]/10 flex items-center justify-center shrink-0 border border-[#BBBF3F]/20">
                                    <MapPin className="w-6 h-6 text-[#BBBF3F]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Head Office</h3>
                                    <p className="text-gray-400 mb-2">Visit our yard and showroom.</p>
                                    <p className="text-xl font-bold text-white">
                                        14B Waiora Road,<br />Penrose, Auckland 1061
                                    </p>
                                </div>
                            </div>

                            <div className="glass-panel p-8 rounded-2xl flex items-start gap-6 hover:border-[#BBBF3F]/50 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-[#BBBF3F]/10 flex items-center justify-center shrink-0 border border-[#BBBF3F]/20">
                                    <Clock className="w-6 h-6 text-[#BBBF3F]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Operating Hours</h3>
                                    <ul className="space-y-1 text-gray-400">
                                        <li className="flex justify-between w-48">
                                            <span>Monday - Friday:</span>
                                            <span className="text-white font-medium">7:30 AM – 4:30 PM</span>
                                        </li>
                                        <li className="flex justify-between w-48">
                                            <span>Saturday:</span>
                                            <span className="text-white font-medium">By Appointment</span>
                                        </li>
                                        <li className="flex justify-between w-48">
                                            <span>Sunday:</span>
                                            <span className="text-white font-medium">Closed</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="h-full min-h-[400px] rounded-2xl overflow-hidden glass-panel glow-border relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.687673516826!2d174.8096389763785!3d-36.87386197222621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4888d3b3e3e3%3A0x2a00ef6165e18a0!2s14B%20Waiora%20Road%2C%20Penrose%2C%20Auckland%201061%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1709600000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
