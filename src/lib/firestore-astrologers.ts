import { collection, getDocs, doc, getDoc, query, where, orderBy, limit, DocumentData } from 'firebase/firestore';
import { db } from './firebase';
import { Astrologer } from '@/types/astrologer';

// Collection reference
const astrologersCollection = collection(db, 'astrologers');

// Get all astrologers from Firestore
export const getAllAstrologersFromFirestore = async (): Promise<Astrologer[]> => {
  try {
    const querySnapshot = await getDocs(astrologersCollection);
    const astrologers: Astrologer[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      astrologers.push({
        id: doc.id,
        name: data.name,
        rating: data.rating,
        experience: data.experience,
        price_per_min: data.price_per_min,
        language: data.language,
        image_url: data.image_url,
        specialization: data.specialization,
        description: data.description
      });
    });
    
    return astrologers;
  } catch (error) {
    console.error('Error fetching astrologers from Firestore:', error);
    throw error;
  }
};

// Get top astrologers by rating
export const getTopAstrologersFromFirestore = async (limitCount: number = 4): Promise<Astrologer[]> => {
  try {
    const q = query(
      astrologersCollection,
      where('isOnline', '==', true),
      orderBy('rating', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    const astrologers: Astrologer[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      astrologers.push({
        id: doc.id,
        name: data.name,
        rating: data.rating,
        experience: data.experience,
        price_per_min: data.price_per_min,
        language: data.language,
        image_url: data.image_url,
        specialization: data.specialization,
        description: data.description
      });
    });
    
    return astrologers;
  } catch (error) {
    console.error('Error fetching top astrologers from Firestore:', error);
    throw error;
  }
};

// Get astrologer by ID
export const getAstrologerByIdFromFirestore = async (id: string): Promise<Astrologer | null> => {
  try {
    const docRef = doc(db, 'astrologers', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        name: data.name,
        rating: data.rating,
        experience: data.experience,
        price_per_min: data.price_per_min,
        language: data.language,
        image_url: data.image_url,
        specialization: data.specialization,
        description: data.description
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching astrologer from Firestore:', error);
    throw error;
  }
};

// Get astrologers by language
export const getAstrologersByLanguageFromFirestore = async (language: string): Promise<Astrologer[]> => {
  try {
    const q = query(
      astrologersCollection,
      where('language', 'array-contains', language),
      orderBy('rating', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const astrologers: Astrologer[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      astrologers.push({
        id: doc.id,
        name: data.name,
        rating: data.rating,
        experience: data.experience,
        price_per_min: data.price_per_min,
        language: data.language,
        image_url: data.image_url,
        specialization: data.specialization,
        description: data.description
      });
    });
    
    return astrologers;
  } catch (error) {
    console.error('Error fetching astrologers by language from Firestore:', error);
    throw error;
  }
};

// Get astrologers by specialization
export const getAstrologersBySpecializationFromFirestore = async (specialization: string): Promise<Astrologer[]> => {
  try {
    const q = query(
      astrologersCollection,
      where('specialization', 'array-contains', specialization),
      orderBy('rating', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const astrologers: Astrologer[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      astrologers.push({
        id: doc.id,
        name: data.name,
        rating: data.rating,
        experience: data.experience,
        price_per_min: data.price_per_min,
        language: data.language,
        image_url: data.image_url,
        specialization: data.specialization,
        description: data.description
      });
    });
    
    return astrologers;
  } catch (error) {
    console.error('Error fetching astrologers by specialization from Firestore:', error);
    throw error;
  }
};

// Get astrologers by price range
export const getAstrologersByPriceRangeFromFirestore = async (minPrice: number, maxPrice: number): Promise<Astrologer[]> => {
  try {
    const q = query(
      astrologersCollection,
      where('price_per_min', '>=', minPrice),
      where('price_per_min', '<=', maxPrice),
      orderBy('price_per_min', 'asc')
    );
    
    const querySnapshot = await getDocs(q);
    const astrologers: Astrologer[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      astrologers.push({
        id: doc.id,
        name: data.name,
        rating: data.rating,
        experience: data.experience,
        price_per_min: data.price_per_min,
        language: data.language,
        image_url: data.image_url,
        specialization: data.specialization,
        description: data.description
      });
    });
    
    return astrologers;
  } catch (error) {
    console.error('Error fetching astrologers by price range from Firestore:', error);
    throw error;
  }
};

// For use with getServerSideProps
export const getServerSideAstrologersDataFromFirestore = async () => {
  try {
    const [astrologers, topAstrologers] = await Promise.all([
      getAllAstrologersFromFirestore(),
      getTopAstrologersFromFirestore(4)
    ]);
    
    return {
      props: {
        astrologers,
        topAstrologers
      }
    };
  } catch (error) {
    console.error('Error in getServerSideAstrologersDataFromFirestore:', error);
    return {
      props: {
        astrologers: [],
        topAstrologers: []
      }
    };
  }
}; 