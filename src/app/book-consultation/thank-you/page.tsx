'use client';

import React, { useEffect } from 'react';

const ThankYouPage: React.FC = () => {
  useEffect(() => {
    // Trigger Google Ads conversion event
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion_event_request_quote_1', {
        send_to: '16684346503/6A9aCJHn8M4ZEIfZ25M-', // Update with your conversion ID and label
        value: 1.0,
        currency: 'ZAR',
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-daisy-cream flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-serif mb-4">Thank You!</h1>
        <p className="text-lg">We've received your request and will be in touch within 24 hours to schedule your free consultation.</p>
      </div>
    </div>
  );
};

export default ThankYouPage;