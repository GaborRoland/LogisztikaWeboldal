'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Truck, Menu, X, ChevronDown } from 'lucide-react';

const serviceLinks = [
  { href: '/services/freight-transportation', label: 'Freight Transportation' },
  { href: '/services/warehousing-fulfillment', label: 'Warehousing & Fulfillment' },
  { href: '/services/last-mile-delivery', label: 'Last-Mile Delivery' },
  { href: '/services/supply-chain-solutions', label: 'Supply Chain Solutions' },
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/industries', label: 'Industries' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-800 p-1.5 rounded">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-blue-800">Swift<span className="text-green-600">Logix</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-blue-800' : 'text-gray-600 hover:text-blue-800'}`}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${pathname.startsWith('/services') ? 'text-blue-800' : 'text-gray-600 hover:text-blue-800'}`}>
                Services <ChevronDown className="h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 font-medium">
                    All Services
                  </Link>
                  <div className="border-t border-gray-100 my-1" />
                  {serviceLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-800">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href} className={`text-sm font-medium transition-colors ${isActive(link.href) ? 'text-blue-800' : 'text-gray-600 hover:text-blue-800'}`}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors">
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-800 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            <Link href="/" className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-800" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <div>
              <p className="py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">Services</p>
              <Link href="/services" className="block py-1.5 pl-3 text-sm text-gray-700 hover:text-blue-800" onClick={() => setIsMenuOpen(false)}>
                All Services
              </Link>
              {serviceLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block py-1.5 pl-3 text-sm text-gray-600 hover:text-blue-800" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
            {navLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href} className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-800" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link href="/contact" className="block w-full text-center bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors" onClick={() => setIsMenuOpen(false)}>
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
