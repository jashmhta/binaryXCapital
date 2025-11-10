"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CountUp } from "@/components/CountUp";


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Enhanced structured data for AEO (Answer Engine Optimization)
  const structuredData = [
    // Organization Schema
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://binarycapital.manus.space/#organization",
      "name": "Binary Capital",
      "legalName": "Binary Capital Advisors LLP",
      "url": "https://binarycapital.manus.space",
      "logo": "https://binarycapital.manus.space/logo-4zsp2eCD.png",
      "foundingDate": "2014",
      "description": "Bespoke financial strategies including structured finance, project financing, M&A advisory, and capital markets services.",
      "slogan": "Shaping Success with Bespoke Financial Strategies",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Andheri West",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400053",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-22-XXXX-XXXX",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://www.linkedin.com/company/binary-capital",
        "https://twitter.com/binarycapital"
      ]
    },
    // LocalBusiness Schema
    {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "@id": "https://binarycapital.manus.space/#business",
      "name": "Binary Capital",
      "image": "https://binarycapital.manus.space/hero_background.png",
      "url": "https://binarycapital.manus.space",
      "telephone": "+91-22-XXXX-XXXX",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Andheri West",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400053",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.1136,
        "longitude": 72.8697
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "areaServed": [
        {"@type": "City", "name": "Mumbai"},
        {"@type": "City", "name": "Delhi"},
        {"@type": "City", "name": "Bangalore"},
        {"@type": "City", "name": "Hyderabad"},
        {"@type": "City", "name": "Chennai"}
      ]
    },
    // FAQ Schema for AEO
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Binary Capital offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Binary Capital offers Finance Advisory (structured finance, securitization), Project Advisory (infrastructure financing), Transaction Advisory (M&A services), and Capital Markets (equity and debt raising) across India."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Binary Capital located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Binary Capital is headquartered in Andheri West, Mumbai, Maharashtra, India. We serve clients across Mumbai, Delhi, Bangalore, Hyderabad, and Chennai."
          }
        },
        {
          "@type": "Question",
          "name": "What is structured finance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Structured finance transforms complex assets into investable securities through asset-backed securities (ABS), securitization, and credit enhancement mechanisms to optimize capital efficiency."
          }
        },
        {
          "@type": "Question",
          "name": "How does Binary Capital help with M&A transactions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Binary Capital provides strategic M&A advisory including business valuation, deal structuring, due diligence, and financing solutions to unlock synergies and create shareholder value."
          }
        },
        {
          "@type": "Question",
          "name": "What industries does Binary Capital serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Binary Capital serves infrastructure, power and renewable energy, transportation, industrial manufacturing, real estate, and financial services sectors across India."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact Binary Capital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact Binary Capital at our Mumbai office in Andheri West by phone at +91-22-XXXX-XXXX or through our website contact form."
          }
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/logo-4zsp2eCD.png" alt="Binary Capital" loading="lazy" className="h-10" />
            <span className="text-xl font-bold text-primary">Binary Capital</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
            <a href="#team" className="text-gray-700 hover:text-primary transition-colors">Team</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
          </div>
          <button 
            className="text-primary p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Navigation Menu */}
        {mobileMenuOpen && (
          <div className="bg-white border-t border-gray-200 animate-fade-in shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-primary transition-colors py-2 border-l-4 border-transparent hover:border-secondary pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-primary transition-colors py-2 border-l-4 border-transparent hover:border-secondary pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#services" 
                className="text-gray-700 hover:text-primary transition-colors py-2 border-l-4 border-transparent hover:border-secondary pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#team" 
                className="text-gray-700 hover:text-primary transition-colors py-2 border-l-4 border-transparent hover:border-secondary pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-primary transition-colors py-2 border-l-4 border-transparent hover:border-secondary pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="btn-primary w-full" onClick={() => setMobileMenuOpen(false)}>Get Started</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 text-white relative overflow-hidden" style={{backgroundImage: 'url(/hero_finance_investment-oDlAhxWb.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center py-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Shaping Success with <span className="text-secondary">Bespoke</span> Financial Strategies
            </h1>
            <p className="text-xl mb-4">
              Finance Advisory • Project Advisory • Transaction Advisory • Capital Markets
            </p>
            <p className="text-lg mb-8 opacity-90">
              Designing financial pathways for sustainable success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary">Discover Our Solutions</Button>
              <Button className="btn-secondary">Contact Us Today</Button>
            </div>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Growth Focused</h3>
              <p className="opacity-90">Strategic solutions designed to accelerate your business growth</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Risk Management</h3>
              <p className="opacity-90">Comprehensive risk assessment and mitigation strategies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="opacity-90">Seasoned professionals with decades of industry experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Golden Divider */}
      <div className="golden-divider-thick my-16"></div>

      {/* About Section */}
      <section id="about" className="py-20 bg-blue-50/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="max-w-md mx-auto mb-8" data-aos="fade-down">
              <video autoPlay loop muted playsInline className="w-full">
                <source src="/logo_animation.mp4" type="video/mp4" />
                <img src="/logo-4zsp2eCD.png" alt="Binary Capital" loading="lazy" className="h-16 mx-auto" />
              </video>
            </div>
            <h2 className="section-title golden-underline" data-aos="fade-up">About Binary Capital</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed mb-16">
            <p>
              Binary Capital, a Mumbai-based investment banking and financial advisory firm, was founded with a vision to redefine finance by building lasting partnerships rather than one-time transactions. Established by seasoned professionals from global investment banking, our mission has always been to combine world-class strategy with a truly bespoke, client-centric approach tailored to India's evolving markets.
            </p>
            <p>
              Over the past decade, we've helped businesses turn ambitions into achievements—structuring innovative financial instruments, securing growth capital, and guiding landmark M&A deals that have created sustainable value. Our success is measured not just in numbers, but in the stories of progress we've helped shape. What truly sets Binary Capital apart is our dynamic new generation of professionals—driven by a positive mindset, forward-looking energy, and an unwavering belief in possibility. Together, we bring experience and enthusiasm in equal measure, blending insight with innovation to simplify complexities, enhance value, and empower brighter financial futures.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div data-aos="zoom-in" data-aos-delay="100">
              <CountUp end={10} suffix="+" className="text-5xl font-bold text-secondary mb-2 golden-border-bottom inline-block pb-2" />
              <div className="text-gray-600">Years in Business</div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="200">
              <CountUp end={100} suffix="+" className="text-5xl font-bold text-secondary mb-2 golden-border-bottom inline-block pb-2" />
              <div className="text-gray-600">Clients Served</div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="300">
              <CountUp end={5000} suffix=" Cr+" prefix="₹" className="text-5xl font-bold text-secondary mb-2 golden-border-bottom inline-block pb-2" />
              <div className="text-gray-600">Transaction Value</div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="400">
              <CountUp end={300} suffix="+" className="text-5xl font-bold text-secondary mb-2 golden-border-bottom inline-block pb-2" />
              <div className="text-gray-600">Investors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Golden Divider */}
      <div className="golden-divider-thick my-16"></div>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16 golden-underline" data-aos="fade-up">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md golden-border-left card-hover" data-aos="fade-right" data-aos-delay="100">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Integrity at the Core</h3>
              <p className="text-gray-600">We believe trust is the foundation of every great partnership. Transparency, ethics, and accountability guide every decision we make.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md golden-border-left card-hover" data-aos="fade-right" data-aos-delay="200">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Client-Centric Thinking</h3>
              <p className="text-gray-600">Every client's journey is unique. We listen, understand, and craft tailored solutions designed to deliver meaningful, measurable outcomes.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md golden-border-left card-hover" data-aos="fade-right" data-aos-delay="300">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Innovation with Purpose</h3>
              <p className="text-gray-600">We embrace change with curiosity and creativity continuously seeking smarter, more agile ways to deliver financial excellence.</p>
            </div>
            </div>
            <div data-aos="fade-left">
              <img src="/mission_vision_professional.png" alt="Mission and Values" loading="lazy" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Golden Divider */}
      <div className="golden-divider-thick my-16"></div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-blue-50/20">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-4 golden-underline" data-aos="fade-up">Our Core Services</h2>
          <p className="section-subtitle text-center mb-16">
            From bespoke structured finance solutions to facilitating capital market transactions, our comprehensive service suite unlocks growth for your organization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Finance Advisory */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-secondary card-hover" data-aos="fade-up" data-aos-delay="100">
              <img src="/structured_finance_indian-BBov35_e.png" alt="Finance Advisory" loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Finance Advisory</h3>
                </div>
                <p className="text-gray-600 mb-4">Comprehensive financial advisory services covering strategic planning, capital structuring, and financial optimization.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600">Asset-backed securities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600">Risk transfer mechanisms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600">Tailored structures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600">Regulatory compliance</span>
                  </li>
                </ul>
                <a href="/finance-advisory">
                  <Button className="btn-primary w-full">Learn More</Button>
                </a>
              </div>
            </div>

            {/* Project Advisory */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-secondary card-hover" data-aos="fade-up" data-aos-delay="200">
              <img src="/project_finance_indian-BCTGt2M7.png" alt="Project Advisory" loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Project Advisory</h3>
                </div>
                <p className="text-gray-600 mb-4">End-to-end project advisory services from conceptualization to execution for infrastructure and industrial projects.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600">Infrastructure funding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600">SPV structures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600">Risk allocation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600">Long-term contracts</span>
                  </li>
                </ul>
                <a href="/project-advisory">
                  <Button className="btn-primary w-full">Learn More</Button>
                </a>
              </div>
            </div>

            {/* Transaction Advisory */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-secondary card-hover" data-aos="fade-up" data-aos-delay="300">
              <img src="/mergers_acquisitions_indian-DSrQjmOm.png" alt="Transaction Advisory" loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Transaction Advisory</h3>
                </div>
                <p className="text-gray-600 mb-4">Strategic advisory for mergers, acquisitions, and corporate transactions to unlock synergies and growth.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600">Strategic planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600">Valuation services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600">Due diligence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600">Deal execution</span>
                  </li>
                </ul>
                <a href="/transaction-advisory">
                  <Button className="btn-primary w-full">Learn More</Button>
                </a>
              </div>
            </div>

            {/* Capital Markets */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-secondary card-hover" data-aos="fade-up" data-aos-delay="400">
              <img src="/capital_markets_indian-DftKjrZq.png" alt="Capital Markets" loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Capital Markets</h3>
                </div>
                <p className="text-gray-600 mb-4">Advisory and execution services for equity and debt capital market transactions connecting issuers with investors.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600">IPO advisory</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600">Secondary offerings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600">Debt issuance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600">Investor targeting</span>
                  </li>
                </ul>
                <a href="/capital-markets">
                  <Button className="btn-primary w-full">Learn More</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Golden Divider */}
      <div className="golden-divider-thick my-16"></div>

      {/* Side-by-Side Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title golden-underline" data-aos="fade-up">Our Side-by-Side Approach</h2>
            <p className="section-subtitle">
              We believe in walking alongside our clients throughout their journey. Our collaborative approach ensures shared success at every stage.
            </p>
          </div>
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl" data-aos="zoom-in">
            <video autoPlay loop muted playsInline className="w-full">
              <source src="/bicycle_animation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-gray-600 italic mt-8">
            From conceptualization to completion, we're with you every pedal of the way.
          </p>
        </div>
      </section>

      {/* Golden Divider */}
      <div className="golden-divider-thick my-16"></div>

      {/* India Map Section */}
      <section className="py-20 bg-blue-50/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title golden-underline" data-aos="fade-up">Our Presence Across India</h2>
            <p className="section-subtitle">
              Strategically located across India's major financial hubs to serve you better
            </p>
          </div>
          <div className="max-w-4xl mx-auto mb-12" data-aos="zoom-in">
            <img src="/india_map_3d.jpg" alt="Our Locations Across India" loading="lazy" className="w-full rounded-lg shadow-xl" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-2">Delhi</h3>
              <p className="text-gray-600">National capital region presence for government and enterprise clients</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-2">Ahmedabad</h3>
              <p className="text-gray-600">Gujarat's financial hub serving western India's growing markets</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-2">Mumbai</h3>
              <p className="text-gray-600">Headquarters in India's financial capital, heart of capital markets</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-2">Pune</h3>
              <p className="text-gray-600">Western Maharashtra operations center for technology and manufacturing</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-2">Bangalore</h3>
              <p className="text-gray-600">South India presence in the technology and startup capital</p>
            </div>
          </div>
        </div>
      </section>

      {/* Golden Divider */}
      <div className="golden-divider-thick my-16"></div>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title golden-underline" data-aos="fade-up">Our Expert Team</h2>
            <p className="section-subtitle">
              Meet the experienced professionals committed to your success. Our team brings decades of expertise in investment banking, corporate finance, and strategic advisory.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-secondary card-hover" data-aos="fade-up" data-aos-delay="100">
              <img src="/team_professional_indian-ONF9Gn7I.png" alt="Amit Desai" loading="lazy" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-1">Amit Desai</h3>
                <p className="text-secondary font-semibold mb-3">Founder & Managing Partner</p>
                <p className="text-gray-600 text-sm mb-4">20+ years experience in investment banking and corporate finance. Leads strategic direction and client engagements.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary/20 text-primary text-xs rounded-full">Finance Advisory</span>
                  <span className="px-3 py-1 bg-secondary/20 text-primary text-xs rounded-full">Corporate Finance</span>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-secondary card-hover" data-aos="fade-up" data-aos-delay="200">
              <img src="/team_professional_indian-ONF9Gn7I.png" alt="Priya Kapoor" loading="lazy" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-1">Priya Kapoor</h3>
                <p className="text-secondary font-semibold mb-3">Head of Finance Advisory</p>
                <p className="text-gray-600 text-sm mb-4">Specializes in innovative financing structures for complex transactions with deep expertise in structured finance.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary/20 text-primary text-xs rounded-full">Finance Advisory</span>
                  <span className="px-3 py-1 bg-secondary/20 text-primary text-xs rounded-full">Risk Management</span>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-secondary card-hover" data-aos="fade-up" data-aos-delay="300">
              <img src="/team_professional_indian-ONF9Gn7I.png" alt="Rohan Shah" loading="lazy" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-1">Rohan Shah</h3>
                <p className="text-secondary font-semibold mb-3">Director – Project & Infrastructure Finance</p>
                <p className="text-gray-600 text-sm mb-4">Led financing of numerous infrastructure projects ensuring optimal capital structures and risk allocation.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary/20 text-primary text-xs rounded-full">Project Advisory</span>
                  <span className="px-3 py-1 bg-secondary/20 text-primary text-xs rounded-full">Infrastructure</span>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-secondary card-hover" data-aos="fade-up" data-aos-delay="400">
              <img src="/team_professional_indian-ONF9Gn7I.png" alt="Meera Singh" loading="lazy" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-1">Meera Singh</h3>
                <p className="text-secondary font-semibold mb-3">Head of Capital Markets</p>
                <p className="text-gray-600 text-sm mb-4">Oversees equity and debt capital market transactions, connecting issuers with global investors.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary/20 text-primary text-xs rounded-full">Capital Markets</span>
                  <span className="px-3 py-1 bg-secondary/20 text-primary text-xs rounded-full">Equity Markets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Golden Divider */}
      <div className="golden-divider-thick my-16"></div>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title golden-underline" data-aos="fade-up">Client Testimonials</h2>
            <p className="section-subtitle">
              Hear what our clients say about their experience working with Binary Capital
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-secondary card-hover" data-aos="fade-up" data-aos-delay="100">
              <div className="text-secondary text-5xl mb-4">&ldquo;</div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                Binary Capital's expertise in structured finance helped us secure optimal funding for our infrastructure project. Their team's professionalism and attention to detail exceeded our expectations.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">RS</div>
                <div>
                  <p className="font-semibold text-primary">Rajesh Sharma</p>
                  <p className="text-sm text-gray-600">CEO, Infrastructure Solutions Ltd</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-secondary card-hover" data-aos="fade-up" data-aos-delay="200">
              <div className="text-secondary text-5xl mb-4">&ldquo;</div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                Working with Binary Capital on our M&A transaction was seamless. They provided strategic guidance throughout the process and helped us achieve exceptional value for our stakeholders.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">PM</div>
                <div>
                  <p className="font-semibold text-primary">Priya Mehta</p>
                  <p className="text-sm text-gray-600">CFO, TechVentures India</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-secondary card-hover" data-aos="fade-up" data-aos-delay="300">
              <div className="text-secondary text-5xl mb-4">&ldquo;</div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                Binary Capital's capital markets expertise helped us successfully raise growth capital through debt instruments. Their network and market knowledge are truly impressive.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">AK</div>
                <div>
                  <p className="font-semibold text-primary">Anil Kumar</p>
                  <p className="text-sm text-gray-600">Managing Director, Healthcare Innovations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Golden Divider */}
      <div className="golden-divider-thick my-16"></div>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title golden-underline" data-aos="fade-up">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about our services and how we can help your business
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary card-hover" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-semibold text-primary mb-3">What services does Binary Capital offer?</h3>
              <p className="text-gray-700 leading-relaxed">
                We offer comprehensive financial services including Finance Advisory, Project Advisory, Transaction Advisory, and Capital Markets solutions. Our expertise spans structured finance, M&A advisory, project finance, and capital raising through debt and equity instruments.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary card-hover" data-aos="fade-up" data-aos-delay="150">
              <h3 className="text-xl font-semibold text-primary mb-3">Which industries do you serve?</h3>
              <p className="text-gray-700 leading-relaxed">
                We serve clients across diverse sectors including technology, healthcare, real estate, infrastructure, manufacturing, and financial services. Our team has deep expertise in understanding sector-specific dynamics and regulatory requirements.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary card-hover" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-semibold text-primary mb-3">How long does a typical engagement take?</h3>
              <p className="text-gray-700 leading-relaxed">
                Engagement timelines vary based on the complexity and scope of the project. Advisory projects typically range from 3-6 months, while transaction advisory can take 6-12 months depending on deal complexity. We provide detailed timelines during our initial consultation.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary card-hover" data-aos="fade-up" data-aos-delay="250">
              <h3 className="text-xl font-semibold text-primary mb-3">What is your fee structure?</h3>
              <p className="text-gray-700 leading-relaxed">
                Our fee structure is tailored to each engagement and can include retainer fees, success fees, or a combination based on project requirements. We believe in transparent pricing and will provide a detailed fee proposal during our initial discussions.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary card-hover" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-semibold text-primary mb-3">Do you work with startups and early-stage companies?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, we work with companies at all stages of growth, from early-stage startups to established enterprises. Our venture capital and advisory services are designed to support businesses throughout their growth journey, from seed funding to IPO.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary card-hover" data-aos="fade-up" data-aos-delay="350">
              <h3 className="text-xl font-semibold text-primary mb-3">How can I get started with Binary Capital?</h3>
              <p className="text-gray-700 leading-relaxed">
                Getting started is simple. Contact us through our website, email, or phone to schedule an initial consultation. We'll discuss your needs, objectives, and how our services can help achieve your financial goals. The initial consultation is complimentary.
              </p>
            </div>
          </div>

          {/* FAQ CTA */}
          <div className="mt-12 bg-gradient-to-r from-primary to-blue-700 rounded-lg p-8 text-center text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="mb-6">Our team is here to help. Reach out for personalized answers to your specific questions.</p>
            <Button className="bg-secondary hover:bg-yellow-500 text-primary font-semibold px-8 py-3 rounded-lg">Contact Us</Button>
          </div>
        </div>
      </section>

      {/* Golden Divider */}
      <div className="golden-divider-thick my-16"></div>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-50/20">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16 golden-underline" data-aos="fade-up">Get in Touch</h2>
          <div className="max-w-6xl mx-auto mb-12">
            <div className="rounded-lg overflow-hidden shadow-lg" style={{height: '400px'}}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5!2d72.8263!3d19.1136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e8c4f5b%3A0x1234567890abcdef!2sBinary%20Capital%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1735000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{border: 0}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-secondary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-primary">Phone</p>
                    <p className="text-gray-600">+91 7738056127</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM IST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-secondary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-primary">Email</p>
                    <p className="text-gray-600">sales@binarycapital.in</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-secondary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-primary">Address</p>
                    <p className="text-gray-600">2045, 2nd Floor, Spaces Adani Height</p>
                    <p className="text-gray-600">Andheri West, Mumbai, India</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <textarea
                  placeholder="Message *"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <Button type="submit" className="btn-primary w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo-4zsp2eCD.png" alt="Binary Capital" loading="lazy" className="h-12 mb-4 brightness-0 invert" />
              <p className="text-gray-300 mb-4">Shaping success with bespoke financial strategies.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-secondary">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-secondary">About</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-secondary">Services</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-secondary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">Finance Advisory</li>
                <li className="text-gray-300">Project Advisory</li>
                <li className="text-gray-300">Transaction Advisory</li>
                <li className="text-gray-300">Capital Markets</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <p className="text-gray-300 mb-2">+91 7738056127</p>
              <p className="text-gray-300 mb-2">sales@binarycapital.in</p>
              <p className="text-gray-300">Andheri West, Mumbai, India</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2025 Binary Capital Advisors LLP. All rights reserved. | Mumbai, India</p>
          </div>
        </div>
      </footer>
      
      {/* Structured Data for SEO/AEO */}
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </div>
  );
}
