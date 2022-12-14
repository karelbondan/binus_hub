/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config){
    config.module.rules.push({
      test: /\.svg$/,
      use: '@svgr/webpack'
    })
    return config
  },
  images: {
    domains: ['bit.ly', 'upload.wikimedia.org']
  },
  swcMinify: true,
}

module.exports = nextConfig
