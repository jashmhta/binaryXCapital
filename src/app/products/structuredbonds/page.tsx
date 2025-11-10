'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function StructuredBonds() {
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
      <section className="pt-32 pb-20 text-white relative overflow-hidden" style={{backgroundImage: 'url(/corporate_bonds_indian-CxYuL8vR.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Structured Bonds</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Customized debt instruments designed to meet specific investor requirements and risk appetites
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6">Innovative Debt Solutions</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Structured bonds represent a sophisticated evolution of traditional debt instruments, offering customized cash flow patterns, embedded options, and tailored risk-return profiles. Our expertise spans the design and issuance of complex bond structures that cater to diverse investor needs while optimizing funding costs for issuers.
            </p>
            
            <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
              <img src="/corporate_bonds_indian-CxYuL8vR.png" alt="Structured Bonds" loading="lazy" className="w-full h-auto" />
            </div>

            {/* Key Features */}
            <h3 className="text-3xl font-bold text-primary mb-8">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary mb-3">Customized Cash Flows</h4>
                <p className="text-gray-600">Design bespoke coupon structures including step-up, step-down, floating, and zero-coupon formats.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary mb-3">Embedded Options</h4>
                <p className="text-gray-600">Incorporate call, put, and conversion features to optimize value for both issuers and investors.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary mb-3">Credit Enhancement</h4>
                <p className="text-gray-600">Utilize guarantees, collateral, and other mechanisms to improve credit ratings and reduce borrowing costs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary mb-3">Regulatory Compliance</h4>
                <p className="text-gray-600">Full compliance with SEBI regulations and listing requirements for public and private placements.</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-3xl font-bold text-primary mb-6">Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Lower funding costs through optimized structures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Access to diverse investor segments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Flexibility in repayment terms and conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Enhanced credit ratings through structuring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Tailored to specific business requirements</span>
                </li>
              </ul>
            </div>

            {/* Types */}
            <h3 className="text-3xl font-bold text-primary mb-6">Types of Structured Bonds</h3>
            <div className="space-y-4 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-primary mb-2">Convertible Bonds</h4>
                <p className="text-gray-600">Debt instruments with embedded equity conversion options, offering downside protection with upside participation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-primary mb-2">Callable/Putable Bonds</h4>
                <p className="text-gray-600">Bonds with embedded call or put options providing flexibility to issuers or investors based on market conditions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-primary mb-2">Index-Linked Bonds</h4>
                <p className="text-gray-600">Bonds with returns linked to specific indices, commodities, or economic indicators for inflation protection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Explore Structured Bonds?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how structured bonds can optimize your capital structure
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
