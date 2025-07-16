import { BlogPost, BlogPostsData } from '@/types/blog';
import blogPostsData from '@/data/blog-posts.json';

export const getAllBlogPosts = (): BlogPost[] => {
  return blogPostsData.blogPosts;
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPostsData.blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPostsData.blogPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
};

export const getBlogPostsByTag = (tag: string): BlogPost[] => {
  return blogPostsData.blogPosts.filter(post => 
    post.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
};

export const getLatestBlogPosts = (limit: number = 4): BlogPost[] => {
  return blogPostsData.blogPosts
    .sort((a, b) => new Date(b.published_date).getTime() - new Date(a.published_date).getTime())
    .slice(0, limit);
};

export const getRelatedBlogPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] => {
  const { category, tags, id } = currentPost;
  
  return blogPostsData.blogPosts
    .filter(post => 
      post.id !== id && (
        post.category === category ||
        post.tags.some(tag => tags.includes(tag))
      )
    )
    .sort((a, b) => new Date(b.published_date).getTime() - new Date(a.published_date).getTime())
    .slice(0, limit);
};

export const getAllBlogSlugs = (): string[] => {
  return blogPostsData.blogPosts.map(post => post.slug);
};

export const getAllCategories = (): string[] => {
  const categories = blogPostsData.blogPosts.map(post => post.category);
  return [...new Set(categories)];
};

export const getAllTags = (): string[] => {
  const allTags = blogPostsData.blogPosts.flatMap(post => post.tags);
  return [...new Set(allTags)];
};

// For use with getStaticProps
export const getStaticBlogData = () => {
  return {
    props: {
      blogPosts: getAllBlogPosts(),
      latestPosts: getLatestBlogPosts(4),
      categories: getAllCategories(),
      tags: getAllTags()
    }
  };
};

// For use with getStaticPaths
export const getStaticBlogPaths = () => {
  const slugs = getAllBlogSlugs();
  
  return {
    paths: slugs.map(slug => ({
      params: { slug }
    })),
    fallback: false
  };
};

// For individual blog post getStaticProps
export const getStaticBlogPostData = (slug: string) => {
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      notFound: true
    };
  }
  
  const relatedPosts = getRelatedBlogPosts(post, 3);
  
  return {
    props: {
      post,
      relatedPosts
    }
  };
}; 