'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Terms() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#BBBF3F] selection:text-black">
            <Navbar />

            <section className="relative pt-32 pb-20">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                        Terms & <span className="text-gradient-gold">Conditions</span>
                    </h1>

                    <div className="glass-panel p-8 md:p-12 rounded-2xl space-y-8 text-gray-300 leading-relaxed">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                            <p>
                                By accessing our website and using our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
                            <p>
                                Auckland Roofing provides residential and commercial roofing services. All quotes provided are estimates based on visual inspection and are subject to change upon detailed site assessment.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Payments and Deposits</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>A deposit may be required to secure your booking and materials.</li>
                                <li>Full payment is due upon completion of the work unless otherwise agreed in writing.</li>
                                <li>We reserve the right to charge interest on overdue invoices.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Workmanship Guarantee</h2>
                            <p>
                                We offer a 10-year workmanship guarantee on all new roof installations. This guarantee covers defects in installation but excludes damage caused by extreme weather events, lack of maintenance, or third-party interference.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Liability</h2>
                            <p>
                                While we take every precaution to protect your property, Auckland Roofing shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Changes to Terms</h2>
                            <p>
                                We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms and Conditions on this page.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-white/10 text-sm text-gray-500">
                            Last Updated: {new Date().toLocaleDateString()}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
