'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm bg-white-daisy shadow-lg rounded-lg overflow-hidden z-50"
        >
          <div className="p-4 border-l-4 border-forest-green">
            <p className="text-sm text-dark-wood mb-3">
              We use cookies to improve your experience. By continuing to use our site, you agree to our{' '}
              <Link href="/privacy-policy" className="text-forest-green hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex justify-end">
              <button
                onClick={acceptCookies}
                className="bg-forest-green text-white-daisy px-4 py-2 rounded-md text-sm font-medium hover:bg-dark-wood transition-colors duration-300"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;