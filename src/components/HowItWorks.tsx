const steps = [
  {
    number: '01',
    title: 'Get a Quote',
    description: 'Tell us about your logistics needs. Our team will analyze your requirements and provide a tailored quote within 24 hours.',
  },
  {
    number: '02',
    title: 'Plan & Prepare',
    description: 'Your dedicated account manager will design the optimal logistics strategy and coordinate all necessary arrangements.',
  },
  {
    number: '03',
    title: 'Ship & Track',
    description: 'Your shipment is collected, processed, and transported. Monitor everything in real-time through our tracking platform.',
  },
  {
    number: '04',
    title: 'Deliver & Report',
    description: 'On-time delivery with electronic proof of delivery. Receive detailed reports for full accountability and optimization.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started with SwiftLogix is simple. Our streamlined process gets your shipments moving fast.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-200 z-0 -translate-y-1/2" style={{ width: 'calc(100% - 3rem)', left: '50%' }} />
              )}
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-800 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
