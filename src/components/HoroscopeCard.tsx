import Link from 'next/link';

interface HoroscopeCardProps {
  sign: string;
  signName: string;
  dates: string;
  element: string;
}

const HoroscopeCard = ({ sign, signName, dates, element }: HoroscopeCardProps) => {
  const getSignEmoji = (sign: string) => {
    const emojis: { [key: string]: string } = {
      aries: '♈',
      taurus: '♉',
      gemini: '♊',
      cancer: '♋',
      leo: '♌',
      virgo: '♍',
      libra: '♎',
      scorpio: '♏',
      sagittarius: '♐',
      capricorn: '♑',
      aquarius: '♒',
      pisces: '♓'
    };
    return emojis[sign.toLowerCase()] || '⭐';
  };

  const getElementColor = (element: string) => {
    const colors: { [key: string]: string } = {
      fire: 'from-red-500 to-orange-500',
      earth: 'from-green-500 to-yellow-500',
      air: 'from-blue-500 to-cyan-500',
      water: 'from-blue-600 to-purple-600'
    };
    return colors[element.toLowerCase()] || 'from-gray-500 to-gray-600';
  };

  return (
    <Link href={`/horoscope/${sign}`} className="block">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden cursor-pointer group">
        {/* Header */}
        <div className={`bg-gradient-to-r ${getElementColor(element)} p-4 sm:p-6 text-white text-center`}>
          <div className="text-3xl sm:text-4xl mb-2">{getSignEmoji(sign)}</div>
          <h3 className="text-lg sm:text-xl font-semibold mb-1">{signName}</h3>
          <p className="text-xs sm:text-sm opacity-90">{dates}</p>
          <p className="text-xs opacity-75 capitalize">{element}</p>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <div className="space-y-2 sm:space-y-3">
            <div 
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-between p-2.5 sm:p-3 bg-gray-50 rounded-lg hover:bg-spiritual-gold/10 transition-colors duration-200 group touch-manipulation"
            >
              <Link
                href={`/horoscope/${sign}/daily`}
                className="flex items-center justify-between w-full"
              >
                <span className="font-medium text-gray-700 group-hover:text-spiritual-gold text-sm sm:text-base">Daily Horoscope</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-spiritual-gold transition-colors duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div 
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-between p-2.5 sm:p-3 bg-gray-50 rounded-lg hover:bg-spiritual-gold/10 transition-colors duration-200 group touch-manipulation"
            >
              <Link
                href={`/horoscope/${sign}/weekly`}
                className="flex items-center justify-between w-full"
              >
                <span className="font-medium text-gray-700 group-hover:text-spiritual-gold text-sm sm:text-base">Weekly Horoscope</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-spiritual-gold transition-colors duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div 
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-between p-2.5 sm:p-3 bg-gray-50 rounded-lg hover:bg-spiritual-gold/10 transition-colors duration-200 group touch-manipulation"
            >
              <Link
                href={`/horoscope/${sign}/monthly`}
                className="flex items-center justify-between w-full"
              >
                <span className="font-medium text-gray-700 group-hover:text-spiritual-gold text-sm sm:text-base">Monthly Horoscope</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-spiritual-gold transition-colors duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
            <div className="block w-full text-center py-2.5 sm:py-2 bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 text-sm sm:text-base touch-manipulation">
              View All Horoscopes
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HoroscopeCard; 