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

interface DailyHoroscopePageProps {
  params: Promise<{
    sign: string;
  }>;
}

export default async function DailyHoroscopePage({ params }: DailyHoroscopePageProps) {
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
            {signData.signName} Daily Horoscope
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your daily cosmic guidance for {new Date().toLocaleDateString()}
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
              <span className="text-spiritual-gold font-medium">Daily</span>
            </li>
          </ol>
        </nav>

        {/* Daily Horoscope Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Today&apos;s Horoscope for {signData.signName}
            </h2>
            <p className="text-gray-600">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          <div className="prose max-w-none">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">General Overview</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Today is a powerful day for {signData.signName}. The cosmic energy is perfectly aligned to support your 
                ambitions and dreams. Your natural {signData.element} element is particularly strong, giving you the 
                confidence and determination to tackle any challenges that come your way.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The universe is sending clear signals that this is the time to take action on your goals. Trust your 
                intuition and don&apos;t hesitate to make bold decisions. Your leadership qualities are shining brightly today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Love & Relationships</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your charisma is at an all-time high today. If you&apos;re single, you might encounter someone special 
                  who shares your passion for life. For those in relationships, this is a perfect day to express your 
                  feelings and strengthen your bond.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Career & Finance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Professional opportunities are abundant today. Your innovative ideas will be well-received by colleagues 
                  and superiors. Consider taking on new responsibilities or starting that project you&apos;ve been planning.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Health & Wellness</h3>
              <p className="text-gray-700 leading-relaxed">
                Your energy levels are high, making this an excellent day for physical activity. Consider trying a new 
                workout routine or outdoor activity. Pay attention to your mental health as well - meditation or yoga 
                could provide the perfect balance.
              </p>
            </div>

            <div className="bg-gradient-to-r from-spiritual-gold/10 to-spiritual-dark-gold/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Today&apos;s Lucky Elements</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🔢</div>
                  <div className="text-sm font-medium text-gray-700">Lucky Number</div>
                  <div className="text-lg font-bold text-spiritual-gold">7</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🎨</div>
                  <div className="text-sm font-medium text-gray-700">Lucky Color</div>
                  <div className="text-lg font-bold text-spiritual-gold">Red</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">💎</div>
                  <div className="text-sm font-medium text-gray-700">Lucky Stone</div>
                  <div className="text-lg font-bold text-spiritual-gold">Ruby</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🌅</div>
                  <div className="text-sm font-medium text-gray-700">Best Time</div>
                  <div className="text-lg font-bold text-spiritual-gold">Morning</div>
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
            href={`/horoscope/${sign}/weekly`}
            className="flex-1 bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold text-white rounded-lg px-6 py-3 text-center font-medium hover:shadow-lg transition-all duration-200"
          >
            View Weekly Horoscope
          </Link>
        </div>
      </div>
    </div>
  );
} 