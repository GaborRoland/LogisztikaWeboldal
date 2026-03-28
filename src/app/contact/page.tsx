import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with SwiftLogix for a free logistics quote or to discuss your supply chain needs. We respond within 24 hours.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to optimize your logistics? Our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-800 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone</p>
                      <a href="tel:+18005799483" className="text-sm text-blue-800 hover:underline">+1 (800) 579-9483</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-blue-800 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email</p>
                      <a href="mailto:info@swiftlogix.com" className="text-sm text-blue-800 hover:underline">info@swiftlogix.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-800 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Office</p>
                      <p className="text-sm text-gray-600">1234 Logistics Blvd, Suite 500<br />Chicago, IL 60601</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-800 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Business Hours</p>
                      <p className="text-sm text-gray-600">Mon–Fri: 8am–6pm CST<br />24/7 Emergency Support</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-800 rounded-xl p-6 text-white">
                <h3 className="font-semibold mb-2">Need Urgent Help?</h3>
                <p className="text-sm text-blue-200 mb-4">Our 24/7 support team is always available for urgent shipment issues.</p>
                <a href="tel:+18005799483" className="inline-flex items-center gap-2 bg-white text-blue-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors">
                  <Phone className="h-4 w-4" /> Call 24/7 Hotline
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
