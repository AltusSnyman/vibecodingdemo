'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Calendar } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative h-10 w-10 md:h-12 md:w-12">
                            <Image
                                src="/assets/images/logo.png"
                                alt="Auckland Roofing Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-xl md:text-2xl font-bold tracking-tighter text-white">
                            Auckland<span className="text-[#BBBF3F]">Roofing</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-[#BBBF3F] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/#booking"
                            className="flex items-center gap-2 bg-gradient-to-r from-[#BBBF3F] to-[#F2EC91] text-black px-5 py-2.5 rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
                        >
                            <Calendar className="w-4 h-4" />
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 glass-panel border-t border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium text-gray-200 hover:text-[#BBBF3F] py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/#booking"
                            className="flex items-center justify-center gap-2 bg-[#BBBF3F] text-black px-4 py-3 rounded-lg font-bold"
                            onClick={() => setIsOpen(false)}
                        >
                            <Calendar className="w-4 h-4" />
                            Book Free Quote
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
