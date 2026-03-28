import { Shield, Clock, BarChart3, Headphones } from 'lucide-react';

const differentiators = [
  {
    icon: Shield,
    title: 'Proven Reliability',
    description: 'With a 99.8% on-time delivery rate, we consistently deliver on our promises. Your cargo is in safe hands.',
  },
  {
    icon: Clock,
    title: 'Real-Time Tracking',
    description: 'Monitor your shipments 24/7 with our advanced tracking platform. Know exactly where your freight is at all times.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Insights',
    description: 'Our analytics dashboard provides actionable insights to optimize your supply chain and reduce costs.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Your personal account manager is always available. We provide 24/7 support because logistics never sleeps.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Companies Choose SwiftLogix
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We don&apos;t just move cargo — we build partnerships. Our technology-driven approach combined with personal service delivers results that matter to your business.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {differentiators.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="bg-blue-50 p-2.5 rounded-lg h-fit">
                    <item.icon className="h-5 w-5 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Our Track Record</h3>
            <div className="space-y-4">
              {[
                { label: 'On-Time Delivery', value: 99.8, color: 'bg-green-400' },
                { label: 'Order Accuracy', value: 99.5, color: 'bg-blue-400' },
                { label: 'Client Retention', value: 94, color: 'bg-purple-400' },
                { label: 'Customer Satisfaction', value: 97, color: 'bg-yellow-400' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-blue-200">{item.label}</span>
                    <span className="text-sm font-semibold">{item.value}%</span>
                  </div>
                  <div className="bg-blue-700/50 rounded-full h-2">
                    <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
