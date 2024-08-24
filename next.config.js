const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/images/**',
      },
    ],
    domains: ['example.com', 'res.cloudinary.com'], // Add your image domains here
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  env: {
    MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
    MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN,
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: 'your_cloud_name',
  },
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  swcMinify: true,
  experimental: {
    optimizeFonts: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);