import type { Metadata } from 'next';
import { ShoppingCart, Heart, UtensilsCrossed, Cpu, Car, Factory } from 'lucide-react';
import { industries } from '@/lib/data';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'SwiftLogix provides specialized logistics solutions for e-commerce, pharmaceuticals, food & beverage, technology, automotive, and manufacturing industries.',
};

const iconMap = {
  ShoppingCart,
  Heart,
  UtensilsCrossed,
  Cpu,
  Car,
  Factory,
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Specialized logistics expertise across diverse industries. We understand your sector&apos;s unique requirements.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon as keyof typeof iconMap] || ShoppingCart;
              return (
                <div key={industry.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-blue-800" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h2>
                  <p className="text-gray-600 leading-relaxed">{industry.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
