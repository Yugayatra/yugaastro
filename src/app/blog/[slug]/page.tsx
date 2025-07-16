import { BlogPost, BlogPostProps } from '@/types/blog';
import { getStaticBlogPaths, getStaticBlogPostData } from '@/lib/blog';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import Image from 'next/image';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const paths = await getStaticBlogPaths();
  return paths.paths.map((path) => ({
    slug: path.params.slug,
  }));
}

// Generate static props for each blog post
async function getBlogPostData(slug: string) {
  const props = await getStaticBlogPostData(slug);
  return props.props;
}

const BlogPostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const blogData = await getBlogPostData(slug);
  
  if (!blogData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600">The requested blog post could not be found.</p>
        </div>
      </div>
    );
  }

  const { post, relatedPosts } = blogData;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <div className="flex items-center justify-center space-x-4 text-white/90 text-sm sm:text-base">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{formatDate(post.published_date)}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Image */}
            {post.featured_image && (
              <div className="mb-8">
                <div className="w-full h-64 sm:h-80 relative rounded-xl overflow-hidden">
                  <Image
                    src={post.featured_image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
              </div>
            )}

            {/* Article Content */}
            <article className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-spiritual-gold/10 text-spiritual-gold text-sm font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Markdown Content */}
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-3xl font-bold text-gray-900 mb-6">{children}</h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">{children}</h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">{children}</h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
                    ),
                    li: ({ children }) => (
                      <li className="text-gray-700">{children}</li>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-bold text-gray-900">{children}</strong>
                    ),
                    em: ({ children }) => (
                      <em className="italic text-gray-700">{children}</em>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-spiritual-gold pl-4 italic text-gray-600 mb-4">
                        {children}
                      </blockquote>
                    ),
                    code: ({ children }) => (
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                        {children}
                      </code>
                    ),
                    pre: ({ children }) => (
                      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
                        {children}
                      </pre>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-spiritual-gold to-spiritual-dark-gold rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {post.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{post.author}</h3>
                    <p className="text-sm text-gray-600">Expert Astrologer at YugaAstro</p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Related Posts */}
            {relatedPosts && relatedPosts.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost: BlogPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="block group"
                    >
                      <div className="flex items-start space-x-3">
                        {relatedPost.featured_image && (
                          <div className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={relatedPost.featured_image}
                              alt={relatedPost.title}
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-spiritual-gold transition-colors duration-200 line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {formatDate(relatedPost.published_date)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-spiritual-gold/10 to-spiritual-deep-blue/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Stay Updated
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Get the latest astrological insights and cosmic wisdom delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spiritual-gold focus:border-transparent"
                />
                <button className="w-full bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage; 