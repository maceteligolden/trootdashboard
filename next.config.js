/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  serverRuntimeConfig: {
    headers: {
      'Content-Security-Policy': 'frame-ancestors \'none\';',
    },
  },

}

module.exports = nextConfig;