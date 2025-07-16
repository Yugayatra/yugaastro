'use client';

import { useState, useEffect } from 'react';
import AstrologerCard from '@/components/AstrologerCard';
import { Astrologer } from '@/types/astrologer';
import { fetchAstrologers, getFallbackAstrologers } from '@/lib/astrologers';

export default function AstrologersPage() {
  const [allAstrologers, setAllAstrologers] = useState<Astrologer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedRating, setSelectedRating] = useState<string>('4.0');
  const [selectedExperience, setSelectedExperience] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 600]);

  // Fetch astrologers from Firestore
  useEffect(() => {
    const loadAstrologers = async () => {
      setIsLoading(true);
      try {
        const astrologers = await fetchAstrologers();
        setAllAstrologers(astrologers);
        setError('');
      } catch (err) {
        console.error('Failed to fetch astrologers:', err);
        // Use fallback data if Firestore fails
        setAllAstrologers(getFallbackAstrologers());
        setError('Using offline data. Some features may be limited.');
      } finally {
        setIsLoading(false);
      }
    };

    loadAstrologers();
  }, []);

  // Available languages for filter
  const availableLanguages = ["Hindi", "English", "Sanskrit", "Gujarati", "Marathi", "Punjabi"];

  // Filter astrologers based on all criteria
  const filteredAstrologers = allAstrologers.filter(astrologer => {
    // Search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesName = astrologer.name.toLowerCase().includes(query);
      const matchesSpecialization = astrologer.specialization.join(', ').toLowerCase().includes(query);
      if (!matchesName && !matchesSpecialization) return false;
    }

    // Rating filter (4 stars and above)
    if (selectedRating && astrologer.rating < parseFloat(selectedRating)) return false;

    // Experience filter
    if (selectedExperience) {
      const experienceYears = astrologer.experience;
      switch (selectedExperience) {
        case '0-2':
          if (experienceYears > 2) return false;
          break;
        case '3-5':
          if (experienceYears < 3 || experienceYears > 5) return false;
          break;
        case '6+':
          if (experienceYears < 6) return false;
          break;
      }
    }

    // Language filter
    if (selectedLanguage && !astrologer.language.includes(selectedLanguage)) return false;

    // Price range filter
    const price = astrologer.price_per_min;
    if (price < priceRange[0] || price > priceRange[1]) return false;

    return true;
  });

  // Get unique languages from astrologers
  const getUniqueLanguages = () => {
    const languages = new Set<string>();
    allAstrologers.forEach(astrologer => {
      astrologer.language.forEach(lang => languages.add(lang.trim()));
    });
    return Array.from(languages).sort();
  };

  const uniqueLanguages = getUniqueLanguages();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Connect with YugaAstro&apos;s Expert Astrologers
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            Connect with YugaAstro&apos;s verified and experienced astrologers for personalized guidance and solutions
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-spiritual-gold"></div>
            <p className="mt-4 text-gray-600">Loading astrologers...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-800">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Content - Only show when not loading */}
        {!isLoading && (
          <>
            {/* Search Bar */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search astrologers by name or specialization..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spiritual-gold focus:border-transparent text-gray-900 placeholder-gray-500 text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2 sm:gap-0">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Filters</h2>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRating('4.0');
                setSelectedExperience('');
                setSelectedLanguage('');
                setPriceRange([0, 600]);
              }}
              className="px-3 sm:px-4 py-2 text-spiritual-gold hover:text-spiritual-dark-gold font-medium transition-colors duration-200 text-sm sm:text-base touch-manipulation"
            >
              Clear All Filters
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Rating Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Minimum Rating
              </label>
              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spiritual-gold focus:border-transparent text-sm sm:text-base"
                aria-label="Filter by minimum rating"
              >
                <option value="4.0">4+ Stars</option>
                <option value="4.5">4.5+ Stars</option>
                <option value="4.8">4.8+ Stars</option>
              </select>
            </div>

            {/* Experience Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience
              </label>
              <select
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spiritual-gold focus:border-transparent text-sm sm:text-base"
                aria-label="Filter by experience level"
              >
                <option value="">Any Experience</option>
                <option value="0-2">0-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6+">6+ years</option>
              </select>
            </div>

            {/* Language Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spiritual-gold focus:border-transparent text-sm sm:text-base"
                aria-label="Filter by language"
              >
                <option value="">Any Language</option>
                {uniqueLanguages.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="600"
                  step="50"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider touch-manipulation"
                  aria-label="Price range slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹0</span>
                  <span>₹600</span>
                </div>
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedRating !== '4.0' || selectedExperience || selectedLanguage || priceRange[1] !== 600) && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {selectedRating !== '4.0' && (
                  <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-spiritual-gold/10 text-spiritual-gold">
                    {selectedRating}+ Stars
                    <button
                      onClick={() => setSelectedRating('4.0')}
                      className="ml-2 text-spiritual-gold hover:text-spiritual-dark-gold touch-manipulation"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedExperience && (
                  <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-spiritual-gold/10 text-spiritual-gold">
                    {selectedExperience} years
                    <button
                      onClick={() => setSelectedExperience('')}
                      className="ml-2 text-spiritual-gold hover:text-spiritual-dark-gold touch-manipulation"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedLanguage && (
                  <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-spiritual-gold/10 text-spiritual-gold">
                    {selectedLanguage}
                    <button
                      onClick={() => setSelectedLanguage('')}
                      className="ml-2 text-spiritual-gold hover:text-spiritual-dark-gold touch-manipulation"
                    >
                      ×
                    </button>
                  </span>
                )}
                {priceRange[1] !== 600 && (
                  <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-spiritual-gold/10 text-spiritual-gold">
                    Up to ₹{priceRange[1]}
                    <button
                      onClick={() => setPriceRange([0, 600])}
                      className="ml-2 text-spiritual-gold hover:text-spiritual-dark-gold touch-manipulation"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
          <p className="text-sm sm:text-base text-gray-600">
            Showing {filteredAstrologers.length} of {allAstrologers.length} astrologers
          </p>
          {searchQuery && (
            <p className="text-xs sm:text-sm text-gray-500">
              Search results for &quot;{searchQuery}&quot;
            </p>
          )}
        </div>

        {/* Astrologers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredAstrologers.map((astrologer) => (
            <AstrologerCard key={astrologer.id} astrologer={astrologer} />
          ))}
        </div>

        {/* No Results */}
        {filteredAstrologers.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No astrologers found</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              {searchQuery 
                ? `No astrologers match your search for "${searchQuery}".`
                : "Try adjusting your filters to find more astrologers."
              }
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRating('4.0');
                setSelectedExperience('');
                setSelectedLanguage('');
                setPriceRange([0, 600]);
              }}
              className="px-4 sm:px-6 py-2 sm:py-2 bg-spiritual-gold text-white rounded-lg hover:bg-spiritual-dark-gold transition-colors duration-200 text-sm sm:text-base touch-manipulation"
            >
              Clear All Filters
            </button>
          </div>
            )}
          </>
        )}
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #D4AF37;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #D4AF37;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          border: none;
        }
        .slider::-ms-thumb {
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #D4AF37;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
} 