import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { SitemapStream } from 'sitemap';

// Get current directory in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define your website URL
const SITE_URL = 'https://aem-course.vercel.app';

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
    let sitemap = '';
    
    // Create sitemap XML header
    sitemap += '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    // Add each URL to the sitemap
    pages.forEach(page => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${SITE_URL}${page.url}</loc>\n`;
      sitemap += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${page.priority}</priority>\n`;
      sitemap += '  </url>\n';
    });
    
    // Close the urlset tag
    sitemap += '</urlset>';
    
    // Write the sitemap to the public directory
    const sitemapPath = resolve(__dirname, '../client/public/sitemap.xml');
    
    try {
      writeFileSync(sitemapPath, sitemap);
      console.log(`Sitemap generated successfully at: ${sitemapPath}`);
      process.exit(0); // Exit with success code
    } catch (writeError) {
      console.error('Error writing sitemap file:', writeError);
      process.exit(1); // Exit with error code
    }
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1); // Exit with error code
  }
}

// Run the sitemap generation
generateSitemap().catch(error => {
  console.error('Unhandled error in sitemap generation:', error);
  process.exit(1);
});
