/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://courselaunch.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://courselaunch.app/server-sitemap.xml',
    ],
  },
  exclude: ['/server-sitemap.xml'],
  generateIndexSitemap: false,
  outDir: 'public',
};
