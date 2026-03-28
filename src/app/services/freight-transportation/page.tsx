import type { Metadata } from 'next';
import { CheckCircle, Truck } from 'lucide-react';
import CTASection from '@/components/CTASection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Freight Transportation Services',
  description: 'Global freight solutions by air, sea, and land. SwiftLogix provides reliable, cost-effective freight transportation for businesses worldwide.',
};

export default function FreightTransportationPage() {
  const features = [
    'Air freight for time-sensitive shipments',
    'Ocean freight for cost-effective large volumes',
    'Road freight for domestic and cross-border',
    'Rail freight for sustainable bulk shipping',
    'Real-time shipment tracking',
    'Customs clearance and documentation',
    'Dangerous goods handling',
    'Project cargo management',
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/10 p-2 rounded-lg">
              <Truck className="h-6 w-6" />
            </div>
            <span className="text-blue-200 text-sm font-medium">Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Freight Transportation</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Global freight solutions by air, sea, and land. Reliable, cost-effective, and fully trackable.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Freight Solutions</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our freight transportation services connect your business to markets worldwide. With access to a global network of carriers and our proprietary routing technology, we find the optimal balance of speed, cost, and reliability for every shipment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you need urgent air freight or cost-effective ocean shipping, our team of freight specialists will design the right solution for your needs.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Get a Freight Quote
              </Link>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What&apos;s Included</h3>
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

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Freight Modes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { mode: 'Air Freight', desc: 'Fast international shipping for time-critical cargo. Door-to-door service worldwide.' },
              { mode: 'Ocean Freight', desc: 'FCL and LCL ocean shipping for cost-effective international transport of large volumes.' },
              { mode: 'Road Freight', desc: 'FTL and LTL trucking for domestic and cross-border freight across North America.' },
              { mode: 'Rail Freight', desc: 'Sustainable, reliable rail transport for bulk shipments over long distances.' },
            ].map((item) => (
              <div key={item.mode} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-blue-800 mb-2">{item.mode}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
