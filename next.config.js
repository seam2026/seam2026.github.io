const runtimeCaching = require('next-pwa/cache')

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  publicExcludes: ['!assets/**/*.mp4', '!noprecache/**/*'],
  runtimeCaching: [
    {
      urlPattern: /.*\.(?:mp4|webm)$/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'static-video-assets',
        expiration: {
          maxEntries: 4,
          maxAgeSeconds: 24 * 60 * 60 * 30 // 30 Days
        },
        rangeRequests: true,
      },
    },
    ...runtimeCaching,
  ],
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  devIndicators: false,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = withPWA(nextConfig)
