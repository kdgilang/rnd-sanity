/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'cdn.sanity.io',
      'scbufdfxcrgxyzojwvpv.supabase.co'
    ]
  }
}

module.exports = nextConfig
