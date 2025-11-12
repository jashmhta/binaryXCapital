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
        duration: 800,
        easing: 'ease-out',
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
      text: "Binary Capital's structured finance solutions enabled us to scale multiple residential projects across tier-2 cities. Their deep understanding of market dynamics was invaluable.",
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
      text: "Their capital markets expertise helped us secure optimal financing for our solar energy projects. The team's commitment to sustainable growth aligned perfectly with our vision.",
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
    <div className="min-h-screen bg-background font-sans">
      {/* Enhanced SEO Meta Tags */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* UPDATED HEADER: Transparent background with hide-on-scroll */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          headerHidden ? '-translate-y-full' : 'translate-y-0'
        }`}
        style={{
          background: 'rgba(30, 58, 138, 0.95)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)'
        }}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* UPDATED: Logo links to home page */}
            <Link href="/#home" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img 
                src="/binary_capital_logo.gif" 
                alt="Binary Capital Logo" 
                className="h-12 w-auto"
                loading="eager"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#home" className="text-white hover:text-secondary transition-colors font-medium">Home</Link>
              <Link href="/#about" className="text-white hover:text-secondary transition-colors font-medium">About</Link>
              <Link href="/#services" className="text-white hover:text-secondary transition-colors font-medium">Services</Link>
              <Link href="/#team" className="text-white hover:text-secondary transition-colors font-medium">Team</Link>
              <Link href="/#contact" className="text-white hover:text-secondary transition-colors font-medium">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none"
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

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <Link href="/#home" className="block text-white hover:text-secondary transition-colors py-2">Home</Link>
              <Link href="/#about" className="block text-white hover:text-secondary transition-colors py-2">About</Link>
              <Link href="/#services" className="block text-white hover:text-secondary transition-colors py-2">Services</Link>
              <Link href="/#team" className="block text-white hover:text-secondary transition-colors py-2">Team</Link>
              <Link href="/#contact" className="block text-white hover:text-secondary transition-colors py-2">Contact</Link>
            </div>
          )}
        </nav>
      </header>

      {/* UPDATED HERO SECTION: New background color gradient and updated font */}
      <section 
        id="home" 
        className="pt-32 pb-20 text-white relative overflow-hidden min-h-screen flex items-center"
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center py-20">
            <h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              data-aos="fade-up"
            >
              Shaping Success with <span className="text-amber-400">Bespoke</span> Financial Strategies
            </h1>
            <p 
              className="text-xl md:text-2xl mb-4 font-light"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              Finance Advisory • Project Advisory • Capital Markets
            </p>
            <p 
              className="text-lg md:text-xl mb-10 opacity-90 font-light"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              Designing financial pathways for sustainable success.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-aos="fade-up" 
              data-aos-delay="300"
            >
              <Link href="/#services">
                <Button 
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Discover Our Solutions
                </Button>
              </Link>
              <Link href="/#contact">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16" data-aos="fade-up" data-aos-delay="400">
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Growth Focused</h3>
              <p className="opacity-90">Strategic solutions designed to accelerate your business growth</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Trusted Expertise</h3>
              <p className="opacity-90">10+ years of excellence in financial advisory and investment banking</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Client Centric</h3>
              <p className="opacity-90">Bespoke financial solutions tailored to your unique needs</p>
            </div>
          </div>

          {/* UPDATED: Slower number animations (duration increased from 2000 to 4000ms) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20" data-aos="fade-up" data-aos-delay="500">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                <CountUp end={10} duration={4000} suffix="+" />
              </div>
              <p className="text-gray-300">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                <CountUp end={500} duration={4000} suffix="+" />
              </div>
              <p className="text-gray-300">Clients Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                <CountUp end={50} duration={4000} suffix="B+" prefix="₹" />
              </div>
              <p className="text-gray-300">Assets Under Advisory</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                <CountUp end={15} duration={4000} suffix="+" />
              </div>
              <p className="text-gray-300">States Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - Centered text */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Binary Capital</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 leading-relaxed">
                With over a decade of expertise in investment banking and financial advisory, Binary Capital has established itself as a trusted partner for businesses seeking bespoke financial strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be India's most trusted financial advisory firm, empowering businesses with innovative and sustainable financial solutions that drive long-term growth and value creation.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver bespoke financial strategies through deep market insights, innovative structuring, and unwavering commitment to client success. We design financial pathways that transform challenges into opportunities.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-blue-800 text-white p-10 rounded-2xl text-center" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-3xl font-bold mb-4">Why Choose Binary Capital?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div>
                  <div className="text-4xl font-bold text-amber-400 mb-2">10+</div>
                  <p className="text-gray-200">Years of Track Record</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-400 mb-2">Pan-India</div>
                  <p className="text-gray-200">Geographic Reach</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-400 mb-2">100%</div>
                  <p className="text-gray-200">Client Satisfaction Focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - Centered text, NO Transaction Advisory */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Services</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Finance Advisory */}
            <Link href="/finance-advisory" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">Finance Advisory</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Strategic financial planning, debt restructuring, and working capital optimization for sustainable growth.
                </p>
                <span className="text-primary font-semibold group-hover:underline">Learn More →</span>
              </div>
            </Link>

            {/* Project Advisory */}
            <Link href="/project-advisory" className="group">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-amber-600 transition-colors">Project Advisory</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  End-to-end project financing solutions for infrastructure, real estate, and large-scale developments.
                </p>
                <span className="text-amber-600 font-semibold group-hover:underline">Learn More →</span>
              </div>
            </Link>

            {/* Capital Markets */}
            <Link href="/capital-markets" className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors">Capital Markets</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Equity and debt capital raising, IPO advisory, and securities placement services.
                </p>
                <span className="text-green-600 font-semibold group-hover:underline">Learn More →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* INDIA PRESENCE SECTION - Video instead of image, NO states info */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Pan-India Presence</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving clients across India with local expertise and national reach
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
                <source src="/india_map.mp4" type="video/mp4" />
                <img src="/india_map_3d.jpg" alt="Binary Capital Pan-India Presence" className="w-full" />
              </video>
            </div>
            <div className="text-center mt-12">
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                With our headquarters in Mumbai and extensive network across India, we deliver world-class financial advisory services to businesses in major metros and tier-2 cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Sector-wise, no names, no images */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Client Success Stories</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading businesses across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {testimonial.sector}
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <p className="text-gray-500 font-medium">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION - NO images */}
      <section id="team" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Expert Team</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seasoned professionals with deep expertise across financial domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Leadership Team", role: "Strategic Vision & Governance", expertise: "40+ years combined experience in investment banking and finance" },
              { name: "Finance Advisory", role: "Structured Finance Specialists", expertise: "Expert in debt structuring, refinancing, and working capital solutions" },
              { name: "Project Advisory", role: "Infrastructure Finance Experts", expertise: "Specializing in large-scale project financing and PPP structures" },
              { name: "Capital Markets", role: "Equity & Debt Specialists", expertise: "IPO advisory, private placements, and securities market expertise" }
            ].map((member, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-amber-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.expertise}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-gradient-to-r from-primary to-blue-800 text-white p-10 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Join Our Growing Team</h3>
              <p className="text-xl mb-6 text-gray-100">
                We're always looking for talented professionals to join our mission of delivering excellence in financial advisory.
              </p>
              <Link href="/#contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - Centered text */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Get In Touch</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how we can help shape your financial success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Phone</h3>
              <p className="text-gray-600">+91 7738056127</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Email</h3>
              <p className="text-gray-600">sales@binarycapital.in</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Office</h3>
              <p className="text-gray-600">Andheri West<br />Mumbai, Maharashtra</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-gradient-to-r from-primary to-blue-800 p-10 rounded-2xl text-center text-white" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Financial Future?</h3>
            <p className="text-xl mb-8 text-gray-100">
              Schedule a consultation with our experts today and discover bespoke financial strategies tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+917738056127">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  Call Us Now
                </Button>
              </a>
              <a href="mailto:sales@binarycapital.in">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300">
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* UPDATED FOOTER - Improved design, removed LLP */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <Link href="/#home" className="inline-block mb-6">
                <img 
                  src="/binary_capital_logo.gif" 
                  alt="Binary Capital" 
                  className="h-16 w-auto"
                  loading="lazy"
                />
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Shaping success with bespoke financial strategies. Your trusted partner for investment banking and financial advisory services across India.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-amber-400">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/#home" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center group"><span className="mr-2 group-hover:mr-3 transition-all">→</span>Home</Link></li>
                <li><Link href="/#about" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center group"><span className="mr-2 group-hover:mr-3 transition-all">→</span>About Us</Link></li>
                <li><Link href="/#services" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center group"><span className="mr-2 group-hover:mr-3 transition-all">→</span>Services</Link></li>
                <li><Link href="/#team" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center group"><span className="mr-2 group-hover:mr-3 transition-all">→</span>Team</Link></li>
                <li><Link href="/#contact" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center group"><span className="mr-2 group-hover:mr-3 transition-all">→</span>Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-amber-400">Our Services</h3>
              <ul className="space-y-3">
                <li><Link href="/finance-advisory" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center group"><span className="mr-2 group-hover:mr-3 transition-all">→</span>Finance Advisory</Link></li>
                <li><Link href="/project-advisory" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center group"><span className="mr-2 group-hover:mr-3 transition-all">→</span>Project Advisory</Link></li>
                <li><Link href="/capital-markets" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center group"><span className="mr-2 group-hover:mr-3 transition-all">→</span>Capital Markets</Link></li>
              </ul>

              <h3 className="text-xl font-bold mb-6 mt-8 text-amber-400">Contact</h3>
              <ul className="space-y-3">
                <li className="text-gray-300 flex items-center"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>+91 7738056127</li>
                <li className="text-gray-300 flex items-center"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>sales@binarycapital.in</li>
                <li className="text-gray-300 flex items-start"><svg className="w-5 h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg><span>Andheri West, Mumbai, India</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
                © 2025 Binary Capital. All rights reserved. | Mumbai, India
              </p>
              <div className="flex space-x-6 text-sm">
                <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Privacy Policy</Link>
                <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
