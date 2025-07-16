export interface Astrologer {
  id: string;
  name: string;
  rating: number;
  experience: number;
  price_per_min: number;
  language: string[];
  image_url: string;
  specialization: string[];
  description: string;
}

export interface AstrologersData {
  astrologers: Astrologer[];
} 