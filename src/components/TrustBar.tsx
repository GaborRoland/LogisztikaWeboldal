export default function TrustBar() {
  const stats = [
    { value: '10,000+', label: 'Monthly Deliveries' },
    { value: '50+', label: 'Countries Served' },
    { value: '99.8%', label: 'On-Time Rate' },
    { value: '24/7', label: 'Customer Support' },
  ];

  return (
    <section className="bg-blue-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">{stat.value}</div>
              <div className="text-sm text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
