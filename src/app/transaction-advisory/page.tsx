'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TransactionAdvisory() {
  const structuredData = [
{
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Transaction Advisory - M&A",
    "provider": {
      "@type": "FinancialService",
      "name": "Binary Capital"
    },
    "description": "Strategic M&A advisory for combining or acquiring companies to unlock synergies and drive growth."
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
          "name": "Transaction Advisory",
          "item": "https://binarycapital.manus.space/services/mergers-acquisitions"
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
      <section className="pt-32 pb-20 text-white relative overflow-hidden" style={{backgroundImage: 'url(/mergers_acquisitions_corporate-BKDwLmVP.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Transaction Advisory</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Strategic advisory for combining or acquiring companies to unlock synergies and growth
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6">Strategic M&A Advisory</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Binary Capital provides end-to-end transaction advisory services for mergers, acquisitions, and divestitures. Our team combines strategic insight with execution excellence to help clients achieve their growth objectives through well-structured transactions.
            </p>
            
            <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
              <img src="/mergers_acquisitions_indian-DSrQjmOm.png" alt="M&A Advisory Services" loading="lazy" className="w-full h-auto" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-secondary mb-2">₹1000+ Cr</div>
                <div className="text-sm text-gray-600">Transaction value</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-secondary mb-2">100+</div>
                <div className="text-sm text-gray-600">Successful transactions</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-secondary mb-2">Cross-border</div>
                <div className="text-sm text-gray-600">Expertise</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-secondary mb-2">Multi-sector</div>
                <div className="text-sm text-gray-600">Experience</div>
              </div>
            </div>

            <Button className="btn-primary mb-16">Explore M&A Opportunities</Button>

            {/* Transaction Types */}
            <h3 className="text-3xl font-bold text-primary mb-8">Transaction Types</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-primary mb-3">Strategic Acquisitions</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Market expansion</li>
                  <li>• Technology acquisition</li>
                  <li>• Synergy realization</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-primary mb-3">Financial Acquisitions</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Value creation</li>
                  <li>• Portfolio diversification</li>
                  <li>• Exit strategies</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-primary mb-3">Mergers</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Scale benefits</li>
                  <li>• Cost synergies</li>
                  <li>• Market leadership</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-primary mb-3">Divestitures</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Focus on core business</li>
                  <li>• Capital optimization</li>
                  <li>• Value unlock</li>
                </ul>
              </div>
            </div>

            {/* M&A Process */}
            <h3 className="text-3xl font-bold text-primary mb-8">M&A Process</h3>
            <div className="space-y-6 mb-16">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold">1</div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Strategy & Planning (2-4 weeks)</h4>
                  <p className="text-gray-700">Define objectives and develop acquisition strategy</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold">2</div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Target Evaluation (4-6 weeks)</h4>
                  <p className="text-gray-700">Screen potential targets and preliminary analysis</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold">3</div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Due Diligence (6-8 weeks)</h4>
                  <p className="text-gray-700">Comprehensive financial, legal, and operational analysis</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold">4</div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Valuation & Structuring (2-3 weeks)</h4>
                  <p className="text-gray-700">Determine fair value and optimal deal structure</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold">5</div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Negotiation & Closing (4-6 weeks)</h4>
                  <p className="text-gray-700">Negotiate final terms and complete transaction</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold">6</div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Integration (6-12 months)</h4>
                  <p className="text-gray-700">Post-merger integration support</p>
                </div>
              </div>
            </div>

            {/* Our M&A Services */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-primary mb-6">Our M&A Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Strategic planning and target identification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Comprehensive valuation and financial modeling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Due diligence coordination and management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Deal structuring and negotiation support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Regulatory approval and compliance guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Post-merger integration advisory</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore M&A Opportunities?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how strategic transactions can accelerate your growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-secondary hover:bg-yellow-500 text-primary font-semibold px-8 py-3 rounded-lg">
              Schedule a Consultation
            </Button>
            <Link href="/#contact">
                <Button className="bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-3 rounded-lg">
                  Discuss Your Strategy
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
