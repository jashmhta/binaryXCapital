'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function StructuredFinance() {
  return (
    <div className="min-h-screen bg-blue-50/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
              <img src="/logo-4zsp2eCD.png" alt="Binary Capital" loading="lazy" className="h-10" />
              <span className="text-xl font-bold text-primary">Binary Capital</span>
            </Link>
          <Link href="/finance-advisory" className="text-primary hover:text-secondary transition-colors">← Back to Finance Advisory</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-white relative overflow-hidden" style={{backgroundImage: 'url(/structured_finance_indian-BBov35_e.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Structured Finance</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Transform complex assets into investable securities with optimized risk-return profiles
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6">Innovative Asset Transformation</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Structured finance represents the pinnacle of financial engineering, enabling organizations to unlock value from complex asset pools through securitization and innovative financial instruments. Our team specializes in designing bespoke structures that optimize capital efficiency while managing risk through sophisticated tranching and credit enhancement mechanisms.
            </p>
            
            <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
              <img src="/structured_finance_indian-BBov35_e.png" alt="Structured Finance Solutions" loading="lazy" className="w-full h-auto" />
            </div>

            {/* Key Features */}
            <h3 className="text-3xl font-bold text-primary mb-8">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary mb-3">Asset-Backed Securities (ABS)</h4>
                <p className="text-gray-600">Transform receivables, loans, and other assets into tradable securities with enhanced liquidity and optimized pricing.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary mb-3">Securitization Structures</h4>
                <p className="text-gray-600">Design multi-tranche structures that cater to different investor risk appetites while maximizing overall value.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary mb-3">Credit Enhancement</h4>
                <p className="text-gray-600">Implement sophisticated credit enhancement techniques including overcollateralization, reserve accounts, and guarantees.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary mb-3">Risk Transfer Mechanisms</h4>
                <p className="text-gray-600">Advanced risk allocation strategies that protect stakeholders while optimizing capital requirements.</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-3xl font-bold text-primary mb-6">Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Enhanced liquidity through asset securitization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Optimized capital structure and reduced funding costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Risk transfer to capital markets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Regulatory capital relief for financial institutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Access to diverse investor base</span>
                </li>
              </ul>
            </div>

            {/* Use Cases */}
            <h3 className="text-3xl font-bold text-primary mb-6">Typical Use Cases</h3>
            <div className="space-y-4 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-primary mb-2">Mortgage-Backed Securities</h4>
                <p className="text-gray-600">Securitization of residential and commercial mortgage portfolios to enhance liquidity and transfer credit risk.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-primary mb-2">Trade Receivables Securitization</h4>
                <p className="text-gray-600">Converting trade receivables into securities to optimize working capital and improve cash flow management.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-primary mb-2">Infrastructure Asset Monetization</h4>
                <p className="text-gray-600">Unlocking value from operational infrastructure assets through structured finance techniques.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Interested in Structured Finance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our structured finance solutions can transform your asset portfolio
          </p>
          <Link href="/#contact">
              <Button className="bg-secondary hover:bg-yellow-500 text-primary font-semibold px-8 py-3 rounded-lg">
                Contact Us Today
              </Button>
            </Link>
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
