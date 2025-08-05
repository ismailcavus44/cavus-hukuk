/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

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
      // Supabase storage için
      {
        protocol: 'https',
        hostname: 'vptmbniqrrxqggqwldww.supabase.co',
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
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.vercel.app; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://*.supabase.co; frame-src 'self';"
          },
          // Agresif cache headers
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800'
          }
        ]
      },
      // Statik sayfalar için daha uzun cache
      {
        source: '/ankara-:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=604800, immutable'
          }
        ]
      },
      // Blog sayfaları için ISR cache
      {
        source: '/:slug',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400'
          }
        ]
      },
      // Kategori sayfaları için cache
      {
        source: '/hizmetler/:kategori',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800'
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
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cavus-hukuk-8lm1.vercel.app https://*.vercel.app; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://*.supabase.co; frame-src 'self' https://www.openstreetmap.org https://maps.google.com https://www.google.com;"
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600'
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
            value: 'public, max-age=3600, s-maxage=86400'
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
            value: 'public, max-age=3600, s-maxage=86400'
          }
        ]
      },
      // CSS/JS dosyaları için cache
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      // Görseller için cache
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
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
          // Vendor chunk'ları daha küçük parçalara böl
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
            enforce: true,
          },
          // React ve Next.js ayrı chunk
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 20,
          },
          // Supabase ayrı chunk
          supabase: {
            test: /[\\/]node_modules[\\/](@supabase)[\\/]/,
            name: 'supabase',
            chunks: 'all',
            priority: 15,
          },
          // UI kütüphaneleri ayrı chunk
          ui: {
            test: /[\\/]node_modules[\\/](lucide-react|@radix-ui)[\\/]/,
            name: 'ui',
            chunks: 'all',
            priority: 15,
          },
          // Common chunk
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      }
      
      // Tree shaking'i etkinleştir
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }

    // Server-only modüller için fallback
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        tls: false,
        dns: false,
        fs: false,
        path: false,
        os: false,
      };
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

module.exports = withBundleAnalyzer(nextConfig) 