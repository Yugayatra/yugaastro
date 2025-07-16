'use client';

import { useState, useEffect } from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  service: string;
  avatar?: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const defaultTestimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      review: "YugaAstro helped me find clarity during a difficult time. The astrologer was incredibly knowledgeable and provided practical guidance that really made a difference in my life.",
      service: "Personal Consultation"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi, NCR",
      rating: 5,
      review: "The kundli analysis was spot on! The predictions about my career were accurate and the remedies suggested have been very effective. Highly recommend!",
      service: "Kundli Analysis"
    },
    {
      id: 3,
      name: "Anjali Patel",
      location: "Bangalore, Karnataka",
      rating: 5,
      review: "I was skeptical at first, but the horoscope readings have been incredibly accurate. The daily guidance has helped me make better decisions in my personal and professional life.",
      service: "Daily Horoscope"
    },
    {
      id: 4,
      name: "Suresh Reddy",
      location: "Hyderabad, Telangana",
      rating: 5,
      review: "The relationship compatibility analysis was eye-opening. It helped me understand my partner better and improved our communication significantly.",
      service: "Relationship Consultation"
    },
    {
      id: 5,
      name: "Meera Iyer",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      review: "Professional, caring, and accurate. The astrologer took time to understand my concerns and provided detailed solutions. The follow-up support is excellent.",
      service: "Career Guidance"
    },
    {
      id: 6,
      name: "Amit Singh",
      location: "Pune, Maharashtra",
      rating: 5,
      review: "Found the perfect timing for my business launch through their guidance. The predictions about market conditions were incredibly accurate. Thank you YugaAstro!",
      service: "Business Consultation"
    }
  ];

  const displayTestimonials = testimonials || defaultTestimonials;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, displayTestimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % displayTestimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + displayTestimonials.length) % displayTestimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-gradient-to-br from-spiritual-cream to-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how YugaAstro has helped thousands of people find guidance, clarity, and peace in their lives.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-spiritual-gold to-spiritual-dark-gold rounded-full flex items-center justify-center">
                  <FaQuoteLeft className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Review Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                &ldquo;{displayTestimonials[currentIndex].review}&rdquo;
              </blockquote>

              {/* Client Info */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {displayTestimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600 mb-2">
                  {displayTestimonials[currentIndex].location}
                </p>
                <div className="flex justify-center items-center space-x-1 mb-2">
                  {renderStars(displayTestimonials[currentIndex].rating)}
                </div>
                <span className="inline-block bg-spiritual-gold/10 text-spiritual-dark-gold px-3 py-1 rounded-full text-sm font-medium">
                  {displayTestimonials[currentIndex].service}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {displayTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-spiritual-gold scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-spiritual-gold mb-2">10,000+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-spiritual-gold mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-spiritual-gold mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
} 