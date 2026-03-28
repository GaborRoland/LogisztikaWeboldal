import type { Metadata } from 'next';
import { CheckCircle, Warehouse } from 'lucide-react';
import CTASection from '@/components/CTASection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Warehousing & Fulfillment Services',
  description: 'State-of-the-art warehousing and fulfillment services with real-time inventory management. Scale your fulfillment operations with SwiftLogix.',
};

export default function WarehousingFulfillmentPage() {
  const features = [
    'Strategic locations nationwide',
    'Real-time inventory visibility',
    'Pick, pack, and ship services',
    'Returns management (reverse logistics)',
    'Temperature-controlled storage',
    'EDI integration with major platforms',
    'Kitting and assembly services',
    'Hazmat-certified storage',
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/10 p-2 rounded-lg">
              <Warehouse className="h-6 w-6" />
            </div>
            <span className="text-blue-200 text-sm font-medium">Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Warehousing &amp; Fulfillment</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            State-of-the-art facilities with real-time inventory management and fast order processing.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Fulfillment Built for Growth</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our warehousing and fulfillment network is designed to scale with your business. With facilities strategically located across the country, we put your inventory closer to your customers, reducing shipping times and costs.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our technology-driven warehouse management system provides real-time inventory visibility, automated replenishment alerts, and seamless integration with your e-commerce platform.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Get Warehousing Quote
              </Link>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Capabilities</h3>
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
