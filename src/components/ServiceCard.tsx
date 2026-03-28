import Link from 'next/link';
import { Truck, Warehouse, MapPin, Network, ArrowRight } from 'lucide-react';

const iconMap = {
  Truck,
  Warehouse,
  MapPin,
  Network,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] || Truck;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
      <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-blue-800" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{description}</p>
      <Link href={href} className="inline-flex items-center gap-1 text-blue-800 font-medium text-sm hover:gap-2 transition-all">
        Learn more <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
