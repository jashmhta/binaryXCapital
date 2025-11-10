'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CapitalMarkets() {
  const structuredData = [
{
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Capital Markets",
    "provider": {
      "@type": "FinancialService",
      "name": "Binary Capital"
    },
    "description": "Advisory and execution services for equity and debt capital market transactions."
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
          "name": "Capital Markets",
          "item": "https://binarycapital.manus.space/services/capital-markets"
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
      <section className="pt-32 pb-20 text-white relative overflow-hidden" style={{backgroundImage: 'url(/capital_markets_trading-CJnSWxgM.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Capital Markets</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Advisory and execution services for equity and debt capital market transactions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6">Connect with Global Investors</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Binary Capital provides comprehensive capital markets advisory services, helping companies access equity and debt markets efficiently. Our deep relationships with institutional investors and expertise in market dynamics enable optimal pricing and successful capital raising.
            </p>
            
            <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
              <img src="/capital_markets_indian-DftKjrZq.png" alt="Capital Markets Solutions" loading="lazy" className="w-full h-auto" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-secondary mb-2">₹2000+ Cr</div>
                <div className="text-gray-600">Capital raised</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-secondary mb-2">75+</div>
                <div className="text-gray-600">Transactions completed</div>
              </div>
            </div>

            <Button className="btn-primary mb-16">Access Capital Markets</Button>

            {/* Our Offerings */}
            <h3 className="text-3xl font-bold text-primary mb-8">Our Offerings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-primary mb-3">Equity Capital Markets</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• IPOs and public offerings</li>
                  <li>• Rights issues</li>
                  <li>• QIP placements</li>
                  <li>• Institutional placements</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-primary mb-3">Debt Capital Markets</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Corporate bonds</li>
                  <li>• Commercial paper</li>
                  <li>• NCDs</li>
                  <li>• Structured products</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-primary mb-3">Private Placements</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Institutional placements</li>
                  <li>• Strategic investors</li>
                  <li>• PE/VC funding</li>
                  <li>• PIPE transactions</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-primary mb-3">Cross-border Transactions</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• ADR/GDR programs</li>
                  <li>• Offshore listings</li>
                  <li>• Foreign investments</li>
                  <li>• Global roadshows</li>
                </ul>
              </div>
            </div>

            {/* Transaction Process */}
            <h3 className="text-3xl font-bold text-primary mb-8">Transaction Process</h3>
            <div className="space-y-6 mb-16">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold">1</div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Preparation</h4>
                  <p className="text-gray-700">Financial due diligence, documentation, and regulatory filings</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold">2</div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Marketing</h4>
                  <p className="text-gray-700">Investor presentations, roadshows, and market education</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold">3</div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Pricing</h4>
                  <p className="text-gray-700">Book building, price discovery, and allocation decisions</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold">4</div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Execution</h4>
                  <p className="text-gray-700">Transaction completion and settlement processes</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-50 rounded-lg p-8 mb-16">
              <h3 className="text-3xl font-bold text-primary mb-6">Why Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Access to diverse investor base</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Optimal pricing and market timing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Regulatory expertise and compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Strong institutional relationships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Post-transaction support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Market intelligence and insights</span>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <h3 className="text-3xl font-bold text-primary mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Initial Public Offerings (IPO) advisory</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Secondary equity offerings and placements</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Debt capital market transactions</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Investor targeting and roadshow management</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Regulatory compliance and documentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Post-listing investor relations support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Access Capital Markets?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's explore how we can help you raise capital efficiently
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-secondary hover:bg-yellow-500 text-primary font-semibold px-8 py-3 rounded-lg">
              Schedule a Consultation
            </Button>
            <Link href="/#contact">
                <Button className="bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-3 rounded-lg">
                  Explore Opportunities
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
