import Image from 'next/image';
import Link from 'next/link';
import { Astrologer } from '../types/astrologer';

interface AstrologerCardProps {
  astrologer: Astrologer;
  isOnline?: boolean;
}

const AstrologerCard = ({ 
  astrologer, 
  isOnline = true 
}: AstrologerCardProps) => {
  const { id, name, rating, experience, price_per_min, specialization, language } = astrologer;
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-3 h-3 sm:w-4 sm:h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400' : 
          i < rating ? 'text-yellow-400 opacity-60' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const handleCallNow = async () => {
    // TODO: integrate with backend API here
    // API call to initiate call with astrologer
    // Example: await initiateCallApi(astrologerId, userId);
    console.log(`Initiating call with astrologer: ${id}`);
  };

  const handleChatNow = async () => {
    // TODO: integrate with backend API here
    // API call to initiate chat with astrologer
    // Example: await initiateChatApi(astrologerId, userId);
    console.log(`Initiating chat with astrologer: ${id}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group">
      {/* Header with Photo and Online Status */}
      <div className="relative bg-gradient-to-br from-spiritual-gold/10 to-spiritual-deep-blue/10 p-4 sm:p-6">
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Circular Photo */}
          <div className="relative">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-spiritual-gold to-spiritual-dark-gold rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-lg sm:text-2xl font-bold">
                {name.charAt(0)}
              </span>
            </div>
            {isOnline && (
              <div className="absolute -bottom-1 -right-1">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full border-3 border-white shadow-md flex items-center justify-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                </div>
              </div>
            )}
          </div>

          {/* Name and Rating */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate group-hover:text-spiritual-gold transition-colors duration-200">
              {name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 truncate mb-1 sm:mb-2">
              {specialization.join(', ')}
            </p>
            
            {/* Star Rating */}
            <div className="flex items-center space-x-1 mb-1">
              <div className="flex">
                {renderStars(rating)}
              </div>
              <span className="text-xs sm:text-sm text-gray-600 ml-1">
                ({rating.toFixed(1)})
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Experience and Price */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center space-x-2">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-spiritual-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm text-gray-600 font-medium">{experience} years</span>
          </div>
          
          <div className="text-right">
            <div className="text-base sm:text-lg font-bold text-spiritual-gold">₹{price_per_min}</div>
            <div className="text-xs text-gray-500">per minute</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 sm:gap-3">
          <button
            onClick={handleCallNow}
            className="flex-1 bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold text-white py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-center text-xs sm:text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 transform group-hover:shadow-xl touch-manipulation"
          >
            <div className="flex items-center justify-center space-x-1 sm:space-x-2">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Now</span>
            </div>
          </button>
          
          <button
            onClick={handleChatNow}
            className="flex-1 border-2 border-spiritual-gold text-spiritual-gold py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold hover:bg-spiritual-gold hover:text-white transition-all duration-200 group-hover:shadow-lg touch-manipulation"
          >
            <div className="flex items-center justify-center space-x-1 sm:space-x-2">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Chat Now</span>
            </div>
          </button>
        </div>

        {/* Quick Info */}
        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center space-x-1">
              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Verified</span>
            </span>
            <span className="flex items-center space-x-1">
              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>24/7 Available</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstrologerCard; 