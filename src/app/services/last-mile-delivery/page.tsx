import type { Metadata } from 'next';
import { CheckCircle, MapPin } from 'lucide-react';
import CTASection from '@/components/CTASection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Last-Mile Delivery Services',
  description: "Reliable, fast last-mile delivery to your customers' doorsteps. Real-time tracking, flexible delivery windows, and electronic proof of delivery.",
};

export default function LastMileDeliveryPage() {
  const features = [
    'Same-day and next-day delivery options',
    'Real-time delivery tracking for customers',
    'Electronic proof of delivery (ePOD)',
    'Flexible delivery time windows',
    'Returns pickup service',
    'White-glove delivery for premium items',
    'Age-verified delivery for restricted products',
    'Signature-required deliveries',
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/10 p-2 rounded-lg">
              <MapPin className="h-6 w-6" />
            </div>
            <span className="text-blue-200 text-sm font-medium">Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Last-Mile Delivery</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            The final step in the delivery journey — done right, every time.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Delivery That Delights</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Last-mile delivery is your customer&apos;s final experience with your brand. We treat every delivery as an opportunity to exceed expectations. Our delivery network covers major metropolitan areas with same-day capability and extends to suburban and rural areas for next-day service.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                With real-time tracking notifications, customers always know when to expect their delivery. Our drivers are trained, vetted, and equipped with technology that ensures accurate, on-time delivery every time.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Get a Delivery Quote
              </Link>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Features</h3>
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
