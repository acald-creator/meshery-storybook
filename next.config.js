/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/api',
        destination: 'http://localhost:9081/api',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
