import Link from 'next/link';
import { Truck, Phone, Mail, MapPin, Globe, Share2, ExternalLink, MessageSquareShare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-blue-800 p-1.5 rounded">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Swift<span className="text-green-400">Logix</span></span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              SwiftLogix delivers end-to-end logistics solutions that keep your supply chain moving. Trusted by 500+ companies worldwide.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-gray-800 hover:bg-blue-800 p-2 rounded-lg transition-colors" aria-label="Facebook">
                <Globe className="h-4 w-4" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-800 p-2 rounded-lg transition-colors" aria-label="Twitter">
                <Share2 className="h-4 w-4" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-800 p-2 rounded-lg transition-colors" aria-label="LinkedIn">
                <ExternalLink className="h-4 w-4" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-800 p-2 rounded-lg transition-colors" aria-label="Instagram">
                <MessageSquareShare className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { href: '/services/freight-transportation', label: 'Freight Transportation' },
                { href: '/services/warehousing-fulfillment', label: 'Warehousing & Fulfillment' },
                { href: '/services/last-mile-delivery', label: 'Last-Mile Delivery' },
                { href: '/services/supply-chain-solutions', label: 'Supply Chain Solutions' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/industries', label: 'Industries' },
                { href: '/case-studies', label: 'Case Studies' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-green-400 shrink-0" />
                <a href="tel:+18005799483" className="text-sm hover:text-white transition-colors">+1 (800) 579-9483</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-green-400 shrink-0" />
                <a href="mailto:info@swiftlogix.com" className="text-sm hover:text-white transition-colors">info@swiftlogix.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-green-400 shrink-0" />
                <span className="text-sm">1234 Logistics Blvd, Suite 500<br />Chicago, IL 60601</span>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Certifications</p>
              <div className="flex flex-wrap gap-2">
                {['ISO 9001', 'ISO 28000', 'C-TPAT'].map((cert) => (
                  <span key={cert} className="bg-gray-800 text-xs px-2 py-1 rounded font-medium text-gray-300">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} SwiftLogix. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
