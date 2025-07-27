/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build traces'i tamamen devre dışı bırak
  output: 'standalone',
  
  // Image optimizasyonu
  images: {
    unoptimized: true,
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