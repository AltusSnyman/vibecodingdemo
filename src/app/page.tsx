'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Star, Clock, Hammer } from 'lucide-react';
import HeroBackground from '@/components/HeroBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Master Craftsmanship", "Beautiful Roofing", "10 Year Guarantee", "The Best Roofs"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);
  const services = [
    {
      title: 'New Roofing',
      description: 'Full roof installation for new construction and extensions. Iron, Metal, and Asphalt solutions.',
      image: '/assets/images/roof_installation.png',
      link: '/services/new-roofing',
    },
    {
      title: 'Re-Roofing',
      description: 'Complete removal of old roof and installation of modern, durable systems.',
      image: '/assets/images/roof_repair.png',
      link: '/services/re-roofing',
    },
    {
      title: 'Repairs & Maintenance',
      description: 'Expert leak detection, flashing repairs, and storm damage restoration.',
      image: '/assets/images/roof_inspection.png',
      link: '/services/repairs',
    },
    {
      title: 'Gutters & Spouting',
      description: 'Installation, repair, and cleaning of internal and external gutter systems.',
      image: '/assets/images/gutter_services.png',
      link: '/services/gutters',
    },
  ];

  const testimonials = [
    {
      name: 'Michael & Janine K.',
      location: 'Milford, North Shore',
      quote: "Auckland Roofing was fantastic from start to finish. We had an old Decramastic roof that needed replacing, and David's team made the whole process stress-free.",
      rating: 5,
    },
    {
      name: 'Elias P.',
      location: 'Mount Eden',
      quote: "I needed an urgent repair after a heavy storm caused a leak. Their emergency service was quick and professional. The repair was solid, and the quote was very reasonable.",
      rating: 5,
    },
    {
      name: "'The Builders'",
      location: 'Pukekohe',
      quote: "We've used Auckland Roofing for our last five development projects. Their attention to detail on the flashing work is second to none.",
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#BBBF3F] selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Protecting Auckland Homes with <br />
              <span className="relative flex w-full justify-center items-center overflow-hidden text-center py-8 md:py-12 min-h-[120px] md:min-h-[160px]">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold text-gradient-gold"
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                          y: 0,
                          opacity: 1,
                        }
                        : {
                          y: titleNumber > index ? -150 : 150,
                          opacity: 0,
                        }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto mt-4">
              10-Year Guarantee. Family Owned. Quality You Can Trust.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link
                href="#booking"
                className="px-8 py-4 bg-gradient-to-r from-[#BBBF3F] to-[#F2EC91] text-black font-bold rounded-full text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(187,191,63,0.3)]"
              >
                Book Free Quote
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 glass-panel rounded-full text-white font-bold text-lg hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                Our Services <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gray-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 border-y border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for partner logos - using text for now as requested */}
            <span className="text-xl font-bold text-gray-400">MASTER ROOFERS</span>
            <span className="text-xl font-bold text-gray-400">NZ CERTIFIED</span>
            <span className="text-xl font-bold text-gray-400">COLORSTEEL</span>
            <span className="text-xl font-bold text-gray-400">ARDEX</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Roofing Solutions <span className="text-gradient-gold">Tailored for You</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive roofing services for residential and commercial properties across Auckland.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link href={service.link} key={index} className="group relative overflow-hidden rounded-2xl glass-panel hover:border-[#BBBF3F]/50 transition-colors duration-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#BBBF3F] transition-colors">{service.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{service.description}</p>
                  <span className="text-[#BBBF3F] text-sm font-bold flex items-center gap-1">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/roof_installation.png')] bg-cover bg-center opacity-5 fixed-bg" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Why Auckland Trusts <br />
                <span className="text-gradient-gold">Master Roofer David Chen</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#BBBF3F]/10 flex items-center justify-center shrink-0 border border-[#BBBF3F]/20">
                    <Shield className="w-6 h-6 text-[#BBBF3F]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">10-Year Workmanship Guarantee</h3>
                    <p className="text-gray-400">We stand behind every roof we build. Our decade-long warranty gives you total peace of mind.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#BBBF3F]/10 flex items-center justify-center shrink-0 border border-[#BBBF3F]/20">
                    <CheckCircle className="w-6 h-6 text-[#BBBF3F]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">NZ Certified Materials</h3>
                    <p className="text-gray-400">We only use materials tested and proven for New Zealand's unique weather conditions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#BBBF3F]/10 flex items-center justify-center shrink-0 border border-[#BBBF3F]/20">
                    <Hammer className="w-6 h-6 text-[#BBBF3F]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Site Cleanup Promise</h3>
                    <p className="text-gray-400">We treat your property with respect. Meticulous cleanup is part of our standard service.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="glass-panel p-8 rounded-2xl glow-border">
                <h3 className="text-2xl font-bold mb-6 text-center">What Our Clients Say</h3>
                <div className="space-y-6">
                  {testimonials.map((t, i) => (
                    <div key={i} className="border-b border-white/10 last:border-0 pb-6 last:pb-0">
                      <div className="flex gap-1 text-[#BBBF3F] mb-2">
                        {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                      <p className="text-gray-300 italic mb-3">"{t.quote}"</p>
                      <div className="text-sm">
                        <span className="font-bold text-white">{t.name}</span>
                        <span className="text-gray-500"> — {t.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://storage.googleapis.com/msgsndr/ECb6v20y90P92Elt4ifw/media/6924d28137de76df75ec47d3.png"
            alt="Booking Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/90" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Schedule Your <span className="text-gradient-gold">Free Roof Inspection</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Select a time that works for you. No obligation, just expert advice.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/2guXaEgOKXBAiRsPiBjc"
              style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '900px' }}
              scrolling="no"
              id="2guXaEgOKXBAiRsPiBjc_1764019789525"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
