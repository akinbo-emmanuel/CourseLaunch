import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Track page views for analytics
  useEffect(() => {
    const handleRouteChange = (url) => {
      // Replace with your analytics tracking code
      if (window.gtag) {
        window.gtag('config', 'YOUR_GA_MEASUREMENT_ID', {
          page_path: url,
        });
      }
    };

    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#4f46e5" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>
      
      {/* Global site tag (gtag.js) - Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_MEASUREMENT_ID" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_GA_MEASUREMENT_ID', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
