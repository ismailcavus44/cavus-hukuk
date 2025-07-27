/** @type {import('next').NextConfig} */
const nextConfig = {
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
      }
    ]
  },
  
  // Redirects
  async redirects() {
    return [
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