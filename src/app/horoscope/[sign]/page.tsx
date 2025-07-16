import Link from 'next/link';
import { notFound } from 'next/navigation';

// TODO: integrate with backend API here
// Replace mock data with API call to fetch zodiac signs
// Example: const [zodiacSigns, setZodiacSigns] = useState([]);
// Example: useEffect(() => { fetchZodiacSigns(); }, []);

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

interface HoroscopePageProps {
  params: Promise<{
    sign: string;
  }>;
}

export default async function HoroscopeSignPage({ params }: HoroscopePageProps) {
  const { sign } = await params;
  const signData = zodiacSigns.find(s => s.sign.toLowerCase() === sign.toLowerCase());

  if (!signData) {
    notFound();
  }

  // TODO: integrate with backend API here
  // Add loading state for horoscope data
  // Example: const [isLoading, setIsLoading] = useState(false);
  // Example: const [error, setError] = useState('');

  // TODO: integrate with backend API here
  // Add useEffect to fetch horoscope data on component mount
  // Example: useEffect(() => {
  //   const fetchHoroscopeData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch(`/api/horoscope/${sign}/daily`);
  //       const data = await response.json();
  //       setHoroscopeData(data);
  //     } catch (error) {
  //       setError('Failed to fetch horoscope data');
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchHoroscopeData();
  // }, [sign]);

  // TODO: integrate with backend API here
  // Replace placeholder horoscope content with API data
  // Example: const dailyHoroscope = horoscopeData?.daily || 'Loading...';
  // Example: const weeklyHoroscope = horoscopeData?.weekly || 'Loading...';
  // Example: const monthlyHoroscope = horoscopeData?.monthly || 'Loading...';

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
            {signData.signName} Horoscope
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover what the stars have in store for {signData.signName} today
          </p>
          <p className="text-lg text-white/80 mt-2">
            {signData.dates} • {signData.element.charAt(0).toUpperCase() + signData.element.slice(1)} Element
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
              <span className="text-spiritual-gold font-medium">{signData.signName}</span>
            </li>
          </ol>
        </nav>

        {/* Horoscope Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Daily Horoscope */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Today&apos;s Horoscope</h2>
                <span className="text-sm text-gray-500">{new Date().toLocaleDateString()}</span>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Today brings exciting opportunities for {signData.signName}. The cosmic energy is aligned in your favor, 
                  creating a perfect moment to pursue your goals with confidence and determination.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your natural {signData.element} element is particularly strong today, enhancing your intuition and 
                  creative abilities. Trust your instincts and don&apos;t hesitate to take calculated risks.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Remember to stay grounded and maintain balance in all aspects of your life. The universe is supporting 
                  your journey, so embrace the positive energy flowing your way.
                </p>
              </div>
            </div>

            {/* Weekly Overview */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">This Week&apos;s Overview</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-spiritual-gold pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Love &amp; Relationships</h3>
                  <p className="text-gray-700">Communication is key this week. Express your feelings openly and honestly with your partner.</p>
                </div>
                
                <div className="border-l-4 border-spiritual-gold pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Career &amp; Finance</h3>
                  <p className="text-gray-700">A new opportunity may present itself. Stay alert and be ready to seize the moment.</p>
                </div>
                
                <div className="border-l-4 border-spiritual-gold pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Health &amp; Wellness</h3>
                  <p className="text-gray-700">Focus on maintaining a healthy routine. Physical activity will boost your energy levels.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <Link
                  href={`/horoscope/${sign}/daily`}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-spiritual-gold/10 transition-colors duration-200 group"
                >
                  <span className="font-medium text-gray-900 group-hover:text-spiritual-gold">Daily Horoscope</span>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-spiritual-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link
                  href={`/horoscope/${sign}/weekly`}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-spiritual-gold/10 transition-colors duration-200 group"
                >
                  <span className="font-medium text-gray-900 group-hover:text-spiritual-gold">Weekly Horoscope</span>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-spiritual-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link
                  href={`/horoscope/${sign}/monthly`}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-spiritual-gold/10 transition-colors duration-200 group"
                >
                  <span className="font-medium text-gray-900 group-hover:text-spiritual-gold">Monthly Horoscope</span>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-spiritual-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Lucky Numbers & Colors */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Today&apos;s Lucky</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Lucky Numbers</h4>
                  <div className="flex space-x-2">
                    <span className="w-8 h-8 bg-spiritual-gold text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
                    <span className="w-8 h-8 bg-spiritual-gold text-white rounded-full flex items-center justify-center text-sm font-bold">12</span>
                    <span className="w-8 h-8 bg-spiritual-gold text-white rounded-full flex items-center justify-center text-sm font-bold">23</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Lucky Colors</h4>
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compatibility */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Best Compatibility</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Aries</span>
                  <span className="text-sm font-medium text-green-600">95%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Leo</span>
                  <span className="text-sm font-medium text-green-600">90%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Sagittarius</span>
                  <span className="text-sm font-medium text-green-600">88%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Signs */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Explore Other Zodiac Signs
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {zodiacSigns.map((sign) => (
              <Link
                key={sign.sign}
                href={`/horoscope/${sign.sign}`}
                className={`p-4 rounded-xl text-center transition-all duration-200 hover:shadow-lg ${
                  sign.sign === signData.sign
                    ? 'bg-spiritual-gold text-white'
                    : 'bg-white text-gray-700 hover:bg-spiritual-gold/10'
                }`}
              >
                <div className="text-2xl mb-2">{getSignEmoji(sign.sign)}</div>
                <div className="text-sm font-medium">{sign.signName}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 