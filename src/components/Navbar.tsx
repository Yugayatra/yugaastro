'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LoginModal from './LoginModal';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Talk to Astrologer', href: '/astrologers' },
    { name: 'Kundli', href: '/kundli' },
    { name: 'Horoscope', href: '/horoscope' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavLinkClick = (href: string) => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    
    // If it's the home page, scroll to top smoothly
    if (href === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-spiritual-gold/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-spiritual-gold to-spiritual-dark-gold rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">Y</span>
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold bg-clip-text text-transparent">
                YugaAstro
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavLinkClick(link.href)}
                  className="text-gray-700 hover:text-spiritual-gold transition-colors duration-200 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Sign In Button */}
            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <Link
                    href="/dashboard"
                    className="px-6 py-2 text-spiritual-gold hover:text-spiritual-dark-gold transition-colors duration-200 font-medium"
                  >
                    Dashboard
                  </Link>
                  <button 
                    onClick={logout}
                    className="px-6 py-2 text-red-600 hover:text-red-700 transition-colors duration-200 font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button 
                  onClick={() => setIsLoginModalOpen(true)}
                  className="px-6 py-2 text-spiritual-gold hover:text-spiritual-dark-gold transition-colors duration-200 font-medium"
                >
                  Sign In
                </button>
              )}
              <button className="px-6 py-2 bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold text-white rounded-full hover:shadow-lg transition-all duration-200 font-medium">
                Talk Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 rounded-md text-gray-700 hover:text-spiritual-gold hover:bg-gray-100 transition-colors duration-200 touch-manipulation"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavLinkClick(link.href)}
                    className="block px-4 py-3 text-gray-700 hover:text-spiritual-gold hover:bg-gray-50 rounded-lg transition-colors duration-200 text-base font-medium touch-manipulation"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 pb-2 border-t border-gray-200 space-y-2">
                  {isAuthenticated ? (
                    <>
                      <Link
                        href="/dashboard"
                        className="block w-full text-left px-4 py-3 text-spiritual-gold hover:text-spiritual-dark-gold hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium touch-manipulation"
                      >
                        Dashboard
                      </Link>
                      <button 
                        onClick={logout}
                        className="block w-full text-left px-4 py-3 text-red-600 hover:text-red-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium touch-manipulation"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <button 
                      onClick={() => setIsLoginModalOpen(true)}
                      className="block w-full text-left px-4 py-3 text-spiritual-gold hover:text-spiritual-dark-gold hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium touch-manipulation"
                    >
                      Sign In
                    </button>
                  )}
                  <button className="block w-full text-left px-4 py-3 mt-2 bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium touch-manipulation">
                    Talk Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={(phoneNumber) => {
          console.log('Login successful for:', phoneNumber);
          // Here you can handle successful login
          // For example, update user state, redirect, etc.
        }}
      />
    </>
  );
};

export default Navbar; 