'use client';

import { useState } from 'react';

export default function KundliPage() {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    gender: '',
  });

  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    try {
      // TODO: integrate with backend API here
      // API call to generate kundli based on birth details
      // Example: await generateKundliApi(formData);
      
      // TODO: integrate with backend API here
      // API call to save user's birth details
      // Example: await saveUserBirthDetailsApi(formData);
      
      // TODO: integrate with backend API here
      // API call to calculate planetary positions
      // Example: await calculatePlanetaryPositionsApi(formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // TODO: integrate with backend API here
      // Redirect to generated kundli page or show results
      // Example: router.push(`/kundli/result/${kundliId}`);
      
      alert('Kundli generation feature will be implemented with backend integration');
    } catch (error) {
      console.error('Error generating kundli:', error);
      alert('Failed to generate kundli. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Generate Your Free Kundli with YugaAstro
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover your life&apos;s blueprint with YugaAstro&apos;s comprehensive birth chart analysis
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
                          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Enter Your Birth Details for YugaAstro Kundli
              </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spiritual-gold focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spiritual-gold focus:border-transparent"
                />
              </div>

              {/* Time of Birth */}
              <div>
                <label htmlFor="timeOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                  Time of Birth *
                </label>
                <input
                  type="time"
                  id="timeOfBirth"
                  name="timeOfBirth"
                  value={formData.timeOfBirth}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spiritual-gold focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Please provide the exact time of birth for accurate results
                </p>
              </div>

              {/* Place of Birth */}
              <div>
                <label htmlFor="placeOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                  Place of Birth *
                </label>
                <input
                  type="text"
                  id="placeOfBirth"
                  name="placeOfBirth"
                  value={formData.placeOfBirth}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spiritual-gold focus:border-transparent"
                  placeholder="City, State, Country"
                />
              </div>

              {/* Gender */}
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                  Gender *
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spiritual-gold focus:border-transparent"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-spiritual-gold to-spiritual-dark-gold text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating Kundli...
                  </div>
                ) : (
                  'Generate Free Kundli'
                )}
              </button>
            </form>

            {/* Benefits */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What You&apos;ll Get</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-spiritual-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Detailed birth chart analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-spiritual-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Planetary positions and influences</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-spiritual-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Life predictions and remedies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-spiritual-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Career and relationship insights</span>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
                          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                YugaAstro Kundli Preview
              </h2>
            
            <div className="bg-gradient-to-br from-spiritual-gold/10 to-spiritual-deep-blue/10 rounded-xl p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-spiritual-gold to-spiritual-dark-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Your Birth Chart
              </h3>
              
              <p className="text-gray-600 mb-6">
                Enter your birth details to generate a comprehensive kundli analysis including planetary positions, 
                house placements, and life predictions.
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white/50 rounded-lg p-3">
                  <div className="font-semibold text-gray-900">Sun Sign</div>
                  <div className="text-gray-600">Will be calculated</div>
                </div>
                <div className="bg-white/50 rounded-lg p-3">
                  <div className="font-semibold text-gray-900">Moon Sign</div>
                  <div className="text-gray-600">Will be calculated</div>
                </div>
                <div className="bg-white/50 rounded-lg p-3">
                  <div className="font-semibold text-gray-900">Ascendant</div>
                  <div className="text-gray-600">Will be calculated</div>
                </div>
                <div className="bg-white/50 rounded-lg p-3">
                  <div className="font-semibold text-gray-900">Nakshatra</div>
                  <div className="text-gray-600">Will be calculated</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">What&apos;s Included</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Complete birth chart with 12 houses</div>
                <div>• Planetary positions and strengths</div>
                <div>• Dasha and transit predictions</div>
                <div>• Career and education guidance</div>
                <div>• Marriage and relationship analysis</div>
                <div>• Health and wealth predictions</div>
                <div>• Personalized remedies and solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 