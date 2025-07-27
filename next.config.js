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
  
  // Experimental optimizasyonlar - sadeleştirildi
  experimental: {
    serverComponentsExternalPackages: ['sharp'],
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  
  // Security headers - sadeleştirildi
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
          }
        ]
      }
    ]
  },
  
  // Redirects - sadeleştirildi
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
  
  // Rewrites (iç yönlendirmeler) - şimdilik devre dışı
  // async rewrites() {
  //   return [
  //     // API proxy örnekleri (gerekirse)
  //     {
  //       source: '/api/:path*',
  //       destination: 'https://api.ismailcavus.av.tr/:path*',
  //     }
  //   ]
  // },
  
  // Webpack optimizasyonları - sadeleştirildi
  webpack: (config) => {
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
  
  // React strict mode
  reactStrictMode: true,
  
  // SWC minify (daha hızlı build)
  swcMinify: true,
}

module.exports = nextConfig 