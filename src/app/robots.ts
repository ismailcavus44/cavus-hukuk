import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',
        '/private/',
        '/api/',
        '/_next/',
        '/static/',
        '*.json',
        '*.xml',
        '*.txt',
      ],
    },
    sitemap: 'https://ismailcavus.av.tr/sitemap.xml',
    host: 'https://ismailcavus.av.tr',
  }
} 