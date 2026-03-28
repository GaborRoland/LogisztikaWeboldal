import type { Metadata } from 'next';
import { CheckCircle, Network } from 'lucide-react';
import CTASection from '@/components/CTASection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Supply Chain Solutions',
  description: 'End-to-end supply chain optimization and consulting. SwiftLogix helps businesses design, optimize, and manage resilient supply chains.',
};

export default function SupplyChainSolutionsPage() {
  const features = [
    'Supply chain assessment and optimization',
    'Network design and modeling',
    'Inventory optimization strategies',
    'Supplier management and development',
    'Risk assessment and mitigation planning',
    'Technology integration consulting',
    'Demand forecasting and planning',
    'Sustainability and carbon footprint reduction',
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/10 p-2 rounded-lg">
              <Network className="h-6 w-6" />
            </div>
            <span className="text-blue-200 text-sm font-medium">Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Supply Chain Solutions</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            End-to-end supply chain optimization that delivers measurable business results.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategic Supply Chain Excellence</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Your supply chain is more than a cost center — it&apos;s a competitive advantage. Our supply chain consulting team analyzes your current operations, identifies inefficiencies, and designs optimized solutions that reduce costs while improving service levels.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From network design to technology implementation, we work alongside your team to build a supply chain that&apos;s not just efficient today, but resilient for tomorrow&apos;s challenges.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Schedule a Consultation
              </Link>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Capabilities</h3>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
