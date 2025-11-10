'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SupplyChainFinancing() {
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
      <section className="pt-32 pb-20 text-white relative overflow-hidden" style={{backgroundImage: 'url(/supply_chain_finance_indian-BGJYIPu2.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Supply Chain Financing</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Optimize working capital across your supply chain ecosystem
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6">Working Capital Optimization</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Supply chain financing represents a strategic approach to working capital management, enabling businesses to optimize cash flow while strengthening relationships with suppliers and buyers. Our solutions leverage technology and financial innovation to create win-win scenarios across the entire supply chain ecosystem.
            </p>
            
            <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
              <img src="/supply_chain_finance_indian-BGJYIPu2.png" alt="Supply Chain Financing" loading="lazy" className="w-full h-auto" />
            </div>

            {/* Key Features */}
            <h3 className="text-3xl font-bold text-primary mb-8">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary mb-3">Reverse Factoring</h4>
                <p className="text-gray-600">Enable suppliers to receive early payment while buyers extend payment terms, optimizing cash flow for all parties.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary mb-3">Dynamic Discounting</h4>
                <p className="text-gray-600">Flexible early payment programs that allow buyers to capture discounts based on available liquidity.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary mb-3">Invoice Financing</h4>
                <p className="text-gray-600">Unlock working capital by financing approved invoices at competitive rates with minimal documentation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary mb-3">Digital Platform Integration</h4>
                <p className="text-gray-600">Seamless integration with ERP and procurement systems for automated, efficient financing processes.</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-3xl font-bold text-primary mb-6">Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold text-primary mb-3">For Buyers</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-secondary text-xl mr-2">✓</span>
                      <span className="text-gray-700">Extended payment terms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary text-xl mr-2">✓</span>
                      <span className="text-gray-700">Improved supplier relationships</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary text-xl mr-2">✓</span>
                      <span className="text-gray-700">Supply chain resilience</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-3">For Suppliers</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-secondary text-xl mr-2">✓</span>
                      <span className="text-gray-700">Accelerated cash flow</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary text-xl mr-2">✓</span>
                      <span className="text-gray-700">Lower financing costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary text-xl mr-2">✓</span>
                      <span className="text-gray-700">Reduced credit risk</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <h3 className="text-3xl font-bold text-primary mb-6">Our Solutions</h3>
            <div className="space-y-4 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-primary mb-2">Payables Finance</h4>
                <p className="text-gray-600">Buyer-led programs that enable suppliers to receive early payment on approved invoices at favorable rates.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-primary mb-2">Receivables Finance</h4>
                <p className="text-gray-600">Supplier-led solutions to monetize receivables and improve cash conversion cycles.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-primary mb-2">Inventory Financing</h4>
                <p className="text-gray-600">Funding against inventory to optimize stock levels and reduce carrying costs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Optimize Your Supply Chain?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how supply chain financing can transform your working capital
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
