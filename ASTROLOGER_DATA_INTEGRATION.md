# Astrologer Data Integration

This document explains how the astrologer data is integrated into the YugaAstro platform, replacing hardcoded values with dynamic data from JSON files and Firebase Firestore.

## 📁 File Structure

```
src/
├── data/
│   └── astrologers.json          # Static JSON dataset
├── types/
│   └── astrologer.ts             # TypeScript interfaces
├── lib/
│   ├── astrologers.ts            # Utility functions for JSON data
│   └── firestore-astrologers.ts  # Firebase Firestore integration
└── components/
    └── AstrologerCard.tsx        # Updated to use dynamic data
```

## 🗃️ Data Structure

### Astrologer Interface
```typescript
interface Astrologer {
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
```

### Sample Data Fields
- **id**: Unique identifier (e.g., "astro_001")
- **name**: Astrologer's full name
- **rating**: Average rating (0-5 scale)
- **experience**: Years of experience
- **price_per_min**: Price per minute in INR
- **language**: Array of spoken languages
- **image_url**: Profile image path
- **specialization**: Array of specializations
- **description**: Brief description

## 🔧 Usage

### 1. Static JSON Data (Current Implementation)

```typescript
import { getTopAstrologers, getAllAstrologers } from '@/lib/astrologers';

// Get top 4 astrologers
const topAstrologers = getTopAstrologers(4);

// Get all astrologers
const allAstrologers = getAllAstrologers();
```

### 2. Firebase Firestore Integration (Future)

```typescript
import { 
  getTopAstrologersFromFirestore, 
  getAllAstrologersFromFirestore 
} from '@/lib/firestore-astrologers';

// Get top astrologers from Firestore
const topAstrologers = await getTopAstrologersFromFirestore(4);

// Get all astrologers from Firestore
const allAstrologers = await getAllAstrologersFromFirestore();
```

## 📊 Components Updated

### AstrologerCard Component
- Updated to accept `astrologer` prop instead of individual fields
- Displays specialization as comma-separated list
- Shows experience in years format
- Uses `price_per_min` for pricing display

### Main Page (`src/app/page.tsx`)
- Uses `getTopAstrologers(4)` to display top 4 astrologers
- Replaced hardcoded mock data with dynamic data

### Astrologers Page (`src/app/astrologers/page.tsx`)
- Uses `getAllAstrologers()` for complete astrologer list
- Updated filtering logic to work with new data structure
- Fixed language and specialization filtering

## 🔍 Filtering Capabilities

The astrologers page supports filtering by:
- **Search**: Name and specialization search
- **Rating**: Minimum rating filter
- **Experience**: Experience range filter
- **Language**: Language filter
- **Price Range**: Price per minute range

## 🚀 Migration to Firebase

### Current State
- Using static JSON data from `src/data/astrologers.json`
- All components updated to use new data structure
- Utility functions ready for Firebase integration

### Next Steps for Firebase Integration
1. **Update Firebase Config**: Replace placeholder config in `src/lib/firebase.ts`
2. **Import Firestore**: Add Firestore import to Firebase config
3. **Replace Functions**: Update pages to use Firestore functions
4. **Add Error Handling**: Implement fallback to JSON data
5. **Performance**: Add caching for better performance

### Example Migration
```typescript
// Current (JSON)
import { getTopAstrologers } from '@/lib/astrologers';
const astrologers = getTopAstrologers(4);

// Future (Firestore)
import { getTopAstrologersFromFirestore } from '@/lib/firestore-astrologers';
const astrologers = await getTopAstrologersFromFirestore(4);
```

## 📈 Benefits

1. **Scalability**: Easy to add/remove astrologers
2. **Consistency**: Standardized data structure
3. **Type Safety**: Full TypeScript support
4. **Flexibility**: Easy to extend with new fields
5. **Performance**: Optimized data loading
6. **Maintainability**: Centralized data management

## 🔧 Customization

### Adding New Fields
1. Update `Astrologer` interface in `src/types/astrologer.ts`
2. Add field to JSON data in `src/data/astrologers.json`
3. Update components to display new field
4. Update filtering logic if needed

### Adding New Filter Options
1. Add filter state in component
2. Update filtering logic in `filteredAstrologers`
3. Add UI controls for new filter
4. Update Firestore queries if using Firebase

## 📝 TODO

- [ ] Add astrologer images to public folder
- [ ] Implement Firebase Firestore integration
- [ ] Add real-time online status updates
- [ ] Implement astrologer availability scheduling
- [ ] Add review and rating system
- [ ] Create astrologer profile pages
- [ ] Add consultation booking system
- [ ] Implement payment integration 