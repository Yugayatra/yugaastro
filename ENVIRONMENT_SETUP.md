# Environment Variables Setup Guide

This guide will help you set up all the necessary environment variables for your YUGA ASTRO application.

## 📁 Create `.env.local` File

Create a `.env.local` file in your project root (`yuga-astro/.env.local`) with the following variables:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBPm10nEncp4kSC0HJBpHZ0n2XXc0GBH3M
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=yugaastro-80b05.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=yugaastro-80b05
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=yugaastro-80b05.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=204073087537
NEXT_PUBLIC_FIREBASE_APP_ID=1:204073087537:web:393530c5ea1c19b87e9b10
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-1MR2Y8VEJL

# Google Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Meta Pixel (Optional)
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXX

# Live Chat (Optional)
# Tawk.to Widget ID
NEXT_PUBLIC_TAWK_WIDGET_ID=YOUR_TAWK_WIDGET_ID

# Crisp.chat Website ID
NEXT_PUBLIC_CRISP_WEBSITE_ID=YOUR_CRISP_WEBSITE_ID
```

## 🔧 Configuration Details

### Firebase Configuration ✅ (Already Set)
Your Firebase configuration is already set up with the correct values for your project `yugaastro-80b05`.

### Google Analytics (Optional)
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or use existing one
3. Get your Measurement ID (starts with G-)
4. Replace `G-XXXXXXXXXX` with your actual ID

### Meta Pixel (Optional)
1. Go to [Facebook Business Manager](https://business.facebook.com/)
2. Create a new Pixel or use existing one
3. Get your Pixel ID
4. Replace `XXXXXXXXXXXXXXX` with your actual ID

### Live Chat (Optional)
Choose one of the following:

#### Tawk.to Setup
1. Go to [Tawk.to](https://www.tawk.to/)
2. Create account and get your widget ID
3. Replace `YOUR_TAWK_WIDGET_ID` with your actual ID

#### Crisp.chat Setup
1. Go to [Crisp.chat](https://crisp.chat/)
2. Create account and get your website ID
3. Replace `YOUR_CRISP_WEBSITE_ID` with your actual ID

## 🚀 How to Use

### 1. Create the File
```bash
# In your project root (yuga-astro folder)
touch .env.local
```

### 2. Add Variables
Copy the configuration above into your `.env.local` file.

### 3. Update Optional Services
Replace the placeholder values with your actual IDs for:
- Google Analytics
- Meta Pixel
- Live Chat (Tawk.to or Crisp.chat)

### 4. Restart Development Server
```bash
npm run dev
```

## 🔒 Security Notes

- ✅ `.env.local` is automatically ignored by Git
- ✅ Only `NEXT_PUBLIC_` variables are exposed to the browser
- ✅ Sensitive variables should not have `NEXT_PUBLIC_` prefix
- ✅ Never commit `.env.local` to version control

## 🧪 Testing

After setting up, test these features:

1. **Firebase Auth**: Try logging in with phone number
2. **Firestore**: Check if astrologers load from database
3. **Analytics**: Check browser console for GA/FB Pixel
4. **Live Chat**: Check if chat widget appears

## 📋 Current Status

- ✅ Firebase Configuration: Ready
- ⚠️ Google Analytics: Needs your GA ID
- ⚠️ Meta Pixel: Needs your Pixel ID
- ⚠️ Live Chat: Needs your widget/website ID

## 🆘 Troubleshooting

### Common Issues:

1. **"Firebase not initialized"**
   - Check if all Firebase variables are set correctly
   - Restart development server

2. **"Analytics not working"**
   - Verify GA ID format (starts with G-)
   - Check browser console for errors

3. **"Live chat not appearing"**
   - Verify widget/website ID
   - Check if service is properly configured

4. **"Environment variables not loading"**
   - Ensure file is named `.env.local` (not `.env`)
   - Restart development server
   - Check file location (should be in project root)

Your environment setup is now complete! 🎉 