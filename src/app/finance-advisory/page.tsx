'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FinanceAdvisory() {
  const structuredData = [
    // Service Schema
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Finance Advisory",
      "provider": {
        "@type": "FinancialService",
        "name": "Binary Capital"
      },
      "description": "Structured finance solutions including asset-backed securities, securitization, and innovative financial instruments.",
      "areaServed": "India"
    },
    // How-To Schema for Service Process
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Get Finance Advisory Services from Binary Capital",
      "description": "Step-by-step process to engage Binary Capital for structured finance advisory services.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Asset Analysis",
          "text": "Comprehensive evaluation of underlying assets and cash flows to understand the financial structure."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Structure Design",
          "text": "Creating tailored structures that optimize risk and return based on asset characteristics."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Risk Assessment",
          "text": "Identifying and mitigating potential risks through credit enhancement mechanisms."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Documentation",
          "text": "Comprehensive legal and regulatory documentation to ensure compliance."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Execution",
          "text": "Implementing the structured finance solution with stakeholder coordination."
        }
      ]
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
          "name": "Finance Advisory",
          "item": "https://binarycapital.manus.space/finance-advisory"
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
      <section className="pt-32 pb-20 text-white relative overflow-hidden" style={{backgroundImage: 'url(/structured_finance_indian-BBov35_e.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Finance Advisory</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Complex financing instruments tailored to meet unique capital needs while mitigating risk
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6">Innovative Financial Solutions</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Binary Capital specializes in designing sophisticated structured finance solutions that transform complex assets into investable securities. Our expertise spans asset-backed securities, securitization, and innovative financial instruments that optimize capital efficiency while managing risk effectively.
            </p>
            
            <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
              <img src="/structured_finance_indian-BBov35_e.png" alt="Structured Finance Solutions" loading="lazy" className="w-full h-auto" />
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Enhanced Returns</h3>
                  <p className="text-gray-600">Optimize capital structure to maximize returns while maintaining appropriate risk levels</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Risk Mitigation</h3>
                  <p className="text-gray-600">Advanced risk transfer mechanisms to protect stakeholder interests</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Expert Team</h3>
                  <p className="text-gray-600">Seasoned professionals with deep expertise in structured finance</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Regulatory Compliance</h3>
                  <p className="text-gray-600">Full compliance with regulatory requirements and documentation standards</p>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-gray-50 rounded-lg p-8 mb-16">
              <h3 className="text-3xl font-bold text-primary mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Customized financing structures for unique assets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Risk transfer and mitigation mechanisms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Enhanced credit ratings through structuring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Regulatory compliance and documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Optimal capital allocation strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Innovative financial instruments design</span>
                </li>
              </ul>
            </div>

            {/* Our Process */}
            <h3 className="text-3xl font-bold text-primary mb-8">Our Process</h3>
            <div className="space-y-6 mb-16">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold text-xl">1</div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Asset Analysis</h4>
                  <p className="text-gray-700">Comprehensive evaluation of underlying assets and cash flows</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold text-xl">2</div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Structure Design</h4>
                  <p className="text-gray-700">Creating tailored structures that optimize risk and return</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold text-xl">3</div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Risk Assessment</h4>
                  <p className="text-gray-700">Identifying and mitigating potential risks through credit enhancement</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold text-xl">4</div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Documentation</h4>
                  <p className="text-gray-700">Comprehensive legal and regulatory documentation</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold text-xl">5</div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Execution</h4>
                  <p className="text-gray-700">Implementing the structured finance solution with stakeholder coordination</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-4">Our Finance Products</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Explore our comprehensive range of financial products designed to meet your unique capital needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Structured Finance */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src="/structured_finance_indian-BBov35_e.png" alt="Structured Finance" loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">Structured Finance</h3>
                <p className="text-gray-600 mb-4">
                  Complex financing instruments tailored to transform unique assets into investable securities with optimized risk-return profiles.
                </p>
                <Link href="/products/structuredfinance" className="inline-block bg-secondary hover:bg-yellow-500 text-primary font-semibold px-6 py-2 rounded-lg transition-colors">
                    Learn More →
                  </Link>
              </div>
            </div>

            {/* Structured Bonds */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src="/corporate_bonds_indian-CxYuL8vR.png" alt="Structured Bonds" loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">Structured Bonds</h3>
                <p className="text-gray-600 mb-4">
                  Innovative debt instruments with customized cash flow structures designed to meet specific investor requirements and risk appetites.
                </p>
                <Link href="/products/structuredbonds" className="inline-block bg-secondary hover:bg-yellow-500 text-primary font-semibold px-6 py-2 rounded-lg transition-colors">
                    Learn More →
                  </Link>
              </div>
            </div>

            {/* Supply Chain Financing */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src="/supply_chain_finance_indian-BGJYIPu2.png" alt="Supply Chain Financing" loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">Supply Chain Financing</h3>
                <p className="text-gray-600 mb-4">
                  Working capital solutions that optimize cash flow across your supply chain while strengthening relationships with suppliers and buyers.
                </p>
                <Link href="/products/supplychainfinancing" className="inline-block bg-secondary hover:bg-yellow-500 text-primary font-semibold px-6 py-2 rounded-lg transition-colors">
                    Learn More →
                  </Link>
              </div>
            </div>

            {/* Project Financing */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src="/project_finance_indian-BCTGt2M7.png" alt="Project Financing" loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">Project Financing</h3>
                <p className="text-gray-600 mb-4">
                  Long-term financing for infrastructure and industrial projects backed by project cash flows with limited or non-recourse structures.
                </p>
                <Link href="/products/projectfinancing" className="inline-block bg-secondary hover:bg-yellow-500 text-primary font-semibold px-6 py-2 rounded-lg transition-colors">
                    Learn More →
                  </Link>
              </div>
            </div>

            {/* Mergers & Acquisitions */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src="/mergers_acquisitions_indian-DSrQjmOm.png" alt="Mergers & Acquisitions" loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">Mergers & Acquisitions</h3>
                <p className="text-gray-600 mb-4">
                  Strategic advisory and financing for M&A transactions to unlock synergies, drive growth, and create shareholder value.
                </p>
                <Link href="/products/mergersacquisitions" className="inline-block bg-secondary hover:bg-yellow-500 text-primary font-semibold px-6 py-2 rounded-lg transition-colors">
                    Learn More →
                  </Link>
              </div>
            </div>

            {/* Capital Markets */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src="/capital_markets_indian-DftKjrZq.png" alt="Capital Markets" loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">Capital Markets</h3>
                <p className="text-gray-600 mb-4">
                  Equity and debt capital raising through public and private markets connecting issuers with institutional and retail investors.
                </p>
                <Link href="/products/capitalmarkets-product" className="inline-block bg-secondary hover:bg-yellow-500 text-primary font-semibold px-6 py-2 rounded-lg transition-colors">
                    Learn More →
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore Finance Advisory?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our structured finance solutions can optimize your capital structure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-secondary hover:bg-yellow-500 text-primary font-semibold px-8 py-3 rounded-lg">
              Schedule a Consultation
            </Button>
            <Link href="/#contact">
                <Button className="bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-3 rounded-lg">
                  Contact Us Today
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
