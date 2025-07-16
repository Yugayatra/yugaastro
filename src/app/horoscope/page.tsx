'use client';

import HoroscopeCard from '@/components/HoroscopeCard';

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

export default function HoroscopePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            YugaAstro Daily Horoscope
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover what the stars have in store for you today, this week, and this month with YugaAstro
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Horoscope */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Today&apos;s Featured YugaAstro Horoscope
            </h2>
            <p className="text-gray-600 mb-6">
              Get insights into your day with personalized horoscope readings
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Daily</h3>
                <p className="text-sm opacity-90">Today&apos;s predictions and guidance</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Weekly</h3>
                <p className="text-sm opacity-90">This week&apos;s cosmic influences</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Monthly</h3>
                <p className="text-sm opacity-90">Monthly horoscope and trends</p>
              </div>
            </div>
          </div>
        </div>

        {/* All Zodiac Signs */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Your Zodiac Sign
          </h2>
          <p className="text-xl text-gray-600 text-center mb-8">
            Select your zodiac sign to read your personalized horoscope
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {zodiacSigns.map((sign) => (
            <HoroscopeCard key={sign.sign} {...sign} />
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Understanding Your Horoscope
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-spiritual-gold to-spiritual-dark-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Daily Horoscope</h3>
              <p className="text-gray-600 text-sm">
                Get daily insights into your love life, career, health, and overall well-being based on planetary positions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-spiritual-gold to-spiritual-dark-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Weekly Horoscope</h3>
              <p className="text-gray-600 text-sm">
                Plan your week ahead with detailed predictions about upcoming opportunities and challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-spiritual-gold to-spiritual-dark-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Monthly Horoscope</h3>
              <p className="text-gray-600 text-sm">
                Understand major trends and themes that will influence your life throughout the month.
              </p>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-gradient-to-br from-spiritual-cream to-white rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Tips for Reading Your Horoscope
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-spiritual-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Read with an open mind</h4>
                  <p className="text-gray-600 text-sm">Horoscopes provide guidance, not absolute predictions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-spiritual-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Focus on positive aspects</h4>
                  <p className="text-gray-600 text-sm">Use horoscopes to enhance your strengths and opportunities.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-spiritual-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Consider timing</h4>
                  <p className="text-gray-600 text-sm">Plan important activities during favorable planetary periods.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-spiritual-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Seek professional guidance</h4>
                  <p className="text-gray-600 text-sm">For major life decisions, consult with expert astrologers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 