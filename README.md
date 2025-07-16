# YugaAstro - Astrology Platform

A full responsive astrology platform built with Next.js and Tailwind CSS. YugaAstro connects you with expert astrologers online for personalized horoscope readings, kundli analysis, and spiritual guidance.

## 🚀 Features

### 🏠 Homepage
- **Hero Section**: Eye-catching hero with spiritual background and call-to-action buttons
- **Top Astrologers**: Featured astrologers with ratings, experience, and contact options
- **Horoscope Cards**: Interactive grid of all 12 zodiac signs with daily/weekly/monthly links
- **Kundli Preview**: Birth chart generation section with detailed benefits
- **Blog Highlights**: Latest articles and spiritual insights

### 📱 Responsive Design
- Fully responsive across mobile, tablet, and desktop
- Sticky navigation with smooth scroll effects
- Modern animations and hover effects
- Optimized for all screen sizes

### 🎨 Design System
- **Color Palette**: Gold, deep blue, and cream for spiritual branding
- **Typography**: Inter and Poppins fonts for elegant readability
- **Components**: Reusable UI components with consistent styling
- **Animations**: Smooth fade-in and slide-up animations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom theme
- **Language**: TypeScript for type safety
- **Fonts**: Inter and Poppins from Google Fonts
- **Icons**: Heroicons and custom SVG icons

## 📁 Project Structure

```
yuga-astro/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── layout.tsx            # Root layout with Navbar & Footer
│   │   ├── astrologers/
│   │   │   └── page.tsx          # Astrologers listing page
│   │   ├── kundli/
│   │   │   └── page.tsx          # Kundli generation page
│   │   ├── horoscope/
│   │   │   └── page.tsx          # Horoscope page
│   │   └── blog/
│   │       └── page.tsx          # Blog listing page
│   ├── components/
│   │   ├── Navbar.tsx            # Navigation component
│   │   ├── Hero.tsx              # Hero section component
│   │   ├── AstrologerCard.tsx    # Astrologer card component
│   │   ├── HoroscopeCard.tsx     # Zodiac sign card component
│   │   ├── BlogCard.tsx          # Blog post card component
│   │   └── Footer.tsx            # Footer component
│   └── styles/
│       └── globals.css           # Global styles
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd yuga-astro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Pages & Features

### 🏠 Homepage (`/`)
- Hero section with spiritual background
- Top astrologers showcase
- Horoscope cards for all zodiac signs
- Kundli preview section
- Blog highlights

### 👥 Astrologers (`/astrologers`)
- Grid layout of all astrologers
- Advanced filtering (rating, experience, language, price)
- Individual astrologer cards with contact options
- Responsive design for all devices

### 📊 Kundli (`/kundli`)
- Birth details form (name, date, time, place, gender)
- Real-time form validation
- Kundli preview section
- Benefits and features explanation

### ⭐ Horoscope (`/horoscope`)
- Complete zodiac sign grid
- Daily, weekly, and monthly horoscope links
- Featured horoscope section
- Tips for reading horoscopes

### 📝 Blog (`/blog`)
- Article grid with categories
- Category filtering system
- Newsletter signup
- Popular topics section

## 🎨 Customization

### Colors
The project uses a custom spiritual color palette defined in `tailwind.config.ts`:

```typescript
colors: {
  spiritual: {
    gold: '#d4af37',
    'deep-blue': '#1e3a8a',
    cream: '#fef7e0',
    'dark-gold': '#b8860b',
  }
}
```

### Fonts
- **Inter**: Primary sans-serif font
- **Poppins**: Secondary font for headings

### Components
All components are modular and reusable. Each component includes:
- TypeScript interfaces
- Responsive design
- Accessibility features
- Hover animations

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Import and use existing components
4. Follow the established design patterns

### Adding New Components

1. Create a new file in `src/components/`
2. Define TypeScript interfaces
3. Use Tailwind classes for styling
4. Export the component
5. Import and use in pages

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Future Enhancements

- [ ] Individual astrologer profile pages
- [ ] Blog post detail pages
- [ ] User authentication system
- [ ] Payment integration
- [ ] Real-time chat functionality
- [ ] Admin dashboard
- [ ] API integration
- [ ] SEO optimization
- [ ] PWA features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Icons from Heroicons
- Fonts from Google Fonts
- Built with Next.js and Tailwind CSS
- Spiritual design inspired by ancient wisdom

---

**YugaAstro** - Connecting you with the stars ✨
