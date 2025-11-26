'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import Script from 'next/script';

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Auckland<span className="text-[#BBBF3F]">Roofing</span>
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Protecting Auckland homes with master craftsmanship and 10-year guarantees. Family owned and operated since 2015.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-gray-400 hover:text-[#BBBF3F] transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-[#BBBF3F] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-[#BBBF3F] transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Services', 'Gallery', 'Pricing', 'Contact', 'Book Inspection'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-[#BBBF3F] transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
                        <ul className="space-y-3">
                            {['New Roofing', 'Re-Roofing', 'Repairs & Maintenance', 'Roof Coatings', 'Gutters & Spouting'].map((item) => (
                                <li key={item}>
                                    <Link href="/services" className="text-gray-400 hover:text-[#BBBF3F] transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-[#BBBF3F] shrink-0 mt-1" />
                                <span>14B Waiora Road,<br />Penrose, Auckland 1061</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-[#BBBF3F] shrink-0" />
                                <a href="tel:098891025" className="hover:text-white transition-colors">(09) 889-1025</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-[#BBBF3F] shrink-0" />
                                <a href="mailto:info@aucklandroofing.co.nz" className="hover:text-white transition-colors">info@aucklandroofing.co.nz</a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <Clock className="w-5 h-5 text-[#BBBF3F] shrink-0 mt-1" />
                                <div>
                                    <p>Mon - Fri: 7:30 AM – 4:30 PM</p>
                                    <p className="text-sm text-[#BBBF3F] mt-1">24/7 Emergency Support</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Auckland Roofing. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* Global Chat Widget */}
            <Script
                src="https://beta.leadconnectorhq.com/loader.js"
                data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
                data-widget-id="691f83a88696222c6a2cac9d"
                strategy="lazyOnload"
            />
        </footer>
    );
}
