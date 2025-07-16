'use client';

import { useState } from 'react';
import BlogCard from '@/components/BlogCard';
import { BlogPost } from '@/types/blog';
import { getAllBlogPosts, getAllCategories } from '@/lib/blog';

// TODO: integrate with backend API here
// Replace mock data with API call to fetch blog posts
// Example: const [blogPosts, setBlogPosts] = useState([]);
// Example: useEffect(() => { fetchBlogPosts(); }, []);

// Get all blog posts from the dataset
const blogPosts = getAllBlogPosts();

// TODO: integrate with backend API here
// Replace mock data with API call to fetch categories
// Example: const [categories, setCategories] = useState([]);
// Example: useEffect(() => { fetchCategories(); }, []);

const categories = [
  "All",
  "Horoscope",
  "Kundli",
  "Remedies",
  "Numerology",
  "Vastu",
  "Astrology",
  "Spirituality",
  "Relationships",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // TODO: integrate with backend API here
  // Add loading state for blog posts data
  // Example: const [isLoading, setIsLoading] = useState(false);
  // Example: const [error, setError] = useState('');

  // TODO: integrate with backend API here
  // Add useEffect to fetch blog posts on component mount
  // Example: useEffect(() => {
  //   const fetchBlogPosts = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch('/api/blog/posts');
  //       const data = await response.json();
  //       setBlogPosts(data);
  //     } catch (error) {
  //       setError('Failed to fetch blog posts');
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchBlogPosts();
  // }, []);

  // TODO: integrate with backend API here
  // Add newsletter subscription functionality
  // Example: const handleNewsletterSubscribe = async (email: string) => {
  //   try {
  //     await fetch('/api/newsletter/subscribe', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ email })
  //     });
  //   } catch (error) {
  //     console.error('Failed to subscribe to newsletter:', error);
  //   }
  // };

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            YugaAstro Blog
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover insights, tips, and guidance from YugaAstro&apos;s expert astrologers
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-spiritual-gold text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-spiritual-gold/10 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-center">
          <p className="text-gray-600">
            Showing {filteredPosts.length} of {blogPosts.length} articles
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post: BlogPost) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try selecting a different category to find more articles.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Stay Updated with YugaAstro Newsletter
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get the latest horoscopes, astrological insights, and spiritual guidance from YugaAstro delivered to your inbox every week.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spiritual-gold focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Featured Topics */}
        <div className="mt-8 bg-gradient-to-br from-spiritual-cream to-white rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Popular Topics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.slice(1).map((category) => (
              <div
                key={category}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-200 cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                <h3 className="font-semibold text-gray-900">{category}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {blogPosts.filter(post => post.category === category).length} articles
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 