import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import { Astrologer } from '../types/astrologer';

export const fetchAstrologers = async (): Promise<Astrologer[]> => {
  try {
    const astrologersRef = collection(db, 'astrologers');
    const snapshot = await getDocs(astrologersRef);
    
    const astrologers: Astrologer[] = [];
    
    snapshot.forEach((doc) => {
      const data = doc.data();
      astrologers.push({
        id: doc.id,
        name: data.name || '',
        rating: data.rating || 0,
        experience: data.experience || 0,
        price_per_min: data.price || 0,
        language: Array.isArray(data.language) ? data.language : [data.language || 'English'],
        image_url: data.image_url || '',
        specialization: Array.isArray(data.specialization) ? data.specialization : ['Vedic Astrology'],
        description: data.description || ''
      });
    });
    
    return astrologers;
  } catch (error) {
    console.error('Error fetching astrologers:', error);
    throw new Error('Failed to fetch astrologers');
  }
};

export const fetchAstrologerById = async (id: string): Promise<Astrologer | null> => {
  try {
    const astrologerRef = doc(db, 'astrologers', id);
    const astrologerSnap = await getDoc(astrologerRef);
    
    if (astrologerSnap.exists()) {
      const data = astrologerSnap.data();
      return {
        id: astrologerSnap.id,
        name: data.name || '',
        rating: data.rating || 0,
        experience: data.experience || 0,
        price_per_min: data.price || 0,
        language: Array.isArray(data.language) ? data.language : [data.language || 'English'],
        image_url: data.image_url || '',
        specialization: Array.isArray(data.specialization) ? data.specialization : ['Vedic Astrology'],
        description: data.description || ''
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching astrologer:', error);
    throw new Error('Failed to fetch astrologer');
  }
};

// Fallback data in case Firestore is not available
export const getFallbackAstrologers = (): Astrologer[] => {
  return [
    {
      id: '1',
      name: 'Pandit Rajesh Kumar',
      rating: 4.8,
      experience: 15,
      price_per_min: 50,
      language: ['Hindi', 'English'],
      image_url: '',
      specialization: ['Vedic Astrology', 'Kundli Analysis'],
      description: 'Expert in Vedic astrology with 15 years of experience'
    },
    {
      id: '2',
      name: 'Dr. Priya Sharma',
      rating: 4.9,
      experience: 12,
      price_per_min: 60,
      language: ['English', 'Hindi'],
      image_url: '',
      specialization: ['Career Guidance', 'Relationship Counseling'],
      description: 'Specialized in career and relationship counseling'
    },
    {
      id: '3',
      name: 'Acharya Amit Singh',
      rating: 4.7,
      experience: 20,
      price_per_min: 75,
      language: ['Hindi', 'Punjabi'],
      image_url: '',
      specialization: ['Marriage Compatibility', 'Business Astrology'],
      description: 'Expert in marriage compatibility and business astrology'
    }
  ];
};

// Get top astrologers (fallback function for static data)
export const getTopAstrologers = (limit: number = 4): Astrologer[] => {
  const fallbackAstrologers = getFallbackAstrologers();
  return fallbackAstrologers.slice(0, limit);
}; 