import { ShoppingCart, Heart, UtensilsCrossed, Cpu, Car, Factory } from 'lucide-react';
import Link from 'next/link';
import { industries } from '@/lib/data';

const iconMap = {
  ShoppingCart,
  Heart,
  UtensilsCrossed,
  Cpu,
  Car,
  Factory,
};

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized logistics solutions for diverse industries. We understand your sector&apos;s unique requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon as keyof typeof iconMap] || ShoppingCart;
            return (
              <div key={industry.name} className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors group">
                <div className="bg-white group-hover:bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors shadow-sm">
                  <Icon className="h-6 w-6 text-blue-800" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{industry.description}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Link href="/industries" className="inline-flex items-center gap-2 text-blue-800 font-semibold hover:text-blue-600 transition-colors">
            View all industries →
          </Link>
        </div>
      </div>
    </section>
  );
}
