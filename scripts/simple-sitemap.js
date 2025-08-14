import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define your site URL here
const siteUrl = 'https://aem-course.vercel.app';

// Define your pages here
const pages = [
  {
    url: '/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: '1.0'
  },
  {
    url: '/about',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.9',
    title: 'About the Mentor - Academic Excellence Masterclass'
  },
  {
    url: '/testimonials',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.8',
    title: 'Student Testimonials - Academic Excellence Masterclass'
  },
  {
    url: '/curriculum',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.8',
    title: 'Course Curriculum - Academic Excellence Masterclass'
  },
  {
    url: '/register',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.7',
    title: 'Register Now - Academic Excellence Masterclass'
  },
  {
    url: '/faq',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.5',
    title: 'Frequently Asked Questions - Academic Excellence Masterclass'
  },
  {
    url: '/contact',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.5',
    title: 'Contact Us - Academic Excellence Masterclass'
  }
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
