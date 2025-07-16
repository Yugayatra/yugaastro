const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, doc, setDoc } = require('firebase/firestore');

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPm10nEncp4kSC0HJBpHZ0n2XXc0GBH3M",
  authDomain: "yugaastro-80b05.firebaseapp.com",
  projectId: "yugaastro-80b05",
  storageBucket: "yugaastro-80b05.firebasestorage.app",
  messagingSenderId: "204073087537",
  appId: "1:204073087537:web:393530c5ea1c19b87e9b10",
  measurementId: "G-1MR2Y8VEJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Sample astrologer data
const astrologersData = [
  {
    name: "Pandit Rajesh Kumar",
    rating: 4.8,
    experience: 15,
    price: 50,
    language: ["Hindi", "English"],
    image_url: "",
    specialization: ["Vedic Astrology", "Kundli Analysis"],
    description: "Expert in Vedic astrology with 15 years of experience"
  },
  {
    name: "Dr. Priya Sharma",
    rating: 4.9,
    experience: 12,
    price: 60,
    language: ["English", "Hindi"],
    image_url: "",
    specialization: ["Career Guidance", "Relationship Counseling"],
    description: "Specialized in career and relationship counseling"
  },
  {
    name: "Acharya Amit Singh",
    rating: 4.7,
    experience: 20,
    price: 75,
    language: ["Hindi", "Punjabi"],
    image_url: "",
    specialization: ["Marriage Compatibility", "Business Astrology"],
    description: "Expert in marriage compatibility and business astrology"
  },
  {
    name: "Swami Lakshmi Devi",
    rating: 4.9,
    experience: 18,
    price: 80,
    language: ["Hindi", "Sanskrit"],
    image_url: "",
    specialization: ["Spiritual Healing", "Gemstone Consultation"],
    description: "Renowned spiritual healer and gemstone expert"
  },
  {
    name: "Pandit Suresh Reddy",
    rating: 4.6,
    experience: 14,
    price: 55,
    language: ["Telugu", "Hindi", "English"],
    image_url: "",
    specialization: ["Horoscope Reading", "Remedy Solutions"],
    description: "Expert in horoscope reading and remedy solutions"
  },
  {
    name: "Dr. Meera Iyer",
    rating: 4.8,
    experience: 16,
    price: 70,
    language: ["English", "Tamil"],
    image_url: "",
    specialization: ["Numerology", "Palmistry"],
    description: "Specialized in numerology and palmistry"
  },
  {
    name: "Acharya Deepak Verma",
    rating: 4.7,
    experience: 22,
    price: 90,
    language: ["Hindi", "Marathi"],
    image_url: "",
    specialization: ["Vastu Shastra", "Feng Shui"],
    description: "Expert in Vastu Shastra and Feng Shui"
  },
  {
    name: "Pandit Anjali Patel",
    rating: 4.9,
    experience: 13,
    price: 65,
    language: ["Gujarati", "Hindi", "English"],
    image_url: "",
    specialization: ["Love Compatibility", "Family Counseling"],
    description: "Specialized in love compatibility and family counseling"
  }
];

// Function to populate Firestore
async function populateAstrologers() {
  try {
    console.log('Starting to populate astrologers...');
    
    for (const astrologer of astrologersData) {
      // Add document with auto-generated ID
      const docRef = await addDoc(collection(db, 'astrologers'), astrologer);
      console.log(`Added astrologer: ${astrologer.name} with ID: ${docRef.id}`);
    }
    
    console.log('Successfully populated all astrologers!');
  } catch (error) {
    console.error('Error populating astrologers:', error);
  }
}

// Run the script
populateAstrologers(); 