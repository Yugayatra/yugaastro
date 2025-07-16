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

interface WeeklyHoroscopePageProps {
  params: Promise<{
    sign: string;
  }>;
}

export default async function WeeklyHoroscopePage({ params }: WeeklyHoroscopePageProps) {
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
            {signData.signName} Weekly Horoscope
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your weekly cosmic forecast and guidance
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
              <span className="text-spiritual-gold font-medium">Weekly</span>
            </li>
          </ol>
        </nav>

        {/* Weekly Horoscope Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              This Week&apos;s Horoscope for {signData.signName}
            </h2>
            <p className="text-gray-600">
              {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} - {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          <div className="prose max-w-none">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Weekly Overview</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                This week brings a powerful surge of cosmic energy for {signData.signName}. The alignment of planets 
                creates an ideal environment for growth, transformation, and achieving your goals. Your natural 
                {signData.element} element is amplified, giving you the strength and clarity to navigate any challenges.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The universe is presenting you with opportunities to expand your horizons and step into your full potential. 
                Trust your instincts and embrace the positive changes coming your way.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Love & Relationships</h3>
                <p className="text-gray-700 leading-relaxed">
                  This week emphasizes deep emotional connections and meaningful conversations. If you&apos;re in a relationship, 
                  take time to express your feelings and listen to your partner&apos;s needs. Single {signData.signName}s may 
                  encounter someone who shares their values and life goals.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Career & Finance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Professional growth is highlighted this week. Your innovative ideas and leadership skills will be recognized. 
                  Consider taking on new responsibilities or exploring opportunities for advancement. Financial decisions 
                  should be made with careful consideration.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Health & Wellness</h3>
              <p className="text-gray-700 leading-relaxed">
                Focus on maintaining a balanced lifestyle this week. Physical activity will help channel your abundant energy, 
                while meditation or yoga can provide mental clarity. Pay attention to your emotional well-being and practice 
                self-care regularly.
              </p>
            </div>

            <div className="bg-gradient-to-r from-spiritual-gold/10 to-spiritual-dark-gold/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Weekly Lucky Elements</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🔢</div>
                  <div className="text-sm font-medium text-gray-700">Lucky Numbers</div>
                  <div className="text-lg font-bold text-spiritual-gold">3, 7, 12</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🎨</div>
                  <div className="text-sm font-medium text-gray-700">Lucky Colors</div>
                  <div className="text-lg font-bold text-spiritual-gold">Blue, Gold</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">💎</div>
                  <div className="text-sm font-medium text-gray-700">Lucky Stones</div>
                  <div className="text-lg font-bold text-spiritual-gold">Sapphire</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🌅</div>
                  <div className="text-sm font-medium text-gray-700">Best Days</div>
                  <div className="text-lg font-bold text-spiritual-gold">Tue, Fri</div>
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
            href={`/horoscope/${sign}/monthly`}
            className="flex-1 bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold text-white rounded-lg px-6 py-3 text-center font-medium hover:shadow-lg transition-all duration-200"
          >
            View Monthly Horoscope
          </Link>
        </div>
      </div>
    </div>
  );
} 