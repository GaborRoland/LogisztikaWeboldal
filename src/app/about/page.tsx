import type { Metadata } from 'next';
import { teamMembers } from '@/lib/data';
import StatsCounter from '@/components/StatsCounter';
import CTASection from '@/components/CTASection';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about SwiftLogix — our mission, values, history, and the team behind our world-class logistics services.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About SwiftLogix</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            15 years of logistics excellence. Built on trust, driven by technology, delivered with care.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsCounter />
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At SwiftLogix, our mission is to empower businesses with reliable, efficient, and transparent logistics solutions. We believe that a well-optimized supply chain is a competitive advantage, and we work every day to give our clients that edge.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From startups to Fortune 500 companies, we partner with businesses of all sizes to streamline their logistics operations, reduce costs, and improve customer satisfaction.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                SwiftLogix was founded in 2009 by Robert Hartley and a team of seasoned logistics professionals who saw an opportunity to bring technology and transparency to an industry that desperately needed both.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Starting with a single warehouse and a regional delivery network, we&apos;ve grown into a full-service logistics provider operating in 50+ countries, handling over 10,000 shipments monthly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Reliability', desc: 'We deliver on our promises, every time. Your trust is our most valuable asset.' },
              { title: 'Innovation', desc: 'We continuously invest in technology to provide better, faster logistics solutions.' },
              { title: 'Transparency', desc: 'Full visibility into your supply chain. No surprises, just clear communication.' },
              { title: 'Partnership', desc: "We don't just serve clients — we build long-term partnerships for mutual success." },
            ].map((value) => (
              <div key={value.title} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-800">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-blue-800 mb-2">{member.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
