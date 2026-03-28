import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'SwiftLogix - Move Smarter, Deliver Faster',
    template: '%s | SwiftLogix',
  },
  description: 'SwiftLogix delivers end-to-end logistics solutions including freight transportation, warehousing, last-mile delivery, and supply chain optimization.',
  keywords: ['logistics', 'freight transportation', 'warehousing', 'last-mile delivery', 'supply chain'],
  openGraph: {
    type: 'website',
    siteName: 'SwiftLogix',
    title: 'SwiftLogix - Move Smarter, Deliver Faster',
    description: 'End-to-end logistics solutions that keep your supply chain moving.',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SwiftLogix',
  description: 'End-to-end logistics solutions including freight transportation, warehousing, and supply chain optimization.',
  url: 'https://swiftlogix.com',
  telephone: '+18005799483',
  email: 'info@swiftlogix.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1234 Logistics Blvd, Suite 500',
    addressLocality: 'Chicago',
    addressRegion: 'IL',
    postalCode: '60601',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.facebook.com/swiftlogix',
    'https://www.twitter.com/swiftlogix',
    'https://www.linkedin.com/company/swiftlogix',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
