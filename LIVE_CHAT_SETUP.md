# Live Chat Widget Setup Guide

This guide explains how to set up live chat widgets for the YUGA ASTRO application.

## Available Providers

### 1. Tawk.to Setup

1. Go to [Tawk.to](https://www.tawk.to/) and create an account
2. Create a new widget for your website
3. Get your widget ID from the dashboard
4. Update the `LiveChat` component in `src/app/layout.tsx`:

```tsx
<LiveChat provider="tawk" widgetId="YOUR_ACTUAL_WIDGET_ID" />
```

### 2. Crisp.chat Setup

1. Go to [Crisp.chat](https://crisp.chat/) and create an account
2. Create a new website in your dashboard
3. Get your website ID from the settings
4. Update the `LiveChat` component in `src/app/layout.tsx`:

```tsx
<LiveChat provider="crisp" websiteId="YOUR_ACTUAL_WEBSITE_ID" />
```

## Features

- **Contact Form**: Name, email, and message fields with validation
- **Support Channels**: Email, WhatsApp, phone, and office address
- **Business Hours**: Displayed for user convenience
- **FAQ Section**: Common questions and answers
- **Responsive Design**: Works on all device sizes
- **Live Chat**: Optional integration with Tawk.to or Crisp.chat

## Contact Information

Update the contact information in `src/app/contact/page.tsx`:

```tsx
const contactInfo = [
  {
    icon: FaEnvelope,
    title: 'Email Support',
    value: 'your-actual-email@domain.com',
    link: 'mailto:your-actual-email@domain.com',
    description: 'Get in touch with our support team'
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp Support',
    value: '+91 YOUR_ACTUAL_PHONE',
    link: 'https://wa.me/91YOUR_ACTUAL_PHONE',
    description: 'Chat with us on WhatsApp'
  },
  // ... other contact methods
];
```

## Form Submission

The contact form currently simulates submission. To integrate with a real backend:

1. Update the `handleSubmit` function in `src/app/contact/page.tsx`
2. Add your API endpoint for form processing
3. Implement proper error handling and success states

## Styling

The contact page uses the existing design system:
- Spiritual gold gradient colors
- Consistent typography with Inter and Poppins fonts
- Responsive grid layout
- Hover effects and transitions
- Shadow and rounded corner styling 