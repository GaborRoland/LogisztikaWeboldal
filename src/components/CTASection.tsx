import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Optimize Your Logistics?
        </h2>
        <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
          Join 500+ companies that trust SwiftLogix to keep their supply chains running smoothly. Get a custom quote today — no obligation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors">
            Get a Free Quote <ArrowRight className="h-5 w-5" />
          </Link>
          <a href="tel:+18005799483" className="inline-flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            <Phone className="h-5 w-5" /> Call Us: +1 (800) 579-9483
          </a>
        </div>
      </div>
    </section>
  );
}
