"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TeamPage() {
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

  const teamMembers = [
    { 
      name: "Leadership Team", 
      role: "Strategic Vision & Governance", 
      expertise: "40+ years combined experience in investment banking, corporate finance, and strategic advisory across diverse sectors."
    },
    { 
      name: "Finance Advisory Division", 
      role: "Structured Finance Specialists", 
      expertise: "Expert in debt structuring, refinancing, working capital optimization, and innovative financial solutions for complex business challenges."
    },
    { 
      name: "Project Advisory Division", 
      role: "Infrastructure Finance Experts", 
      expertise: "Specializing in large-scale project financing, PPP structures, infrastructure development, and long-term capital deployment strategies."
    },
    { 
      name: "Capital Markets Division", 
      role: "Equity & Debt Capital Specialists", 
      expertise: "IPO advisory, private placements, bond issuances, and comprehensive securities market expertise for optimal capital raising."
    }
  ];

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
              <Link href="/about" className="text-white hover:text-secondary transition-colors">About</Link>
              <Link href="/#services" className="text-white hover:text-secondary transition-colors">Services</Link>
              <Link href="/team" className="text-secondary font-semibold">Team</Link>
              <Link href="/contact" className="text-white hover:text-secondary transition-colors">Contact</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Expert Team</h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl leading-relaxed">
              Seasoned professionals with deep expertise across financial domains, committed to delivering excellence in every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Excellence Through Expertise</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              At Binary Capital, our strength lies in our people. Our team comprises seasoned professionals with extensive 
              experience across investment banking, corporate finance, project financing, and capital markets.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Each team member brings unique perspectives and specialized knowledge, enabling us to deliver comprehensive, 
              innovative solutions tailored to our clients' most complex financial challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group hover:transform hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-amber-600 font-semibold mb-4 text-sm">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Collective Expertise</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Financial Structuring",
                  description: "Complex financial structures, debt optimization, and innovative capital solutions"
                },
                {
                  title: "Market Intelligence",
                  description: "Deep insights into Indian and global markets, regulatory landscapes, and industry trends"
                },
                {
                  title: "Transaction Execution",
                  description: "Proven track record in M&A, capital raising, and complex financial transactions"
                },
                {
                  title: "Risk Management",
                  description: "Comprehensive risk assessment, mitigation strategies, and compliance frameworks"
                },
                {
                  title: "Strategic Advisory",
                  description: "Business strategy, growth planning, and value creation initiatives"
                },
                {
                  title: "Industry Knowledge",
                  description: "Sector-specific expertise across infrastructure, real estate, manufacturing, and more"
                }
              ].map((expertise, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{expertise.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{expertise.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Join Our Growing Team</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl mb-8 text-gray-100 leading-relaxed">
              We're always looking for talented professionals who share our passion for excellence and innovation 
              in financial advisory. If you're driven, ambitious, and committed to delivering exceptional client value, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-10 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  Get In Touch
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
