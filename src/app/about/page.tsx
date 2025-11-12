"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CountUp } from "@/components/CountUp";

export default function AboutPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 100,
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-lg">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/#home" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img src="/binary_capital_logo.gif" alt="Binary Capital" className="h-12 w-auto" />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#home" className="text-white hover:text-secondary transition-colors">Home</Link>
              <Link href="/about" className="text-secondary font-semibold">About</Link>
              <Link href="/#services" className="text-white hover:text-secondary transition-colors">Services</Link>
              <Link href="/team" className="text-white hover:text-secondary transition-colors">Team</Link>
              <Link href="/contact" className="text-white hover:text-secondary transition-colors">Contact</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Binary Capital</h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl leading-relaxed">
              Shaping financial success through bespoke strategies, innovative solutions, and unwavering commitment to client excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none text-center" data-aos="fade-up" data-aos-delay="100">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Binary Capital is a premier investment banking and financial advisory firm based in Mumbai, India. 
                With over a decade of excellence in the financial services industry, we have established ourselves 
                as trusted advisors to businesses seeking sophisticated financial solutions.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Our expertise spans across Finance Advisory, Project Advisory, and Capital Markets, enabling us to 
                deliver comprehensive, end-to-end solutions tailored to each client's unique needs. We combine deep 
                market intelligence with innovative financial structuring to create sustainable value for our clients.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Operating from our headquarters in Mumbai's business district, we serve clients across India's major 
                metropolitan areas and emerging markets, bringing world-class financial advisory capabilities to 
                businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-10 rounded-2xl shadow-xl text-center" data-aos="fade-right">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be India's most trusted financial advisory firm, empowering businesses with innovative and 
                  sustainable financial solutions that drive long-term growth and value creation across all sectors 
                  of the economy.
                </p>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-xl text-center" data-aos="fade-left" data-aos-delay="100">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To deliver bespoke financial strategies through deep market insights, innovative structuring, and 
                  unwavering commitment to client success. We design financial pathways that transform challenges 
                  into opportunities and aspirations into achievements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Core Values</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                  title: "Integrity",
                  description: "We uphold the highest standards of integrity in all our actions, building trust through transparency and ethical practices."
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
                  title: "Innovation",
                  description: "We continuously innovate our financial solutions, staying ahead of market trends to deliver cutting-edge strategies."
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />,
                  title: "Client Focus",
                  description: "Our clients' success is our success. We are dedicated to understanding and exceeding client expectations."
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
                  title: "Excellence",
                  description: "We strive for excellence in every engagement, delivering superior quality and measurable results."
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                  title: "Expertise",
                  description: "Our team brings decades of combined experience across financial domains, ensuring expert guidance."
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                  title: "Sustainability",
                  description: "We focus on creating long-term sustainable value, not short-term gains, for all stakeholders."
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {value.icon}
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl font-bold mb-6">Our Track Record</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-2">
                  <CountUp end={10} duration={4000} suffix="+" />
                </div>
                <p className="text-xl text-gray-200">Years of Excellence</p>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-2">
                  <CountUp end={500} duration={4000} suffix="+" />
                </div>
                <p className="text-xl text-gray-200">Clients Served</p>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-2">
                  <CountUp end={50} duration={4000} suffix="B+" prefix="₹" />
                </div>
                <p className="text-xl text-gray-200">Assets Under Advisory</p>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-2">
                  <CountUp end={15} duration={4000} suffix="+" />
                </div>
                <p className="text-xl text-gray-200">States Covered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Partner with Us?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how Binary Capital can help transform your financial future with bespoke strategies tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-blue-800 text-white px-10 py-6 text-lg rounded-xl">
                  Contact Us
                </Button>
              </Link>
              <Link href="/#services">
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-6 text-lg rounded-xl">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link href="/#home">
              <img src="/binary_capital_logo.gif" alt="Binary Capital" className="h-16 mx-auto mb-4" />
            </Link>
            <p className="text-gray-400 mb-4">© 2025 Binary Capital. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              <Link href="/#home" className="text-gray-400 hover:text-amber-400 transition-colors">Home</Link>
              <Link href="/about" className="text-gray-400 hover:text-amber-400 transition-colors">About</Link>
              <Link href="/#services" className="text-gray-400 hover:text-amber-400 transition-colors">Services</Link>
              <Link href="/contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
