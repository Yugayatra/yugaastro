# YugaAstro - Connect with Expert Astrologers

A modern platform connecting users with verified astrologers for personalized spiritual guidance.

## Features

- **Expert Astrologers**: Connect with verified and experienced astrologers
- **Horoscope Readings**: Daily, weekly, and monthly horoscopes for all zodiac signs
- **Blog & Articles**: Spiritual insights and astrological knowledge
- **User Authentication**: Secure phone-based authentication
- **Real-time Chat**: Live consultation support
- **Responsive Design**: Works seamlessly on all devices

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Phone Auth
- **Database**: Firestore
- **Deployment**: Vercel
- **Analytics**: Google Analytics, Meta Pixel

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables
4. Run development server: `npm run dev`

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
NEXT_PUBLIC_META_PIXEL_ID=your_pixel_id

# Live Chat
NEXT_PUBLIC_CRISP_WEBSITE_ID=your_crisp_id
```

## Deployment

The application is automatically deployed to Vercel on every push to the main branch.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

---

**Latest Update**: Fixed deployment issues and added missing dependencies for successful Vercel deployment.
