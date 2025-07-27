/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production optimizasyonları
  output: 'standalone', // Docker için
  compress: true,
  poweredByHeader: false,
  
  // Image optimizasyonu
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ismailcavus.av.tr',
        port: '',
        pathname: '/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false, // WebP dönüştürme için gerekli
  },
  
  // Font optimizasyonu
  optimizeFonts: true,
  
  // Experimental optimizasyonlar
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
    scrollRestoration: true,
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cavus-hukuk-8lm1.vercel.app; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://*.supabase.co; frame-src 'self';"
          }
        ]
      },
      // İletişim sayfası için iframe izni
      {
        source: '/iletisim',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cavus-hukuk-8lm1.vercel.app; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://*.supabase.co; frame-src 'self' https://www.openstreetmap.org https://maps.google.com https://www.google.com;"
          }
        ]
      },
      // Sitemap için özel header
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600'
          }
        ]
      },
      // Robots.txt için özel header
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600'
          }
        ]
      }
    ]
  },
  
  // Redirects
  async redirects() {
    return [
      // Eski URL'lerden yeni URL'lere yönlendirme
      {
        source: '/ceza-avukati',
        destination: '/ankara-ceza-avukati',
        permanent: true,
      },
      {
        source: '/is-avukati',
        destination: '/ankara-is-avukati',
        permanent: true,
      },
      {
        source: '/bosanma-avukati',
        destination: '/ankara-bosanma-avukati',
        permanent: true,
      },
      {
        source: '/trafik-kazasi-avukati',
        destination: '/ankara-trafik-kazasi-avukati',
        permanent: true,
      },
      {
        source: '/icra-avukati',
        destination: '/ankara-icra-avukati',
        permanent: true,
      },
      {
        source: '/miras-avukati',
        destination: '/ankara-miras-avukati',
        permanent: true,
      },
      {
        source: '/idare-avukati',
        destination: '/ankara-idare-avukati',
        permanent: true,
      },
      // www olmadan gelen istekleri www'lu versiyona yönlendir
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'ismailcavus.av.tr',
          },
        ],
        destination: 'https://www.ismailcavus.av.tr/:path*',
        permanent: true,
      }
    ]
  },
  
  // Rewrites (iç yönlendirmeler)
  async rewrites() {
    return [
      // API proxy örnekleri (gerekirse)
      {
        source: '/api/:path*',
        destination: 'https://api.ismailcavus.av.tr/:path*',
      }
    ]
  },
  
  // Webpack optimizasyonları
  webpack: (config, { dev, isServer }) => {
    // Production optimizasyonları
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      }
    }
    
    return config
  },
  
  // TypeScript ayarları
  typescript: {
    // Production'da type checking'i atla (build hızını artırır)
    ignoreBuildErrors: false,
  },
  
  // ESLint ayarları
  eslint: {
    // Production'da ESLint'i atla (build hızını artırır)
    ignoreDuringBuilds: false,
  },
  
  // Trailing slash ayarları
  trailingSlash: false,
  
  // Base path (eğer subdirectory'de host ediliyorsa)
  // basePath: '',
  
  // Asset prefix (CDN için)
  // assetPrefix: 'https://cdn.ismailcavus.av.tr',
  
  // Output directory
  distDir: '.next',
  
  // Source maps (development için)
  productionBrowserSourceMaps: false,
  
  // Compression
  compress: true,
  
  // Powered by header'ı kaldır
  poweredByHeader: false,
  
  // React strict mode
  reactStrictMode: true,
  
  // SWC minify (daha hızlı build)
  swcMinify: true,
}

module.exports = nextConfig 