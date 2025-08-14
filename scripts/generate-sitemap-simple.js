import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { SitemapStream } from 'sitemap';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

    // Collect all the data from the stream
    let sitemap = '';
    for await (const chunk of smStream) {
      sitemap += chunk.toString();
    }

    // Ensure the public directory exists
    const fs = require('fs');
    const publicDir = resolve(__dirname, '../client/public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Write the sitemap to the public directory
    writeFileSync(
      resolve(publicDir, 'sitemap.xml'),
      sitemap
    );

    console.log('Sitemap generated successfully at:', resolve(publicDir, 'sitemap.xml'));
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();
