/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bit.ly', 'upload.wikimedia.org']
  },
  swcMinify: true,
}

module.exports = nextConfig
