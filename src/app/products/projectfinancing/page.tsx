'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProjectFinancing() {
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
      <section className="pt-32 pb-20 text-white relative overflow-hidden" style={{backgroundImage: 'url(/project_finance_infrastructure-DqwfQxUe.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Project Financing</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Long-term financing for infrastructure and industrial projects backed by project cash flows
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6">Infrastructure Development Finance</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Project financing enables the development of large-scale infrastructure and industrial projects through non-recourse or limited recourse debt structures. By creating Special Purpose Vehicles (SPVs) and carefully allocating risks among stakeholders, we help bring ambitious projects to life while protecting sponsor balance sheets.
            </p>
            
            <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
              <img src="/project_finance_infrastructure-DqwfQxUe.png" alt="Project Financing" loading="lazy" className="w-full h-auto" />
            </div>

            {/* Key Features */}
            <h3 className="text-3xl font-bold text-primary mb-8">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary mb-3">Non-Recourse Structures</h4>
                <p className="text-gray-600">Financing based on project cash flows with limited or no recourse to sponsors, protecting corporate balance sheets.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary mb-3">SPV Structuring</h4>
                <p className="text-gray-600">Creation of Special Purpose Vehicles to ring-fence project assets and liabilities for optimal risk management.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary mb-3">Risk Allocation</h4>
                <p className="text-gray-600">Sophisticated risk allocation among sponsors, lenders, contractors, and off-takers through contractual frameworks.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary mb-3">Long-Term Funding</h4>
                <p className="text-gray-600">Tenor matching project life cycles, typically 15-25 years, aligned with asset cash generation profiles.</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-3xl font-bold text-primary mb-6">Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Off-balance sheet financing for sponsors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Higher leverage ratios due to ring-fencing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Risk sharing among multiple stakeholders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Access to institutional capital for large projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Alignment of interests through contractual structures</span>
                </li>
              </ul>
            </div>

            {/* Sectors */}
            <h3 className="text-3xl font-bold text-primary mb-6">Sectors We Serve</h3>
            <div className="space-y-4 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-primary mb-2">Power & Renewable Energy</h4>
                <p className="text-gray-600">Thermal, hydro, solar, and wind power projects with long-term PPAs and revenue visibility.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-primary mb-2">Transportation Infrastructure</h4>
                <p className="text-gray-600">Roads, highways, airports, and ports with toll-based or availability payment mechanisms.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-primary mb-2">Industrial & Manufacturing</h4>
                <p className="text-gray-600">Large-scale industrial facilities with long-term off-take agreements and predictable cash flows.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-primary mb-2">Social Infrastructure</h4>
                <p className="text-gray-600">Healthcare, education, and hospitality projects with stable revenue streams.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Finance Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how project financing can bring your infrastructure vision to life
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
