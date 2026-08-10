'use client';

import Script from 'next/script';

const GoogleTagManager = () => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-404119033"
        strategy="afterInteractive"
      />
      <Script id="google-tag-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-404119033');
        `}
      </Script>
    </>
  );
};

export default GoogleTagManager;
