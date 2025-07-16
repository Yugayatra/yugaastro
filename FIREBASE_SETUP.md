# Firebase Setup Guide for YUGA ASTRO

This guide will help you set up Firebase for authentication and database functionality.

## 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter your project name (e.g., "yuga-astro")
4. Choose whether to enable Google Analytics (recommended)
5. Click "Create project"

## 2. Get Firebase Configuration

1. In your Firebase project console, click the gear icon ⚙️ next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>) to add a web app
5. Register your app with a nickname (e.g., "yuga-astro-web")
6. Copy the configuration object

## 3. Firebase Configuration ✅ COMPLETED

Your Firebase configuration has been set up with the following details:

**Project ID:** `yugaastro-80b05`  
**Project Name:** YugaAstro  
**Analytics ID:** `G-1MR2Y8VEJL`

The configuration is now hardcoded in `src/lib/firebase.ts` for immediate use. If you prefer environment variables, you can move the config to `.env.local`:

```env
# Firebase Configuration (Optional - currently hardcoded)
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBPm10nEncp4kSC0HJBpHZ0n2XXc0GBH3M
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=yugaastro-80b05.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=yugaastro-80b05
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=yugaastro-80b05.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=204073087537
NEXT_PUBLIC_FIREBASE_APP_ID=1:204073087537:web:393530c5ea1c19b87e9b10
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-1MR2Y8VEJL

# Analytics (from previous setup)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXX
```

## 4. Enable Authentication

1. In Firebase Console, go to "Authentication"
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable the authentication methods you want:
   - **Phone** (for OTP-based login)
   - **Email/Password** (optional)
   - **Google** (optional)

## 5. Set Up Firestore Database

1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" for development
4. Select a location (choose closest to your users)
5. Click "Done"

## 6. Security Rules (Optional)

For production, update Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Allow public read access to astrologers
    match /astrologers/{astrologerId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Allow authenticated users to create consultations
    match /consultations/{consultationId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 7. Usage in Your App

The Firebase configuration is now ready to use:

```typescript
import { auth, db } from '@/lib/firebase';
import { 
  signInWithPhoneNumber, 
  RecaptchaVerifier 
} from 'firebase/auth';
import { 
  collection, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc 
} from 'firebase/firestore';

// Example: Phone authentication
const sendOTP = async (phoneNumber: string) => {
  const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
    'size': 'invisible'
  });
  
  return await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
};

// Example: Firestore operations
const saveUserData = async (userId: string, userData: any) => {
  await setDoc(doc(db, 'users', userId), userData);
};

const getUserData = async (userId: string) => {
  const docRef = doc(db, 'users', userId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
};
```

## 8. Testing

1. Start your development server: `npm run dev`
2. Check browser console for any Firebase errors
3. Test authentication flow
4. Verify Firestore operations

## 9. Production Deployment

1. Update Firestore security rules for production
2. Set up proper authentication methods
3. Configure domain restrictions in Firebase Console
4. Set up proper environment variables in your hosting platform

## 10. Common Issues

- **CORS errors**: Add your domain to authorized domains in Firebase Console
- **Authentication errors**: Check if phone authentication is enabled
- **Firestore permission errors**: Review security rules
- **Environment variables**: Ensure all `NEXT_PUBLIC_` variables are set

## 11. Next Steps

1. Implement phone authentication in your login modal
2. Create user profiles in Firestore
3. Set up astrologer data management
4. Implement consultation booking system
5. Add real-time features with Firestore listeners

Your Firebase setup is now complete! 🚀 