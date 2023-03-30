/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@mentora/ui'],
  images: {
    domains: ['images.unsplash.com', 'raw.githubusercontent.com'],
  },
};

module.exports = nextConfig;
