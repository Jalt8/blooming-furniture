'use client';

import React, { useEffect } from 'react';

const ContactForm: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Only remove if script exists and is still in the DOM
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div style={{ height: '485px' }}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/BboAwIM7L2JGpdrHbrnj"
        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
        id="inline-BboAwIM7L2JGpdrHbrnj"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Contact Form"
        data-height="485"
        data-layout-iframe-id="inline-BboAwIM7L2JGpdrHbrnj"
        data-form-id="BboAwIM7L2JGpdrHbrnj"
        title="Contact Form"
      />
    </div>
  );
};

export default ContactForm;