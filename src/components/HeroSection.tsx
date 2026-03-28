import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-700/50 border border-blue-600/50 rounded-full px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm font-medium text-blue-100">Trusted by 500+ companies worldwide</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
            Move Smarter,<br />
            <span className="text-green-400">Deliver Faster</span>
          </h1>

          <p className="text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl">
            SwiftLogix delivers end-to-end logistics solutions that keep your supply chain moving. From freight transportation to last-mile delivery, we handle it all with precision and care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get a Free Quote <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              View Services
            </Link>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              '10,000+ Deliveries Monthly',
              '99.8% On-Time Rate',
              '24/7 Support',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-blue-100">
                <CheckCircle className="h-5 w-5 text-green-400 shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
