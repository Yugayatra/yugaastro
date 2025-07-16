export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  published_date: string;
  author: string;
  excerpt: string;
  readTime: string;
  category: string;
  tags: string[];
  featured_image: string;
  content: string;
}

export interface BlogPostsData {
  blogPosts: BlogPost[];
}

export interface BlogPostParams {
  params: {
    slug: string;
  };
}

export interface BlogPostProps {
  post: BlogPost;
  relatedPosts?: BlogPost[];
} 