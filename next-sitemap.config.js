// For Vite-based projects, we'll use a custom build script
// This file is kept for reference but won't be used directly

// We'll create a custom sitemap generator in the build script
// This is a placeholder configuration
export const siteConfig = {
  siteUrl: 'https://courselaunch.app',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  outDir: 'dist', // Vite outputs to dist by default
}
