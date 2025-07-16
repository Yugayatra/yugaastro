'use client';

import { useEffect } from 'react';

interface LiveChatProps {
  provider: 'tawk' | 'crisp';
  widgetId?: string;
  websiteId?: string;
}

export default function LiveChat({ provider, widgetId, websiteId }: LiveChatProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (provider === 'tawk') {
      // Tawk.to integration
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://embed.tawk.to/' + (widgetId || 'YOUR_TAWK_WIDGET_ID') + '/default';
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      
      document.head.appendChild(script);

      return () => {
        const existingScript = document.querySelector(`script[src*="tawk.to"]`);
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
    }

    if (provider === 'crisp') {
      // Crisp.chat integration
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = websiteId || 'YOUR_CRISP_WEBSITE_ID';
      
      const script = document.createElement('script');
      script.src = 'https://client.crisp.chat/l.js';
      script.async = true;
      
      document.head.appendChild(script);

      return () => {
        const existingScript = document.querySelector(`script[src*="crisp.chat"]`);
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
    }
  }, [provider, widgetId, websiteId]);

  return null; // This component doesn't render anything visible
} 