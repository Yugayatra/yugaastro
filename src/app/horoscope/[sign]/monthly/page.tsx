import Link from 'next/link';
import { notFound } from 'next/navigation';

// Zodiac signs data
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

interface MonthlyHoroscopePageProps {
  params: Promise<{
    sign: string;
  }>;
}

export default async function MonthlyHoroscopePage({ params }: MonthlyHoroscopePageProps) {
  const { sign } = await params;
  const signData = zodiacSigns.find(s => s.sign.toLowerCase() === sign.toLowerCase());

  if (!signData) {
    notFound();
  }

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${getElementColor(signData.element)} py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">{getSignEmoji(signData.sign)}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {signData.signName} Monthly Horoscope
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your monthly cosmic forecast and long-term guidance
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-spiritual-gold transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <Link href="/horoscope" className="hover:text-spiritual-gold transition-colors">
                Horoscope
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <Link href={`/horoscope/${sign}`} className="hover:text-spiritual-gold transition-colors">
                {signData.signName}
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-spiritual-gold font-medium">Monthly</span>
            </li>
          </ol>
        </nav>

        {/* Monthly Horoscope Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              This Month&apos;s Horoscope for {signData.signName}
            </h2>
            <p className="text-gray-600">
              {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long'
              })} - Complete Monthly Forecast
            </p>
          </div>

          <div className="prose max-w-none">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Monthly Overview</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                This month brings a transformative period for {signData.signName}. The cosmic energies are creating 
                powerful opportunities for personal growth, career advancement, and spiritual development. Your natural 
                {signData.element} element is at its peak, providing you with the strength and wisdom to navigate 
                life&apos;s challenges with grace and determination.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The universe is aligning in your favor, presenting you with chances to manifest your dreams and 
                achieve your highest potential. Trust in the process and embrace the positive changes coming your way.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Love & Relationships</h3>
                <p className="text-gray-700 leading-relaxed">
                  This month emphasizes deep emotional connections and meaningful relationships. If you&apos;re in a 
                  partnership, focus on strengthening your bond through open communication and shared experiences. 
                  Single {signData.signName}s may encounter soulmate connections or deepen existing friendships.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Career & Finance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Professional growth and financial opportunities are abundant this month. Your leadership skills and 
                  innovative ideas will be recognized and rewarded. Consider pursuing new career paths or expanding 
                  your business ventures. Financial planning and investments should be approached with confidence.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Health & Wellness</h3>
              <p className="text-gray-700 leading-relaxed">
                Focus on holistic well-being this month. Physical activity will help channel your abundant energy, 
                while spiritual practices like meditation and yoga can provide mental clarity and emotional balance. 
                Pay attention to your emotional health and practice self-care regularly.
              </p>
            </div>

            <div className="bg-gradient-to-r from-spiritual-gold/10 to-spiritual-dark-gold/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Monthly Lucky Elements</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🔢</div>
                  <div className="text-sm font-medium text-gray-700">Lucky Numbers</div>
                  <div className="text-lg font-bold text-spiritual-gold">1, 4, 9, 22</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🎨</div>
                  <div className="text-sm font-medium text-gray-700">Lucky Colors</div>
                  <div className="text-lg font-bold text-spiritual-gold">Purple, Gold</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">💎</div>
                  <div className="text-sm font-medium text-gray-700">Lucky Stones</div>
                  <div className="text-lg font-bold text-spiritual-gold">Amethyst</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🌅</div>
                  <div className="text-sm font-medium text-gray-700">Best Days</div>
                  <div className="text-lg font-bold text-spiritual-gold">Mon, Thu</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={`/horoscope/${sign}`}
            className="flex-1 bg-white text-spiritual-gold border border-spiritual-gold rounded-lg px-6 py-3 text-center font-medium hover:bg-spiritual-gold hover:text-white transition-colors duration-200"
          >
            Back to {signData.signName} Overview
          </Link>
          <Link
            href={`/horoscope/${sign}/daily`}
            className="flex-1 bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold text-white rounded-lg px-6 py-3 text-center font-medium hover:shadow-lg transition-all duration-200"
          >
            View Daily Horoscope
          </Link>
        </div>
      </div>
    </div>
  );
} 