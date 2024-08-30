'use client';

import Script from 'next/script';

const GoogleAdsConversion = ({ conversionId, conversionLabel }: { conversionId: string, conversionLabel: string }) => {
  return (
    <>
      <Script
        id="google-ads-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${conversionId}');
          `,
        }}
      />
      <Script
        id="google-ads-conversion-event"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {'send_to': '${conversionId}/${conversionLabel}'});
          `,
        }}
      />
    </>
  );
};

export default GoogleAdsConversion;