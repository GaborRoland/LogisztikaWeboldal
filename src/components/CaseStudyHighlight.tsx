import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { caseStudies } from '@/lib/data';

export default function CaseStudyHighlight() {
  const featured = caseStudies[0];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Client Success Story</h2>
          <p className="text-lg text-gray-600">See how we transform logistics operations</p>
        </div>
        <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl text-white p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-green-400 text-sm font-semibold uppercase tracking-wide">{featured.industry}</span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-2 mb-4">{featured.title}</h3>
              <div className="mb-4">
                <h4 className="text-blue-200 text-sm font-semibold uppercase tracking-wide mb-2">The Challenge</h4>
                <p className="text-blue-100 leading-relaxed">{featured.challenge}</p>
              </div>
              <div>
                <h4 className="text-blue-200 text-sm font-semibold uppercase tracking-wide mb-2">Our Solution</h4>
                <p className="text-blue-100 leading-relaxed">{featured.solution}</p>
              </div>
            </div>
            <div>
              <h4 className="text-blue-200 text-sm font-semibold uppercase tracking-wide mb-4">Results Achieved</h4>
              <div className="space-y-3 mb-8">
                {featured.results.map((result) => (
                  <div key={result} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                    <span className="text-white font-medium">{result}</span>
                  </div>
                ))}
              </div>
              <Link href="/case-studies" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                View All Case Studies <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
