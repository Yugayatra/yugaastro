'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-spiritual-cream via-white to-spiritual-cream">
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            className="absolute top-20 left-20 w-4 h-4 bg-spiritual-gold/20 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          ></motion.div>
          <motion.div 
            className="absolute top-40 right-32 w-3 h-3 bg-spiritual-gold/20 rounded-full"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-32 left-32 w-5 h-5 bg-spiritual-gold/20 rounded-full"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              duration: 3.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5
            }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-20 right-20 w-2 h-2 bg-spiritual-gold/20 rounded-full"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1.5
            }}
          ></motion.div>
        </div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold bg-clip-text text-transparent">
              YugaAstro
            </span>
          </h1>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Your trusted platform for personalized horoscope readings, 
            kundli analysis, and spiritual guidance. Connect with verified 
            expert astrologers for answers to life&apos;s most important questions.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          variants={buttonVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full sm:w-auto"
          >
            <Link 
              href="/astrologers"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold text-white rounded-full text-base sm:text-lg font-semibold hover:shadow-xl transition-all duration-300 transform block w-full sm:w-auto touch-manipulation"
            >
              Talk Now
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full sm:w-auto"
          >
            <Link 
              href="/kundli"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-spiritual-gold text-spiritual-gold rounded-full text-base sm:text-lg font-semibold hover:bg-spiritual-gold hover:text-white transition-all duration-300 block w-full sm:w-auto touch-manipulation"
            >
              Get Free Kundli
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 text-gray-500 px-4"
          variants={itemVariants}
        >
          <motion.div 
            className="flex items-center space-x-2 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-spiritual-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>100% Verified Astrologers</span>
          </motion.div>
          <motion.div 
            className="flex items-center space-x-2 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-spiritual-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>24/7 Available</span>
          </motion.div>
          <motion.div 
            className="flex items-center space-x-2 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-spiritual-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Secure & Private</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-spiritual-gold/10 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 bg-spiritual-deep-blue/10 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      ></motion.div>
    </section>
  );
};

export default Hero; 