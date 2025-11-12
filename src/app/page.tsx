"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CountUp } from "@/components/CountUp";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 1200,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
      });

      // Header hide on scroll functionality
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setHeaderHidden(true);
        } else {
          setHeaderHidden(false);
        }

        lastScrollY.current = currentScrollY;
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Enhanced structured data for AEO
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://binarycapital.in/#organization",
      "name": "Binary Capital",
      "legalName": "Binary Capital Advisors LLP",
      "url": "https://binarycapital.in",
      "logo": "https://binarycapital.in/logo-4zsp2eCD.png",
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
      }
    }
  ];

  // Sector-wise testimonials (no names, no images)
  const testimonials = [
    {
      sector: "Real Estate Development",
      text: "Binary Capital\'s structured finance solutions enabled us to scale multiple residential projects across tier-2 cities. Their deep understanding of market dynamics was invaluable.",
      role: "Leading Real Estate Developer"
    },
    {
      sector: "Infrastructure & Construction",
      text: "The project advisory services provided critical insights for our infrastructure financing needs. Their expertise in navigating regulatory frameworks saved us significant time and resources.",
      role: "Infrastructure Development Company"
    },
    {
      sector: "Manufacturing",
      text: "Binary Capital facilitated a complex M&A transaction that expanded our manufacturing footprint. Their attention to detail and market intelligence was exceptional.",
      role: "Mid-Size Manufacturing Enterprise"
    },
    {
      sector: "Renewable Energy",
      text: "Their capital markets expertise helped us secure optimal financing for our solar energy projects. The team\'s commitment to sustainable growth aligned perfectly with our vision.",
      role: "Clean Energy Solutions Provider"
    },
    {
      sector: "Healthcare Services",
      text: "Binary Capital structured a sophisticated financing solution for our hospital expansion. Their bespoke approach addressed our unique operational requirements.",
      role: "Multi-Specialty Healthcare Group"
    },
    {
      sector: "Technology & Startups",
      text: "The finance advisory team provided strategic guidance during our Series B funding round. Their network and market positioning expertise were game-changing.",
      role: "FinTech Startup"
    }
  ];

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* TRANSPARENT HEADER - Hide on Scroll */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          headerHidden ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{
          background: "linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.8) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo - Links to home */}
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img
                src="/logo-4zsp2eCD.png"
                alt="Binary Capital"
                className="h-12 w-auto sm:h-14 lg:h-16"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-yellow-400 font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-yellow-400 font-medium transition-colors">
                About
              </Link>
              <Link href="/finance-advisory" className="text-white hover:text-yellow-400 font-medium transition-colors">
                Finance Advisory
              </Link>
              <Link href="/project-advisory" className="text-white hover:text-yellow-400 font-medium transition-colors">
                Project Advisory
              </Link>
              <Link href="/capital-markets" className="text-white hover:text-yellow-400 font-medium transition-colors">
                Capital Markets
              </Link>
              <Link href="/contact" className="text-white hover:text-yellow-400 font-medium transition-colors">
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
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
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/98 backdrop-blur-lg">
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-yellow-400 font-medium py-2 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-yellow-400 font-medium py-2 transition-colors">
                About
              </Link>
              <Link href="/finance-advisory" className="text-white hover:text-yellow-400 font-medium py-2 transition-colors">
                Finance Advisory
              </Link>
              <Link href="/project-advisory" className="text-white hover:text-yellow-400 font-medium py-2 transition-colors">
                Project Advisory
              </Link>
              <Link href="/capital-markets" className="text-white hover:text-yellow-400 font-medium py-2 transition-colors">
                Capital Markets
              </Link>
              <Link href="/contact" className="text-white hover:text-yellow-400 font-medium py-2 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION - Updated background color and font */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Logo Animation with GIF */}
            <div className="mb-8 flex justify-center" data-aos="fade-down">
              <img
                src="/binary_capital_logo.gif"
                alt="Binary Capital Logo Animation"
                className="h-24 sm:h-32 lg:h-40 w-auto"
              />
            </div>

            {/* Headline with Montserrat font */}
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Shaping Success with<br />
              <span className="text-yellow-400">Bespoke Financial Strategies</span>
            </h1>

            <p 
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Investment Banking & Financial Advisory Services Across India
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="600">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-8 py-6 text-lg rounded-xl shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Button>
              </Link>
              <Link href="/about">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats - Slowed animation speed */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20" data-aos="fade-up" data-aos-delay="800">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  <CountUp end={10} duration={4} suffix="+" />
                </div>
                <div className="text-gray-300 text-sm md:text-base">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  <CountUp end={500} duration={4} suffix="+" />
                </div>
                <div className="text-gray-300 text-sm md:text-base">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  <CountUp end={50} duration={4} suffix="B+" prefix="₹" />
                </div>
                <div className="text-gray-300 text-sm md:text-base">Capital Raised</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  <CountUp end={15} duration={4} suffix="+" />
                </div>
                <div className="text-gray-300 text-sm md:text-base">States Covered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ABOUT SECTION - Center aligned */}
      <section className="section-padding bg-white" id="about">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About Binary Capital
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center">
              Binary Capital is a Mumbai-based investment banking and financial advisory firm with over a decade of excellence in delivering bespoke financial strategies. We specialize in Finance Advisory, Project Advisory, and Capital Markets solutions, serving clients across India with sustainable growth-focused approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                To provide innovative and sustainable financial solutions that empower businesses to achieve their strategic objectives.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                To be India\'s most trusted investment banking partner, recognized for excellence, integrity, and value creation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Values</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Integrity, excellence, innovation, and client-centricity drive every decision we make and every solution we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW - Center aligned */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white" id="services">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center">
              Comprehensive financial solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Finance Advisory */}
            <Link href="/finance-advisory" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full" data-aos="fade-up" data-aos-delay="100">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  Finance Advisory
                </h3>
                <p className="text-gray-600 text-center leading-relaxed mb-6">
                  Strategic financial planning, M&A advisory, structured finance, and capital structuring solutions.
                </p>
                <span className="text-blue-600 font-semibold group-hover:text-blue-700 inline-flex items-center">
                  Learn More →
                </span>
              </div>
            </Link>

            {/* Project Advisory */}
            <Link href="/project-advisory" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full" data-aos="fade-up" data-aos-delay="200">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-600 transition-colors duration-300">
                  <svg className="w-10 h-10 text-yellow-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-yellow-600 transition-colors">
                  Project Advisory
                </h3>
                <p className="text-gray-600 text-center leading-relaxed mb-6">
                  Comprehensive project financing, feasibility studies, and infrastructure development advisory.
                </p>
                <span className="text-yellow-600 font-semibold group-hover:text-yellow-700 inline-flex items-center">
                  Learn More →
                </span>
              </div>
            </Link>

            {/* Capital Markets */}
            <Link href="/capital-markets" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full" data-aos="fade-up" data-aos-delay="300">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-colors duration-300">
                  <svg className="w-10 h-10 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors">
                  Capital Markets
                </h3>
                <p className="text-gray-600 text-center leading-relaxed mb-6">
                  Debt and equity capital markets, bond issuance, and securities advisory services.
                </p>
                <span className="text-green-600 font-semibold group-hover:text-green-700 inline-flex items-center">
                  Learn More →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* INDIA MAP VIDEO SECTION - Replaced image with video, removed states */}
      <section className="section-padding bg-white" id="presence">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Pan-India Presence
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center">
              Serving clients across India with localized expertise and national reach
            </p>
          </div>

          <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                poster="/india_map_3d.jpg"
              >
                <source src="/india_map_video.mp4" type="video/mp4" />
                <img src="/india_map_3d.jpg" alt="Binary Capital Pan India Presence" className="w-full" />
              </video>
            </div>
            <p className="text-center text-gray-600 mt-8 text-lg">
              Headquartered in Mumbai with operations spanning across major cities and emerging markets throughout India
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Sector-wise, no names, no images */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white" id="testimonials">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Client Success Stories
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center">
              Trusted by leading organizations across diverse sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-6">
                  <svg className="w-12 h-12 text-yellow-400 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 text-center leading-relaxed mb-6 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="border-t pt-6">
                  <p className="font-bold text-slate-900 text-center">{testimonial.sector}</p>
                  <p className="text-gray-600 text-sm text-center mt-1">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERT TEAM - No images */}
      <section className="section-padding bg-white" id="team">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Expert Team
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center">
              Our team brings together decades of experience in investment banking, finance, and advisory services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Investment Banking", expertise: "M&A, Capital Raising" },
              { title: "Project Finance", expertise: "Infrastructure, Real Estate" },
              { title: "Capital Markets", expertise: "Debt & Equity Markets" },
              { title: "Advisory Services", expertise: "Strategic Planning" }
            ].map((team, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{team.title}</h3>
                <p className="text-gray-600 text-center">{team.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPROVED FOOTER - Modern design, removed LLP */}
      <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <img
                src="/logo-4zsp2eCD.png"
                alt="Binary Capital"
                className="h-16 w-auto mb-6"
              />
              <p className="text-gray-400 leading-relaxed mb-6">
                Bespoke financial strategies for sustainable growth. Investment banking and advisory services across India.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/finance-advisory" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                    Finance Advisory
                  </Link>
                </li>
                <li>
                  <Link href="/project-advisory" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                    Project Advisory
                  </Link>
                </li>
                <li>
                  <Link href="/capital-markets" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                    Capital Markets
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">Mergers & Acquisitions</li>
                <li className="text-gray-400">Structured Finance</li>
                <li className="text-gray-400">Project Financing</li>
                <li className="text-gray-400">Capital Markets</li>
                <li className="text-gray-400">Supply Chain Financing</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400">Andheri West, Mumbai, Maharashtra 400053</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400">info@binarycapital.in</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-400">+91 XXXX XXXXXX</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Binary Capital. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/disclaimer" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Disclaimer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
