/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    appDir: true, // Enable App Router
    turbo: true, // Enable Turbopack
  },
};

module.exports = nextConfig;
