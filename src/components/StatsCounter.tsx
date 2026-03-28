import { companyStats } from "@/lib/data";

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {companyStats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-4xl font-bold text-blue-800 mb-2">{stat.value}</div>
          <div className="text-gray-600 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
