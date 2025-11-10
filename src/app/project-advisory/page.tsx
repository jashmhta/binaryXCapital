'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProjectAdvisory() {
  const structuredData = [
{
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Project Advisory",
    "provider": {
      "@type": "FinancialService",
      "name": "Binary Capital"
    },
    "description": "Long-term financing for infrastructure and industrial projects backed by project cash flows."
  },
    // Breadcrumb Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://binarycapital.manus.space/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://binarycapital.manus.space/#services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Project Advisory",
          "item": "https://binarycapital.manus.space/services/project-finance"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
              <img src="/logo-4zsp2eCD.png" alt="Binary Capital" loading="lazy" className="h-10" />
              <span className="text-xl font-bold text-primary">Binary Capital</span>
            </Link>
          <Link href="/" className="text-primary hover:text-secondary transition-colors">← Back to Home</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-white relative overflow-hidden" style={{backgroundImage: 'url(/project_finance_infrastructure-DqwfQxUe.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Project Advisory</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Long-term financing for infrastructure and industrial projects backed by project cash flows
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6">Infrastructure Development Financing</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Binary Capital provides comprehensive project finance advisory services for large-scale infrastructure and industrial projects. Our expertise in structuring non-recourse or limited recourse financing enables clients to undertake ambitious projects while managing risk effectively through Special Purpose Vehicles (SPVs) and optimal capital structures.
            </p>
            
            <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
              <img src="/project_finance_indian-BCTGt2M7.png" alt="Project Finance Solutions" loading="lazy" className="w-full h-auto" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-secondary mb-2">₹500+ Cr</div>
                <div className="text-gray-600">Project financing arranged</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                <div className="text-gray-600">Infrastructure projects financed</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                <div className="text-gray-600">Years average project tenure</div>
              </div>
            </div>

            <Button className="btn-primary mb-16">Discuss Your Project</Button>

            {/* Sectors We Finance */}
            <h3 className="text-3xl font-bold text-primary mb-8">Sectors We Finance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">Infrastructure</h4>
                <p className="text-gray-600">Roads, bridges, airports, and transportation systems</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">Energy</h4>
                <p className="text-gray-600">Power plants, renewable energy, and transmission lines</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">Water & Utilities</h4>
                <p className="text-gray-600">Water treatment, waste management, and utility networks</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">Real Estate</h4>
                <p className="text-gray-600">Commercial developments and mixed-use projects</p>
              </div>
            </div>

            {/* Project Finance Advantages */}
            <div className="bg-gray-50 rounded-lg p-8 mb-16">
              <h3 className="text-3xl font-bold text-primary mb-6">Project Advisory Advantages</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Non-recourse or limited recourse financing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Long-term funding for infrastructure projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Risk allocation among project stakeholders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Special Purpose Vehicle (SPV) structuring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Comprehensive due diligence and feasibility studies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Regulatory and environmental compliance support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Finance Your Infrastructure Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our project finance expertise can bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-secondary hover:bg-yellow-500 text-primary font-semibold px-8 py-3 rounded-lg">
              Schedule a Consultation
            </Button>
            <Link href="/#contact">
                <Button className="bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-3 rounded-lg">
                  Learn More
                </Button>
              </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Binary Capital Advisors LLP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
