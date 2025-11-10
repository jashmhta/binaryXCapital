'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CapitalMarketsProduct() {
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
      <section className="pt-32 pb-20 text-white relative overflow-hidden" style={{backgroundImage: 'url(/capital_markets_trading-CJnSWxgM.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Capital Markets</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Connect with global investors through equity and debt capital markets
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6">Access to Capital Markets</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Capital markets provide companies with access to a diverse pool of institutional and retail investors for equity and debt financing. Our comprehensive capital markets advisory services help issuers navigate the complexities of public and private offerings, ensuring optimal pricing, timing, and execution for successful capital raising.
            </p>
            
            <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
              <img src="/capital_markets_indian-DftKjrZq.png" alt="Capital Markets" loading="lazy" className="w-full h-auto" />
            </div>

            {/* Services */}
            <h3 className="text-3xl font-bold text-primary mb-8">Our Capital Markets Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary mb-3">IPO Advisory</h4>
                <p className="text-gray-600">End-to-end support for initial public offerings including structuring, pricing, and investor outreach.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary mb-3">Follow-On Offerings</h4>
                <p className="text-gray-600">Secondary equity offerings and rights issues to raise additional capital for growth initiatives.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary mb-3">Debt Issuance</h4>
                <p className="text-gray-600">Public and private debt offerings including bonds, debentures, and commercial paper programs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary mb-3">Investor Relations</h4>
                <p className="text-gray-600">Ongoing investor communication and roadshow support to maintain strong market relationships.</p>
              </div>
            </div>

            {/* Equity Markets */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-3xl font-bold text-primary mb-6">Equity Capital Markets</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2">Initial Public Offerings (IPOs)</h4>
                  <p className="text-gray-700">Complete IPO advisory from pre-listing preparation through listing and post-IPO stabilization.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2">Qualified Institutional Placements (QIPs)</h4>
                  <p className="text-gray-700">Fast-track equity fundraising from institutional investors for listed companies.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2">Private Placements</h4>
                  <p className="text-gray-700">Strategic equity placements with select institutional and strategic investors.</p>
                </div>
              </div>
            </div>

            {/* Debt Markets */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-3xl font-bold text-primary mb-6">Debt Capital Markets</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2">Corporate Bonds</h4>
                  <p className="text-gray-700">Public and private bond issuances with customized terms and structures.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2">Non-Convertible Debentures (NCDs)</h4>
                  <p className="text-gray-700">Fixed-income securities offering attractive yields to retail and institutional investors.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2">Commercial Paper</h4>
                  <p className="text-gray-700">Short-term funding instruments for working capital and bridge financing needs.</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <h3 className="text-3xl font-bold text-primary mb-6">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              <div className="flex items-start space-x-3">
                <span className="text-secondary text-2xl">✓</span>
                <span className="text-gray-700">Access to diverse investor base</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-secondary text-2xl">✓</span>
                <span className="text-gray-700">Competitive pricing through market discovery</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-secondary text-2xl">✓</span>
                <span className="text-gray-700">Enhanced corporate visibility and credibility</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-secondary text-2xl">✓</span>
                <span className="text-gray-700">Flexible funding options</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-secondary text-2xl">✓</span>
                <span className="text-gray-700">Improved liquidity for shareholders</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-secondary text-2xl">✓</span>
                <span className="text-gray-700">Long-term investor relationships</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Access Capital Markets?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how capital markets can fuel your growth ambitions
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
