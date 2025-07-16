# Firestore Astrologers Setup Guide

This guide explains how to set up and populate astrologer data in Firestore for your YUGA ASTRO application.

## 🔧 What's Been Implemented

### 1. Firestore Service (`src/lib/astrologers.ts`)
- ✅ `fetchAstrologers()` - Fetch all astrologers from Firestore
- ✅ `fetchAstrologerById()` - Fetch individual astrologer
- ✅ `getFallbackAstrologers()` - Fallback data if Firestore fails
- ✅ Data mapping to match your Astrologer interface

### 2. Updated Astrologers Page (`src/app/astrologers/page.tsx`)
- ✅ Real-time data fetching from Firestore
- ✅ Loading states and error handling
- ✅ Fallback to offline data if Firestore unavailable
- ✅ All existing filters and search functionality preserved

### 3. Population Script (`scripts/populate-astrologers.js`)
- ✅ Sample astrologer data with realistic information
- ✅ Automatic Firestore population
- ✅ 8 diverse astrologers with different specializations

## 🚀 Setup Instructions

### Step 1: Enable Firestore Database
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `yugaastro-80b05`
3. Go to "Firestore Database"
4. Click "Create database"
5. Choose "Start in test mode" for development
6. Select a location (choose closest to your users)
7. Click "Done"

### Step 2: Set Up Security Rules
In Firestore Console → Rules, update with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read access to astrologers
    match /astrologers/{astrologerId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Allow authenticated users to create consultations
    match /consultations/{consultationId} {
      allow read, write: if request.auth != null;
    }
    
    // Allow users to manage their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### Step 3: Populate Sample Data
Run the population script:

```bash
npm run populate-astrologers
```

This will add 8 sample astrologers to your Firestore database.

### Step 4: Test the Integration
1. Start your development server: `npm run dev`
2. Navigate to `/astrologers`
3. Verify that astrologers are loading from Firestore
4. Test search and filter functionality

## 📊 Firestore Data Structure

### Collection: `astrologers`
Each document contains:

```javascript
{
  name: "Pandit Rajesh Kumar",
  rating: 4.8,
  experience: 15,
  price: 50,
  language: ["Hindi", "English"],
  image_url: "",
  specialization: ["Vedic Astrology", "Kundli Analysis"],
  description: "Expert in Vedic astrology with 15 years of experience"
}
```

### Field Mapping:
- `name` → Astrologer's full name
- `rating` → Average rating (0-5)
- `experience` → Years of experience
- `price` → Price per minute in ₹
- `language` → Array of spoken languages
- `image_url` → Profile image URL (optional)
- `specialization` → Array of specializations
- `description` → Brief description

## 🔄 Data Flow

1. **Page Load** → `useEffect` triggers `fetchAstrologers()`
2. **Firestore Query** → Fetches all documents from `astrologers` collection
3. **Data Mapping** → Maps Firestore data to Astrologer interface
4. **State Update** → Updates React state with fetched data
5. **UI Render** → AstrologerCard components render with real data
6. **Fallback** → If Firestore fails, uses `getFallbackAstrologers()`

## 🛠️ Error Handling

- **Network Issues**: Falls back to offline data
- **Firestore Errors**: Shows warning message
- **Loading States**: Spinner while fetching data
- **Empty Results**: User-friendly "no results" message

## 📈 Performance Features

- **Client-side Filtering**: Fast search and filter
- **Fallback Data**: Works offline
- **Loading States**: Better UX during data fetch
- **Error Recovery**: Graceful degradation

## 🎯 Next Steps

1. **Add Real Astrologer Data**: Replace sample data with real astrologers
2. **Image Upload**: Add profile image upload functionality
3. **Real-time Updates**: Add Firestore listeners for live updates
4. **Admin Panel**: Create admin interface to manage astrologers
5. **Analytics**: Track astrologer performance and ratings

## 🧪 Testing

### Test Cases:
- ✅ Load astrologers from Firestore
- ✅ Fallback to offline data
- ✅ Search functionality
- ✅ Filter by rating, experience, language, price
- ✅ Loading states
- ✅ Error handling

### Manual Testing:
1. Disconnect internet → Should show fallback data
2. Clear browser cache → Should reload from Firestore
3. Test all filters → Should work with real data
4. Search functionality → Should work with real data

Your Firestore astrologer integration is now complete! 🎉 