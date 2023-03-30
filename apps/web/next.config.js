/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: ['@mentora/ui'],
  images: {
    domains: ['images.unsplash.com', 'raw.githubusercontent.com'],
  },
};

module.exports = nextConfig;
