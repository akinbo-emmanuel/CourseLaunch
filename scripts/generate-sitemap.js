import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define your site URL here
const siteUrl = 'https://aem-course.vercel.app';

// Define your pages here with detailed metadata
const pages = [
  {
    url: '/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: '1.0',
    title: "Home - Academic Excellence Masterclass"
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
    priority: '0.6',
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
async function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
  xml += '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n';
  xml += '        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';

  // Add each page to the sitemap
  pages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${siteUrl}${page.url}</loc>\n`;
    xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
}

// Ensure the public directory exists
const publicDir = resolve(__dirname, '../client/public');
if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

// Generate and save the sitemap
generateSitemap()
  .then(xml => {
    const sitemapPath = resolve(publicDir, 'sitemap.xml');
    writeFileSync(sitemapPath, xml);
    console.log(`Sitemap generated successfully at: ${sitemapPath}`);
  })
  .catch(error => {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  });
