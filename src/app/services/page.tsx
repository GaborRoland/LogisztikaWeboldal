import type { Metadata } from 'next';
import { services } from '@/lib/data';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Our Services',
  description: "Explore SwiftLogix's comprehensive logistics services: freight transportation, warehousing, last-mile delivery, and supply chain solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Logistics Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            End-to-end logistics solutions designed to meet your unique business needs.
          </p>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
