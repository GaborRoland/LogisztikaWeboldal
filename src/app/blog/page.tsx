import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, trends, and best practices in logistics, supply chain management, and freight transportation from the SwiftLogix team.',
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Logistics Insights</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Expert insights on logistics, supply chain, and freight transportation trends.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-blue-800 to-blue-900 h-40 flex items-center justify-center">
                  <span className="text-4xl">🚛</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-50 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">{post.category}</span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">{post.title}</h2>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <Link href={`/blog/${post.slug}`} className="text-blue-800 text-sm font-medium hover:text-blue-600 flex items-center gap-1">
                      Read more <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
