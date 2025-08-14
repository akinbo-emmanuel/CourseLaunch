const { writeFileSync } = require('fs');
const { resolve } = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createGzip } = require('zlib');

// Define your website URL
const SITE_URL = 'https://courselaunch.app';

// Define your pages
const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/courses', changefreq: 'daily', priority: 0.9 },
  { url: '/pricing', changefreq: 'monthly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/login', changefreq: 'monthly', priority: 0.5 },
  { url: '/signup', changefreq: 'monthly', priority: 0.5 },
];

// Generate sitemap
async function generateSitemap() {
  try {
    const smStream = new SitemapStream({
      hostname: SITE_URL,
      xmlns: {
        // XML namespaces
        news: false,
        xhtml: false,
        image: false,
        video: false,
      },
    });

    const pipeline = smStream.pipe(createGzip());

    // Add each URL to the sitemap
    pages.forEach(page => {
      smStream.write({
        url: page.url,
        changefreq: page.changefreq,
        priority: page.priority,
        lastmod: new Date().toISOString(),
      });
    });

    smStream.end();

    // Get the sitemap as a string
    const sitemap = await streamToPromise(pipeline);

    // Write the sitemap to the public directory
    writeFileSync(
      resolve(__dirname, '../client/public/sitemap.xml'),
      sitemap.toString()
    );

    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();
