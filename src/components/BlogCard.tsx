import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const { slug, title, featured_image, published_date, excerpt, readTime, category } = post;
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
      {/* Image */}
      <div className="w-full h-40 sm:h-48 relative overflow-hidden">
        {featured_image ? (
          <Image
            src={featured_image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-spiritual-gold/20 to-spiritual-deep-blue/20 flex items-center justify-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-spiritual-gold to-spiritual-dark-gold rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Category and Date */}
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          {category && (
            <span className="px-2 sm:px-3 py-1 bg-spiritual-gold/10 text-spiritual-gold text-xs font-medium rounded-full">
              {category}
            </span>
          )}
          <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-500">
            <span>{published_date}</span>
            {readTime && (
              <>
                <span>•</span>
                <span>{readTime}</span>
              </>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        {excerpt && (
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">
            {excerpt}
          </p>
        )}

        {/* Read More Link */}
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-spiritual-gold hover:text-spiritual-dark-gold font-medium transition-colors duration-200 group text-sm sm:text-base touch-manipulation"
        >
          Read More
          <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard; 