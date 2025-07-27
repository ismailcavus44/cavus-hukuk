/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production optimizasyonları
  output: 'standalone',
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
  },
  
  // Font optimizasyonu
  optimizeFonts: true,
  
  // Experimental optimizasyonlar
  experimental: {
    serverComponentsExternalPackages: ['sharp'],
    optimizePackageImports: ['lucide-react'],
    scrollRestoration: true,
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/iletisim',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://www.openstreetmap.org https://maps.google.com https://www.google.com"
          }
        ]
      },
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
    ignoreBuildErrors: false,
  },
  
  // ESLint ayarları
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // Trailing slash ayarları
  trailingSlash: false,
  
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