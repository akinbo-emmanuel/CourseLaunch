module.exports = {
  title: 'Academic Excellence Masterclass – Official Mentor Landing Page',
  description: 'Discover the Academic Excellence Masterclass. Meet the mentor, explore testimonials, and register to unlock your academic potential.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://aem-course.vercel.app',
    site_name: 'Academic Excellence Masterclass',
    title: 'Academic Excellence Masterclass – Official Mentor Landing Page',
    description: 'Discover the Academic Excellence Masterclass. Meet the mentor, explore testimonials, and register to unlock your academic potential.',
    images: [
      {
        url: 'https://aem-course.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Academic Excellence Masterclass – Official Mentor Landing Page',
      },
    ],
  },
  twitter: {
    handle: '@aemcourse',
    site: '@aemcourse',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
    },
    {
      name: 'theme-color',
      content: '#4f46e5',
    },
    {
      name: 'keywords',
      content: 'academic excellence, masterclass, education, learning, online course, academic success, study skills, mentor, tutoring',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-16x16.png',
      sizes: '16x16',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
};
