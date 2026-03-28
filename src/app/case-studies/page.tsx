import type { Metadata } from 'next';
import { caseStudies, testimonials } from '@/lib/data';
import { CheckCircle, Star } from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'See how SwiftLogix has helped companies across industries transform their logistics operations and achieve measurable results.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Client Success Stories</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Real results from real companies. See how SwiftLogix transforms logistics operations.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-gray-50 rounded-2xl p-8 lg:p-10">
                <div className="grid lg:grid-cols-2 gap-10">
                  <div>
                    <span className="text-green-600 text-sm font-semibold uppercase tracking-wide">{study.industry}</span>
                    <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-4">{study.title}</h2>
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Challenge</h3>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Solution</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Results</h3>
                    <ul className="space-y-3">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-medium">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.title}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
