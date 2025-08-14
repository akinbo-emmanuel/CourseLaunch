import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define your website URL
const SITE_URL = 'https://courselaunch.app';

// Define your pages
const pages = [
  { url: '/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: '1.0' },
  { url: '/courses', lastmod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: '0.9' },
  { url: '/pricing', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: '0.8' },
  { url: '/about', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: '0.7' },
  { url: '/contact', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: '0.7' },
  { url: '/login', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: '0.5' },
  { url: '/signup', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: '0.5' },
];

// Generate sitemap XML
function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>${SITE_URL}${page.url}</loc>
      <lastmod>${page.lastmod}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`).join('')}
</urlset>`;

  return sitemap;
}

// Ensure the public directory exists
const publicDir = resolve(__dirname, '../client/public');
if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

// Write the sitemap to the public directory
const sitemapPath = resolve(publicDir, 'sitemap.xml');
writeFileSync(sitemapPath, generateSitemap());

console.log(`Sitemap generated successfully at: ${sitemapPath}`);
