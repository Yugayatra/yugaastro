'use client';

import { motion } from 'framer-motion';
import Hero from "@/components/Hero";
import AstrologerCard from "@/components/AstrologerCard";
import HoroscopeCard from "@/components/HoroscopeCard";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { Astrologer } from "@/types/astrologer";
import { BlogPost } from "@/types/blog";
import { getTopAstrologers } from "@/lib/astrologers";
import { getLatestBlogPosts } from "@/lib/blog";

// TODO: integrate with backend API here
// Replace mock data with API call to fetch top astrologers
// Example: const [topAstrologers, setTopAstrologers] = useState([]);
// Example: useEffect(() => { fetchTopAstrologers(); }, []);

// Get top 4 astrologers from the dataset
const topAstrologers = getTopAstrologers(4);

// TODO: integrate with backend API here
// Replace mock data with API call to fetch zodiac signs
// Example: const [zodiacSigns, setZodiacSigns] = useState([]);
// Example: useEffect(() => { fetchZodiacSigns(); }, []);

// Mock data for zodiac signs
const zodiacSigns = [
  { sign: "aries", signName: "Aries", dates: "Mar 21 - Apr 19", element: "fire" },
  { sign: "taurus", signName: "Taurus", dates: "Apr 20 - May 20", element: "earth" },
  { sign: "gemini", signName: "Gemini", dates: "May 21 - Jun 20", element: "air" },
  { sign: "cancer", signName: "Cancer", dates: "Jun 21 - Jul 22", element: "water" },
  { sign: "leo", signName: "Leo", dates: "Jul 23 - Aug 22", element: "fire" },
  { sign: "virgo", signName: "Virgo", dates: "Aug 23 - Sep 22", element: "earth" },
  { sign: "libra", signName: "Libra", dates: "Sep 23 - Oct 22", element: "air" },
  { sign: "scorpio", signName: "Scorpio", dates: "Oct 23 - Nov 21", element: "water" },
  { sign: "sagittarius", signName: "Sagittarius", dates: "Nov 22 - Dec 21", element: "fire" },
  { sign: "capricorn", signName: "Capricorn", dates: "Dec 22 - Jan 19", element: "earth" },
  { sign: "aquarius", signName: "Aquarius", dates: "Jan 20 - Feb 18", element: "air" },
  { sign: "pisces", signName: "Pisces", dates: "Feb 19 - Mar 20", element: "water" },
];

// Get latest blog posts from the dataset
const blogPosts = getLatestBlogPosts(4);

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  // TODO: integrate with backend API here
  // Add loading states for data fetching
  // Example: const [isLoadingAstrologers, setIsLoadingAstrologers] = useState(false);
  // Example: const [isLoadingBlogPosts, setIsLoadingBlogPosts] = useState(false);
  // Example: const [error, setError] = useState('');

  // TODO: integrate with backend API here
  // Add useEffect to fetch data on component mount
  // Example: useEffect(() => {
  //   const fetchHomeData = async () => {
  //     try {
  //       setIsLoadingAstrologers(true);
  //       const [astrologersResponse, blogResponse] = await Promise.all([
  //         fetch('/api/astrologers/top'),
  //         fetch('/api/blog/latest')
  //       ]);
  //       const astrologersData = await astrologersResponse.json();
  //       const blogData = await blogResponse.json();
  //       setTopAstrologers(astrologersData);
  //       setBlogPosts(blogData);
  //     } catch (error) {
  //       setError('Failed to fetch data');
  //     } finally {
  //       setIsLoadingAstrologers(false);
  //       setIsLoadingBlogPosts(false);
  //     }
  //   };
  //   fetchHomeData();
  // }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Top Astrologers Section */}
      <motion.section 
        className="py-12 sm:py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            variants={itemVariants}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              YugaAstro&apos;s Top Astrologers
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with our verified and experienced astrologers for personalized guidance
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
          >
            {topAstrologers.map((astrologer: Astrologer, index: number) => (
              <motion.div
                key={astrologer.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <AstrologerCard astrologer={astrologer} />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-6 sm:mt-8"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="/astrologers"
              className="inline-flex items-center px-6 sm:px-8 py-3 bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200 text-sm sm:text-base touch-manipulation"
            >
              View All Astrologers
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Horoscope Cards Section */}
      <motion.section 
        className="py-12 sm:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            variants={itemVariants}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Your Daily Horoscope
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what the stars have in store for you today, this week, and this month with YugaAstro
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
          >
            {zodiacSigns.map((sign, index) => (
              <motion.div
                key={sign.sign}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <HoroscopeCard {...sign} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Kundli Preview Section */}
      <motion.section 
        className="py-12 sm:py-16 bg-gradient-to-br from-spiritual-cream to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Get Your Free Kundli with YugaAstro
              </h2>
              <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Discover your life&apos;s blueprint with YugaAstro&apos;s comprehensive kundli analysis. 
                Get insights into your personality, career, relationships, and life path.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <motion.div 
                  className="flex items-center space-x-3"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-spiritual-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">Detailed birth chart analysis</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-spiritual-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">Planetary positions and influences</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-spiritual-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">Life predictions and remedies</span>
                </motion.div>
              </div>
              <motion.div 
                className="mt-6 sm:mt-8"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/kundli"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform text-sm sm:text-base touch-manipulation"
                >
                  Generate Free Kundli
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-64 sm:h-96 bg-gradient-to-br from-spiritual-gold/20 to-spiritual-deep-blue/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-spiritual-gold to-spiritual-dark-gold rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <svg className="w-8 h-8 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 font-medium">Your Kundli Chart</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">Click to generate your personalized birth chart</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Blog Highlights Section */}
      <motion.section 
        className="py-12 sm:py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            variants={itemVariants}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Latest from YugaAstro Blog
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover insights, tips, and guidance from YugaAstro&apos;s expert astrologers
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
          >
            {blogPosts.map((post: BlogPost, index: number) => (
              <motion.div
                key={post.slug}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-6 sm:mt-8"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center px-6 sm:px-8 py-3 border-2 border-spiritual-gold text-spiritual-gold rounded-full font-semibold hover:bg-spiritual-gold hover:text-white transition-all duration-200 text-sm sm:text-base touch-manipulation"
            >
              Read All Articles
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
